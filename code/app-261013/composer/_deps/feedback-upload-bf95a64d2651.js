import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  SPt as n,
  hot as r,
  iot as i,
  lot as a,
  oot as o,
  rst as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  G4n as l,
  J4n as u,
  QPr as d,
  U4n as f,
  XPr as p,
  YPr as m,
  aIr as h,
  cP as g,
  eFr as _,
  oIr as v,
  sP as y,
} from "./app-initial-5851df3f6cb1.js";
function b() {
  return function (e) {
    return (0, x.jsx)(y, { ...e });
  };
}
var x;
function S() {
  return (S = e(() => {
    (g(), (x = c()));
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
function w({ scope: e, hostId: n, initialCorrelationId: a, internalSlackMessage: o, submit: s }) {
  let c = b(),
    l = e.get(v),
    p = !0,
    h = !1,
    g,
    _ = n === `durable` ? i : n,
    y = e.watch(({ get: t }) => {
      if (!p) return;
      if (t(d, _) == null) return (w(), x);
      let n = !0,
        r = m(e, _).subscribe({
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
    p && ((p = !1), y(), g?.close(), f(e, c));
  }
  function S(t, n) {
    if (!p) return;
    let i = g;
    ((g = void 0), i?.close());
    let a = `warning`;
    n === `uploading` ? (a = `info`) : n === `uploaded` && (a = `success`);
    let o = e
      .get(r)
      [a](
        l.formatMessage(
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
            g === o && ((g = void 0), x());
          },
          primaryAction: {
            label: l.formatMessage({
              id: `feedback.reports.viewUpload`,
              defaultMessage: `View upload`,
              description: `Button to reopen details for a feedback upload`,
            }),
            onClick: () => {
              p && ((g = void 0), o.close(), t());
            },
          },
        },
      );
    g = o;
  }
  function w() {
    !h &&
      p &&
      ((h = !0),
      C({
        initialCorrelationId: a,
        onStatusChange: ({ correlationId: t, onDismiss: n, onRetry: r, status: i }) => {
          p &&
            u(e, c, { correlationId: t, internalSlackMessage: o, onClose: n, onRetry: r, uploadStatus: i });
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
          t.error(`Failed to submit feedback`, { safe: {}, sensitive: { error: e } });
        },
        submit: s,
      }).catch((e) => {
        (x(), t.error(`Unexpected feedback upload workflow failure`, { safe: {}, sensitive: { error: e } }));
      }));
  }
}
function T() {
  return (T = e(() => {
    (s(), p(), _(), l(), a(), h(), o(), n(), S());
  }))();
}
export { w as n, T as t };
//# sourceMappingURL=feedback-upload-bf95a64d2651.js.map
