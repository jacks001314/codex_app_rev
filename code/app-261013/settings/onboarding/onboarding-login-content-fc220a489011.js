import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  EPt as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  VDt as s,
  i3 as c,
  jDt as l,
  nSt as u,
  oIt as d,
  pIt as f,
  pLt as p,
  r3 as m,
  t3 as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
  zxt as b,
} from "./app-shared-bbfeca5e5737.js";
import { DPn as x, Ggr as S, TPn as C, Vgr as w, t_r as T } from "./app-initial-5851df3f6cb1.js";
var E, D;
function O() {
  return (O = e(() => {
    (o(),
      r(),
      S(),
      _(),
      (E = p({ allowedLoginMethods: f(d([`api`, `chatgpt`])).nullable() })),
      (D = u(n, (e, { get: t }) => {
        let { data: n, isError: r, isPending: i } = t(w, { hostId: e });
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
    { hostId: o } = e,
    s = a(n),
    c = b(D, o),
    l;
  return (
    r[0] !== o || r[1] !== c.status || r[2] !== s
      ? ((l = (0, j.jsx)(`div`, {
          className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description select-none`,
          children:
            c.status === `loading`
              ? (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  role: `status`,
                  children: [
                    (0, j.jsx)(m, { className: `h-4 w-4 text-default` }),
                    (0, j.jsx)(i, {
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
                        c.status === `unsupported`
                          ? (0, j.jsx)(i, {
                              id: `electron.loginMethods.unsupported`,
                              defaultMessage: `Update Codex on this machine to read its managed sign-in requirements`,
                              description: `An older app-server cannot expose configured managed login restrictions, so sign-in options are hidden`,
                            })
                          : null,
                        c.status === `ready`
                          ? (0, j.jsx)(i, {
                              id: `electron.loginMethods.noneAllowed`,
                              defaultMessage: `Your administrator has disabled all available sign-in methods`,
                              description: `No Desktop login method is permitted by managed requirements`,
                            })
                          : null,
                        c.status === `error`
                          ? (0, j.jsx)(i, {
                              id: `electron.loginMethods.error`,
                              defaultMessage: `Unable to load sign-in requirements`,
                              description: `Managed sign-in requirements could not be read; sign-in options remain hidden until retry succeeds`,
                            })
                          : null,
                      ],
                    }),
                    (0, j.jsx)(t, {
                      color: `secondary`,
                      onClick: () => {
                        (s.get(w, { hostId: o }).refetch(), s.get(T, o).refetch());
                      },
                      children: (0, j.jsx)(i, {
                        id: `electron.loginMethods.retry`,
                        defaultMessage: `Retry`,
                        description: `Retry reading managed sign-in requirements`,
                      }),
                    }),
                  ],
                }),
        })),
        (r[0] = o),
        (r[1] = c.status),
        (r[2] = s),
        (r[3] = l))
      : (l = r[3]),
    l
  );
}
var A, j;
function M() {
  return (M = e(() => {
    ((A = g()), o(), l(), h(), c(), S(), _(), O(), (j = v()));
  }))();
}
function N(e) {
  let n = (0, P.c)(42),
    {
      allowApiKey: r,
      allowChatGpt: a,
      apiKeyHelp: o,
      apiKeyValue: c,
      isApiKeyEntryVisible: l,
      isApiKeySignInPending: u,
      isChatGptSignInPending: d,
      onApiKeySecondaryAction: f,
      onApiKeySubmit: p,
      onApiKeyValueChange: m,
      onChatGptSignIn: h,
      onShowApiKeyEntry: g,
      apiKeySecondaryActionLabel: _,
    } = e,
    v = s(),
    y = (0, F.useId)();
  if (r && l) {
    let e;
    n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, I.jsx)(i, {
          id: `electron.onboarding.login.apikey.label`,
          defaultMessage: `OpenAI API key`,
          description: `Label for API key input on desktop onboarding`,
        })),
        (n[0] = e))
      : (e = n[0]);
    let r = o == null ? void 0 : y,
      a;
    n[1] === v
      ? (a = n[2])
      : ((a = v.formatMessage({
          id: `electron.onboarding.login.apikey.placeholder`,
          defaultMessage: `sk-…`,
          description: `Placeholder for API key input on desktop onboarding`,
        })),
        (n[1] = v),
        (n[2] = a));
    let s;
    n[3] === m ? (s = n[4]) : ((s = (e) => m(e.target.value)), (n[3] = m), (n[4] = s));
    let l;
    n[5] !== c || n[6] !== r || n[7] !== a || n[8] !== s
      ? ((l = (0, I.jsxs)(`label`, {
          className: `flex flex-col gap-2 text-base font-medium text-default`,
          children: [
            e,
            (0, I.jsx)(C, { "aria-describedby": r, autoFocus: !0, placeholder: a, value: c, onChange: s }),
          ],
        })),
        (n[5] = c),
        (n[6] = r),
        (n[7] = a),
        (n[8] = s),
        (n[9] = l))
      : (l = n[9]);
    let d;
    n[10] !== o || n[11] !== y
      ? ((d = o == null ? null : (0, I.jsx)(`div`, { id: y, children: o })),
        (n[10] = o),
        (n[11] = y),
        (n[12] = d))
      : (d = n[12]);
    let h;
    n[13] !== _ || n[14] !== f
      ? ((h = (0, I.jsx)(t, {
          className: `flex-1 justify-center`,
          color: `secondary`,
          size: `large`,
          onClick: f,
          children: _,
        })),
        (n[13] = _),
        (n[14] = f),
        (n[15] = h))
      : (h = n[15]);
    let g;
    n[16] !== c || n[17] !== u
      ? ((g = c.trim().length === 0 || u), (n[16] = c), (n[17] = u), (n[18] = g))
      : (g = n[18]);
    let b;
    n[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, I.jsx)(i, {
          id: `electron.onboarding.login.apikey.continue`,
          defaultMessage: `Continue`,
          description: `Continue button label for API key sign-in on desktop onboarding`,
        })),
        (n[19] = b))
      : (b = n[19]);
    let x;
    n[20] !== u || n[21] !== p || n[22] !== g
      ? ((x = (0, I.jsx)(t, {
          className: `flex-1 justify-center`,
          onClick: p,
          disabled: g,
          loading: u,
          size: `large`,
          children: b,
        })),
        (n[20] = u),
        (n[21] = p),
        (n[22] = g),
        (n[23] = x))
      : (x = n[23]);
    let S;
    n[24] !== x || n[25] !== h
      ? ((S = (0, I.jsxs)(`div`, { className: `flex items-center gap-2`, children: [h, x] })),
        (n[24] = x),
        (n[25] = h),
        (n[26] = S))
      : (S = n[26]);
    let w;
    return (
      n[27] !== S || n[28] !== l || n[29] !== d
        ? ((w = (0, I.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [l, d, S] })),
          (n[27] = S),
          (n[28] = l),
          (n[29] = d),
          (n[30] = w))
        : (w = n[30]),
      w
    );
  }
  let b;
  n[31] !== a || n[32] !== d || n[33] !== h
    ? ((b = a
        ? (0, I.jsx)(t, {
            color: `primary`,
            className: `w-full justify-center py-2.5`,
            onClick: h,
            children: d
              ? (0, I.jsx)(i, {
                  id: `electron.onboarding.login.chatgpt.cancel`,
                  defaultMessage: `Cancel sign-in`,
                  description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
                })
              : (0, I.jsx)(i, {
                  id: `electron.onboarding.login.chatgpt.continue`,
                  defaultMessage: `Continue with ChatGPT`,
                  description: `Button label to sign in with ChatGPT on desktop onboarding`,
                }),
          })
        : null),
      (n[31] = a),
      (n[32] = d),
      (n[33] = h),
      (n[34] = b))
    : (b = n[34]);
  let x;
  n[35] !== r || n[36] !== d || n[37] !== g
    ? ((x =
        r && !d
          ? (0, I.jsx)(t, {
              color: `outline`,
              className: `w-full justify-center py-2.5`,
              onClick: g,
              children: (0, I.jsx)(i, {
                id: `electron.onboarding.login.apikey.open`,
                defaultMessage: `Enter API key`,
                description: `Button label to open API key entry on desktop onboarding`,
              }),
            })
          : null),
      (n[35] = r),
      (n[36] = d),
      (n[37] = g),
      (n[38] = x))
    : (x = n[38]);
  let S;
  return (
    n[39] !== b || n[40] !== x
      ? ((S = (0, I.jsxs)(`div`, {
          className: `flex w-full max-w-[200px] flex-col gap-3`,
          children: [b, x],
        })),
        (n[39] = b),
        (n[40] = x),
        (n[41] = S))
      : (S = n[41]),
    S
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = g()), (F = y()), l(), h(), x(), (I = v()));
  }))();
}
export { O as a, M as i, L as n, D as o, k as r, N as t };
//# sourceMappingURL=onboarding-login-content-fc220a489011.js.map
