import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  IDt as n,
  Jo as r,
  Mz as i,
  Nz as a,
  Qo as o,
  Xl as s,
  Xo as c,
  Yl as l,
  Yo as u,
  Zo as d,
  im as f,
  jDt as p,
  qo as m,
  rm as h,
  vzt as g,
  xMt as _,
} from "./app-shared-bbfeca5e5737.js";
import { ACn as v, jCn as y } from "./app-initial-5851df3f6cb1.js";
import { a as b, n as x, o as S, t as C } from "./slate-create-menu-404dcfc5139c.js";
function w(e) {
  let t = (0, T.c)(17),
    { view: a, description: o } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = {
        all: { icon: d, title: D.allTitle, description: D.allDescription },
        pages: { icon: f, title: D.pagesTitle, description: D.pagesDescription },
        images: { icon: s, title: D.imagesTitle, description: D.imagesDescription },
        folder: { icon: u, title: D.folderTitle, description: D.folderDescription },
        trash: { icon: r, title: D.trashTitle, description: D.trashDescription },
        "trash-files": { icon: r, title: D.trashFilesTitle, description: D.trashFilesDescription },
        "trash-pages": { icon: r, title: D.trashPagesTitle, description: D.trashPagesDescription },
      }),
      (t[0] = c))
    : (c = t[0]);
  let l = c[a],
    p;
  bb0: switch (a) {
    case `all`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, E.jsx)(C, {})), (t[1] = e)) : (e = t[1]),
        (p = e));
      break bb0;
    }
    case `pages`:
    case `images`: {
      let e;
      (t[2] === a ? (e = t[3]) : ((e = (0, E.jsx)(C, { action: a })), (t[2] = a), (t[3] = e)), (p = e));
      break bb0;
    }
    case `folder`: {
      let e;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, E.jsx)(b, {})), (t[4] = e)) : (e = t[4]),
        (p = e));
      break bb0;
    }
  }
  let m;
  t[5] === l.icon ? (m = t[6]) : ((m = (0, E.jsx)(i, { asset: l.icon })), (t[5] = l.icon), (t[6] = m));
  let h;
  t[7] === l.title
    ? (h = t[8])
    : ((h = (0, E.jsx)(`h2`, { children: (0, E.jsx)(n, { ...l.title }) })), (t[7] = l.title), (t[8] = h));
  let g;
  t[9] !== l.description || t[10] !== o
    ? ((g = o === void 0 ? (0, E.jsx)(n, { ...l.description }) : o),
      (t[9] = l.description),
      (t[10] = o),
      (t[11] = g))
    : (g = t[11]);
  let _;
  return (
    t[12] !== p || t[13] !== m || t[14] !== h || t[15] !== g
      ? ((_ = (0, E.jsx)(v, {
          className: `select-none`,
          layout: `page`,
          spacing: `default`,
          illustrationSize: `tile`,
          illustration: m,
          title: h,
          description: g,
          actions: p,
        })),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = g()),
      o(),
      c(),
      l(),
      h(),
      m(),
      p(),
      a(),
      y(),
      S(),
      x(),
      (E = _()),
      (D = t({
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
//# sourceMappingURL=space-empty-state-7ae0513531fc.js.map
