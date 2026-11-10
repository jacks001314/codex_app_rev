import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  _Mt as n,
  gMt as r,
  jDt as i,
  ob as a,
  sb as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  let n = (0, m.c)(8),
    { output: r } = e;
  if (r.length === 0) return null;
  let i, a, o;
  if (n[0] !== r) {
    let e = r.filter(p),
      s = r.filter(f);
    ((i = `font-normal`),
      (a =
        e.length > 0
          ? (0, h.jsxs)(`div`, {
              className: `rounded-3xl bg-execution-output p-4 text-xs`,
              children: [
                (0, h.jsx)(`div`, {
                  className: `mb-1 text-execution-output-label select-none`,
                  children: (0, h.jsx)(t, {
                    id: `chatgpt.pythonExecution.streamsLabel`,
                    defaultMessage: `STDOUT/STDERR`,
                    description: `Short label above printed output and warnings in expanded Python analysis in a ChatGPT conversation. STDOUT and STDERR are the technical names for standard output and standard error.`,
                  }),
                }),
                (0, h.jsx)(`pre`, {
                  className: `overflow-auto font-mono text-sm/6 text-execution-output outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,
                  dir: `ltr`,
                  tabIndex: 0,
                  children: e.map(d),
                }),
              ],
            })
          : null),
      (o = s.map(u)),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = o));
  } else ((i = n[1]), (a = n[2]), (o = n[3]));
  let s;
  return (
    n[4] !== i || n[5] !== a || n[6] !== o
      ? ((s = (0, h.jsxs)(`div`, { className: i, children: [a, o] })),
        (n[4] = i),
        (n[5] = a),
        (n[6] = o),
        (n[7] = s))
      : (s = n[7]),
    s
  );
}
function u(e, n) {
  let { kind: i, text: a } = e;
  return (0, h.jsxs)(
    `div`,
    {
      className:
        i === `error`
          ? `border-t border-default bg-execution-traceback`
          : `rounded-3xl bg-execution-output p-4 text-xs`,
      children: [
        i === `result`
          ? (0, h.jsx)(`div`, {
              className: `mb-1 text-execution-output-label select-none`,
              children: (0, h.jsx)(t, {
                id: `chatgpt.pythonExecution.resultLabel`,
                defaultMessage: `Result`,
                description: `Short label above the final value returned by expanded Python analysis in a ChatGPT conversation`,
              }),
            })
          : null,
        (0, h.jsx)(`pre`, {
          className: r(
            `overflow-auto font-mono outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,
            i === `error`
              ? `max-h-64 border-s-4 border-text-danger p-2 text-xs/4 text-execution-traceback`
              : `text-sm/6 text-execution-output`,
          ),
          dir: `ltr`,
          tabIndex: 0,
          children: a,
        }),
      ],
    },
    n,
  );
}
function d(e, t) {
  let { kind: n, text: r } = e;
  return (0, h.jsx)(
    `span`,
    { className: n === `stderr` ? `text-execution-output-error` : void 0, children: r },
    t,
  );
}
function f(e) {
  let { kind: t } = e;
  return t === `result` || t === `error`;
}
function p(e) {
  let { kind: t } = e;
  return t === `stdout` || t === `stderr`;
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = s()), n(), i(), (h = c()));
  }))();
}
function _(e) {
  let n = (0, v.c)(7),
    { item: r } = e,
    i;
  n[0] === r.code
    ? (i = n[1])
    : ((i =
        r.code.length > 0
          ? (0, y.jsx)(a, {
              content: r.code,
              language: `python`,
              title: (0, y.jsx)(t, {
                id: `chatgpt.pythonExecution.language`,
                defaultMessage: `Python`,
                description: `Programming language heading above the read-only source of a Python analysis`,
              }),
            })
          : null),
      (n[0] = r.code),
      (n[1] = i));
  let o;
  n[2] === r.output ? (o = n[3]) : ((o = (0, y.jsx)(l, { output: r.output })), (n[2] = r.output), (n[3] = o));
  let s;
  return (
    n[4] !== i || n[5] !== o
      ? ((s = (0, y.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-2`, children: [i, o] })),
        (n[4] = i),
        (n[5] = o),
        (n[6] = s))
      : (s = n[6]),
    s
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = s()), i(), o(), g(), (y = c()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=details-6df4c7ff3dc6.js.map
