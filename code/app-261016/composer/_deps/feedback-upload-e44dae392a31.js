import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  RFt as n,
  Vrt as r,
  Yst as i,
  Zst as a,
  qrt as o,
  sct as s,
  zFt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as l,
  BBr as u,
  CIr as d,
  D5n as f,
  FBr as p,
  HP as m,
  IBr as h,
  RBr as g,
  SIr as _,
  T5n as v,
  UP as y,
} from "./app-initial-ad16eaadf81f.js";
function b() {
  return function (e) {
    return (0, x.jsx)(m, { ...e });
  };
}
var x;
function S() {
  return (S = e(() => {
    (y(), (x = t()));
  }))();
}
async function C({
  initialCorrelationId: e,
  onStatusChange: t,
  onUploadDismissed: n,
  onBackgroundUploadSettled: r,
  onUploadError: i,
  submit: a,
}) {
  let o = !0,
    s = e,
    c = `uploading`,
    l = () => {
      ((o = !1), n(u, c));
    };
  function u() {
    ((o = !0),
      t({
        correlationId: s,
        onDismiss: l,
        onRetry:
          c === `failed`
            ? () => {
                c === `failed` && d();
              }
            : void 0,
        status: c,
      }));
  }
  async function d() {
    ((c = `uploading`), u());
    try {
      ((s = await a()), (c = `uploaded`));
    } catch (e) {
      let t = e instanceof Error ? e.message : String(e);
      ((c = t.includes(`feedback report was accepted, but some attachments failed to upload`)
        ? `incomplete`
        : t.includes(`sending feedback is disabled by configuration`)
          ? `disabled`
          : t.includes(`feedback uploads are already in progress`)
            ? `failed`
            : `unconfirmed`),
        i(e));
    }
    o ? u() : r(u, c);
  }
  await d();
}
function w({ scope: e, hostId: t, initialCorrelationId: n, internalSlackMessage: r, submit: a }) {
  let s = b(),
    u = e.get(d),
    f = !0,
    m = !1,
    h,
    _ = t === `durable` ? i : t,
    y = e.watch(({ get: t }) => {
      if (!f) return;
      if (t(g, _) == null) return (w(), x);
      let n = !0,
        r = p(e, _).subscribe({
          type: `notification`,
          key: { hostId: _ },
          methods: [`account/updated`, `account/login/completed`],
          listener: () => {
            n && x();
          },
        }),
        i;
      return (
        r.then(
          (e) => {
            if (!n) {
              e[Symbol.dispose]();
              return;
            }
            ((i = e), i.onRpcBroken(x), w());
          },
          () => {
            n && w();
          },
        ),
        () => {
          ((n = !1), r[Symbol.dispose](), i?.[Symbol.dispose](), x());
        }
      );
    });
  function x() {
    f && ((f = !1), y(), h?.close(), v(e, s));
  }
  function S(t, n) {
    if (!f) return;
    let r = h;
    ((h = void 0), r?.close());
    let i = `warning`;
    n === `uploading` ? (i = `info`) : n === `uploaded` && (i = `success`);
    let a = e
      .get(o)
      [i](
        u.formatMessage(
          {
            id: `feedback.reports.uploadToastStatus`,
            defaultMessage: `{status, select, uploading {Uploading feedback} uploaded {Feedback submitted} incomplete {Feedback sent without all diagnostics} unconfirmed {Feedback upload not confirmed} disabled {Feedback is disabled} other {Feedback upload failed}}`,
            description: `Persistent notification for a feedback upload after its dialog is closed. Incomplete means the report arrived but some diagnostic files did not; unconfirmed means receipt is unknown`,
          },
          { status: n },
        ),
        {
          duration: 0,
          onRemove: () => {
            h === a && ((h = void 0), x());
          },
          primaryAction: {
            label: u.formatMessage({
              id: `feedback.reports.viewUpload`,
              defaultMessage: `View upload`,
              description: `Button to reopen details for a feedback upload`,
            }),
            onClick: () => {
              f && ((h = void 0), a.close(), t());
            },
          },
        },
      );
    h = a;
  }
  function w() {
    !m &&
      f &&
      ((m = !0),
      C({
        initialCorrelationId: n,
        onStatusChange: ({ correlationId: t, onDismiss: n, onRetry: i, status: a }) => {
          f &&
            l(e, s, { correlationId: t, internalSlackMessage: r, onClose: n, onRetry: i, uploadStatus: a });
        },
        onUploadDismissed: (e, t) => {
          if (t === `uploaded` || t === `incomplete` || t === `disabled`) {
            x();
            return;
          }
          S(e, t);
        },
        onBackgroundUploadSettled: S,
        onUploadError: (e) => {
          c.error(`Failed to submit feedback`, { safe: {}, sensitive: { error: e } });
        },
        submit: a,
      }).catch((e) => {
        (x(), c.error(`Unexpected feedback upload workflow failure`, { safe: {}, sensitive: { error: e } }));
      }));
  }
}
function T() {
  return (T = e(() => {
    (s(), h(), u(), f(), r(), _(), a(), n(), S());
  }))();
}
export { w as n, T as t };
//# sourceMappingURL=feedback-upload-e44dae392a31.js.map
