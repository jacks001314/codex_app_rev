import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fu as t, Hlr as n, Ru as r, Wlr as i, _i as a, vi as o } from "./app-initial-5851df3f6cb1.js";
function s() {
  return typeof ClipboardItem < `u` && typeof navigator.clipboard?.write == `function`;
}
function c({
  conversationId: e,
  environmentId: r,
  filename: i,
  hostId: a,
  imageAssetResolver: s,
  onCopySucceeded: c,
  onFailure: l,
  queryClient: u,
  src: d,
}) {
  let f = o({
    conversationId: e,
    environmentId: r,
    absoluteImageFilePath: n(d),
    hostId: a,
    imageAssetResolver: s,
    queryClient: u,
    src: d,
  }).then(async (e) => {
    if (e == null) throw Error(`Could not read image for clipboard copy`);
    let { file: n } = t(e, i);
    if (n.type === `image/png`) return n;
    let r = await createImageBitmap(n),
      a = document.createElement(`canvas`);
    ((a.width = r.width), (a.height = r.height));
    let o = a.getContext(`2d`);
    if (o == null) throw (r.close(), Error(`Could not create image clipboard canvas`));
    (o.drawImage(r, 0, 0), r.close());
    let s = await new Promise((e) => {
      a.toBlob(e, `image/png`);
    });
    if (s == null) throw Error(`Could not encode image for clipboard copy`);
    return s;
  });
  f.catch(() => void 0);
  try {
    navigator.clipboard.write([new ClipboardItem({ "image/png": f })]).then(c, l);
  } catch {
    l();
  }
}
function l() {
  return (l = e(() => {
    (i(), r(), a());
  }))();
}
export { c as n, l as r, s as t };
//# sourceMappingURL=copy-generated-image-to-clipboard-bbf8cd2a0fd7.js.map
