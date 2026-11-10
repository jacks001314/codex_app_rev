import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  ADt as r,
  AO as i,
  Bct as a,
  CO as o,
  Cot as s,
  Cwt as c,
  Fat as l,
  IDt as u,
  Iot as d,
  Ixt as f,
  JC as p,
  JR as m,
  Kat as h,
  Lot as g,
  MO as _,
  Pat as v,
  Pxt as y,
  Sj as b,
  Swt as x,
  TO as S,
  VDt as ee,
  Vxt as C,
  Wnt as w,
  Xot as T,
  YR as te,
  Yot as E,
  _wt as D,
  _xt as O,
  b0 as k,
  ert as A,
  gwt as j,
  hot as ne,
  iw as M,
  ixt as N,
  jDt as P,
  jO as F,
  lot as I,
  nst as L,
  qC as re,
  qat as ie,
  qnt as ae,
  rst as R,
  t3 as z,
  tst as oe,
  tw as B,
  uj as se,
  vzt as V,
  wot as H,
  xMt as ce,
  y0 as le,
  yzt as ue,
  zxt as U,
} from "./app-shared-bbfeca5e5737.js";
import {
  A0 as de,
  Ek as fe,
  GMr as pe,
  Gg as me,
  Kg as he,
  Mg as W,
  Ng as ge,
  O0 as G,
  Pg as _e,
  QP as ve,
  Tk as ye,
  XMr as be,
  Ymr as K,
  _F as xe,
  cur as Se,
  eF as Ce,
  eNr as we,
  ehr as Te,
  h3n as Ee,
  hF as De,
  m3n as Oe,
  mF as ke,
  pF as Ae,
  sur as je,
  tF as q,
  tNr as J,
} from "./app-initial-5851df3f6cb1.js";
import { db as Me, fb as Ne, mb as Pe, pb as Fe } from "./app-primary-fe8a450b3b04.js";
import { n as Ie, t as Le } from "./settings-loading-row-bf72bf2df25d.js";
var Y;
function Re() {
  return (Re = e(() => {
    (P(),
      (Y = r({
        permissions: {
          id: `settings.agent.permissionsMode.groupTitle`,
          defaultMessage: `Permissions`,
          description: `Heading for settings that control which permission modes appear in the permissions menu beside the prompt input field`,
        },
        defaultPermissions: {
          id: `settings.agent.permissionsMode.default.title`,
          defaultMessage: `Default permissions`,
          description: `Title for the row controlling whether Default permissions appears in the permissions menu beside the prompt input field`,
        },
        fullAccess: {
          id: `settings.agent.permissionsMode.fullAccess.title`,
          defaultMessage: `Full access`,
          description: `Title for the row controlling whether Full access appears in the permissions menu beside the prompt input field`,
        },
        defaultFileOpenDestination: {
          id: `settings.ide.defaultOpenTarget.label`,
          defaultMessage: `Default file open destination`,
          description: `Label for default file open-in target setting`,
        },
        integratedTerminalShell: {
          id: `settings.openIn.integratedTerminalShell.label`,
          defaultMessage: `Integrated terminal shell`,
          description: `Label for integrated terminal shell setting`,
        },
        agentEnvironment: {
          id: `settings.agentEnvironment.label`,
          defaultMessage: `Agent environment`,
          description: `Label for the agent environment setting`,
        },
        windowsNative: {
          id: `settings.agentEnvironment.windowsNative`,
          defaultMessage: `Windows native`,
          description: `Option label for running the agent natively on Windows`,
        },
        windowsSubsystemForLinux: {
          id: `settings.agentEnvironment.wsl`,
          defaultMessage: `Windows Subsystem for Linux`,
          description: `Option label for running the agent inside WSL`,
        },
        language: {
          id: `settings.ide.language.label`,
          defaultMessage: `Language`,
          description: `Label for language setting`,
        },
        autoDetectLanguage: {
          id: `settings.ide.language.autoOption`,
          defaultMessage: `Auto detect`,
          description: `Auto detect language option`,
        },
        showInMenuBar: {
          id: `settings.general.macMenuBar.label`,
          defaultMessage: `Show in menu bar`,
          description: `Label for the macOS menu bar setting`,
        },
        preventSleepWhileRunning: {
          id: `settings.general.power.preventSleepWhileRunning.label`,
          defaultMessage: `Prevent sleep while running`,
          description: `Label for preventing computer sleep while a task runs`,
        },
        followUpBehavior: {
          id: `settings.general.followUpQueueMode.label`,
          defaultMessage: `Follow-up behavior`,
          description: `Label for a setting that chooses how a follow-up message sent during an active Codex run is handled`,
        },
        showContextWindowUsage: {
          id: `settings.general.contextUsageIndicator.label`,
          defaultMessage: `Show context window usage`,
          description: `Label for the composer context usage indicator setting`,
        },
        composerGroupTitle: {
          id: `settings.general.composer.groupTitle`,
          defaultMessage: `Composer`,
          description: `Heading for settings related to the prompt and message input area where the user writes to ChatGPT or Codex`,
        },
        plainTextComposer: {
          id: `settings.general.composer.plainTextMode.label`,
          defaultMessage: `Plain text composer`,
          description: `Label for a setting that disables automatic code blocks, lists, and rich links in the message composer`,
        },
        enterBehavior: {
          id: `settings.general.enterBehavior.rowLabel`,
          defaultMessage: `Send shortcut`,
          description: `Label for the enter key behavior setting`,
        },
        queue: {
          id: `settings.general.followUpQueueMode.queue`,
          defaultMessage: `Queue`,
          description: `Option label for holding a follow-up message until the active Codex run finishes`,
        },
        steer: {
          id: `settings.general.followUpQueueMode.interrupt`,
          defaultMessage: `Steer`,
          description: `Option label for applying a follow-up message to the active Codex run instead of queuing it`,
        },
        openSourceLicenses: {
          id: `settings.openSourceLicenses.rowLabel`,
          defaultMessage: `Open source licenses`,
          description: `Label for the open source licenses row`,
        },
        popoutWindow: {
          id: `settings.general.popoutWindow`,
          defaultMessage: `Popout Window`,
          description: `Heading for Codex Popout Window settings, including its global keyboard shortcut`,
        },
        popoutWindowHotkey: {
          id: `settings.general.experimentalFeatures.hotkeyWindowHotkey.label`,
          defaultMessage: `Popout Window hotkey`,
          description: `Label for the global keyboard shortcut that opens or toggles the Codex Popout Window`,
        },
        projectlessChat: {
          id: `settings.general.popoutWindow.projectlessDefault.label`,
          defaultMessage: `Default to standalone chat`,
          description: `Label for a toggle that makes the Popout Window start new chats without a project association`,
        },
        notifications: {
          id: `settings.general.notifications`,
          defaultMessage: `Notifications`,
          description: `Heading for notifications settings group`,
        },
        turnCompletionNotifications: {
          id: `notifications.turnMode.label`,
          defaultMessage: `Turn completion notifications`,
          description: `Label for choosing when the app sends a notification after ChatGPT finishes an agent response or run`,
        },
        permissionNotifications: {
          id: `notifications.permissions.label`,
          defaultMessage: `Enable permission notifications`,
          description: `Toggle label for permission notifications`,
        },
        questionNotifications: {
          id: `notifications.questions.label`,
          defaultMessage: `Enable question notifications`,
          description: `Toggle label for question notifications`,
        },
        never: {
          id: `notifications.turnMode.off`,
          defaultMessage: `Never`,
          description: `Notification timing option that disables alerts when ChatGPT finishes an agent response or run`,
        },
        onlyWhenUnfocused: {
          id: `notifications.turnMode.unfocused`,
          defaultMessage: `Only when unfocused`,
          description: `Notification timing option that alerts after ChatGPT finishes an agent response or run, but only when Codex is not the active app`,
        },
        always: {
          id: `notifications.turnMode.always`,
          defaultMessage: `Always`,
          description: `Notification timing option that alerts whenever ChatGPT finishes an agent response or run`,
        },
        bottomPanel: {
          id: `settings.general.bottomPanel.label`,
          defaultMessage: `Bottom panel`,
          description: `Label for a setting that controls whether the app header shows the bottom-panel launcher`,
        },
        defaultTerminalLocation: {
          id: `settings.general.defaultTerminalLocation.label`,
          defaultMessage: `Default terminal location`,
          description: `Label for default terminal location setting`,
        },
        terminalLocationBottom: {
          id: `settings.general.defaultTerminalLocation.bottom`,
          defaultMessage: `Bottom`,
          description: `Bottom panel option label for default terminal location`,
        },
        terminalLocationRight: {
          id: `settings.general.defaultTerminalLocation.right`,
          defaultMessage: `Right`,
          description: `Right panel option label for default terminal location`,
        },
      })));
  }))();
}
var ze;
function Be() {
  return (Be = e(() => {
    (P(),
      (ze = r({
        importError: {
          id: `notifications.sound.importError`,
          defaultMessage: `Couldn't import this sound. Choose an MP3, WAV, FLAC, or Ogg file under 30 seconds and 10 MB`,
          description: `Error shown when importing a desktop notification sound fails`,
        },
        saveError: {
          id: `notifications.sound.saveError`,
          defaultMessage: `Couldn't change the notification sound. Try again`,
          description: `Error shown when selecting or saving a desktop notification sound fails`,
        },
        previewError: {
          id: `notifications.sound.previewError`,
          defaultMessage: `Couldn't play the sound preview`,
          description: `Error shown when audio playback fails while previewing a notification sound`,
        },
      })));
  }))();
}
function Ve(e) {
  let t = (0, Ue.c)(23),
    { disabled: r } = e,
    i = r !== void 0 && r,
    c = f(s),
    l = ee(),
    d = n(a.sound),
    { data: p } = C(Se),
    [m, g] = (0, We.useState)(!1),
    _ = (0, We.useRef)(null),
    v,
    y;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => () => _.current?.abort()), (y = []), (t[0] = v), (t[1] = y))
    : ((v = t[0]), (y = t[1])),
    (0, We.useEffect)(v, y));
  let b = A(),
    x = i || m || b,
    w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { value: `default`, label: (0, X.jsx)(u, { ...Ge.default }) }), (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = {
        value: `classic`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.classic`,
          defaultMessage: `Classic`,
          description: `Notification sound option using the original Codex notification sound`,
        }),
      }),
      (t[3] = T))
    : (T = t[3]);
  let te;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = { value: `none`, label: (0, X.jsx)(u, { ...Ge.none }) }), (t[4] = te))
    : (te = t[4]);
  let E;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = {
        value: `Basso`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.basso`,
          defaultMessage: `Basso`,
          description: `Name of the macOS Basso system alert sound`,
        }),
      }),
      (t[5] = E))
    : (E = t[5]);
  let D;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = {
        value: `Glass`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.glass`,
          defaultMessage: `Glass`,
          description: `Name of the macOS Glass system alert sound`,
        }),
      }),
      (t[6] = D))
    : (D = t[6]);
  let O;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = {
        value: `Ping`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.ping`,
          defaultMessage: `Ping`,
          description: `Name of the macOS Ping system alert sound`,
        }),
      }),
      (t[7] = O))
    : (O = t[7]);
  let k;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = {
        value: `Pop`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.pop`,
          defaultMessage: `Pop`,
          description: `Name of the macOS Pop system alert sound`,
        }),
      }),
      (t[8] = k))
    : (k = t[8]);
  let j;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = {
        value: `Purr`,
        label: (0, X.jsx)(u, {
          id: `notifications.sound.purr`,
          defaultMessage: `Purr`,
          description: `Name of the macOS Purr system alert sound`,
        }),
      }),
      (t[9] = j))
    : (j = t[9]);
  let M;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = [
        w,
        T,
        te,
        E,
        D,
        O,
        k,
        j,
        {
          value: `Tink`,
          label: (0, X.jsx)(u, {
            id: `notifications.sound.tink`,
            defaultMessage: `Tink`,
            description: `Name of the macOS Tink system alert sound`,
          }),
        },
      ]),
      (t[10] = M))
    : (M = t[10]);
  let N = M,
    P;
  if (t[11] !== x || t[12] !== l || t[13] !== c) {
    P = function (t) {
      if (x) return;
      _.current?.abort();
      let r = new AbortController();
      ((_.current = r),
        n(t === `custom` ? `none` : t, r.signal),
        g(!0),
        e(t, r)
          .catch(() => {
            (r.abort(),
              c
                .get(ne)
                .danger(l.formatMessage(ze.saveError), {
                  errorAnalytics: { toastId: `notifications.sound.saveError` },
                }));
          })
          .finally(() => g(!1)));
    };
    async function e(e, t) {
      let { signal: i } = t;
      if (e !== `custom`) {
        await ae(c, a.sound, e);
        return;
      }
      let o = h.notifications;
      if (o == null) return;
      let s = !1,
        u = await o.importSound({
          decodeAudio: async (e) => {
            let t = await W(e);
            return (t != null && ((s = !0), r(_e(e, i), i)), t);
          },
          title: l.formatMessage({
            id: `notifications.sound.chooseTitle`,
            defaultMessage: `Choose notification sound`,
            description: `Title of the native file picker for a custom desktop notification sound`,
          }),
        });
      u.status === `selected`
        ? (s || n(u.sound, i), await ae(c, a.sound, u.sound))
        : u.status === `error` &&
          (t.abort(),
          c
            .get(ne)
            .danger(l.formatMessage(ze.importError), {
              errorAnalytics: { toastId: `notifications.sound.importError` },
            }));
    }
    function n(e, t) {
      let n = h.notifications;
      n == null ||
        t.aborted ||
        r(
          n.previewSound(e, (e) => _e(e, t)),
          t,
        );
    }
    function r(e, t) {
      Promise.resolve(e)
        .catch(He)
        .then((e) => {
          !e &&
            !t.aborted &&
            c
              .get(ne)
              .danger(l.formatMessage(ze.previewError), {
                errorAnalytics: { toastId: `notifications.sound.previewError` },
              });
        });
    }
    ((t[11] = x), (t[12] = l), (t[13] = c), (t[14] = P));
  } else P = t[14];
  let F, I;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(u, {
        id: `notifications.sound.label`,
        defaultMessage: `Notification sound`,
        description: `Label for the sound shared by all desktop task notifications`,
      })),
      (I = (0, X.jsx)(u, {
        id: `notifications.sound.description`,
        defaultMessage: `Sound for task completion, permission requests, and questions`,
        description: `Explains that one sound applies to all three kinds of desktop task alerts`,
      })),
      (t[15] = F),
      (t[16] = I))
    : ((F = t[15]), (I = t[16]));
  let L;
  return (
    t[17] !== P || t[18] !== x || t[19] !== m || t[20] !== p?.platform || t[21] !== d
      ? ((L = (0, X.jsx)(B, {
          label: F,
          description: I,
          control: (e) =>
            (0, X.jsxs)(o, {
              contentWidth: `menuWide`,
              disabled: x,
              align: `end`,
              triggerButton: (0, X.jsx)(ve, {
                disabled: x,
                loading: m,
                ...e,
                children: (0, X.jsx)(`span`, {
                  className: `truncate`,
                  children: typeof d == `object` ? d.name : N.find((e) => e.value === d)?.label,
                }),
              }),
              children: [
                N.filter(
                  (e) =>
                    p?.platform === `darwin` ||
                    e.value === "default" ||
                    e.value === `classic` ||
                    e.value === `none`,
                ).map((e) =>
                  (0, X.jsx)(
                    S.Item,
                    {
                      disabled: x,
                      rightIconAsset: d === e.value ? le : void 0,
                      onSelect: () => P(e.value),
                      children: e.label,
                    },
                    e.value,
                  ),
                ),
                typeof d == `object`
                  ? (0, X.jsx)(S.Item, {
                      disabled: x,
                      rightIconAsset: le,
                      onSelect: () => P(d),
                      children: (0, X.jsx)(`span`, { className: `truncate`, children: d.name }),
                    })
                  : null,
                h.notifications == null
                  ? null
                  : (0, X.jsx)(S.Item, {
                      disabled: x,
                      onSelect: () => P(`custom`),
                      children: (0, X.jsx)(u, {
                        id: `notifications.sound.choose`,
                        defaultMessage: `Choose custom sound…`,
                        description: `Menu item opening a native file picker for a custom desktop notification sound`,
                      }),
                    }),
              ],
            }),
        })),
        (t[17] = P),
        (t[18] = x),
        (t[19] = m),
        (t[20] = p?.platform),
        (t[21] = d),
        (t[22] = L))
      : (L = t[22]),
    L
  );
}
function He() {
  return !1;
}
var Ue, We, X, Ge;
function Ke() {
  return (Ke = e(() => {
    ((Ue = V()),
      k(),
      y(),
      R(),
      (We = ue()),
      P(),
      i(),
      I(),
      je(),
      ie(),
      H(),
      ge(),
      w(),
      M(),
      q(),
      Be(),
      (X = ce()),
      (Ge = r({
        default: {
          id: `notifications.sound.default`,
          defaultMessage: `Default`,
          description: `Notification sound option using the app's default sound`,
        },
        none: {
          id: `notifications.sound.none`,
          defaultMessage: `None`,
          description: `Notification sound option that silences task alerts`,
        },
      })));
  }))();
}
function qe() {
  let e = (0, Z.c)(7),
    t = C(pe),
    n = C(be);
  if (t == null || n == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Q.jsx)(rt, {})), (e[0] = t)) : (t = e[0]),
      t
    );
  }
  let r = `${n}:${t}`,
    i;
  e[1] !== t || e[2] !== r || e[3] !== n
    ? ((i = (0, Q.jsx)(Ye, { accountId: t, userId: n }, r)), (e[1] = t), (e[2] = r), (e[3] = n), (e[4] = i))
    : (i = e[4]);
  let a = i,
    o;
  return (
    e[5] === a
      ? (o = e[6])
      : ((o = (0, Q.jsxs)(Q.Fragment, {
          children: [null, (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(Je, { children: a }) })],
        })),
        (e[5] = a),
        (e[6] = o)),
    o
  );
}
function Je(e) {
  let t = (0, Z.c)(6),
    { children: n } = e,
    r = f(s);
  switch (C(me).status) {
    case `allowed`: {
      let e;
      return (
        t[0] === n ? (e = t[1]) : ((e = (0, Q.jsx)(Q.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
        e
      );
    }
    case `loading`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(rt, {})), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `denied`:
      return null;
    case `error`: {
      let e;
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            role: `alert`,
            children: (0, Q.jsx)(u, {
              id: `settings.notifications.chatGpt.accountError`,
              defaultMessage: `Your account information couldn’t be loaded`,
              description: `Error in Notifications settings when the desktop app cannot confirm the signed-in user's personal account; the adjacent Retry action reloads account information`,
            }),
          })),
          (t[3] = e))
        : (e = t[3]);
      let n;
      return (
        t[4] === r.queryClient
          ? (n = t[5])
          : ((n = (0, Q.jsx)(B, {
              label: e,
              control: (0, Q.jsx)(it, {
                isFetching: !1,
                onRetry: () => void r.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
              }),
            })),
            (t[4] = r.queryClient),
            (t[5] = n)),
        n
      );
    }
  }
}
function Ye(e) {
  let t = (0, Z.c)(42),
    { accountId: n, userId: r } = e,
    i = f(s),
    a = ee(),
    o = L(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Map()), (t[0] = c)) : (c = t[0]);
  let l = (0, at.useRef)(c),
    d = (0, at.useRef)(0),
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = new Set()), (t[1] = p)) : (p = t[1]);
  let m = (0, at.useRef)(p),
    h,
    _;
  (t[2] !== n || t[3] !== o || t[4] !== r
    ? ((h = () => {
        let e = m.current;
        return () => {
          e.size > 0 && o.invalidateQueries({ queryKey: [ot, r, n], refetchType: `none` });
          for (let t of e) t.abort();
        };
      }),
      (_ = [n, o, r]),
      (t[2] = n),
      (t[3] = o),
      (t[4] = r),
      (t[5] = h),
      (t[6] = _))
    : ((h = t[5]), (_ = t[6])),
    (0, at.useEffect)(h, _));
  let y;
  t[7] !== n || t[8] !== r ? ((y = [ot, r, n]), (t[7] = n), (t[8] = r), (t[9] = y)) : (y = t[9]);
  let b = y,
    x;
  t[10] === n
    ? (x = t[11])
    : ((x = (e) => {
        let { signal: t } = e;
        return K.safeGet(`/notifications/settings`, {
          additionalHeaders: { "ChatGPT-Account-ID": n },
          signal: t,
        });
      }),
      (t[10] = n),
      (t[11] = x));
  let S;
  t[12] !== b || t[13] !== x
    ? ((S = { queryKey: b, queryFn: x, staleTime: v.ONE_MINUTE }), (t[12] = b), (t[13] = x), (t[14] = S))
    : (S = t[14]);
  let { data: C, isPending: w, isError: te, isFetching: E, refetch: D } = T(S),
    O,
    k;
  t[15] === o
    ? ((O = t[16]), (k = t[17]))
    : ((O = async (e) => {
        let t = `${e.accountId}\0${e.category}\0${e.channel}`;
        d.current += 1;
        let n = d.current;
        l.current.set(t, n);
        let r = [ot, e.userId, e.accountId];
        (await o.cancelQueries({ queryKey: r }), e.controller.signal.throwIfAborted());
        let i = o
          .getQueryData(r)
          ?.settings.find((t) => {
            let { category: n } = t;
            return n === e.category;
          })
          ?.options.find((t) => {
            let { channel: n } = t;
            return n === e.channel;
          })?.enabled;
        return (
          o.setQueryData(r, (t) => Ze(t, e, e.enabled)),
          { mutationId: n, mutationKey: t, previousEnabled: i, queryKey: r }
        );
      }),
      (k = (e, t, n) => {
        if (t.controller.signal.aborted || n == null || n.mutationId !== l.current.get(n.mutationKey)) return;
        let r = e.settings
          .find((e) => {
            let { category: n } = e;
            return n === t.category;
          })
          ?.options.find((e) => {
            let { channel: n } = e;
            return n === t.channel;
          })?.enabled;
        (o.setQueryData(n.queryKey, (e) => Ze(e, t, r ?? t.enabled)), l.current.delete(n.mutationKey));
      }),
      (t[15] = o),
      (t[16] = O),
      (t[17] = k));
  let A;
  t[18] !== a || t[19] !== o || t[20] !== i
    ? ((A = (e, t, n) => {
        if (!t.controller.signal.aborted) {
          if (n != null && n.mutationId === l.current.get(n.mutationKey)) {
            if (n.previousEnabled != null) {
              let { previousEnabled: e } = n;
              o.setQueryData(n.queryKey, (n) => Ze(n, t, e));
            }
            l.current.delete(n.mutationKey);
          }
          i.get(ne).danger(
            a.formatMessage({
              id: `settings.notifications.chatGpt.updateError`,
              defaultMessage: `Failed to update ChatGPT notification settings`,
              description: `Error shown when a ChatGPT notification setting could not be updated`,
            }),
            { errorAnalytics: { toastId: `settings.notifications.chatGpt.updateError` } },
          );
        }
      }),
      (t[18] = a),
      (t[19] = o),
      (t[20] = i),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e, t, n) => {
        m.current.delete(n.controller);
      }),
      (t[22] = j))
    : (j = t[22]);
  let M;
  t[23] !== A || t[24] !== O || t[25] !== k
    ? ((M = { mutationFn: Xe, onMutate: O, onSuccess: k, onError: A, onSettled: j }),
      (t[23] = A),
      (t[24] = O),
      (t[25] = k),
      (t[26] = M))
    : (M = t[26]);
  let { mutate: N } = g(M);
  if (w) {
    let e;
    return (
      t[27] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(rt, {})), (t[27] = e))
        : (e = t[27]),
      e
    );
  }
  if (C == null || te) {
    let e;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`span`, {
          role: `alert`,
          children: (0, Q.jsx)(u, {
            id: `settings.notifications.chatGpt.error`,
            defaultMessage: `ChatGPT notification settings could not be loaded`,
            description: `Error state for ChatGPT notification settings`,
          }),
        })),
        (t[28] = e))
      : (e = t[28]);
    let n;
    t[29] === D ? (n = t[30]) : ((n = () => void D()), (t[29] = D), (t[30] = n));
    let r;
    return (
      t[31] !== E || t[32] !== n
        ? ((r = (0, Q.jsx)(B, { label: e, control: (0, Q.jsx)(it, { isFetching: E, onRetry: n }) })),
          (t[31] = E),
          (t[32] = n),
          (t[33] = r))
        : (r = t[33]),
      r
    );
  }
  let P;
  t[34] !== n || t[35] !== i || t[36] !== C.settings || t[37] !== N || t[38] !== r
    ? ((P = C.settings.map((e) => {
        let t = e.category === `teen_safety` ? tt : Qe;
        return (0, Q.jsx)(
          t,
          {
            setting: e,
            updateSetting: (t, a) => {
              if (i.get(pe) !== n || i.get(be) !== r) return;
              let o = new AbortController();
              (m.current.add(o),
                N({ accountId: n, userId: r, category: e.category, channel: t, controller: o, enabled: a }));
            },
          },
          e.category,
        );
      })),
      (t[34] = n),
      (t[35] = i),
      (t[36] = C.settings),
      (t[37] = N),
      (t[38] = r),
      (t[39] = P))
    : (P = t[39]);
  let F;
  return (
    t[40] === P ? (F = t[41]) : ((F = (0, Q.jsx)(Q.Fragment, { children: P })), (t[40] = P), (t[41] = F)),
    F
  );
}
function Xe(e) {
  return (
    e.controller.signal.throwIfAborted(),
    K.safePatch(`/notifications/settings`, {
      additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
      requestBody: { updates: { [e.category]: { [e.channel]: e.enabled } } },
      signal: e.controller.signal,
    })
  );
}
function Ze(e, t, n) {
  return e == null
    ? e
    : {
        ...e,
        settings: e.settings.map((e) =>
          e.category === t.category
            ? { ...e, options: e.options.map((e) => (e.channel === t.channel ? { ...e, enabled: n } : e)) }
            : e,
        ),
      };
}
function Qe(e) {
  let t = (0, Z.c)(15),
    { setting: n, updateSetting: r } = e,
    i = ee(),
    a = (0, at.useId)(),
    s;
  if (t[0] !== i || t[1] !== n.options) {
    let e = n.options.filter(et);
    ((s =
      e.length === 0
        ? i.formatMessage({
            id: `settings.notifications.chatGpt.off`,
            defaultMessage: `Off`,
            description: `Summary shown when every channel for a ChatGPT notification category is disabled`,
          })
        : e.map($e).join(`, `)),
      (t[0] = i),
      (t[1] = n.options),
      (t[2] = s));
  } else s = t[2];
  let c = s,
    l;
  t[3] !== n.category || t[4] !== n.description
    ? ((l =
        n.category === `tasks`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                n.description,
                (0, Q.jsx)(`br`, {}),
                (0, Q.jsx)(N, {
                  className: `underline`,
                  to: Oe(),
                  children: (0, Q.jsx)(u, {
                    id: `notificationSettings.manageTasks`,
                    defaultMessage: `Manage tasks`,
                    description: `Link beneath the Tasks notification preferences in Settings that opens the page for managing scheduled tasks`,
                  }),
                }),
              ],
            })
          : n.description),
      (t[3] = n.category),
      (t[4] = n.description),
      (t[5] = l))
    : (l = t[5]);
  let d;
  t[6] !== c || t[7] !== n.options || t[8] !== r || t[9] !== a
    ? ((d = (e) =>
        (0, Q.jsx)(o, {
          align: `end`,
          contentWidth: `menuWide`,
          triggerButton: (0, Q.jsx)(ve, {
            ...e,
            "aria-labelledby": `${e[`aria-labelledby`]} ${a}`,
            children: (0, Q.jsx)(`span`, { id: a, className: `truncate`, children: c }),
          }),
          children: n.options.map((e) =>
            (0, Q.jsx)(
              S.CheckboxItem,
              {
                checked: e.enabled,
                onCheckedChange: (t) => {
                  r(e.channel, t);
                },
                children: e.name,
              },
              e.channel,
            ),
          ),
        })),
      (t[6] = c),
      (t[7] = n.options),
      (t[8] = r),
      (t[9] = a),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== n.name || t[12] !== l || t[13] !== d
      ? ((f = (0, Q.jsx)(B, { label: n.name, description: l, control: d })),
        (t[11] = n.name),
        (t[12] = l),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function $e(e) {
  return e.name;
}
function et(e) {
  return e.enabled;
}
function tt(e) {
  let t = (0, Z.c)(31),
    { setting: n, updateSetting: r } = e,
    i = f(s),
    a = C(pe),
    o = C(be),
    c;
  t[0] !== a || t[1] !== o
    ? ((c = { accountId: a, userId: o }), (t[0] = a), (t[1] = o), (t[2] = c))
    : (c = t[2]);
  let { data: l, isPending: d, isError: p, isFetching: m, refetch: h } = U(G, c);
  if (d) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(Ae, {})), (t[3] = e)) : (e = t[3]);
    let r;
    return (
      t[4] === n.name
        ? (r = t[5])
        : ((r = (0, Q.jsx)(B, { label: n.name, control: e })), (t[4] = n.name), (t[5] = r)),
      r
    );
  }
  if (p || l == null) {
    let e;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`span`, {
          role: `alert`,
          children: (0, Q.jsx)(u, {
            id: `settings.notifications.chatGpt.contactError`,
            defaultMessage: `Your contact methods couldn’t be loaded`,
            description: `Error beneath the Family notification category when ChatGPT cannot determine which email and SMS channels the signed-in user can use`,
          }),
        })),
        (t[6] = e))
      : (e = t[6]);
    let r;
    t[7] === h ? (r = t[8]) : ((r = () => void h()), (t[7] = h), (t[8] = r));
    let i;
    t[9] !== m || t[10] !== r
      ? ((i = (0, Q.jsx)(it, { isFetching: m, onRetry: r })), (t[9] = m), (t[10] = r), (t[11] = i))
      : (i = t[11]);
    let a;
    return (
      t[12] !== n.name || t[13] !== i
        ? ((a = (0, Q.jsx)(B, { label: n.name, description: e, control: i })),
          (t[12] = n.name),
          (t[13] = i),
          (t[14] = a))
        : (a = t[14]),
      a
    );
  }
  let g;
  if (t[15] !== n.options || t[16] !== l) {
    let e;
    (t[18] === l
      ? (e = t[19])
      : ((e = (e) => {
          let { channel: t } = e;
          return nt(t, !!l.email, !!l.phone_number);
        }),
        (t[18] = l),
        (t[19] = e)),
      (g = n.options.filter(e)),
      (t[15] = n.options),
      (t[16] = l),
      (t[17] = g));
  } else g = t[17];
  let _;
  t[20] !== n || t[21] !== g
    ? ((_ = { ...n, options: g }), (t[20] = n), (t[21] = g), (t[22] = _))
    : (_ = t[22]);
  let v;
  t[23] !== a || t[24] !== i || t[25] !== r || t[26] !== o
    ? ((v = (e, t) => {
        let n = i.get(G, { accountId: a, userId: o });
        !n.isError && n.data != null && nt(e, !!n.data.email, !!n.data.phone_number) && r(e, t);
      }),
      (t[23] = a),
      (t[24] = i),
      (t[25] = r),
      (t[26] = o),
      (t[27] = v))
    : (v = t[27]);
  let y;
  return (
    t[28] !== _ || t[29] !== v
      ? ((y = (0, Q.jsx)(Qe, { setting: _, updateSetting: v })), (t[28] = _), (t[29] = v), (t[30] = y))
      : (y = t[30]),
    y
  );
}
function nt(e, t, n) {
  return (e !== `email` || t) && (e !== `sms` || n);
}
function rt() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Le, {
          children: (0, Q.jsx)(u, {
            id: `settings.notifications.chatGpt.loading`,
            defaultMessage: `Loading ChatGPT notification settings`,
            description: `Loading state for ChatGPT notification settings`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function it(e) {
  let n = (0, Z.c)(4),
    { isFetching: r, onRetry: i } = e,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(u, {
        id: `common.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry an operation after an error`,
      })),
      (n[0] = a))
    : (a = n[0]);
  let o;
  return (
    n[1] !== r || n[2] !== i
      ? ((o = (0, Q.jsx)(t, {
          color: `secondary`,
          size: `toolbar`,
          type: `button`,
          loading: r,
          onClick: i,
          children: a,
        })),
        (n[1] = r),
        (n[2] = i),
        (n[3] = o))
      : (o = n[3]),
    o
  );
}
var Z, at, Q, ot;
function st() {
  return (st = e(() => {
    ((Z = V()),
      d(),
      E(),
      oe(),
      y(),
      (at = ue()),
      P(),
      O(),
      J(),
      Ee(),
      de(),
      Te(),
      z(),
      i(),
      I(),
      H(),
      Ie(),
      ke(),
      M(),
      q(),
      l(),
      he(),
      (Q = ce()),
      (ot = `chatgpt-notification-settings`));
  }))();
}
function ct() {
  let e = (0, dt.c)(5),
    t = C(we),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(Ce, { slug: `notifications` })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t
        ? (0, $.jsxs)(ye, {
            children: [
              (0, $.jsx)(ye.Header, {
                title: (0, $.jsx)(u, {
                  id: `settings.notifications.chatGptGroupTitle`,
                  defaultMessage: `ChatGPT`,
                  description: `Heading for ChatGPT notification settings`,
                }),
              }),
              (0, $.jsx)(ye.Content, { children: (0, $.jsx)(re, { children: (0, $.jsx)(qe, {}) }) }),
            ],
          })
        : null),
      (e[1] = t),
      (e[2] = r));
  let i;
  return (
    e[3] === r ? (i = e[4]) : ((i = (0, $.jsx)(De, { title: n, children: r })), (e[3] = r), (e[4] = i)),
    i
  );
}
function lt() {
  let e = (0, dt.c)(95),
    r = f(s),
    i = ee(),
    c = te(),
    l = C(Fe),
    d;
  e[0] === l ? (d = e[1]) : ((d = { enabled: l }), (e[0] = l), (e[1] = d));
  let { isLoading: p } = C(Ne, d),
    m = C(Pe),
    _ = m || (l && p),
    v = (0, ft.useRef)(null),
    y = (0, ft.useRef)(null),
    b,
    w;
  (e[2] === _
    ? ((b = e[3]), (w = e[4]))
    : ((b = () => {
        !_ && document.activeElement === v.current && y.current?.focus();
      }),
      (w = [_]),
      (e[2] = _),
      (e[3] = b),
      (e[4] = w)),
    (0, ft.useLayoutEffect)(b, w));
  let T;
  e[5] !== i || e[6] !== r
    ? ((T = {
        mutationFn: ut,
        onError: () => {
          r.get(ne).danger(
            i.formatMessage({
              id: `notifications.systemSettings.openError`,
              defaultMessage: `Couldn't open System Settings`,
              description: `Error when opening macOS notification settings fails`,
            }),
            { errorAnalytics: { toastId: `notifications.systemSettings.openError` } },
          );
        },
      }),
      (e[5] = i),
      (e[6] = r),
      (e[7] = T))
    : (T = e[7]);
  let E = g(T),
    O = n(a.turnMode),
    k = n(a.permissionsEnabled),
    A = n(a.questionsEnabled),
    j = n(a.dotEnabled),
    M;
  e[8] !== i || e[9] !== r
    ? ((M = async function (e, t) {
        try {
          await ae(r, e, t);
        } catch {
          r.get(ne).danger(
            i.formatMessage({
              id: `notifications.preference.saveError`,
              defaultMessage: `Could not save notification preference`,
              description: `Error shown when saving a task notification toggle fails`,
            }),
            { errorAnalytics: { toastId: `notifications.preference.saveError` } },
          );
        }
      }),
      (e[8] = i),
      (e[9] = r),
      (e[10] = M))
    : (M = e[10]);
  let N = M,
    P = O ?? `unfocused`,
    I;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(u, { ...Y.never })), (e[11] = I))
    : (I = e[11]);
  let L;
  e[12] === i ? (L = e[13]) : ((L = i.formatMessage(Y.never)), (e[12] = i), (e[13] = L));
  let re;
  e[14] === L ? (re = e[15]) : ((re = { id: `off`, label: I, ariaLabel: L }), (e[14] = L), (e[15] = re));
  let ie;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(u, { ...Y.onlyWhenUnfocused })), (e[16] = ie))
    : (ie = e[16]);
  let R;
  e[17] === i ? (R = e[18]) : ((R = i.formatMessage(Y.onlyWhenUnfocused)), (e[17] = i), (e[18] = R));
  let z;
  e[19] === R ? (z = e[20]) : ((z = { id: `unfocused`, label: ie, ariaLabel: R }), (e[19] = R), (e[20] = z));
  let oe;
  e[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(u, { ...Y.always })), (e[21] = oe))
    : (oe = e[21]);
  let V;
  e[22] === i ? (V = e[23]) : ((V = i.formatMessage(Y.always)), (e[22] = i), (e[23] = V));
  let H;
  e[24] === V ? (H = e[25]) : ((H = { id: `always`, label: oe, ariaLabel: V }), (e[24] = V), (e[25] = H));
  let ce;
  e[26] !== z || e[27] !== H || e[28] !== re
    ? ((ce = [re, z, H]), (e[26] = z), (e[27] = H), (e[28] = re), (e[29] = ce))
    : (ce = e[29]);
  let ue = ce,
    U;
  e[30] !== m || e[31] !== E || e[32] !== c
    ? ((U = m
        ? (0, $.jsx)(
            D.div,
            {
              className: `overflow-hidden`,
              initial: !1,
              animate: { height: `auto`, opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: c ? 0 : 150 / 1e3, ease: se },
              children: (0, $.jsx)(B, {
                label: (0, $.jsx)(u, {
                  id: `notifications.systemSettings.disabled`,
                  defaultMessage: `Notifications are off`,
                  description: `Shown when macOS has not allowed this app to send system notifications`,
                }),
                description: (0, $.jsx)(u, {
                  id: `notifications.systemSettings.enableDescription`,
                  defaultMessage: `Turn on notifications in System Settings to use the options below`,
                  description: `Explains why the app's notification controls are disabled and how to enable them`,
                }),
                control: (0, $.jsx)(t, {
                  ref: v,
                  color: `outline`,
                  size: `toolbar`,
                  loading: E.isPending,
                  disabled: E.isPending,
                  onClick: () => E.mutate(),
                  children: (0, $.jsx)(u, {
                    id: `notifications.systemSettings.open`,
                    defaultMessage: `Open System Settings`,
                    description: `Button opening macOS System Settings at this app's notification permissions`,
                  }),
                }),
              }),
            },
            `system-notifications-disabled`,
          )
        : null),
      (e[30] = m),
      (e[31] = E),
      (e[32] = c),
      (e[33] = U))
    : (U = e[33]);
  let de;
  e[34] === U
    ? (de = e[35])
    : ((de = (0, $.jsx)(x, { initial: !1, children: U })), (e[34] = U), (e[35] = de));
  let fe, pe;
  e[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(u, { ...Y.turnCompletionNotifications })),
      (pe = (0, $.jsx)(u, {
        id: `notifications.turnMode.description`,
        defaultMessage: `Set when ChatGPT alerts you that it's finished`,
        description: `Explains that this setting controls when the app sends an alert after ChatGPT finishes an agent response or run`,
      })),
      (e[36] = fe),
      (e[37] = pe))
    : ((fe = e[36]), (pe = e[37]));
  let me = ue.find((e) => e.id === P)?.label,
    he;
  e[38] === me
    ? (he = e[39])
    : ((he = (0, $.jsx)(`span`, { className: `truncate`, children: me })), (e[38] = me), (e[39] = he));
  let W;
  e[40] !== _ || e[41] !== he
    ? ((W = (0, $.jsx)(ve, { ref: y, disabled: _, children: he })), (e[40] = _), (e[41] = he), (e[42] = W))
    : (W = e[42]);
  let ge;
  e[43] !== _ || e[44] !== r || e[45] !== P || e[46] !== ue
    ? ((ge = (0, $.jsx)(`div`, {
        className: `max-h-80 overflow-y-auto`,
        children: ue.map((e) => {
          let t = e.id === P;
          return (0, $.jsx)(
            S.Item,
            {
              disabled: _,
              rightIconAsset: t ? le : void 0,
              onSelect: () => {
                ae(r, a.turnMode, e.id);
              },
              "aria-label": e.ariaLabel,
              children: (0, $.jsx)(`span`, { className: `truncate`, children: e.label }),
            },
            e.id,
          );
        }),
      })),
      (e[43] = _),
      (e[44] = r),
      (e[45] = P),
      (e[46] = ue),
      (e[47] = ge))
    : (ge = e[47]);
  let G;
  e[48] !== _ || e[49] !== W || e[50] !== ge
    ? ((G = (0, $.jsx)(B, {
        label: fe,
        description: pe,
        control: (0, $.jsx)(o, {
          contentWidth: `menuWide`,
          disabled: _,
          align: `end`,
          triggerButton: W,
          children: ge,
        }),
      })),
      (e[48] = _),
      (e[49] = W),
      (e[50] = ge),
      (e[51] = G))
    : (G = e[51]);
  let _e, ye;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(u, { ...Y.permissionNotifications })),
      (ye = (0, $.jsx)(u, {
        id: `notifications.permissions.description`,
        defaultMessage: `Show alerts when notification permissions are required`,
        description: `Description for permission notification toggle`,
      })),
      (e[52] = _e),
      (e[53] = ye))
    : ((_e = e[52]), (ye = e[53]));
  let be = k ?? !0,
    K;
  e[54] === N
    ? (K = e[55])
    : ((K = (e) => {
        N(a.permissionsEnabled, e);
      }),
      (e[54] = N),
      (e[55] = K));
  let xe;
  e[56] === i ? (xe = e[57]) : ((xe = i.formatMessage(Y.permissionNotifications)), (e[56] = i), (e[57] = xe));
  let Se;
  e[58] !== _ || e[59] !== be || e[60] !== K || e[61] !== xe
    ? ((Se = (0, $.jsx)(B, {
        label: _e,
        description: ye,
        control: (0, $.jsx)(F, { checked: be, disabled: _, onChange: K, ariaLabel: xe }),
      })),
      (e[58] = _),
      (e[59] = be),
      (e[60] = K),
      (e[61] = xe),
      (e[62] = Se))
    : (Se = e[62]);
  let Ce, we;
  e[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(u, { ...Y.questionNotifications })),
      (we = (0, $.jsx)(u, {
        id: `notifications.questions.description`,
        defaultMessage: `Show alerts when input is needed to continue`,
        description: `Description for question notification toggle`,
      })),
      (e[63] = Ce),
      (e[64] = we))
    : ((Ce = e[63]), (we = e[64]));
  let Te = A ?? !0,
    Ee;
  e[65] === N
    ? (Ee = e[66])
    : ((Ee = (e) => {
        N(a.questionsEnabled, e);
      }),
      (e[65] = N),
      (e[66] = Ee));
  let De;
  e[67] === i ? (De = e[68]) : ((De = i.formatMessage(Y.questionNotifications)), (e[67] = i), (e[68] = De));
  let Oe;
  e[69] !== _ || e[70] !== Te || e[71] !== Ee || e[72] !== De
    ? ((Oe = (0, $.jsx)(B, {
        label: Ce,
        description: we,
        control: (0, $.jsx)(F, { checked: Te, disabled: _, onChange: Ee, ariaLabel: De }),
      })),
      (e[69] = _),
      (e[70] = Te),
      (e[71] = Ee),
      (e[72] = De),
      (e[73] = Oe))
    : (Oe = e[73]);
  let ke, Ae;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, $.jsx)(u, { ...pt.dotNotifications })),
      (Ae = (0, $.jsx)(u, {
        id: `notifications.dot.description`,
        defaultMessage: `Show alerts when your dot sends you a message`,
        description: `Explains that this setting enables desktop alerts from the user's personal AI agent, called their dot. dot is the product name; keep it lowercase and untranslated.`,
      })),
      (e[74] = ke),
      (e[75] = Ae))
    : ((ke = e[74]), (Ae = e[75]));
  let je = j ?? !0,
    q;
  e[76] === N
    ? (q = e[77])
    : ((q = (e) => {
        N(a.dotEnabled, e);
      }),
      (e[76] = N),
      (e[77] = q));
  let J;
  e[78] === i ? (J = e[79]) : ((J = i.formatMessage(pt.dotNotifications)), (e[78] = i), (e[79] = J));
  let Me;
  e[80] !== _ || e[81] !== je || e[82] !== q || e[83] !== J
    ? ((Me = (0, $.jsx)(B, {
        label: ke,
        description: Ae,
        control: (0, $.jsx)(F, { checked: je, disabled: _, onChange: q, ariaLabel: J }),
      })),
      (e[80] = _),
      (e[81] = je),
      (e[82] = q),
      (e[83] = J),
      (e[84] = Me))
    : (Me = e[84]);
  let Ie;
  e[85] === _
    ? (Ie = e[86])
    : ((Ie = h.notifications == null ? null : (0, $.jsx)(Ve, { disabled: _ })), (e[85] = _), (e[86] = Ie));
  let Le;
  e[87] === Symbol.for(`react.memo_cache_sentinel`) ? ((Le = null), (e[87] = Le)) : (Le = e[87]);
  let Re;
  return (
    e[88] !== de || e[89] !== G || e[90] !== Se || e[91] !== Oe || e[92] !== Me || e[93] !== Ie
      ? ((Re = (0, $.jsxs)($.Fragment, { children: [de, G, Se, Oe, Me, Ie, Le] })),
        (e[88] = de),
        (e[89] = G),
        (e[90] = Se),
        (e[91] = Oe),
        (e[92] = Me),
        (e[93] = Ie),
        (e[94] = Re))
      : (Re = e[94]),
    Re
  );
}
async function ut() {
  return h.systemPermissions?.openNotificationSettings();
}
var dt, ft, $, pt;
function mt() {
  return (mt = e(() => {
    ((dt = V()),
      k(),
      d(),
      c(),
      j(),
      y(),
      R(),
      (ft = ue()),
      P(),
      J(),
      z(),
      i(),
      I(),
      _(),
      m(),
      Me(),
      ie(),
      H(),
      w(),
      xe(),
      Re(),
      fe(),
      M(),
      q(),
      p(),
      b(),
      Ke(),
      st(),
      ($ = ce()),
      (pt = r({
        dotNotifications: {
          id: `notifications.dot.label`,
          defaultMessage: `Enable dot notifications`,
          description: `Label for enabling desktop alerts from the user's personal AI agent, called their dot. dot is the product name; keep it lowercase and untranslated.`,
        },
      })));
  }))();
}
export { Re as a, Y as i, ct as n, mt as r, lt as t };
//# sourceMappingURL=notifications-settings-ea08d8372834.js.map
