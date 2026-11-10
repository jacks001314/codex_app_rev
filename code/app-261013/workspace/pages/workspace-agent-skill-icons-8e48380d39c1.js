import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $H as t,
  $U as n,
  BB as ee,
  DG as r,
  Eq as i,
  HK as a,
  Iy as o,
  KB as s,
  Ly as te,
  Mq as c,
  NG as l,
  NH as u,
  NU as d,
  Nn as f,
  Pn as p,
  Qm as m,
  RG as h,
  SK as g,
  SU as _,
  SW as v,
  TJ as y,
  XW as b,
  ZB as x,
  Zm as S,
  _G as C,
  _U as w,
  a as T,
  aq as E,
  cK as D,
  ch as O,
  dH as k,
  dV as A,
  fJ as j,
  gG as M,
  gJ as N,
  hV as P,
  i as F,
  iH as I,
  jDt as L,
  kDt as R,
  n as z,
  nG as B,
  nH as V,
  o as H,
  r as U,
  sG as W,
  sK as G,
  sh as K,
  t as q,
  vV as J,
  vq as Y,
  yW as X,
  zq as Z,
} from "./app-shared-bbfeca5e5737.js";
var Q;
function $() {
  return ($ = e(() => {
    (H(),
      F(),
      O(),
      p(),
      o(),
      q(),
      S(),
      L(),
      y(),
      (Q = new Map(
        Object.entries({
          bolt: {
            label: R({
              id: `workspaceAgents.skillIcon.bolt`,
              defaultMessage: `Lightning`,
              description: `Name of the lightning icon in the workspace agent skill icon picker`,
            }),
            icon: s,
            color: `text-orange`,
          },
          chart: {
            label: R({
              id: `workspaceAgents.skillIcon.chart`,
              defaultMessage: `Chart`,
              description: `Name of the chart icon in the workspace agent skill icon picker`,
            }),
            icon: ee,
            color: `text-green`,
          },
          chat: {
            label: R({
              id: `workspaceAgents.skillIcon.chat`,
              defaultMessage: `Chat`,
              description: `Name of the chat icon in the workspace agent skill icon picker`,
            }),
            icon: P,
            color: `text-blue`,
          },
          code: {
            label: R({
              id: `workspaceAgents.skillIcon.code`,
              defaultMessage: `Code`,
              description: `Name of the code icon in the workspace agent skill icon picker`,
            }),
            icon: V,
            color: `text-purple`,
          },
          cursor: {
            label: R({
              id: `workspaceAgents.skillIcon.cursor`,
              defaultMessage: `Cursor`,
              description: `Name of the cursor icon in the workspace agent skill icon picker`,
            }),
            icon: k,
            color: `text-blue`,
          },
          heart: {
            label: R({
              id: `workspaceAgents.skillIcon.heart`,
              defaultMessage: `Heart`,
              description: `Name of the heart icon in the workspace agent skill icon picker`,
            }),
            icon: d,
            color: `text-red`,
          },
          hierarchy: {
            label: R({
              id: `workspaceAgents.skillIcon.hierarchy`,
              defaultMessage: `Hierarchy`,
              description: `Name of the hierarchy icon in the workspace agent skill icon picker`,
            }),
            icon: g,
            color: `text-blue`,
          },
          pen: {
            label: R({
              id: `workspaceAgents.skillIcon.pen`,
              defaultMessage: `Pen`,
              description: `Name of the pen icon in the workspace agent skill icon picker`,
            }),
            icon: M,
            color: `text-purple`,
          },
          radar: {
            label: R({
              id: `workspaceAgents.skillIcon.radar`,
              defaultMessage: `Radar`,
              description: `Name of the radar icon in the workspace agent skill icon picker`,
            }),
            icon: G,
            color: `text-green`,
          },
          search: {
            label: R({
              id: `workspaceAgents.skillIcon.search`,
              defaultMessage: `Search`,
              description: `Name of the search icon in the workspace agent skill icon picker`,
            }),
            icon: X,
            color: `text-blue`,
          },
          lightbulb: {
            label: R({
              id: `workspaceAgents.skillIcon.lightbulb`,
              defaultMessage: `Light bulb`,
              description: `Name of the light bulb icon in the workspace agent skill icon picker`,
            }),
            icon: n,
            color: `text-orange`,
          },
          bubble: {
            label: R({
              id: `workspaceAgents.skillIcon.bubble`,
              defaultMessage: `Speech bubble`,
              description: `Name of the speech bubble icon in the workspace agent skill icon picker`,
            }),
            icon: P,
            color: `text-blue`,
          },
          "bubble-on-bubble": {
            label: R({
              id: `workspaceAgents.skillIcon.bubble-on-bubble`,
              defaultMessage: `Conversation`,
              description: `Name of the conversation icon in the workspace agent skill icon picker`,
            }),
            icon: J,
            color: `text-blue`,
          },
          person: {
            label: R({
              id: `workspaceAgents.skillIcon.person`,
              defaultMessage: `Person`,
              description: `Name of the person icon in the workspace agent skill icon picker`,
            }),
            icon: C,
            color: `text-blue`,
          },
          "text-bubble-figure": {
            label: R({
              id: `workspaceAgents.skillIcon.text-bubble-figure`,
              defaultMessage: `Text message`,
              description: `Name of the text message icon in the workspace agent skill icon picker`,
            }),
            icon: Z,
            color: `text-blue`,
          },
          microphone: {
            label: R({
              id: `workspaceAgents.skillIcon.microphone`,
              defaultMessage: `Microphone`,
              description: `Name of the microphone icon in the workspace agent skill icon picker`,
            }),
            icon: v,
            color: `text-red`,
          },
          audiowave: {
            label: R({
              id: `workspaceAgents.skillIcon.audiowave`,
              defaultMessage: `Audio`,
              description: `Name of the audio icon in the workspace agent skill icon picker`,
            }),
            icon: j,
            color: `text-red`,
          },
          newspaper: {
            label: R({
              id: `workspaceAgents.skillIcon.newspaper`,
              defaultMessage: `Newspaper`,
              description: `Name of the newspaper icon in the workspace agent skill icon picker`,
            }),
            asset: m,
            color: `text-purple`,
          },
          envelope: {
            label: R({
              id: `workspaceAgents.skillIcon.envelope`,
              defaultMessage: `Envelope`,
              description: `Name of the envelope icon in the workspace agent skill icon picker`,
            }),
            icon: u,
            color: `text-blue`,
          },
          paperclip: {
            label: R({
              id: `workspaceAgents.skillIcon.paperclip`,
              defaultMessage: `Paperclip`,
              description: `Name of the paperclip icon in the workspace agent skill icon picker`,
            }),
            icon: W,
            color: `text-blue`,
          },
          "paint-palette": {
            label: R({
              id: `workspaceAgents.skillIcon.paint-palette`,
              defaultMessage: `Paint palette`,
              description: `Name of the paint palette icon in the workspace agent skill icon picker`,
            }),
            icon: B,
            color: `text-pink`,
          },
          media: {
            label: R({
              id: `workspaceAgents.skillIcon.media`,
              defaultMessage: `Photo`,
              description: `Name of the photo icon in the workspace agent skill icon picker`,
            }),
            icon: r,
            color: `text-pink`,
          },
          "color-swatches": {
            label: R({
              id: `workspaceAgents.skillIcon.color-swatches`,
              defaultMessage: `Colors`,
              description: `Name of the colors icon in the workspace agent skill icon picker`,
            }),
            icon: B,
            color: `text-pink`,
          },
          presentation: {
            label: R({
              id: `workspaceAgents.skillIcon.presentation`,
              defaultMessage: `Presentation`,
              description: `Name of the presentation icon in the workspace agent skill icon picker`,
            }),
            icon: a,
            color: `text-orange`,
          },
          "file-video": {
            label: R({
              id: `workspaceAgents.skillIcon.file-video`,
              defaultMessage: `Video`,
              description: `Name of the video icon in the workspace agent skill icon picker`,
            }),
            icon: h,
            color: `text-pink`,
          },
          "book-open": {
            label: R({
              id: `workspaceAgents.skillIcon.book-open`,
              defaultMessage: `Book`,
              description: `Name of the book icon in the workspace agent skill icon picker`,
            }),
            icon: x,
            color: `text-blue`,
          },
          notepad: {
            label: R({
              id: `workspaceAgents.skillIcon.notepad`,
              defaultMessage: `Notebook`,
              description: `Name of the notebook icon in the workspace agent skill icon picker`,
            }),
            icon: b,
            color: `text-purple`,
          },
          calendar: {
            label: R({
              id: `workspaceAgents.skillIcon.calendar`,
              defaultMessage: `Calendar`,
              description: `Name of the calendar icon in the workspace agent skill icon picker`,
            }),
            icon: A,
            color: `text-red`,
          },
          briefcase: {
            label: R({
              id: `workspaceAgents.skillIcon.briefcase`,
              defaultMessage: `Briefcase`,
              description: `Name of the briefcase icon in the workspace agent skill icon picker`,
            }),
            icon: i,
            color: `text-green`,
          },
          "credit-card": {
            label: R({
              id: `workspaceAgents.skillIcon.credit-card`,
              defaultMessage: `Credit card`,
              description: `Name of the credit card icon in the workspace agent skill icon picker`,
            }),
            icon: I,
            color: `text-green`,
          },
          calculator: {
            label: R({
              id: `workspaceAgents.skillIcon.calculator`,
              defaultMessage: `Calculator`,
              description: `Name of the calculator icon in the workspace agent skill icon picker`,
            }),
            asset: T,
            color: `text-green`,
          },
          checklist: {
            label: R({
              id: `workspaceAgents.skillIcon.checklist`,
              defaultMessage: `Checklist`,
              description: `Name of the checklist icon in the workspace agent skill icon picker`,
            }),
            asset: te,
            color: `text-green`,
          },
          summary: {
            label: R({
              id: `workspaceAgents.skillIcon.summary`,
              defaultMessage: `Summary`,
              description: `Name of the summary icon in the workspace agent skill icon picker`,
            }),
            asset: f,
            color: `text-purple`,
          },
          "document-search": {
            label: R({
              id: `workspaceAgents.skillIcon.document-search`,
              defaultMessage: `Document search`,
              description: `Name of the document search icon in the workspace agent skill icon picker`,
            }),
            asset: K,
            color: `text-blue`,
          },
          "components-window": {
            label: R({
              id: `workspaceAgents.skillIcon.components-window`,
              defaultMessage: `Components`,
              description: `Name of the components icon in the workspace agent skill icon picker`,
            }),
            icon: E,
            color: `text-purple`,
          },
          terminal: {
            label: R({
              id: `workspaceAgents.skillIcon.terminal`,
              defaultMessage: `Terminal`,
              description: `Name of the terminal icon in the workspace agent skill icon picker`,
            }),
            icon: c,
            color: `text-purple`,
          },
          gear: {
            label: R({
              id: `workspaceAgents.skillIcon.gear`,
              defaultMessage: `Settings`,
              description: `Name of the settings icon in the workspace agent skill icon picker`,
            }),
            icon: w,
            color: `text-blue`,
          },
          map: {
            label: R({
              id: `workspaceAgents.skillIcon.map`,
              defaultMessage: `Map`,
              description: `Name of the map icon in the workspace agent skill icon picker`,
            }),
            asset: z,
            color: `text-green`,
          },
          "map-pin": {
            label: R({
              id: `workspaceAgents.skillIcon.map-pin`,
              defaultMessage: `Map pin`,
              description: `Name of the map pin icon in the workspace agent skill icon picker`,
            }),
            icon: l,
            color: `text-red`,
          },
          pointer: {
            label: R({
              id: `workspaceAgents.skillIcon.pointer`,
              defaultMessage: `Pointer`,
              description: `Name of the pointer icon in the workspace agent skill icon picker`,
            }),
            icon: k,
            color: `text-blue`,
          },
          "deep-research": {
            label: R({
              id: `workspaceAgents.skillIcon.deep-research`,
              defaultMessage: `Research`,
              description: `Name of the research icon in the workspace agent skill icon picker`,
            }),
            asset: U,
            color: `text-blue`,
          },
          globe: {
            label: R({
              id: `workspaceAgents.skillIcon.globe`,
              defaultMessage: `Globe`,
              description: `Name of the globe icon in the workspace agent skill icon picker`,
            }),
            icon: _,
            color: `text-blue`,
          },
          flask: {
            label: R({
              id: `workspaceAgents.skillIcon.flask`,
              defaultMessage: `Flask`,
              description: `Name of the flask icon in the workspace agent skill icon picker`,
            }),
            icon: t,
            color: `text-green`,
          },
          toolbox: {
            label: R({
              id: `workspaceAgents.skillIcon.toolbox`,
              defaultMessage: `Tools`,
              description: `Name of the tools icon in the workspace agent skill icon picker`,
            }),
            icon: N,
            color: `text-orange`,
          },
          puzzle: {
            label: R({
              id: `workspaceAgents.skillIcon.puzzle`,
              defaultMessage: `Puzzle`,
              description: `Name of the puzzle icon in the workspace agent skill icon picker`,
            }),
            icon: D,
            color: `text-purple`,
          },
          "game-controller": {
            label: R({
              id: `workspaceAgents.skillIcon.game-controller`,
              defaultMessage: `Game controller`,
              description: `Name of the game controller icon in the workspace agent skill icon picker`,
            }),
            icon: D,
            color: `text-purple`,
          },
          "star-bookmark": {
            label: R({
              id: `workspaceAgents.skillIcon.star-bookmark`,
              defaultMessage: `Star`,
              description: `Name of the star icon in the workspace agent skill icon picker`,
            }),
            icon: Y,
            color: `text-orange`,
          },
          "heart-text-clipboard": {
            label: R({
              id: `workspaceAgents.skillIcon.heart-text-clipboard`,
              defaultMessage: `Care`,
              description: `Name of the care icon in the workspace agent skill icon picker`,
            }),
            icon: d,
            color: `text-red`,
          },
        }),
      )));
  }))();
}
export { Q as n, $ as t };
//# sourceMappingURL=workspace-agent-skill-icons-8e48380d39c1.js.map
