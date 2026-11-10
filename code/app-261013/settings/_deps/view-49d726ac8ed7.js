import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import {
  b5 as a,
  fbn as o,
  mgr as s,
  pbn as c,
  pgr as l,
  vgr as u,
  x5 as d,
} from "./app-initial-5851df3f6cb1.js";
import { c as f, l as p } from "./aeon-appearance-colors-5805c61f5268.js";
import { n as m, t as h } from "./view-c83a0c93c859.js";
function g(e = `https://chatgpt.com/backend-api`) {
  let t = new URL(e),
    n = t.hostname === `chatgpt-staging.com` || t.hostname.endsWith(`.chatgpt-staging.com`);
  if (!n && t.hostname !== `chatgpt.com`) throw Error(`Unsupported desktop backend`);
  let r = new URL(n ? `https://realtime.chatgpt-staging.com/v1/cua` : `https://realtime.chatgpt.com/v1/cua`),
    i = t.hostname.match(/^(dev-ephemeral-pr[0-9]+)(?:-|\.)/)?.[1];
  return (i != null && r.searchParams.set(`staging_env`, i), r.href);
}
var _;
function v() {
  return (v = e(() => {
    _ = `
import json, os, subprocess, time
launcher = ["/usr/local/bin/cloud-agent-desktop"]
# Reserved exit codes let the client report failures without exposing subprocess output.
if not os.path.isfile(launcher[0]):
    raise SystemExit(10)
if os.getuid() != 1000:
    raise SystemExit(11)
def status():
    result = subprocess.run(launcher + ["status"], capture_output=True, timeout=5)
    return json.loads(result.stdout) if result.returncode == 0 else None
ready = status()
if not ready or ready.get("status") != "ready":
    subprocess.Popen(
        launcher + ["serve"],
        env={**os.environ, "ORBIT_OS": "true", "BROWSER_HEADLESS": "false"},
        stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        start_new_session=True,
    )
    deadline = time.monotonic() + 95
    while True:
        ready = status()
        if ready and ready.get("status") == "ready":
            break
        if time.monotonic() >= deadline:
            raise SystemExit(12)
        time.sleep(1)
ready["session_id"] = os.environ["CODEX_CAAS_SESSION_ID"]
print(json.dumps(ready))
`;
  }))();
}
function y(e) {
  let n = (0, x.c)(19),
    r,
    i,
    o,
    u,
    d;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (o = n[3]), (u = n[4]), (d = n[5]))
    : (({ conversationId: r, orbitAvatar: u, orbitColor: d, orbitName: i, ...o } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = o),
      (n[4] = u),
      (n[5] = d));
  let p = u === void 0 ? l.avatar : u,
    m = d === void 0 ? s : d,
    g;
  n[6] === i
    ? (g = n[7])
    : ((g = c(i)
        ? (0, S.jsx)(t, {
            id: `restricted.aeon.computer.unnamedOrbitControl.brand.dot`,
            defaultMessage: `Your <b>dot</b> has control`,
            description: `Status shown while the dot assistant has computer control and its name has not loaded. dot is the untranslated term for the user's agent; the b tag makes it bold.`,
            values: { b },
          })
        : (0, S.jsx)(t, {
            id: `restricted.aeon.computer.orbitControl`,
            defaultMessage: `{orbitName} has control`,
            description: `Status below the live computer while the dot has mouse and keyboard control. The orbitName placeholder is the assistant's display name, shown in bold.`,
            values: { orbitName: (0, S.jsx)(`strong`, { children: i }) },
          })),
      (n[6] = i),
      (n[7] = g));
  let _ = c(i) ? null : i,
    v = m ?? `cyan`,
    y;
  n[8] === v ? (y = n[9]) : ((y = f(v)), (n[8] = v), (n[9] = y));
  let C;
  n[10] !== r || n[11] !== p
    ? ((C = (e, t) => (0, S.jsx)(a, { className: e, avatar: p, identity: r, animated: t })),
      (n[10] = r),
      (n[11] = p),
      (n[12] = C))
    : (C = n[12]);
  let w;
  return (
    n[13] !== o || n[14] !== g || n[15] !== _ || n[16] !== y || n[17] !== C
      ? ((w = (0, S.jsx)(h, {
          ...o,
          assistantControlLabel: g,
          computerName: _,
          controlColors: y,
          renderControlAvatar: C,
        })),
        (n[13] = o),
        (n[14] = g),
        (n[15] = _),
        (n[16] = y),
        (n[17] = C),
        (n[18] = w))
      : (w = n[18]),
    w
  );
}
function b(e) {
  return (0, S.jsx)(`strong`, { children: e });
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = r()), n(), m(), p(), u(), d(), o(), (S = i()));
  }))();
}
export { v as a, g as i, C as n, _ as r, y as t };
//# sourceMappingURL=view-49d726ac8ed7.js.map
