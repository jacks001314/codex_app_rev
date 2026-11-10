import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cs as t,
  DB as n,
  Ds as r,
  Es as i,
  LNt as a,
  Mm as o,
  Nu as s,
  OB as c,
  Os as l,
  PBt as u,
  Pu as d,
  Ts as f,
  XOt as p,
  YOt as m,
  jm as h,
  tkt as g,
  ws as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { XEn as v, YEn as y } from "./app-initial-ad16eaadf81f.js";
import { a as b, n as x, o as S, t as C } from "./slate-create-menu-ba9308284af3.js";
function w(e) {
  let t = (0, T.c)(17),
    { view: i, description: a } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = {
        all: { icon: r, title: D.allTitle, description: D.allDescription },
        pages: { icon: o, title: D.pagesTitle, description: D.pagesDescription },
        images: { icon: d, title: D.imagesTitle, description: D.imagesDescription },
        folder: { icon: f, title: D.folderTitle, description: D.folderDescription },
        trash: { icon: _, title: D.trashTitle, description: D.trashDescription },
        "trash-files": { icon: _, title: D.trashFilesTitle, description: D.trashFilesDescription },
        "trash-pages": { icon: _, title: D.trashPagesTitle, description: D.trashPagesDescription },
      }),
      (t[0] = s))
    : (s = t[0]);
  let c = s[i],
    l;
  bb0: switch (i) {
    case `all`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, E.jsx)(C, {})), (t[1] = e)) : (e = t[1]),
        (l = e));
      break bb0;
    }
    case `pages`:
    case `images`: {
      let e;
      (t[2] === i ? (e = t[3]) : ((e = (0, E.jsx)(C, { action: i })), (t[2] = i), (t[3] = e)), (l = e));
      break bb0;
    }
    case `folder`: {
      let e;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, E.jsx)(b, {})), (t[4] = e)) : (e = t[4]),
        (l = e));
      break bb0;
    }
  }
  let u;
  t[5] === c.icon ? (u = t[6]) : ((u = (0, E.jsx)(n, { asset: c.icon })), (t[5] = c.icon), (t[6] = u));
  let p;
  t[7] === c.title
    ? (p = t[8])
    : ((p = (0, E.jsx)(`h2`, { children: (0, E.jsx)(g, { ...c.title }) })), (t[7] = c.title), (t[8] = p));
  let m;
  t[9] !== c.description || t[10] !== a
    ? ((m = a === void 0 ? (0, E.jsx)(g, { ...c.description }) : a),
      (t[9] = c.description),
      (t[10] = a),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== l || t[13] !== u || t[14] !== p || t[15] !== m
      ? ((h = (0, E.jsx)(y, {
          className: `select-none`,
          layout: `page`,
          spacing: `default`,
          illustrationSize: `tile`,
          illustration: u,
          title: p,
          description: m,
          actions: l,
        })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = u()),
      l(),
      i(),
      s(),
      h(),
      t(),
      p(),
      c(),
      v(),
      S(),
      x(),
      (E = a()),
      (D = m({
        allTitle: {
          id: `space.empty.all.title`,
          defaultMessage: `Nothing here yet`,
          description: `Empty state heading for the All collection in Space`,
        },
        allDescription: {
          id: `space.empty.all.description`,
          defaultMessage: `Build a page, presentation, website, and more with ChatGPT`,
          description: `First-use guidance for the All collection in Space`,
        },
        pagesTitle: {
          id: `space.empty.pages.title`,
          defaultMessage: `No pages yet`,
          description: `Empty state heading for the Pages collection in Space`,
        },
        pagesDescription: {
          id: `space.empty.pages.description`,
          defaultMessage: `Write, plan, and bring your ideas together with ChatGPT`,
          description: `First-use guidance for the Pages collection in Space`,
        },
        imagesTitle: {
          id: `space.empty.images.title`,
          defaultMessage: `No images yet`,
          description: `Empty state heading for the Images collection in Space`,
        },
        imagesDescription: {
          id: `space.empty.images.description`,
          defaultMessage: `Create an image with ChatGPT`,
          description: `First-use guidance for the Images collection in Space`,
        },
        folderTitle: {
          id: `space.empty.folder.title`,
          defaultMessage: `This folder is empty`,
          description: `Empty state heading for an empty folder in Space`,
        },
        folderDescription: {
          id: `space.empty.folder.description`,
          defaultMessage: `Upload files to get started`,
          description: `Guidance for adding content to an empty folder in Space`,
        },
        trashTitle: {
          id: `space.empty.trash.title`,
          defaultMessage: `Trash is empty`,
          description: `Empty state heading for Trash in Space`,
        },
        trashDescription: {
          id: `space.empty.trash.description`,
          defaultMessage: `Items moved to Trash will be deleted forever after 30 days`,
          description: `Retention policy for deleted files and Pages in Space Trash`,
        },
        trashFilesTitle: {
          id: `space.empty.trashFiles.title`,
          defaultMessage: `No files in Trash`,
          description: `Empty state heading for the Files filter in Trash when other types may still contain deleted items`,
        },
        trashFilesDescription: {
          id: `space.empty.trashFiles.description`,
          defaultMessage: `Files moved to Trash will be deleted forever after 30 days`,
          description: `Retention guidance below the empty Files filter in Trash`,
        },
        trashPagesTitle: {
          id: `space.empty.trashPages.title`,
          defaultMessage: `No pages in Trash`,
          description: `Empty state heading for the Pages filter in Trash when other types may still contain deleted items`,
        },
        trashPagesDescription: {
          id: `space.empty.trashPages.description`,
          defaultMessage: `Pages moved to Trash will be deleted forever after 30 days`,
          description: `Retention guidance below the empty Pages filter in Trash`,
        },
      })));
  }))();
}
export { O as n, w as t };
//# sourceMappingURL=space-empty-state-95c5a77c22cc.js.map
