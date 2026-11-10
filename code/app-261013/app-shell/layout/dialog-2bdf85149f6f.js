import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Iot as n,
  Ixt as r,
  Lot as i,
  Pxt as a,
  VDt as o,
  hot as s,
  jDt as c,
  lot as l,
  nst as u,
  tst as d,
  vzt as f,
  wot as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import { iPr as h, sPr as g, skt as _ } from "./app-initial-5851df3f6cb1.js";
import { n as v, t as y } from "./username-dialog-4d83358ae975.js";
function b(e) {
  let n = (0, x.c)(25),
    { accountId: a, userId: c, initialUsername: l, onClose: d } = e,
    f = r(t),
    p = o(),
    m = u(),
    g;
  n[0] !== a || n[1] !== c
    ? ((g = [`chatgpt-account-username`, a, c]), (n[0] = a), (n[1] = c), (n[2] = g))
    : (g = n[2]);
  let v;
  n[3] === a
    ? (v = n[4])
    : ((v = (e) =>
        h.safePatch(`/wham/profiles/me`, {
          additionalHeaders: { "ChatGPT-Account-ID": a },
          expectedErrorStatuses: [400, 403, 404, 409, 422],
          requestBody: { username: e },
        })),
      (n[3] = a),
      (n[4] = v));
  let b;
  n[5] !== a || n[6] !== p || n[7] !== m || n[8] !== f || n[9] !== c
    ? ((b = async (e) => {
        let { profile: t } = e;
        (await m.cancelQueries({ queryKey: [`chatgpt-account-username`, a, c] }),
          m.setQueryData([`chatgpt-account-username`, a, c], t.username ?? null),
          m.invalidateQueries({ queryKey: [`chatgpt-user-profile`] }),
          m.invalidateQueries({ queryKey: [`profile`, `page`, c] }),
          m.invalidateQueries({ queryKey: [`profile`, `usage`, c] }),
          m.invalidateQueries({ queryKey: [`profile`, `identity`, c] }),
          f
            .get(s)
            .success(
              p.formatMessage({
                id: `settings.chatGpt.account.username.updated`,
                defaultMessage: `Username updated`,
                description: `Success toast after saving a public handle in the Edit username dialog in ChatGPT Account settings. Short confirmation for the end user.`,
              }),
            ));
      }),
      (n[5] = a),
      (n[6] = p),
      (n[7] = m),
      (n[8] = f),
      (n[9] = c),
      (n[10] = b))
    : (b = n[10]);
  let C;
  n[11] !== g || n[12] !== v || n[13] !== b
    ? ((C = { mutationKey: g, mutationFn: v, onSuccess: b }),
      (n[11] = g),
      (n[12] = v),
      (n[13] = b),
      (n[14] = C))
    : (C = n[14]);
  let { mutateAsync: w, isPending: T } = i(C),
    E = l ?? ``,
    D;
  n[15] === E ? (D = n[16]) : ((D = _(E)), (n[15] = E), (n[16] = D));
  let O;
  n[17] === w
    ? (O = n[18])
    : ((O = async (e) => {
        await w(e);
      }),
      (n[17] = w),
      (n[18] = O));
  let k;
  return (
    n[19] !== a || n[20] !== T || n[21] !== d || n[22] !== D.localUsername || n[23] !== O
      ? ((k = (0, S.jsx)(y, {
          value: D.localUsername,
          accountId: a,
          isSaving: T,
          presentation: `dialog`,
          onClose: d,
          onSave: O,
        })),
        (n[19] = a),
        (n[20] = T),
        (n[21] = d),
        (n[22] = D.localUsername),
        (n[23] = O),
        (n[24] = k))
      : (k = n[24]),
    k
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = f()), n(), d(), a(), c(), l(), p(), v(), g(), (S = m()));
  }))();
}
C();
export { b as UsernameDialog };
//# sourceMappingURL=dialog-2bdf85149f6f.js.map
