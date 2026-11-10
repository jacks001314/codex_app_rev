import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  CW as n,
  Cpn as r,
  Opn as i,
  Spn as a,
  TW as o,
  hmn as s,
  kMt as c,
  kmn as l,
} from "./app-initial-f094ef01c64d.js";
function u(e) {
  let t = (0, d.c)(37),
    {
      apiKeyValue: a,
      isApiKeyEntryVisible: o,
      isApiKeySignInPending: s,
      isChatGptSignInPending: l,
      onApiKeySecondaryAction: u,
      onApiKeySubmit: p,
      onApiKeyValueChange: m,
      onChatGptSignIn: h,
      onShowApiKeyEntry: g,
      apiKeySecondaryActionLabel: _,
    } = e,
    v = i();
  if (o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, f.jsx)(r, {
          id: `electron.onboarding.login.apikey.label`,
          defaultMessage: `OpenAI API key`,
          description: `Label for API key input on desktop onboarding`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let i;
    t[1] === v
      ? (i = t[2])
      : ((i = v.formatMessage({
          id: `electron.onboarding.login.apikey.placeholder`,
          defaultMessage: `sk-…`,
          description: `Placeholder for API key input on desktop onboarding`,
        })),
        (t[1] = v),
        (t[2] = i));
    let o;
    t[3] === m ? (o = t[4]) : ((o = (e) => m(e.target.value)), (t[3] = m), (t[4] = o));
    let l;
    t[5] !== a || t[6] !== i || t[7] !== o
      ? ((l = (0, f.jsxs)(`label`, {
          className: `flex flex-col gap-2 text-base font-medium text-default`,
          children: [e, (0, f.jsx)(n, { autoFocus: !0, placeholder: i, value: a, onChange: o })],
        })),
        (t[5] = a),
        (t[6] = i),
        (t[7] = o),
        (t[8] = l))
      : (l = t[8]);
    let d;
    t[9] !== _ || t[10] !== u
      ? ((d = (0, f.jsx)(c, {
          className: `flex-1 justify-center`,
          color: `secondary`,
          size: `large`,
          onClick: u,
          children: _,
        })),
        (t[9] = _),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]);
    let h;
    t[12] !== a || t[13] !== s
      ? ((h = a.trim().length === 0 || s), (t[12] = a), (t[13] = s), (t[14] = h))
      : (h = t[14]);
    let g;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, f.jsx)(r, {
          id: `electron.onboarding.login.apikey.continue`,
          defaultMessage: `Continue`,
          description: `Continue button label for API key sign-in on desktop onboarding`,
        })),
        (t[15] = g))
      : (g = t[15]);
    let y;
    t[16] !== s || t[17] !== p || t[18] !== h
      ? ((y = (0, f.jsx)(c, {
          className: `flex-1 justify-center`,
          onClick: p,
          disabled: h,
          loading: s,
          size: `large`,
          children: g,
        })),
        (t[16] = s),
        (t[17] = p),
        (t[18] = h),
        (t[19] = y))
      : (y = t[19]);
    let b;
    t[20] !== d || t[21] !== y
      ? ((b = (0, f.jsxs)(`div`, { className: `flex items-center gap-2`, children: [d, y] })),
        (t[20] = d),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]);
    let x;
    return (
      t[23] !== l || t[24] !== b
        ? ((x = (0, f.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [l, b] })),
          (t[23] = l),
          (t[24] = b),
          (t[25] = x))
        : (x = t[25]),
      x
    );
  }
  let y;
  t[26] === l
    ? (y = t[27])
    : ((y = l
        ? (0, f.jsx)(r, {
            id: `electron.onboarding.login.chatgpt.cancel`,
            defaultMessage: `Cancel sign-in`,
            description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
          })
        : (0, f.jsx)(r, {
            id: `electron.onboarding.login.chatgpt.continue`,
            defaultMessage: `Continue with ChatGPT`,
            description: `Button label to sign in with ChatGPT on desktop onboarding`,
          })),
      (t[26] = l),
      (t[27] = y));
  let b;
  t[28] !== h || t[29] !== y
    ? ((b = (0, f.jsx)(c, {
        color: `primary`,
        className: `w-full justify-center py-2.5`,
        onClick: h,
        children: y,
      })),
      (t[28] = h),
      (t[29] = y),
      (t[30] = b))
    : (b = t[30]);
  let x;
  t[31] !== l || t[32] !== g
    ? ((x = l
        ? null
        : (0, f.jsx)(c, {
            color: `outline`,
            className: `w-full justify-center py-2.5`,
            onClick: g,
            children: (0, f.jsx)(r, {
              id: `electron.onboarding.login.apikey.open`,
              defaultMessage: `Enter API key`,
              description: `Button label to open API key entry on desktop onboarding`,
            }),
          })),
      (t[31] = l),
      (t[32] = g),
      (t[33] = x))
    : (x = t[33]);
  let S;
  return (
    t[34] !== b || t[35] !== x
      ? ((S = (0, f.jsxs)(`div`, {
          className: `flex w-full max-w-[200px] flex-col gap-3`,
          children: [b, x],
        })),
        (t[34] = b),
        (t[35] = x),
        (t[36] = S))
      : (S = t[36]),
    S
  );
}
var d,
  f,
  p = e(() => {
    ((d = l()), a(), t(), o(), (f = s()));
  });
export { p as n, u as t };
//# sourceMappingURL=onboarding-login-content-cfb6f644e3a7.js.map
