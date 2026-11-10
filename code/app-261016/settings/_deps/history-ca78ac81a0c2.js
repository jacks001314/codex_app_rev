import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  DB as n,
  EZ as r,
  F as i,
  FBt as a,
  I as o,
  KH as s,
  L as c,
  LNt as l,
  Lst as u,
  M$ as d,
  OB as f,
  Oit as p,
  PBt as m,
  R as h,
  Rst as ee,
  TY as g,
  TZ as _,
  WOt as v,
  XOt as y,
  Y3 as b,
  Z3 as x,
  ac as S,
  ew as C,
  hst as te,
  j$ as w,
  jit as ne,
  mst as T,
  oc as E,
  qOt as D,
  sw as O,
  tkt as k,
  uw as A,
} from "./app-shared-2feb3d4c6fcc.js";
import { cA as j, sA as M } from "./app-initial-ad16eaadf81f.js";
import { i as N, n as P, r as re } from "./shared-30e89022d7a8.js";
import { a as F, c as I, i as L, o as R, r as z, s as B, t as V } from "./query-961b60ef409d.js";
function H(e) {
  let t = (0, K.c)(38),
    { event: n } = e,
    r;
  t[0] === n.event_type ? (r = t[1]) : ((r = n.event_type.toLowerCase()), (t[0] = n.event_type), (t[1] = r));
  let i = r,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  if (t[2] !== n || t[3] !== i) {
    let e = new Date(n.timestamp_second * 1e3),
      r;
    t[12] === n.device_description
      ? (r = t[13])
      : ((r = n.device_description.trim()), (t[12] = n.device_description), (t[13] = r));
    let p = r,
      m;
    (t[14] === n.location_description
      ? (m = t[15])
      : ((m = n.location_description?.trim()), (t[14] = n.location_description), (t[15] = m)),
      (o = m),
      (a = O),
      t[16] === i ? (d = t[17]) : ((d = (0, q.jsx)(U, { eventType: i })), (t[16] = i), (t[17] = d)),
      t[18] === n
        ? (f = t[19])
        : ((f = (0, q.jsx)(`span`, {
            className: `break-words select-text`,
            children: (0, q.jsx)(W, { event: n }),
          })),
          (t[18] = n),
          (t[19] = f)),
      (s = `text-wrap break-words select-text`));
    let h;
    (t[20] === p
      ? (h = t[21])
      : ((h =
          p ||
          (0, q.jsx)(k, {
            id: `chatgpt.settings.security.history.event.device.unknown`,
            defaultMessage: `Unknown device`,
            description: `Fallback metadata line in a Security history event row when the API does not provide a browser, app, device, or operating-system description. It is short secondary text beneath the event title.`,
          })),
        (t[20] = p),
        (t[21] = h)),
      t[22] === h ? (c = t[23]) : ((c = (0, q.jsx)(`span`, { children: h })), (t[22] = h), (t[23] = c)),
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, q.jsx)(`span`, { children: ` • ` })), (t[24] = l))
        : (l = t[24]),
      (u = Number.isNaN(e.getTime())
        ? (0, q.jsx)(k, {
            id: `chatgpt.settings.security.history.event.time.unavailable`,
            defaultMessage: `Time unavailable`,
            description: `Fallback metadata line in a Security history event row when the API timestamp cannot be formatted. It is short secondary text beneath the event title.`,
          })
        : (0, q.jsx)(`time`, {
            dateTime: e.toISOString(),
            children: (0, q.jsx)(D, { value: e, hour: `numeric`, minute: `2-digit` }),
          })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f));
  } else ((a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]), (u = t[9]), (d = t[10]), (f = t[11]));
  let p;
  t[25] === o
    ? (p = t[26])
    : ((p = o
        ? (0, q.jsxs)(q.Fragment, {
            children: [(0, q.jsx)(`span`, { children: ` • ` }), (0, q.jsx)(`span`, { children: o })],
          })
        : null),
      (t[25] = o),
      (t[26] = p));
  let m;
  t[27] !== s || t[28] !== c || t[29] !== l || t[30] !== u || t[31] !== p
    ? ((m = (0, q.jsxs)(`div`, { className: s, children: [c, l, u, p] })),
      (t[27] = s),
      (t[28] = c),
      (t[29] = l),
      (t[30] = u),
      (t[31] = p),
      (t[32] = m))
    : (m = t[32]);
  let h;
  return (
    t[33] !== a || t[34] !== d || t[35] !== f || t[36] !== m
      ? ((h = (0, q.jsx)(a, { icon: d, label: f, description: m, control: null })),
        (t[33] = a),
        (t[34] = d),
        (t[35] = f),
        (t[36] = m),
        (t[37] = h))
      : (h = t[37]),
    h
  );
}
function U(e) {
  let t = (0, K.c)(6),
    { eventType: i } = e;
  if (i.includes(`passkey`)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(n, { asset: E })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i.includes(`password`)) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(n, { asset: d })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (i.includes(`mfa`) || i.includes(`advanced`) || i.includes(`lockdown`)) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(n, { asset: r })), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (i.includes(`logout`)) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(n, { className: `rtl:-scale-x-100`, asset: o })), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (
    i.includes(`login`) ||
    i.includes(`sign_in_with_chat`) ||
    i === `siwc_succeeded` ||
    i === `app_authorized`
  ) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(n, { className: `rtl:-scale-x-100`, asset: c })), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let a;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, q.jsx)(s, {})), (t[5] = a)) : (a = t[5]),
    a
  );
}
function W(e) {
  let t = (0, K.c)(36),
    { event: n } = e,
    r,
    i;
  if (
    (t[0] === n.event_type
      ? ((r = t[1]), (i = t[2]))
      : ((r = n.event_type.toLowerCase()), (i = J.has(r)), (t[0] = n.event_type), (t[1] = r), (t[2] = i)),
    i)
  ) {
    let e = n.login?.oauth_client_name,
      r;
    t[3] === e ? (r = t[4]) : ((r = G(e)), (t[3] = e), (t[4] = r));
    let i = r;
    if (i) {
      let e;
      return (
        t[5] === i
          ? (e = t[6])
          : ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.login_succeeded.with_app`,
              defaultMessage: `Logged into {appName}`,
              description: `Short event-row title in Settings > Security history, shown after the user successfully logs in to an app. Placeholder {appName} is the nonempty app display name, such as Codex or ChatGPT; keep the name untranslated. The title may wrap.`,
              values: { appName: (0, q.jsx)(`bdi`, { children: i }) },
            })),
            (t[5] = i),
            (t[6] = e)),
        e
      );
    }
    let a;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((a = (0, q.jsx)(k, {
            id: `chatgpt.settings.security.history.event.title.login_succeeded`,
            defaultMessage: `Logged in`,
            description: `Short title in a Security history event row for a successful account login. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
          })),
          (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  switch (r) {
    case `logout_succeeded`:
    case `logout_success`:
    case `logout_user_session`:
    case `logout_user_everywhere`:
    case `logout_current_session`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.logout_current_account`,
              defaultMessage: `Logged out of your account`,
              description: `Short title in a Security history event row for a successful account logout. The event does not identify the destination app or service. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `logout_all_sessions`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.logout_all_sessions`,
              defaultMessage: `Logged out of all devices`,
              description: `Short, neutral title for a Security history row in ChatGPT Settings > Account security, shown after a successful request to log out of all ChatGPT sessions across the user's devices, including the session that initiated the action. The time, device, and location below describe where the action was initiated. No placeholders.`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `logout_remote_session`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.logout_remote_session`,
              defaultMessage: `Logged out a session remotely`,
              description: `Short, neutral title for a Security history row in ChatGPT Settings > Account security, shown after the user ends a selected session remotely. The device and location below identify the caller that requested the logout, not the session or device that was logged out. No placeholders.`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `password_added`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.password_added`,
              defaultMessage: `Added password`,
              description: `Short title in a Security history event row shown after an end user adds a password sign-in method to an account that did not previously have one. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `password_updated`:
    case `password_reset_success`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.password_updated`,
              defaultMessage: `Updated password`,
              description: `Short title in a Security history event row for an account password change. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `email_added`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.email_added`,
              defaultMessage: `Added email address`,
              description: `Short, neutral event title in ChatGPT Settings > Account security > Security history, shown after the end user adds an email address to their account. It appears above the event time, device, and location. No placeholders; the email address itself is not displayed.`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `email_updated`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.email_updated`,
              defaultMessage: `Updated email address`,
              description: `Short, neutral event title in ChatGPT Settings > Account security > Security history, shown after the end user changes the email address on their account. It appears above the event time, device, and location. No placeholders; the old and new email addresses are not displayed.`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `passkey_enabled`:
    case `passkey_added`:
    case `passkey_creation_finished`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.passkey_added`,
              defaultMessage: `Added a passkey`,
              description: `Short title in a Security history event row for creating a passkey on the account. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    case `passkey_renamed`:
    case `passkey_updated`: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.passkey_updated`,
              defaultMessage: `Updated passkey`,
              description: `Short title in a Security history event row for changing an existing passkey on the account. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `passkey_removed`:
    case `passkey_deleted`: {
      let e;
      return (
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.passkey_deleted`,
              defaultMessage: `Removed a passkey`,
              description: `Short title in a Security history event row for removing a passkey from the account. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `mfa_factor_enabled`:
    case `enroll_mfa_success`: {
      if (n.mfa?.factor_type === `sms`) {
        let e;
        return (
          t[18] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(k, {
                id: `chatgpt.settings.security.history.event.title.mfa_enrolled.sms`,
                defaultMessage: `Enabled text message as MFA`,
                description: `Short event-row title in Settings > Security and login > Security history, shown after the user enables SMS text messages as a multi-factor authentication (MFA) method. It describes an account setting change, not a sign-in challenge. The title may wrap.`,
              })),
              (t[18] = e))
            : (e = t[18]),
          e
        );
      }
      if (n.mfa?.factor_type === `totp`) {
        let e;
        return (
          t[19] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(k, {
                id: `chatgpt.settings.security.history.event.title.authenticator_app_added`,
                defaultMessage: `Added an authenticator app`,
                description: `Short event-row title in ChatGPT Settings > Security and login > Security history, shown after the user adds an authenticator app as a multi-factor authentication method. The app generates time-based one-time passwords. This records adding one method, not enabling all multi-factor authentication. No placeholders; the title may wrap.`,
              })),
              (t[19] = e))
            : (e = t[19]),
          e
        );
      }
      let e;
      return (
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.mfa_enrolled`,
              defaultMessage: `Enabled multi-factor authentication`,
              description: `Short title in a Security history event row for enrolling a multi-factor authentication method. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[20] = e))
          : (e = t[20]),
        e
      );
    }
    case `mfa_updated`: {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.mfa_updated`,
              defaultMessage: `Updated multi-factor authentication`,
              description: `Short title in a Security history event row for changing an existing multi-factor authentication method. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    case `mfa_factor_removed`:
    case `disable_mfa_success`: {
      if (n.mfa?.factor_type === `sms`) {
        let e;
        return (
          t[22] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(k, {
                id: `chatgpt.settings.security.history.event.title.mfa_removed.sms`,
                defaultMessage: `Disabled text message as MFA`,
                description: `Short event-row title in Settings > Security and login > Security history, shown after the user removes SMS text messages as a multi-factor authentication (MFA) method. Other authentication methods may remain enabled. The title may wrap.`,
              })),
              (t[22] = e))
            : (e = t[22]),
          e
        );
      }
      if (n.mfa?.factor_type === `totp`) {
        let e;
        return (
          t[23] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(k, {
                id: `chatgpt.settings.security.history.event.title.authenticator_app_removed`,
                defaultMessage: `Removed an authenticator app`,
                description: `Short event-row title in ChatGPT Settings > Security and login > Security history, shown after the user removes an authenticator app as a multi-factor authentication method. Other authentication methods may remain enabled. No placeholders; the title may wrap.`,
              })),
              (t[23] = e))
            : (e = t[23]),
          e
        );
      }
      let e;
      return (
        t[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.mfa_removed`,
              defaultMessage: `Disabled multi-factor authentication`,
              description: `Short title in a Security history event row for removing a multi-factor authentication method. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[24] = e))
          : (e = t[24]),
        e
      );
    }
    case `advanced_account_security_enabled`:
    case `enable_advanced_account_security_success`: {
      let e;
      return (
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.advanced_account_security_enabled`,
              defaultMessage: `Enabled Advanced Account Security`,
              description: `Short title in a Security history event row for turning on the Advanced Account Security feature. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[25] = e))
          : (e = t[25]),
        e
      );
    }
    case `advanced_account_security_disabled`:
    case `disable_advanced_account_security_success`: {
      let e;
      return (
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.advanced_account_security_disabled`,
              defaultMessage: `Disabled Advanced Account Security`,
              description: `Short title in a Security history event row for turning off the Advanced Account Security feature. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[26] = e))
          : (e = t[26]),
        e
      );
    }
    case `lockdown_mode_enabled`: {
      let e;
      return (
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.lockdown_mode_enabled`,
              defaultMessage: `Enabled lockdown mode`,
              description: `Short title in a Security history event row for turning on Lockdown mode. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[27] = e))
          : (e = t[27]),
        e
      );
    }
    case `lockdown_mode_disabled`: {
      let e;
      return (
        t[28] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.lockdown_mode_disabled`,
              defaultMessage: `Disabled lockdown mode`,
              description: `Short title in a Security history event row for turning off Lockdown mode. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[28] = e))
          : (e = t[28]),
        e
      );
    }
    case `siwc_succeeded`:
    case `app_authorized`:
    case `sign_in_with_chat`: {
      let e;
      t[29] !== n.app_authorization?.oauth_client_name || t[30] !== r
        ? ((e = r === `app_authorized` ? void 0 : n.app_authorization?.oauth_client_name?.trim()),
          (t[29] = n.app_authorization?.oauth_client_name),
          (t[30] = r),
          (t[31] = e))
        : (e = t[31]);
      let i = e;
      if (i) {
        let e;
        return (
          t[32] === i
            ? (e = t[33])
            : ((e = (0, q.jsx)(k, {
                id: `chatgpt.settings.security.history.event.title.sign_in_with_chat.with_app`,
                defaultMessage: `Signed in to {appName} with ChatGPT`,
                description: `Short event-row title in Settings > Security history, shown after the user signs in to another app using Sign in with ChatGPT. Placeholder {appName} is the nonempty destination app display name saved when the event occurred; keep the name untranslated. ChatGPT is the sign-in provider. The title may wrap.`,
                values: { appName: (0, q.jsx)(`bdi`, { children: i }) },
              })),
              (t[32] = i),
              (t[33] = e)),
          e
        );
      }
      let a;
      return (
        t[34] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.sign_in_with_chat`,
              defaultMessage: `Signed in with ChatGPT`,
              description: `Short title in a Security history event row for a Sign in with ChatGPT authentication event. It appears above timestamp, device, and location metadata in ChatGPT Settings > Security and login > Security history.`,
            })),
            (t[34] = a))
          : (a = t[34]),
        a
      );
    }
    default: {
      let e;
      return (
        t[35] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(k, {
              id: `chatgpt.settings.security.history.event.title.unknown`,
              defaultMessage: `Security activity`,
              description: `Fallback title in a Security history event row when the API returns an event type that this client does not recognize. It is a translated, short, neutral heading above the event metadata.`,
            })),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
  }
}
function G(e) {
  let t = e?.trim();
  return t === `ChatGPT Web Client` || t === `ChatGPT Web` ? `ChatGPT` : t;
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = m()),
      h(),
      w(),
      i(),
      S(),
      _(),
      y(),
      f(),
      g(),
      A(),
      (q = l()),
      (J = new Set([`app_login_succeeded`, `login_succeeded`, `login_success`, `native_login_success`])));
  }))();
}
function ie(e) {
  let t = (0, X.c)(35),
    { accountId: n, onBack: r } = e,
    i = ee(),
    a;
  t[0] === n ? (a = t[1]) : ((a = z(n)), (t[0] = n), (t[1] = a));
  let {
      data: o,
      error: s,
      isPending: c,
      isError: l,
      isFetchNextPageError: u,
      isFetchingNextPage: d,
      hasNextPage: f,
      refetch: p,
      fetchNextPage: m,
    } = te(a),
    h = (0, Z.useRef)(null),
    g = (0, Z.useRef)(void 0),
    _;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = new Map()), (t[2] = _)) : (_ = t[2]);
  let v = (0, Z.useRef)(_),
    y = o?.pages.flatMap(se),
    b = y != null && y.length > 0,
    x;
  t[3] !== b || t[4] !== l || t[5] !== c
    ? ((x = b ? `ready` : `empty`),
      l ? (x = `error`) : c && (x = `loading`),
      (t[3] = b),
      (t[4] = l),
      (t[5] = c),
      (t[6] = x))
    : (x = t[6]);
  let S;
  t[7] !== b || t[8] !== f || t[9] !== x
    ? ((S = () => {
        let e = !1;
        return (
          queueMicrotask(() => {
            e || F(`security_history_view_state_changed`, { state: x, has_events: b, has_next_page: f });
          }),
          () => {
            e = !0;
          }
        );
      }),
      (t[7] = b),
      (t[8] = f),
      (t[9] = x),
      (t[10] = S))
    : (S = t[10]);
  let C;
  (t[11] !== b || t[12] !== f || t[13] !== x
    ? ((C = [b, f, x]), (t[11] = b), (t[12] = f), (t[13] = x), (t[14] = C))
    : (C = t[14]),
    (0, Z.useEffect)(S, C));
  let w = [];
  for (let e of y ?? []) {
    let t = new Date(e.timestamp_second * 1e3),
      n = Number.isNaN(t.getTime()) ? `unavailable` : `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`,
      r = w.at(-1);
    r?.key === n ? r.events.push(e) : w.push({ key: n, date: t, events: [e] });
  }
  let T;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        let e = h.current;
        if (e == null) return;
        let t = Array.from(e.querySelectorAll(`[data-history-event]`)),
          n = t[0];
        if (n == null) {
          v.current.clear();
          return;
        }
        let r = e.parentElement;
        for (; r != null && !/(auto|scroll)/u.test(getComputedStyle(r).overflowY);) r = r.parentElement;
        let i = r ?? document.documentElement,
          a = e.offsetWidth > 0 ? e.getBoundingClientRect().width / e.offsetWidth : 1,
          o = (e) => e.getBoundingClientRect().top / a,
          s = n.dataset.historyEvent,
          c = s == null ? void 0 : v.current.get(s);
        (s !== g.current && c != null && (i.scrollTop += o(n) - c), (g.current = s));
        let l = () => {
          v.current = new Map(t.map((e) => [e.dataset.historyEvent ?? ``, o(e)]));
        };
        return (
          l(),
          i.addEventListener(`scroll`, l, { passive: !0 }),
          () => i.removeEventListener(`scroll`, l)
        );
      }),
      (t[15] = T))
    : (T = t[15]);
  let E;
  (t[16] === o ? (E = t[17]) : ((E = [o]), (t[16] = o), (t[17] = E)), (0, Z.useLayoutEffect)(T, E));
  let D;
  t[18] === m
    ? (D = t[19])
    : ((D = () => {
        m({ cancelRefetch: !1 });
      }),
      (t[18] = m),
      (t[19] = D));
  let O = D,
    A;
  t[20] !== n || t[21] !== s || t[22] !== u || t[23] !== O || t[24] !== i || t[25] !== p
    ? ((A = () => {
        let e = s instanceof ne && s.status === 400 && s.errorCode === `invalid_cursor`;
        (F(`security_history_retry`, { phase: u ? `pagination` : `initial`, cursor_reset: e }),
          e ? i.resetQueries({ queryKey: z(n).queryKey, exact: !0 }) : u ? O() : p());
      }),
      (t[20] = n),
      (t[21] = s),
      (t[22] = u),
      (t[23] = O),
      (t[24] = i),
      (t[25] = p),
      (t[26] = A))
    : (A = t[26]);
  let j = A,
    M = re,
    N = ce,
    I,
    L;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(k, { ...B.title })),
      (L = (0, Q.jsx)(k, { ...B.description })),
      (t[27] = I),
      (t[28] = L))
    : ((I = t[27]), (L = t[28]));
  let R =
      c || (l && o == null)
        ? (0, Q.jsx)(P, { isError: l, onRetry: j })
        : (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`div`, {
                ref: h,
                className: `flex flex-col gap-8`,
                role: `list`,
                children: w.map(ae),
              }),
              y?.length === 0
                ? (0, Q.jsx)(`p`, {
                    role: `status`,
                    className: `text-sm text-secondary`,
                    children: (0, Q.jsx)(k, {
                      id: `settings.chatGpt.security.history.empty`,
                      defaultMessage: `No security history yet`,
                      description: `Empty state after account security activity loads with no events.`,
                    }),
                  })
                : null,
              l ? (0, Q.jsx)(P, { isError: !0, onRetry: j }) : null,
              (0, Q.jsx)(le, { enabled: f && !l, isFetching: d, onFetchNextPage: O }),
            ],
          }),
    V;
  return (
    t[29] !== M || t[30] !== r || t[31] !== I || t[32] !== L || t[33] !== R
      ? ((V = (0, Q.jsx)(M, { ref: N, title: I, subtitle: L, onBack: r, children: R })),
        (t[29] = M),
        (t[30] = r),
        (t[31] = I),
        (t[32] = L),
        (t[33] = R),
        (t[34] = V))
      : (V = t[34]),
    V
  );
}
function ae(e) {
  return (0, Q.jsxs)(
    M,
    {
      children: [
        (0, Q.jsx)(M.Header, {
          title: (0, Q.jsx)(`h2`, {
            children:
              e.key === `unavailable`
                ? (0, Q.jsx)(k, {
                    id: `settings.chatGpt.security.history.dateUnavailable`,
                    defaultMessage: `Date unavailable`,
                    description: `Group heading for security activity whose timestamp is invalid.`,
                  })
                : (0, Q.jsx)(v, { value: e.date, year: `numeric`, month: `long`, day: `numeric` }),
          }),
        }),
        (0, Q.jsx)(M.Content, { children: (0, Q.jsx)(t, { children: e.events.map(oe) }) }),
      ],
    },
    e.key,
  );
}
function oe(e) {
  return (0, Q.jsx)(
    `div`,
    {
      role: `listitem`,
      "data-history-event": `${e.event_type}:${e.id}`,
      children: (0, Q.jsx)(H, { event: e }),
    },
    `${e.event_type}:${e.id}`,
  );
}
function se(e) {
  return e.events;
}
function ce(e) {
  return R(e, `security_history_page_viewed`);
}
function le(e) {
  let t = (0, X.c)(12),
    { enabled: n, isFetching: r, onFetchNextPage: i } = e,
    a = (0, Z.useRef)(null),
    o;
  t[0] !== r || t[1] !== i
    ? ((o = () => {
        r || i();
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = (0, Z.useEffectEvent)(o),
    c;
  t[3] !== n || t[4] !== s
    ? ((c = () => {
        let e = a.current;
        if (!n || e == null) return;
        let t = new IntersectionObserver(
          (e) => {
            e[0]?.isIntersecting && s();
          },
          { rootMargin: `160px` },
        );
        return (t.observe(e), () => t.disconnect());
      }),
      (t[3] = n),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  (t[6] === n ? (l = t[7]) : ((l = [n]), (t[6] = n), (t[7] = l)), (0, Z.useEffect)(c, l));
  let u;
  return (
    t[8] !== n || t[9] !== r || t[10] !== i
      ? ((u = n
          ? (0, Q.jsx)(`div`, {
              ref: a,
              children: (0, Q.jsx)(b, {
                color: `secondary`,
                size: `toolbar`,
                loading: r,
                disabled: r,
                onClick: i,
                children: (0, Q.jsx)(k, {
                  id: `settings.chatGpt.security.history.loadMore`,
                  defaultMessage: `Load more`,
                  description: `Button to load older account security events, also loaded when scrolling to the end of the current list.`,
                }),
              }),
            })
          : null),
        (t[8] = n),
        (t[9] = r),
        (t[10] = i),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = m()), T(), u(), (Z = a()), y(), x(), j(), C(), p(), N(), Y(), I(), V(), L(), (Q = l()));
  }))();
}
$();
export { ie as SecurityHistorySettings };
//# sourceMappingURL=history-ca78ac81a0c2.js.map
