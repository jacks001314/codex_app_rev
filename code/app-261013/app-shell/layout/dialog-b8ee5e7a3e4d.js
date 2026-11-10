import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  DV as i,
  IDt as a,
  Iot as o,
  Ixt as s,
  Lot as ee,
  OV as te,
  Pxt as c,
  Rnt as l,
  SU as ne,
  TJ as u,
  U9 as d,
  VDt as re,
  Xot as ie,
  Yot as f,
  _O as ae,
  cO as oe,
  cz as p,
  fO as m,
  hot as se,
  i3 as h,
  iO as g,
  jDt as _,
  lO as ce,
  lot as v,
  mW as le,
  nst as ue,
  oO as de,
  r3 as y,
  rO as fe,
  sq as pe,
  sz as me,
  t3 as b,
  tst as x,
  vO as S,
  vzt as C,
  wot as w,
  xMt as T,
  yzt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bnn as D,
  JPn as O,
  XPn as he,
  Ymr as ge,
  dkt as k,
  ehr as A,
  hkt as j,
  mkt as M,
  pkt as _e,
  skt as ve,
  xPn as N,
  yPn as P,
  znn as ye,
} from "./app-initial-5851df3f6cb1.js";
import { _ as be, g as xe, t as F, v as Se, y as Ce } from "./src-c65a930b3c0e.js";
import { n as I, t as we } from "./linkedin-2032ee10f5b5.js";
import { n as L, t as Te } from "./twitter-2bc60b5bdd97.js";
import {
  a as Ee,
  i as De,
  n as R,
  o as z,
  r as Oe,
  s as ke,
  t as Ae,
  u as B,
} from "./username-validation-c1e2f125c179.js";
function je(e) {
  let t = (0, H.c)(3),
    { page: n } = e,
    r = k(n.display_settings),
    i =
      r.showUsageStatistics ||
      r.showInsights ||
      (r.showActivityGraph && n.workspace_display_settings?.activity_enabled !== !1)
        ? `yes`
        : `no`,
    o = r.showTopPlugins && n.top_plugins != null ? `yes` : `no`,
    s;
  return (
    t[0] !== i || t[1] !== o
      ? ((s = (0, U.jsx)(a, {
          id: `profile.sharing.public.includedSectionGroupsWithHelp`,
          defaultMessage: `Includes your profile details{usage, select, yes {, usage} other {}}{plugins, select, yes {, plugins} other {}} and showcase. <link>Learn more</link>`,
          description: `Supporting sentence below Anyone with a link in the personal profile sharing dialog, describing what visitors can see. Profile details (name, username, photo, bio) and showcase (featured sites and skills) are always included. The usage selector is yes when any usage statistics, activity graph, or usage insights section is shared, otherwise no. The plugins selector is yes when most-used plugins are shared, otherwise no. The link opens a Help Center article about profiles. Keep the category names short. Translate the complete sentence and adapt punctuation or order as needed for all four combinations, including when both optional categories are absent.`,
          values: { usage: i, plugins: o, link: V },
        })),
        (t[0] = i),
        (t[1] = o),
        (t[2] = s))
      : (s = t[2]),
    s
  );
}
function V(e) {
  return (0, U.jsx)(P, {
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
    ((H = C()), _(), N(), M(), (U = T()));
  }))();
}
function G(e) {
  let n = (0, K.c)(52),
    { accountId: o, userId: c, username: l, imageUrl: u, isWorkspace: f, onClose: p } = e,
    m = s(r),
    h = re(),
    g = ue(),
    _ = j(o, c),
    v;
  n[0] !== o || n[1] !== l || n[2] !== c
    ? ((v = j(o, c, l)), (n[0] = o), (n[1] = l), (n[2] = c), (n[3] = v))
    : (v = n[3]);
  let { data: b, isError: x, refetch: S } = ie(v),
    C;
  n[4] !== b || n[5] !== m ? ((C = ke(m, b)), (n[4] = b), (n[5] = m), (n[6] = C)) : (C = n[6]);
  let w = C,
    [T, E] = (0, q.useState)(!1),
    [D, O] = (0, q.useState)(!1),
    k = (0, q.useRef)(!1),
    A = JSON.stringify(_.queryKey),
    M;
  n[7] === A ? (M = n[8]) : ((M = { id: A }), (n[7] = A), (n[8] = M));
  let N;
  n[9] !== w || n[10] !== g || n[11] !== _
    ? ((N = async () => (await g.cancelQueries({ queryKey: _.queryKey }), w)),
      (n[9] = w),
      (n[10] = g),
      (n[11] = _),
      (n[12] = N))
    : (N = n[12]);
  let P;
  n[13] === o
    ? (P = n[14])
    : ((P = (e) =>
        ge.safePatch(`/profiles/me`, {
          additionalHeaders: { "ChatGPT-Account-ID": o },
          requestBody: { profile_visibility: e },
        })),
      (n[13] = o),
      (n[14] = P));
  let F;
  n[15] !== g || n[16] !== _ || n[17] !== m
    ? ((F = (e, t, n) => {
        (n?.saved(t),
          g.setQueriesData({ queryKey: _.queryKey }, (e) =>
            e == null || !e.is_self
              ? e
              : { ...e, page: { ...e.page, visibility: { ...e.page.visibility, value: t } } },
          ),
          m
            .get(se)
            .success(
              (0, J.jsx)(a, {
                id: `profile.sharing.visibilityUpdated`,
                defaultMessage: `Visibility updated`,
                description: `Success toast after the profile visibility setting has been saved`,
              }),
              { variant: `successNeutral`, hasCloseButton: !1 },
            ));
      }),
      (n[15] = g),
      (n[16] = _),
      (n[17] = m),
      (n[18] = F))
    : (F = n[18]);
  let I;
  n[19] !== M || n[20] !== N || n[21] !== P || n[22] !== F
    ? ((I = { scope: M, onMutate: N, mutationFn: P, onSuccess: F }),
      (n[19] = M),
      (n[20] = N),
      (n[21] = P),
      (n[22] = F),
      (n[23] = I))
    : (I = n[23]);
  let { mutate: L, isPending: R, isError: z, variables: B } = ee(I),
    V = b?.profile_details.username ?? null,
    H;
  n[24] === V ? (H = n[25]) : ((H = Oe(V)), (n[24] = V), (n[25] = H));
  let U = H,
    W;
  n[26] === V ? (W = n[27]) : ((W = Ae(V)), (n[26] = V), (n[27] = W));
  let G = W,
    X = b?.page.visibility,
    Z = V && U && (f || X?.value === `public`) ? `https://chatgpt.com/u/${encodeURIComponent(V)}` : null,
    Q;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, J.jsx)(ce, {
        children: (0, J.jsx)(oe, {
          title: (0, J.jsx)(ae, {
            children: (0, J.jsx)(a, {
              id: `profile.sharing.title`,
              defaultMessage: `Share your profile`,
              description: `Title of the dialog for choosing who can view your profile and copying or sharing its link`,
            }),
          }),
        }),
      })),
      (n[28] = Q))
    : (Q = n[28]);
  let $;
  return (
    n[29] !== w ||
    n[30] !== G ||
    n[31] !== T ||
    n[32] !== D ||
    n[33] !== u ||
    n[34] !== h ||
    n[35] !== x ||
    n[36] !== R ||
    n[37] !== z ||
    n[38] !== U ||
    n[39] !== f ||
    n[40] !== L ||
    n[41] !== p ||
    n[42] !== b ||
    n[43] !== S ||
    n[44] !== E ||
    n[45] !== O ||
    n[46] !== Z ||
    n[47] !== c ||
    n[48] !== V ||
    n[49] !== B ||
    n[50] !== X
      ? (($ = (0, J.jsxs)(de, {
          className: `select-none`,
          size: `viewport`,
          children: [
            Q,
            (0, J.jsx)(ce, {
              spacing: `large`,
              children:
                b == null
                  ? (0, J.jsx)(`div`, {
                      className: `flex flex-col gap-2 text-sm`,
                      children: x
                        ? (0, J.jsxs)(J.Fragment, {
                            children: [
                              (0, J.jsx)(`div`, {
                                role: `alert`,
                                children: (0, J.jsx)(a, {
                                  id: `profile.sharing.loadError`,
                                  defaultMessage: `Couldn’t load sharing settings`,
                                  description: `Error in the profile sharing dialog when permissions could not be loaded`,
                                }),
                              }),
                              (0, J.jsx)(t, {
                                color: `secondary`,
                                onClick: () => void S(),
                                children: (0, J.jsx)(a, {
                                  id: `profile.sharing.retry`,
                                  defaultMessage: `Try again`,
                                  description: `Button to retry loading profile sharing settings`,
                                }),
                              }),
                            ],
                          })
                        : (0, J.jsxs)(`div`, {
                            role: `status`,
                            children: [
                              (0, J.jsx)(y, {}),
                              (0, J.jsx)(`span`, {
                                className: `sr-only`,
                                children: (0, J.jsx)(a, {
                                  id: `profile.sharing.loading`,
                                  defaultMessage: `Loading sharing settings`,
                                  description: `Accessible status while profile sharing permissions load`,
                                }),
                              }),
                            ],
                          }),
                    })
                  : (0, J.jsx)(Se, {
                      thumbnailLabel: (0, J.jsx)(a, {
                        id: `profile.sharing.thumbnail`,
                        defaultMessage: `Profile thumbnail`,
                        description: `Label above a preview of the person's profile photo and chosen photo shape in the profile sharing dialog`,
                      }),
                      thumbnail: (0, J.jsx)(ye, {
                        alt: ``,
                        colorKey: c,
                        name: b.profile_details.display_name ?? (V == null ? null : ve(V).localUsername),
                        shape: _e(b.profile_details.photo_frame_style),
                        size: `profile`,
                        src: u,
                      }),
                      workspaceNotice: f
                        ? (0, J.jsx)(a, {
                            id: `profile.sharing.workspaceVisibility`,
                            defaultMessage: `Your workspace profile is only visible to members of this workspace`,
                            description: `Explanation in the profile sharing dialog that only members of the current workspace can view this profile`,
                          })
                        : null,
                      audienceLabel: (0, J.jsx)(a, {
                        id: `profile.sharing.audience`,
                        defaultMessage: `Who can see your profile`,
                        description: `Heading above audience choices in the profile sharing dialog. The choices determine who can view this profile.`,
                      }),
                      renderAudienceOption: (e) =>
                        (0, J.jsxs)(
                          `div`,
                          {
                            className: `flex flex-col`,
                            children: [
                              (0, J.jsx)(t, {
                                "aria-describedby":
                                  e === `public` ? `profile-sharing-public-description` : void 0,
                                "aria-pressed": X?.value === e,
                                color: e === `public` && X?.value === e ? `ghostAccentSubtle` : `ghostSubtle`,
                                disabled:
                                  !b.is_self ||
                                  !b.can_edit ||
                                  !X?.can_edit ||
                                  !X.selectable_options?.includes(e) ||
                                  (e === `public` && !U) ||
                                  R,
                                className: `-mx-2`,
                                radius: `large`,
                                size: `settingsOption`,
                                onClick: () => {
                                  e !== X?.value && (w?.selected(e), L(e));
                                },
                                children: (0, J.jsxs)(xe, {
                                  icon: e === `private` ? (0, J.jsx)(le, {}) : (0, J.jsx)(ne, {}),
                                  label: (0, J.jsx)(a, { ...Y[e] }),
                                  isPublicSelected: e === `public` && X?.value === e,
                                  children: [
                                    R && B === e && (0, J.jsx)(y, {}),
                                    X?.value === e && (0, J.jsx)(te, { className: `text-default` }),
                                  ],
                                }),
                              }),
                              e === `public` &&
                                (0, J.jsx)(be, {
                                  id: `profile-sharing-public-description`,
                                  children: (0, J.jsx)(je, { page: b.page }),
                                }),
                            ],
                          },
                          e,
                        ),
                      feedback: (0, J.jsxs)(J.Fragment, {
                        children: [
                          !f &&
                            X?.restriction_reason === `enterprise_membership` &&
                            (0, J.jsx)(`p`, {
                              className: `text-sm text-secondary`,
                              children: (0, J.jsx)(a, {
                                id: `profile.sharing.enterpriseMembershipRestriction`,
                                defaultMessage: `Sharing your personal profile is disabled because you’re a member of an Enterprise workspace`,
                                description: `Explanation in the profile sharing dialog when Enterprise workspace membership prevents the user from sharing their personal profile`,
                              }),
                            }),
                          G != null &&
                            (0, J.jsx)(`div`, {
                              className: `text-sm text-danger`,
                              role: `alert`,
                              children: (0, J.jsx)(a, { ...De.blockedSuffix, values: { suffix: G } }),
                            }),
                          z &&
                            (0, J.jsx)(`div`, {
                              className: `text-sm text-danger`,
                              role: `alert`,
                              children: (0, J.jsx)(a, {
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
                          : (0, J.jsx)(t, {
                              "aria-label": h.formatMessage({
                                id: `profile.sharing.copyLink`,
                                defaultMessage: `Copy profile link`,
                                description: `Button to copy the displayed profile URL to the clipboard`,
                              }),
                              "aria-busy": D || void 0,
                              "aria-disabled": D || T || void 0,
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                k.current ||
                                  T ||
                                  ((k.current = !0),
                                  O(!0),
                                  w?.copyClicked(),
                                  fe(Z).then((e) => {
                                    ((k.current = !1),
                                      O(!1),
                                      E(e),
                                      w?.copied(e),
                                      e && setTimeout(() => E(!1), 2e3));
                                  }));
                              },
                              children: (0, J.jsx)(Ce, {
                                url: Z,
                                children: T
                                  ? (0, J.jsxs)(`span`, {
                                      className: `flex items-center gap-1`,
                                      role: `status`,
                                      children: [
                                        (0, J.jsx)(i, {}),
                                        (0, J.jsx)(a, {
                                          id: `profile.sharing.copied`,
                                          defaultMessage: `Copied`,
                                          description: `Confirmation after the profile link has been copied successfully`,
                                        }),
                                      ],
                                    })
                                  : (0, J.jsx)(pe, {}),
                              }),
                            }),
                      socialActions:
                        Z == null || f
                          ? null
                          : [
                              { label: Y.x, Icon: Te, url: `https://x.com/intent/post`, destination: `x` },
                              {
                                label: Y.linkedin,
                                Icon: we,
                                url: `https://www.linkedin.com/sharing/share-offsite/`,
                                destination: `linkedin`,
                              },
                              {
                                label: Y.reddit,
                                Icon: Ee,
                                url: `https://www.reddit.com/submit`,
                                destination: `reddit`,
                              },
                            ].map((e) => {
                              let { label: n, Icon: r, url: i, destination: o } = e;
                              return (0, J.jsx)(
                                me,
                                {
                                  cloneCustomTrigger: !0,
                                  tooltipContent: (0, J.jsx)(a, { ...n }),
                                  children: (0, J.jsx)(t, {
                                    className: `min-w-0 flex-1 justify-center`,
                                    "aria-label": h.formatMessage(n),
                                    color: `outline`,
                                    radius: `full`,
                                    size: `dialogGhost`,
                                    onClick: (e) => {
                                      (w?.shared(o, d.CODEX_PROFILE_SHARING_RESULT_CLICKED),
                                        w?.shared(o, d.CODEX_PROFILE_SHARING_RESULT_REQUESTED),
                                        p(),
                                        he({
                                          event: e,
                                          href: `${i}?url=${encodeURIComponent(Z)}`,
                                          initiator: `open_in_browser_bridge`,
                                          openTarget: `external-browser`,
                                        }));
                                    },
                                    children: (0, J.jsx)(r, { "aria-hidden": !0, className: `icon-sm` }),
                                  }),
                                },
                                i,
                              );
                            }),
                    }),
            }),
          ],
        })),
        (n[29] = w),
        (n[30] = G),
        (n[31] = T),
        (n[32] = D),
        (n[33] = u),
        (n[34] = h),
        (n[35] = x),
        (n[36] = R),
        (n[37] = z),
        (n[38] = U),
        (n[39] = f),
        (n[40] = L),
        (n[41] = p),
        (n[42] = b),
        (n[43] = S),
        (n[44] = E),
        (n[45] = O),
        (n[46] = Z),
        (n[47] = c),
        (n[48] = V),
        (n[49] = B),
        (n[50] = X),
        (n[51] = $))
      : ($ = n[51]),
    $
  );
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    ((K = C()),
      l(),
      F(),
      o(),
      f(),
      x(),
      c(),
      (q = E()),
      _(),
      A(),
      D(),
      b(),
      S(),
      m(),
      O(),
      u(),
      h(),
      v(),
      p(),
      I(),
      z(),
      L(),
      w(),
      g(),
      B(),
      M(),
      R(),
      W(),
      (J = T()),
      (Y = n({
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
X();
export { G as ProfileShareDialogContent };
//# sourceMappingURL=dialog-b8ee5e7a3e4d.js.map
