import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $G as t,
  AK as n,
  AU as r,
  Ah as i,
  Bh as a,
  EJ as o,
  FK as s,
  HV as ee,
  Hq as c,
  IV as l,
  JOt as u,
  Jn as d,
  KG as f,
  MJ as p,
  QH as m,
  TY as h,
  XOt as g,
  XU as _,
  YW as v,
  a as y,
  aJ as b,
  aq as x,
  dH as S,
  db as C,
  eU as w,
  fY as T,
  gY as E,
  hG as D,
  i as te,
  iK as O,
  iq as k,
  kW as A,
  kh as j,
  mH as M,
  mK as N,
  n as P,
  o as F,
  pK as I,
  pW as L,
  qV as R,
  qn as z,
  r as B,
  sH as V,
  sU as H,
  t as U,
  ub as W,
  vG as G,
  vJ as K,
  vW as q,
  wK as J,
  yq as Y,
  zJ as X,
  zh as Z,
} from "./app-shared-2feb3d4c6fcc.js";
var Q;
function $() {
  return ($ = e(() => {
    (F(),
      te(),
      a(),
      d(),
      W(),
      U(),
      j(),
      g(),
      h(),
      (Q = new Map(
        Object.entries({
          bolt: {
            label: u({
              id: `workspaceAgents.skillIcon.bolt`,
              defaultMessage: `Lightning`,
              description: `Name of the lightning icon in the workspace agent skill icon picker`,
            }),
            icon: ee,
            color: `text-orange`,
          },
          chart: {
            label: u({
              id: `workspaceAgents.skillIcon.chart`,
              defaultMessage: `Chart`,
              description: `Name of the chart icon in the workspace agent skill icon picker`,
            }),
            icon: l,
            color: `text-green`,
          },
          chat: {
            label: u({
              id: `workspaceAgents.skillIcon.chat`,
              defaultMessage: `Chat`,
              description: `Name of the chat icon in the workspace agent skill icon picker`,
            }),
            icon: S,
            color: `text-blue`,
          },
          code: {
            label: u({
              id: `workspaceAgents.skillIcon.code`,
              defaultMessage: `Code`,
              description: `Name of the code icon in the workspace agent skill icon picker`,
            }),
            icon: m,
            color: `text-purple`,
          },
          cursor: {
            label: u({
              id: `workspaceAgents.skillIcon.cursor`,
              defaultMessage: `Cursor`,
              description: `Name of the cursor icon in the workspace agent skill icon picker`,
            }),
            icon: H,
            color: `text-blue`,
          },
          heart: {
            label: u({
              id: `workspaceAgents.skillIcon.heart`,
              defaultMessage: `Heart`,
              description: `Name of the heart icon in the workspace agent skill icon picker`,
            }),
            icon: A,
            color: `text-red`,
          },
          hierarchy: {
            label: u({
              id: `workspaceAgents.skillIcon.hierarchy`,
              defaultMessage: `Hierarchy`,
              description: `Name of the hierarchy icon in the workspace agent skill icon picker`,
            }),
            icon: Y,
            color: `text-blue`,
          },
          pen: {
            label: u({
              id: `workspaceAgents.skillIcon.pen`,
              defaultMessage: `Pen`,
              description: `Name of the pen icon in the workspace agent skill icon picker`,
            }),
            icon: I,
            color: `text-purple`,
          },
          radar: {
            label: u({
              id: `workspaceAgents.skillIcon.radar`,
              defaultMessage: `Radar`,
              description: `Name of the radar icon in the workspace agent skill icon picker`,
            }),
            icon: k,
            color: `text-green`,
          },
          search: {
            label: u({
              id: `workspaceAgents.skillIcon.search`,
              defaultMessage: `Search`,
              description: `Name of the search icon in the workspace agent skill icon picker`,
            }),
            icon: D,
            color: `text-blue`,
          },
          lightbulb: {
            label: u({
              id: `workspaceAgents.skillIcon.lightbulb`,
              defaultMessage: `Light bulb`,
              description: `Name of the light bulb icon in the workspace agent skill icon picker`,
            }),
            icon: v,
            color: `text-orange`,
          },
          bubble: {
            label: u({
              id: `workspaceAgents.skillIcon.bubble`,
              defaultMessage: `Speech bubble`,
              description: `Name of the speech bubble icon in the workspace agent skill icon picker`,
            }),
            icon: S,
            color: `text-blue`,
          },
          "bubble-on-bubble": {
            label: u({
              id: `workspaceAgents.skillIcon.bubble-on-bubble`,
              defaultMessage: `Conversation`,
              description: `Name of the conversation icon in the workspace agent skill icon picker`,
            }),
            icon: M,
            color: `text-blue`,
          },
          person: {
            label: u({
              id: `workspaceAgents.skillIcon.person`,
              defaultMessage: `Person`,
              description: `Name of the person icon in the workspace agent skill icon picker`,
            }),
            icon: N,
            color: `text-blue`,
          },
          "text-bubble-figure": {
            label: u({
              id: `workspaceAgents.skillIcon.text-bubble-figure`,
              defaultMessage: `Text message`,
              description: `Name of the text message icon in the workspace agent skill icon picker`,
            }),
            icon: X,
            color: `text-blue`,
          },
          microphone: {
            label: u({
              id: `workspaceAgents.skillIcon.microphone`,
              defaultMessage: `Microphone`,
              description: `Name of the microphone icon in the workspace agent skill icon picker`,
            }),
            icon: G,
            color: `text-red`,
          },
          audiowave: {
            label: u({
              id: `workspaceAgents.skillIcon.audiowave`,
              defaultMessage: `Audio`,
              description: `Name of the audio icon in the workspace agent skill icon picker`,
            }),
            icon: T,
            color: `text-red`,
          },
          newspaper: {
            label: u({
              id: `workspaceAgents.skillIcon.newspaper`,
              defaultMessage: `Newspaper`,
              description: `Name of the newspaper icon in the workspace agent skill icon picker`,
            }),
            asset: i,
            color: `text-purple`,
          },
          envelope: {
            label: u({
              id: `workspaceAgents.skillIcon.envelope`,
              defaultMessage: `Envelope`,
              description: `Name of the envelope icon in the workspace agent skill icon picker`,
            }),
            icon: r,
            color: `text-blue`,
          },
          paperclip: {
            label: u({
              id: `workspaceAgents.skillIcon.paperclip`,
              defaultMessage: `Paperclip`,
              description: `Name of the paperclip icon in the workspace agent skill icon picker`,
            }),
            icon: O,
            color: `text-blue`,
          },
          "paint-palette": {
            label: u({
              id: `workspaceAgents.skillIcon.paint-palette`,
              defaultMessage: `Paint palette`,
              description: `Name of the paint palette icon in the workspace agent skill icon picker`,
            }),
            icon: t,
            color: `text-pink`,
          },
          media: {
            label: u({
              id: `workspaceAgents.skillIcon.media`,
              defaultMessage: `Photo`,
              description: `Name of the photo icon in the workspace agent skill icon picker`,
            }),
            icon: J,
            color: `text-pink`,
          },
          "color-swatches": {
            label: u({
              id: `workspaceAgents.skillIcon.color-swatches`,
              defaultMessage: `Colors`,
              description: `Name of the colors icon in the workspace agent skill icon picker`,
            }),
            icon: t,
            color: `text-pink`,
          },
          presentation: {
            label: u({
              id: `workspaceAgents.skillIcon.presentation`,
              defaultMessage: `Presentation`,
              description: `Name of the presentation icon in the workspace agent skill icon picker`,
            }),
            icon: c,
            color: `text-orange`,
          },
          "file-video": {
            label: u({
              id: `workspaceAgents.skillIcon.file-video`,
              defaultMessage: `Video`,
              description: `Name of the video icon in the workspace agent skill icon picker`,
            }),
            icon: s,
            color: `text-pink`,
          },
          "book-open": {
            label: u({
              id: `workspaceAgents.skillIcon.book-open`,
              defaultMessage: `Book`,
              description: `Name of the book icon in the workspace agent skill icon picker`,
            }),
            icon: R,
            color: `text-blue`,
          },
          notepad: {
            label: u({
              id: `workspaceAgents.skillIcon.notepad`,
              defaultMessage: `Notebook`,
              description: `Name of the notebook icon in the workspace agent skill icon picker`,
            }),
            icon: f,
            color: `text-purple`,
          },
          calendar: {
            label: u({
              id: `workspaceAgents.skillIcon.calendar`,
              defaultMessage: `Calendar`,
              description: `Name of the calendar icon in the workspace agent skill icon picker`,
            }),
            icon: V,
            color: `text-red`,
          },
          briefcase: {
            label: u({
              id: `workspaceAgents.skillIcon.briefcase`,
              defaultMessage: `Briefcase`,
              description: `Name of the briefcase icon in the workspace agent skill icon picker`,
            }),
            icon: o,
            color: `text-green`,
          },
          "credit-card": {
            label: u({
              id: `workspaceAgents.skillIcon.credit-card`,
              defaultMessage: `Credit card`,
              description: `Name of the credit card icon in the workspace agent skill icon picker`,
            }),
            icon: w,
            color: `text-green`,
          },
          calculator: {
            label: u({
              id: `workspaceAgents.skillIcon.calculator`,
              defaultMessage: `Calculator`,
              description: `Name of the calculator icon in the workspace agent skill icon picker`,
            }),
            asset: y,
            color: `text-green`,
          },
          checklist: {
            label: u({
              id: `workspaceAgents.skillIcon.checklist`,
              defaultMessage: `Checklist`,
              description: `Name of the checklist icon in the workspace agent skill icon picker`,
            }),
            asset: C,
            color: `text-green`,
          },
          summary: {
            label: u({
              id: `workspaceAgents.skillIcon.summary`,
              defaultMessage: `Summary`,
              description: `Name of the summary icon in the workspace agent skill icon picker`,
            }),
            asset: z,
            color: `text-purple`,
          },
          "document-search": {
            label: u({
              id: `workspaceAgents.skillIcon.document-search`,
              defaultMessage: `Document search`,
              description: `Name of the document search icon in the workspace agent skill icon picker`,
            }),
            asset: Z,
            color: `text-blue`,
          },
          "components-window": {
            label: u({
              id: `workspaceAgents.skillIcon.components-window`,
              defaultMessage: `Components`,
              description: `Name of the components icon in the workspace agent skill icon picker`,
            }),
            icon: b,
            color: `text-purple`,
          },
          terminal: {
            label: u({
              id: `workspaceAgents.skillIcon.terminal`,
              defaultMessage: `Terminal`,
              description: `Name of the terminal icon in the workspace agent skill icon picker`,
            }),
            icon: p,
            color: `text-purple`,
          },
          gear: {
            label: u({
              id: `workspaceAgents.skillIcon.gear`,
              defaultMessage: `Settings`,
              description: `Name of the settings icon in the workspace agent skill icon picker`,
            }),
            icon: L,
            color: `text-blue`,
          },
          map: {
            label: u({
              id: `workspaceAgents.skillIcon.map`,
              defaultMessage: `Map`,
              description: `Name of the map icon in the workspace agent skill icon picker`,
            }),
            asset: P,
            color: `text-green`,
          },
          "map-pin": {
            label: u({
              id: `workspaceAgents.skillIcon.map-pin`,
              defaultMessage: `Map pin`,
              description: `Name of the map pin icon in the workspace agent skill icon picker`,
            }),
            icon: n,
            color: `text-red`,
          },
          pointer: {
            label: u({
              id: `workspaceAgents.skillIcon.pointer`,
              defaultMessage: `Pointer`,
              description: `Name of the pointer icon in the workspace agent skill icon picker`,
            }),
            icon: H,
            color: `text-blue`,
          },
          "deep-research": {
            label: u({
              id: `workspaceAgents.skillIcon.deep-research`,
              defaultMessage: `Research`,
              description: `Name of the research icon in the workspace agent skill icon picker`,
            }),
            asset: B,
            color: `text-blue`,
          },
          globe: {
            label: u({
              id: `workspaceAgents.skillIcon.globe`,
              defaultMessage: `Globe`,
              description: `Name of the globe icon in the workspace agent skill icon picker`,
            }),
            icon: q,
            color: `text-blue`,
          },
          flask: {
            label: u({
              id: `workspaceAgents.skillIcon.flask`,
              defaultMessage: `Flask`,
              description: `Name of the flask icon in the workspace agent skill icon picker`,
            }),
            icon: _,
            color: `text-green`,
          },
          toolbox: {
            label: u({
              id: `workspaceAgents.skillIcon.toolbox`,
              defaultMessage: `Tools`,
              description: `Name of the tools icon in the workspace agent skill icon picker`,
            }),
            icon: E,
            color: `text-orange`,
          },
          puzzle: {
            label: u({
              id: `workspaceAgents.skillIcon.puzzle`,
              defaultMessage: `Puzzle`,
              description: `Name of the puzzle icon in the workspace agent skill icon picker`,
            }),
            icon: x,
            color: `text-purple`,
          },
          "game-controller": {
            label: u({
              id: `workspaceAgents.skillIcon.game-controller`,
              defaultMessage: `Game controller`,
              description: `Name of the game controller icon in the workspace agent skill icon picker`,
            }),
            icon: x,
            color: `text-purple`,
          },
          "star-bookmark": {
            label: u({
              id: `workspaceAgents.skillIcon.star-bookmark`,
              defaultMessage: `Star`,
              description: `Name of the star icon in the workspace agent skill icon picker`,
            }),
            icon: K,
            color: `text-orange`,
          },
          "heart-text-clipboard": {
            label: u({
              id: `workspaceAgents.skillIcon.heart-text-clipboard`,
              defaultMessage: `Care`,
              description: `Name of the care icon in the workspace agent skill icon picker`,
            }),
            icon: A,
            color: `text-red`,
          },
        }),
      )));
  }))();
}
export { Q as n, $ as t };
//# sourceMappingURL=workspace-agent-skill-icons-c17c64d82271.js.map
