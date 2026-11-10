import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  CH as i,
  FBt as a,
  HO as o,
  IO as ee,
  JO as s,
  LNt as c,
  Lst as l,
  Mst as te,
  NO as ne,
  PBt as u,
  PO as d,
  Qst as re,
  RO as ie,
  Rrt as f,
  Rst as ae,
  TY as p,
  Uet as m,
  Vrt as h,
  XOt as g,
  Y3 as _,
  YOt as v,
  Z3 as y,
  ZSt as b,
  e6 as x,
  jst as S,
  nB as oe,
  okt as se,
  qO as ce,
  qrt as le,
  rB as C,
  sJ as ue,
  tkt as w,
  uG as de,
  vW as fe,
  vst as T,
  wH as pe,
  yst as me,
  zO as E,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as D,
  JTt as O,
  QTt as k,
  SRn as he,
  WTt as ge,
  XTt as _e,
  ZTt as A,
  bRn as j,
  iRr as ve,
  oon as ye,
  qLn as M,
  son as N,
  tyr as P,
} from "./app-initial-ad16eaadf81f.js";
import { _ as be, g as xe, t as F, v as Se, y as Ce } from "./src-64808839b2f3.js";
import { n as I, t as we } from "./linkedin-21df1590d52c.js";
import { n as L, t as Te } from "./twitter-7ceb296bddc1.js";
import {
  a as Ee,
  i as De,
  n as R,
  o as z,
  r as Oe,
  s as ke,
  t as Ae,
  u as B,
} from "./username-validation-1b83916da7fe.js";
function je(e) {
  let t = (0, H.c)(3),
    { page: n } = e,
    r = O(n.display_settings),
    i =
      r.showUsageStatistics ||
      r.showInsights ||
      (r.showActivityGraph && n.workspace_display_settings?.activity_enabled !== !1)
        ? `yes`
        : `no`,
    a = r.showTopPlugins && n.top_plugins != null ? `yes` : `no`,
    o;
  return (
    t[0] !== i || t[1] !== a
      ? ((o = (0, U.jsx)(w, {
          id: `profile.sharing.public.includedSectionGroupsWithHelp`,
          defaultMessage: `Includes your profile details{usage, select, yes {, usage} other {}}{plugins, select, yes {, plugins} other {}} and showcase. <link>Learn more</link>`,
          description: `Supporting sentence below Anyone with a link in the personal profile sharing dialog, describing what visitors can see. Profile details (name, username, photo, bio) and showcase (featured sites and skills) are always included. The usage selector is yes when any usage statistics, activity graph, or usage insights section is shared, otherwise no. The plugins selector is yes when most-used plugins are shared, otherwise no. The link opens a Help Center article about profiles. Keep the category names short. Translate the complete sentence and adapt punctuation or order as needed for all four combinations, including when both optional categories are absent.`,
          values: { usage: i, plugins: a, link: V },
        })),
        (t[0] = i),
        (t[1] = a),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
function V(e) {
  return (0, U.jsx)(D, {
    appearance: `secondary`,
    href: `https://help.openai.com/articles/20001539`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = u()), g(), M(), A(), (U = c()));
  }))();
}
function G(e) {
  let r = (0, Me.c)(53),
    { accountId: a, userId: o, username: s, workspaceSlug: c, imageUrl: l, isWorkspace: u, onClose: d } = e,
    f = n(re),
    p = se(),
    h = ae(),
    g = k(a, o),
    v;
  r[0] !== a || r[1] !== s || r[2] !== o || r[3] !== c
    ? ((v = k(a, o, s, !1, void 0, c)), (r[0] = a), (r[1] = s), (r[2] = o), (r[3] = c), (r[4] = v))
    : (v = r[4]);
  let { data: y, isError: b, refetch: x } = te(v),
    S;
  r[5] !== y || r[6] !== f ? ((S = ke(f, y)), (r[5] = y), (r[6] = f), (r[7] = S)) : (S = r[7]);
  let C = S,
    [T, D] = (0, K.useState)(!1),
    [O, A] = (0, K.useState)(!1),
    j = (0, K.useRef)(!1),
    M = JSON.stringify(g.queryKey),
    N;
  r[8] === M ? (N = r[9]) : ((N = { id: M }), (r[8] = M), (r[9] = N));
  let P;
  r[10] !== C || r[11] !== h || r[12] !== g
    ? ((P = async () => (await h.cancelQueries({ queryKey: g.queryKey }), C)),
      (r[10] = C),
      (r[11] = h),
      (r[12] = g),
      (r[13] = P))
    : (P = r[13]);
  let F;
  r[14] === a
    ? (F = r[15])
    : ((F = (e) =>
        ve.safePatch(`/profiles/me`, {
          additionalHeaders: { "ChatGPT-Account-ID": a },
          requestBody: { profile_visibility: e },
        })),
      (r[14] = a),
      (r[15] = F));
  let I;
  r[16] !== h || r[17] !== g || r[18] !== f
    ? ((I = (e, t, n) => {
        (n?.saved(t),
          h.setQueriesData({ queryKey: g.queryKey }, (e) =>
            e == null || !e.is_self
              ? e
              : { ...e, page: { ...e.page, visibility: { ...e.page.visibility, value: t } } },
          ),
          f
            .get(le)
            .success(
              (0, q.jsx)(w, {
                id: `profile.sharing.visibilityUpdated`,
                defaultMessage: `Visibility updated`,
                description: `Success toast after the profile visibility setting has been saved`,
              }),
              { variant: `successNeutral`, hasCloseButton: !1 },
            ));
      }),
      (r[16] = h),
      (r[17] = g),
      (r[18] = f),
      (r[19] = I))
    : (I = r[19]);
  let L;
  r[20] !== N || r[21] !== P || r[22] !== F || r[23] !== I
    ? ((L = { scope: N, onMutate: P, mutationFn: F, onSuccess: I }),
      (r[20] = N),
      (r[21] = P),
      (r[22] = F),
      (r[23] = I),
      (r[24] = L))
    : (L = r[24]);
  let { mutate: R, isPending: z, isError: B, variables: V } = me(L),
    H = y?.profile_details.username ?? null,
    U;
  r[25] === H ? (U = r[26]) : ((U = Oe(H)), (r[25] = H), (r[26] = U));
  let W = U,
    G;
  r[27] === H ? (G = r[28]) : ((G = Ae(H)), (r[27] = H), (r[28] = G));
  let Y = G,
    X = y?.page.visibility,
    Ne = y?.profile_details.profile_url,
    Z = Ne != null && H && W && (u || X?.value === `public`) ? `https://chatgpt.com${Ne}` : null,
    Q;
  r[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, q.jsx)(E, {
        children: (0, q.jsx)(ie, {
          title: (0, q.jsx)(ce, {
            children: (0, q.jsx)(w, {
              id: `profile.sharing.title`,
              defaultMessage: `Share your profile`,
              description: `Title of the dialog for choosing who can view your profile and copying or sharing its link`,
            }),
          }),
        }),
      })),
      (r[29] = Q))
    : (Q = r[29]);
  let $;
  return (
    r[30] !== C ||
    r[31] !== Y ||
    r[32] !== T ||
    r[33] !== O ||
    r[34] !== l ||
    r[35] !== p ||
    r[36] !== b ||
    r[37] !== z ||
    r[38] !== B ||
    r[39] !== W ||
    r[40] !== u ||
    r[41] !== R ||
    r[42] !== d ||
    r[43] !== y ||
    r[44] !== x ||
    r[45] !== D ||
    r[46] !== A ||
    r[47] !== Z ||
    r[48] !== o ||
    r[49] !== H ||
    r[50] !== V ||
    r[51] !== X
      ? (($ = (0, q.jsxs)(ee, {
          className: `select-none`,
          size: `viewport`,
          children: [
            Q,
            (0, q.jsx)(E, {
              spacing: `large`,
              children:
                y == null
                  ? (0, q.jsx)(`div`, {
                      className: `flex flex-col gap-2 text-sm`,
                      children: b
                        ? (0, q.jsxs)(q.Fragment, {
                            children: [
                              (0, q.jsx)(`div`, {
                                role: `alert`,
                                children: (0, q.jsx)(w, {
                                  id: `profile.sharing.loadError`,
                                  defaultMessage: `Couldn’t load sharing settings`,
                                  description: `Error in the profile sharing dialog when permissions could not be loaded`,
                                }),
                              }),
                              (0, q.jsx)(_, {
                                color: `secondary`,
                                onClick: () => void x(),
                                children: (0, q.jsx)(w, {
                                  id: `profile.sharing.retry`,
                                  defaultMessage: `Try again`,
                                  description: `Button to retry loading profile sharing settings`,
                                }),
                              }),
                            ],
                          })
                        : (0, q.jsxs)(`div`, {
                            role: `status`,
                            children: [
                              (0, q.jsx)(t, {}),
                              (0, q.jsx)(`span`, {
                                className: `sr-only`,
                                children: (0, q.jsx)(w, {
                                  id: `profile.sharing.loading`,
                                  defaultMessage: `Loading sharing settings`,
                                  description: `Accessible status while profile sharing permissions load`,
                                }),
                              }),
                            ],
                          }),
                    })
                  : (0, q.jsx)(Se, {
                      thumbnailLabel: (0, q.jsx)(w, {
                        id: `profile.sharing.thumbnail`,
                        defaultMessage: `Profile thumbnail`,
                        description: `Label above a preview of the person's profile photo and chosen photo shape in the profile sharing dialog`,
                      }),
                      thumbnail: (0, q.jsx)(ye, {
                        alt: ``,
                        colorKey: o,
                        name: y.profile_details.display_name ?? (H == null ? null : ge(H).localUsername),
                        shape: _e(y.profile_details.photo_frame_style),
                        size: `profile`,
                        src: l,
                      }),
                      workspaceNotice: u
                        ? (0, q.jsx)(w, {
                            id: `profile.sharing.workspaceVisibility`,
                            defaultMessage: `Your workspace profile is only visible to members of this workspace`,
                            description: `Explanation in the profile sharing dialog that only members of the current workspace can view this profile`,
                          })
                        : null,
                      audienceLabel: (0, q.jsx)(w, {
                        id: `profile.sharing.audience`,
                        defaultMessage: `Who can see your profile`,
                        description: `Heading above audience choices in the profile sharing dialog. The choices determine who can view this profile.`,
                      }),
                      renderAudienceOption: (e) =>
                        (0, q.jsxs)(
                          `div`,
                          {
                            className: `flex flex-col`,
                            children: [
                              (0, q.jsx)(_, {
                                "aria-describedby":
                                  e === `public` ? `profile-sharing-public-description` : void 0,
                                "aria-pressed": X?.value === e,
                                color: e === `public` && X?.value === e ? `ghostAccentSubtle` : `ghostSubtle`,
                                disabled:
                                  !y.is_self ||
                                  !y.can_edit ||
                                  !X?.can_edit ||
                                  !X.selectable_options?.includes(e) ||
                                  (e === `public` && !W) ||
                                  z,
                                className: `-mx-2`,
                                radius: `large`,
                                size: `settingsOption`,
                                onClick: () => {
                                  e !== X?.value && (C?.selected(e), R(e));
                                },
                                children: (0, q.jsxs)(xe, {
                                  icon: e === `private` ? (0, q.jsx)(de, {}) : (0, q.jsx)(fe, {}),
                                  label: (0, q.jsx)(w, { ...J[e] }),
                                  isPublicSelected: e === `public` && X?.value === e,
                                  children: [
                                    z && V === e && (0, q.jsx)(t, {}),
                                    X?.value === e && (0, q.jsx)(pe, { className: `text-default` }),
                                  ],
                                }),
                              }),
                              e === `public` &&
                                (0, q.jsx)(be, {
                                  id: `profile-sharing-public-description`,
                                  children: (0, q.jsx)(je, { page: y.page }),
                                }),
                            ],
                          },
                          e,
                        ),
                      feedback: (0, q.jsxs)(q.Fragment, {
                        children: [
                          !u &&
                            X?.restriction_reason === `enterprise_membership` &&
                            (0, q.jsx)(`p`, {
                              className: `text-sm text-secondary`,
                              children: (0, q.jsx)(w, {
                                id: `profile.sharing.enterpriseMembershipRestriction`,
                                defaultMessage: `Sharing your personal profile is disabled because you’re a member of an Enterprise workspace`,
                                description: `Explanation in the profile sharing dialog when Enterprise workspace membership prevents the user from sharing their personal profile`,
                              }),
                            }),
                          Y != null &&
                            (0, q.jsx)(`div`, {
                              className: `text-sm text-danger`,
                              role: `alert`,
                              children: (0, q.jsx)(w, { ...De.blockedSuffix, values: { suffix: Y } }),
                            }),
                          B &&
                            (0, q.jsx)(`div`, {
                              className: `text-sm text-danger`,
                              role: `alert`,
                              children: (0, q.jsx)(w, {
                                id: `profile.sharing.saveError`,
                                defaultMessage: `Couldn’t update visibility. Try again`,
                                description: `Error after saving profile visibility fails; the previous audience remains selected`,
                              }),
                            }),
                        ],
                      }),
                      copyLink:
                        Z == null
                          ? null
                          : (0, q.jsx)(_, {
                              "aria-label": p.formatMessage({
                                id: `profile.sharing.copyLink`,
                                defaultMessage: `Copy profile link`,
                                description: `Button to copy the displayed profile URL to the clipboard`,
                              }),
                              "aria-busy": O || void 0,
                              "aria-disabled": O || T || void 0,
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                j.current ||
                                  T ||
                                  ((j.current = !0),
                                  A(!0),
                                  C?.copyClicked(),
                                  ne(Z).then((e) => {
                                    ((j.current = !1),
                                      A(!1),
                                      D(e),
                                      C?.copied(e),
                                      e && setTimeout(() => D(!1), 2e3));
                                  }));
                              },
                              children: (0, q.jsx)(Ce, {
                                url: Z,
                                children: T
                                  ? (0, q.jsxs)(`span`, {
                                      className: `flex items-center gap-1`,
                                      role: `status`,
                                      children: [
                                        (0, q.jsx)(i, {}),
                                        (0, q.jsx)(w, {
                                          id: `profile.sharing.copied`,
                                          defaultMessage: `Copied`,
                                          description: `Confirmation after the profile link has been copied successfully`,
                                        }),
                                      ],
                                    })
                                  : (0, q.jsx)(ue, {}),
                              }),
                            }),
                      socialActions:
                        Z == null || u
                          ? null
                          : [
                              { label: J.x, Icon: Te, url: `https://x.com/intent/post`, destination: `x` },
                              {
                                label: J.linkedin,
                                Icon: we,
                                url: `https://www.linkedin.com/sharing/share-offsite/`,
                                destination: `linkedin`,
                              },
                              {
                                label: J.reddit,
                                Icon: Ee,
                                url: `https://www.reddit.com/submit`,
                                destination: `reddit`,
                              },
                            ].map((e) => {
                              let { label: t, Icon: n, url: r, destination: i } = e;
                              return (0, q.jsx)(
                                oe,
                                {
                                  cloneCustomTrigger: !0,
                                  tooltipContent: (0, q.jsx)(w, { ...t }),
                                  children: (0, q.jsx)(_, {
                                    className: `min-w-0 flex-1 justify-center`,
                                    "aria-label": p.formatMessage(t),
                                    color: `outline`,
                                    radius: `full`,
                                    size: `dialogGhost`,
                                    onClick: (e) => {
                                      (C?.shared(i, m.CODEX_PROFILE_SHARING_RESULT_CLICKED),
                                        C?.shared(i, m.CODEX_PROFILE_SHARING_RESULT_REQUESTED),
                                        d(),
                                        he({
                                          event: e,
                                          href: `${r}?url=${encodeURIComponent(Z)}`,
                                          initiator: `open_in_browser_bridge`,
                                          openTarget: `external-browser`,
                                        }));
                                    },
                                    children: (0, q.jsx)(n, { "aria-hidden": !0, className: `icon-sm` }),
                                  }),
                                },
                                r,
                              );
                            }),
                    }),
            }),
          ],
        })),
        (r[30] = C),
        (r[31] = Y),
        (r[32] = T),
        (r[33] = O),
        (r[34] = l),
        (r[35] = p),
        (r[36] = b),
        (r[37] = z),
        (r[38] = B),
        (r[39] = W),
        (r[40] = u),
        (r[41] = R),
        (r[42] = d),
        (r[43] = y),
        (r[44] = x),
        (r[45] = D),
        (r[46] = A),
        (r[47] = Z),
        (r[48] = o),
        (r[49] = H),
        (r[50] = V),
        (r[51] = X),
        (r[52] = $))
      : ($ = r[52]),
    $
  );
}
var Me, K, q, J;
function Y() {
  return (Y = e(() => {
    ((Me = u()),
      f(),
      F(),
      T(),
      S(),
      l(),
      b(),
      (K = a()),
      g(),
      P(),
      N(),
      y(),
      s(),
      o(),
      j(),
      p(),
      x(),
      h(),
      C(),
      I(),
      z(),
      L(),
      r(),
      d(),
      B(),
      A(),
      R(),
      W(),
      (q = c()),
      (J = v({
        private: {
          id: `profile.sharing.private`,
          defaultMessage: `Only visible to you`,
          description: `Profile sharing option that makes the personal profile private`,
        },
        public: {
          id: `profile.sharing.public`,
          defaultMessage: `Anyone with a link`,
          description: `Profile sharing option that makes the personal profile publicly accessible`,
        },
        x: {
          id: `profile.sharing.x`,
          defaultMessage: `Share on X`,
          description: `Accessible label for opening X with a draft containing the profile link`,
        },
        linkedin: {
          id: `profile.sharing.linkedin`,
          defaultMessage: `Share on LinkedIn`,
          description: `Accessible label for opening LinkedIn with a draft containing the profile link`,
        },
        reddit: {
          id: `profile.sharing.reddit`,
          defaultMessage: `Share on Reddit`,
          description: `Accessible label for opening Reddit with a draft containing the profile link`,
        },
      })));
  }))();
}
Y();
export { G as ProfileShareDialogContent };
//# sourceMappingURL=dialog-66f5e030a74c.js.map
