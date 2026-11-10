const e = require("./src-KMpTO78a.js"),
  t = require("./desktop-open-path-queue-BtqbTQxD.js"),
  n = require("./src-B6LqG3ek.js"),
  r = require("./logger-DkO6GWbX.js"),
  i = require("./file-based-logger-BEXzjhGa.js");
let a = require("node:url"),
  o = require("electron");
o = e.o(o);
let s = require("path");
s = e.o(s);
let c = require("node:os");
c = e.o(c);
let l = require("node:path");
l = e.o(l);
let u = require("node:util"),
  d = require("node:crypto"),
  f = require("node:fs"),
  p = require("node:fs/promises");
p = e.o(p);
let m = require("node:child_process"),
  h = require("fs"),
  g = require("stream"),
  _ = require("util"),
  v = require("node:stream"),
  y = require("url");
y = e.o(y);
let b = require("zlib"),
  x = require("node:timers/promises"),
  S = require("node:readline"),
  C = require("perf_hooks"),
  ee = require("module"),
  te = require("worker_threads"),
  ne = require("node:diagnostics_channel");
ne = e.o(ne);
let re = require("diagnostics_channel");
re = e.o(re);
let ie = require("node:worker_threads");
var ae = `chatgpt-migration-announcement-completed-v1`;
function oe(e) {
  return e;
}
function se(e, t) {
  let n = null,
    r = null,
    i = (...i) => {
      ((r = i),
        n && clearTimeout(n),
        (n = setTimeout(() => {
          n = null;
          let t = r;
          ((r = null), t && e(...t));
        }, t)));
    };
  return (
    (i.cancel = () => {
      ((n &&= (clearTimeout(n), null)), (r = null));
    }),
    i
  );
}
var ce = { es: `es-419`, fr: `fr-FR`, pt: `pt-BR`, zh: `zh-CN` },
  le = 2 * 1024,
  ue = 20,
  de = 20,
  fe = `[Truncated: breadcrumb data exceeded 2 KiB]`,
  pe = `https://6719eaa18601933a26ac21499dcaba2f@o33249.ingest.us.sentry.io/4510999349821440`;
function me(e) {
  let { data: t } = e;
  if (t == null) return e;
  if (!(`arguments` in t && !ge(t.arguments))) return ge(t) ? e : { ...e, data: _e(t) };
  let n = { ...t, arguments: fe, codex_truncated_breadcrumb_data: !0 };
  return ge(n) ? { ...e, data: n } : { ...e, data: _e(t) };
}
function he(e) {
  return `codex@${e}`;
}
function ge(e) {
  try {
    let t = JSON.stringify(e);
    return t == null || t.length > le ? !1 : new TextEncoder().encode(t).byteLength <= le;
  } catch {
    return !1;
  }
}
function _e(e) {
  let t = { codex_truncated_breadcrumb_data: !0 },
    n = [],
    r = 0,
    i = !1;
  for (let a in e) {
    if (!Object.hasOwn(e, a)) continue;
    if (r === ue) {
      i = !0;
      break;
    }
    r += 1;
    let o = e[a],
      s = { ...t, [a]: ge(o) ? o : fe, codex_truncated_breadcrumb_data: !0 };
    ge(s) ? (t = s) : n.push(a);
  }
  if (n.length > 0 || i) {
    let e = {
      ...t,
      codex_omitted_breadcrumb_data_keys: [
        ...n.slice(0, de).map((e) => e.slice(0, 128)),
        ...(i ? [`[Additional keys omitted]`] : []),
      ],
    };
    if (ge(e)) return e;
  }
  return t;
}
var ve = `TOML-backed settings cannot contain null inside arrays`,
  ye = `TOML-backed settings cannot contain null in dynamic object fields`;
function be(e, t) {
  return Se(w(e), t);
}
function xe(e, t) {
  return Ce(w(e), t);
}
function Se(e, t) {
  if (t == null) return null;
  if (typeof t == `boolean` || typeof t == `number` || typeof t == `string`) return t;
  if (Array.isArray(t)) {
    if (t.some((e) => e == null)) throw Error(ve);
    let r = e instanceof n.zl ? w(e.element) : void 0;
    return t.map((e) => Se(r, e));
  }
  if (!we(t)) throw Error(`TOML-backed settings must be JSON-compatible`);
  if (e instanceof n.Wl)
    return Object.fromEntries(
      Object.entries(t).map(([t, n]) => {
        if (n == null) throw Error(ye);
        return [t, Se(w(e.valueType), n)];
      }),
    );
  let r = e instanceof n.Hl ? e : null;
  return Object.fromEntries(
    Object.entries(t).flatMap(([e, t]) => {
      if (t === void 0) return [];
      let n = r?.shape[e];
      if (t == null) {
        if (n == null) throw Error(ye);
        return [];
      }
      return [[e, Se(n == null ? void 0 : w(n), t)]];
    }),
  );
}
function Ce(e, t) {
  if (Array.isArray(t)) {
    let r = e instanceof n.zl ? w(e.element) : void 0;
    return t.map((e) => Ce(r, e));
  }
  if (!we(t)) return t;
  if (e instanceof n.Wl)
    return Object.fromEntries(Object.entries(t).map(([t, n]) => [t, Ce(w(e.valueType), n)]));
  if (!(e instanceof n.Hl)) return t;
  let r = Object.fromEntries(
    Object.entries(t).map(([t, n]) => [t, Ce(e.shape[t] == null ? void 0 : w(e.shape[t]), n)]),
  );
  for (let [t, n] of Object.entries(e.shape))
    !Object.prototype.hasOwnProperty.call(r, t) && n.isNullable() && (r[t] = null);
  return r;
}
function w(e) {
  return e instanceof n.Bl || e instanceof n.Vl || e instanceof n.Ul ? w(e.unwrap()) : e;
}
function we(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var Te = [
    `bootstrap`,
    `host_ready`,
    `window_created`,
    `renderer_ready`,
    `first_content_visible`,
    `background_ready`,
  ],
  Ee = class {
    abortController = new AbortController();
    listeners = new Set();
    phase;
    constructor(e = `bootstrap`) {
      this.phase = e;
    }
    getSnapshot = () => this.phase;
    subscribe = (e) =>
      this.abortController.signal.aborted
        ? () => {}
        : (this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          });
    hasReached(e) {
      return Te.indexOf(this.phase) >= Te.indexOf(e);
    }
    reach(e) {
      if (!(this.abortController.signal.aborted || this.hasReached(e))) {
        this.phase = e;
        for (let e of this.listeners) e();
      }
    }
    whenReached(e, t) {
      return t?.aborted
        ? Promise.reject(De(t))
        : this.abortController.signal.aborted
          ? Promise.reject(De(this.abortController.signal))
          : this.hasReached(e)
            ? Promise.resolve()
            : new Promise((n, r) => {
                let i = this.subscribe(() => {
                    this.hasReached(e) && (o(), n());
                  }),
                  a = () => {
                    (o(), r(De(t?.aborted ? t : this.abortController.signal)));
                  },
                  o = () => {
                    (i(),
                      t?.removeEventListener(`abort`, a),
                      this.abortController.signal.removeEventListener(`abort`, a));
                  };
                (t?.addEventListener(`abort`, a, { once: !0 }),
                  this.abortController.signal.addEventListener(`abort`, a, { once: !0 }));
              });
    }
    dispose() {
      this.abortController.signal.aborted ||
        (this.abortController.abort(new DOMException(`Startup was disposed`, `AbortError`)),
        this.listeners.clear());
    }
  };
function De(e) {
  return e.reason instanceof Error
    ? e.reason
    : new DOMException(`Startup was canceled`, `AbortError`);
}
var Oe = { report: () => {}, reportNonFatal: () => {}, reportFatal: () => {} };
function ke(e) {
  let t = (t, n, r) => {
    let i = typeof t == `string` ? Error(t) : t;
    try {
      e(i, n, r);
    } catch {}
  };
  return {
    report: t,
    reportNonFatal: (e, n) => t(e, `non-fatal`, n),
    reportFatal: (e, n) => t(e, `fatal`, n),
  };
}
var Ae = { error: 0, warning: 1, info: 2, debug: 3, trace: 4 };
function je(e, t) {
  return Ae[e] <= Ae[t];
}
function Me(e) {
  let t = Ne(process.env.CODEX_MAX_LOG_LEVEL);
  if (t != null) return t;
  switch (e) {
    case `prod`:
      return `info`;
    case `nightly`:
    case `internal-alpha`:
    case `public-beta`:
      return `debug`;
    case `agent`:
    case `dev`:
      return `trace`;
  }
}
function Ne(e) {
  let t = e?.trim().toLowerCase() ?? ``;
  switch (t) {
    case `error`:
    case `warning`:
    case `info`:
    case `debug`:
    case `trace`:
      return t;
    default:
      return null;
  }
}
var Pe = n.au(n.su(), n.su()),
  T = null,
  Fe = 0;
async function Ie(e, t) {
  let n = ++Fe,
    r = t;
  try {
    if (((r ??= o.app.getLocale()), T?.repoRoot === e && T.locale === r)) return;
    let t = await Re.load(e, r);
    if (n !== Fe) return;
    let i = T?.nativeIntl;
    (i?.replaceMessagesFrom(t), (T = { repoRoot: e, locale: r, nativeIntl: i ?? t }));
  } catch {
    if (n !== Fe) return;
    let e = Re.createDefault(),
      t = T?.nativeIntl;
    (t?.replaceMessagesFrom(e), (T = { repoRoot: null, locale: r ?? `en`, nativeIntl: t ?? e }));
  }
}
function Le() {
  if (T == null) throw Error(`NativeIntl has not been configured.`);
  return T.nativeIntl;
}
var Re = class e {
    messages;
    constructor(e) {
      this.messages = e;
    }
    static async load(t, n = o.app.getLocale()) {
      let r = n.trim().replace(/_/g, `-`),
        [i, a] = r.toLowerCase().split(`-`),
        s = a == null ? i : `${i}-${a.toUpperCase()}`,
        c = i ? new Intl.Locale(i).maximize().region : void 0,
        u = o.app.isPackaged
          ? (0, l.join)(o.app.getAppPath(), `native-menu-locales`)
          : (0, l.join)(t, `webview`, `src`, `locales`),
        d = Array.from(new Set([r, s, ce[i], c == null ? void 0 : `${i}-${c}`, i]))
          .filter((e) => e != null)
          .map((e) => (0, l.join)(u, `${e}.json`)),
        f = await Promise.all(
          d.map(async (e) => {
            try {
              return Pe.parse(JSON.parse(await (0, p.readFile)(e, `utf-8`)));
            } catch (e) {
              if (e instanceof Error && `code` in e && e.code === `ENOENT`) return null;
              throw e;
            }
          }),
        );
      return new e(f.find((e) => e != null) ?? null);
    }
    static createDefault() {
      return new e(null);
    }
    replaceMessagesFrom(e) {
      this.messages = e.messages;
    }
    formatMessage({ messageId: e, defaultMessage: t, values: n }) {
      return (this.messages?.[e] ?? t).replace(/\{(\w+)\}/g, (e, t) => n?.[t] ?? e);
    }
  },
  ze = e.i({ default: () => Be }),
  Be,
  Ve = e.r(() => {
    Be = {
      "application/1d-interleaved-parityfec": { source: `iana` },
      "application/3gpdash-qoe-report+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/3gpp-ims+xml": { source: `iana`, compressible: !0 },
      "application/3gpphal+json": { source: `iana`, compressible: !0 },
      "application/3gpphalforms+json": { source: `iana`, compressible: !0 },
      "application/a2l": { source: `iana` },
      "application/ace+cbor": { source: `iana` },
      "application/activemessage": { source: `iana` },
      "application/activity+json": { source: `iana`, compressible: !0 },
      "application/alto-costmap+json": { source: `iana`, compressible: !0 },
      "application/alto-costmapfilter+json": { source: `iana`, compressible: !0 },
      "application/alto-directory+json": { source: `iana`, compressible: !0 },
      "application/alto-endpointcost+json": { source: `iana`, compressible: !0 },
      "application/alto-endpointcostparams+json": { source: `iana`, compressible: !0 },
      "application/alto-endpointprop+json": { source: `iana`, compressible: !0 },
      "application/alto-endpointpropparams+json": { source: `iana`, compressible: !0 },
      "application/alto-error+json": { source: `iana`, compressible: !0 },
      "application/alto-networkmap+json": { source: `iana`, compressible: !0 },
      "application/alto-networkmapfilter+json": { source: `iana`, compressible: !0 },
      "application/alto-updatestreamcontrol+json": { source: `iana`, compressible: !0 },
      "application/alto-updatestreamparams+json": { source: `iana`, compressible: !0 },
      "application/aml": { source: `iana` },
      "application/andrew-inset": { source: `iana`, extensions: [`ez`] },
      "application/applefile": { source: `iana` },
      "application/applixware": { source: `apache`, extensions: [`aw`] },
      "application/at+jwt": { source: `iana` },
      "application/atf": { source: `iana` },
      "application/atfx": { source: `iana` },
      "application/atom+xml": { source: `iana`, compressible: !0, extensions: [`atom`] },
      "application/atomcat+xml": { source: `iana`, compressible: !0, extensions: [`atomcat`] },
      "application/atomdeleted+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`atomdeleted`],
      },
      "application/atomicmail": { source: `iana` },
      "application/atomsvc+xml": { source: `iana`, compressible: !0, extensions: [`atomsvc`] },
      "application/atsc-dwd+xml": { source: `iana`, compressible: !0, extensions: [`dwd`] },
      "application/atsc-dynamic-event-message": { source: `iana` },
      "application/atsc-held+xml": { source: `iana`, compressible: !0, extensions: [`held`] },
      "application/atsc-rdt+json": { source: `iana`, compressible: !0 },
      "application/atsc-rsat+xml": { source: `iana`, compressible: !0, extensions: [`rsat`] },
      "application/atxml": { source: `iana` },
      "application/auth-policy+xml": { source: `iana`, compressible: !0 },
      "application/bacnet-xdd+zip": { source: `iana`, compressible: !1 },
      "application/batch-smtp": { source: `iana` },
      "application/bdoc": { compressible: !1, extensions: [`bdoc`] },
      "application/beep+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/calendar+json": { source: `iana`, compressible: !0 },
      "application/calendar+xml": { source: `iana`, compressible: !0, extensions: [`xcs`] },
      "application/call-completion": { source: `iana` },
      "application/cals-1840": { source: `iana` },
      "application/captive+json": { source: `iana`, compressible: !0 },
      "application/cbor": { source: `iana` },
      "application/cbor-seq": { source: `iana` },
      "application/cccex": { source: `iana` },
      "application/ccmp+xml": { source: `iana`, compressible: !0 },
      "application/ccxml+xml": { source: `iana`, compressible: !0, extensions: [`ccxml`] },
      "application/cdfx+xml": { source: `iana`, compressible: !0, extensions: [`cdfx`] },
      "application/cdmi-capability": { source: `iana`, extensions: [`cdmia`] },
      "application/cdmi-container": { source: `iana`, extensions: [`cdmic`] },
      "application/cdmi-domain": { source: `iana`, extensions: [`cdmid`] },
      "application/cdmi-object": { source: `iana`, extensions: [`cdmio`] },
      "application/cdmi-queue": { source: `iana`, extensions: [`cdmiq`] },
      "application/cdni": { source: `iana` },
      "application/cea": { source: `iana` },
      "application/cea-2018+xml": { source: `iana`, compressible: !0 },
      "application/cellml+xml": { source: `iana`, compressible: !0 },
      "application/cfw": { source: `iana` },
      "application/city+json": { source: `iana`, compressible: !0 },
      "application/clr": { source: `iana` },
      "application/clue+xml": { source: `iana`, compressible: !0 },
      "application/clue_info+xml": { source: `iana`, compressible: !0 },
      "application/cms": { source: `iana` },
      "application/cnrp+xml": { source: `iana`, compressible: !0 },
      "application/coap-group+json": { source: `iana`, compressible: !0 },
      "application/coap-payload": { source: `iana` },
      "application/commonground": { source: `iana` },
      "application/conference-info+xml": { source: `iana`, compressible: !0 },
      "application/cose": { source: `iana` },
      "application/cose-key": { source: `iana` },
      "application/cose-key-set": { source: `iana` },
      "application/cpl+xml": { source: `iana`, compressible: !0, extensions: [`cpl`] },
      "application/csrattrs": { source: `iana` },
      "application/csta+xml": { source: `iana`, compressible: !0 },
      "application/cstadata+xml": { source: `iana`, compressible: !0 },
      "application/csvm+json": { source: `iana`, compressible: !0 },
      "application/cu-seeme": { source: `apache`, extensions: [`cu`] },
      "application/cwt": { source: `iana` },
      "application/cybercash": { source: `iana` },
      "application/dart": { compressible: !0 },
      "application/dash+xml": { source: `iana`, compressible: !0, extensions: [`mpd`] },
      "application/dash-patch+xml": { source: `iana`, compressible: !0, extensions: [`mpp`] },
      "application/dashdelta": { source: `iana` },
      "application/davmount+xml": { source: `iana`, compressible: !0, extensions: [`davmount`] },
      "application/dca-rft": { source: `iana` },
      "application/dcd": { source: `iana` },
      "application/dec-dx": { source: `iana` },
      "application/dialog-info+xml": { source: `iana`, compressible: !0 },
      "application/dicom": { source: `iana` },
      "application/dicom+json": { source: `iana`, compressible: !0 },
      "application/dicom+xml": { source: `iana`, compressible: !0 },
      "application/dii": { source: `iana` },
      "application/dit": { source: `iana` },
      "application/dns": { source: `iana` },
      "application/dns+json": { source: `iana`, compressible: !0 },
      "application/dns-message": { source: `iana` },
      "application/docbook+xml": { source: `apache`, compressible: !0, extensions: [`dbk`] },
      "application/dots+cbor": { source: `iana` },
      "application/dskpp+xml": { source: `iana`, compressible: !0 },
      "application/dssc+der": { source: `iana`, extensions: [`dssc`] },
      "application/dssc+xml": { source: `iana`, compressible: !0, extensions: [`xdssc`] },
      "application/dvcs": { source: `iana` },
      "application/ecmascript": { source: `iana`, compressible: !0, extensions: [`es`, `ecma`] },
      "application/edi-consent": { source: `iana` },
      "application/edi-x12": { source: `iana`, compressible: !1 },
      "application/edifact": { source: `iana`, compressible: !1 },
      "application/efi": { source: `iana` },
      "application/elm+json": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/elm+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.cap+xml": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
      },
      "application/emergencycalldata.comment+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.control+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.deviceinfo+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.ecall.msd": { source: `iana` },
      "application/emergencycalldata.providerinfo+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.serviceinfo+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.subscriberinfo+xml": { source: `iana`, compressible: !0 },
      "application/emergencycalldata.veds+xml": { source: `iana`, compressible: !0 },
      "application/emma+xml": { source: `iana`, compressible: !0, extensions: [`emma`] },
      "application/emotionml+xml": { source: `iana`, compressible: !0, extensions: [`emotionml`] },
      "application/encaprtp": { source: `iana` },
      "application/epp+xml": { source: `iana`, compressible: !0 },
      "application/epub+zip": { source: `iana`, compressible: !1, extensions: [`epub`] },
      "application/eshop": { source: `iana` },
      "application/exi": { source: `iana`, extensions: [`exi`] },
      "application/expect-ct-report+json": { source: `iana`, compressible: !0 },
      "application/express": { source: `iana`, extensions: [`exp`] },
      "application/fastinfoset": { source: `iana` },
      "application/fastsoap": { source: `iana` },
      "application/fdt+xml": { source: `iana`, compressible: !0, extensions: [`fdt`] },
      "application/fhir+json": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/fhir+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/fido.trusted-apps+json": { compressible: !0 },
      "application/fits": { source: `iana` },
      "application/flexfec": { source: `iana` },
      "application/font-sfnt": { source: `iana` },
      "application/font-tdpfr": { source: `iana`, extensions: [`pfr`] },
      "application/font-woff": { source: `iana`, compressible: !1 },
      "application/framework-attributes+xml": { source: `iana`, compressible: !0 },
      "application/geo+json": { source: `iana`, compressible: !0, extensions: [`geojson`] },
      "application/geo+json-seq": { source: `iana` },
      "application/geopackage+sqlite3": { source: `iana` },
      "application/geoxacml+xml": { source: `iana`, compressible: !0 },
      "application/gltf-buffer": { source: `iana` },
      "application/gml+xml": { source: `iana`, compressible: !0, extensions: [`gml`] },
      "application/gpx+xml": { source: `apache`, compressible: !0, extensions: [`gpx`] },
      "application/gxf": { source: `apache`, extensions: [`gxf`] },
      "application/gzip": { source: `iana`, compressible: !1, extensions: [`gz`] },
      "application/h224": { source: `iana` },
      "application/held+xml": { source: `iana`, compressible: !0 },
      "application/hjson": { extensions: [`hjson`] },
      "application/http": { source: `iana` },
      "application/hyperstudio": { source: `iana`, extensions: [`stk`] },
      "application/ibe-key-request+xml": { source: `iana`, compressible: !0 },
      "application/ibe-pkg-reply+xml": { source: `iana`, compressible: !0 },
      "application/ibe-pp-data": { source: `iana` },
      "application/iges": { source: `iana` },
      "application/im-iscomposing+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/index": { source: `iana` },
      "application/index.cmd": { source: `iana` },
      "application/index.obj": { source: `iana` },
      "application/index.response": { source: `iana` },
      "application/index.vnd": { source: `iana` },
      "application/inkml+xml": { source: `iana`, compressible: !0, extensions: [`ink`, `inkml`] },
      "application/iotp": { source: `iana` },
      "application/ipfix": { source: `iana`, extensions: [`ipfix`] },
      "application/ipp": { source: `iana` },
      "application/isup": { source: `iana` },
      "application/its+xml": { source: `iana`, compressible: !0, extensions: [`its`] },
      "application/java-archive": {
        source: `apache`,
        compressible: !1,
        extensions: [`jar`, `war`, `ear`],
      },
      "application/java-serialized-object": {
        source: `apache`,
        compressible: !1,
        extensions: [`ser`],
      },
      "application/java-vm": { source: `apache`, compressible: !1, extensions: [`class`] },
      "application/javascript": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`js`, `mjs`],
      },
      "application/jf2feed+json": { source: `iana`, compressible: !0 },
      "application/jose": { source: `iana` },
      "application/jose+json": { source: `iana`, compressible: !0 },
      "application/jrd+json": { source: `iana`, compressible: !0 },
      "application/jscalendar+json": { source: `iana`, compressible: !0 },
      "application/json": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`json`, `map`],
      },
      "application/json-patch+json": { source: `iana`, compressible: !0 },
      "application/json-seq": { source: `iana` },
      "application/json5": { extensions: [`json5`] },
      "application/jsonml+json": { source: `apache`, compressible: !0, extensions: [`jsonml`] },
      "application/jwk+json": { source: `iana`, compressible: !0 },
      "application/jwk-set+json": { source: `iana`, compressible: !0 },
      "application/jwt": { source: `iana` },
      "application/kpml-request+xml": { source: `iana`, compressible: !0 },
      "application/kpml-response+xml": { source: `iana`, compressible: !0 },
      "application/ld+json": { source: `iana`, compressible: !0, extensions: [`jsonld`] },
      "application/lgr+xml": { source: `iana`, compressible: !0, extensions: [`lgr`] },
      "application/link-format": { source: `iana` },
      "application/load-control+xml": { source: `iana`, compressible: !0 },
      "application/lost+xml": { source: `iana`, compressible: !0, extensions: [`lostxml`] },
      "application/lostsync+xml": { source: `iana`, compressible: !0 },
      "application/lpf+zip": { source: `iana`, compressible: !1 },
      "application/lxf": { source: `iana` },
      "application/mac-binhex40": { source: `iana`, extensions: [`hqx`] },
      "application/mac-compactpro": { source: `apache`, extensions: [`cpt`] },
      "application/macwriteii": { source: `iana` },
      "application/mads+xml": { source: `iana`, compressible: !0, extensions: [`mads`] },
      "application/manifest+json": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`webmanifest`],
      },
      "application/marc": { source: `iana`, extensions: [`mrc`] },
      "application/marcxml+xml": { source: `iana`, compressible: !0, extensions: [`mrcx`] },
      "application/mathematica": { source: `iana`, extensions: [`ma`, `nb`, `mb`] },
      "application/mathml+xml": { source: `iana`, compressible: !0, extensions: [`mathml`] },
      "application/mathml-content+xml": { source: `iana`, compressible: !0 },
      "application/mathml-presentation+xml": { source: `iana`, compressible: !0 },
      "application/mbms-associated-procedure-description+xml": { source: `iana`, compressible: !0 },
      "application/mbms-deregister+xml": { source: `iana`, compressible: !0 },
      "application/mbms-envelope+xml": { source: `iana`, compressible: !0 },
      "application/mbms-msk+xml": { source: `iana`, compressible: !0 },
      "application/mbms-msk-response+xml": { source: `iana`, compressible: !0 },
      "application/mbms-protection-description+xml": { source: `iana`, compressible: !0 },
      "application/mbms-reception-report+xml": { source: `iana`, compressible: !0 },
      "application/mbms-register+xml": { source: `iana`, compressible: !0 },
      "application/mbms-register-response+xml": { source: `iana`, compressible: !0 },
      "application/mbms-schedule+xml": { source: `iana`, compressible: !0 },
      "application/mbms-user-service-description+xml": { source: `iana`, compressible: !0 },
      "application/mbox": { source: `iana`, extensions: [`mbox`] },
      "application/media-policy-dataset+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`mpf`],
      },
      "application/media_control+xml": { source: `iana`, compressible: !0 },
      "application/mediaservercontrol+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`mscml`],
      },
      "application/merge-patch+json": { source: `iana`, compressible: !0 },
      "application/metalink+xml": { source: `apache`, compressible: !0, extensions: [`metalink`] },
      "application/metalink4+xml": { source: `iana`, compressible: !0, extensions: [`meta4`] },
      "application/mets+xml": { source: `iana`, compressible: !0, extensions: [`mets`] },
      "application/mf4": { source: `iana` },
      "application/mikey": { source: `iana` },
      "application/mipc": { source: `iana` },
      "application/missing-blocks+cbor-seq": { source: `iana` },
      "application/mmt-aei+xml": { source: `iana`, compressible: !0, extensions: [`maei`] },
      "application/mmt-usd+xml": { source: `iana`, compressible: !0, extensions: [`musd`] },
      "application/mods+xml": { source: `iana`, compressible: !0, extensions: [`mods`] },
      "application/moss-keys": { source: `iana` },
      "application/moss-signature": { source: `iana` },
      "application/mosskey-data": { source: `iana` },
      "application/mosskey-request": { source: `iana` },
      "application/mp21": { source: `iana`, extensions: [`m21`, `mp21`] },
      "application/mp4": { source: `iana`, extensions: [`mp4s`, `m4p`] },
      "application/mpeg4-generic": { source: `iana` },
      "application/mpeg4-iod": { source: `iana` },
      "application/mpeg4-iod-xmt": { source: `iana` },
      "application/mrb-consumer+xml": { source: `iana`, compressible: !0 },
      "application/mrb-publish+xml": { source: `iana`, compressible: !0 },
      "application/msc-ivr+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/msc-mixer+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/msword": { source: `iana`, compressible: !1, extensions: [`doc`, `dot`] },
      "application/mud+json": { source: `iana`, compressible: !0 },
      "application/multipart-core": { source: `iana` },
      "application/mxf": { source: `iana`, extensions: [`mxf`] },
      "application/n-quads": { source: `iana`, extensions: [`nq`] },
      "application/n-triples": { source: `iana`, extensions: [`nt`] },
      "application/nasdata": { source: `iana` },
      "application/news-checkgroups": { source: `iana`, charset: `US-ASCII` },
      "application/news-groupinfo": { source: `iana`, charset: `US-ASCII` },
      "application/news-transmission": { source: `iana` },
      "application/nlsml+xml": { source: `iana`, compressible: !0 },
      "application/node": { source: `iana`, extensions: [`cjs`] },
      "application/nss": { source: `iana` },
      "application/oauth-authz-req+jwt": { source: `iana` },
      "application/oblivious-dns-message": { source: `iana` },
      "application/ocsp-request": { source: `iana` },
      "application/ocsp-response": { source: `iana` },
      "application/octet-stream": {
        source: `iana`,
        compressible: !1,
        extensions: [
          `bin`,
          `dms`,
          `lrf`,
          `mar`,
          `so`,
          `dist`,
          `distz`,
          `pkg`,
          `bpk`,
          `dump`,
          `elc`,
          `deploy`,
          `exe`,
          `dll`,
          `deb`,
          `dmg`,
          `iso`,
          `img`,
          `msi`,
          `msp`,
          `msm`,
          `buffer`,
        ],
      },
      "application/oda": { source: `iana`, extensions: [`oda`] },
      "application/odm+xml": { source: `iana`, compressible: !0 },
      "application/odx": { source: `iana` },
      "application/oebps-package+xml": { source: `iana`, compressible: !0, extensions: [`opf`] },
      "application/ogg": { source: `iana`, compressible: !1, extensions: [`ogx`] },
      "application/omdoc+xml": { source: `apache`, compressible: !0, extensions: [`omdoc`] },
      "application/onenote": {
        source: `apache`,
        extensions: [`onetoc`, `onetoc2`, `onetmp`, `onepkg`],
      },
      "application/opc-nodeset+xml": { source: `iana`, compressible: !0 },
      "application/oscore": { source: `iana` },
      "application/oxps": { source: `iana`, extensions: [`oxps`] },
      "application/p21": { source: `iana` },
      "application/p21+zip": { source: `iana`, compressible: !1 },
      "application/p2p-overlay+xml": { source: `iana`, compressible: !0, extensions: [`relo`] },
      "application/parityfec": { source: `iana` },
      "application/passport": { source: `iana` },
      "application/patch-ops-error+xml": { source: `iana`, compressible: !0, extensions: [`xer`] },
      "application/pdf": { source: `iana`, compressible: !1, extensions: [`pdf`] },
      "application/pdx": { source: `iana` },
      "application/pem-certificate-chain": { source: `iana` },
      "application/pgp-encrypted": { source: `iana`, compressible: !1, extensions: [`pgp`] },
      "application/pgp-keys": { source: `iana`, extensions: [`asc`] },
      "application/pgp-signature": { source: `iana`, extensions: [`asc`, `sig`] },
      "application/pics-rules": { source: `apache`, extensions: [`prf`] },
      "application/pidf+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/pidf-diff+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/pkcs10": { source: `iana`, extensions: [`p10`] },
      "application/pkcs12": { source: `iana` },
      "application/pkcs7-mime": { source: `iana`, extensions: [`p7m`, `p7c`] },
      "application/pkcs7-signature": { source: `iana`, extensions: [`p7s`] },
      "application/pkcs8": { source: `iana`, extensions: [`p8`] },
      "application/pkcs8-encrypted": { source: `iana` },
      "application/pkix-attr-cert": { source: `iana`, extensions: [`ac`] },
      "application/pkix-cert": { source: `iana`, extensions: [`cer`] },
      "application/pkix-crl": { source: `iana`, extensions: [`crl`] },
      "application/pkix-pkipath": { source: `iana`, extensions: [`pkipath`] },
      "application/pkixcmp": { source: `iana`, extensions: [`pki`] },
      "application/pls+xml": { source: `iana`, compressible: !0, extensions: [`pls`] },
      "application/poc-settings+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/postscript": {
        source: `iana`,
        compressible: !0,
        extensions: [`ai`, `eps`, `ps`],
      },
      "application/ppsp-tracker+json": { source: `iana`, compressible: !0 },
      "application/problem+json": { source: `iana`, compressible: !0 },
      "application/problem+xml": { source: `iana`, compressible: !0 },
      "application/provenance+xml": { source: `iana`, compressible: !0, extensions: [`provx`] },
      "application/prs.alvestrand.titrax-sheet": { source: `iana` },
      "application/prs.cww": { source: `iana`, extensions: [`cww`] },
      "application/prs.cyn": { source: `iana`, charset: `7-BIT` },
      "application/prs.hpub+zip": { source: `iana`, compressible: !1 },
      "application/prs.nprend": { source: `iana` },
      "application/prs.plucker": { source: `iana` },
      "application/prs.rdf-xml-crypt": { source: `iana` },
      "application/prs.xsf+xml": { source: `iana`, compressible: !0 },
      "application/pskc+xml": { source: `iana`, compressible: !0, extensions: [`pskcxml`] },
      "application/pvd+json": { source: `iana`, compressible: !0 },
      "application/qsig": { source: `iana` },
      "application/raml+yaml": { compressible: !0, extensions: [`raml`] },
      "application/raptorfec": { source: `iana` },
      "application/rdap+json": { source: `iana`, compressible: !0 },
      "application/rdf+xml": { source: `iana`, compressible: !0, extensions: [`rdf`, `owl`] },
      "application/reginfo+xml": { source: `iana`, compressible: !0, extensions: [`rif`] },
      "application/relax-ng-compact-syntax": { source: `iana`, extensions: [`rnc`] },
      "application/remote-printing": { source: `iana` },
      "application/reputon+json": { source: `iana`, compressible: !0 },
      "application/resource-lists+xml": { source: `iana`, compressible: !0, extensions: [`rl`] },
      "application/resource-lists-diff+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`rld`],
      },
      "application/rfc+xml": { source: `iana`, compressible: !0 },
      "application/riscos": { source: `iana` },
      "application/rlmi+xml": { source: `iana`, compressible: !0 },
      "application/rls-services+xml": { source: `iana`, compressible: !0, extensions: [`rs`] },
      "application/route-apd+xml": { source: `iana`, compressible: !0, extensions: [`rapd`] },
      "application/route-s-tsid+xml": { source: `iana`, compressible: !0, extensions: [`sls`] },
      "application/route-usd+xml": { source: `iana`, compressible: !0, extensions: [`rusd`] },
      "application/rpki-ghostbusters": { source: `iana`, extensions: [`gbr`] },
      "application/rpki-manifest": { source: `iana`, extensions: [`mft`] },
      "application/rpki-publication": { source: `iana` },
      "application/rpki-roa": { source: `iana`, extensions: [`roa`] },
      "application/rpki-updown": { source: `iana` },
      "application/rsd+xml": { source: `apache`, compressible: !0, extensions: [`rsd`] },
      "application/rss+xml": { source: `apache`, compressible: !0, extensions: [`rss`] },
      "application/rtf": { source: `iana`, compressible: !0, extensions: [`rtf`] },
      "application/rtploopback": { source: `iana` },
      "application/rtx": { source: `iana` },
      "application/samlassertion+xml": { source: `iana`, compressible: !0 },
      "application/samlmetadata+xml": { source: `iana`, compressible: !0 },
      "application/sarif+json": { source: `iana`, compressible: !0 },
      "application/sarif-external-properties+json": { source: `iana`, compressible: !0 },
      "application/sbe": { source: `iana` },
      "application/sbml+xml": { source: `iana`, compressible: !0, extensions: [`sbml`] },
      "application/scaip+xml": { source: `iana`, compressible: !0 },
      "application/scim+json": { source: `iana`, compressible: !0 },
      "application/scvp-cv-request": { source: `iana`, extensions: [`scq`] },
      "application/scvp-cv-response": { source: `iana`, extensions: [`scs`] },
      "application/scvp-vp-request": { source: `iana`, extensions: [`spq`] },
      "application/scvp-vp-response": { source: `iana`, extensions: [`spp`] },
      "application/sdp": { source: `iana`, extensions: [`sdp`] },
      "application/secevent+jwt": { source: `iana` },
      "application/senml+cbor": { source: `iana` },
      "application/senml+json": { source: `iana`, compressible: !0 },
      "application/senml+xml": { source: `iana`, compressible: !0, extensions: [`senmlx`] },
      "application/senml-etch+cbor": { source: `iana` },
      "application/senml-etch+json": { source: `iana`, compressible: !0 },
      "application/senml-exi": { source: `iana` },
      "application/sensml+cbor": { source: `iana` },
      "application/sensml+json": { source: `iana`, compressible: !0 },
      "application/sensml+xml": { source: `iana`, compressible: !0, extensions: [`sensmlx`] },
      "application/sensml-exi": { source: `iana` },
      "application/sep+xml": { source: `iana`, compressible: !0 },
      "application/sep-exi": { source: `iana` },
      "application/session-info": { source: `iana` },
      "application/set-payment": { source: `iana` },
      "application/set-payment-initiation": { source: `iana`, extensions: [`setpay`] },
      "application/set-registration": { source: `iana` },
      "application/set-registration-initiation": { source: `iana`, extensions: [`setreg`] },
      "application/sgml": { source: `iana` },
      "application/sgml-open-catalog": { source: `iana` },
      "application/shf+xml": { source: `iana`, compressible: !0, extensions: [`shf`] },
      "application/sieve": { source: `iana`, extensions: [`siv`, `sieve`] },
      "application/simple-filter+xml": { source: `iana`, compressible: !0 },
      "application/simple-message-summary": { source: `iana` },
      "application/simplesymbolcontainer": { source: `iana` },
      "application/sipc": { source: `iana` },
      "application/slate": { source: `iana` },
      "application/smil": { source: `iana` },
      "application/smil+xml": { source: `iana`, compressible: !0, extensions: [`smi`, `smil`] },
      "application/smpte336m": { source: `iana` },
      "application/soap+fastinfoset": { source: `iana` },
      "application/soap+xml": { source: `iana`, compressible: !0 },
      "application/sparql-query": { source: `iana`, extensions: [`rq`] },
      "application/sparql-results+xml": { source: `iana`, compressible: !0, extensions: [`srx`] },
      "application/spdx+json": { source: `iana`, compressible: !0 },
      "application/spirits-event+xml": { source: `iana`, compressible: !0 },
      "application/sql": { source: `iana` },
      "application/srgs": { source: `iana`, extensions: [`gram`] },
      "application/srgs+xml": { source: `iana`, compressible: !0, extensions: [`grxml`] },
      "application/sru+xml": { source: `iana`, compressible: !0, extensions: [`sru`] },
      "application/ssdl+xml": { source: `apache`, compressible: !0, extensions: [`ssdl`] },
      "application/ssml+xml": { source: `iana`, compressible: !0, extensions: [`ssml`] },
      "application/stix+json": { source: `iana`, compressible: !0 },
      "application/swid+xml": { source: `iana`, compressible: !0, extensions: [`swidtag`] },
      "application/tamp-apex-update": { source: `iana` },
      "application/tamp-apex-update-confirm": { source: `iana` },
      "application/tamp-community-update": { source: `iana` },
      "application/tamp-community-update-confirm": { source: `iana` },
      "application/tamp-error": { source: `iana` },
      "application/tamp-sequence-adjust": { source: `iana` },
      "application/tamp-sequence-adjust-confirm": { source: `iana` },
      "application/tamp-status-query": { source: `iana` },
      "application/tamp-status-response": { source: `iana` },
      "application/tamp-update": { source: `iana` },
      "application/tamp-update-confirm": { source: `iana` },
      "application/tar": { compressible: !0 },
      "application/taxii+json": { source: `iana`, compressible: !0 },
      "application/td+json": { source: `iana`, compressible: !0 },
      "application/tei+xml": { source: `iana`, compressible: !0, extensions: [`tei`, `teicorpus`] },
      "application/tetra_isi": { source: `iana` },
      "application/thraud+xml": { source: `iana`, compressible: !0, extensions: [`tfi`] },
      "application/timestamp-query": { source: `iana` },
      "application/timestamp-reply": { source: `iana` },
      "application/timestamped-data": { source: `iana`, extensions: [`tsd`] },
      "application/tlsrpt+gzip": { source: `iana` },
      "application/tlsrpt+json": { source: `iana`, compressible: !0 },
      "application/tnauthlist": { source: `iana` },
      "application/token-introspection+jwt": { source: `iana` },
      "application/toml": { compressible: !0, extensions: [`toml`] },
      "application/trickle-ice-sdpfrag": { source: `iana` },
      "application/trig": { source: `iana`, extensions: [`trig`] },
      "application/ttml+xml": { source: `iana`, compressible: !0, extensions: [`ttml`] },
      "application/tve-trigger": { source: `iana` },
      "application/tzif": { source: `iana` },
      "application/tzif-leap": { source: `iana` },
      "application/ubjson": { compressible: !1, extensions: [`ubj`] },
      "application/ulpfec": { source: `iana` },
      "application/urc-grpsheet+xml": { source: `iana`, compressible: !0 },
      "application/urc-ressheet+xml": { source: `iana`, compressible: !0, extensions: [`rsheet`] },
      "application/urc-targetdesc+xml": { source: `iana`, compressible: !0, extensions: [`td`] },
      "application/urc-uisocketdesc+xml": { source: `iana`, compressible: !0 },
      "application/vcard+json": { source: `iana`, compressible: !0 },
      "application/vcard+xml": { source: `iana`, compressible: !0 },
      "application/vemmi": { source: `iana` },
      "application/vividence.scriptfile": { source: `apache` },
      "application/vnd.1000minds.decision-model+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`1km`],
      },
      "application/vnd.3gpp-prose+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp-prose-pc3ch+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp-v2x-local-service-information": { source: `iana` },
      "application/vnd.3gpp.5gnas": { source: `iana` },
      "application/vnd.3gpp.access-transfer-events+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.bsf+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.gmop+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.gtpc": { source: `iana` },
      "application/vnd.3gpp.interworking-data": { source: `iana` },
      "application/vnd.3gpp.lpp": { source: `iana` },
      "application/vnd.3gpp.mc-signalling-ear": { source: `iana` },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcdata-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcdata-payload": { source: `iana` },
      "application/vnd.3gpp.mcdata-service-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcdata-signalling": { source: `iana` },
      "application/vnd.3gpp.mcdata-ue-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcdata-user-profile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-floor-request+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-location-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-service-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-signed+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-ue-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcptt-user-profile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-location-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-service-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-ue-config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mcvideo-user-profile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.mid-call+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.ngap": { source: `iana` },
      "application/vnd.3gpp.pfcp": { source: `iana` },
      "application/vnd.3gpp.pic-bw-large": { source: `iana`, extensions: [`plb`] },
      "application/vnd.3gpp.pic-bw-small": { source: `iana`, extensions: [`psb`] },
      "application/vnd.3gpp.pic-bw-var": { source: `iana`, extensions: [`pvb`] },
      "application/vnd.3gpp.s1ap": { source: `iana` },
      "application/vnd.3gpp.sms": { source: `iana` },
      "application/vnd.3gpp.sms+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.srvcc-ext+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.srvcc-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.state-and-event-info+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp.ussd+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp2.bcmcsinfo+xml": { source: `iana`, compressible: !0 },
      "application/vnd.3gpp2.sms": { source: `iana` },
      "application/vnd.3gpp2.tcap": { source: `iana`, extensions: [`tcap`] },
      "application/vnd.3lightssoftware.imagescal": { source: `iana` },
      "application/vnd.3m.post-it-notes": { source: `iana`, extensions: [`pwn`] },
      "application/vnd.accpac.simply.aso": { source: `iana`, extensions: [`aso`] },
      "application/vnd.accpac.simply.imp": { source: `iana`, extensions: [`imp`] },
      "application/vnd.acucobol": { source: `iana`, extensions: [`acu`] },
      "application/vnd.acucorp": { source: `iana`, extensions: [`atc`, `acutc`] },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: `apache`,
        compressible: !1,
        extensions: [`air`],
      },
      "application/vnd.adobe.flash.movie": { source: `iana` },
      "application/vnd.adobe.formscentral.fcdt": { source: `iana`, extensions: [`fcdt`] },
      "application/vnd.adobe.fxp": { source: `iana`, extensions: [`fxp`, `fxpl`] },
      "application/vnd.adobe.partial-upload": { source: `iana` },
      "application/vnd.adobe.xdp+xml": { source: `iana`, compressible: !0, extensions: [`xdp`] },
      "application/vnd.adobe.xfdf": { source: `iana`, extensions: [`xfdf`] },
      "application/vnd.aether.imp": { source: `iana` },
      "application/vnd.afpc.afplinedata": { source: `iana` },
      "application/vnd.afpc.afplinedata-pagedef": { source: `iana` },
      "application/vnd.afpc.cmoca-cmresource": { source: `iana` },
      "application/vnd.afpc.foca-charset": { source: `iana` },
      "application/vnd.afpc.foca-codedfont": { source: `iana` },
      "application/vnd.afpc.foca-codepage": { source: `iana` },
      "application/vnd.afpc.modca": { source: `iana` },
      "application/vnd.afpc.modca-cmtable": { source: `iana` },
      "application/vnd.afpc.modca-formdef": { source: `iana` },
      "application/vnd.afpc.modca-mediummap": { source: `iana` },
      "application/vnd.afpc.modca-objectcontainer": { source: `iana` },
      "application/vnd.afpc.modca-overlay": { source: `iana` },
      "application/vnd.afpc.modca-pagesegment": { source: `iana` },
      "application/vnd.age": { source: `iana`, extensions: [`age`] },
      "application/vnd.ah-barcode": { source: `iana` },
      "application/vnd.ahead.space": { source: `iana`, extensions: [`ahead`] },
      "application/vnd.airzip.filesecure.azf": { source: `iana`, extensions: [`azf`] },
      "application/vnd.airzip.filesecure.azs": { source: `iana`, extensions: [`azs`] },
      "application/vnd.amadeus+json": { source: `iana`, compressible: !0 },
      "application/vnd.amazon.ebook": { source: `apache`, extensions: [`azw`] },
      "application/vnd.amazon.mobi8-ebook": { source: `iana` },
      "application/vnd.americandynamics.acc": { source: `iana`, extensions: [`acc`] },
      "application/vnd.amiga.ami": { source: `iana`, extensions: [`ami`] },
      "application/vnd.amundsen.maze+xml": { source: `iana`, compressible: !0 },
      "application/vnd.android.ota": { source: `iana` },
      "application/vnd.android.package-archive": {
        source: `apache`,
        compressible: !1,
        extensions: [`apk`],
      },
      "application/vnd.anki": { source: `iana` },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: `iana`,
        extensions: [`cii`],
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: `apache`,
        extensions: [`fti`],
      },
      "application/vnd.antix.game-component": { source: `iana`, extensions: [`atx`] },
      "application/vnd.apache.arrow.file": { source: `iana` },
      "application/vnd.apache.arrow.stream": { source: `iana` },
      "application/vnd.apache.thrift.binary": { source: `iana` },
      "application/vnd.apache.thrift.compact": { source: `iana` },
      "application/vnd.apache.thrift.json": { source: `iana` },
      "application/vnd.api+json": { source: `iana`, compressible: !0 },
      "application/vnd.aplextor.warrp+json": { source: `iana`, compressible: !0 },
      "application/vnd.apothekende.reservation+json": { source: `iana`, compressible: !0 },
      "application/vnd.apple.installer+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`mpkg`],
      },
      "application/vnd.apple.keynote": { source: `iana`, extensions: [`key`] },
      "application/vnd.apple.mpegurl": { source: `iana`, extensions: [`m3u8`] },
      "application/vnd.apple.numbers": { source: `iana`, extensions: [`numbers`] },
      "application/vnd.apple.pages": { source: `iana`, extensions: [`pages`] },
      "application/vnd.apple.pkpass": { compressible: !1, extensions: [`pkpass`] },
      "application/vnd.arastra.swi": { source: `iana` },
      "application/vnd.aristanetworks.swi": { source: `iana`, extensions: [`swi`] },
      "application/vnd.artisan+json": { source: `iana`, compressible: !0 },
      "application/vnd.artsquare": { source: `iana` },
      "application/vnd.astraea-software.iota": { source: `iana`, extensions: [`iota`] },
      "application/vnd.audiograph": { source: `iana`, extensions: [`aep`] },
      "application/vnd.autopackage": { source: `iana` },
      "application/vnd.avalon+json": { source: `iana`, compressible: !0 },
      "application/vnd.avistar+xml": { source: `iana`, compressible: !0 },
      "application/vnd.balsamiq.bmml+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`bmml`],
      },
      "application/vnd.balsamiq.bmpr": { source: `iana` },
      "application/vnd.banana-accounting": { source: `iana` },
      "application/vnd.bbf.usp.error": { source: `iana` },
      "application/vnd.bbf.usp.msg": { source: `iana` },
      "application/vnd.bbf.usp.msg+json": { source: `iana`, compressible: !0 },
      "application/vnd.bekitzur-stech+json": { source: `iana`, compressible: !0 },
      "application/vnd.bint.med-content": { source: `iana` },
      "application/vnd.biopax.rdf+xml": { source: `iana`, compressible: !0 },
      "application/vnd.blink-idb-value-wrapper": { source: `iana` },
      "application/vnd.blueice.multipass": { source: `iana`, extensions: [`mpm`] },
      "application/vnd.bluetooth.ep.oob": { source: `iana` },
      "application/vnd.bluetooth.le.oob": { source: `iana` },
      "application/vnd.bmi": { source: `iana`, extensions: [`bmi`] },
      "application/vnd.bpf": { source: `iana` },
      "application/vnd.bpf3": { source: `iana` },
      "application/vnd.businessobjects": { source: `iana`, extensions: [`rep`] },
      "application/vnd.byu.uapi+json": { source: `iana`, compressible: !0 },
      "application/vnd.cab-jscript": { source: `iana` },
      "application/vnd.canon-cpdl": { source: `iana` },
      "application/vnd.canon-lips": { source: `iana` },
      "application/vnd.capasystems-pg+json": { source: `iana`, compressible: !0 },
      "application/vnd.cendio.thinlinc.clientconf": { source: `iana` },
      "application/vnd.century-systems.tcp_stream": { source: `iana` },
      "application/vnd.chemdraw+xml": { source: `iana`, compressible: !0, extensions: [`cdxml`] },
      "application/vnd.chess-pgn": { source: `iana` },
      "application/vnd.chipnuts.karaoke-mmd": { source: `iana`, extensions: [`mmd`] },
      "application/vnd.ciedi": { source: `iana` },
      "application/vnd.cinderella": { source: `iana`, extensions: [`cdy`] },
      "application/vnd.cirpack.isdn-ext": { source: `iana` },
      "application/vnd.citationstyles.style+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`csl`],
      },
      "application/vnd.claymore": { source: `iana`, extensions: [`cla`] },
      "application/vnd.cloanto.rp9": { source: `iana`, extensions: [`rp9`] },
      "application/vnd.clonk.c4group": {
        source: `iana`,
        extensions: [`c4g`, `c4d`, `c4f`, `c4p`, `c4u`],
      },
      "application/vnd.cluetrust.cartomobile-config": { source: `iana`, extensions: [`c11amc`] },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: `iana`,
        extensions: [`c11amz`],
      },
      "application/vnd.coffeescript": { source: `iana` },
      "application/vnd.collabio.xodocuments.document": { source: `iana` },
      "application/vnd.collabio.xodocuments.document-template": { source: `iana` },
      "application/vnd.collabio.xodocuments.presentation": { source: `iana` },
      "application/vnd.collabio.xodocuments.presentation-template": { source: `iana` },
      "application/vnd.collabio.xodocuments.spreadsheet": { source: `iana` },
      "application/vnd.collabio.xodocuments.spreadsheet-template": { source: `iana` },
      "application/vnd.collection+json": { source: `iana`, compressible: !0 },
      "application/vnd.collection.doc+json": { source: `iana`, compressible: !0 },
      "application/vnd.collection.next+json": { source: `iana`, compressible: !0 },
      "application/vnd.comicbook+zip": { source: `iana`, compressible: !1 },
      "application/vnd.comicbook-rar": { source: `iana` },
      "application/vnd.commerce-battelle": { source: `iana` },
      "application/vnd.commonspace": { source: `iana`, extensions: [`csp`] },
      "application/vnd.contact.cmsg": { source: `iana`, extensions: [`cdbcmsg`] },
      "application/vnd.coreos.ignition+json": { source: `iana`, compressible: !0 },
      "application/vnd.cosmocaller": { source: `iana`, extensions: [`cmc`] },
      "application/vnd.crick.clicker": { source: `iana`, extensions: [`clkx`] },
      "application/vnd.crick.clicker.keyboard": { source: `iana`, extensions: [`clkk`] },
      "application/vnd.crick.clicker.palette": { source: `iana`, extensions: [`clkp`] },
      "application/vnd.crick.clicker.template": { source: `iana`, extensions: [`clkt`] },
      "application/vnd.crick.clicker.wordbank": { source: `iana`, extensions: [`clkw`] },
      "application/vnd.criticaltools.wbs+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`wbs`],
      },
      "application/vnd.cryptii.pipe+json": { source: `iana`, compressible: !0 },
      "application/vnd.crypto-shade-file": { source: `iana` },
      "application/vnd.cryptomator.encrypted": { source: `iana` },
      "application/vnd.cryptomator.vault": { source: `iana` },
      "application/vnd.ctc-posml": { source: `iana`, extensions: [`pml`] },
      "application/vnd.ctct.ws+xml": { source: `iana`, compressible: !0 },
      "application/vnd.cups-pdf": { source: `iana` },
      "application/vnd.cups-postscript": { source: `iana` },
      "application/vnd.cups-ppd": { source: `iana`, extensions: [`ppd`] },
      "application/vnd.cups-raster": { source: `iana` },
      "application/vnd.cups-raw": { source: `iana` },
      "application/vnd.curl": { source: `iana` },
      "application/vnd.curl.car": { source: `apache`, extensions: [`car`] },
      "application/vnd.curl.pcurl": { source: `apache`, extensions: [`pcurl`] },
      "application/vnd.cyan.dean.root+xml": { source: `iana`, compressible: !0 },
      "application/vnd.cybank": { source: `iana` },
      "application/vnd.cyclonedx+json": { source: `iana`, compressible: !0 },
      "application/vnd.cyclonedx+xml": { source: `iana`, compressible: !0 },
      "application/vnd.d2l.coursepackage1p0+zip": { source: `iana`, compressible: !1 },
      "application/vnd.d3m-dataset": { source: `iana` },
      "application/vnd.d3m-problem": { source: `iana` },
      "application/vnd.dart": { source: `iana`, compressible: !0, extensions: [`dart`] },
      "application/vnd.data-vision.rdz": { source: `iana`, extensions: [`rdz`] },
      "application/vnd.datapackage+json": { source: `iana`, compressible: !0 },
      "application/vnd.dataresource+json": { source: `iana`, compressible: !0 },
      "application/vnd.dbf": { source: `iana`, extensions: [`dbf`] },
      "application/vnd.debian.binary-package": { source: `iana` },
      "application/vnd.dece.data": { source: `iana`, extensions: [`uvf`, `uvvf`, `uvd`, `uvvd`] },
      "application/vnd.dece.ttml+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`uvt`, `uvvt`],
      },
      "application/vnd.dece.unspecified": { source: `iana`, extensions: [`uvx`, `uvvx`] },
      "application/vnd.dece.zip": { source: `iana`, extensions: [`uvz`, `uvvz`] },
      "application/vnd.denovo.fcselayout-link": { source: `iana`, extensions: [`fe_launch`] },
      "application/vnd.desmume.movie": { source: `iana` },
      "application/vnd.dir-bi.plate-dl-nosuffix": { source: `iana` },
      "application/vnd.dm.delegation+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dna": { source: `iana`, extensions: [`dna`] },
      "application/vnd.document+json": { source: `iana`, compressible: !0 },
      "application/vnd.dolby.mlp": { source: `apache`, extensions: [`mlp`] },
      "application/vnd.dolby.mobile.1": { source: `iana` },
      "application/vnd.dolby.mobile.2": { source: `iana` },
      "application/vnd.doremir.scorecloud-binary-document": { source: `iana` },
      "application/vnd.dpgraph": { source: `iana`, extensions: [`dpg`] },
      "application/vnd.dreamfactory": { source: `iana`, extensions: [`dfac`] },
      "application/vnd.drive+json": { source: `iana`, compressible: !0 },
      "application/vnd.ds-keypoint": { source: `apache`, extensions: [`kpxx`] },
      "application/vnd.dtg.local": { source: `iana` },
      "application/vnd.dtg.local.flash": { source: `iana` },
      "application/vnd.dtg.local.html": { source: `iana` },
      "application/vnd.dvb.ait": { source: `iana`, extensions: [`ait`] },
      "application/vnd.dvb.dvbisl+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.dvbj": { source: `iana` },
      "application/vnd.dvb.esgcontainer": { source: `iana` },
      "application/vnd.dvb.ipdcdftnotifaccess": { source: `iana` },
      "application/vnd.dvb.ipdcesgaccess": { source: `iana` },
      "application/vnd.dvb.ipdcesgaccess2": { source: `iana` },
      "application/vnd.dvb.ipdcesgpdd": { source: `iana` },
      "application/vnd.dvb.ipdcroaming": { source: `iana` },
      "application/vnd.dvb.iptv.alfec-base": { source: `iana` },
      "application/vnd.dvb.iptv.alfec-enhancement": { source: `iana` },
      "application/vnd.dvb.notif-aggregate-root+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.notif-container+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.notif-generic+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.notif-ia-msglist+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.notif-ia-registration-request+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.dvb.notif-init+xml": { source: `iana`, compressible: !0 },
      "application/vnd.dvb.pfr": { source: `iana` },
      "application/vnd.dvb.service": { source: `iana`, extensions: [`svc`] },
      "application/vnd.dxr": { source: `iana` },
      "application/vnd.dynageo": { source: `iana`, extensions: [`geo`] },
      "application/vnd.dzr": { source: `iana` },
      "application/vnd.easykaraoke.cdgdownload": { source: `iana` },
      "application/vnd.ecdis-update": { source: `iana` },
      "application/vnd.ecip.rlp": { source: `iana` },
      "application/vnd.eclipse.ditto+json": { source: `iana`, compressible: !0 },
      "application/vnd.ecowin.chart": { source: `iana`, extensions: [`mag`] },
      "application/vnd.ecowin.filerequest": { source: `iana` },
      "application/vnd.ecowin.fileupdate": { source: `iana` },
      "application/vnd.ecowin.series": { source: `iana` },
      "application/vnd.ecowin.seriesrequest": { source: `iana` },
      "application/vnd.ecowin.seriesupdate": { source: `iana` },
      "application/vnd.efi.img": { source: `iana` },
      "application/vnd.efi.iso": { source: `iana` },
      "application/vnd.emclient.accessrequest+xml": { source: `iana`, compressible: !0 },
      "application/vnd.enliven": { source: `iana`, extensions: [`nml`] },
      "application/vnd.enphase.envoy": { source: `iana` },
      "application/vnd.eprints.data+xml": { source: `iana`, compressible: !0 },
      "application/vnd.epson.esf": { source: `iana`, extensions: [`esf`] },
      "application/vnd.epson.msf": { source: `iana`, extensions: [`msf`] },
      "application/vnd.epson.quickanime": { source: `iana`, extensions: [`qam`] },
      "application/vnd.epson.salt": { source: `iana`, extensions: [`slt`] },
      "application/vnd.epson.ssf": { source: `iana`, extensions: [`ssf`] },
      "application/vnd.ericsson.quickcall": { source: `iana` },
      "application/vnd.espass-espass+zip": { source: `iana`, compressible: !1 },
      "application/vnd.eszigno3+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`es3`, `et3`],
      },
      "application/vnd.etsi.aoc+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.asic-e+zip": { source: `iana`, compressible: !1 },
      "application/vnd.etsi.asic-s+zip": { source: `iana`, compressible: !1 },
      "application/vnd.etsi.cug+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvcommand+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvdiscovery+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvprofile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvsad-bc+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvsad-cod+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvsad-npvr+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvservice+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvsync+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.iptvueprofile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.mcid+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.mheg5": { source: `iana` },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.etsi.pstn+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.sci+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.simservs+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.timestamp-token": { source: `iana` },
      "application/vnd.etsi.tsl+xml": { source: `iana`, compressible: !0 },
      "application/vnd.etsi.tsl.der": { source: `iana` },
      "application/vnd.eu.kasparian.car+json": { source: `iana`, compressible: !0 },
      "application/vnd.eudora.data": { source: `iana` },
      "application/vnd.evolv.ecig.profile": { source: `iana` },
      "application/vnd.evolv.ecig.settings": { source: `iana` },
      "application/vnd.evolv.ecig.theme": { source: `iana` },
      "application/vnd.exstream-empower+zip": { source: `iana`, compressible: !1 },
      "application/vnd.exstream-package": { source: `iana` },
      "application/vnd.ezpix-album": { source: `iana`, extensions: [`ez2`] },
      "application/vnd.ezpix-package": { source: `iana`, extensions: [`ez3`] },
      "application/vnd.f-secure.mobile": { source: `iana` },
      "application/vnd.familysearch.gedcom+zip": { source: `iana`, compressible: !1 },
      "application/vnd.fastcopy-disk-image": { source: `iana` },
      "application/vnd.fdf": { source: `iana`, extensions: [`fdf`] },
      "application/vnd.fdsn.mseed": { source: `iana`, extensions: [`mseed`] },
      "application/vnd.fdsn.seed": { source: `iana`, extensions: [`seed`, `dataless`] },
      "application/vnd.ffsns": { source: `iana` },
      "application/vnd.ficlab.flb+zip": { source: `iana`, compressible: !1 },
      "application/vnd.filmit.zfc": { source: `iana` },
      "application/vnd.fints": { source: `iana` },
      "application/vnd.firemonkeys.cloudcell": { source: `iana` },
      "application/vnd.flographit": { source: `iana`, extensions: [`gph`] },
      "application/vnd.fluxtime.clip": { source: `iana`, extensions: [`ftc`] },
      "application/vnd.font-fontforge-sfd": { source: `iana` },
      "application/vnd.framemaker": {
        source: `iana`,
        extensions: [`fm`, `frame`, `maker`, `book`],
      },
      "application/vnd.frogans.fnc": { source: `iana`, extensions: [`fnc`] },
      "application/vnd.frogans.ltf": { source: `iana`, extensions: [`ltf`] },
      "application/vnd.fsc.weblaunch": { source: `iana`, extensions: [`fsc`] },
      "application/vnd.fujifilm.fb.docuworks": { source: `iana` },
      "application/vnd.fujifilm.fb.docuworks.binder": { source: `iana` },
      "application/vnd.fujifilm.fb.docuworks.container": { source: `iana` },
      "application/vnd.fujifilm.fb.jfi+xml": { source: `iana`, compressible: !0 },
      "application/vnd.fujitsu.oasys": { source: `iana`, extensions: [`oas`] },
      "application/vnd.fujitsu.oasys2": { source: `iana`, extensions: [`oa2`] },
      "application/vnd.fujitsu.oasys3": { source: `iana`, extensions: [`oa3`] },
      "application/vnd.fujitsu.oasysgp": { source: `iana`, extensions: [`fg5`] },
      "application/vnd.fujitsu.oasysprs": { source: `iana`, extensions: [`bh2`] },
      "application/vnd.fujixerox.art-ex": { source: `iana` },
      "application/vnd.fujixerox.art4": { source: `iana` },
      "application/vnd.fujixerox.ddd": { source: `iana`, extensions: [`ddd`] },
      "application/vnd.fujixerox.docuworks": { source: `iana`, extensions: [`xdw`] },
      "application/vnd.fujixerox.docuworks.binder": { source: `iana`, extensions: [`xbd`] },
      "application/vnd.fujixerox.docuworks.container": { source: `iana` },
      "application/vnd.fujixerox.hbpl": { source: `iana` },
      "application/vnd.fut-misnet": { source: `iana` },
      "application/vnd.futoin+cbor": { source: `iana` },
      "application/vnd.futoin+json": { source: `iana`, compressible: !0 },
      "application/vnd.fuzzysheet": { source: `iana`, extensions: [`fzs`] },
      "application/vnd.genomatix.tuxedo": { source: `iana`, extensions: [`txd`] },
      "application/vnd.gentics.grd+json": { source: `iana`, compressible: !0 },
      "application/vnd.geo+json": { source: `iana`, compressible: !0 },
      "application/vnd.geocube+xml": { source: `iana`, compressible: !0 },
      "application/vnd.geogebra.file": { source: `iana`, extensions: [`ggb`] },
      "application/vnd.geogebra.slides": { source: `iana` },
      "application/vnd.geogebra.tool": { source: `iana`, extensions: [`ggt`] },
      "application/vnd.geometry-explorer": { source: `iana`, extensions: [`gex`, `gre`] },
      "application/vnd.geonext": { source: `iana`, extensions: [`gxt`] },
      "application/vnd.geoplan": { source: `iana`, extensions: [`g2w`] },
      "application/vnd.geospace": { source: `iana`, extensions: [`g3w`] },
      "application/vnd.gerber": { source: `iana` },
      "application/vnd.globalplatform.card-content-mgt": { source: `iana` },
      "application/vnd.globalplatform.card-content-mgt-response": { source: `iana` },
      "application/vnd.gmx": { source: `iana`, extensions: [`gmx`] },
      "application/vnd.google-apps.document": { compressible: !1, extensions: [`gdoc`] },
      "application/vnd.google-apps.presentation": { compressible: !1, extensions: [`gslides`] },
      "application/vnd.google-apps.spreadsheet": { compressible: !1, extensions: [`gsheet`] },
      "application/vnd.google-earth.kml+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`kml`],
      },
      "application/vnd.google-earth.kmz": { source: `iana`, compressible: !1, extensions: [`kmz`] },
      "application/vnd.gov.sk.e-form+xml": { source: `iana`, compressible: !0 },
      "application/vnd.gov.sk.e-form+zip": { source: `iana`, compressible: !1 },
      "application/vnd.gov.sk.xmldatacontainer+xml": { source: `iana`, compressible: !0 },
      "application/vnd.grafeq": { source: `iana`, extensions: [`gqf`, `gqs`] },
      "application/vnd.gridmp": { source: `iana` },
      "application/vnd.groove-account": { source: `iana`, extensions: [`gac`] },
      "application/vnd.groove-help": { source: `iana`, extensions: [`ghf`] },
      "application/vnd.groove-identity-message": { source: `iana`, extensions: [`gim`] },
      "application/vnd.groove-injector": { source: `iana`, extensions: [`grv`] },
      "application/vnd.groove-tool-message": { source: `iana`, extensions: [`gtm`] },
      "application/vnd.groove-tool-template": { source: `iana`, extensions: [`tpl`] },
      "application/vnd.groove-vcard": { source: `iana`, extensions: [`vcg`] },
      "application/vnd.hal+json": { source: `iana`, compressible: !0 },
      "application/vnd.hal+xml": { source: `iana`, compressible: !0, extensions: [`hal`] },
      "application/vnd.handheld-entertainment+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`zmm`],
      },
      "application/vnd.hbci": { source: `iana`, extensions: [`hbci`] },
      "application/vnd.hc+json": { source: `iana`, compressible: !0 },
      "application/vnd.hcl-bireports": { source: `iana` },
      "application/vnd.hdt": { source: `iana` },
      "application/vnd.heroku+json": { source: `iana`, compressible: !0 },
      "application/vnd.hhe.lesson-player": { source: `iana`, extensions: [`les`] },
      "application/vnd.hl7cda+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.hl7v2+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.hp-hpgl": { source: `iana`, extensions: [`hpgl`] },
      "application/vnd.hp-hpid": { source: `iana`, extensions: [`hpid`] },
      "application/vnd.hp-hps": { source: `iana`, extensions: [`hps`] },
      "application/vnd.hp-jlyt": { source: `iana`, extensions: [`jlt`] },
      "application/vnd.hp-pcl": { source: `iana`, extensions: [`pcl`] },
      "application/vnd.hp-pclxl": { source: `iana`, extensions: [`pclxl`] },
      "application/vnd.httphone": { source: `iana` },
      "application/vnd.hydrostatix.sof-data": { source: `iana`, extensions: [`sfd-hdstx`] },
      "application/vnd.hyper+json": { source: `iana`, compressible: !0 },
      "application/vnd.hyper-item+json": { source: `iana`, compressible: !0 },
      "application/vnd.hyperdrive+json": { source: `iana`, compressible: !0 },
      "application/vnd.hzn-3d-crossword": { source: `iana` },
      "application/vnd.ibm.afplinedata": { source: `iana` },
      "application/vnd.ibm.electronic-media": { source: `iana` },
      "application/vnd.ibm.minipay": { source: `iana`, extensions: [`mpy`] },
      "application/vnd.ibm.modcap": { source: `iana`, extensions: [`afp`, `listafp`, `list3820`] },
      "application/vnd.ibm.rights-management": { source: `iana`, extensions: [`irm`] },
      "application/vnd.ibm.secure-container": { source: `iana`, extensions: [`sc`] },
      "application/vnd.iccprofile": { source: `iana`, extensions: [`icc`, `icm`] },
      "application/vnd.ieee.1905": { source: `iana` },
      "application/vnd.igloader": { source: `iana`, extensions: [`igl`] },
      "application/vnd.imagemeter.folder+zip": { source: `iana`, compressible: !1 },
      "application/vnd.imagemeter.image+zip": { source: `iana`, compressible: !1 },
      "application/vnd.immervision-ivp": { source: `iana`, extensions: [`ivp`] },
      "application/vnd.immervision-ivu": { source: `iana`, extensions: [`ivu`] },
      "application/vnd.ims.imsccv1p1": { source: `iana` },
      "application/vnd.ims.imsccv1p2": { source: `iana` },
      "application/vnd.ims.imsccv1p3": { source: `iana` },
      "application/vnd.ims.lis.v2.result+json": { source: `iana`, compressible: !0 },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: `iana`, compressible: !0 },
      "application/vnd.ims.lti.v2.toolproxy+json": { source: `iana`, compressible: !0 },
      "application/vnd.ims.lti.v2.toolproxy.id+json": { source: `iana`, compressible: !0 },
      "application/vnd.ims.lti.v2.toolsettings+json": { source: `iana`, compressible: !0 },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: `iana`, compressible: !0 },
      "application/vnd.informedcontrol.rms+xml": { source: `iana`, compressible: !0 },
      "application/vnd.informix-visionary": { source: `iana` },
      "application/vnd.infotech.project": { source: `iana` },
      "application/vnd.infotech.project+xml": { source: `iana`, compressible: !0 },
      "application/vnd.innopath.wamp.notification": { source: `iana` },
      "application/vnd.insors.igm": { source: `iana`, extensions: [`igm`] },
      "application/vnd.intercon.formnet": { source: `iana`, extensions: [`xpw`, `xpx`] },
      "application/vnd.intergeo": { source: `iana`, extensions: [`i2g`] },
      "application/vnd.intertrust.digibox": { source: `iana` },
      "application/vnd.intertrust.nncp": { source: `iana` },
      "application/vnd.intu.qbo": { source: `iana`, extensions: [`qbo`] },
      "application/vnd.intu.qfx": { source: `iana`, extensions: [`qfx`] },
      "application/vnd.iptc.g2.catalogitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.conceptitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.knowledgeitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.newsitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.newsmessage+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.packageitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.iptc.g2.planningitem+xml": { source: `iana`, compressible: !0 },
      "application/vnd.ipunplugged.rcprofile": { source: `iana`, extensions: [`rcprofile`] },
      "application/vnd.irepository.package+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`irp`],
      },
      "application/vnd.is-xpr": { source: `iana`, extensions: [`xpr`] },
      "application/vnd.isac.fcs": { source: `iana`, extensions: [`fcs`] },
      "application/vnd.iso11783-10+zip": { source: `iana`, compressible: !1 },
      "application/vnd.jam": { source: `iana`, extensions: [`jam`] },
      "application/vnd.japannet-directory-service": { source: `iana` },
      "application/vnd.japannet-jpnstore-wakeup": { source: `iana` },
      "application/vnd.japannet-payment-wakeup": { source: `iana` },
      "application/vnd.japannet-registration": { source: `iana` },
      "application/vnd.japannet-registration-wakeup": { source: `iana` },
      "application/vnd.japannet-setstore-wakeup": { source: `iana` },
      "application/vnd.japannet-verification": { source: `iana` },
      "application/vnd.japannet-verification-wakeup": { source: `iana` },
      "application/vnd.jcp.javame.midlet-rms": { source: `iana`, extensions: [`rms`] },
      "application/vnd.jisp": { source: `iana`, extensions: [`jisp`] },
      "application/vnd.joost.joda-archive": { source: `iana`, extensions: [`joda`] },
      "application/vnd.jsk.isdn-ngn": { source: `iana` },
      "application/vnd.kahootz": { source: `iana`, extensions: [`ktz`, `ktr`] },
      "application/vnd.kde.karbon": { source: `iana`, extensions: [`karbon`] },
      "application/vnd.kde.kchart": { source: `iana`, extensions: [`chrt`] },
      "application/vnd.kde.kformula": { source: `iana`, extensions: [`kfo`] },
      "application/vnd.kde.kivio": { source: `iana`, extensions: [`flw`] },
      "application/vnd.kde.kontour": { source: `iana`, extensions: [`kon`] },
      "application/vnd.kde.kpresenter": { source: `iana`, extensions: [`kpr`, `kpt`] },
      "application/vnd.kde.kspread": { source: `iana`, extensions: [`ksp`] },
      "application/vnd.kde.kword": { source: `iana`, extensions: [`kwd`, `kwt`] },
      "application/vnd.kenameaapp": { source: `iana`, extensions: [`htke`] },
      "application/vnd.kidspiration": { source: `iana`, extensions: [`kia`] },
      "application/vnd.kinar": { source: `iana`, extensions: [`kne`, `knp`] },
      "application/vnd.koan": { source: `iana`, extensions: [`skp`, `skd`, `skt`, `skm`] },
      "application/vnd.kodak-descriptor": { source: `iana`, extensions: [`sse`] },
      "application/vnd.las": { source: `iana` },
      "application/vnd.las.las+json": { source: `iana`, compressible: !0 },
      "application/vnd.las.las+xml": { source: `iana`, compressible: !0, extensions: [`lasxml`] },
      "application/vnd.laszip": { source: `iana` },
      "application/vnd.leap+json": { source: `iana`, compressible: !0 },
      "application/vnd.liberty-request+xml": { source: `iana`, compressible: !0 },
      "application/vnd.llamagraphics.life-balance.desktop": { source: `iana`, extensions: [`lbd`] },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`lbe`],
      },
      "application/vnd.logipipe.circuit+zip": { source: `iana`, compressible: !1 },
      "application/vnd.loom": { source: `iana` },
      "application/vnd.lotus-1-2-3": { source: `iana`, extensions: [`123`] },
      "application/vnd.lotus-approach": { source: `iana`, extensions: [`apr`] },
      "application/vnd.lotus-freelance": { source: `iana`, extensions: [`pre`] },
      "application/vnd.lotus-notes": { source: `iana`, extensions: [`nsf`] },
      "application/vnd.lotus-organizer": { source: `iana`, extensions: [`org`] },
      "application/vnd.lotus-screencam": { source: `iana`, extensions: [`scm`] },
      "application/vnd.lotus-wordpro": { source: `iana`, extensions: [`lwp`] },
      "application/vnd.macports.portpkg": { source: `iana`, extensions: [`portpkg`] },
      "application/vnd.mapbox-vector-tile": { source: `iana`, extensions: [`mvt`] },
      "application/vnd.marlin.drm.actiontoken+xml": { source: `iana`, compressible: !0 },
      "application/vnd.marlin.drm.conftoken+xml": { source: `iana`, compressible: !0 },
      "application/vnd.marlin.drm.license+xml": { source: `iana`, compressible: !0 },
      "application/vnd.marlin.drm.mdcf": { source: `iana` },
      "application/vnd.mason+json": { source: `iana`, compressible: !0 },
      "application/vnd.maxar.archive.3tz+zip": { source: `iana`, compressible: !1 },
      "application/vnd.maxmind.maxmind-db": { source: `iana` },
      "application/vnd.mcd": { source: `iana`, extensions: [`mcd`] },
      "application/vnd.medcalcdata": { source: `iana`, extensions: [`mc1`] },
      "application/vnd.mediastation.cdkey": { source: `iana`, extensions: [`cdkey`] },
      "application/vnd.meridian-slingshot": { source: `iana` },
      "application/vnd.mfer": { source: `iana`, extensions: [`mwf`] },
      "application/vnd.mfmp": { source: `iana`, extensions: [`mfm`] },
      "application/vnd.micro+json": { source: `iana`, compressible: !0 },
      "application/vnd.micrografx.flo": { source: `iana`, extensions: [`flo`] },
      "application/vnd.micrografx.igx": { source: `iana`, extensions: [`igx`] },
      "application/vnd.microsoft.portable-executable": { source: `iana` },
      "application/vnd.microsoft.windows.thumbnail-cache": { source: `iana` },
      "application/vnd.miele+json": { source: `iana`, compressible: !0 },
      "application/vnd.mif": { source: `iana`, extensions: [`mif`] },
      "application/vnd.minisoft-hp3000-save": { source: `iana` },
      "application/vnd.mitsubishi.misty-guard.trustweb": { source: `iana` },
      "application/vnd.mobius.daf": { source: `iana`, extensions: [`daf`] },
      "application/vnd.mobius.dis": { source: `iana`, extensions: [`dis`] },
      "application/vnd.mobius.mbk": { source: `iana`, extensions: [`mbk`] },
      "application/vnd.mobius.mqy": { source: `iana`, extensions: [`mqy`] },
      "application/vnd.mobius.msl": { source: `iana`, extensions: [`msl`] },
      "application/vnd.mobius.plc": { source: `iana`, extensions: [`plc`] },
      "application/vnd.mobius.txf": { source: `iana`, extensions: [`txf`] },
      "application/vnd.mophun.application": { source: `iana`, extensions: [`mpn`] },
      "application/vnd.mophun.certificate": { source: `iana`, extensions: [`mpc`] },
      "application/vnd.motorola.flexsuite": { source: `iana` },
      "application/vnd.motorola.flexsuite.adsi": { source: `iana` },
      "application/vnd.motorola.flexsuite.fis": { source: `iana` },
      "application/vnd.motorola.flexsuite.gotap": { source: `iana` },
      "application/vnd.motorola.flexsuite.kmr": { source: `iana` },
      "application/vnd.motorola.flexsuite.ttc": { source: `iana` },
      "application/vnd.motorola.flexsuite.wem": { source: `iana` },
      "application/vnd.motorola.iprm": { source: `iana` },
      "application/vnd.mozilla.xul+xml": { source: `iana`, compressible: !0, extensions: [`xul`] },
      "application/vnd.ms-3mfdocument": { source: `iana` },
      "application/vnd.ms-artgalry": { source: `iana`, extensions: [`cil`] },
      "application/vnd.ms-asf": { source: `iana` },
      "application/vnd.ms-cab-compressed": { source: `iana`, extensions: [`cab`] },
      "application/vnd.ms-color.iccprofile": { source: `apache` },
      "application/vnd.ms-excel": {
        source: `iana`,
        compressible: !1,
        extensions: [`xls`, `xlm`, `xla`, `xlc`, `xlt`, `xlw`],
      },
      "application/vnd.ms-excel.addin.macroenabled.12": { source: `iana`, extensions: [`xlam`] },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: `iana`,
        extensions: [`xlsb`],
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": { source: `iana`, extensions: [`xlsm`] },
      "application/vnd.ms-excel.template.macroenabled.12": { source: `iana`, extensions: [`xltm`] },
      "application/vnd.ms-fontobject": { source: `iana`, compressible: !0, extensions: [`eot`] },
      "application/vnd.ms-htmlhelp": { source: `iana`, extensions: [`chm`] },
      "application/vnd.ms-ims": { source: `iana`, extensions: [`ims`] },
      "application/vnd.ms-lrm": { source: `iana`, extensions: [`lrm`] },
      "application/vnd.ms-office.activex+xml": { source: `iana`, compressible: !0 },
      "application/vnd.ms-officetheme": { source: `iana`, extensions: [`thmx`] },
      "application/vnd.ms-opentype": { source: `apache`, compressible: !0 },
      "application/vnd.ms-outlook": { compressible: !1, extensions: [`msg`] },
      "application/vnd.ms-package.obfuscated-opentype": { source: `apache` },
      "application/vnd.ms-pki.seccat": { source: `apache`, extensions: [`cat`] },
      "application/vnd.ms-pki.stl": { source: `apache`, extensions: [`stl`] },
      "application/vnd.ms-playready.initiator+xml": { source: `iana`, compressible: !0 },
      "application/vnd.ms-powerpoint": {
        source: `iana`,
        compressible: !1,
        extensions: [`ppt`, `pps`, `pot`],
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: `iana`,
        extensions: [`ppam`],
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: `iana`,
        extensions: [`pptm`],
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: `iana`,
        extensions: [`sldm`],
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: `iana`,
        extensions: [`ppsm`],
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: `iana`,
        extensions: [`potm`],
      },
      "application/vnd.ms-printdevicecapabilities+xml": { source: `iana`, compressible: !0 },
      "application/vnd.ms-printing.printticket+xml": { source: `apache`, compressible: !0 },
      "application/vnd.ms-printschematicket+xml": { source: `iana`, compressible: !0 },
      "application/vnd.ms-project": { source: `iana`, extensions: [`mpp`, `mpt`] },
      "application/vnd.ms-tnef": { source: `iana` },
      "application/vnd.ms-windows.devicepairing": { source: `iana` },
      "application/vnd.ms-windows.nwprinting.oob": { source: `iana` },
      "application/vnd.ms-windows.printerpairing": { source: `iana` },
      "application/vnd.ms-windows.wsd.oob": { source: `iana` },
      "application/vnd.ms-wmdrm.lic-chlg-req": { source: `iana` },
      "application/vnd.ms-wmdrm.lic-resp": { source: `iana` },
      "application/vnd.ms-wmdrm.meter-chlg-req": { source: `iana` },
      "application/vnd.ms-wmdrm.meter-resp": { source: `iana` },
      "application/vnd.ms-word.document.macroenabled.12": { source: `iana`, extensions: [`docm`] },
      "application/vnd.ms-word.template.macroenabled.12": { source: `iana`, extensions: [`dotm`] },
      "application/vnd.ms-works": { source: `iana`, extensions: [`wps`, `wks`, `wcm`, `wdb`] },
      "application/vnd.ms-wpl": { source: `iana`, extensions: [`wpl`] },
      "application/vnd.ms-xpsdocument": { source: `iana`, compressible: !1, extensions: [`xps`] },
      "application/vnd.msa-disk-image": { source: `iana` },
      "application/vnd.mseq": { source: `iana`, extensions: [`mseq`] },
      "application/vnd.msign": { source: `iana` },
      "application/vnd.multiad.creator": { source: `iana` },
      "application/vnd.multiad.creator.cif": { source: `iana` },
      "application/vnd.music-niff": { source: `iana` },
      "application/vnd.musician": { source: `iana`, extensions: [`mus`] },
      "application/vnd.muvee.style": { source: `iana`, extensions: [`msty`] },
      "application/vnd.mynfc": { source: `iana`, extensions: [`taglet`] },
      "application/vnd.nacamar.ybrid+json": { source: `iana`, compressible: !0 },
      "application/vnd.ncd.control": { source: `iana` },
      "application/vnd.ncd.reference": { source: `iana` },
      "application/vnd.nearst.inv+json": { source: `iana`, compressible: !0 },
      "application/vnd.nebumind.line": { source: `iana` },
      "application/vnd.nervana": { source: `iana` },
      "application/vnd.netfpx": { source: `iana` },
      "application/vnd.neurolanguage.nlu": { source: `iana`, extensions: [`nlu`] },
      "application/vnd.nimn": { source: `iana` },
      "application/vnd.nintendo.nitro.rom": { source: `iana` },
      "application/vnd.nintendo.snes.rom": { source: `iana` },
      "application/vnd.nitf": { source: `iana`, extensions: [`ntf`, `nitf`] },
      "application/vnd.noblenet-directory": { source: `iana`, extensions: [`nnd`] },
      "application/vnd.noblenet-sealer": { source: `iana`, extensions: [`nns`] },
      "application/vnd.noblenet-web": { source: `iana`, extensions: [`nnw`] },
      "application/vnd.nokia.catalogs": { source: `iana` },
      "application/vnd.nokia.conml+wbxml": { source: `iana` },
      "application/vnd.nokia.conml+xml": { source: `iana`, compressible: !0 },
      "application/vnd.nokia.iptv.config+xml": { source: `iana`, compressible: !0 },
      "application/vnd.nokia.isds-radio-presets": { source: `iana` },
      "application/vnd.nokia.landmark+wbxml": { source: `iana` },
      "application/vnd.nokia.landmark+xml": { source: `iana`, compressible: !0 },
      "application/vnd.nokia.landmarkcollection+xml": { source: `iana`, compressible: !0 },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`ac`],
      },
      "application/vnd.nokia.n-gage.data": { source: `iana`, extensions: [`ngdat`] },
      "application/vnd.nokia.n-gage.symbian.install": { source: `iana`, extensions: [`n-gage`] },
      "application/vnd.nokia.ncd": { source: `iana` },
      "application/vnd.nokia.pcd+wbxml": { source: `iana` },
      "application/vnd.nokia.pcd+xml": { source: `iana`, compressible: !0 },
      "application/vnd.nokia.radio-preset": { source: `iana`, extensions: [`rpst`] },
      "application/vnd.nokia.radio-presets": { source: `iana`, extensions: [`rpss`] },
      "application/vnd.novadigm.edm": { source: `iana`, extensions: [`edm`] },
      "application/vnd.novadigm.edx": { source: `iana`, extensions: [`edx`] },
      "application/vnd.novadigm.ext": { source: `iana`, extensions: [`ext`] },
      "application/vnd.ntt-local.content-share": { source: `iana` },
      "application/vnd.ntt-local.file-transfer": { source: `iana` },
      "application/vnd.ntt-local.ogw_remote-access": { source: `iana` },
      "application/vnd.ntt-local.sip-ta_remote": { source: `iana` },
      "application/vnd.ntt-local.sip-ta_tcp_stream": { source: `iana` },
      "application/vnd.oasis.opendocument.chart": { source: `iana`, extensions: [`odc`] },
      "application/vnd.oasis.opendocument.chart-template": { source: `iana`, extensions: [`otc`] },
      "application/vnd.oasis.opendocument.database": { source: `iana`, extensions: [`odb`] },
      "application/vnd.oasis.opendocument.formula": { source: `iana`, extensions: [`odf`] },
      "application/vnd.oasis.opendocument.formula-template": {
        source: `iana`,
        extensions: [`odft`],
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: `iana`,
        compressible: !1,
        extensions: [`odg`],
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: `iana`,
        extensions: [`otg`],
      },
      "application/vnd.oasis.opendocument.image": { source: `iana`, extensions: [`odi`] },
      "application/vnd.oasis.opendocument.image-template": { source: `iana`, extensions: [`oti`] },
      "application/vnd.oasis.opendocument.presentation": {
        source: `iana`,
        compressible: !1,
        extensions: [`odp`],
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: `iana`,
        extensions: [`otp`],
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: `iana`,
        compressible: !1,
        extensions: [`ods`],
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: `iana`,
        extensions: [`ots`],
      },
      "application/vnd.oasis.opendocument.text": {
        source: `iana`,
        compressible: !1,
        extensions: [`odt`],
      },
      "application/vnd.oasis.opendocument.text-master": { source: `iana`, extensions: [`odm`] },
      "application/vnd.oasis.opendocument.text-template": { source: `iana`, extensions: [`ott`] },
      "application/vnd.oasis.opendocument.text-web": { source: `iana`, extensions: [`oth`] },
      "application/vnd.obn": { source: `iana` },
      "application/vnd.ocf+cbor": { source: `iana` },
      "application/vnd.oci.image.manifest.v1+json": { source: `iana`, compressible: !0 },
      "application/vnd.oftn.l10n+json": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.contentaccessdownload+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.contentaccessstreaming+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.cspg-hexbinary": { source: `iana` },
      "application/vnd.oipf.dae.svg+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.dae.xhtml+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.mippvcontrolmessage+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.pae.gem": { source: `iana` },
      "application/vnd.oipf.spdiscovery+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.spdlist+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.ueprofile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oipf.userprofile+xml": { source: `iana`, compressible: !0 },
      "application/vnd.olpc-sugar": { source: `iana`, extensions: [`xo`] },
      "application/vnd.oma-scws-config": { source: `iana` },
      "application/vnd.oma-scws-http-request": { source: `iana` },
      "application/vnd.oma-scws-http-response": { source: `iana` },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.oma.bcast.drm-trigger+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.imd+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.ltkm": { source: `iana` },
      "application/vnd.oma.bcast.notification+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.provisioningtrigger": { source: `iana` },
      "application/vnd.oma.bcast.sgboot": { source: `iana` },
      "application/vnd.oma.bcast.sgdd+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.sgdu": { source: `iana` },
      "application/vnd.oma.bcast.simple-symbol-container": { source: `iana` },
      "application/vnd.oma.bcast.smartcard-trigger+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.sprov+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.bcast.stkm": { source: `iana` },
      "application/vnd.oma.cab-address-book+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.cab-feature-handler+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.cab-pcc+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.cab-subs-invite+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.cab-user-prefs+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.dcd": { source: `iana` },
      "application/vnd.oma.dcdc": { source: `iana` },
      "application/vnd.oma.dd2+xml": { source: `iana`, compressible: !0, extensions: [`dd2`] },
      "application/vnd.oma.drm.risd+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.group-usage-list+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.lwm2m+cbor": { source: `iana` },
      "application/vnd.oma.lwm2m+json": { source: `iana`, compressible: !0 },
      "application/vnd.oma.lwm2m+tlv": { source: `iana` },
      "application/vnd.oma.pal+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.poc.detailed-progress-report+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.poc.final-report+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.poc.groups+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.poc.invocation-descriptor+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.poc.optimized-progress-report+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.push": { source: `iana` },
      "application/vnd.oma.scidm.messages+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oma.xcap-directory+xml": { source: `iana`, compressible: !0 },
      "application/vnd.omads-email+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.omads-file+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.omads-folder+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.omaloc-supl-init": { source: `iana` },
      "application/vnd.onepager": { source: `iana` },
      "application/vnd.onepagertamp": { source: `iana` },
      "application/vnd.onepagertamx": { source: `iana` },
      "application/vnd.onepagertat": { source: `iana` },
      "application/vnd.onepagertatp": { source: `iana` },
      "application/vnd.onepagertatx": { source: `iana` },
      "application/vnd.openblox.game+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`obgx`],
      },
      "application/vnd.openblox.game-binary": { source: `iana` },
      "application/vnd.openeye.oeb": { source: `iana` },
      "application/vnd.openofficeorg.extension": { source: `apache`, extensions: [`oxt`] },
      "application/vnd.openstreetmap.data+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`osm`],
      },
      "application/vnd.opentimestamps.ots": { source: `iana` },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: `iana`,
        compressible: !1,
        extensions: [`pptx`],
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: `iana`,
        extensions: [`sldx`],
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: `iana`,
        extensions: [`ppsx`],
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: `iana`,
        extensions: [`potx`],
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: `iana`,
        compressible: !1,
        extensions: [`xlsx`],
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: `iana`,
        extensions: [`xltx`],
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": { source: `iana` },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: `iana`,
        compressible: !1,
        extensions: [`docx`],
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: `iana`,
        extensions: [`dotx`],
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: `iana`,
        compressible: !0,
      },
      "application/vnd.oracle.resource+json": { source: `iana`, compressible: !0 },
      "application/vnd.orange.indata": { source: `iana` },
      "application/vnd.osa.netdeploy": { source: `iana` },
      "application/vnd.osgeo.mapguide.package": { source: `iana`, extensions: [`mgp`] },
      "application/vnd.osgi.bundle": { source: `iana` },
      "application/vnd.osgi.dp": { source: `iana`, extensions: [`dp`] },
      "application/vnd.osgi.subsystem": { source: `iana`, extensions: [`esa`] },
      "application/vnd.otps.ct-kip+xml": { source: `iana`, compressible: !0 },
      "application/vnd.oxli.countgraph": { source: `iana` },
      "application/vnd.pagerduty+json": { source: `iana`, compressible: !0 },
      "application/vnd.palm": { source: `iana`, extensions: [`pdb`, `pqa`, `oprc`] },
      "application/vnd.panoply": { source: `iana` },
      "application/vnd.paos.xml": { source: `iana` },
      "application/vnd.patentdive": { source: `iana` },
      "application/vnd.patientecommsdoc": { source: `iana` },
      "application/vnd.pawaafile": { source: `iana`, extensions: [`paw`] },
      "application/vnd.pcos": { source: `iana` },
      "application/vnd.pg.format": { source: `iana`, extensions: [`str`] },
      "application/vnd.pg.osasli": { source: `iana`, extensions: [`ei6`] },
      "application/vnd.piaccess.application-licence": { source: `iana` },
      "application/vnd.picsel": { source: `iana`, extensions: [`efif`] },
      "application/vnd.pmi.widget": { source: `iana`, extensions: [`wg`] },
      "application/vnd.poc.group-advertisement+xml": { source: `iana`, compressible: !0 },
      "application/vnd.pocketlearn": { source: `iana`, extensions: [`plf`] },
      "application/vnd.powerbuilder6": { source: `iana`, extensions: [`pbd`] },
      "application/vnd.powerbuilder6-s": { source: `iana` },
      "application/vnd.powerbuilder7": { source: `iana` },
      "application/vnd.powerbuilder7-s": { source: `iana` },
      "application/vnd.powerbuilder75": { source: `iana` },
      "application/vnd.powerbuilder75-s": { source: `iana` },
      "application/vnd.preminet": { source: `iana` },
      "application/vnd.previewsystems.box": { source: `iana`, extensions: [`box`] },
      "application/vnd.proteus.magazine": { source: `iana`, extensions: [`mgz`] },
      "application/vnd.psfs": { source: `iana` },
      "application/vnd.publishare-delta-tree": { source: `iana`, extensions: [`qps`] },
      "application/vnd.pvi.ptid1": { source: `iana`, extensions: [`ptid`] },
      "application/vnd.pwg-multiplexed": { source: `iana` },
      "application/vnd.pwg-xhtml-print+xml": { source: `iana`, compressible: !0 },
      "application/vnd.qualcomm.brew-app-res": { source: `iana` },
      "application/vnd.quarantainenet": { source: `iana` },
      "application/vnd.quark.quarkxpress": {
        source: `iana`,
        extensions: [`qxd`, `qxt`, `qwd`, `qwt`, `qxl`, `qxb`],
      },
      "application/vnd.quobject-quoxdocument": { source: `iana` },
      "application/vnd.radisys.moml+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-audit+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-audit-conf+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-audit-conn+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-audit-dialog+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-audit-stream+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-conf+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-base+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-group+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-speech+xml": { source: `iana`, compressible: !0 },
      "application/vnd.radisys.msml-dialog-transform+xml": { source: `iana`, compressible: !0 },
      "application/vnd.rainstor.data": { source: `iana` },
      "application/vnd.rapid": { source: `iana` },
      "application/vnd.rar": { source: `iana`, extensions: [`rar`] },
      "application/vnd.realvnc.bed": { source: `iana`, extensions: [`bed`] },
      "application/vnd.recordare.musicxml": { source: `iana`, extensions: [`mxl`] },
      "application/vnd.recordare.musicxml+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`musicxml`],
      },
      "application/vnd.renlearn.rlprint": { source: `iana` },
      "application/vnd.resilient.logic": { source: `iana` },
      "application/vnd.restful+json": { source: `iana`, compressible: !0 },
      "application/vnd.rig.cryptonote": { source: `iana`, extensions: [`cryptonote`] },
      "application/vnd.rim.cod": { source: `apache`, extensions: [`cod`] },
      "application/vnd.rn-realmedia": { source: `apache`, extensions: [`rm`] },
      "application/vnd.rn-realmedia-vbr": { source: `apache`, extensions: [`rmvb`] },
      "application/vnd.route66.link66+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`link66`],
      },
      "application/vnd.rs-274x": { source: `iana` },
      "application/vnd.ruckus.download": { source: `iana` },
      "application/vnd.s3sms": { source: `iana` },
      "application/vnd.sailingtracker.track": { source: `iana`, extensions: [`st`] },
      "application/vnd.sar": { source: `iana` },
      "application/vnd.sbm.cid": { source: `iana` },
      "application/vnd.sbm.mid2": { source: `iana` },
      "application/vnd.scribus": { source: `iana` },
      "application/vnd.sealed.3df": { source: `iana` },
      "application/vnd.sealed.csf": { source: `iana` },
      "application/vnd.sealed.doc": { source: `iana` },
      "application/vnd.sealed.eml": { source: `iana` },
      "application/vnd.sealed.mht": { source: `iana` },
      "application/vnd.sealed.net": { source: `iana` },
      "application/vnd.sealed.ppt": { source: `iana` },
      "application/vnd.sealed.tiff": { source: `iana` },
      "application/vnd.sealed.xls": { source: `iana` },
      "application/vnd.sealedmedia.softseal.html": { source: `iana` },
      "application/vnd.sealedmedia.softseal.pdf": { source: `iana` },
      "application/vnd.seemail": { source: `iana`, extensions: [`see`] },
      "application/vnd.seis+json": { source: `iana`, compressible: !0 },
      "application/vnd.sema": { source: `iana`, extensions: [`sema`] },
      "application/vnd.semd": { source: `iana`, extensions: [`semd`] },
      "application/vnd.semf": { source: `iana`, extensions: [`semf`] },
      "application/vnd.shade-save-file": { source: `iana` },
      "application/vnd.shana.informed.formdata": { source: `iana`, extensions: [`ifm`] },
      "application/vnd.shana.informed.formtemplate": { source: `iana`, extensions: [`itp`] },
      "application/vnd.shana.informed.interchange": { source: `iana`, extensions: [`iif`] },
      "application/vnd.shana.informed.package": { source: `iana`, extensions: [`ipk`] },
      "application/vnd.shootproof+json": { source: `iana`, compressible: !0 },
      "application/vnd.shopkick+json": { source: `iana`, compressible: !0 },
      "application/vnd.shp": { source: `iana` },
      "application/vnd.shx": { source: `iana` },
      "application/vnd.sigrok.session": { source: `iana` },
      "application/vnd.simtech-mindmapper": { source: `iana`, extensions: [`twd`, `twds`] },
      "application/vnd.siren+json": { source: `iana`, compressible: !0 },
      "application/vnd.smaf": { source: `iana`, extensions: [`mmf`] },
      "application/vnd.smart.notebook": { source: `iana` },
      "application/vnd.smart.teacher": { source: `iana`, extensions: [`teacher`] },
      "application/vnd.snesdev-page-table": { source: `iana` },
      "application/vnd.software602.filler.form+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`fo`],
      },
      "application/vnd.software602.filler.form-xml-zip": { source: `iana` },
      "application/vnd.solent.sdkm+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`sdkm`, `sdkd`],
      },
      "application/vnd.spotfire.dxp": { source: `iana`, extensions: [`dxp`] },
      "application/vnd.spotfire.sfs": { source: `iana`, extensions: [`sfs`] },
      "application/vnd.sqlite3": { source: `iana` },
      "application/vnd.sss-cod": { source: `iana` },
      "application/vnd.sss-dtf": { source: `iana` },
      "application/vnd.sss-ntf": { source: `iana` },
      "application/vnd.stardivision.calc": { source: `apache`, extensions: [`sdc`] },
      "application/vnd.stardivision.draw": { source: `apache`, extensions: [`sda`] },
      "application/vnd.stardivision.impress": { source: `apache`, extensions: [`sdd`] },
      "application/vnd.stardivision.math": { source: `apache`, extensions: [`smf`] },
      "application/vnd.stardivision.writer": { source: `apache`, extensions: [`sdw`, `vor`] },
      "application/vnd.stardivision.writer-global": { source: `apache`, extensions: [`sgl`] },
      "application/vnd.stepmania.package": { source: `iana`, extensions: [`smzip`] },
      "application/vnd.stepmania.stepchart": { source: `iana`, extensions: [`sm`] },
      "application/vnd.street-stream": { source: `iana` },
      "application/vnd.sun.wadl+xml": { source: `iana`, compressible: !0, extensions: [`wadl`] },
      "application/vnd.sun.xml.calc": { source: `apache`, extensions: [`sxc`] },
      "application/vnd.sun.xml.calc.template": { source: `apache`, extensions: [`stc`] },
      "application/vnd.sun.xml.draw": { source: `apache`, extensions: [`sxd`] },
      "application/vnd.sun.xml.draw.template": { source: `apache`, extensions: [`std`] },
      "application/vnd.sun.xml.impress": { source: `apache`, extensions: [`sxi`] },
      "application/vnd.sun.xml.impress.template": { source: `apache`, extensions: [`sti`] },
      "application/vnd.sun.xml.math": { source: `apache`, extensions: [`sxm`] },
      "application/vnd.sun.xml.writer": { source: `apache`, extensions: [`sxw`] },
      "application/vnd.sun.xml.writer.global": { source: `apache`, extensions: [`sxg`] },
      "application/vnd.sun.xml.writer.template": { source: `apache`, extensions: [`stw`] },
      "application/vnd.sus-calendar": { source: `iana`, extensions: [`sus`, `susp`] },
      "application/vnd.svd": { source: `iana`, extensions: [`svd`] },
      "application/vnd.swiftview-ics": { source: `iana` },
      "application/vnd.sycle+xml": { source: `iana`, compressible: !0 },
      "application/vnd.syft+json": { source: `iana`, compressible: !0 },
      "application/vnd.symbian.install": { source: `apache`, extensions: [`sis`, `sisx`] },
      "application/vnd.syncml+xml": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`xsm`],
      },
      "application/vnd.syncml.dm+wbxml": { source: `iana`, charset: `UTF-8`, extensions: [`bdm`] },
      "application/vnd.syncml.dm+xml": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`xdm`],
      },
      "application/vnd.syncml.dm.notification": { source: `iana` },
      "application/vnd.syncml.dmddf+wbxml": { source: `iana` },
      "application/vnd.syncml.dmddf+xml": {
        source: `iana`,
        charset: `UTF-8`,
        compressible: !0,
        extensions: [`ddf`],
      },
      "application/vnd.syncml.dmtnds+wbxml": { source: `iana` },
      "application/vnd.syncml.dmtnds+xml": { source: `iana`, charset: `UTF-8`, compressible: !0 },
      "application/vnd.syncml.ds.notification": { source: `iana` },
      "application/vnd.tableschema+json": { source: `iana`, compressible: !0 },
      "application/vnd.tao.intent-module-archive": { source: `iana`, extensions: [`tao`] },
      "application/vnd.tcpdump.pcap": { source: `iana`, extensions: [`pcap`, `cap`, `dmp`] },
      "application/vnd.think-cell.ppttc+json": { source: `iana`, compressible: !0 },
      "application/vnd.tmd.mediaflex.api+xml": { source: `iana`, compressible: !0 },
      "application/vnd.tml": { source: `iana` },
      "application/vnd.tmobile-livetv": { source: `iana`, extensions: [`tmo`] },
      "application/vnd.tri.onesource": { source: `iana` },
      "application/vnd.trid.tpt": { source: `iana`, extensions: [`tpt`] },
      "application/vnd.triscape.mxs": { source: `iana`, extensions: [`mxs`] },
      "application/vnd.trueapp": { source: `iana`, extensions: [`tra`] },
      "application/vnd.truedoc": { source: `iana` },
      "application/vnd.ubisoft.webplayer": { source: `iana` },
      "application/vnd.ufdl": { source: `iana`, extensions: [`ufd`, `ufdl`] },
      "application/vnd.uiq.theme": { source: `iana`, extensions: [`utz`] },
      "application/vnd.umajin": { source: `iana`, extensions: [`umj`] },
      "application/vnd.unity": { source: `iana`, extensions: [`unityweb`] },
      "application/vnd.uoml+xml": { source: `iana`, compressible: !0, extensions: [`uoml`] },
      "application/vnd.uplanet.alert": { source: `iana` },
      "application/vnd.uplanet.alert-wbxml": { source: `iana` },
      "application/vnd.uplanet.bearer-choice": { source: `iana` },
      "application/vnd.uplanet.bearer-choice-wbxml": { source: `iana` },
      "application/vnd.uplanet.cacheop": { source: `iana` },
      "application/vnd.uplanet.cacheop-wbxml": { source: `iana` },
      "application/vnd.uplanet.channel": { source: `iana` },
      "application/vnd.uplanet.channel-wbxml": { source: `iana` },
      "application/vnd.uplanet.list": { source: `iana` },
      "application/vnd.uplanet.list-wbxml": { source: `iana` },
      "application/vnd.uplanet.listcmd": { source: `iana` },
      "application/vnd.uplanet.listcmd-wbxml": { source: `iana` },
      "application/vnd.uplanet.signal": { source: `iana` },
      "application/vnd.uri-map": { source: `iana` },
      "application/vnd.valve.source.material": { source: `iana` },
      "application/vnd.vcx": { source: `iana`, extensions: [`vcx`] },
      "application/vnd.vd-study": { source: `iana` },
      "application/vnd.vectorworks": { source: `iana` },
      "application/vnd.vel+json": { source: `iana`, compressible: !0 },
      "application/vnd.verimatrix.vcas": { source: `iana` },
      "application/vnd.veritone.aion+json": { source: `iana`, compressible: !0 },
      "application/vnd.veryant.thin": { source: `iana` },
      "application/vnd.ves.encrypted": { source: `iana` },
      "application/vnd.vidsoft.vidconference": { source: `iana` },
      "application/vnd.visio": { source: `iana`, extensions: [`vsd`, `vst`, `vss`, `vsw`] },
      "application/vnd.visionary": { source: `iana`, extensions: [`vis`] },
      "application/vnd.vividence.scriptfile": { source: `iana` },
      "application/vnd.vsf": { source: `iana`, extensions: [`vsf`] },
      "application/vnd.wap.sic": { source: `iana` },
      "application/vnd.wap.slc": { source: `iana` },
      "application/vnd.wap.wbxml": { source: `iana`, charset: `UTF-8`, extensions: [`wbxml`] },
      "application/vnd.wap.wmlc": { source: `iana`, extensions: [`wmlc`] },
      "application/vnd.wap.wmlscriptc": { source: `iana`, extensions: [`wmlsc`] },
      "application/vnd.webturbo": { source: `iana`, extensions: [`wtb`] },
      "application/vnd.wfa.dpp": { source: `iana` },
      "application/vnd.wfa.p2p": { source: `iana` },
      "application/vnd.wfa.wsc": { source: `iana` },
      "application/vnd.windows.devicepairing": { source: `iana` },
      "application/vnd.wmc": { source: `iana` },
      "application/vnd.wmf.bootstrap": { source: `iana` },
      "application/vnd.wolfram.mathematica": { source: `iana` },
      "application/vnd.wolfram.mathematica.package": { source: `iana` },
      "application/vnd.wolfram.player": { source: `iana`, extensions: [`nbp`] },
      "application/vnd.wordperfect": { source: `iana`, extensions: [`wpd`] },
      "application/vnd.wqd": { source: `iana`, extensions: [`wqd`] },
      "application/vnd.wrq-hp3000-labelled": { source: `iana` },
      "application/vnd.wt.stf": { source: `iana`, extensions: [`stf`] },
      "application/vnd.wv.csp+wbxml": { source: `iana` },
      "application/vnd.wv.csp+xml": { source: `iana`, compressible: !0 },
      "application/vnd.wv.ssp+xml": { source: `iana`, compressible: !0 },
      "application/vnd.xacml+json": { source: `iana`, compressible: !0 },
      "application/vnd.xara": { source: `iana`, extensions: [`xar`] },
      "application/vnd.xfdl": { source: `iana`, extensions: [`xfdl`] },
      "application/vnd.xfdl.webform": { source: `iana` },
      "application/vnd.xmi+xml": { source: `iana`, compressible: !0 },
      "application/vnd.xmpie.cpkg": { source: `iana` },
      "application/vnd.xmpie.dpkg": { source: `iana` },
      "application/vnd.xmpie.plan": { source: `iana` },
      "application/vnd.xmpie.ppkg": { source: `iana` },
      "application/vnd.xmpie.xlim": { source: `iana` },
      "application/vnd.yamaha.hv-dic": { source: `iana`, extensions: [`hvd`] },
      "application/vnd.yamaha.hv-script": { source: `iana`, extensions: [`hvs`] },
      "application/vnd.yamaha.hv-voice": { source: `iana`, extensions: [`hvp`] },
      "application/vnd.yamaha.openscoreformat": { source: `iana`, extensions: [`osf`] },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`osfpvg`],
      },
      "application/vnd.yamaha.remote-setup": { source: `iana` },
      "application/vnd.yamaha.smaf-audio": { source: `iana`, extensions: [`saf`] },
      "application/vnd.yamaha.smaf-phrase": { source: `iana`, extensions: [`spf`] },
      "application/vnd.yamaha.through-ngn": { source: `iana` },
      "application/vnd.yamaha.tunnel-udpencap": { source: `iana` },
      "application/vnd.yaoweme": { source: `iana` },
      "application/vnd.yellowriver-custom-menu": { source: `iana`, extensions: [`cmp`] },
      "application/vnd.youtube.yt": { source: `iana` },
      "application/vnd.zul": { source: `iana`, extensions: [`zir`, `zirz`] },
      "application/vnd.zzazz.deck+xml": { source: `iana`, compressible: !0, extensions: [`zaz`] },
      "application/voicexml+xml": { source: `iana`, compressible: !0, extensions: [`vxml`] },
      "application/voucher-cms+json": { source: `iana`, compressible: !0 },
      "application/vq-rtcpxr": { source: `iana` },
      "application/wasm": { source: `iana`, compressible: !0, extensions: [`wasm`] },
      "application/watcherinfo+xml": { source: `iana`, compressible: !0, extensions: [`wif`] },
      "application/webpush-options+json": { source: `iana`, compressible: !0 },
      "application/whoispp-query": { source: `iana` },
      "application/whoispp-response": { source: `iana` },
      "application/widget": { source: `iana`, extensions: [`wgt`] },
      "application/winhlp": { source: `apache`, extensions: [`hlp`] },
      "application/wita": { source: `iana` },
      "application/wordperfect5.1": { source: `iana` },
      "application/wsdl+xml": { source: `iana`, compressible: !0, extensions: [`wsdl`] },
      "application/wspolicy+xml": { source: `iana`, compressible: !0, extensions: [`wspolicy`] },
      "application/x-7z-compressed": { source: `apache`, compressible: !1, extensions: [`7z`] },
      "application/x-abiword": { source: `apache`, extensions: [`abw`] },
      "application/x-ace-compressed": { source: `apache`, extensions: [`ace`] },
      "application/x-amf": { source: `apache` },
      "application/x-apple-diskimage": { source: `apache`, extensions: [`dmg`] },
      "application/x-arj": { compressible: !1, extensions: [`arj`] },
      "application/x-authorware-bin": {
        source: `apache`,
        extensions: [`aab`, `x32`, `u32`, `vox`],
      },
      "application/x-authorware-map": { source: `apache`, extensions: [`aam`] },
      "application/x-authorware-seg": { source: `apache`, extensions: [`aas`] },
      "application/x-bcpio": { source: `apache`, extensions: [`bcpio`] },
      "application/x-bdoc": { compressible: !1, extensions: [`bdoc`] },
      "application/x-bittorrent": { source: `apache`, extensions: [`torrent`] },
      "application/x-blorb": { source: `apache`, extensions: [`blb`, `blorb`] },
      "application/x-bzip": { source: `apache`, compressible: !1, extensions: [`bz`] },
      "application/x-bzip2": { source: `apache`, compressible: !1, extensions: [`bz2`, `boz`] },
      "application/x-cbr": { source: `apache`, extensions: [`cbr`, `cba`, `cbt`, `cbz`, `cb7`] },
      "application/x-cdlink": { source: `apache`, extensions: [`vcd`] },
      "application/x-cfs-compressed": { source: `apache`, extensions: [`cfs`] },
      "application/x-chat": { source: `apache`, extensions: [`chat`] },
      "application/x-chess-pgn": { source: `apache`, extensions: [`pgn`] },
      "application/x-chrome-extension": { extensions: [`crx`] },
      "application/x-cocoa": { source: `nginx`, extensions: [`cco`] },
      "application/x-compress": { source: `apache` },
      "application/x-conference": { source: `apache`, extensions: [`nsc`] },
      "application/x-cpio": { source: `apache`, extensions: [`cpio`] },
      "application/x-csh": { source: `apache`, extensions: [`csh`] },
      "application/x-deb": { compressible: !1 },
      "application/x-debian-package": { source: `apache`, extensions: [`deb`, `udeb`] },
      "application/x-dgc-compressed": { source: `apache`, extensions: [`dgc`] },
      "application/x-director": {
        source: `apache`,
        extensions: [`dir`, `dcr`, `dxr`, `cst`, `cct`, `cxt`, `w3d`, `fgd`, `swa`],
      },
      "application/x-doom": { source: `apache`, extensions: [`wad`] },
      "application/x-dtbncx+xml": { source: `apache`, compressible: !0, extensions: [`ncx`] },
      "application/x-dtbook+xml": { source: `apache`, compressible: !0, extensions: [`dtb`] },
      "application/x-dtbresource+xml": { source: `apache`, compressible: !0, extensions: [`res`] },
      "application/x-dvi": { source: `apache`, compressible: !1, extensions: [`dvi`] },
      "application/x-envoy": { source: `apache`, extensions: [`evy`] },
      "application/x-eva": { source: `apache`, extensions: [`eva`] },
      "application/x-font-bdf": { source: `apache`, extensions: [`bdf`] },
      "application/x-font-dos": { source: `apache` },
      "application/x-font-framemaker": { source: `apache` },
      "application/x-font-ghostscript": { source: `apache`, extensions: [`gsf`] },
      "application/x-font-libgrx": { source: `apache` },
      "application/x-font-linux-psf": { source: `apache`, extensions: [`psf`] },
      "application/x-font-pcf": { source: `apache`, extensions: [`pcf`] },
      "application/x-font-snf": { source: `apache`, extensions: [`snf`] },
      "application/x-font-speedo": { source: `apache` },
      "application/x-font-sunos-news": { source: `apache` },
      "application/x-font-type1": { source: `apache`, extensions: [`pfa`, `pfb`, `pfm`, `afm`] },
      "application/x-font-vfont": { source: `apache` },
      "application/x-freearc": { source: `apache`, extensions: [`arc`] },
      "application/x-futuresplash": { source: `apache`, extensions: [`spl`] },
      "application/x-gca-compressed": { source: `apache`, extensions: [`gca`] },
      "application/x-glulx": { source: `apache`, extensions: [`ulx`] },
      "application/x-gnumeric": { source: `apache`, extensions: [`gnumeric`] },
      "application/x-gramps-xml": { source: `apache`, extensions: [`gramps`] },
      "application/x-gtar": { source: `apache`, extensions: [`gtar`] },
      "application/x-gzip": { source: `apache` },
      "application/x-hdf": { source: `apache`, extensions: [`hdf`] },
      "application/x-httpd-php": { compressible: !0, extensions: [`php`] },
      "application/x-install-instructions": { source: `apache`, extensions: [`install`] },
      "application/x-iso9660-image": { source: `apache`, extensions: [`iso`] },
      "application/x-iwork-keynote-sffkey": { extensions: [`key`] },
      "application/x-iwork-numbers-sffnumbers": { extensions: [`numbers`] },
      "application/x-iwork-pages-sffpages": { extensions: [`pages`] },
      "application/x-java-archive-diff": { source: `nginx`, extensions: [`jardiff`] },
      "application/x-java-jnlp-file": { source: `apache`, compressible: !1, extensions: [`jnlp`] },
      "application/x-javascript": { compressible: !0 },
      "application/x-keepass2": { extensions: [`kdbx`] },
      "application/x-latex": { source: `apache`, compressible: !1, extensions: [`latex`] },
      "application/x-lua-bytecode": { extensions: [`luac`] },
      "application/x-lzh-compressed": { source: `apache`, extensions: [`lzh`, `lha`] },
      "application/x-makeself": { source: `nginx`, extensions: [`run`] },
      "application/x-mie": { source: `apache`, extensions: [`mie`] },
      "application/x-mobipocket-ebook": { source: `apache`, extensions: [`prc`, `mobi`] },
      "application/x-mpegurl": { compressible: !1 },
      "application/x-ms-application": { source: `apache`, extensions: [`application`] },
      "application/x-ms-shortcut": { source: `apache`, extensions: [`lnk`] },
      "application/x-ms-wmd": { source: `apache`, extensions: [`wmd`] },
      "application/x-ms-wmz": { source: `apache`, extensions: [`wmz`] },
      "application/x-ms-xbap": { source: `apache`, extensions: [`xbap`] },
      "application/x-msaccess": { source: `apache`, extensions: [`mdb`] },
      "application/x-msbinder": { source: `apache`, extensions: [`obd`] },
      "application/x-mscardfile": { source: `apache`, extensions: [`crd`] },
      "application/x-msclip": { source: `apache`, extensions: [`clp`] },
      "application/x-msdos-program": { extensions: [`exe`] },
      "application/x-msdownload": {
        source: `apache`,
        extensions: [`exe`, `dll`, `com`, `bat`, `msi`],
      },
      "application/x-msmediaview": { source: `apache`, extensions: [`mvb`, `m13`, `m14`] },
      "application/x-msmetafile": { source: `apache`, extensions: [`wmf`, `wmz`, `emf`, `emz`] },
      "application/x-msmoney": { source: `apache`, extensions: [`mny`] },
      "application/x-mspublisher": { source: `apache`, extensions: [`pub`] },
      "application/x-msschedule": { source: `apache`, extensions: [`scd`] },
      "application/x-msterminal": { source: `apache`, extensions: [`trm`] },
      "application/x-mswrite": { source: `apache`, extensions: [`wri`] },
      "application/x-netcdf": { source: `apache`, extensions: [`nc`, `cdf`] },
      "application/x-ns-proxy-autoconfig": { compressible: !0, extensions: [`pac`] },
      "application/x-nzb": { source: `apache`, extensions: [`nzb`] },
      "application/x-perl": { source: `nginx`, extensions: [`pl`, `pm`] },
      "application/x-pilot": { source: `nginx`, extensions: [`prc`, `pdb`] },
      "application/x-pkcs12": { source: `apache`, compressible: !1, extensions: [`p12`, `pfx`] },
      "application/x-pkcs7-certificates": { source: `apache`, extensions: [`p7b`, `spc`] },
      "application/x-pkcs7-certreqresp": { source: `apache`, extensions: [`p7r`] },
      "application/x-pki-message": { source: `iana` },
      "application/x-rar-compressed": { source: `apache`, compressible: !1, extensions: [`rar`] },
      "application/x-redhat-package-manager": { source: `nginx`, extensions: [`rpm`] },
      "application/x-research-info-systems": { source: `apache`, extensions: [`ris`] },
      "application/x-sea": { source: `nginx`, extensions: [`sea`] },
      "application/x-sh": { source: `apache`, compressible: !0, extensions: [`sh`] },
      "application/x-shar": { source: `apache`, extensions: [`shar`] },
      "application/x-shockwave-flash": { source: `apache`, compressible: !1, extensions: [`swf`] },
      "application/x-silverlight-app": { source: `apache`, extensions: [`xap`] },
      "application/x-sql": { source: `apache`, extensions: [`sql`] },
      "application/x-stuffit": { source: `apache`, compressible: !1, extensions: [`sit`] },
      "application/x-stuffitx": { source: `apache`, extensions: [`sitx`] },
      "application/x-subrip": { source: `apache`, extensions: [`srt`] },
      "application/x-sv4cpio": { source: `apache`, extensions: [`sv4cpio`] },
      "application/x-sv4crc": { source: `apache`, extensions: [`sv4crc`] },
      "application/x-t3vm-image": { source: `apache`, extensions: [`t3`] },
      "application/x-tads": { source: `apache`, extensions: [`gam`] },
      "application/x-tar": { source: `apache`, compressible: !0, extensions: [`tar`] },
      "application/x-tcl": { source: `apache`, extensions: [`tcl`, `tk`] },
      "application/x-tex": { source: `apache`, extensions: [`tex`] },
      "application/x-tex-tfm": { source: `apache`, extensions: [`tfm`] },
      "application/x-texinfo": { source: `apache`, extensions: [`texinfo`, `texi`] },
      "application/x-tgif": { source: `apache`, extensions: [`obj`] },
      "application/x-ustar": { source: `apache`, extensions: [`ustar`] },
      "application/x-virtualbox-hdd": { compressible: !0, extensions: [`hdd`] },
      "application/x-virtualbox-ova": { compressible: !0, extensions: [`ova`] },
      "application/x-virtualbox-ovf": { compressible: !0, extensions: [`ovf`] },
      "application/x-virtualbox-vbox": { compressible: !0, extensions: [`vbox`] },
      "application/x-virtualbox-vbox-extpack": { compressible: !1, extensions: [`vbox-extpack`] },
      "application/x-virtualbox-vdi": { compressible: !0, extensions: [`vdi`] },
      "application/x-virtualbox-vhd": { compressible: !0, extensions: [`vhd`] },
      "application/x-virtualbox-vmdk": { compressible: !0, extensions: [`vmdk`] },
      "application/x-wais-source": { source: `apache`, extensions: [`src`] },
      "application/x-web-app-manifest+json": { compressible: !0, extensions: [`webapp`] },
      "application/x-www-form-urlencoded": { source: `iana`, compressible: !0 },
      "application/x-x509-ca-cert": { source: `iana`, extensions: [`der`, `crt`, `pem`] },
      "application/x-x509-ca-ra-cert": { source: `iana` },
      "application/x-x509-next-ca-cert": { source: `iana` },
      "application/x-xfig": { source: `apache`, extensions: [`fig`] },
      "application/x-xliff+xml": { source: `apache`, compressible: !0, extensions: [`xlf`] },
      "application/x-xpinstall": { source: `apache`, compressible: !1, extensions: [`xpi`] },
      "application/x-xz": { source: `apache`, extensions: [`xz`] },
      "application/x-zmachine": {
        source: `apache`,
        extensions: [`z1`, `z2`, `z3`, `z4`, `z5`, `z6`, `z7`, `z8`],
      },
      "application/x400-bp": { source: `iana` },
      "application/xacml+xml": { source: `iana`, compressible: !0 },
      "application/xaml+xml": { source: `apache`, compressible: !0, extensions: [`xaml`] },
      "application/xcap-att+xml": { source: `iana`, compressible: !0, extensions: [`xav`] },
      "application/xcap-caps+xml": { source: `iana`, compressible: !0, extensions: [`xca`] },
      "application/xcap-diff+xml": { source: `iana`, compressible: !0, extensions: [`xdf`] },
      "application/xcap-el+xml": { source: `iana`, compressible: !0, extensions: [`xel`] },
      "application/xcap-error+xml": { source: `iana`, compressible: !0 },
      "application/xcap-ns+xml": { source: `iana`, compressible: !0, extensions: [`xns`] },
      "application/xcon-conference-info+xml": { source: `iana`, compressible: !0 },
      "application/xcon-conference-info-diff+xml": { source: `iana`, compressible: !0 },
      "application/xenc+xml": { source: `iana`, compressible: !0, extensions: [`xenc`] },
      "application/xhtml+xml": { source: `iana`, compressible: !0, extensions: [`xhtml`, `xht`] },
      "application/xhtml-voice+xml": { source: `apache`, compressible: !0 },
      "application/xliff+xml": { source: `iana`, compressible: !0, extensions: [`xlf`] },
      "application/xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`xml`, `xsl`, `xsd`, `rng`],
      },
      "application/xml-dtd": { source: `iana`, compressible: !0, extensions: [`dtd`] },
      "application/xml-external-parsed-entity": { source: `iana` },
      "application/xml-patch+xml": { source: `iana`, compressible: !0 },
      "application/xmpp+xml": { source: `iana`, compressible: !0 },
      "application/xop+xml": { source: `iana`, compressible: !0, extensions: [`xop`] },
      "application/xproc+xml": { source: `apache`, compressible: !0, extensions: [`xpl`] },
      "application/xslt+xml": { source: `iana`, compressible: !0, extensions: [`xsl`, `xslt`] },
      "application/xspf+xml": { source: `apache`, compressible: !0, extensions: [`xspf`] },
      "application/xv+xml": {
        source: `iana`,
        compressible: !0,
        extensions: [`mxml`, `xhvml`, `xvml`, `xvm`],
      },
      "application/yang": { source: `iana`, extensions: [`yang`] },
      "application/yang-data+json": { source: `iana`, compressible: !0 },
      "application/yang-data+xml": { source: `iana`, compressible: !0 },
      "application/yang-patch+json": { source: `iana`, compressible: !0 },
      "application/yang-patch+xml": { source: `iana`, compressible: !0 },
      "application/yin+xml": { source: `iana`, compressible: !0, extensions: [`yin`] },
      "application/zip": { source: `iana`, compressible: !1, extensions: [`zip`] },
      "application/zlib": { source: `iana` },
      "application/zstd": { source: `iana` },
      "audio/1d-interleaved-parityfec": { source: `iana` },
      "audio/32kadpcm": { source: `iana` },
      "audio/3gpp": { source: `iana`, compressible: !1, extensions: [`3gpp`] },
      "audio/3gpp2": { source: `iana` },
      "audio/aac": { source: `iana` },
      "audio/ac3": { source: `iana` },
      "audio/adpcm": { source: `apache`, extensions: [`adp`] },
      "audio/amr": { source: `iana`, extensions: [`amr`] },
      "audio/amr-wb": { source: `iana` },
      "audio/amr-wb+": { source: `iana` },
      "audio/aptx": { source: `iana` },
      "audio/asc": { source: `iana` },
      "audio/atrac-advanced-lossless": { source: `iana` },
      "audio/atrac-x": { source: `iana` },
      "audio/atrac3": { source: `iana` },
      "audio/basic": { source: `iana`, compressible: !1, extensions: [`au`, `snd`] },
      "audio/bv16": { source: `iana` },
      "audio/bv32": { source: `iana` },
      "audio/clearmode": { source: `iana` },
      "audio/cn": { source: `iana` },
      "audio/dat12": { source: `iana` },
      "audio/dls": { source: `iana` },
      "audio/dsr-es201108": { source: `iana` },
      "audio/dsr-es202050": { source: `iana` },
      "audio/dsr-es202211": { source: `iana` },
      "audio/dsr-es202212": { source: `iana` },
      "audio/dv": { source: `iana` },
      "audio/dvi4": { source: `iana` },
      "audio/eac3": { source: `iana` },
      "audio/encaprtp": { source: `iana` },
      "audio/evrc": { source: `iana` },
      "audio/evrc-qcp": { source: `iana` },
      "audio/evrc0": { source: `iana` },
      "audio/evrc1": { source: `iana` },
      "audio/evrcb": { source: `iana` },
      "audio/evrcb0": { source: `iana` },
      "audio/evrcb1": { source: `iana` },
      "audio/evrcnw": { source: `iana` },
      "audio/evrcnw0": { source: `iana` },
      "audio/evrcnw1": { source: `iana` },
      "audio/evrcwb": { source: `iana` },
      "audio/evrcwb0": { source: `iana` },
      "audio/evrcwb1": { source: `iana` },
      "audio/evs": { source: `iana` },
      "audio/flexfec": { source: `iana` },
      "audio/fwdred": { source: `iana` },
      "audio/g711-0": { source: `iana` },
      "audio/g719": { source: `iana` },
      "audio/g722": { source: `iana` },
      "audio/g7221": { source: `iana` },
      "audio/g723": { source: `iana` },
      "audio/g726-16": { source: `iana` },
      "audio/g726-24": { source: `iana` },
      "audio/g726-32": { source: `iana` },
      "audio/g726-40": { source: `iana` },
      "audio/g728": { source: `iana` },
      "audio/g729": { source: `iana` },
      "audio/g7291": { source: `iana` },
      "audio/g729d": { source: `iana` },
      "audio/g729e": { source: `iana` },
      "audio/gsm": { source: `iana` },
      "audio/gsm-efr": { source: `iana` },
      "audio/gsm-hr-08": { source: `iana` },
      "audio/ilbc": { source: `iana` },
      "audio/ip-mr_v2.5": { source: `iana` },
      "audio/isac": { source: `apache` },
      "audio/l16": { source: `iana` },
      "audio/l20": { source: `iana` },
      "audio/l24": { source: `iana`, compressible: !1 },
      "audio/l8": { source: `iana` },
      "audio/lpc": { source: `iana` },
      "audio/melp": { source: `iana` },
      "audio/melp1200": { source: `iana` },
      "audio/melp2400": { source: `iana` },
      "audio/melp600": { source: `iana` },
      "audio/mhas": { source: `iana` },
      "audio/midi": { source: `apache`, extensions: [`mid`, `midi`, `kar`, `rmi`] },
      "audio/mobile-xmf": { source: `iana`, extensions: [`mxmf`] },
      "audio/mp3": { compressible: !1, extensions: [`mp3`] },
      "audio/mp4": { source: `iana`, compressible: !1, extensions: [`m4a`, `mp4a`] },
      "audio/mp4a-latm": { source: `iana` },
      "audio/mpa": { source: `iana` },
      "audio/mpa-robust": { source: `iana` },
      "audio/mpeg": {
        source: `iana`,
        compressible: !1,
        extensions: [`mpga`, `mp2`, `mp2a`, `mp3`, `m2a`, `m3a`],
      },
      "audio/mpeg4-generic": { source: `iana` },
      "audio/musepack": { source: `apache` },
      "audio/ogg": { source: `iana`, compressible: !1, extensions: [`oga`, `ogg`, `spx`, `opus`] },
      "audio/opus": { source: `iana` },
      "audio/parityfec": { source: `iana` },
      "audio/pcma": { source: `iana` },
      "audio/pcma-wb": { source: `iana` },
      "audio/pcmu": { source: `iana` },
      "audio/pcmu-wb": { source: `iana` },
      "audio/prs.sid": { source: `iana` },
      "audio/qcelp": { source: `iana` },
      "audio/raptorfec": { source: `iana` },
      "audio/red": { source: `iana` },
      "audio/rtp-enc-aescm128": { source: `iana` },
      "audio/rtp-midi": { source: `iana` },
      "audio/rtploopback": { source: `iana` },
      "audio/rtx": { source: `iana` },
      "audio/s3m": { source: `apache`, extensions: [`s3m`] },
      "audio/scip": { source: `iana` },
      "audio/silk": { source: `apache`, extensions: [`sil`] },
      "audio/smv": { source: `iana` },
      "audio/smv-qcp": { source: `iana` },
      "audio/smv0": { source: `iana` },
      "audio/sofa": { source: `iana` },
      "audio/sp-midi": { source: `iana` },
      "audio/speex": { source: `iana` },
      "audio/t140c": { source: `iana` },
      "audio/t38": { source: `iana` },
      "audio/telephone-event": { source: `iana` },
      "audio/tetra_acelp": { source: `iana` },
      "audio/tetra_acelp_bb": { source: `iana` },
      "audio/tone": { source: `iana` },
      "audio/tsvcis": { source: `iana` },
      "audio/uemclip": { source: `iana` },
      "audio/ulpfec": { source: `iana` },
      "audio/usac": { source: `iana` },
      "audio/vdvi": { source: `iana` },
      "audio/vmr-wb": { source: `iana` },
      "audio/vnd.3gpp.iufp": { source: `iana` },
      "audio/vnd.4sb": { source: `iana` },
      "audio/vnd.audiokoz": { source: `iana` },
      "audio/vnd.celp": { source: `iana` },
      "audio/vnd.cisco.nse": { source: `iana` },
      "audio/vnd.cmles.radio-events": { source: `iana` },
      "audio/vnd.cns.anp1": { source: `iana` },
      "audio/vnd.cns.inf1": { source: `iana` },
      "audio/vnd.dece.audio": { source: `iana`, extensions: [`uva`, `uvva`] },
      "audio/vnd.digital-winds": { source: `iana`, extensions: [`eol`] },
      "audio/vnd.dlna.adts": { source: `iana` },
      "audio/vnd.dolby.heaac.1": { source: `iana` },
      "audio/vnd.dolby.heaac.2": { source: `iana` },
      "audio/vnd.dolby.mlp": { source: `iana` },
      "audio/vnd.dolby.mps": { source: `iana` },
      "audio/vnd.dolby.pl2": { source: `iana` },
      "audio/vnd.dolby.pl2x": { source: `iana` },
      "audio/vnd.dolby.pl2z": { source: `iana` },
      "audio/vnd.dolby.pulse.1": { source: `iana` },
      "audio/vnd.dra": { source: `iana`, extensions: [`dra`] },
      "audio/vnd.dts": { source: `iana`, extensions: [`dts`] },
      "audio/vnd.dts.hd": { source: `iana`, extensions: [`dtshd`] },
      "audio/vnd.dts.uhd": { source: `iana` },
      "audio/vnd.dvb.file": { source: `iana` },
      "audio/vnd.everad.plj": { source: `iana` },
      "audio/vnd.hns.audio": { source: `iana` },
      "audio/vnd.lucent.voice": { source: `iana`, extensions: [`lvp`] },
      "audio/vnd.ms-playready.media.pya": { source: `iana`, extensions: [`pya`] },
      "audio/vnd.nokia.mobile-xmf": { source: `iana` },
      "audio/vnd.nortel.vbk": { source: `iana` },
      "audio/vnd.nuera.ecelp4800": { source: `iana`, extensions: [`ecelp4800`] },
      "audio/vnd.nuera.ecelp7470": { source: `iana`, extensions: [`ecelp7470`] },
      "audio/vnd.nuera.ecelp9600": { source: `iana`, extensions: [`ecelp9600`] },
      "audio/vnd.octel.sbc": { source: `iana` },
      "audio/vnd.presonus.multitrack": { source: `iana` },
      "audio/vnd.qcelp": { source: `iana` },
      "audio/vnd.rhetorex.32kadpcm": { source: `iana` },
      "audio/vnd.rip": { source: `iana`, extensions: [`rip`] },
      "audio/vnd.rn-realaudio": { compressible: !1 },
      "audio/vnd.sealedmedia.softseal.mpeg": { source: `iana` },
      "audio/vnd.vmx.cvsd": { source: `iana` },
      "audio/vnd.wave": { compressible: !1 },
      "audio/vorbis": { source: `iana`, compressible: !1 },
      "audio/vorbis-config": { source: `iana` },
      "audio/wav": { compressible: !1, extensions: [`wav`] },
      "audio/wave": { compressible: !1, extensions: [`wav`] },
      "audio/webm": { source: `apache`, compressible: !1, extensions: [`weba`] },
      "audio/x-aac": { source: `apache`, compressible: !1, extensions: [`aac`] },
      "audio/x-aiff": { source: `apache`, extensions: [`aif`, `aiff`, `aifc`] },
      "audio/x-caf": { source: `apache`, compressible: !1, extensions: [`caf`] },
      "audio/x-flac": { source: `apache`, extensions: [`flac`] },
      "audio/x-m4a": { source: `nginx`, extensions: [`m4a`] },
      "audio/x-matroska": { source: `apache`, extensions: [`mka`] },
      "audio/x-mpegurl": { source: `apache`, extensions: [`m3u`] },
      "audio/x-ms-wax": { source: `apache`, extensions: [`wax`] },
      "audio/x-ms-wma": { source: `apache`, extensions: [`wma`] },
      "audio/x-pn-realaudio": { source: `apache`, extensions: [`ram`, `ra`] },
      "audio/x-pn-realaudio-plugin": { source: `apache`, extensions: [`rmp`] },
      "audio/x-realaudio": { source: `nginx`, extensions: [`ra`] },
      "audio/x-tta": { source: `apache` },
      "audio/x-wav": { source: `apache`, extensions: [`wav`] },
      "audio/xm": { source: `apache`, extensions: [`xm`] },
      "chemical/x-cdx": { source: `apache`, extensions: [`cdx`] },
      "chemical/x-cif": { source: `apache`, extensions: [`cif`] },
      "chemical/x-cmdf": { source: `apache`, extensions: [`cmdf`] },
      "chemical/x-cml": { source: `apache`, extensions: [`cml`] },
      "chemical/x-csml": { source: `apache`, extensions: [`csml`] },
      "chemical/x-pdb": { source: `apache` },
      "chemical/x-xyz": { source: `apache`, extensions: [`xyz`] },
      "font/collection": { source: `iana`, extensions: [`ttc`] },
      "font/otf": { source: `iana`, compressible: !0, extensions: [`otf`] },
      "font/sfnt": { source: `iana` },
      "font/ttf": { source: `iana`, compressible: !0, extensions: [`ttf`] },
      "font/woff": { source: `iana`, extensions: [`woff`] },
      "font/woff2": { source: `iana`, extensions: [`woff2`] },
      "image/aces": { source: `iana`, extensions: [`exr`] },
      "image/apng": { compressible: !1, extensions: [`apng`] },
      "image/avci": { source: `iana`, extensions: [`avci`] },
      "image/avcs": { source: `iana`, extensions: [`avcs`] },
      "image/avif": { source: `iana`, compressible: !1, extensions: [`avif`] },
      "image/bmp": { source: `iana`, compressible: !0, extensions: [`bmp`] },
      "image/cgm": { source: `iana`, extensions: [`cgm`] },
      "image/dicom-rle": { source: `iana`, extensions: [`drle`] },
      "image/emf": { source: `iana`, extensions: [`emf`] },
      "image/fits": { source: `iana`, extensions: [`fits`] },
      "image/g3fax": { source: `iana`, extensions: [`g3`] },
      "image/gif": { source: `iana`, compressible: !1, extensions: [`gif`] },
      "image/heic": { source: `iana`, extensions: [`heic`] },
      "image/heic-sequence": { source: `iana`, extensions: [`heics`] },
      "image/heif": { source: `iana`, extensions: [`heif`] },
      "image/heif-sequence": { source: `iana`, extensions: [`heifs`] },
      "image/hej2k": { source: `iana`, extensions: [`hej2`] },
      "image/hsj2": { source: `iana`, extensions: [`hsj2`] },
      "image/ief": { source: `iana`, extensions: [`ief`] },
      "image/jls": { source: `iana`, extensions: [`jls`] },
      "image/jp2": { source: `iana`, compressible: !1, extensions: [`jp2`, `jpg2`] },
      "image/jpeg": { source: `iana`, compressible: !1, extensions: [`jpeg`, `jpg`, `jpe`] },
      "image/jph": { source: `iana`, extensions: [`jph`] },
      "image/jphc": { source: `iana`, extensions: [`jhc`] },
      "image/jpm": { source: `iana`, compressible: !1, extensions: [`jpm`] },
      "image/jpx": { source: `iana`, compressible: !1, extensions: [`jpx`, `jpf`] },
      "image/jxr": { source: `iana`, extensions: [`jxr`] },
      "image/jxra": { source: `iana`, extensions: [`jxra`] },
      "image/jxrs": { source: `iana`, extensions: [`jxrs`] },
      "image/jxs": { source: `iana`, extensions: [`jxs`] },
      "image/jxsc": { source: `iana`, extensions: [`jxsc`] },
      "image/jxsi": { source: `iana`, extensions: [`jxsi`] },
      "image/jxss": { source: `iana`, extensions: [`jxss`] },
      "image/ktx": { source: `iana`, extensions: [`ktx`] },
      "image/ktx2": { source: `iana`, extensions: [`ktx2`] },
      "image/naplps": { source: `iana` },
      "image/pjpeg": { compressible: !1 },
      "image/png": { source: `iana`, compressible: !1, extensions: [`png`] },
      "image/prs.btif": { source: `iana`, extensions: [`btif`] },
      "image/prs.pti": { source: `iana`, extensions: [`pti`] },
      "image/pwg-raster": { source: `iana` },
      "image/sgi": { source: `apache`, extensions: [`sgi`] },
      "image/svg+xml": { source: `iana`, compressible: !0, extensions: [`svg`, `svgz`] },
      "image/t38": { source: `iana`, extensions: [`t38`] },
      "image/tiff": { source: `iana`, compressible: !1, extensions: [`tif`, `tiff`] },
      "image/tiff-fx": { source: `iana`, extensions: [`tfx`] },
      "image/vnd.adobe.photoshop": { source: `iana`, compressible: !0, extensions: [`psd`] },
      "image/vnd.airzip.accelerator.azv": { source: `iana`, extensions: [`azv`] },
      "image/vnd.cns.inf2": { source: `iana` },
      "image/vnd.dece.graphic": { source: `iana`, extensions: [`uvi`, `uvvi`, `uvg`, `uvvg`] },
      "image/vnd.djvu": { source: `iana`, extensions: [`djvu`, `djv`] },
      "image/vnd.dvb.subtitle": { source: `iana`, extensions: [`sub`] },
      "image/vnd.dwg": { source: `iana`, extensions: [`dwg`] },
      "image/vnd.dxf": { source: `iana`, extensions: [`dxf`] },
      "image/vnd.fastbidsheet": { source: `iana`, extensions: [`fbs`] },
      "image/vnd.fpx": { source: `iana`, extensions: [`fpx`] },
      "image/vnd.fst": { source: `iana`, extensions: [`fst`] },
      "image/vnd.fujixerox.edmics-mmr": { source: `iana`, extensions: [`mmr`] },
      "image/vnd.fujixerox.edmics-rlc": { source: `iana`, extensions: [`rlc`] },
      "image/vnd.globalgraphics.pgb": { source: `iana` },
      "image/vnd.microsoft.icon": { source: `iana`, compressible: !0, extensions: [`ico`] },
      "image/vnd.mix": { source: `iana` },
      "image/vnd.mozilla.apng": { source: `iana` },
      "image/vnd.ms-dds": { compressible: !0, extensions: [`dds`] },
      "image/vnd.ms-modi": { source: `iana`, extensions: [`mdi`] },
      "image/vnd.ms-photo": { source: `apache`, extensions: [`wdp`] },
      "image/vnd.net-fpx": { source: `iana`, extensions: [`npx`] },
      "image/vnd.pco.b16": { source: `iana`, extensions: [`b16`] },
      "image/vnd.radiance": { source: `iana` },
      "image/vnd.sealed.png": { source: `iana` },
      "image/vnd.sealedmedia.softseal.gif": { source: `iana` },
      "image/vnd.sealedmedia.softseal.jpg": { source: `iana` },
      "image/vnd.svf": { source: `iana` },
      "image/vnd.tencent.tap": { source: `iana`, extensions: [`tap`] },
      "image/vnd.valve.source.texture": { source: `iana`, extensions: [`vtf`] },
      "image/vnd.wap.wbmp": { source: `iana`, extensions: [`wbmp`] },
      "image/vnd.xiff": { source: `iana`, extensions: [`xif`] },
      "image/vnd.zbrush.pcx": { source: `iana`, extensions: [`pcx`] },
      "image/webp": { source: `apache`, extensions: [`webp`] },
      "image/wmf": { source: `iana`, extensions: [`wmf`] },
      "image/x-3ds": { source: `apache`, extensions: [`3ds`] },
      "image/x-cmu-raster": { source: `apache`, extensions: [`ras`] },
      "image/x-cmx": { source: `apache`, extensions: [`cmx`] },
      "image/x-freehand": { source: `apache`, extensions: [`fh`, `fhc`, `fh4`, `fh5`, `fh7`] },
      "image/x-icon": { source: `apache`, compressible: !0, extensions: [`ico`] },
      "image/x-jng": { source: `nginx`, extensions: [`jng`] },
      "image/x-mrsid-image": { source: `apache`, extensions: [`sid`] },
      "image/x-ms-bmp": { source: `nginx`, compressible: !0, extensions: [`bmp`] },
      "image/x-pcx": { source: `apache`, extensions: [`pcx`] },
      "image/x-pict": { source: `apache`, extensions: [`pic`, `pct`] },
      "image/x-portable-anymap": { source: `apache`, extensions: [`pnm`] },
      "image/x-portable-bitmap": { source: `apache`, extensions: [`pbm`] },
      "image/x-portable-graymap": { source: `apache`, extensions: [`pgm`] },
      "image/x-portable-pixmap": { source: `apache`, extensions: [`ppm`] },
      "image/x-rgb": { source: `apache`, extensions: [`rgb`] },
      "image/x-tga": { source: `apache`, extensions: [`tga`] },
      "image/x-xbitmap": { source: `apache`, extensions: [`xbm`] },
      "image/x-xcf": { compressible: !1 },
      "image/x-xpixmap": { source: `apache`, extensions: [`xpm`] },
      "image/x-xwindowdump": { source: `apache`, extensions: [`xwd`] },
      "message/cpim": { source: `iana` },
      "message/delivery-status": { source: `iana` },
      "message/disposition-notification": {
        source: `iana`,
        extensions: [`disposition-notification`],
      },
      "message/external-body": { source: `iana` },
      "message/feedback-report": { source: `iana` },
      "message/global": { source: `iana`, extensions: [`u8msg`] },
      "message/global-delivery-status": { source: `iana`, extensions: [`u8dsn`] },
      "message/global-disposition-notification": { source: `iana`, extensions: [`u8mdn`] },
      "message/global-headers": { source: `iana`, extensions: [`u8hdr`] },
      "message/http": { source: `iana`, compressible: !1 },
      "message/imdn+xml": { source: `iana`, compressible: !0 },
      "message/news": { source: `iana` },
      "message/partial": { source: `iana`, compressible: !1 },
      "message/rfc822": { source: `iana`, compressible: !0, extensions: [`eml`, `mime`] },
      "message/s-http": { source: `iana` },
      "message/sip": { source: `iana` },
      "message/sipfrag": { source: `iana` },
      "message/tracking-status": { source: `iana` },
      "message/vnd.si.simp": { source: `iana` },
      "message/vnd.wfa.wsc": { source: `iana`, extensions: [`wsc`] },
      "model/3mf": { source: `iana`, extensions: [`3mf`] },
      "model/e57": { source: `iana` },
      "model/gltf+json": { source: `iana`, compressible: !0, extensions: [`gltf`] },
      "model/gltf-binary": { source: `iana`, compressible: !0, extensions: [`glb`] },
      "model/iges": { source: `iana`, compressible: !1, extensions: [`igs`, `iges`] },
      "model/mesh": { source: `iana`, compressible: !1, extensions: [`msh`, `mesh`, `silo`] },
      "model/mtl": { source: `iana`, extensions: [`mtl`] },
      "model/obj": { source: `iana`, extensions: [`obj`] },
      "model/step": { source: `iana` },
      "model/step+xml": { source: `iana`, compressible: !0, extensions: [`stpx`] },
      "model/step+zip": { source: `iana`, compressible: !1, extensions: [`stpz`] },
      "model/step-xml+zip": { source: `iana`, compressible: !1, extensions: [`stpxz`] },
      "model/stl": { source: `iana`, extensions: [`stl`] },
      "model/vnd.collada+xml": { source: `iana`, compressible: !0, extensions: [`dae`] },
      "model/vnd.dwf": { source: `iana`, extensions: [`dwf`] },
      "model/vnd.flatland.3dml": { source: `iana` },
      "model/vnd.gdl": { source: `iana`, extensions: [`gdl`] },
      "model/vnd.gs-gdl": { source: `apache` },
      "model/vnd.gs.gdl": { source: `iana` },
      "model/vnd.gtw": { source: `iana`, extensions: [`gtw`] },
      "model/vnd.moml+xml": { source: `iana`, compressible: !0 },
      "model/vnd.mts": { source: `iana`, extensions: [`mts`] },
      "model/vnd.opengex": { source: `iana`, extensions: [`ogex`] },
      "model/vnd.parasolid.transmit.binary": { source: `iana`, extensions: [`x_b`] },
      "model/vnd.parasolid.transmit.text": { source: `iana`, extensions: [`x_t`] },
      "model/vnd.pytha.pyox": { source: `iana` },
      "model/vnd.rosette.annotated-data-model": { source: `iana` },
      "model/vnd.sap.vds": { source: `iana`, extensions: [`vds`] },
      "model/vnd.usdz+zip": { source: `iana`, compressible: !1, extensions: [`usdz`] },
      "model/vnd.valve.source.compiled-map": { source: `iana`, extensions: [`bsp`] },
      "model/vnd.vtu": { source: `iana`, extensions: [`vtu`] },
      "model/vrml": { source: `iana`, compressible: !1, extensions: [`wrl`, `vrml`] },
      "model/x3d+binary": { source: `apache`, compressible: !1, extensions: [`x3db`, `x3dbz`] },
      "model/x3d+fastinfoset": { source: `iana`, extensions: [`x3db`] },
      "model/x3d+vrml": { source: `apache`, compressible: !1, extensions: [`x3dv`, `x3dvz`] },
      "model/x3d+xml": { source: `iana`, compressible: !0, extensions: [`x3d`, `x3dz`] },
      "model/x3d-vrml": { source: `iana`, extensions: [`x3dv`] },
      "multipart/alternative": { source: `iana`, compressible: !1 },
      "multipart/appledouble": { source: `iana` },
      "multipart/byteranges": { source: `iana` },
      "multipart/digest": { source: `iana` },
      "multipart/encrypted": { source: `iana`, compressible: !1 },
      "multipart/form-data": { source: `iana`, compressible: !1 },
      "multipart/header-set": { source: `iana` },
      "multipart/mixed": { source: `iana` },
      "multipart/multilingual": { source: `iana` },
      "multipart/parallel": { source: `iana` },
      "multipart/related": { source: `iana`, compressible: !1 },
      "multipart/report": { source: `iana` },
      "multipart/signed": { source: `iana`, compressible: !1 },
      "multipart/vnd.bint.med-plus": { source: `iana` },
      "multipart/voice-message": { source: `iana` },
      "multipart/x-mixed-replace": { source: `iana` },
      "text/1d-interleaved-parityfec": { source: `iana` },
      "text/cache-manifest": {
        source: `iana`,
        compressible: !0,
        extensions: [`appcache`, `manifest`],
      },
      "text/calendar": { source: `iana`, extensions: [`ics`, `ifb`] },
      "text/calender": { compressible: !0 },
      "text/cmd": { compressible: !0 },
      "text/coffeescript": { extensions: [`coffee`, `litcoffee`] },
      "text/cql": { source: `iana` },
      "text/cql-expression": { source: `iana` },
      "text/cql-identifier": { source: `iana` },
      "text/css": { source: `iana`, charset: `UTF-8`, compressible: !0, extensions: [`css`] },
      "text/csv": { source: `iana`, compressible: !0, extensions: [`csv`] },
      "text/csv-schema": { source: `iana` },
      "text/directory": { source: `iana` },
      "text/dns": { source: `iana` },
      "text/ecmascript": { source: `iana` },
      "text/encaprtp": { source: `iana` },
      "text/enriched": { source: `iana` },
      "text/fhirpath": { source: `iana` },
      "text/flexfec": { source: `iana` },
      "text/fwdred": { source: `iana` },
      "text/gff3": { source: `iana` },
      "text/grammar-ref-list": { source: `iana` },
      "text/html": { source: `iana`, compressible: !0, extensions: [`html`, `htm`, `shtml`] },
      "text/jade": { extensions: [`jade`] },
      "text/javascript": { source: `iana`, compressible: !0 },
      "text/jcr-cnd": { source: `iana` },
      "text/jsx": { compressible: !0, extensions: [`jsx`] },
      "text/less": { compressible: !0, extensions: [`less`] },
      "text/markdown": { source: `iana`, compressible: !0, extensions: [`markdown`, `md`] },
      "text/mathml": { source: `nginx`, extensions: [`mml`] },
      "text/mdx": { compressible: !0, extensions: [`mdx`] },
      "text/mizar": { source: `iana` },
      "text/n3": { source: `iana`, charset: `UTF-8`, compressible: !0, extensions: [`n3`] },
      "text/parameters": { source: `iana`, charset: `UTF-8` },
      "text/parityfec": { source: `iana` },
      "text/plain": {
        source: `iana`,
        compressible: !0,
        extensions: [`txt`, `text`, `conf`, `def`, `list`, `log`, `in`, `ini`],
      },
      "text/provenance-notation": { source: `iana`, charset: `UTF-8` },
      "text/prs.fallenstein.rst": { source: `iana` },
      "text/prs.lines.tag": { source: `iana`, extensions: [`dsc`] },
      "text/prs.prop.logic": { source: `iana` },
      "text/raptorfec": { source: `iana` },
      "text/red": { source: `iana` },
      "text/rfc822-headers": { source: `iana` },
      "text/richtext": { source: `iana`, compressible: !0, extensions: [`rtx`] },
      "text/rtf": { source: `iana`, compressible: !0, extensions: [`rtf`] },
      "text/rtp-enc-aescm128": { source: `iana` },
      "text/rtploopback": { source: `iana` },
      "text/rtx": { source: `iana` },
      "text/sgml": { source: `iana`, extensions: [`sgml`, `sgm`] },
      "text/shaclc": { source: `iana` },
      "text/shex": { source: `iana`, extensions: [`shex`] },
      "text/slim": { extensions: [`slim`, `slm`] },
      "text/spdx": { source: `iana`, extensions: [`spdx`] },
      "text/strings": { source: `iana` },
      "text/stylus": { extensions: [`stylus`, `styl`] },
      "text/t140": { source: `iana` },
      "text/tab-separated-values": { source: `iana`, compressible: !0, extensions: [`tsv`] },
      "text/troff": { source: `iana`, extensions: [`t`, `tr`, `roff`, `man`, `me`, `ms`] },
      "text/turtle": { source: `iana`, charset: `UTF-8`, extensions: [`ttl`] },
      "text/ulpfec": { source: `iana` },
      "text/uri-list": { source: `iana`, compressible: !0, extensions: [`uri`, `uris`, `urls`] },
      "text/vcard": { source: `iana`, compressible: !0, extensions: [`vcard`] },
      "text/vnd.a": { source: `iana` },
      "text/vnd.abc": { source: `iana` },
      "text/vnd.ascii-art": { source: `iana` },
      "text/vnd.curl": { source: `iana`, extensions: [`curl`] },
      "text/vnd.curl.dcurl": { source: `apache`, extensions: [`dcurl`] },
      "text/vnd.curl.mcurl": { source: `apache`, extensions: [`mcurl`] },
      "text/vnd.curl.scurl": { source: `apache`, extensions: [`scurl`] },
      "text/vnd.debian.copyright": { source: `iana`, charset: `UTF-8` },
      "text/vnd.dmclientscript": { source: `iana` },
      "text/vnd.dvb.subtitle": { source: `iana`, extensions: [`sub`] },
      "text/vnd.esmertec.theme-descriptor": { source: `iana`, charset: `UTF-8` },
      "text/vnd.familysearch.gedcom": { source: `iana`, extensions: [`ged`] },
      "text/vnd.ficlab.flt": { source: `iana` },
      "text/vnd.fly": { source: `iana`, extensions: [`fly`] },
      "text/vnd.fmi.flexstor": { source: `iana`, extensions: [`flx`] },
      "text/vnd.gml": { source: `iana` },
      "text/vnd.graphviz": { source: `iana`, extensions: [`gv`] },
      "text/vnd.hans": { source: `iana` },
      "text/vnd.hgl": { source: `iana` },
      "text/vnd.in3d.3dml": { source: `iana`, extensions: [`3dml`] },
      "text/vnd.in3d.spot": { source: `iana`, extensions: [`spot`] },
      "text/vnd.iptc.newsml": { source: `iana` },
      "text/vnd.iptc.nitf": { source: `iana` },
      "text/vnd.latex-z": { source: `iana` },
      "text/vnd.motorola.reflex": { source: `iana` },
      "text/vnd.ms-mediapackage": { source: `iana` },
      "text/vnd.net2phone.commcenter.command": { source: `iana` },
      "text/vnd.radisys.msml-basic-layout": { source: `iana` },
      "text/vnd.senx.warpscript": { source: `iana` },
      "text/vnd.si.uricatalogue": { source: `iana` },
      "text/vnd.sosi": { source: `iana` },
      "text/vnd.sun.j2me.app-descriptor": { source: `iana`, charset: `UTF-8`, extensions: [`jad`] },
      "text/vnd.trolltech.linguist": { source: `iana`, charset: `UTF-8` },
      "text/vnd.wap.si": { source: `iana` },
      "text/vnd.wap.sl": { source: `iana` },
      "text/vnd.wap.wml": { source: `iana`, extensions: [`wml`] },
      "text/vnd.wap.wmlscript": { source: `iana`, extensions: [`wmls`] },
      "text/vtt": { source: `iana`, charset: `UTF-8`, compressible: !0, extensions: [`vtt`] },
      "text/x-asm": { source: `apache`, extensions: [`s`, `asm`] },
      "text/x-c": { source: `apache`, extensions: [`c`, `cc`, `cxx`, `cpp`, `h`, `hh`, `dic`] },
      "text/x-component": { source: `nginx`, extensions: [`htc`] },
      "text/x-fortran": { source: `apache`, extensions: [`f`, `for`, `f77`, `f90`] },
      "text/x-gwt-rpc": { compressible: !0 },
      "text/x-handlebars-template": { extensions: [`hbs`] },
      "text/x-java-source": { source: `apache`, extensions: [`java`] },
      "text/x-jquery-tmpl": { compressible: !0 },
      "text/x-lua": { extensions: [`lua`] },
      "text/x-markdown": { compressible: !0, extensions: [`mkd`] },
      "text/x-nfo": { source: `apache`, extensions: [`nfo`] },
      "text/x-opml": { source: `apache`, extensions: [`opml`] },
      "text/x-org": { compressible: !0, extensions: [`org`] },
      "text/x-pascal": { source: `apache`, extensions: [`p`, `pas`] },
      "text/x-processing": { compressible: !0, extensions: [`pde`] },
      "text/x-sass": { extensions: [`sass`] },
      "text/x-scss": { extensions: [`scss`] },
      "text/x-setext": { source: `apache`, extensions: [`etx`] },
      "text/x-sfv": { source: `apache`, extensions: [`sfv`] },
      "text/x-suse-ymp": { compressible: !0, extensions: [`ymp`] },
      "text/x-uuencode": { source: `apache`, extensions: [`uu`] },
      "text/x-vcalendar": { source: `apache`, extensions: [`vcs`] },
      "text/x-vcard": { source: `apache`, extensions: [`vcf`] },
      "text/xml": { source: `iana`, compressible: !0, extensions: [`xml`] },
      "text/xml-external-parsed-entity": { source: `iana` },
      "text/yaml": { compressible: !0, extensions: [`yaml`, `yml`] },
      "video/1d-interleaved-parityfec": { source: `iana` },
      "video/3gpp": { source: `iana`, extensions: [`3gp`, `3gpp`] },
      "video/3gpp-tt": { source: `iana` },
      "video/3gpp2": { source: `iana`, extensions: [`3g2`] },
      "video/av1": { source: `iana` },
      "video/bmpeg": { source: `iana` },
      "video/bt656": { source: `iana` },
      "video/celb": { source: `iana` },
      "video/dv": { source: `iana` },
      "video/encaprtp": { source: `iana` },
      "video/ffv1": { source: `iana` },
      "video/flexfec": { source: `iana` },
      "video/h261": { source: `iana`, extensions: [`h261`] },
      "video/h263": { source: `iana`, extensions: [`h263`] },
      "video/h263-1998": { source: `iana` },
      "video/h263-2000": { source: `iana` },
      "video/h264": { source: `iana`, extensions: [`h264`] },
      "video/h264-rcdo": { source: `iana` },
      "video/h264-svc": { source: `iana` },
      "video/h265": { source: `iana` },
      "video/iso.segment": { source: `iana`, extensions: [`m4s`] },
      "video/jpeg": { source: `iana`, extensions: [`jpgv`] },
      "video/jpeg2000": { source: `iana` },
      "video/jpm": { source: `apache`, extensions: [`jpm`, `jpgm`] },
      "video/jxsv": { source: `iana` },
      "video/mj2": { source: `iana`, extensions: [`mj2`, `mjp2`] },
      "video/mp1s": { source: `iana` },
      "video/mp2p": { source: `iana` },
      "video/mp2t": { source: `iana`, extensions: [`ts`] },
      "video/mp4": { source: `iana`, compressible: !1, extensions: [`mp4`, `mp4v`, `mpg4`] },
      "video/mp4v-es": { source: `iana` },
      "video/mpeg": {
        source: `iana`,
        compressible: !1,
        extensions: [`mpeg`, `mpg`, `mpe`, `m1v`, `m2v`],
      },
      "video/mpeg4-generic": { source: `iana` },
      "video/mpv": { source: `iana` },
      "video/nv": { source: `iana` },
      "video/ogg": { source: `iana`, compressible: !1, extensions: [`ogv`] },
      "video/parityfec": { source: `iana` },
      "video/pointer": { source: `iana` },
      "video/quicktime": { source: `iana`, compressible: !1, extensions: [`qt`, `mov`] },
      "video/raptorfec": { source: `iana` },
      "video/raw": { source: `iana` },
      "video/rtp-enc-aescm128": { source: `iana` },
      "video/rtploopback": { source: `iana` },
      "video/rtx": { source: `iana` },
      "video/scip": { source: `iana` },
      "video/smpte291": { source: `iana` },
      "video/smpte292m": { source: `iana` },
      "video/ulpfec": { source: `iana` },
      "video/vc1": { source: `iana` },
      "video/vc2": { source: `iana` },
      "video/vnd.cctv": { source: `iana` },
      "video/vnd.dece.hd": { source: `iana`, extensions: [`uvh`, `uvvh`] },
      "video/vnd.dece.mobile": { source: `iana`, extensions: [`uvm`, `uvvm`] },
      "video/vnd.dece.mp4": { source: `iana` },
      "video/vnd.dece.pd": { source: `iana`, extensions: [`uvp`, `uvvp`] },
      "video/vnd.dece.sd": { source: `iana`, extensions: [`uvs`, `uvvs`] },
      "video/vnd.dece.video": { source: `iana`, extensions: [`uvv`, `uvvv`] },
      "video/vnd.directv.mpeg": { source: `iana` },
      "video/vnd.directv.mpeg-tts": { source: `iana` },
      "video/vnd.dlna.mpeg-tts": { source: `iana` },
      "video/vnd.dvb.file": { source: `iana`, extensions: [`dvb`] },
      "video/vnd.fvt": { source: `iana`, extensions: [`fvt`] },
      "video/vnd.hns.video": { source: `iana` },
      "video/vnd.iptvforum.1dparityfec-1010": { source: `iana` },
      "video/vnd.iptvforum.1dparityfec-2005": { source: `iana` },
      "video/vnd.iptvforum.2dparityfec-1010": { source: `iana` },
      "video/vnd.iptvforum.2dparityfec-2005": { source: `iana` },
      "video/vnd.iptvforum.ttsavc": { source: `iana` },
      "video/vnd.iptvforum.ttsmpeg2": { source: `iana` },
      "video/vnd.motorola.video": { source: `iana` },
      "video/vnd.motorola.videop": { source: `iana` },
      "video/vnd.mpegurl": { source: `iana`, extensions: [`mxu`, `m4u`] },
      "video/vnd.ms-playready.media.pyv": { source: `iana`, extensions: [`pyv`] },
      "video/vnd.nokia.interleaved-multimedia": { source: `iana` },
      "video/vnd.nokia.mp4vr": { source: `iana` },
      "video/vnd.nokia.videovoip": { source: `iana` },
      "video/vnd.objectvideo": { source: `iana` },
      "video/vnd.radgamettools.bink": { source: `iana` },
      "video/vnd.radgamettools.smacker": { source: `iana` },
      "video/vnd.sealed.mpeg1": { source: `iana` },
      "video/vnd.sealed.mpeg4": { source: `iana` },
      "video/vnd.sealed.swf": { source: `iana` },
      "video/vnd.sealedmedia.softseal.mov": { source: `iana` },
      "video/vnd.uvvu.mp4": { source: `iana`, extensions: [`uvu`, `uvvu`] },
      "video/vnd.vivo": { source: `iana`, extensions: [`viv`] },
      "video/vnd.youtube.yt": { source: `iana` },
      "video/vp8": { source: `iana` },
      "video/vp9": { source: `iana` },
      "video/webm": { source: `apache`, compressible: !1, extensions: [`webm`] },
      "video/x-f4v": { source: `apache`, extensions: [`f4v`] },
      "video/x-fli": { source: `apache`, extensions: [`fli`] },
      "video/x-flv": { source: `apache`, compressible: !1, extensions: [`flv`] },
      "video/x-m4v": { source: `apache`, extensions: [`m4v`] },
      "video/x-matroska": {
        source: `apache`,
        compressible: !1,
        extensions: [`mkv`, `mk3d`, `mks`],
      },
      "video/x-mng": { source: `apache`, extensions: [`mng`] },
      "video/x-ms-asf": { source: `apache`, extensions: [`asf`, `asx`] },
      "video/x-ms-vob": { source: `apache`, extensions: [`vob`] },
      "video/x-ms-wm": { source: `apache`, extensions: [`wm`] },
      "video/x-ms-wmv": { source: `apache`, compressible: !1, extensions: [`wmv`] },
      "video/x-ms-wmx": { source: `apache`, extensions: [`wmx`] },
      "video/x-ms-wvx": { source: `apache`, extensions: [`wvx`] },
      "video/x-msvideo": { source: `apache`, extensions: [`avi`] },
      "video/x-sgi-movie": { source: `apache`, extensions: [`movie`] },
      "video/x-smv": { source: `apache`, extensions: [`smv`] },
      "x-conference/x-cooltalk": { source: `apache`, extensions: [`ice`] },
      "x-shader/x-fragment": { compressible: !0 },
      "x-shader/x-vertex": { compressible: !0 },
    };
  }),
  He = e.n((t, n) => {
    n.exports = (Ve(), e.a(ze).default);
  }),
  Ue = e.n((e) => {
    var t = He(),
      n = require("path").extname,
      r = /^\s*([^;\s]*)(?:;|\s|$)/,
      i = /^text\//i;
    ((e.charset = a),
      (e.charsets = { lookup: a }),
      (e.contentType = o),
      (e.extension = s),
      (e.extensions = Object.create(null)),
      (e.lookup = c),
      (e.types = Object.create(null)),
      l(e.extensions, e.types));
    function a(e) {
      if (!e || typeof e != `string`) return !1;
      var n = r.exec(e),
        a = n && t[n[1].toLowerCase()];
      return a && a.charset ? a.charset : n && i.test(n[1]) ? `UTF-8` : !1;
    }
    function o(t) {
      if (!t || typeof t != `string`) return !1;
      var n = t.indexOf(`/`) === -1 ? e.lookup(t) : t;
      if (!n) return !1;
      if (n.indexOf(`charset`) === -1) {
        var r = e.charset(n);
        r && (n += `; charset=` + r.toLowerCase());
      }
      return n;
    }
    function s(t) {
      if (!t || typeof t != `string`) return !1;
      var n = r.exec(t),
        i = n && e.extensions[n[1].toLowerCase()];
      return !i || !i.length ? !1 : i[0];
    }
    function c(t) {
      if (!t || typeof t != `string`) return !1;
      var r = n(`x.` + t)
        .toLowerCase()
        .substr(1);
      return (r && e.types[r]) || !1;
    }
    function l(e, n) {
      var r = [`nginx`, `apache`, void 0, `iana`];
      Object.keys(t).forEach(function (i) {
        var a = t[i],
          o = a.extensions;
        if (!(!o || !o.length)) {
          e[i] = o;
          for (var s = 0; s < o.length; s++) {
            var c = o[s];
            if (n[c]) {
              var l = r.indexOf(t[n[c]].source),
                u = r.indexOf(a.source);
              if (
                n[c] !== `application/octet-stream` &&
                (l > u || (l === u && n[c].substr(0, 12) === `application/`))
              )
                continue;
            }
            n[c] = i;
          }
        }
      });
    }
  }),
  We = Ue(),
  Ge = `-`,
  Ke = `fs`,
  qe = `index.html`,
  Je = `/@fs`,
  Ye = `app://${Ge}`,
  Xe = `app://${Ke}`;
function Ze() {
  o.protocol.registerSchemesAsPrivileged([
    { scheme: `app`, privileges: { standard: !0, secure: !0, stream: !0, supportFetchAPI: !0 } },
    {
      scheme: n.so,
      privileges: {
        allowServiceWorkers: !0,
        corsEnabled: !0,
        standard: !0,
        secure: !0,
        stream: !0,
        supportFetchAPI: !0,
      },
    },
  ]);
}
function Qe(e) {
  return (0, l.join)(e, `..`, `..`, `webview`);
}
function $e(e, t) {
  let n = new URL(`${Ye}/${qe}`);
  return (
    e && n.searchParams.set(`initialRoute`, e),
    t?.mcpAppSandboxLocalDevelopment === !0 &&
      n.searchParams.set(`mcpAppSandboxLocalDevelopment`, `1`),
    n.toString()
  );
}
function et(e, t) {
  let r = lt(e);
  if (!r) return null;
  try {
    if (ut(n.Qs(decodeURIComponent(r)))) return null;
  } catch {
    return null;
  }
  let i = new URL(e);
  if (i.protocol !== `app:`) return null;
  if (i.pathname.startsWith(Je)) return i.host === Ke ? dt(i.pathname) : null;
  if (i.host && i.host !== Ge) return null;
  let a = n.Qs(i.pathname ? i.pathname : `/`),
    o = a.startsWith(`/`) ? a.slice(1) : a,
    s = l.posix.normalize(o);
  if (s === `.` || s === ``) return (0, l.join)(t, qe);
  if (s.startsWith(`..`) || s.includes(`/..`)) return null;
  let c = (0, l.join)(t, ...s.split(`/`)),
    u = (0, l.relative)(t, c);
  return u.startsWith(`..`) || (0, l.isAbsolute)(u) ? null : c;
}
function tt(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.protocol !== `app:` || t.host !== Ke || !t.pathname.startsWith(Je)
    ? null
    : dt(t.pathname);
}
function nt(e) {
  (ot(),
    o.protocol.handle(`app`, async (t) => {
      let n = et(t.url, e);
      return n
        ? ft(n)
          ? pt(t, n)
          : process.platform === `win32`
            ? o.net.fetch((0, a.pathToFileURL)(n).toString())
            : rt(n)
        : new Response(null, { status: 404, statusText: `Not Found` });
    }));
}
async function rt(e) {
  let t;
  try {
    t = await (0, p.stat)(e);
  } catch {
    return new Response(null, { status: 404, statusText: `Not Found` });
  }
  if (!t.isFile()) return new Response(null, { status: 404, statusText: `Not Found` });
  let n = (0, We.lookup)(e);
  return new Response(v.Readable.toWeb((0, f.createReadStream)(e)), {
    headers: {
      "Content-Length": String(t.size),
      "Content-Type": typeof n == `string` ? n : `application/octet-stream`,
    },
  });
}
function it(e) {
  let t = st(e?.url);
  return t == null ? !1 : t === Ye || t === ct();
}
function at(e) {
  return !it(e.frame);
}
function ot() {
  o.session.defaultSession.webRequest.onBeforeRequest({ urls: [`${Xe}/*`] }, (e, t) => {
    t({ cancel: at(e) });
  });
}
function st(e) {
  if (e == null) return null;
  try {
    let t = new URL(e);
    return t.protocol === `app:` ? `app://${t.host}` : t.origin;
  } catch {
    return null;
  }
}
function ct() {
  if (o.app.isPackaged) return null;
  let e = process.env.ELECTRON_RENDERER_URL;
  if (e == null || e.trim().length === 0) return null;
  try {
    let t = new URL(e);
    return t.protocol !== `http:` && t.protocol !== `https:` ? null : t.origin;
  } catch {
    return null;
  }
}
function lt(e) {
  if (!e.startsWith(`app://`)) return null;
  let t = e.slice(6),
    n = t.indexOf(`/`);
  return (n >= 0 ? t.slice(n) : `/`).split(`?`)[0]?.split(`#`)[0] ?? null;
}
function ut(e) {
  return e.split(`/`).some((e) => e === `..` || /^\.\.[. ]+$/.test(e));
}
function dt(e, t = l.resolve) {
  let r = e.slice(4);
  if (!r) return null;
  let i;
  try {
    i = decodeURIComponent(r);
  } catch {
    return null;
  }
  let a = n.Qs(i);
  if (!n.Js(a)) return null;
  let o = t(n.$s(a)),
    s = (0, We.lookup)(o);
  return typeof s != `string` ||
    (!s.startsWith(`audio/`) && !s.startsWith(`image/`) && !s.startsWith(`video/`))
    ? null
    : o;
}
function ft(e) {
  let t = (0, We.lookup)(e);
  return typeof t == `string` && (t.startsWith(`audio/`) || t.startsWith(`video/`));
}
async function pt(e, t) {
  let n;
  try {
    n = await (0, p.stat)(t);
  } catch {
    return new Response(null, { status: 404, statusText: `Not Found` });
  }
  let r = (0, We.lookup)(t),
    i = new Headers({
      "Accept-Ranges": `bytes`,
      "Content-Type": typeof r == `string` ? r : `application/octet-stream`,
    }),
    a = e.headers.get(`range`);
  if (!a)
    return (
      i.set(`Content-Length`, String(n.size)),
      new Response(v.Readable.toWeb((0, f.createReadStream)(t)), { headers: i })
    );
  let o = mt(a, n.size);
  return o
    ? (i.set(`Content-Length`, String(o.end - o.start + 1)),
      i.set(`Content-Range`, `bytes ${o.start}-${o.end}/${n.size}`),
      new Response(v.Readable.toWeb((0, f.createReadStream)(t, { start: o.start, end: o.end })), {
        status: 206,
        statusText: `Partial Content`,
        headers: i,
      }))
    : (i.set(`Content-Range`, `bytes */${n.size}`),
      new Response(null, { status: 416, statusText: `Range Not Satisfiable`, headers: i }));
}
function mt(e, t) {
  let n = /^bytes=(\d*)-(\d*)$/.exec(e);
  if (!n) return null;
  let [, r, i] = n;
  if (r === `` && i === ``) return null;
  if (r === ``) {
    let e = Number(i);
    return e <= 0 || t === 0 ? null : { start: Math.max(t - e, 0), end: t - 1 };
  }
  let a = Number(r),
    o = i === `` ? t - 1 : Number(i);
  return a < 0 || o < a || a >= t ? null : { start: a, end: Math.min(o, t - 1) };
}
var ht = void 0,
  gt = r.i(`codex-build-number`);
function _t() {
  return (
    process.env.CODEX_BUILD_NUMBER?.trim() ||
    (o.app.isPackaged
      ? i.a(`codexBuildNumber`) ||
        (gt().error(`CodexBuildNumber missing from package metadata.`), null)
      : null)
  );
}
var vt = {
    get value() {
      return (ht === void 0 && (ht = _t()), ht);
    },
  },
  yt = `production-appcast-bootstrap.json`,
  bt = n.ru({ backendAppcastEnabled: n.Xl().optional(), installationId: n.fu().optional() }),
  xt = class {
    logger = r.i(`production-appcast-state`);
    filePath;
    state;
    constructor(e) {
      ((this.filePath = (0, l.join)(e, yt)), (this.state = this.readState()));
    }
    get backendAppcastEnabled() {
      return this.state.backendAppcastEnabled === !0;
    }
    getOrCreateInstallationId() {
      return this.state.installationId == null
        ? ((this.state.installationId = (0, d.randomUUID)()),
          this.persistState(),
          this.state.installationId)
        : this.state.installationId;
    }
    setBackendAppcastEnabled(e) {
      ((this.state.backendAppcastEnabled = e), this.persistState());
    }
    readState() {
      if (!(0, f.existsSync)(this.filePath)) return {};
      try {
        return bt.parse(JSON.parse((0, f.readFileSync)(this.filePath, `utf8`)));
      } catch (e) {
        return (
          this.logger().warning(`Failed to read production appcast state`, {
            safe: {},
            sensitive: { error: e },
          }),
          {}
        );
      }
    }
    persistState() {
      (0, f.mkdirSync)((0, l.dirname)(this.filePath), { recursive: !0 });
      let e = `${this.filePath}.${(0, d.randomUUID)()}.tmp`;
      try {
        ((0, f.writeFileSync)(e, JSON.stringify(this.state), `utf8`),
          (0, f.renameSync)(e, this.filePath));
      } catch (t) {
        throw ((0, f.rmSync)(e, { force: !0 }), t);
      }
    }
  },
  St = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e._globalThis = void 0),
      (e._globalThis = typeof globalThis == `object` ? globalThis : global));
  }),
  Ct = e.n((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              (r === void 0 && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(St(), e));
  }),
  wt = e.n((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              (r === void 0 && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(Ct(), e));
  }),
  Tt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.VERSION = void 0),
      (e.VERSION = `1.9.0`));
  }),
  Et = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.isCompatible = e._makeCompatibilityCheck = void 0));
    var t = Tt(),
      n = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function r(e) {
      let t = new Set([e]),
        r = new Set(),
        i = e.match(n);
      if (!i) return () => !1;
      let a = { major: +i[1], minor: +i[2], patch: +i[3], prerelease: i[4] };
      if (a.prerelease != null)
        return function (t) {
          return t === e;
        };
      function o(e) {
        return (r.add(e), !1);
      }
      function s(e) {
        return (t.add(e), !0);
      }
      return function (e) {
        if (t.has(e)) return !0;
        if (r.has(e)) return !1;
        let i = e.match(n);
        if (!i) return o(e);
        let c = { major: +i[1], minor: +i[2], patch: +i[3], prerelease: i[4] };
        return c.prerelease != null || a.major !== c.major
          ? o(e)
          : a.major === 0
            ? a.minor === c.minor && a.patch <= c.patch
              ? s(e)
              : o(e)
            : a.minor <= c.minor
              ? s(e)
              : o(e);
      };
    }
    ((e._makeCompatibilityCheck = r), (e.isCompatible = r(t.VERSION)));
  }),
  E = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.unregisterGlobal = e.getGlobal = e.registerGlobal = void 0));
    var t = wt(),
      n = Tt(),
      r = Et(),
      i = n.VERSION.split(`.`)[0],
      a = Symbol.for(`opentelemetry.js.api.${i}`),
      o = t._globalThis;
    function s(e, t, r, i = !1) {
      let s = (o[a] = o[a] ?? { version: n.VERSION });
      if (!i && s[e]) {
        let t = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
        return (r.error(t.stack || t.message), !1);
      }
      if (s.version !== n.VERSION) {
        let t = Error(
          `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${n.VERSION}`,
        );
        return (r.error(t.stack || t.message), !1);
      }
      return (
        (s[e] = t), r.debug(`@opentelemetry/api: Registered a global for ${e} v${n.VERSION}.`), !0
      );
    }
    e.registerGlobal = s;
    function c(e) {
      let t = o[a]?.version;
      if (!(!t || !(0, r.isCompatible)(t))) return o[a]?.[e];
    }
    e.getGlobal = c;
    function l(e, t) {
      t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${n.VERSION}.`);
      let r = o[a];
      r && delete r[e];
    }
    e.unregisterGlobal = l;
  }),
  Dt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagComponentLogger = void 0));
    var t = E();
    e.DiagComponentLogger = class {
      constructor(e) {
        this._namespace = e.namespace || `DiagComponentLogger`;
      }
      debug(...e) {
        return n(`debug`, this._namespace, e);
      }
      error(...e) {
        return n(`error`, this._namespace, e);
      }
      info(...e) {
        return n(`info`, this._namespace, e);
      }
      warn(...e) {
        return n(`warn`, this._namespace, e);
      }
      verbose(...e) {
        return n(`verbose`, this._namespace, e);
      }
    };
    function n(e, n, r) {
      let i = (0, t.getGlobal)(`diag`);
      if (i) return (r.unshift(n), i[e](...r));
    }
  }),
  Ot = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DiagLogLevel = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`),
          (e[(e.ERROR = 30)] = `ERROR`),
          (e[(e.WARN = 50)] = `WARN`),
          (e[(e.INFO = 60)] = `INFO`),
          (e[(e.DEBUG = 70)] = `DEBUG`),
          (e[(e.VERBOSE = 80)] = `VERBOSE`),
          (e[(e.ALL = 9999)] = `ALL`));
      })((e.DiagLogLevel ||= {})));
  }),
  kt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createLogLevelDiagLogger = void 0));
    var t = Ot();
    function n(e, n) {
      (e < t.DiagLogLevel.NONE
        ? (e = t.DiagLogLevel.NONE)
        : e > t.DiagLogLevel.ALL && (e = t.DiagLogLevel.ALL),
        (n ||= {}));
      function r(t, r) {
        let i = n[t];
        return typeof i == `function` && e >= r ? i.bind(n) : function () {};
      }
      return {
        error: r(`error`, t.DiagLogLevel.ERROR),
        warn: r(`warn`, t.DiagLogLevel.WARN),
        info: r(`info`, t.DiagLogLevel.INFO),
        debug: r(`debug`, t.DiagLogLevel.DEBUG),
        verbose: r(`verbose`, t.DiagLogLevel.VERBOSE),
      };
    }
    e.createLogLevelDiagLogger = n;
  }),
  D = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagAPI = void 0));
    var t = Dt(),
      n = kt(),
      r = Ot(),
      i = E(),
      a = `diag`;
    e.DiagAPI = class e {
      constructor() {
        function e(e) {
          return function (...t) {
            let n = (0, i.getGlobal)(`diag`);
            if (n) return n[e](...t);
          };
        }
        let o = this;
        ((o.setLogger = (e, t = { logLevel: r.DiagLogLevel.INFO }) => {
          if (e === o) {
            let e = Error(
              `Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation`,
            );
            return (o.error(e.stack ?? e.message), !1);
          }
          typeof t == `number` && (t = { logLevel: t });
          let a = (0, i.getGlobal)(`diag`),
            s = (0, n.createLogLevelDiagLogger)(t.logLevel ?? r.DiagLogLevel.INFO, e);
          if (a && !t.suppressOverrideMessage) {
            let e = Error().stack ?? `<failed to generate stacktrace>`;
            (a.warn(`Current logger will be overwritten from ${e}`),
              s.warn(`Current logger will overwrite one already registered from ${e}`));
          }
          return (0, i.registerGlobal)(`diag`, s, o, !0);
        }),
          (o.disable = () => {
            (0, i.unregisterGlobal)(a, o);
          }),
          (o.createComponentLogger = (e) => new t.DiagComponentLogger(e)),
          (o.verbose = e(`verbose`)),
          (o.debug = e(`debug`)),
          (o.info = e(`info`)),
          (o.warn = e(`warn`)),
          (o.error = e(`error`)));
      }
      static instance() {
        return ((this._instance ||= new e()), this._instance);
      }
    };
  }),
  At = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.BaggageImpl = void 0),
      (e.BaggageImpl = class e {
        constructor(e) {
          this._entries = e ? new Map(e) : new Map();
        }
        getEntry(e) {
          let t = this._entries.get(e);
          if (t) return Object.assign({}, t);
        }
        getAllEntries() {
          return Array.from(this._entries.entries()).map(([e, t]) => [e, t]);
        }
        setEntry(t, n) {
          let r = new e(this._entries);
          return (r._entries.set(t, n), r);
        }
        removeEntry(t) {
          let n = new e(this._entries);
          return (n._entries.delete(t), n);
        }
        removeEntries(...t) {
          let n = new e(this._entries);
          for (let e of t) n._entries.delete(e);
          return n;
        }
        clear() {
          return new e();
        }
      }));
  }),
  jt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataSymbol = void 0),
      (e.baggageEntryMetadataSymbol = Symbol(`BaggageEntryMetadata`)));
  }),
  Mt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.baggageEntryMetadataFromString = e.createBaggage = void 0));
    var t = D(),
      n = At(),
      r = jt(),
      i = t.DiagAPI.instance();
    function a(e = {}) {
      return new n.BaggageImpl(new Map(Object.entries(e)));
    }
    e.createBaggage = a;
    function o(e) {
      return (
        typeof e != `string` &&
          (i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`), (e = ``)),
        {
          __TYPE__: r.baggageEntryMetadataSymbol,
          toString() {
            return e;
          },
        }
      );
    }
    e.baggageEntryMetadataFromString = o;
  }),
  Nt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ROOT_CONTEXT = e.createContextKey = void 0));
    function t(e) {
      return Symbol.for(e);
    }
    ((e.createContextKey = t),
      (e.ROOT_CONTEXT = new (class e {
        constructor(t) {
          let n = this;
          ((n._currentContext = t ? new Map(t) : new Map()),
            (n.getValue = (e) => n._currentContext.get(e)),
            (n.setValue = (t, r) => {
              let i = new e(n._currentContext);
              return (i._currentContext.set(t, r), i);
            }),
            (n.deleteValue = (t) => {
              let r = new e(n._currentContext);
              return (r._currentContext.delete(t), r);
            }));
        }
      })()));
  }),
  Pt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiagConsoleLogger = void 0));
    var t = [
      { n: `error`, c: `error` },
      { n: `warn`, c: `warn` },
      { n: `info`, c: `info` },
      { n: `debug`, c: `debug` },
      { n: `verbose`, c: `trace` },
    ];
    e.DiagConsoleLogger = class {
      constructor() {
        function e(e) {
          return function (...t) {
            if (console) {
              let n = console[e];
              if ((typeof n != `function` && (n = console.log), typeof n == `function`))
                return n.apply(console, t);
            }
          };
        }
        for (let n = 0; n < t.length; n++) this[t[n].n] = e(t[n].c);
      }
    };
  }),
  Ft = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.createNoopMeter =
        e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
        e.NOOP_OBSERVABLE_GAUGE_METRIC =
        e.NOOP_OBSERVABLE_COUNTER_METRIC =
        e.NOOP_UP_DOWN_COUNTER_METRIC =
        e.NOOP_HISTOGRAM_METRIC =
        e.NOOP_GAUGE_METRIC =
        e.NOOP_COUNTER_METRIC =
        e.NOOP_METER =
        e.NoopObservableUpDownCounterMetric =
        e.NoopObservableGaugeMetric =
        e.NoopObservableCounterMetric =
        e.NoopObservableMetric =
        e.NoopHistogramMetric =
        e.NoopGaugeMetric =
        e.NoopUpDownCounterMetric =
        e.NoopCounterMetric =
        e.NoopMetric =
        e.NoopMeter =
          void 0));
    var t = class {
      constructor() {}
      createGauge(t, n) {
        return e.NOOP_GAUGE_METRIC;
      }
      createHistogram(t, n) {
        return e.NOOP_HISTOGRAM_METRIC;
      }
      createCounter(t, n) {
        return e.NOOP_COUNTER_METRIC;
      }
      createUpDownCounter(t, n) {
        return e.NOOP_UP_DOWN_COUNTER_METRIC;
      }
      createObservableGauge(t, n) {
        return e.NOOP_OBSERVABLE_GAUGE_METRIC;
      }
      createObservableCounter(t, n) {
        return e.NOOP_OBSERVABLE_COUNTER_METRIC;
      }
      createObservableUpDownCounter(t, n) {
        return e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      }
      addBatchObservableCallback(e, t) {}
      removeBatchObservableCallback(e) {}
    };
    e.NoopMeter = t;
    var n = class {};
    e.NoopMetric = n;
    var r = class extends n {
      add(e, t) {}
    };
    e.NoopCounterMetric = r;
    var i = class extends n {
      add(e, t) {}
    };
    e.NoopUpDownCounterMetric = i;
    var a = class extends n {
      record(e, t) {}
    };
    e.NoopGaugeMetric = a;
    var o = class extends n {
      record(e, t) {}
    };
    e.NoopHistogramMetric = o;
    var s = class {
      addCallback(e) {}
      removeCallback(e) {}
    };
    e.NoopObservableMetric = s;
    var c = class extends s {};
    e.NoopObservableCounterMetric = c;
    var l = class extends s {};
    e.NoopObservableGaugeMetric = l;
    var u = class extends s {};
    ((e.NoopObservableUpDownCounterMetric = u),
      (e.NOOP_METER = new t()),
      (e.NOOP_COUNTER_METRIC = new r()),
      (e.NOOP_GAUGE_METRIC = new a()),
      (e.NOOP_HISTOGRAM_METRIC = new o()),
      (e.NOOP_UP_DOWN_COUNTER_METRIC = new i()),
      (e.NOOP_OBSERVABLE_COUNTER_METRIC = new c()),
      (e.NOOP_OBSERVABLE_GAUGE_METRIC = new l()),
      (e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u()));
    function d() {
      return e.NOOP_METER;
    }
    e.createNoopMeter = d;
  }),
  It = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueType = void 0),
      (function (e) {
        ((e[(e.INT = 0)] = `INT`), (e[(e.DOUBLE = 1)] = `DOUBLE`));
      })((e.ValueType ||= {})));
  }),
  Lt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.defaultTextMapSetter = e.defaultTextMapGetter = void 0),
      (e.defaultTextMapGetter = {
        get(e, t) {
          if (e != null) return e[t];
        },
        keys(e) {
          return e == null ? [] : Object.keys(e);
        },
      }),
      (e.defaultTextMapSetter = {
        set(e, t, n) {
          e != null && (e[t] = n);
        },
      }));
  }),
  Rt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopContextManager = void 0));
    var t = Nt();
    e.NoopContextManager = class {
      active() {
        return t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        return t.call(n, ...r);
      }
      bind(e, t) {
        return t;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
  }),
  zt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ContextAPI = void 0));
    var t = Rt(),
      n = E(),
      r = D(),
      i = `context`,
      a = new t.NoopContextManager();
    e.ContextAPI = class e {
      constructor() {}
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalContextManager(e) {
        return (0, n.registerGlobal)(i, e, r.DiagAPI.instance());
      }
      active() {
        return this._getContextManager().active();
      }
      with(e, t, n, ...r) {
        return this._getContextManager().with(e, t, n, ...r);
      }
      bind(e, t) {
        return this._getContextManager().bind(e, t);
      }
      _getContextManager() {
        return (0, n.getGlobal)(i) || a;
      }
      disable() {
        (this._getContextManager().disable(), (0, n.unregisterGlobal)(i, r.DiagAPI.instance()));
      }
    };
  }),
  Bt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.TraceFlags = void 0),
      (function (e) {
        ((e[(e.NONE = 0)] = `NONE`), (e[(e.SAMPLED = 1)] = `SAMPLED`));
      })((e.TraceFlags ||= {})));
  }),
  Vt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = void 0));
    var t = Bt();
    ((e.INVALID_SPANID = `0000000000000000`),
      (e.INVALID_TRACEID = `00000000000000000000000000000000`),
      (e.INVALID_SPAN_CONTEXT = {
        traceId: e.INVALID_TRACEID,
        spanId: e.INVALID_SPANID,
        traceFlags: t.TraceFlags.NONE,
      }));
  }),
  Ht = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NonRecordingSpan = void 0));
    var t = Vt();
    e.NonRecordingSpan = class {
      constructor(e = t.INVALID_SPAN_CONTEXT) {
        this._spanContext = e;
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e, t) {
        return this;
      }
      setAttributes(e) {
        return this;
      }
      addEvent(e, t) {
        return this;
      }
      addLink(e) {
        return this;
      }
      addLinks(e) {
        return this;
      }
      setStatus(e) {
        return this;
      }
      updateName(e) {
        return this;
      }
      end(e) {}
      isRecording() {
        return !1;
      }
      recordException(e, t) {}
    };
  }),
  Ut = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSpanContext =
        e.setSpanContext =
        e.deleteSpan =
        e.setSpan =
        e.getActiveSpan =
        e.getSpan =
          void 0));
    var t = Nt(),
      n = Ht(),
      r = zt(),
      i = (0, t.createContextKey)(`OpenTelemetry Context Key SPAN`);
    function a(e) {
      return e.getValue(i) || void 0;
    }
    e.getSpan = a;
    function o() {
      return a(r.ContextAPI.getInstance().active());
    }
    e.getActiveSpan = o;
    function s(e, t) {
      return e.setValue(i, t);
    }
    e.setSpan = s;
    function c(e) {
      return e.deleteValue(i);
    }
    e.deleteSpan = c;
    function l(e, t) {
      return s(e, new n.NonRecordingSpan(t));
    }
    e.setSpanContext = l;
    function u(e) {
      return a(e)?.spanContext();
    }
    e.getSpanContext = u;
  }),
  Wt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.wrapSpanContext = e.isSpanContextValid = e.isValidSpanId = e.isValidTraceId = void 0));
    var t = Vt(),
      n = Ht(),
      r = /^([0-9a-f]{32})$/i,
      i = /^[0-9a-f]{16}$/i;
    function a(e) {
      return r.test(e) && e !== t.INVALID_TRACEID;
    }
    e.isValidTraceId = a;
    function o(e) {
      return i.test(e) && e !== t.INVALID_SPANID;
    }
    e.isValidSpanId = o;
    function s(e) {
      return a(e.traceId) && o(e.spanId);
    }
    e.isSpanContextValid = s;
    function c(e) {
      return new n.NonRecordingSpan(e);
    }
    e.wrapSpanContext = c;
  }),
  Gt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracer = void 0));
    var t = zt(),
      n = Ut(),
      r = Ht(),
      i = Wt(),
      a = t.ContextAPI.getInstance();
    e.NoopTracer = class {
      startSpan(e, t, s = a.active()) {
        if (t?.root) return new r.NonRecordingSpan();
        let c = s && (0, n.getSpanContext)(s);
        return o(c) && (0, i.isSpanContextValid)(c)
          ? new r.NonRecordingSpan(c)
          : new r.NonRecordingSpan();
      }
      startActiveSpan(e, t, r, i) {
        let o, s, c;
        if (arguments.length < 2) return;
        arguments.length === 2
          ? (c = t)
          : arguments.length === 3
            ? ((o = t), (c = r))
            : ((o = t), (s = r), (c = i));
        let l = s ?? a.active(),
          u = this.startSpan(e, o, l),
          d = (0, n.setSpan)(l, u);
        return a.with(d, c, void 0, u);
      }
    };
    function o(e) {
      return (
        typeof e == `object` &&
        typeof e.spanId == `string` &&
        typeof e.traceId == `string` &&
        typeof e.traceFlags == `number`
      );
    }
  }),
  Kt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracer = void 0));
    var t = new (Gt().NoopTracer)();
    e.ProxyTracer = class {
      constructor(e, t, n, r) {
        ((this._provider = e), (this.name = t), (this.version = n), (this.options = r));
      }
      startSpan(e, t, n) {
        return this._getTracer().startSpan(e, t, n);
      }
      startActiveSpan(e, t, n, r) {
        let i = this._getTracer();
        return Reflect.apply(i.startActiveSpan, i, arguments);
      }
      _getTracer() {
        if (this._delegate) return this._delegate;
        let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e ? ((this._delegate = e), this._delegate) : t;
      }
    };
  }),
  qt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.NoopTracerProvider = void 0));
    var t = Gt();
    e.NoopTracerProvider = class {
      getTracer(e, n, r) {
        return new t.NoopTracer();
      }
    };
  }),
  Jt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.ProxyTracerProvider = void 0));
    var t = Kt(),
      n = new (qt().NoopTracerProvider)();
    e.ProxyTracerProvider = class {
      getTracer(e, n, r) {
        return this.getDelegateTracer(e, n, r) ?? new t.ProxyTracer(this, e, n, r);
      }
      getDelegate() {
        return this._delegate ?? n;
      }
      setDelegate(e) {
        this._delegate = e;
      }
      getDelegateTracer(e, t, n) {
        return this._delegate?.getTracer(e, t, n);
      }
    };
  }),
  Yt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SamplingDecision = void 0),
      (function (e) {
        ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
          (e[(e.RECORD = 1)] = `RECORD`),
          (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
      })((e.SamplingDecision ||= {})));
  }),
  Xt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanKind = void 0),
      (function (e) {
        ((e[(e.INTERNAL = 0)] = `INTERNAL`),
          (e[(e.SERVER = 1)] = `SERVER`),
          (e[(e.CLIENT = 2)] = `CLIENT`),
          (e[(e.PRODUCER = 3)] = `PRODUCER`),
          (e[(e.CONSUMER = 4)] = `CONSUMER`));
      })((e.SpanKind ||= {})));
  }),
  Zt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SpanStatusCode = void 0),
      (function (e) {
        ((e[(e.UNSET = 0)] = `UNSET`), (e[(e.OK = 1)] = `OK`), (e[(e.ERROR = 2)] = `ERROR`));
      })((e.SpanStatusCode ||= {})));
  }),
  Qt = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateValue = e.validateKey = void 0));
    var t = `[_0-9a-z-*/]`,
      n = RegExp(`^(?:${`[a-z]${t}{0,255}`}|${`[a-z0-9]${t}{0,240}@[a-z]${t}{0,13}`})$`),
      r = /^[ -~]{0,255}[!-~]$/,
      i = /,|=/;
    function a(e) {
      return n.test(e);
    }
    e.validateKey = a;
    function o(e) {
      return r.test(e) && !i.test(e);
    }
    e.validateValue = o;
  }),
  $t = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceStateImpl = void 0));
    var t = Qt(),
      n = 32,
      r = 512,
      i = `,`,
      a = `=`;
    e.TraceStateImpl = class e {
      constructor(e) {
        ((this._internalState = new Map()), e && this._parse(e));
      }
      set(e, t) {
        let n = this._clone();
        return (
          n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n
        );
      }
      unset(e) {
        let t = this._clone();
        return (t._internalState.delete(e), t);
      }
      get(e) {
        return this._internalState.get(e);
      }
      serialize() {
        return this._keys()
          .reduce((e, t) => (e.push(t + a + this.get(t)), e), [])
          .join(i);
      }
      _parse(e) {
        e.length > r ||
          ((this._internalState = e
            .split(i)
            .reverse()
            .reduce((e, n) => {
              let r = n.trim(),
                i = r.indexOf(a);
              if (i !== -1) {
                let a = r.slice(0, i),
                  o = r.slice(i + 1, n.length);
                (0, t.validateKey)(a) && (0, t.validateValue)(o) && e.set(a, o);
              }
              return e;
            }, new Map())),
          this._internalState.size > n &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, n),
            )));
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        let t = new e();
        return ((t._internalState = new Map(this._internalState)), t);
      }
    };
  }),
  en = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createTraceState = void 0));
    var t = $t();
    function n(e) {
      return new t.TraceStateImpl(e);
    }
    e.createTraceState = n;
  }),
  tn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.context = void 0),
      (e.context = zt().ContextAPI.getInstance()));
  }),
  nn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.diag = void 0),
      (e.diag = D().DiagAPI.instance()));
  }),
  rn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NOOP_METER_PROVIDER = e.NoopMeterProvider = void 0));
    var t = Ft(),
      n = class {
        getMeter(e, n, r) {
          return t.NOOP_METER;
        }
      };
    ((e.NoopMeterProvider = n), (e.NOOP_METER_PROVIDER = new n()));
  }),
  an = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.MetricsAPI = void 0));
    var t = rn(),
      n = E(),
      r = D(),
      i = `metrics`;
    e.MetricsAPI = class e {
      constructor() {}
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalMeterProvider(e) {
        return (0, n.registerGlobal)(i, e, r.DiagAPI.instance());
      }
      getMeterProvider() {
        return (0, n.getGlobal)(i) || t.NOOP_METER_PROVIDER;
      }
      getMeter(e, t, n) {
        return this.getMeterProvider().getMeter(e, t, n);
      }
      disable() {
        (0, n.unregisterGlobal)(i, r.DiagAPI.instance());
      }
    };
  }),
  on = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.metrics = void 0),
      (e.metrics = an().MetricsAPI.getInstance()));
  }),
  sn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.NoopTextMapPropagator = void 0),
      (e.NoopTextMapPropagator = class {
        inject(e, t) {}
        extract(e, t) {
          return e;
        }
        fields() {
          return [];
        }
      }));
  }),
  cn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.deleteBaggage = e.setBaggage = e.getActiveBaggage = e.getBaggage = void 0));
    var t = zt(),
      n = (0, Nt().createContextKey)(`OpenTelemetry Baggage Key`);
    function r(e) {
      return e.getValue(n) || void 0;
    }
    e.getBaggage = r;
    function i() {
      return r(t.ContextAPI.getInstance().active());
    }
    e.getActiveBaggage = i;
    function a(e, t) {
      return e.setValue(n, t);
    }
    e.setBaggage = a;
    function o(e) {
      return e.deleteValue(n);
    }
    e.deleteBaggage = o;
  }),
  ln = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.PropagationAPI = void 0));
    var t = E(),
      n = sn(),
      r = Lt(),
      i = cn(),
      a = Mt(),
      o = D(),
      s = `propagation`,
      c = new n.NoopTextMapPropagator();
    e.PropagationAPI = class e {
      constructor() {
        ((this.createBaggage = a.createBaggage),
          (this.getBaggage = i.getBaggage),
          (this.getActiveBaggage = i.getActiveBaggage),
          (this.setBaggage = i.setBaggage),
          (this.deleteBaggage = i.deleteBaggage));
      }
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalPropagator(e) {
        return (0, t.registerGlobal)(s, e, o.DiagAPI.instance());
      }
      inject(e, t, n = r.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e, t, n);
      }
      extract(e, t, n = r.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e, t, n);
      }
      fields() {
        return this._getGlobalPropagator().fields();
      }
      disable() {
        (0, t.unregisterGlobal)(s, o.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, t.getGlobal)(s) || c;
      }
    };
  }),
  un = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.propagation = void 0),
      (e.propagation = ln().PropagationAPI.getInstance()));
  }),
  dn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.TraceAPI = void 0));
    var t = E(),
      n = Jt(),
      r = Wt(),
      i = Ut(),
      a = D(),
      o = `trace`;
    e.TraceAPI = class e {
      constructor() {
        ((this._proxyTracerProvider = new n.ProxyTracerProvider()),
          (this.wrapSpanContext = r.wrapSpanContext),
          (this.isSpanContextValid = r.isSpanContextValid),
          (this.deleteSpan = i.deleteSpan),
          (this.getSpan = i.getSpan),
          (this.getActiveSpan = i.getActiveSpan),
          (this.getSpanContext = i.getSpanContext),
          (this.setSpan = i.setSpan),
          (this.setSpanContext = i.setSpanContext));
      }
      static getInstance() {
        return ((this._instance ||= new e()), this._instance);
      }
      setGlobalTracerProvider(e) {
        let n = (0, t.registerGlobal)(o, this._proxyTracerProvider, a.DiagAPI.instance());
        return (n && this._proxyTracerProvider.setDelegate(e), n);
      }
      getTracerProvider() {
        return (0, t.getGlobal)(o) || this._proxyTracerProvider;
      }
      getTracer(e, t) {
        return this.getTracerProvider().getTracer(e, t);
      }
      disable() {
        ((0, t.unregisterGlobal)(o, a.DiagAPI.instance()),
          (this._proxyTracerProvider = new n.ProxyTracerProvider()));
      }
    };
  }),
  fn = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace = void 0),
      (e.trace = dn().TraceAPI.getInstance()));
  }),
  O = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.trace =
        e.propagation =
        e.metrics =
        e.diag =
        e.context =
        e.INVALID_SPAN_CONTEXT =
        e.INVALID_TRACEID =
        e.INVALID_SPANID =
        e.isValidSpanId =
        e.isValidTraceId =
        e.isSpanContextValid =
        e.createTraceState =
        e.TraceFlags =
        e.SpanStatusCode =
        e.SpanKind =
        e.SamplingDecision =
        e.ProxyTracerProvider =
        e.ProxyTracer =
        e.defaultTextMapSetter =
        e.defaultTextMapGetter =
        e.ValueType =
        e.createNoopMeter =
        e.DiagLogLevel =
        e.DiagConsoleLogger =
        e.ROOT_CONTEXT =
        e.createContextKey =
        e.baggageEntryMetadataFromString =
          void 0));
    var t = Mt();
    Object.defineProperty(e, "baggageEntryMetadataFromString", {
      enumerable: !0,
      get: function () {
        return t.baggageEntryMetadataFromString;
      },
    });
    var n = Nt();
    (Object.defineProperty(e, "createContextKey", {
      enumerable: !0,
      get: function () {
        return n.createContextKey;
      },
    }),
      Object.defineProperty(e, "ROOT_CONTEXT", {
        enumerable: !0,
        get: function () {
          return n.ROOT_CONTEXT;
        },
      }));
    var r = Pt();
    Object.defineProperty(e, "DiagConsoleLogger", {
      enumerable: !0,
      get: function () {
        return r.DiagConsoleLogger;
      },
    });
    var i = Ot();
    Object.defineProperty(e, "DiagLogLevel", {
      enumerable: !0,
      get: function () {
        return i.DiagLogLevel;
      },
    });
    var a = Ft();
    Object.defineProperty(e, "createNoopMeter", {
      enumerable: !0,
      get: function () {
        return a.createNoopMeter;
      },
    });
    var o = It();
    Object.defineProperty(e, "ValueType", {
      enumerable: !0,
      get: function () {
        return o.ValueType;
      },
    });
    var s = Lt();
    (Object.defineProperty(e, "defaultTextMapGetter", {
      enumerable: !0,
      get: function () {
        return s.defaultTextMapGetter;
      },
    }),
      Object.defineProperty(e, "defaultTextMapSetter", {
        enumerable: !0,
        get: function () {
          return s.defaultTextMapSetter;
        },
      }));
    var c = Kt();
    Object.defineProperty(e, "ProxyTracer", {
      enumerable: !0,
      get: function () {
        return c.ProxyTracer;
      },
    });
    var l = Jt();
    Object.defineProperty(e, "ProxyTracerProvider", {
      enumerable: !0,
      get: function () {
        return l.ProxyTracerProvider;
      },
    });
    var u = Yt();
    Object.defineProperty(e, "SamplingDecision", {
      enumerable: !0,
      get: function () {
        return u.SamplingDecision;
      },
    });
    var d = Xt();
    Object.defineProperty(e, "SpanKind", {
      enumerable: !0,
      get: function () {
        return d.SpanKind;
      },
    });
    var f = Zt();
    Object.defineProperty(e, "SpanStatusCode", {
      enumerable: !0,
      get: function () {
        return f.SpanStatusCode;
      },
    });
    var p = Bt();
    Object.defineProperty(e, "TraceFlags", {
      enumerable: !0,
      get: function () {
        return p.TraceFlags;
      },
    });
    var m = en();
    Object.defineProperty(e, "createTraceState", {
      enumerable: !0,
      get: function () {
        return m.createTraceState;
      },
    });
    var h = Wt();
    (Object.defineProperty(e, "isSpanContextValid", {
      enumerable: !0,
      get: function () {
        return h.isSpanContextValid;
      },
    }),
      Object.defineProperty(e, "isValidTraceId", {
        enumerable: !0,
        get: function () {
          return h.isValidTraceId;
        },
      }),
      Object.defineProperty(e, "isValidSpanId", {
        enumerable: !0,
        get: function () {
          return h.isValidSpanId;
        },
      }));
    var g = Vt();
    (Object.defineProperty(e, "INVALID_SPANID", {
      enumerable: !0,
      get: function () {
        return g.INVALID_SPANID;
      },
    }),
      Object.defineProperty(e, "INVALID_TRACEID", {
        enumerable: !0,
        get: function () {
          return g.INVALID_TRACEID;
        },
      }),
      Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
        enumerable: !0,
        get: function () {
          return g.INVALID_SPAN_CONTEXT;
        },
      }));
    var _ = tn();
    Object.defineProperty(e, "context", {
      enumerable: !0,
      get: function () {
        return _.context;
      },
    });
    var v = nn();
    Object.defineProperty(e, "diag", {
      enumerable: !0,
      get: function () {
        return v.diag;
      },
    });
    var y = on();
    Object.defineProperty(e, "metrics", {
      enumerable: !0,
      get: function () {
        return y.metrics;
      },
    });
    var b = un();
    Object.defineProperty(e, "propagation", {
      enumerable: !0,
      get: function () {
        return b.propagation;
      },
    });
    var x = fn();
    (Object.defineProperty(e, "trace", {
      enumerable: !0,
      get: function () {
        return x.trace;
      },
    }),
      (e.default = {
        context: _.context,
        diag: v.diag,
        metrics: y.metrics,
        propagation: b.propagation,
        trace: x.trace,
      }));
  });
function k(e) {
  return e.setValue(hn, !0);
}
function pn(e) {
  return e.deleteValue(hn);
}
function A(e) {
  return e.getValue(hn) === !0;
}
var mn,
  hn,
  gn = e.r(() => {
    ((mn = e.o(O())),
      (hn = (0, mn.createContextKey)(`OpenTelemetry SDK Context Key SUPPRESS_TRACING`)));
  }),
  _n,
  vn,
  yn = e.r(() => {
    ((_n = `baggage`), (vn = 4096));
  });
function bn(e) {
  return e.reduce((e, t) => {
    let n = `${e}${e === `` ? `` : `,`}${t}`;
    return n.length > 8192 ? e : n;
  }, ``);
}
function xn(e) {
  return e.getAllEntries().map(([e, t]) => {
    let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
    return (t.metadata !== void 0 && (n += `;` + t.metadata.toString()), n);
  });
}
function Sn(e) {
  let t = e.split(`;`);
  if (t.length <= 0) return;
  let n = t.shift();
  if (!n) return;
  let r = n.indexOf(`=`);
  if (r <= 0) return;
  let i = decodeURIComponent(n.substring(0, r).trim()),
    a = decodeURIComponent(n.substring(r + 1).trim()),
    o;
  return (
    t.length > 0 && (o = (0, wn.baggageEntryMetadataFromString)(t.join(`;`))),
    { key: i, value: a, metadata: o }
  );
}
function Cn(e) {
  let t = {};
  return (
    typeof e == `string` &&
      e.length > 0 &&
      e.split(`,`).forEach((e) => {
        let n = Sn(e);
        n !== void 0 && n.value.length > 0 && (t[n.key] = n.value);
      }),
    t
  );
}
var wn,
  Tn = e.r(() => {
    ((wn = e.o(O())), yn());
  }),
  En,
  Dn,
  On = e.r(() => {
    ((En = e.o(O())),
      gn(),
      yn(),
      Tn(),
      (Dn = class {
        inject(e, t, n) {
          let r = En.propagation.getBaggage(e);
          if (!r || A(e)) return;
          let i = bn(
            xn(r)
              .filter((e) => e.length <= vn)
              .slice(0, 180),
          );
          i.length > 0 && n.set(t, _n, i);
        }
        extract(e, t, n) {
          let r = n.get(t, _n),
            i = Array.isArray(r) ? r.join(`,`) : r;
          if (!i) return e;
          let a = {};
          return i.length === 0 ||
            (i.split(`,`).forEach((e) => {
              let t = Sn(e);
              if (t) {
                let e = { value: t.value };
                (t.metadata && (e.metadata = t.metadata), (a[t.key] = e));
              }
            }),
            Object.entries(a).length === 0)
            ? e
            : En.propagation.setBaggage(e, En.propagation.createBaggage(a));
        }
        fields() {
          return [_n];
        }
      }));
  }),
  kn,
  An = e.r(() => {
    kn = class {
      _monotonicClock;
      _epochMillis;
      _performanceMillis;
      constructor(e, t) {
        ((this._monotonicClock = t),
          (this._epochMillis = e.now()),
          (this._performanceMillis = t.now()));
      }
      now() {
        let e = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + e;
      }
    };
  });
function jn(e) {
  let t = {};
  if (typeof e != `object` || !e) return t;
  for (let n in e) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
    if (!Mn(n)) {
      In.diag.warn(`Invalid attribute key: ${n}`);
      continue;
    }
    let r = e[n];
    if (!Nn(r)) {
      In.diag.warn(`Invalid attribute value set for key: ${n}`);
      continue;
    }
    Array.isArray(r) ? (t[n] = r.slice()) : (t[n] = r);
  }
  return t;
}
function Mn(e) {
  return typeof e == `string` && e !== ``;
}
function Nn(e) {
  return e == null ? !0 : Array.isArray(e) ? Pn(e) : Fn(typeof e);
}
function Pn(e) {
  let t;
  for (let n of e) {
    if (n == null) continue;
    let e = typeof n;
    if (e !== t) {
      if (!t) {
        if (Fn(e)) {
          t = e;
          continue;
        }
        return !1;
      }
      return !1;
    }
  }
  return !0;
}
function Fn(e) {
  switch (e) {
    case `number`:
    case `boolean`:
    case `string`:
      return !0;
  }
  return !1;
}
var In,
  Ln = e.r(() => {
    In = e.o(O());
  });
function Rn() {
  return (e) => {
    Vn.diag.error(zn(e));
  };
}
function zn(e) {
  return typeof e == `string` ? e : JSON.stringify(Bn(e));
}
function Bn(e) {
  let t = {},
    n = e;
  for (; n !== null;)
    (Object.getOwnPropertyNames(n).forEach((e) => {
      if (t[e]) return;
      let r = n[e];
      r && (t[e] = String(r));
    }),
      (n = Object.getPrototypeOf(n)));
  return t;
}
var Vn,
  Hn = e.r(() => {
    Vn = e.o(O());
  });
function Un(e) {
  Gn = e;
}
function Wn(e) {
  try {
    Gn(e);
  } catch {}
}
var Gn,
  Kn = e.r(() => {
    (Hn(), (Gn = Rn()));
  });
function j(e) {
  let t = process.env[e];
  if (t == null || t.trim() === ``) return;
  let n = Number(t);
  if (isNaN(n)) {
    Xn.diag.warn(`Unknown value ${(0, _.inspect)(t)} for ${e}, expected a number, using defaults`);
    return;
  }
  return n;
}
function qn(e) {
  let t = process.env[e];
  if (!(t == null || t.trim() === ``)) return t;
}
function Jn(e) {
  let t = process.env[e]?.trim().toLowerCase();
  return t == null || t === ``
    ? !1
    : t === `true`
      ? !0
      : (t === `false` ||
          Xn.diag.warn(
            `Unknown value ${(0, _.inspect)(t)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`,
          ),
        !1);
}
function Yn(e) {
  return qn(e)
    ?.split(`,`)
    .map((e) => e.trim())
    .filter((e) => e !== ``);
}
var Xn,
  Zn = e.r(() => {
    Xn = e.o(O());
  }),
  Qn,
  $n = e.r(() => {
    Qn = typeof globalThis == `object` ? globalThis : global;
  }),
  M,
  er = e.r(() => {
    M = C.performance;
  }),
  tr,
  nr = e.r(() => {
    tr = `2.2.0`;
  }),
  rr = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.createConstMap = void 0));
    function t(e) {
      let t = {},
        n = e.length;
      for (let r = 0; r < n; r++) {
        let n = e[r];
        n && (t[String(n).toUpperCase().replace(/[-.]/g, `_`)] = n);
      }
      return t;
    }
    e.createConstMap = t;
  }),
  ir = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC =
        e.SEMATTRS_NET_HOST_CARRIER_MNC =
        e.SEMATTRS_NET_HOST_CARRIER_MCC =
        e.SEMATTRS_NET_HOST_CARRIER_NAME =
        e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE =
        e.SEMATTRS_NET_HOST_CONNECTION_TYPE =
        e.SEMATTRS_NET_HOST_NAME =
        e.SEMATTRS_NET_HOST_PORT =
        e.SEMATTRS_NET_HOST_IP =
        e.SEMATTRS_NET_PEER_NAME =
        e.SEMATTRS_NET_PEER_PORT =
        e.SEMATTRS_NET_PEER_IP =
        e.SEMATTRS_NET_TRANSPORT =
        e.SEMATTRS_FAAS_INVOKED_REGION =
        e.SEMATTRS_FAAS_INVOKED_PROVIDER =
        e.SEMATTRS_FAAS_INVOKED_NAME =
        e.SEMATTRS_FAAS_COLDSTART =
        e.SEMATTRS_FAAS_CRON =
        e.SEMATTRS_FAAS_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_NAME =
        e.SEMATTRS_FAAS_DOCUMENT_TIME =
        e.SEMATTRS_FAAS_DOCUMENT_OPERATION =
        e.SEMATTRS_FAAS_DOCUMENT_COLLECTION =
        e.SEMATTRS_FAAS_EXECUTION =
        e.SEMATTRS_FAAS_TRIGGER =
        e.SEMATTRS_EXCEPTION_ESCAPED =
        e.SEMATTRS_EXCEPTION_STACKTRACE =
        e.SEMATTRS_EXCEPTION_MESSAGE =
        e.SEMATTRS_EXCEPTION_TYPE =
        e.SEMATTRS_DB_SQL_TABLE =
        e.SEMATTRS_DB_MONGODB_COLLECTION =
        e.SEMATTRS_DB_REDIS_DATABASE_INDEX =
        e.SEMATTRS_DB_HBASE_NAMESPACE =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC =
        e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID =
        e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT =
        e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE =
        e.SEMATTRS_DB_CASSANDRA_TABLE =
        e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL =
        e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE =
        e.SEMATTRS_DB_CASSANDRA_KEYSPACE =
        e.SEMATTRS_DB_MSSQL_INSTANCE_NAME =
        e.SEMATTRS_DB_OPERATION =
        e.SEMATTRS_DB_STATEMENT =
        e.SEMATTRS_DB_NAME =
        e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME =
        e.SEMATTRS_DB_USER =
        e.SEMATTRS_DB_CONNECTION_STRING =
        e.SEMATTRS_DB_SYSTEM =
        e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN =
          void 0),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND =
        e.SEMATTRS_MESSAGING_DESTINATION =
        e.SEMATTRS_MESSAGING_SYSTEM =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS =
        e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS =
        e.SEMATTRS_AWS_DYNAMODB_SEGMENT =
        e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT =
        e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE =
        e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES =
        e.SEMATTRS_AWS_DYNAMODB_SELECT =
        e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME =
        e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET =
        e.SEMATTRS_AWS_DYNAMODB_LIMIT =
        e.SEMATTRS_AWS_DYNAMODB_PROJECTION =
        e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS =
        e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY =
        e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES =
        e.SEMATTRS_HTTP_CLIENT_IP =
        e.SEMATTRS_HTTP_ROUTE =
        e.SEMATTRS_HTTP_SERVER_NAME =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED =
        e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH =
        e.SEMATTRS_HTTP_USER_AGENT =
        e.SEMATTRS_HTTP_FLAVOR =
        e.SEMATTRS_HTTP_STATUS_CODE =
        e.SEMATTRS_HTTP_SCHEME =
        e.SEMATTRS_HTTP_HOST =
        e.SEMATTRS_HTTP_TARGET =
        e.SEMATTRS_HTTP_URL =
        e.SEMATTRS_HTTP_METHOD =
        e.SEMATTRS_CODE_LINENO =
        e.SEMATTRS_CODE_FILEPATH =
        e.SEMATTRS_CODE_NAMESPACE =
        e.SEMATTRS_CODE_FUNCTION =
        e.SEMATTRS_THREAD_NAME =
        e.SEMATTRS_THREAD_ID =
        e.SEMATTRS_ENDUSER_SCOPE =
        e.SEMATTRS_ENDUSER_ROLE =
        e.SEMATTRS_ENDUSER_ID =
        e.SEMATTRS_PEER_SERVICE =
          void 0),
      (e.DBSYSTEMVALUES_FILEMAKER =
        e.DBSYSTEMVALUES_DERBY =
        e.DBSYSTEMVALUES_FIREBIRD =
        e.DBSYSTEMVALUES_ADABAS =
        e.DBSYSTEMVALUES_CACHE =
        e.DBSYSTEMVALUES_EDB =
        e.DBSYSTEMVALUES_FIRSTSQL =
        e.DBSYSTEMVALUES_INGRES =
        e.DBSYSTEMVALUES_HANADB =
        e.DBSYSTEMVALUES_MAXDB =
        e.DBSYSTEMVALUES_PROGRESS =
        e.DBSYSTEMVALUES_HSQLDB =
        e.DBSYSTEMVALUES_CLOUDSCAPE =
        e.DBSYSTEMVALUES_HIVE =
        e.DBSYSTEMVALUES_REDSHIFT =
        e.DBSYSTEMVALUES_POSTGRESQL =
        e.DBSYSTEMVALUES_DB2 =
        e.DBSYSTEMVALUES_ORACLE =
        e.DBSYSTEMVALUES_MYSQL =
        e.DBSYSTEMVALUES_MSSQL =
        e.DBSYSTEMVALUES_OTHER_SQL =
        e.SemanticAttributes =
        e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_COMPRESSED_SIZE =
        e.SEMATTRS_MESSAGE_ID =
        e.SEMATTRS_MESSAGE_TYPE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE =
        e.SEMATTRS_RPC_JSONRPC_ERROR_CODE =
        e.SEMATTRS_RPC_JSONRPC_REQUEST_ID =
        e.SEMATTRS_RPC_JSONRPC_VERSION =
        e.SEMATTRS_RPC_GRPC_STATUS_CODE =
        e.SEMATTRS_RPC_METHOD =
        e.SEMATTRS_RPC_SERVICE =
        e.SEMATTRS_RPC_SYSTEM =
        e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE =
        e.SEMATTRS_MESSAGING_KAFKA_PARTITION =
        e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID =
        e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP =
        e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY =
        e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY =
        e.SEMATTRS_MESSAGING_CONSUMER_ID =
        e.SEMATTRS_MESSAGING_OPERATION =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES =
        e.SEMATTRS_MESSAGING_CONVERSATION_ID =
        e.SEMATTRS_MESSAGING_MESSAGE_ID =
        e.SEMATTRS_MESSAGING_URL =
        e.SEMATTRS_MESSAGING_PROTOCOL_VERSION =
        e.SEMATTRS_MESSAGING_PROTOCOL =
        e.SEMATTRS_MESSAGING_TEMP_DESTINATION =
          void 0),
      (e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD =
        e.FaasDocumentOperationValues =
        e.FAASDOCUMENTOPERATIONVALUES_DELETE =
        e.FAASDOCUMENTOPERATIONVALUES_EDIT =
        e.FAASDOCUMENTOPERATIONVALUES_INSERT =
        e.FaasTriggerValues =
        e.FAASTRIGGERVALUES_OTHER =
        e.FAASTRIGGERVALUES_TIMER =
        e.FAASTRIGGERVALUES_PUBSUB =
        e.FAASTRIGGERVALUES_HTTP =
        e.FAASTRIGGERVALUES_DATASOURCE =
        e.DbCassandraConsistencyLevelValues =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM =
        e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL =
        e.DbSystemValues =
        e.DBSYSTEMVALUES_COCKROACHDB =
        e.DBSYSTEMVALUES_MEMCACHED =
        e.DBSYSTEMVALUES_ELASTICSEARCH =
        e.DBSYSTEMVALUES_GEODE =
        e.DBSYSTEMVALUES_NEO4J =
        e.DBSYSTEMVALUES_DYNAMODB =
        e.DBSYSTEMVALUES_COSMOSDB =
        e.DBSYSTEMVALUES_COUCHDB =
        e.DBSYSTEMVALUES_COUCHBASE =
        e.DBSYSTEMVALUES_REDIS =
        e.DBSYSTEMVALUES_MONGODB =
        e.DBSYSTEMVALUES_HBASE =
        e.DBSYSTEMVALUES_CASSANDRA =
        e.DBSYSTEMVALUES_COLDFUSION =
        e.DBSYSTEMVALUES_H2 =
        e.DBSYSTEMVALUES_VERTICA =
        e.DBSYSTEMVALUES_TERADATA =
        e.DBSYSTEMVALUES_SYBASE =
        e.DBSYSTEMVALUES_SQLITE =
        e.DBSYSTEMVALUES_POINTBASE =
        e.DBSYSTEMVALUES_PERVASIVE =
        e.DBSYSTEMVALUES_NETEZZA =
        e.DBSYSTEMVALUES_MARIADB =
        e.DBSYSTEMVALUES_INTERBASE =
        e.DBSYSTEMVALUES_INSTANTDB =
        e.DBSYSTEMVALUES_INFORMIX =
          void 0),
      (e.MESSAGINGOPERATIONVALUES_RECEIVE =
        e.MessagingDestinationKindValues =
        e.MESSAGINGDESTINATIONKINDVALUES_TOPIC =
        e.MESSAGINGDESTINATIONKINDVALUES_QUEUE =
        e.HttpFlavorValues =
        e.HTTPFLAVORVALUES_QUIC =
        e.HTTPFLAVORVALUES_SPDY =
        e.HTTPFLAVORVALUES_HTTP_2_0 =
        e.HTTPFLAVORVALUES_HTTP_1_1 =
        e.HTTPFLAVORVALUES_HTTP_1_0 =
        e.NetHostConnectionSubtypeValues =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_NR =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE =
        e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS =
        e.NetHostConnectionTypeValues =
        e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN =
        e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE =
        e.NETHOSTCONNECTIONTYPEVALUES_CELL =
        e.NETHOSTCONNECTIONTYPEVALUES_WIRED =
        e.NETHOSTCONNECTIONTYPEVALUES_WIFI =
        e.NetTransportValues =
        e.NETTRANSPORTVALUES_OTHER =
        e.NETTRANSPORTVALUES_INPROC =
        e.NETTRANSPORTVALUES_PIPE =
        e.NETTRANSPORTVALUES_UNIX =
        e.NETTRANSPORTVALUES_IP =
        e.NETTRANSPORTVALUES_IP_UDP =
        e.NETTRANSPORTVALUES_IP_TCP =
        e.FaasInvokedProviderValues =
        e.FAASINVOKEDPROVIDERVALUES_GCP =
        e.FAASINVOKEDPROVIDERVALUES_AZURE =
        e.FAASINVOKEDPROVIDERVALUES_AWS =
          void 0),
      (e.MessageTypeValues =
        e.MESSAGETYPEVALUES_RECEIVED =
        e.MESSAGETYPEVALUES_SENT =
        e.RpcGrpcStatusCodeValues =
        e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED =
        e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS =
        e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE =
        e.RPCGRPCSTATUSCODEVALUES_INTERNAL =
        e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED =
        e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE =
        e.RPCGRPCSTATUSCODEVALUES_ABORTED =
        e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION =
        e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED =
        e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED =
        e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS =
        e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND =
        e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED =
        e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT =
        e.RPCGRPCSTATUSCODEVALUES_UNKNOWN =
        e.RPCGRPCSTATUSCODEVALUES_CANCELLED =
        e.RPCGRPCSTATUSCODEVALUES_OK =
        e.MessagingOperationValues =
        e.MESSAGINGOPERATIONVALUES_PROCESS =
          void 0));
    var t = rr(),
      n = `aws.lambda.invoked_arn`,
      r = `db.system`,
      i = `db.connection_string`,
      a = `db.user`,
      o = `db.jdbc.driver_classname`,
      s = `db.name`,
      c = `db.statement`,
      l = `db.operation`,
      u = `db.mssql.instance_name`,
      d = `db.cassandra.keyspace`,
      f = `db.cassandra.page_size`,
      p = `db.cassandra.consistency_level`,
      m = `db.cassandra.table`,
      h = `db.cassandra.idempotence`,
      g = `db.cassandra.speculative_execution_count`,
      _ = `db.cassandra.coordinator.id`,
      v = `db.cassandra.coordinator.dc`,
      y = `db.hbase.namespace`,
      b = `db.redis.database_index`,
      x = `db.mongodb.collection`,
      S = `db.sql.table`,
      C = `exception.type`,
      ee = `exception.message`,
      te = `exception.stacktrace`,
      ne = `exception.escaped`,
      re = `faas.trigger`,
      ie = `faas.execution`,
      ae = `faas.document.collection`,
      oe = `faas.document.operation`,
      se = `faas.document.time`,
      ce = `faas.document.name`,
      le = `faas.time`,
      ue = `faas.cron`,
      de = `faas.coldstart`,
      fe = `faas.invoked_name`,
      pe = `faas.invoked_provider`,
      me = `faas.invoked_region`,
      he = `net.transport`,
      ge = `net.peer.ip`,
      _e = `net.peer.port`,
      ve = `net.peer.name`,
      ye = `net.host.ip`,
      be = `net.host.port`,
      xe = `net.host.name`,
      Se = `net.host.connection.type`,
      Ce = `net.host.connection.subtype`,
      w = `net.host.carrier.name`,
      we = `net.host.carrier.mcc`,
      Te = `net.host.carrier.mnc`,
      Ee = `net.host.carrier.icc`,
      De = `peer.service`,
      Oe = `enduser.id`,
      ke = `enduser.role`,
      Ae = `enduser.scope`,
      je = `thread.id`,
      Me = `thread.name`,
      Ne = `code.function`,
      Pe = `code.namespace`,
      T = `code.filepath`,
      Fe = `code.lineno`,
      Ie = `http.method`,
      Le = `http.url`,
      Re = `http.target`,
      ze = `http.host`,
      Be = `http.scheme`,
      Ve = `http.status_code`,
      He = `http.flavor`,
      Ue = `http.user_agent`,
      We = `http.request_content_length`,
      Ge = `http.request_content_length_uncompressed`,
      Ke = `http.response_content_length`,
      qe = `http.response_content_length_uncompressed`,
      Je = `http.server_name`,
      Ye = `http.route`,
      Xe = `http.client_ip`,
      Ze = `aws.dynamodb.table_names`,
      Qe = `aws.dynamodb.consumed_capacity`,
      $e = `aws.dynamodb.item_collection_metrics`,
      et = `aws.dynamodb.provisioned_read_capacity`,
      tt = `aws.dynamodb.provisioned_write_capacity`,
      nt = `aws.dynamodb.consistent_read`,
      rt = `aws.dynamodb.projection`,
      it = `aws.dynamodb.limit`,
      at = `aws.dynamodb.attributes_to_get`,
      ot = `aws.dynamodb.index_name`,
      st = `aws.dynamodb.select`,
      ct = `aws.dynamodb.global_secondary_indexes`,
      lt = `aws.dynamodb.local_secondary_indexes`,
      ut = `aws.dynamodb.exclusive_start_table`,
      dt = `aws.dynamodb.table_count`,
      ft = `aws.dynamodb.scan_forward`,
      pt = `aws.dynamodb.segment`,
      mt = `aws.dynamodb.total_segments`,
      ht = `aws.dynamodb.count`,
      gt = `aws.dynamodb.scanned_count`,
      _t = `aws.dynamodb.attribute_definitions`,
      vt = `aws.dynamodb.global_secondary_index_updates`,
      yt = `messaging.system`,
      bt = `messaging.destination`,
      xt = `messaging.destination_kind`,
      St = `messaging.temp_destination`,
      Ct = `messaging.protocol`,
      wt = `messaging.protocol_version`,
      Tt = `messaging.url`,
      Et = `messaging.message_id`,
      E = `messaging.conversation_id`,
      Dt = `messaging.message_payload_size_bytes`,
      Ot = `messaging.message_payload_compressed_size_bytes`,
      kt = `messaging.operation`,
      D = `messaging.consumer_id`,
      At = `messaging.rabbitmq.routing_key`,
      jt = `messaging.kafka.message_key`,
      Mt = `messaging.kafka.consumer_group`,
      Nt = `messaging.kafka.client_id`,
      Pt = `messaging.kafka.partition`,
      Ft = `messaging.kafka.tombstone`,
      It = `rpc.system`,
      Lt = `rpc.service`,
      Rt = `rpc.method`,
      zt = `rpc.grpc.status_code`,
      Bt = `rpc.jsonrpc.version`,
      Vt = `rpc.jsonrpc.request_id`,
      Ht = `rpc.jsonrpc.error_code`,
      Ut = `rpc.jsonrpc.error_message`,
      Wt = `message.type`,
      Gt = `message.id`,
      Kt = `message.compressed_size`,
      qt = `message.uncompressed_size`;
    ((e.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = n),
      (e.SEMATTRS_DB_SYSTEM = r),
      (e.SEMATTRS_DB_CONNECTION_STRING = i),
      (e.SEMATTRS_DB_USER = a),
      (e.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = o),
      (e.SEMATTRS_DB_NAME = s),
      (e.SEMATTRS_DB_STATEMENT = c),
      (e.SEMATTRS_DB_OPERATION = l),
      (e.SEMATTRS_DB_MSSQL_INSTANCE_NAME = u),
      (e.SEMATTRS_DB_CASSANDRA_KEYSPACE = d),
      (e.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = f),
      (e.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = p),
      (e.SEMATTRS_DB_CASSANDRA_TABLE = m),
      (e.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = h),
      (e.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = g),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = _),
      (e.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = v),
      (e.SEMATTRS_DB_HBASE_NAMESPACE = y),
      (e.SEMATTRS_DB_REDIS_DATABASE_INDEX = b),
      (e.SEMATTRS_DB_MONGODB_COLLECTION = x),
      (e.SEMATTRS_DB_SQL_TABLE = S),
      (e.SEMATTRS_EXCEPTION_TYPE = C),
      (e.SEMATTRS_EXCEPTION_MESSAGE = ee),
      (e.SEMATTRS_EXCEPTION_STACKTRACE = te),
      (e.SEMATTRS_EXCEPTION_ESCAPED = ne),
      (e.SEMATTRS_FAAS_TRIGGER = re),
      (e.SEMATTRS_FAAS_EXECUTION = ie),
      (e.SEMATTRS_FAAS_DOCUMENT_COLLECTION = ae),
      (e.SEMATTRS_FAAS_DOCUMENT_OPERATION = oe),
      (e.SEMATTRS_FAAS_DOCUMENT_TIME = se),
      (e.SEMATTRS_FAAS_DOCUMENT_NAME = ce),
      (e.SEMATTRS_FAAS_TIME = le),
      (e.SEMATTRS_FAAS_CRON = ue),
      (e.SEMATTRS_FAAS_COLDSTART = de),
      (e.SEMATTRS_FAAS_INVOKED_NAME = fe),
      (e.SEMATTRS_FAAS_INVOKED_PROVIDER = pe),
      (e.SEMATTRS_FAAS_INVOKED_REGION = me),
      (e.SEMATTRS_NET_TRANSPORT = he),
      (e.SEMATTRS_NET_PEER_IP = ge),
      (e.SEMATTRS_NET_PEER_PORT = _e),
      (e.SEMATTRS_NET_PEER_NAME = ve),
      (e.SEMATTRS_NET_HOST_IP = ye),
      (e.SEMATTRS_NET_HOST_PORT = be),
      (e.SEMATTRS_NET_HOST_NAME = xe),
      (e.SEMATTRS_NET_HOST_CONNECTION_TYPE = Se),
      (e.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = Ce),
      (e.SEMATTRS_NET_HOST_CARRIER_NAME = w),
      (e.SEMATTRS_NET_HOST_CARRIER_MCC = we),
      (e.SEMATTRS_NET_HOST_CARRIER_MNC = Te),
      (e.SEMATTRS_NET_HOST_CARRIER_ICC = Ee),
      (e.SEMATTRS_PEER_SERVICE = De),
      (e.SEMATTRS_ENDUSER_ID = Oe),
      (e.SEMATTRS_ENDUSER_ROLE = ke),
      (e.SEMATTRS_ENDUSER_SCOPE = Ae),
      (e.SEMATTRS_THREAD_ID = je),
      (e.SEMATTRS_THREAD_NAME = Me),
      (e.SEMATTRS_CODE_FUNCTION = Ne),
      (e.SEMATTRS_CODE_NAMESPACE = Pe),
      (e.SEMATTRS_CODE_FILEPATH = T),
      (e.SEMATTRS_CODE_LINENO = Fe),
      (e.SEMATTRS_HTTP_METHOD = Ie),
      (e.SEMATTRS_HTTP_URL = Le),
      (e.SEMATTRS_HTTP_TARGET = Re),
      (e.SEMATTRS_HTTP_HOST = ze),
      (e.SEMATTRS_HTTP_SCHEME = Be),
      (e.SEMATTRS_HTTP_STATUS_CODE = Ve),
      (e.SEMATTRS_HTTP_FLAVOR = He),
      (e.SEMATTRS_HTTP_USER_AGENT = Ue),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = We),
      (e.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = Ge),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = Ke),
      (e.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = qe),
      (e.SEMATTRS_HTTP_SERVER_NAME = Je),
      (e.SEMATTRS_HTTP_ROUTE = Ye),
      (e.SEMATTRS_HTTP_CLIENT_IP = Xe),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Ze),
      (e.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = Qe),
      (e.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = $e),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = et),
      (e.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = tt),
      (e.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = nt),
      (e.SEMATTRS_AWS_DYNAMODB_PROJECTION = rt),
      (e.SEMATTRS_AWS_DYNAMODB_LIMIT = it),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = at),
      (e.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = ot),
      (e.SEMATTRS_AWS_DYNAMODB_SELECT = st),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = ct),
      (e.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = lt),
      (e.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = ut),
      (e.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = dt),
      (e.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = ft),
      (e.SEMATTRS_AWS_DYNAMODB_SEGMENT = pt),
      (e.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = mt),
      (e.SEMATTRS_AWS_DYNAMODB_COUNT = ht),
      (e.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = gt),
      (e.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = _t),
      (e.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = vt),
      (e.SEMATTRS_MESSAGING_SYSTEM = yt),
      (e.SEMATTRS_MESSAGING_DESTINATION = bt),
      (e.SEMATTRS_MESSAGING_DESTINATION_KIND = xt),
      (e.SEMATTRS_MESSAGING_TEMP_DESTINATION = St),
      (e.SEMATTRS_MESSAGING_PROTOCOL = Ct),
      (e.SEMATTRS_MESSAGING_PROTOCOL_VERSION = wt),
      (e.SEMATTRS_MESSAGING_URL = Tt),
      (e.SEMATTRS_MESSAGING_MESSAGE_ID = Et),
      (e.SEMATTRS_MESSAGING_CONVERSATION_ID = E),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = Dt),
      (e.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = Ot),
      (e.SEMATTRS_MESSAGING_OPERATION = kt),
      (e.SEMATTRS_MESSAGING_CONSUMER_ID = D),
      (e.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = At),
      (e.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = jt),
      (e.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = Mt),
      (e.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = Nt),
      (e.SEMATTRS_MESSAGING_KAFKA_PARTITION = Pt),
      (e.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = Ft),
      (e.SEMATTRS_RPC_SYSTEM = It),
      (e.SEMATTRS_RPC_SERVICE = Lt),
      (e.SEMATTRS_RPC_METHOD = Rt),
      (e.SEMATTRS_RPC_GRPC_STATUS_CODE = zt),
      (e.SEMATTRS_RPC_JSONRPC_VERSION = Bt),
      (e.SEMATTRS_RPC_JSONRPC_REQUEST_ID = Vt),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_CODE = Ht),
      (e.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = Ut),
      (e.SEMATTRS_MESSAGE_TYPE = Wt),
      (e.SEMATTRS_MESSAGE_ID = Gt),
      (e.SEMATTRS_MESSAGE_COMPRESSED_SIZE = Kt),
      (e.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = qt),
      (e.SemanticAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        ee,
        te,
        ne,
        re,
        ie,
        ae,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        w,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        T,
        Fe,
        Ie,
        Le,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
        Ye,
        Xe,
        Ze,
        Qe,
        $e,
        et,
        tt,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
        ht,
        gt,
        _t,
        vt,
        yt,
        bt,
        xt,
        St,
        Ct,
        wt,
        Tt,
        Et,
        E,
        Dt,
        Ot,
        kt,
        D,
        At,
        jt,
        Mt,
        Nt,
        Pt,
        Ft,
        It,
        Lt,
        Rt,
        zt,
        Bt,
        Vt,
        Ht,
        Ut,
        Wt,
        Gt,
        Kt,
        qt,
      ])));
    var Jt = `other_sql`,
      Yt = `mssql`,
      Xt = `mysql`,
      Zt = `oracle`,
      Qt = `db2`,
      $t = `postgresql`,
      en = `redshift`,
      tn = `hive`,
      nn = `cloudscape`,
      rn = `hsqldb`,
      an = `progress`,
      on = `maxdb`,
      sn = `hanadb`,
      cn = `ingres`,
      ln = `firstsql`,
      un = `edb`,
      dn = `cache`,
      fn = `adabas`,
      O = `firebird`,
      k = `derby`,
      pn = `filemaker`,
      A = `informix`,
      mn = `instantdb`,
      hn = `interbase`,
      gn = `mariadb`,
      _n = `netezza`,
      vn = `pervasive`,
      yn = `pointbase`,
      bn = `sqlite`,
      xn = `sybase`,
      Sn = `teradata`,
      Cn = `vertica`,
      wn = `h2`,
      Tn = `coldfusion`,
      En = `cassandra`,
      Dn = `hbase`,
      On = `mongodb`,
      kn = `redis`,
      An = `couchbase`,
      jn = `couchdb`,
      Mn = `cosmosdb`,
      Nn = `dynamodb`,
      Pn = `neo4j`,
      Fn = `geode`,
      In = `elasticsearch`,
      Ln = `memcached`,
      Rn = `cockroachdb`;
    ((e.DBSYSTEMVALUES_OTHER_SQL = Jt),
      (e.DBSYSTEMVALUES_MSSQL = Yt),
      (e.DBSYSTEMVALUES_MYSQL = Xt),
      (e.DBSYSTEMVALUES_ORACLE = Zt),
      (e.DBSYSTEMVALUES_DB2 = Qt),
      (e.DBSYSTEMVALUES_POSTGRESQL = $t),
      (e.DBSYSTEMVALUES_REDSHIFT = en),
      (e.DBSYSTEMVALUES_HIVE = tn),
      (e.DBSYSTEMVALUES_CLOUDSCAPE = nn),
      (e.DBSYSTEMVALUES_HSQLDB = rn),
      (e.DBSYSTEMVALUES_PROGRESS = an),
      (e.DBSYSTEMVALUES_MAXDB = on),
      (e.DBSYSTEMVALUES_HANADB = sn),
      (e.DBSYSTEMVALUES_INGRES = cn),
      (e.DBSYSTEMVALUES_FIRSTSQL = ln),
      (e.DBSYSTEMVALUES_EDB = un),
      (e.DBSYSTEMVALUES_CACHE = dn),
      (e.DBSYSTEMVALUES_ADABAS = fn),
      (e.DBSYSTEMVALUES_FIREBIRD = O),
      (e.DBSYSTEMVALUES_DERBY = k),
      (e.DBSYSTEMVALUES_FILEMAKER = pn),
      (e.DBSYSTEMVALUES_INFORMIX = A),
      (e.DBSYSTEMVALUES_INSTANTDB = mn),
      (e.DBSYSTEMVALUES_INTERBASE = hn),
      (e.DBSYSTEMVALUES_MARIADB = gn),
      (e.DBSYSTEMVALUES_NETEZZA = _n),
      (e.DBSYSTEMVALUES_PERVASIVE = vn),
      (e.DBSYSTEMVALUES_POINTBASE = yn),
      (e.DBSYSTEMVALUES_SQLITE = bn),
      (e.DBSYSTEMVALUES_SYBASE = xn),
      (e.DBSYSTEMVALUES_TERADATA = Sn),
      (e.DBSYSTEMVALUES_VERTICA = Cn),
      (e.DBSYSTEMVALUES_H2 = wn),
      (e.DBSYSTEMVALUES_COLDFUSION = Tn),
      (e.DBSYSTEMVALUES_CASSANDRA = En),
      (e.DBSYSTEMVALUES_HBASE = Dn),
      (e.DBSYSTEMVALUES_MONGODB = On),
      (e.DBSYSTEMVALUES_REDIS = kn),
      (e.DBSYSTEMVALUES_COUCHBASE = An),
      (e.DBSYSTEMVALUES_COUCHDB = jn),
      (e.DBSYSTEMVALUES_COSMOSDB = Mn),
      (e.DBSYSTEMVALUES_DYNAMODB = Nn),
      (e.DBSYSTEMVALUES_NEO4J = Pn),
      (e.DBSYSTEMVALUES_GEODE = Fn),
      (e.DBSYSTEMVALUES_ELASTICSEARCH = In),
      (e.DBSYSTEMVALUES_MEMCACHED = Ln),
      (e.DBSYSTEMVALUES_COCKROACHDB = Rn),
      (e.DbSystemValues = (0, t.createConstMap)([
        Jt,
        Yt,
        Xt,
        Zt,
        Qt,
        $t,
        en,
        tn,
        nn,
        rn,
        an,
        on,
        sn,
        cn,
        ln,
        un,
        dn,
        fn,
        O,
        k,
        pn,
        A,
        mn,
        hn,
        gn,
        _n,
        vn,
        yn,
        bn,
        xn,
        Sn,
        Cn,
        wn,
        Tn,
        En,
        Dn,
        On,
        kn,
        An,
        jn,
        Mn,
        Nn,
        Pn,
        Fn,
        In,
        Ln,
        Rn,
      ])));
    var zn = `all`,
      Bn = `each_quorum`,
      Vn = `quorum`,
      Hn = `local_quorum`,
      Un = `one`,
      Wn = `two`,
      Gn = `three`,
      Kn = `local_one`,
      j = `any`,
      qn = `serial`,
      Jn = `local_serial`;
    ((e.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = zn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Bn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = Vn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Hn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = Un),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Wn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = Gn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Kn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = j),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = qn),
      (e.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Jn),
      (e.DbCassandraConsistencyLevelValues = (0, t.createConstMap)([
        zn,
        Bn,
        Vn,
        Hn,
        Un,
        Wn,
        Gn,
        Kn,
        j,
        qn,
        Jn,
      ])));
    var Yn = `datasource`,
      Xn = `http`,
      Zn = `pubsub`,
      Qn = `timer`,
      $n = `other`;
    ((e.FAASTRIGGERVALUES_DATASOURCE = Yn),
      (e.FAASTRIGGERVALUES_HTTP = Xn),
      (e.FAASTRIGGERVALUES_PUBSUB = Zn),
      (e.FAASTRIGGERVALUES_TIMER = Qn),
      (e.FAASTRIGGERVALUES_OTHER = $n),
      (e.FaasTriggerValues = (0, t.createConstMap)([Yn, Xn, Zn, Qn, $n])));
    var M = `insert`,
      er = `edit`,
      tr = `delete`;
    ((e.FAASDOCUMENTOPERATIONVALUES_INSERT = M),
      (e.FAASDOCUMENTOPERATIONVALUES_EDIT = er),
      (e.FAASDOCUMENTOPERATIONVALUES_DELETE = tr),
      (e.FaasDocumentOperationValues = (0, t.createConstMap)([M, er, tr])));
    var nr = `alibaba_cloud`,
      ir = `aws`,
      ar = `azure`,
      or = `gcp`;
    ((e.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = nr),
      (e.FAASINVOKEDPROVIDERVALUES_AWS = ir),
      (e.FAASINVOKEDPROVIDERVALUES_AZURE = ar),
      (e.FAASINVOKEDPROVIDERVALUES_GCP = or),
      (e.FaasInvokedProviderValues = (0, t.createConstMap)([nr, ir, ar, or])));
    var sr = `ip_tcp`,
      cr = `ip_udp`,
      lr = `ip`,
      ur = `unix`,
      dr = `pipe`,
      fr = `inproc`,
      pr = `other`;
    ((e.NETTRANSPORTVALUES_IP_TCP = sr),
      (e.NETTRANSPORTVALUES_IP_UDP = cr),
      (e.NETTRANSPORTVALUES_IP = lr),
      (e.NETTRANSPORTVALUES_UNIX = ur),
      (e.NETTRANSPORTVALUES_PIPE = dr),
      (e.NETTRANSPORTVALUES_INPROC = fr),
      (e.NETTRANSPORTVALUES_OTHER = pr),
      (e.NetTransportValues = (0, t.createConstMap)([sr, cr, lr, ur, dr, fr, pr])));
    var mr = `wifi`,
      hr = `wired`,
      gr = `cell`,
      _r = `unavailable`,
      vr = `unknown`;
    ((e.NETHOSTCONNECTIONTYPEVALUES_WIFI = mr),
      (e.NETHOSTCONNECTIONTYPEVALUES_WIRED = hr),
      (e.NETHOSTCONNECTIONTYPEVALUES_CELL = gr),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = _r),
      (e.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = vr),
      (e.NetHostConnectionTypeValues = (0, t.createConstMap)([mr, hr, gr, _r, vr])));
    var N = `gprs`,
      yr = `edge`,
      br = `umts`,
      xr = `cdma`,
      Sr = `evdo_0`,
      Cr = `evdo_a`,
      wr = `cdma2000_1xrtt`,
      Tr = `hsdpa`,
      Er = `hsupa`,
      Dr = `hspa`,
      Or = `iden`,
      kr = `evdo_b`,
      Ar = `lte`,
      jr = `ehrpd`,
      Mr = `hspap`,
      Nr = `gsm`,
      Pr = `td_scdma`,
      Fr = `iwlan`,
      Ir = `nr`,
      Lr = `nrnsa`,
      Rr = `lte_ca`;
    ((e.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = N),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = yr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = br),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = xr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = Sr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = Cr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = wr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = Tr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = Er),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = Dr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = Or),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = kr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Ar),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = jr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = Mr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = Nr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Pr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = Fr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NR = Ir),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Lr),
      (e.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = Rr),
      (e.NetHostConnectionSubtypeValues = (0, t.createConstMap)([
        N,
        yr,
        br,
        xr,
        Sr,
        Cr,
        wr,
        Tr,
        Er,
        Dr,
        Or,
        kr,
        Ar,
        jr,
        Mr,
        Nr,
        Pr,
        Fr,
        Ir,
        Lr,
        Rr,
      ])));
    var zr = `1.0`,
      Br = `1.1`,
      Vr = `2.0`,
      Hr = `SPDY`,
      Ur = `QUIC`;
    ((e.HTTPFLAVORVALUES_HTTP_1_0 = zr),
      (e.HTTPFLAVORVALUES_HTTP_1_1 = Br),
      (e.HTTPFLAVORVALUES_HTTP_2_0 = Vr),
      (e.HTTPFLAVORVALUES_SPDY = Hr),
      (e.HTTPFLAVORVALUES_QUIC = Ur),
      (e.HttpFlavorValues = { HTTP_1_0: zr, HTTP_1_1: Br, HTTP_2_0: Vr, SPDY: Hr, QUIC: Ur }));
    var Wr = `queue`,
      Gr = `topic`;
    ((e.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Wr),
      (e.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Gr),
      (e.MessagingDestinationKindValues = (0, t.createConstMap)([Wr, Gr])));
    var Kr = `receive`,
      qr = `process`;
    ((e.MESSAGINGOPERATIONVALUES_RECEIVE = Kr),
      (e.MESSAGINGOPERATIONVALUES_PROCESS = qr),
      (e.MessagingOperationValues = (0, t.createConstMap)([Kr, qr])));
    var Jr = 0,
      Yr = 1,
      Xr = 2,
      Zr = 3,
      Qr = 4,
      $r = 5,
      ei = 6,
      ti = 7,
      ni = 8,
      ri = 9,
      ii = 10,
      ai = 11,
      oi = 12,
      si = 13,
      ci = 14,
      li = 15,
      ui = 16;
    ((e.RPCGRPCSTATUSCODEVALUES_OK = Jr),
      (e.RPCGRPCSTATUSCODEVALUES_CANCELLED = Yr),
      (e.RPCGRPCSTATUSCODEVALUES_UNKNOWN = Xr),
      (e.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = Zr),
      (e.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = Qr),
      (e.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = $r),
      (e.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = ei),
      (e.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = ti),
      (e.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = ni),
      (e.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = ri),
      (e.RPCGRPCSTATUSCODEVALUES_ABORTED = ii),
      (e.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = ai),
      (e.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = oi),
      (e.RPCGRPCSTATUSCODEVALUES_INTERNAL = si),
      (e.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = ci),
      (e.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = li),
      (e.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = ui),
      (e.RpcGrpcStatusCodeValues = {
        OK: Jr,
        CANCELLED: Yr,
        UNKNOWN: Xr,
        INVALID_ARGUMENT: Zr,
        DEADLINE_EXCEEDED: Qr,
        NOT_FOUND: $r,
        ALREADY_EXISTS: ei,
        PERMISSION_DENIED: ti,
        RESOURCE_EXHAUSTED: ni,
        FAILED_PRECONDITION: ri,
        ABORTED: ii,
        OUT_OF_RANGE: ai,
        UNIMPLEMENTED: oi,
        INTERNAL: si,
        UNAVAILABLE: ci,
        DATA_LOSS: li,
        UNAUTHENTICATED: ui,
      }));
    var di = `SENT`,
      fi = `RECEIVED`;
    ((e.MESSAGETYPEVALUES_SENT = di),
      (e.MESSAGETYPEVALUES_RECEIVED = fi),
      (e.MessageTypeValues = (0, t.createConstMap)([di, fi])));
  }),
  ar = e.n((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(ir(), e));
  }),
  or = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME =
        e.SEMRESATTRS_K8S_STATEFULSET_UID =
        e.SEMRESATTRS_K8S_DEPLOYMENT_NAME =
        e.SEMRESATTRS_K8S_DEPLOYMENT_UID =
        e.SEMRESATTRS_K8S_REPLICASET_NAME =
        e.SEMRESATTRS_K8S_REPLICASET_UID =
        e.SEMRESATTRS_K8S_CONTAINER_NAME =
        e.SEMRESATTRS_K8S_POD_NAME =
        e.SEMRESATTRS_K8S_POD_UID =
        e.SEMRESATTRS_K8S_NAMESPACE_NAME =
        e.SEMRESATTRS_K8S_NODE_UID =
        e.SEMRESATTRS_K8S_NODE_NAME =
        e.SEMRESATTRS_K8S_CLUSTER_NAME =
        e.SEMRESATTRS_HOST_IMAGE_VERSION =
        e.SEMRESATTRS_HOST_IMAGE_ID =
        e.SEMRESATTRS_HOST_IMAGE_NAME =
        e.SEMRESATTRS_HOST_ARCH =
        e.SEMRESATTRS_HOST_TYPE =
        e.SEMRESATTRS_HOST_NAME =
        e.SEMRESATTRS_HOST_ID =
        e.SEMRESATTRS_FAAS_MAX_MEMORY =
        e.SEMRESATTRS_FAAS_INSTANCE =
        e.SEMRESATTRS_FAAS_VERSION =
        e.SEMRESATTRS_FAAS_ID =
        e.SEMRESATTRS_FAAS_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_NAME =
        e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER =
        e.SEMRESATTRS_DEVICE_ID =
        e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT =
        e.SEMRESATTRS_CONTAINER_IMAGE_TAG =
        e.SEMRESATTRS_CONTAINER_IMAGE_NAME =
        e.SEMRESATTRS_CONTAINER_RUNTIME =
        e.SEMRESATTRS_CONTAINER_ID =
        e.SEMRESATTRS_CONTAINER_NAME =
        e.SEMRESATTRS_AWS_LOG_STREAM_ARNS =
        e.SEMRESATTRS_AWS_LOG_STREAM_NAMES =
        e.SEMRESATTRS_AWS_LOG_GROUP_ARNS =
        e.SEMRESATTRS_AWS_LOG_GROUP_NAMES =
        e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_TASK_REVISION =
        e.SEMRESATTRS_AWS_ECS_TASK_FAMILY =
        e.SEMRESATTRS_AWS_ECS_TASK_ARN =
        e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE =
        e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN =
        e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN =
        e.SEMRESATTRS_CLOUD_PLATFORM =
        e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE =
        e.SEMRESATTRS_CLOUD_REGION =
        e.SEMRESATTRS_CLOUD_ACCOUNT_ID =
        e.SEMRESATTRS_CLOUD_PROVIDER =
          void 0),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE =
        e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE =
        e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_AZURE_AKS =
        e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES =
        e.CLOUDPLATFORMVALUES_AZURE_VM =
        e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK =
        e.CLOUDPLATFORMVALUES_AWS_LAMBDA =
        e.CLOUDPLATFORMVALUES_AWS_EKS =
        e.CLOUDPLATFORMVALUES_AWS_ECS =
        e.CLOUDPLATFORMVALUES_AWS_EC2 =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC =
        e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS =
        e.CloudProviderValues =
        e.CLOUDPROVIDERVALUES_GCP =
        e.CLOUDPROVIDERVALUES_AZURE =
        e.CLOUDPROVIDERVALUES_AWS =
        e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD =
        e.SemanticResourceAttributes =
        e.SEMRESATTRS_WEBENGINE_DESCRIPTION =
        e.SEMRESATTRS_WEBENGINE_VERSION =
        e.SEMRESATTRS_WEBENGINE_NAME =
        e.SEMRESATTRS_TELEMETRY_AUTO_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_VERSION =
        e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE =
        e.SEMRESATTRS_TELEMETRY_SDK_NAME =
        e.SEMRESATTRS_SERVICE_VERSION =
        e.SEMRESATTRS_SERVICE_INSTANCE_ID =
        e.SEMRESATTRS_SERVICE_NAMESPACE =
        e.SEMRESATTRS_SERVICE_NAME =
        e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION =
        e.SEMRESATTRS_PROCESS_RUNTIME_VERSION =
        e.SEMRESATTRS_PROCESS_RUNTIME_NAME =
        e.SEMRESATTRS_PROCESS_OWNER =
        e.SEMRESATTRS_PROCESS_COMMAND_ARGS =
        e.SEMRESATTRS_PROCESS_COMMAND_LINE =
        e.SEMRESATTRS_PROCESS_COMMAND =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH =
        e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME =
        e.SEMRESATTRS_PROCESS_PID =
        e.SEMRESATTRS_OS_VERSION =
        e.SEMRESATTRS_OS_NAME =
        e.SEMRESATTRS_OS_DESCRIPTION =
        e.SEMRESATTRS_OS_TYPE =
        e.SEMRESATTRS_K8S_CRONJOB_NAME =
        e.SEMRESATTRS_K8S_CRONJOB_UID =
        e.SEMRESATTRS_K8S_JOB_NAME =
        e.SEMRESATTRS_K8S_JOB_UID =
        e.SEMRESATTRS_K8S_DAEMONSET_NAME =
        e.SEMRESATTRS_K8S_DAEMONSET_UID =
          void 0),
      (e.TelemetrySdkLanguageValues =
        e.TELEMETRYSDKLANGUAGEVALUES_WEBJS =
        e.TELEMETRYSDKLANGUAGEVALUES_RUBY =
        e.TELEMETRYSDKLANGUAGEVALUES_PYTHON =
        e.TELEMETRYSDKLANGUAGEVALUES_PHP =
        e.TELEMETRYSDKLANGUAGEVALUES_NODEJS =
        e.TELEMETRYSDKLANGUAGEVALUES_JAVA =
        e.TELEMETRYSDKLANGUAGEVALUES_GO =
        e.TELEMETRYSDKLANGUAGEVALUES_ERLANG =
        e.TELEMETRYSDKLANGUAGEVALUES_DOTNET =
        e.TELEMETRYSDKLANGUAGEVALUES_CPP =
        e.OsTypeValues =
        e.OSTYPEVALUES_Z_OS =
        e.OSTYPEVALUES_SOLARIS =
        e.OSTYPEVALUES_AIX =
        e.OSTYPEVALUES_HPUX =
        e.OSTYPEVALUES_DRAGONFLYBSD =
        e.OSTYPEVALUES_OPENBSD =
        e.OSTYPEVALUES_NETBSD =
        e.OSTYPEVALUES_FREEBSD =
        e.OSTYPEVALUES_DARWIN =
        e.OSTYPEVALUES_LINUX =
        e.OSTYPEVALUES_WINDOWS =
        e.HostArchValues =
        e.HOSTARCHVALUES_X86 =
        e.HOSTARCHVALUES_PPC64 =
        e.HOSTARCHVALUES_PPC32 =
        e.HOSTARCHVALUES_IA64 =
        e.HOSTARCHVALUES_ARM64 =
        e.HOSTARCHVALUES_ARM32 =
        e.HOSTARCHVALUES_AMD64 =
        e.AwsEcsLaunchtypeValues =
        e.AWSECSLAUNCHTYPEVALUES_FARGATE =
        e.AWSECSLAUNCHTYPEVALUES_EC2 =
        e.CloudPlatformValues =
        e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS =
        e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE =
        e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN =
          void 0));
    var t = rr(),
      n = `cloud.provider`,
      r = `cloud.account.id`,
      i = `cloud.region`,
      a = `cloud.availability_zone`,
      o = `cloud.platform`,
      s = `aws.ecs.container.arn`,
      c = `aws.ecs.cluster.arn`,
      l = `aws.ecs.launchtype`,
      u = `aws.ecs.task.arn`,
      d = `aws.ecs.task.family`,
      f = `aws.ecs.task.revision`,
      p = `aws.eks.cluster.arn`,
      m = `aws.log.group.names`,
      h = `aws.log.group.arns`,
      g = `aws.log.stream.names`,
      _ = `aws.log.stream.arns`,
      v = `container.name`,
      y = `container.id`,
      b = `container.runtime`,
      x = `container.image.name`,
      S = `container.image.tag`,
      C = `deployment.environment`,
      ee = `device.id`,
      te = `device.model.identifier`,
      ne = `device.model.name`,
      re = `faas.name`,
      ie = `faas.id`,
      ae = `faas.version`,
      oe = `faas.instance`,
      se = `faas.max_memory`,
      ce = `host.id`,
      le = `host.name`,
      ue = `host.type`,
      de = `host.arch`,
      fe = `host.image.name`,
      pe = `host.image.id`,
      me = `host.image.version`,
      he = `k8s.cluster.name`,
      ge = `k8s.node.name`,
      _e = `k8s.node.uid`,
      ve = `k8s.namespace.name`,
      ye = `k8s.pod.uid`,
      be = `k8s.pod.name`,
      xe = `k8s.container.name`,
      Se = `k8s.replicaset.uid`,
      Ce = `k8s.replicaset.name`,
      w = `k8s.deployment.uid`,
      we = `k8s.deployment.name`,
      Te = `k8s.statefulset.uid`,
      Ee = `k8s.statefulset.name`,
      De = `k8s.daemonset.uid`,
      Oe = `k8s.daemonset.name`,
      ke = `k8s.job.uid`,
      Ae = `k8s.job.name`,
      je = `k8s.cronjob.uid`,
      Me = `k8s.cronjob.name`,
      Ne = `os.type`,
      Pe = `os.description`,
      T = `os.name`,
      Fe = `os.version`,
      Ie = `process.pid`,
      Le = `process.executable.name`,
      Re = `process.executable.path`,
      ze = `process.command`,
      Be = `process.command_line`,
      Ve = `process.command_args`,
      He = `process.owner`,
      Ue = `process.runtime.name`,
      We = `process.runtime.version`,
      Ge = `process.runtime.description`,
      Ke = `service.name`,
      qe = `service.namespace`,
      Je = `service.instance.id`,
      Ye = `service.version`,
      Xe = `telemetry.sdk.name`,
      Ze = `telemetry.sdk.language`,
      Qe = `telemetry.sdk.version`,
      $e = `telemetry.auto.version`,
      et = `webengine.name`,
      tt = `webengine.version`,
      nt = `webengine.description`;
    ((e.SEMRESATTRS_CLOUD_PROVIDER = n),
      (e.SEMRESATTRS_CLOUD_ACCOUNT_ID = r),
      (e.SEMRESATTRS_CLOUD_REGION = i),
      (e.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = a),
      (e.SEMRESATTRS_CLOUD_PLATFORM = o),
      (e.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = s),
      (e.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = c),
      (e.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = l),
      (e.SEMRESATTRS_AWS_ECS_TASK_ARN = u),
      (e.SEMRESATTRS_AWS_ECS_TASK_FAMILY = d),
      (e.SEMRESATTRS_AWS_ECS_TASK_REVISION = f),
      (e.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = p),
      (e.SEMRESATTRS_AWS_LOG_GROUP_NAMES = m),
      (e.SEMRESATTRS_AWS_LOG_GROUP_ARNS = h),
      (e.SEMRESATTRS_AWS_LOG_STREAM_NAMES = g),
      (e.SEMRESATTRS_AWS_LOG_STREAM_ARNS = _),
      (e.SEMRESATTRS_CONTAINER_NAME = v),
      (e.SEMRESATTRS_CONTAINER_ID = y),
      (e.SEMRESATTRS_CONTAINER_RUNTIME = b),
      (e.SEMRESATTRS_CONTAINER_IMAGE_NAME = x),
      (e.SEMRESATTRS_CONTAINER_IMAGE_TAG = S),
      (e.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = C),
      (e.SEMRESATTRS_DEVICE_ID = ee),
      (e.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = te),
      (e.SEMRESATTRS_DEVICE_MODEL_NAME = ne),
      (e.SEMRESATTRS_FAAS_NAME = re),
      (e.SEMRESATTRS_FAAS_ID = ie),
      (e.SEMRESATTRS_FAAS_VERSION = ae),
      (e.SEMRESATTRS_FAAS_INSTANCE = oe),
      (e.SEMRESATTRS_FAAS_MAX_MEMORY = se),
      (e.SEMRESATTRS_HOST_ID = ce),
      (e.SEMRESATTRS_HOST_NAME = le),
      (e.SEMRESATTRS_HOST_TYPE = ue),
      (e.SEMRESATTRS_HOST_ARCH = de),
      (e.SEMRESATTRS_HOST_IMAGE_NAME = fe),
      (e.SEMRESATTRS_HOST_IMAGE_ID = pe),
      (e.SEMRESATTRS_HOST_IMAGE_VERSION = me),
      (e.SEMRESATTRS_K8S_CLUSTER_NAME = he),
      (e.SEMRESATTRS_K8S_NODE_NAME = ge),
      (e.SEMRESATTRS_K8S_NODE_UID = _e),
      (e.SEMRESATTRS_K8S_NAMESPACE_NAME = ve),
      (e.SEMRESATTRS_K8S_POD_UID = ye),
      (e.SEMRESATTRS_K8S_POD_NAME = be),
      (e.SEMRESATTRS_K8S_CONTAINER_NAME = xe),
      (e.SEMRESATTRS_K8S_REPLICASET_UID = Se),
      (e.SEMRESATTRS_K8S_REPLICASET_NAME = Ce),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_UID = w),
      (e.SEMRESATTRS_K8S_DEPLOYMENT_NAME = we),
      (e.SEMRESATTRS_K8S_STATEFULSET_UID = Te),
      (e.SEMRESATTRS_K8S_STATEFULSET_NAME = Ee),
      (e.SEMRESATTRS_K8S_DAEMONSET_UID = De),
      (e.SEMRESATTRS_K8S_DAEMONSET_NAME = Oe),
      (e.SEMRESATTRS_K8S_JOB_UID = ke),
      (e.SEMRESATTRS_K8S_JOB_NAME = Ae),
      (e.SEMRESATTRS_K8S_CRONJOB_UID = je),
      (e.SEMRESATTRS_K8S_CRONJOB_NAME = Me),
      (e.SEMRESATTRS_OS_TYPE = Ne),
      (e.SEMRESATTRS_OS_DESCRIPTION = Pe),
      (e.SEMRESATTRS_OS_NAME = T),
      (e.SEMRESATTRS_OS_VERSION = Fe),
      (e.SEMRESATTRS_PROCESS_PID = Ie),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = Le),
      (e.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = Re),
      (e.SEMRESATTRS_PROCESS_COMMAND = ze),
      (e.SEMRESATTRS_PROCESS_COMMAND_LINE = Be),
      (e.SEMRESATTRS_PROCESS_COMMAND_ARGS = Ve),
      (e.SEMRESATTRS_PROCESS_OWNER = He),
      (e.SEMRESATTRS_PROCESS_RUNTIME_NAME = Ue),
      (e.SEMRESATTRS_PROCESS_RUNTIME_VERSION = We),
      (e.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = Ge),
      (e.SEMRESATTRS_SERVICE_NAME = Ke),
      (e.SEMRESATTRS_SERVICE_NAMESPACE = qe),
      (e.SEMRESATTRS_SERVICE_INSTANCE_ID = Je),
      (e.SEMRESATTRS_SERVICE_VERSION = Ye),
      (e.SEMRESATTRS_TELEMETRY_SDK_NAME = Xe),
      (e.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = Ze),
      (e.SEMRESATTRS_TELEMETRY_SDK_VERSION = Qe),
      (e.SEMRESATTRS_TELEMETRY_AUTO_VERSION = $e),
      (e.SEMRESATTRS_WEBENGINE_NAME = et),
      (e.SEMRESATTRS_WEBENGINE_VERSION = tt),
      (e.SEMRESATTRS_WEBENGINE_DESCRIPTION = nt),
      (e.SemanticResourceAttributes = (0, t.createConstMap)([
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        ee,
        te,
        ne,
        re,
        ie,
        ae,
        oe,
        se,
        ce,
        le,
        ue,
        de,
        fe,
        pe,
        me,
        he,
        ge,
        _e,
        ve,
        ye,
        be,
        xe,
        Se,
        Ce,
        w,
        we,
        Te,
        Ee,
        De,
        Oe,
        ke,
        Ae,
        je,
        Me,
        Ne,
        Pe,
        T,
        Fe,
        Ie,
        Le,
        Re,
        ze,
        Be,
        Ve,
        He,
        Ue,
        We,
        Ge,
        Ke,
        qe,
        Je,
        Ye,
        Xe,
        Ze,
        Qe,
        $e,
        et,
        tt,
        nt,
      ])));
    var rt = `alibaba_cloud`,
      it = `aws`,
      at = `azure`,
      ot = `gcp`;
    ((e.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = rt),
      (e.CLOUDPROVIDERVALUES_AWS = it),
      (e.CLOUDPROVIDERVALUES_AZURE = at),
      (e.CLOUDPROVIDERVALUES_GCP = ot),
      (e.CloudProviderValues = (0, t.createConstMap)([rt, it, at, ot])));
    var st = `alibaba_cloud_ecs`,
      ct = `alibaba_cloud_fc`,
      lt = `aws_ec2`,
      ut = `aws_ecs`,
      dt = `aws_eks`,
      ft = `aws_lambda`,
      pt = `aws_elastic_beanstalk`,
      mt = `azure_vm`,
      ht = `azure_container_instances`,
      gt = `azure_aks`,
      _t = `azure_functions`,
      vt = `azure_app_service`,
      yt = `gcp_compute_engine`,
      bt = `gcp_cloud_run`,
      xt = `gcp_kubernetes_engine`,
      St = `gcp_cloud_functions`,
      Ct = `gcp_app_engine`;
    ((e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = st),
      (e.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = ct),
      (e.CLOUDPLATFORMVALUES_AWS_EC2 = lt),
      (e.CLOUDPLATFORMVALUES_AWS_ECS = ut),
      (e.CLOUDPLATFORMVALUES_AWS_EKS = dt),
      (e.CLOUDPLATFORMVALUES_AWS_LAMBDA = ft),
      (e.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = pt),
      (e.CLOUDPLATFORMVALUES_AZURE_VM = mt),
      (e.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ht),
      (e.CLOUDPLATFORMVALUES_AZURE_AKS = gt),
      (e.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = _t),
      (e.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = vt),
      (e.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = yt),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = bt),
      (e.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = xt),
      (e.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = St),
      (e.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = Ct),
      (e.CloudPlatformValues = (0, t.createConstMap)([
        st,
        ct,
        lt,
        ut,
        dt,
        ft,
        pt,
        mt,
        ht,
        gt,
        _t,
        vt,
        yt,
        bt,
        xt,
        St,
        Ct,
      ])));
    var wt = `ec2`,
      Tt = `fargate`;
    ((e.AWSECSLAUNCHTYPEVALUES_EC2 = wt),
      (e.AWSECSLAUNCHTYPEVALUES_FARGATE = Tt),
      (e.AwsEcsLaunchtypeValues = (0, t.createConstMap)([wt, Tt])));
    var Et = `amd64`,
      E = `arm32`,
      Dt = `arm64`,
      Ot = `ia64`,
      kt = `ppc32`,
      D = `ppc64`,
      At = `x86`;
    ((e.HOSTARCHVALUES_AMD64 = Et),
      (e.HOSTARCHVALUES_ARM32 = E),
      (e.HOSTARCHVALUES_ARM64 = Dt),
      (e.HOSTARCHVALUES_IA64 = Ot),
      (e.HOSTARCHVALUES_PPC32 = kt),
      (e.HOSTARCHVALUES_PPC64 = D),
      (e.HOSTARCHVALUES_X86 = At),
      (e.HostArchValues = (0, t.createConstMap)([Et, E, Dt, Ot, kt, D, At])));
    var jt = `windows`,
      Mt = `linux`,
      Nt = `darwin`,
      Pt = `freebsd`,
      Ft = `netbsd`,
      It = `openbsd`,
      Lt = `dragonflybsd`,
      Rt = `hpux`,
      zt = `aix`,
      Bt = `solaris`,
      Vt = `z_os`;
    ((e.OSTYPEVALUES_WINDOWS = jt),
      (e.OSTYPEVALUES_LINUX = Mt),
      (e.OSTYPEVALUES_DARWIN = Nt),
      (e.OSTYPEVALUES_FREEBSD = Pt),
      (e.OSTYPEVALUES_NETBSD = Ft),
      (e.OSTYPEVALUES_OPENBSD = It),
      (e.OSTYPEVALUES_DRAGONFLYBSD = Lt),
      (e.OSTYPEVALUES_HPUX = Rt),
      (e.OSTYPEVALUES_AIX = zt),
      (e.OSTYPEVALUES_SOLARIS = Bt),
      (e.OSTYPEVALUES_Z_OS = Vt),
      (e.OsTypeValues = (0, t.createConstMap)([jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt])));
    var Ht = `cpp`,
      Ut = `dotnet`,
      Wt = `erlang`,
      Gt = `go`,
      Kt = `java`,
      qt = `nodejs`,
      Jt = `php`,
      Yt = `python`,
      Xt = `ruby`,
      Zt = `webjs`;
    ((e.TELEMETRYSDKLANGUAGEVALUES_CPP = Ht),
      (e.TELEMETRYSDKLANGUAGEVALUES_DOTNET = Ut),
      (e.TELEMETRYSDKLANGUAGEVALUES_ERLANG = Wt),
      (e.TELEMETRYSDKLANGUAGEVALUES_GO = Gt),
      (e.TELEMETRYSDKLANGUAGEVALUES_JAVA = Kt),
      (e.TELEMETRYSDKLANGUAGEVALUES_NODEJS = qt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PHP = Jt),
      (e.TELEMETRYSDKLANGUAGEVALUES_PYTHON = Yt),
      (e.TELEMETRYSDKLANGUAGEVALUES_RUBY = Xt),
      (e.TELEMETRYSDKLANGUAGEVALUES_WEBJS = Zt),
      (e.TelemetrySdkLanguageValues = (0, t.createConstMap)([
        Ht,
        Ut,
        Wt,
        Gt,
        Kt,
        qt,
        Jt,
        Yt,
        Xt,
        Zt,
      ])));
  }),
  sr = e.n((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }), n(or(), e));
  }),
  cr = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ATTR_EXCEPTION_TYPE =
        e.ATTR_EXCEPTION_STACKTRACE =
        e.ATTR_EXCEPTION_MESSAGE =
        e.ATTR_EXCEPTION_ESCAPED =
        e.ERROR_TYPE_VALUE_OTHER =
        e.ATTR_ERROR_TYPE =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_POH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 =
        e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 =
        e.ATTR_DOTNET_GC_HEAP_GENERATION =
        e.DB_SYSTEM_NAME_VALUE_POSTGRESQL =
        e.DB_SYSTEM_NAME_VALUE_MYSQL =
        e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER =
        e.DB_SYSTEM_NAME_VALUE_MARIADB =
        e.ATTR_DB_SYSTEM_NAME =
        e.ATTR_DB_STORED_PROCEDURE_NAME =
        e.ATTR_DB_RESPONSE_STATUS_CODE =
        e.ATTR_DB_QUERY_TEXT =
        e.ATTR_DB_QUERY_SUMMARY =
        e.ATTR_DB_OPERATION_NAME =
        e.ATTR_DB_OPERATION_BATCH_SIZE =
        e.ATTR_DB_NAMESPACE =
        e.ATTR_DB_COLLECTION_NAME =
        e.ATTR_CODE_STACKTRACE =
        e.ATTR_CODE_LINE_NUMBER =
        e.ATTR_CODE_FUNCTION_NAME =
        e.ATTR_CODE_FILE_PATH =
        e.ATTR_CODE_COLUMN_NUMBER =
        e.ATTR_CLIENT_PORT =
        e.ATTR_CLIENT_ADDRESS =
        e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS =
        e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE =
        e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS =
        e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK =
        e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER =
        e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED =
        e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT =
        e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED =
        e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED =
        e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT =
          void 0),
      (e.OTEL_STATUS_CODE_VALUE_ERROR =
        e.ATTR_OTEL_STATUS_CODE =
        e.ATTR_OTEL_SCOPE_VERSION =
        e.ATTR_OTEL_SCOPE_NAME =
        e.NETWORK_TYPE_VALUE_IPV6 =
        e.NETWORK_TYPE_VALUE_IPV4 =
        e.ATTR_NETWORK_TYPE =
        e.NETWORK_TRANSPORT_VALUE_UNIX =
        e.NETWORK_TRANSPORT_VALUE_UDP =
        e.NETWORK_TRANSPORT_VALUE_TCP =
        e.NETWORK_TRANSPORT_VALUE_QUIC =
        e.NETWORK_TRANSPORT_VALUE_PIPE =
        e.ATTR_NETWORK_TRANSPORT =
        e.ATTR_NETWORK_PROTOCOL_VERSION =
        e.ATTR_NETWORK_PROTOCOL_NAME =
        e.ATTR_NETWORK_PEER_PORT =
        e.ATTR_NETWORK_PEER_ADDRESS =
        e.ATTR_NETWORK_LOCAL_PORT =
        e.ATTR_NETWORK_LOCAL_ADDRESS =
        e.JVM_THREAD_STATE_VALUE_WAITING =
        e.JVM_THREAD_STATE_VALUE_TIMED_WAITING =
        e.JVM_THREAD_STATE_VALUE_TERMINATED =
        e.JVM_THREAD_STATE_VALUE_RUNNABLE =
        e.JVM_THREAD_STATE_VALUE_NEW =
        e.JVM_THREAD_STATE_VALUE_BLOCKED =
        e.ATTR_JVM_THREAD_STATE =
        e.ATTR_JVM_THREAD_DAEMON =
        e.JVM_MEMORY_TYPE_VALUE_NON_HEAP =
        e.JVM_MEMORY_TYPE_VALUE_HEAP =
        e.ATTR_JVM_MEMORY_TYPE =
        e.ATTR_JVM_MEMORY_POOL_NAME =
        e.ATTR_JVM_GC_NAME =
        e.ATTR_JVM_GC_ACTION =
        e.ATTR_HTTP_ROUTE =
        e.ATTR_HTTP_RESPONSE_STATUS_CODE =
        e.ATTR_HTTP_RESPONSE_HEADER =
        e.ATTR_HTTP_REQUEST_RESEND_COUNT =
        e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL =
        e.HTTP_REQUEST_METHOD_VALUE_TRACE =
        e.HTTP_REQUEST_METHOD_VALUE_PUT =
        e.HTTP_REQUEST_METHOD_VALUE_POST =
        e.HTTP_REQUEST_METHOD_VALUE_PATCH =
        e.HTTP_REQUEST_METHOD_VALUE_OPTIONS =
        e.HTTP_REQUEST_METHOD_VALUE_HEAD =
        e.HTTP_REQUEST_METHOD_VALUE_GET =
        e.HTTP_REQUEST_METHOD_VALUE_DELETE =
        e.HTTP_REQUEST_METHOD_VALUE_CONNECT =
        e.HTTP_REQUEST_METHOD_VALUE_OTHER =
        e.ATTR_HTTP_REQUEST_METHOD =
        e.ATTR_HTTP_REQUEST_HEADER =
          void 0),
      (e.ATTR_USER_AGENT_ORIGINAL =
        e.ATTR_URL_SCHEME =
        e.ATTR_URL_QUERY =
        e.ATTR_URL_PATH =
        e.ATTR_URL_FULL =
        e.ATTR_URL_FRAGMENT =
        e.ATTR_TELEMETRY_SDK_VERSION =
        e.ATTR_TELEMETRY_SDK_NAME =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_GO =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET =
        e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP =
        e.ATTR_TELEMETRY_SDK_LANGUAGE =
        e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS =
        e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS =
        e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING =
        e.ATTR_SIGNALR_TRANSPORT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT =
        e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE =
        e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN =
        e.ATTR_SIGNALR_CONNECTION_STATUS =
        e.ATTR_SERVICE_VERSION =
        e.ATTR_SERVICE_NAME =
        e.ATTR_SERVER_PORT =
        e.ATTR_SERVER_ADDRESS =
        e.ATTR_OTEL_STATUS_DESCRIPTION =
        e.OTEL_STATUS_CODE_VALUE_OK =
          void 0),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = `aspnetcore.diagnostics.exception.result`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = `aborted`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = `handled`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = `skipped`),
      (e.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = `unhandled`),
      (e.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = `aspnetcore.diagnostics.handler.type`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = `aspnetcore.rate_limiting.policy`),
      (e.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = `aspnetcore.rate_limiting.result`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = `acquired`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = `endpoint_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = `global_limiter`),
      (e.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = `request_canceled`),
      (e.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = `aspnetcore.request.is_unhandled`),
      (e.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = `aspnetcore.routing.is_fallback`),
      (e.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = `aspnetcore.routing.match_status`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = `failure`),
      (e.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = `success`),
      (e.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = `aspnetcore.user.is_authenticated`),
      (e.ATTR_CLIENT_ADDRESS = `client.address`),
      (e.ATTR_CLIENT_PORT = `client.port`),
      (e.ATTR_CODE_COLUMN_NUMBER = `code.column.number`),
      (e.ATTR_CODE_FILE_PATH = `code.file.path`),
      (e.ATTR_CODE_FUNCTION_NAME = `code.function.name`),
      (e.ATTR_CODE_LINE_NUMBER = `code.line.number`),
      (e.ATTR_CODE_STACKTRACE = `code.stacktrace`),
      (e.ATTR_DB_COLLECTION_NAME = `db.collection.name`),
      (e.ATTR_DB_NAMESPACE = `db.namespace`),
      (e.ATTR_DB_OPERATION_BATCH_SIZE = `db.operation.batch.size`),
      (e.ATTR_DB_OPERATION_NAME = `db.operation.name`),
      (e.ATTR_DB_QUERY_SUMMARY = `db.query.summary`),
      (e.ATTR_DB_QUERY_TEXT = `db.query.text`),
      (e.ATTR_DB_RESPONSE_STATUS_CODE = `db.response.status_code`),
      (e.ATTR_DB_STORED_PROCEDURE_NAME = `db.stored_procedure.name`),
      (e.ATTR_DB_SYSTEM_NAME = `db.system.name`),
      (e.DB_SYSTEM_NAME_VALUE_MARIADB = `mariadb`),
      (e.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = `microsoft.sql_server`),
      (e.DB_SYSTEM_NAME_VALUE_MYSQL = `mysql`),
      (e.DB_SYSTEM_NAME_VALUE_POSTGRESQL = `postgresql`),
      (e.ATTR_DOTNET_GC_HEAP_GENERATION = `dotnet.gc.heap.generation`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = `gen0`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = `gen1`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = `gen2`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = `loh`),
      (e.DOTNET_GC_HEAP_GENERATION_VALUE_POH = `poh`),
      (e.ATTR_ERROR_TYPE = `error.type`),
      (e.ERROR_TYPE_VALUE_OTHER = `_OTHER`),
      (e.ATTR_EXCEPTION_ESCAPED = `exception.escaped`),
      (e.ATTR_EXCEPTION_MESSAGE = `exception.message`),
      (e.ATTR_EXCEPTION_STACKTRACE = `exception.stacktrace`),
      (e.ATTR_EXCEPTION_TYPE = `exception.type`),
      (e.ATTR_HTTP_REQUEST_HEADER = (e) => `http.request.header.${e}`),
      (e.ATTR_HTTP_REQUEST_METHOD = `http.request.method`),
      (e.HTTP_REQUEST_METHOD_VALUE_OTHER = `_OTHER`),
      (e.HTTP_REQUEST_METHOD_VALUE_CONNECT = `CONNECT`),
      (e.HTTP_REQUEST_METHOD_VALUE_DELETE = `DELETE`),
      (e.HTTP_REQUEST_METHOD_VALUE_GET = `GET`),
      (e.HTTP_REQUEST_METHOD_VALUE_HEAD = `HEAD`),
      (e.HTTP_REQUEST_METHOD_VALUE_OPTIONS = `OPTIONS`),
      (e.HTTP_REQUEST_METHOD_VALUE_PATCH = `PATCH`),
      (e.HTTP_REQUEST_METHOD_VALUE_POST = `POST`),
      (e.HTTP_REQUEST_METHOD_VALUE_PUT = `PUT`),
      (e.HTTP_REQUEST_METHOD_VALUE_TRACE = `TRACE`),
      (e.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = `http.request.method_original`),
      (e.ATTR_HTTP_REQUEST_RESEND_COUNT = `http.request.resend_count`),
      (e.ATTR_HTTP_RESPONSE_HEADER = (e) => `http.response.header.${e}`),
      (e.ATTR_HTTP_RESPONSE_STATUS_CODE = `http.response.status_code`),
      (e.ATTR_HTTP_ROUTE = `http.route`),
      (e.ATTR_JVM_GC_ACTION = `jvm.gc.action`),
      (e.ATTR_JVM_GC_NAME = `jvm.gc.name`),
      (e.ATTR_JVM_MEMORY_POOL_NAME = `jvm.memory.pool.name`),
      (e.ATTR_JVM_MEMORY_TYPE = `jvm.memory.type`),
      (e.JVM_MEMORY_TYPE_VALUE_HEAP = `heap`),
      (e.JVM_MEMORY_TYPE_VALUE_NON_HEAP = `non_heap`),
      (e.ATTR_JVM_THREAD_DAEMON = `jvm.thread.daemon`),
      (e.ATTR_JVM_THREAD_STATE = `jvm.thread.state`),
      (e.JVM_THREAD_STATE_VALUE_BLOCKED = `blocked`),
      (e.JVM_THREAD_STATE_VALUE_NEW = `new`),
      (e.JVM_THREAD_STATE_VALUE_RUNNABLE = `runnable`),
      (e.JVM_THREAD_STATE_VALUE_TERMINATED = `terminated`),
      (e.JVM_THREAD_STATE_VALUE_TIMED_WAITING = `timed_waiting`),
      (e.JVM_THREAD_STATE_VALUE_WAITING = `waiting`),
      (e.ATTR_NETWORK_LOCAL_ADDRESS = `network.local.address`),
      (e.ATTR_NETWORK_LOCAL_PORT = `network.local.port`),
      (e.ATTR_NETWORK_PEER_ADDRESS = `network.peer.address`),
      (e.ATTR_NETWORK_PEER_PORT = `network.peer.port`),
      (e.ATTR_NETWORK_PROTOCOL_NAME = `network.protocol.name`),
      (e.ATTR_NETWORK_PROTOCOL_VERSION = `network.protocol.version`),
      (e.ATTR_NETWORK_TRANSPORT = `network.transport`),
      (e.NETWORK_TRANSPORT_VALUE_PIPE = `pipe`),
      (e.NETWORK_TRANSPORT_VALUE_QUIC = `quic`),
      (e.NETWORK_TRANSPORT_VALUE_TCP = `tcp`),
      (e.NETWORK_TRANSPORT_VALUE_UDP = `udp`),
      (e.NETWORK_TRANSPORT_VALUE_UNIX = `unix`),
      (e.ATTR_NETWORK_TYPE = `network.type`),
      (e.NETWORK_TYPE_VALUE_IPV4 = `ipv4`),
      (e.NETWORK_TYPE_VALUE_IPV6 = `ipv6`),
      (e.ATTR_OTEL_SCOPE_NAME = `otel.scope.name`),
      (e.ATTR_OTEL_SCOPE_VERSION = `otel.scope.version`),
      (e.ATTR_OTEL_STATUS_CODE = `otel.status_code`),
      (e.OTEL_STATUS_CODE_VALUE_ERROR = `ERROR`),
      (e.OTEL_STATUS_CODE_VALUE_OK = `OK`),
      (e.ATTR_OTEL_STATUS_DESCRIPTION = `otel.status_description`),
      (e.ATTR_SERVER_ADDRESS = `server.address`),
      (e.ATTR_SERVER_PORT = `server.port`),
      (e.ATTR_SERVICE_NAME = `service.name`),
      (e.ATTR_SERVICE_VERSION = `service.version`),
      (e.ATTR_SIGNALR_CONNECTION_STATUS = `signalr.connection.status`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = `app_shutdown`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = `normal_closure`),
      (e.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = `timeout`),
      (e.ATTR_SIGNALR_TRANSPORT = `signalr.transport`),
      (e.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = `long_polling`),
      (e.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = `server_sent_events`),
      (e.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = `web_sockets`),
      (e.ATTR_TELEMETRY_SDK_LANGUAGE = `telemetry.sdk.language`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = `cpp`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = `dotnet`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = `erlang`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_GO = `go`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = `java`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = `nodejs`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = `php`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = `python`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = `ruby`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = `rust`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = `swift`),
      (e.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = `webjs`),
      (e.ATTR_TELEMETRY_SDK_NAME = `telemetry.sdk.name`),
      (e.ATTR_TELEMETRY_SDK_VERSION = `telemetry.sdk.version`),
      (e.ATTR_URL_FRAGMENT = `url.fragment`),
      (e.ATTR_URL_FULL = `url.full`),
      (e.ATTR_URL_PATH = `url.path`),
      (e.ATTR_URL_QUERY = `url.query`),
      (e.ATTR_URL_SCHEME = `url.scheme`),
      (e.ATTR_USER_AGENT_ORIGINAL = `user_agent.original`));
  }),
  lr = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS =
        e.METRIC_KESTREL_UPGRADED_CONNECTIONS =
        e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION =
        e.METRIC_KESTREL_REJECTED_CONNECTIONS =
        e.METRIC_KESTREL_QUEUED_REQUESTS =
        e.METRIC_KESTREL_QUEUED_CONNECTIONS =
        e.METRIC_KESTREL_CONNECTION_DURATION =
        e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES =
        e.METRIC_KESTREL_ACTIVE_CONNECTIONS =
        e.METRIC_JVM_THREAD_COUNT =
        e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC =
        e.METRIC_JVM_MEMORY_USED =
        e.METRIC_JVM_MEMORY_LIMIT =
        e.METRIC_JVM_MEMORY_COMMITTED =
        e.METRIC_JVM_GC_DURATION =
        e.METRIC_JVM_CPU_TIME =
        e.METRIC_JVM_CPU_RECENT_UTILIZATION =
        e.METRIC_JVM_CPU_COUNT =
        e.METRIC_JVM_CLASS_UNLOADED =
        e.METRIC_JVM_CLASS_LOADED =
        e.METRIC_JVM_CLASS_COUNT =
        e.METRIC_HTTP_SERVER_REQUEST_DURATION =
        e.METRIC_HTTP_CLIENT_REQUEST_DURATION =
        e.METRIC_DOTNET_TIMER_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT =
        e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH =
        e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET =
        e.METRIC_DOTNET_PROCESS_CPU_TIME =
        e.METRIC_DOTNET_PROCESS_CPU_COUNT =
        e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS =
        e.METRIC_DOTNET_JIT_COMPILED_METHODS =
        e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE =
        e.METRIC_DOTNET_JIT_COMPILATION_TIME =
        e.METRIC_DOTNET_GC_PAUSE_TIME =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE =
        e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE =
        e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED =
        e.METRIC_DOTNET_GC_COLLECTIONS =
        e.METRIC_DOTNET_EXCEPTIONS =
        e.METRIC_DOTNET_ASSEMBLY_COUNT =
        e.METRIC_DB_CLIENT_OPERATION_DURATION =
        e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION =
        e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE =
        e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS =
        e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES =
        e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS =
          void 0),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = void 0),
      (e.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = `aspnetcore.diagnostics.exceptions`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = `aspnetcore.rate_limiting.active_request_leases`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = `aspnetcore.rate_limiting.queued_requests`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = `aspnetcore.rate_limiting.request.time_in_queue`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = `aspnetcore.rate_limiting.request_lease.duration`),
      (e.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = `aspnetcore.rate_limiting.requests`),
      (e.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = `aspnetcore.routing.match_attempts`),
      (e.METRIC_DB_CLIENT_OPERATION_DURATION = `db.client.operation.duration`),
      (e.METRIC_DOTNET_ASSEMBLY_COUNT = `dotnet.assembly.count`),
      (e.METRIC_DOTNET_EXCEPTIONS = `dotnet.exceptions`),
      (e.METRIC_DOTNET_GC_COLLECTIONS = `dotnet.gc.collections`),
      (e.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = `dotnet.gc.heap.total_allocated`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = `dotnet.gc.last_collection.heap.fragmentation.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = `dotnet.gc.last_collection.heap.size`),
      (e.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = `dotnet.gc.last_collection.memory.committed_size`),
      (e.METRIC_DOTNET_GC_PAUSE_TIME = `dotnet.gc.pause.time`),
      (e.METRIC_DOTNET_JIT_COMPILATION_TIME = `dotnet.jit.compilation.time`),
      (e.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = `dotnet.jit.compiled_il.size`),
      (e.METRIC_DOTNET_JIT_COMPILED_METHODS = `dotnet.jit.compiled_methods`),
      (e.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = `dotnet.monitor.lock_contentions`),
      (e.METRIC_DOTNET_PROCESS_CPU_COUNT = `dotnet.process.cpu.count`),
      (e.METRIC_DOTNET_PROCESS_CPU_TIME = `dotnet.process.cpu.time`),
      (e.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = `dotnet.process.memory.working_set`),
      (e.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = `dotnet.thread_pool.queue.length`),
      (e.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = `dotnet.thread_pool.thread.count`),
      (e.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = `dotnet.thread_pool.work_item.count`),
      (e.METRIC_DOTNET_TIMER_COUNT = `dotnet.timer.count`),
      (e.METRIC_HTTP_CLIENT_REQUEST_DURATION = `http.client.request.duration`),
      (e.METRIC_HTTP_SERVER_REQUEST_DURATION = `http.server.request.duration`),
      (e.METRIC_JVM_CLASS_COUNT = `jvm.class.count`),
      (e.METRIC_JVM_CLASS_LOADED = `jvm.class.loaded`),
      (e.METRIC_JVM_CLASS_UNLOADED = `jvm.class.unloaded`),
      (e.METRIC_JVM_CPU_COUNT = `jvm.cpu.count`),
      (e.METRIC_JVM_CPU_RECENT_UTILIZATION = `jvm.cpu.recent_utilization`),
      (e.METRIC_JVM_CPU_TIME = `jvm.cpu.time`),
      (e.METRIC_JVM_GC_DURATION = `jvm.gc.duration`),
      (e.METRIC_JVM_MEMORY_COMMITTED = `jvm.memory.committed`),
      (e.METRIC_JVM_MEMORY_LIMIT = `jvm.memory.limit`),
      (e.METRIC_JVM_MEMORY_USED = `jvm.memory.used`),
      (e.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = `jvm.memory.used_after_last_gc`),
      (e.METRIC_JVM_THREAD_COUNT = `jvm.thread.count`),
      (e.METRIC_KESTREL_ACTIVE_CONNECTIONS = `kestrel.active_connections`),
      (e.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = `kestrel.active_tls_handshakes`),
      (e.METRIC_KESTREL_CONNECTION_DURATION = `kestrel.connection.duration`),
      (e.METRIC_KESTREL_QUEUED_CONNECTIONS = `kestrel.queued_connections`),
      (e.METRIC_KESTREL_QUEUED_REQUESTS = `kestrel.queued_requests`),
      (e.METRIC_KESTREL_REJECTED_CONNECTIONS = `kestrel.rejected_connections`),
      (e.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = `kestrel.tls_handshake.duration`),
      (e.METRIC_KESTREL_UPGRADED_CONNECTIONS = `kestrel.upgraded_connections`),
      (e.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = `signalr.server.active_connections`),
      (e.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = `signalr.server.connection.duration`));
  }),
  ur = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EVENT_EXCEPTION = void 0),
      (e.EVENT_EXCEPTION = `exception`));
  }),
  dr = e.n((e) => {
    var t =
        (e && e.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === void 0 && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              ((!i || (`get` in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i));
            }
          : function (e, t, n, r) {
              (r === void 0 && (r = n), (e[r] = t[n]));
            }),
      n =
        (e && e.__exportStar) ||
        function (e, n) {
          for (var r in e)
            r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
        };
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      n(ar(), e),
      n(sr(), e),
      n(cr(), e),
      n(lr(), e),
      n(ur(), e));
  }),
  fr,
  pr = e.r(() => {
    fr = `process.runtime.name`;
  }),
  mr,
  hr,
  gr = e.r(() => {
    (nr(),
      (mr = dr()),
      pr(),
      (hr = {
        [mr.ATTR_TELEMETRY_SDK_NAME]: `opentelemetry`,
        [fr]: `node`,
        [mr.ATTR_TELEMETRY_SDK_LANGUAGE]: mr.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
        [mr.ATTR_TELEMETRY_SDK_VERSION]: tr,
      }));
  }),
  _r = e.r(() => {
    (Zn(), $n(), er(), gr());
  }),
  vr = e.r(() => {
    _r();
  });
function N(e) {
  let t = e / 1e3;
  return [Math.trunc(t), Math.round((e % 1e3) * jr)];
}
function yr() {
  let e = M.timeOrigin;
  if (typeof e != `number`) {
    let t = M;
    e = t.timing && t.timing.fetchStart;
  }
  return e;
}
function br(e) {
  return kr(N(yr()), N(typeof e == `number` ? e : M.now()));
}
function xr(e) {
  if (Dr(e)) return e;
  if (typeof e == `number`) return e < yr() ? br(e) : N(e);
  if (e instanceof Date) return N(e.getTime());
  throw TypeError(`Invalid input type`);
}
function Sr(e, t) {
  let n = t[0] - e[0],
    r = t[1] - e[1];
  return (r < 0 && (--n, (r += Mr)), [n, r]);
}
function Cr(e) {
  let t = Ar,
    n = `${`0`.repeat(t)}${e[1]}Z`,
    r = n.substring(n.length - t - 1);
  return new Date(e[0] * 1e3).toISOString().replace(`000Z`, r);
}
function wr(e) {
  return e[0] * Mr + e[1];
}
function Tr(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function Er(e) {
  return e[0] * 1e6 + e[1] / 1e3;
}
function Dr(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == `number` && typeof e[1] == `number`;
}
function Or(e) {
  return Dr(e) || typeof e == `number` || e instanceof Date;
}
function kr(e, t) {
  let n = [e[0] + t[0], e[1] + t[1]];
  return (n[1] >= Mr && ((n[1] -= Mr), (n[0] += 1)), n);
}
var Ar,
  jr,
  Mr,
  Nr = e.r(() => {
    (vr(), (Ar = 9), (jr = 10 ** 6), (Mr = 10 ** Ar));
  });
function Pr(e) {
  typeof e != `number` && e.unref();
}
var Fr = e.r(() => {}),
  Ir,
  Lr = e.r(() => {
    (function (e) {
      ((e[(e.SUCCESS = 0)] = `SUCCESS`), (e[(e.FAILED = 1)] = `FAILED`));
    })((Ir ||= {}));
  }),
  Rr,
  zr,
  Br = e.r(() => {
    ((Rr = e.o(O())),
      (zr = class {
        _propagators;
        _fields;
        constructor(e = {}) {
          ((this._propagators = e.propagators ?? []),
            (this._fields = Array.from(
              new Set(
                this._propagators
                  .map((e) => (typeof e.fields == `function` ? e.fields() : []))
                  .reduce((e, t) => e.concat(t), []),
              ),
            )));
        }
        inject(e, t, n) {
          for (let r of this._propagators)
            try {
              r.inject(e, t, n);
            } catch (e) {
              Rr.diag.warn(`Failed to inject with ${r.constructor.name}. Err: ${e.message}`);
            }
        }
        extract(e, t, n) {
          return this._propagators.reduce((e, r) => {
            try {
              return r.extract(e, t, n);
            } catch (e) {
              Rr.diag.warn(`Failed to extract with ${r.constructor.name}. Err: ${e.message}`);
            }
            return e;
          }, e);
        }
        fields() {
          return this._fields.slice();
        }
      }));
  });
function Vr(e) {
  return Wr.test(e);
}
function Hr(e) {
  return Gr.test(e) && !Kr.test(e);
}
var Ur,
  Wr,
  Gr,
  Kr,
  qr = e.r(() => {
    ((Ur = `[_0-9a-z-*/]`),
      (Wr = RegExp(`^(?:${`[a-z]${Ur}{0,255}`}|${`[a-z0-9]${Ur}{0,240}@[a-z]${Ur}{0,13}`})$`)),
      (Gr = /^[ -~]{0,255}[!-~]$/),
      (Kr = /,|=/));
  }),
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r = e.r(() => {
    (qr(),
      (Jr = 32),
      (Yr = 512),
      (Xr = `,`),
      (Zr = `=`),
      (Qr = class e {
        _internalState = new Map();
        constructor(e) {
          e && this._parse(e);
        }
        set(e, t) {
          let n = this._clone();
          return (
            n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n
          );
        }
        unset(e) {
          let t = this._clone();
          return (t._internalState.delete(e), t);
        }
        get(e) {
          return this._internalState.get(e);
        }
        serialize() {
          return this._keys()
            .reduce((e, t) => (e.push(t + Zr + this.get(t)), e), [])
            .join(Xr);
        }
        _parse(e) {
          e.length > Yr ||
            ((this._internalState = e
              .split(Xr)
              .reverse()
              .reduce((e, t) => {
                let n = t.trim(),
                  r = n.indexOf(Zr);
                if (r !== -1) {
                  let i = n.slice(0, r),
                    a = n.slice(r + 1, t.length);
                  Vr(i) && Hr(a) && e.set(i, a);
                }
                return e;
              }, new Map())),
            this._internalState.size > Jr &&
              (this._internalState = new Map(
                Array.from(this._internalState.entries()).reverse().slice(0, Jr),
              )));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let t = new e();
          return ((t._internalState = new Map(this._internalState)), t);
        }
      }));
  });
function ei(e) {
  let t = ai.exec(e);
  return !t || (t[1] === `00` && t[5])
    ? null
    : { traceId: t[2], spanId: t[3], traceFlags: parseInt(t[4], 16) };
}
var ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si = e.r(() => {
    ((ti = e.o(O())),
      gn(),
      $r(),
      (ni = `traceparent`),
      (ri = `tracestate`),
      (ii = `00`),
      (ai = RegExp(
        `^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$`,
      )),
      (oi = class {
        inject(e, t, n) {
          let r = ti.trace.getSpanContext(e);
          if (!r || A(e) || !(0, ti.isSpanContextValid)(r)) return;
          let i = `${ii}-${r.traceId}-${r.spanId}-0${Number(r.traceFlags || ti.TraceFlags.NONE).toString(16)}`;
          (n.set(t, ni, i), r.traceState && n.set(t, ri, r.traceState.serialize()));
        }
        extract(e, t, n) {
          let r = n.get(t, ni);
          if (!r) return e;
          let i = Array.isArray(r) ? r[0] : r;
          if (typeof i != `string`) return e;
          let a = ei(i);
          if (!a) return e;
          a.isRemote = !0;
          let o = n.get(t, ri);
          if (o) {
            let e = Array.isArray(o) ? o.join(`,`) : o;
            a.traceState = new Qr(typeof e == `string` ? e : void 0);
          }
          return ti.trace.setSpanContext(e, a);
        }
        fields() {
          return [ni, ri];
        }
      }));
  });
function ci(e, t) {
  return e.setValue(fi, t);
}
function li(e) {
  return e.deleteValue(fi);
}
function ui(e) {
  return e.getValue(fi);
}
var di,
  fi,
  pi,
  mi = e.r(() => {
    ((di = e.o(O())),
      (fi = (0, di.createContextKey)(`OpenTelemetry SDK Context Key RPC_METADATA`)),
      (function (e) {
        e.HTTP = `http`;
      })((pi ||= {})));
  });
function hi(e) {
  if (!gi(e) || _i(e) !== bi) return !1;
  let t = Ti(e);
  if (t === null) return !0;
  let n = Di.call(t, `constructor`) && t.constructor;
  return typeof n == `function` && n instanceof n && Ci.call(n) === wi;
}
function gi(e) {
  return typeof e == `object` && !!e;
}
function _i(e) {
  return e == null ? (e === void 0 ? Si : xi) : Oi && Oi in Object(e) ? vi(e) : yi(e);
}
function vi(e) {
  let t = Di.call(e, Oi),
    n = e[Oi],
    r = !1;
  try {
    ((e[Oi] = void 0), (r = !0));
  } catch {}
  let i = ki.call(e);
  return (r && (t ? (e[Oi] = n) : delete e[Oi]), i);
}
function yi(e) {
  return ki.call(e);
}
var bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai = e.r(() => {
    ((bi = `[object Object]`),
      (xi = `[object Null]`),
      (Si = `[object Undefined]`),
      (Ci = Function.prototype.toString),
      (wi = Ci.call(Object)),
      (Ti = Object.getPrototypeOf),
      (Ei = Object.prototype),
      (Di = Ei.hasOwnProperty),
      (Oi = Symbol ? Symbol.toStringTag : void 0),
      (ki = Ei.toString));
  });
function ji(...e) {
  let t = e.shift(),
    n = new WeakMap();
  for (; e.length > 0;) t = Ni(t, e.shift(), 0, n);
  return t;
}
function Mi(e) {
  return Fi(e) ? e.slice() : e;
}
function Ni(e, t, n = 0, r) {
  let i;
  if (!(n > Bi)) {
    if ((n++, Ri(e) || Ri(t) || Ii(t))) i = Mi(t);
    else if (Fi(e)) {
      if (((i = e.slice()), Fi(t))) for (let e = 0, n = t.length; e < n; e++) i.push(Mi(t[e]));
      else if (Li(t)) {
        let e = Object.keys(t);
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e[n];
          i[r] = Mi(t[r]);
        }
      }
    } else if (Li(e))
      if (Li(t)) {
        if (!zi(e, t)) return t;
        i = Object.assign({}, e);
        let a = Object.keys(t);
        for (let o = 0, s = a.length; o < s; o++) {
          let s = a[o],
            c = t[s];
          if (Ri(c)) c === void 0 ? delete i[s] : (i[s] = c);
          else {
            let a = i[s],
              o = c;
            if (Pi(e, s, r) || Pi(t, s, r)) delete i[s];
            else {
              if (Li(a) && Li(o)) {
                let n = r.get(a) || [],
                  i = r.get(o) || [];
                (n.push({ obj: e, key: s }), i.push({ obj: t, key: s }), r.set(a, n), r.set(o, i));
              }
              i[s] = Ni(i[s], c, n, r);
            }
          }
        }
      } else i = t;
    return i;
  }
}
function Pi(e, t, n) {
  let r = n.get(e[t]) || [];
  for (let n = 0, i = r.length; n < i; n++) {
    let i = r[n];
    if (i.key === t && i.obj === e) return !0;
  }
  return !1;
}
function Fi(e) {
  return Array.isArray(e);
}
function Ii(e) {
  return typeof e == `function`;
}
function Li(e) {
  return !Ri(e) && !Fi(e) && !Ii(e) && typeof e == `object`;
}
function Ri(e) {
  return (
    typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean` ||
    e === void 0 ||
    e instanceof Date ||
    e instanceof RegExp ||
    e === null
  );
}
function zi(e, t) {
  return !(!hi(e) || !hi(t));
}
var Bi,
  Vi = e.r(() => {
    (Ai(), (Bi = 20));
  });
function Hi(e, t) {
  let n,
    r = new Promise(function (e, r) {
      n = setTimeout(function () {
        r(new Ui(`Operation timed out.`));
      }, t);
    });
  return Promise.race([e, r]).then(
    (e) => (clearTimeout(n), e),
    (e) => {
      throw (clearTimeout(n), e);
    },
  );
}
var Ui,
  Wi = e.r(() => {
    Ui = class e extends Error {
      constructor(t) {
        (super(t), Object.setPrototypeOf(this, e.prototype));
      }
    };
  });
function Gi(e, t) {
  return typeof t == `string` ? e === t : !!e.match(t);
}
function Ki(e, t) {
  if (!t) return !1;
  for (let n of t) if (Gi(e, n)) return !0;
  return !1;
}
var qi = e.r(() => {}),
  Ji,
  Yi = e.r(() => {
    Ji = class {
      _promise;
      _resolve;
      _reject;
      constructor() {
        this._promise = new Promise((e, t) => {
          ((this._resolve = e), (this._reject = t));
        });
      }
      get promise() {
        return this._promise;
      }
      resolve(e) {
        this._resolve(e);
      }
      reject(e) {
        this._reject(e);
      }
    };
  }),
  Xi,
  Zi = e.r(() => {
    (Yi(),
      (Xi = class {
        _callback;
        _that;
        _isCalled = !1;
        _deferred = new Ji();
        constructor(e, t) {
          ((this._callback = e), (this._that = t));
        }
        get isCalled() {
          return this._isCalled;
        }
        get promise() {
          return this._deferred.promise;
        }
        call(...e) {
          if (!this._isCalled) {
            this._isCalled = !0;
            try {
              Promise.resolve(this._callback.call(this._that, ...e)).then(
                (e) => this._deferred.resolve(e),
                (e) => this._deferred.reject(e),
              );
            } catch (e) {
              this._deferred.reject(e);
            }
          }
          return this._deferred.promise;
        }
      }));
  });
function Qi(e) {
  return e == null
    ? void 0
    : (ea[e.toUpperCase()] ??
        ($i.diag.warn(
          `Unknown log level "${e}", expected one of ${Object.keys(ea)}, using default`,
        ),
        $i.DiagLogLevel.INFO));
}
var $i,
  ea,
  ta = e.r(() => {
    (($i = e.o(O())),
      (ea = {
        ALL: $i.DiagLogLevel.ALL,
        VERBOSE: $i.DiagLogLevel.VERBOSE,
        DEBUG: $i.DiagLogLevel.DEBUG,
        INFO: $i.DiagLogLevel.INFO,
        WARN: $i.DiagLogLevel.WARN,
        ERROR: $i.DiagLogLevel.ERROR,
        NONE: $i.DiagLogLevel.NONE,
      }));
  });
function na(e, t) {
  return new Promise((n) => {
    ra.context.with(k(ra.context.active()), () => {
      e.export(t, (e) => {
        n(e);
      });
    });
  });
}
var ra,
  ia = e.r(() => {
    ((ra = e.o(O())), gn());
  }),
  aa = e.i({
    AnchoredClock: () => kn,
    BindOnceFuture: () => Xi,
    CompositePropagator: () => zr,
    ExportResultCode: () => Ir,
    RPCType: () => pi,
    SDK_INFO: () => hr,
    TRACE_PARENT_HEADER: () => ni,
    TRACE_STATE_HEADER: () => ri,
    TimeoutError: () => Ui,
    TraceState: () => Qr,
    W3CBaggagePropagator: () => Dn,
    W3CTraceContextPropagator: () => oi,
    _globalThis: () => Qn,
    addHrTimes: () => kr,
    callWithTimeout: () => Hi,
    deleteRPCMetadata: () => li,
    diagLogLevelFromString: () => Qi,
    getBooleanFromEnv: () => Jn,
    getNumberFromEnv: () => j,
    getRPCMetadata: () => ui,
    getStringFromEnv: () => qn,
    getStringListFromEnv: () => Yn,
    getTimeOrigin: () => yr,
    globalErrorHandler: () => Wn,
    hrTime: () => br,
    hrTimeDuration: () => Sr,
    hrTimeToMicroseconds: () => Er,
    hrTimeToMilliseconds: () => Tr,
    hrTimeToNanoseconds: () => wr,
    hrTimeToTimeStamp: () => Cr,
    internal: () => oa,
    isAttributeValue: () => Nn,
    isTimeInput: () => Or,
    isTimeInputHrTime: () => Dr,
    isTracingSuppressed: () => A,
    isUrlIgnored: () => Ki,
    loggingErrorHandler: () => Rn,
    merge: () => ji,
    millisToHrTime: () => N,
    otperformance: () => M,
    parseKeyPairsIntoRecord: () => Cn,
    parseTraceParent: () => ei,
    sanitizeAttributes: () => jn,
    setGlobalErrorHandler: () => Un,
    setRPCMetadata: () => ci,
    suppressTracing: () => k,
    timeInputToHrTime: () => xr,
    unrefTimer: () => Pr,
    unsuppressTracing: () => pn,
    urlMatches: () => Gi,
  }),
  oa,
  P = e.r(() => {
    (On(),
      An(),
      Ln(),
      Kn(),
      Hn(),
      Nr(),
      Fr(),
      Lr(),
      Tn(),
      vr(),
      Br(),
      si(),
      mi(),
      gn(),
      $r(),
      Vi(),
      Wi(),
      qi(),
      Zi(),
      ta(),
      ia(),
      (oa = { _export: na }));
  }),
  sa,
  ca,
  la = e.r(() => {
    ((sa = class {
      emit(e) {}
    }),
      (ca = new sa()));
  }),
  ua,
  da,
  fa = e.r(() => {
    (la(),
      (ua = class {
        getLogger(e, t, n) {
          return new sa();
        }
      }),
      (da = new ua()));
  }),
  pa,
  ma = e.r(() => {
    (la(),
      (pa = class {
        constructor(e, t, n, r) {
          ((this._provider = e), (this.name = t), (this.version = n), (this.options = r));
        }
        emit(e) {
          this._getLogger().emit(e);
        }
        _getLogger() {
          if (this._delegate) return this._delegate;
          let e = this._provider._getDelegateLogger(this.name, this.version, this.options);
          return e ? ((this._delegate = e), this._delegate) : ca;
        }
      }));
  }),
  ha,
  ga = e.r(() => {
    (fa(),
      ma(),
      (ha = class {
        getLogger(e, t, n) {
          return this._getDelegateLogger(e, t, n) ?? new pa(this, e, t, n);
        }
        _getDelegate() {
          return this._delegate ?? da;
        }
        _setDelegate(e) {
          this._delegate = e;
        }
        _getDelegateLogger(e, t, n) {
          return this._delegate?.getLogger(e, t, n);
        }
      }));
  }),
  _a,
  va = e.r(() => {
    _a = typeof globalThis == `object` ? globalThis : global;
  }),
  ya = e.r(() => {
    va();
  }),
  ba = e.r(() => {
    ya();
  });
function xa(e, t, n) {
  return (r) => (r === e ? t : n);
}
var Sa,
  Ca,
  wa = e.r(() => {
    (ba(), (Sa = Symbol.for(`io.opentelemetry.js.api.logs`)), (Ca = _a));
  }),
  Ta,
  Ea = e.r(() => {
    (wa(),
      fa(),
      ga(),
      (Ta = class e {
        constructor() {
          this._proxyLoggerProvider = new ha();
        }
        static getInstance() {
          return ((this._instance ||= new e()), this._instance);
        }
        setGlobalLoggerProvider(e) {
          return Ca[Sa]
            ? this.getLoggerProvider()
            : ((Ca[Sa] = xa(1, e, da)), this._proxyLoggerProvider._setDelegate(e), e);
        }
        getLoggerProvider() {
          return Ca[Sa]?.call(Ca, 1) ?? this._proxyLoggerProvider;
        }
        getLogger(e, t, n) {
          return this.getLoggerProvider().getLogger(e, t, n);
        }
        disable() {
          (delete Ca[Sa], (this._proxyLoggerProvider = new ha()));
        }
      }));
  }),
  Da,
  Oa = e.r(() => {
    (la(), ga(), Ea(), (Da = Ta.getInstance()));
  });
function ka(e, t, n, r) {
  for (let i = 0, a = e.length; i < a; i++) {
    let a = e[i];
    (t && a.setTracerProvider(t),
      n && a.setMeterProvider(n),
      r && a.setLoggerProvider && a.setLoggerProvider(r),
      a.getConfig().enabled || a.enable());
  }
}
function Aa(e) {
  e.forEach((e) => e.disable());
}
var ja = e.r(() => {});
function Ma(e) {
  let t = e.tracerProvider || Na.trace.getTracerProvider(),
    n = e.meterProvider || Na.metrics.getMeterProvider(),
    r = e.loggerProvider || Da.getLoggerProvider(),
    i = e.instrumentations?.flat() ?? [];
  return (
    ka(i, t, n, r),
    () => {
      Aa(i);
    }
  );
}
var Na,
  Pa = e.r(() => {
    ((Na = e.o(O())), Oa(), ja());
  });
function Fa(e, t, n) {
  if (!Ia(e)) return ($a.diag.error(`Invalid version: ${e}`), !1);
  if (!t) return !0;
  t = t.replace(/([<>=~^]+)\s+/g, `$1`);
  let r = Ha(e);
  if (!r) return !1;
  let i = [],
    a = La(r, t, i, n);
  return a && !n?.includePrerelease ? Ba(r, i) : a;
}
function Ia(e) {
  return typeof e == `string` && eo.test(e);
}
function La(e, t, n, r) {
  if (t.includes(`||`)) {
    let i = t.trim().split(`||`);
    for (let t of i) if (Ra(e, t, n, r)) return !0;
    return !1;
  } else if (t.includes(` - `)) t = Qa(t, r);
  else if (t.includes(` `)) {
    let i = t
      .trim()
      .replace(/\s{2,}/g, ` `)
      .split(` `);
    for (let t of i) if (!Ra(e, t, n, r)) return !1;
    return !0;
  }
  return Ra(e, t, n, r);
}
function Ra(e, t, n, r) {
  if (((t = Va(t, r)), t.includes(` `))) return La(e, t, n, r);
  {
    let r = Ua(t);
    return (n.push(r), za(e, r));
  }
}
function za(e, t) {
  if (t.invalid) return !1;
  if (!t.version || Wa(t.version)) return !0;
  let n = Ja(e.versionSegments || [], t.versionSegments || []);
  if (n === 0) {
    let r = e.prereleaseSegments || [],
      i = t.prereleaseSegments || [];
    n =
      !r.length && !i.length
        ? 0
        : !r.length && i.length
          ? 1
          : r.length && !i.length
            ? -1
            : Ja(r, i);
  }
  return no[t.op]?.includes(n);
}
function Ba(e, t) {
  return !e.prerelease || t.some((t) => t.prerelease && t.version === e.version);
}
function Va(e, t) {
  return ((e = e.trim()), (e = Xa(e, t)), (e = Ya(e)), (e = Za(e, t)), (e = e.trim()), e);
}
function F(e) {
  return !e || e.toLowerCase() === `x` || e === `*`;
}
function Ha(e) {
  let t = e.match(eo);
  if (!t) {
    $a.diag.error(`Invalid version: ${e}`);
    return;
  }
  let n = t.groups.version,
    r = t.groups.prerelease,
    i = t.groups.build,
    a = n.split(`.`),
    o = r?.split(`.`);
  return {
    op: void 0,
    version: n,
    versionSegments: a,
    versionSegmentCount: a.length,
    prerelease: r,
    prereleaseSegments: o,
    prereleaseSegmentCount: o ? o.length : 0,
    build: i,
  };
}
function Ua(e) {
  if (!e) return {};
  let t = e.match(to);
  if (!t) return ($a.diag.error(`Invalid range: ${e}`), { invalid: !0 });
  let n = t.groups.op,
    r = t.groups.version,
    i = t.groups.prerelease,
    a = t.groups.build,
    o = r.split(`.`),
    s = i?.split(`.`);
  return (
    n === `==` && (n = `=`),
    {
      op: n || `=`,
      version: r,
      versionSegments: o,
      versionSegmentCount: o.length,
      prerelease: i,
      prereleaseSegments: s,
      prereleaseSegmentCount: s ? s.length : 0,
      build: a,
    }
  );
}
function Wa(e) {
  return e === `*` || e === `x` || e === `X`;
}
function Ga(e) {
  let t = parseInt(e, 10);
  return isNaN(t) ? e : t;
}
function Ka(e, t) {
  if (typeof e == typeof t) {
    if (typeof e == `number` || typeof e == `string`) return [e, t];
    throw Error(`Version segments can only be strings or numbers`);
  } else return [String(e), String(t)];
}
function qa(e, t) {
  if (Wa(e) || Wa(t)) return 0;
  let [n, r] = Ka(Ga(e), Ga(t));
  return n > r ? 1 : n < r ? -1 : 0;
}
function Ja(e, t) {
  for (let n = 0; n < Math.max(e.length, t.length); n++) {
    let r = qa(e[n] || `0`, t[n] || `0`);
    if (r !== 0) return r;
  }
  return 0;
}
function Ya(e) {
  let t = yo;
  return e.replace(t, (e, t, n, r, i) => {
    let a;
    return (
      (a = F(t)
        ? ``
        : F(n)
          ? `>=${t}.0.0 <${+t + 1}.0.0-0`
          : F(r)
            ? `>=${t}.${n}.0 <${t}.${+n + 1}.0-0`
            : i
              ? `>=${t}.${n}.${r}-${i} <${t}.${+n + 1}.0-0`
              : `>=${t}.${n}.${r} <${t}.${+n + 1}.0-0`),
      a
    );
  });
}
function Xa(e, t) {
  let n = xo,
    r = t?.includePrerelease ? `-0` : ``;
  return e.replace(n, (e, t, n, i, a) => {
    let o;
    return (
      (o = F(t)
        ? ``
        : F(n)
          ? `>=${t}.0.0${r} <${+t + 1}.0.0-0`
          : F(i)
            ? t === `0`
              ? `>=${t}.${n}.0${r} <${t}.${+n + 1}.0-0`
              : `>=${t}.${n}.0${r} <${+t + 1}.0.0-0`
            : a
              ? t === `0`
                ? n === `0`
                  ? `>=${t}.${n}.${i}-${a} <${t}.${n}.${+i + 1}-0`
                  : `>=${t}.${n}.${i}-${a} <${t}.${+n + 1}.0-0`
                : `>=${t}.${n}.${i}-${a} <${+t + 1}.0.0-0`
              : t === `0`
                ? n === `0`
                  ? `>=${t}.${n}.${i}${r} <${t}.${n}.${+i + 1}-0`
                  : `>=${t}.${n}.${i}${r} <${t}.${+n + 1}.0-0`
                : `>=${t}.${n}.${i} <${+t + 1}.0.0-0`),
      o
    );
  });
}
function Za(e, t) {
  let n = ho;
  return e.replace(n, (e, n, r, i, a, o) => {
    let s = F(r),
      c = s || F(i),
      l = c || F(a),
      u = l;
    return (
      n === `=` && u && (n = ``),
      (o = t?.includePrerelease ? `-0` : ``),
      s
        ? (e = n === `>` || n === `<` ? `<0.0.0-0` : `*`)
        : n && u
          ? (c && (i = 0),
            (a = 0),
            n === `>`
              ? ((n = `>=`), c ? ((r = +r + 1), (i = 0), (a = 0)) : ((i = +i + 1), (a = 0)))
              : n === `<=` && ((n = `<`), c ? (r = +r + 1) : (i = +i + 1)),
            n === `<` && (o = `-0`),
            (e = `${n + r}.${i}.${a}${o}`))
          : c
            ? (e = `>=${r}.0.0${o} <${+r + 1}.0.0-0`)
            : l && (e = `>=${r}.${i}.0${o} <${r}.${+i + 1}.0-0`),
      e
    );
  });
}
function Qa(e, t) {
  let n = _o;
  return e.replace(
    n,
    (e, n, r, i, a, o, s, c, l, u, d, f) => (
      (n = F(r)
        ? ``
        : F(i)
          ? `>=${r}.0.0${t?.includePrerelease ? `-0` : ``}`
          : F(a)
            ? `>=${r}.${i}.0${t?.includePrerelease ? `-0` : ``}`
            : o
              ? `>=${n}`
              : `>=${n}${t?.includePrerelease ? `-0` : ``}`),
      (c = F(l)
        ? ``
        : F(u)
          ? `<${+l + 1}.0.0-0`
          : F(d)
            ? `<${l}.${+u + 1}.0-0`
            : f
              ? `<=${l}.${u}.${d}-${f}`
              : t?.includePrerelease
                ? `<${l}.${u}.${+d + 1}-0`
                : `<=${c}`),
      `${n} ${c}`.trim()
    ),
  );
}
var $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So = e.r(() => {
    (($a = e.o(O())),
      (eo =
        /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/),
      (to =
        /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/),
      (no = { ">": [1], ">=": [0, 1], "=": [0], "<=": [-1, 0], "<": [-1], "!=": [-1, 1] }),
      (ro = `[a-zA-Z0-9-]`),
      (io = `0|[1-9]\\d*`),
      (ao = `\\d*[a-zA-Z-]${ro}*`),
      (oo = `((?:<|>)?=?)`),
      (so = `(?:${io}|${ao})`),
      (co = `(?:-(${so}(?:\\.${so})*))`),
      (lo = `${ro}+`),
      (uo = `(?:\\+(${lo}(?:\\.${lo})*))`),
      (fo = `${io}|x|X|\\*`),
      (po = `[v=\\s]*(${fo})(?:\\.(${fo})(?:\\.(${fo})(?:${co})?${uo}?)?)?`),
      (mo = `^${oo}\\s*${po}$`),
      (ho = new RegExp(mo)),
      (go = `^\\s*(${po})\\s+-\\s+(${po})\\s*$`),
      (_o = new RegExp(go)),
      (vo = `^(?:~>?)${po}$`),
      (yo = new RegExp(vo)),
      (bo = `^(?:\\^)${po}$`),
      (xo = new RegExp(bo)));
  });
function Co(e, t, n) {
  let r = !!e[t] && Object.prototype.propertyIsEnumerable.call(e, t);
  Object.defineProperty(e, t, { configurable: !0, enumerable: r, writable: !0, value: n });
}
function wo(e) {
  e &&
    e.logger &&
    (typeof e.logger == `function`
      ? (I = e.logger)
      : I(`new logger isn't a function, not replacing`));
}
var I,
  To,
  Eo,
  Do,
  Oo,
  ko = e.r(() => {
    ((I = console.error.bind(console)),
      (To = (e, t, n) => {
        if (!e || !e[t]) {
          I(`no original function ` + String(t) + ` to wrap`);
          return;
        }
        if (!n) {
          (I(`no wrapper function`), I(Error().stack));
          return;
        }
        let r = e[t];
        if (typeof r != `function` || typeof n != `function`) {
          I(`original object and wrapper must be functions`);
          return;
        }
        let i = n(r, t);
        return (
          Co(i, `__original`, r),
          Co(i, `__unwrap`, () => {
            e[t] === i && Co(e, t, r);
          }),
          Co(i, `__wrapped`, !0),
          Co(e, t, i),
          i
        );
      }),
      (Eo = (e, t, n) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          (I(`must provide one or more modules to patch`), I(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          I(`must provide one or more functions to wrap on modules`);
          return;
        }
        e.forEach((e) => {
          t.forEach((t) => {
            To(e, t, n);
          });
        });
      }),
      (Do = (e, t) => {
        if (!e || !e[t]) {
          (I(`no function to unwrap.`), I(Error().stack));
          return;
        }
        let n = e[t];
        if (!n.__unwrap)
          I(`no original to unwrap to -- has ` + String(t) + ` already been unwrapped?`);
        else {
          n.__unwrap();
          return;
        }
      }),
      (Oo = (e, t) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          (I(`must provide one or more modules to patch`), I(Error().stack));
          return;
        }
        if (!(t && Array.isArray(t))) {
          I(`must provide one or more functions to unwrap on modules`);
          return;
        }
        e.forEach((e) => {
          t.forEach((t) => {
            Do(e, t);
          });
        });
      }),
      (wo.wrap = To),
      (wo.massWrap = Eo),
      (wo.unwrap = Do),
      (wo.massUnwrap = Oo));
  }),
  Ao,
  jo,
  Mo = e.r(() => {
    ((Ao = e.o(O())),
      Oa(),
      ko(),
      (jo = class {
        instrumentationName;
        instrumentationVersion;
        _config = {};
        _tracer;
        _meter;
        _logger;
        _diag;
        constructor(e, t, n) {
          ((this.instrumentationName = e),
            (this.instrumentationVersion = t),
            this.setConfig(n),
            (this._diag = Ao.diag.createComponentLogger({ namespace: e })),
            (this._tracer = Ao.trace.getTracer(e, t)),
            (this._meter = Ao.metrics.getMeter(e, t)),
            (this._logger = Da.getLogger(e, t)),
            this._updateMetricInstruments());
        }
        _wrap = To;
        _unwrap = Do;
        _massWrap = Eo;
        _massUnwrap = Oo;
        get meter() {
          return this._meter;
        }
        setMeterProvider(e) {
          ((this._meter = e.getMeter(this.instrumentationName, this.instrumentationVersion)),
            this._updateMetricInstruments());
        }
        get logger() {
          return this._logger;
        }
        setLoggerProvider(e) {
          this._logger = e.getLogger(this.instrumentationName, this.instrumentationVersion);
        }
        getModuleDefinitions() {
          let e = this.init() ?? [];
          return Array.isArray(e) ? e : [e];
        }
        _updateMetricInstruments() {}
        getConfig() {
          return this._config;
        }
        setConfig(e) {
          this._config = { enabled: !0, ...e };
        }
        setTracerProvider(e) {
          this._tracer = e.getTracer(this.instrumentationName, this.instrumentationVersion);
        }
        get tracer() {
          return this._tracer;
        }
        _runSpanCustomizationHook(e, t, n, r) {
          if (e)
            try {
              e(n, r);
            } catch (e) {
              this._diag.error(
                `Error running span customization hook due to exception in handler`,
                { triggerName: t },
                e,
              );
            }
        }
      }));
  }),
  No = e.n((e, t) => {
    var n = require("path").sep;
    t.exports = function (e) {
      var t = e.split(n),
        r = t.lastIndexOf(`node_modules`);
      if (r !== -1 && t[r + 1]) {
        for (
          var i = t[r + 1][0] === `@`,
            a = i ? t[r + 1] + `/` + t[r + 2] : t[r + 1],
            o = i ? 3 : 2,
            s = ``,
            c = r + o - 1,
            l = 0;
          l <= c;
          l++
        )
          l === c ? (s += t[l]) : (s += t[l] + n);
        for (var u = ``, d = t.length - 1, f = r + o; f <= d; f++)
          f === d ? (u += t[f]) : (u += t[f] + n);
        return { name: a, basedir: s, path: u };
      }
    };
  }),
  Po = e.n((t, n) => {
    var r = require("path"),
      i = require("module"),
      a = e.t()(`require-in-the-middle`),
      o = No();
    ((n.exports = d), (n.exports.Hook = d));
    var s, c;
    if (i.isBuiltin) c = i.isBuiltin;
    else if (i.builtinModules)
      c = (e) =>
        e.startsWith(`node:`) ? !0 : (s === void 0 && (s = new Set(i.builtinModules)), s.has(e));
    else throw Error(`'require-in-the-middle' requires Node.js >=v9.3.0 or >=v8.10.0`);
    var l = /([/\\]index)?(\.js)?$/,
      u = class {
        constructor() {
          ((this._localCache = new Map()), (this._kRitmExports = Symbol(`RitmExports`)));
        }
        has(e, t) {
          if (this._localCache.has(e)) return !0;
          if (t) return !1;
          {
            let t = require.cache[e];
            return !!(t && this._kRitmExports in t);
          }
        }
        get(e, t) {
          let n = this._localCache.get(e);
          if (n !== void 0) return n;
          if (!t) {
            let t = require.cache[e];
            return t && t[this._kRitmExports];
          }
        }
        set(e, t, n) {
          n
            ? this._localCache.set(e, t)
            : e in require.cache
              ? (require.cache[e][this._kRitmExports] = t)
              : (a(`non-core module is unexpectedly not in require.cache: "%s"`, e),
                this._localCache.set(e, t));
        }
      };
    function d(e, t, n) {
      if (!(this instanceof d)) return new d(e, t, n);
      if (
        (typeof e == `function`
          ? ((n = e), (e = null), (t = null))
          : typeof t == `function` && ((n = t), (t = null)),
        typeof i._resolveFilename != `function`)
      ) {
        (console.error(
          `Error: Expected Module._resolveFilename to be a function (was: %s) - aborting!`,
          typeof i._resolveFilename,
        ),
          console.error(
            `Please report this error as an issue related to Node.js %s at https://github.com/nodejs/require-in-the-middle/issues`,
            process.version,
          ));
        return;
      }
      ((this._cache = new u()), (this._unhooked = !1), (this._origRequire = i.prototype.require));
      let s = this,
        l = new Set(),
        p = t ? t.internals === !0 : !1,
        m = Array.isArray(e);
      (a(`registering require hook`),
        (this._require = i.prototype.require =
          function (e) {
            return s._unhooked === !0
              ? (a(`ignoring require call - module is soft-unhooked`),
                s._origRequire.apply(this, arguments))
              : h.call(this, arguments, !1);
          }),
        typeof process.getBuiltinModule == `function` &&
          ((this._origGetBuiltinModule = process.getBuiltinModule),
          (this._getBuiltinModule = process.getBuiltinModule =
            function (e) {
              return s._unhooked === !0
                ? (a(`ignoring process.getBuiltinModule call - module is soft-unhooked`),
                  s._origGetBuiltinModule.apply(this, arguments))
                : h.call(this, arguments, !0);
            })));
      function h(t, u) {
        let d = t[0],
          h = c(d),
          g;
        if (h) {
          if (((g = d), d.startsWith(`node:`))) {
            let e = d.slice(5);
            c(e) && (g = e);
          }
        } else if (u)
          return (
            a(`call to process.getBuiltinModule with unknown built-in id`),
            s._origGetBuiltinModule.apply(this, t)
          );
        else
          try {
            g = i._resolveFilename(d, this);
          } catch (e) {
            return (
              a(
                `Module._resolveFilename("%s") threw %j, calling original Module.require`,
                d,
                e.message,
              ),
              s._origRequire.apply(this, t)
            );
          }
        let _, v;
        if (
          (a(`processing %s module require('%s'): %s`, h === !0 ? `core` : `non-core`, d, g),
          s._cache.has(g, h) === !0)
        )
          return (a(`returning already patched cached module: %s`, g), s._cache.get(g, h));
        let y = l.has(g);
        y === !1 && l.add(g);
        let b = u ? s._origGetBuiltinModule.apply(this, t) : s._origRequire.apply(this, t);
        if (y === !0)
          return (a(`module is in the process of being patched already - ignoring: %s`, g), b);
        if ((l.delete(g), h === !0)) {
          if (m === !0 && e.includes(g) === !1)
            return (a(`ignoring core module not on whitelist: %s`, g), b);
          _ = g;
        } else if (m === !0 && e.includes(g)) {
          let e = r.parse(g);
          ((_ = e.name), (v = e.dir));
        } else {
          let t = o(g);
          if (t === void 0) return (a(`could not parse filename: %s`, g), b);
          ((_ = t.name), (v = t.basedir));
          let n = f(t);
          a(`resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)`, _, d, n, v);
          let i = !1;
          if (m) {
            if (
              (!d.startsWith(`.`) && e.includes(d) && ((_ = d), (i = !0)),
              !e.includes(_) && !e.includes(n))
            )
              return b;
            e.includes(n) && n !== _ && ((_ = n), (i = !0));
          }
          if (!i) {
            let e;
            try {
              e = require.resolve(_, { paths: [v] });
            } catch {
              return (a(`could not resolve module: %s`, _), s._cache.set(g, b, h), b);
            }
            if (e !== g)
              if (p === !0)
                ((_ = _ + r.sep + r.relative(v, g)),
                  a(`preparing to process require of internal file: %s`, _));
              else
                return (
                  a(`ignoring require of non-main module file: %s`, e), s._cache.set(g, b, h), b
                );
          }
        }
        (s._cache.set(g, b, h), a(`calling require hook: %s`, _));
        let x = n(b, _, v);
        return (s._cache.set(g, x, h), a(`returning module: %s`, _), x);
      }
    }
    d.prototype.unhook = function () {
      ((this._unhooked = !0),
        this._require === i.prototype.require
          ? ((i.prototype.require = this._origRequire), a(`require unhook successful`))
          : a(`require unhook unsuccessful`),
        process.getBuiltinModule !== void 0 &&
          (this._getBuiltinModule === process.getBuiltinModule
            ? ((process.getBuiltinModule = this._origGetBuiltinModule),
              a(`process.getBuiltinModule unhook successful`))
            : a(`process.getBuiltinModule unhook unsuccessful`)));
    };
    function f(e) {
      let t = r.sep === `/` ? e.path : e.path.split(r.sep).join(`/`);
      return r.posix.join(e.name, t).replace(l, ``);
    }
  }),
  Fo,
  Io,
  Lo = e.r(() => {
    ((Fo = class {
      hooks = [];
      children = new Map();
    }),
      (Io = class {
        _trie = new Fo();
        _counter = 0;
        insert(e) {
          let t = this._trie;
          for (let n of e.moduleName.split(`/`)) {
            let e = t.children.get(n);
            (e || ((e = new Fo()), t.children.set(n, e)), (t = e));
          }
          t.hooks.push({ hook: e, insertedId: this._counter++ });
        }
        search(e, { maintainInsertionOrder: t, fullOnly: n } = {}) {
          let r = this._trie,
            i = [],
            a = !0;
          for (let t of e.split(`/`)) {
            let e = r.children.get(t);
            if (!e) {
              a = !1;
              break;
            }
            (n || i.push(...e.hooks), (r = e));
          }
          return (
            n && a && i.push(...r.hooks),
            i.length === 0
              ? []
              : i.length === 1
                ? [i[0].hook]
                : (t && i.sort((e, t) => e.insertedId - t.insertedId), i.map(({ hook: e }) => e))
          );
        }
      }));
  });
function Ro(e) {
  return s.sep === `/` ? e : e.split(s.sep).join(`/`);
}
var zo,
  Bo,
  Vo,
  Ho = e.r(() => {
    ((zo = Po()),
      Lo(),
      (Bo = [`afterEach`, `after`, `beforeEach`, `before`, `describe`, `it`].every(
        (e) => typeof global[e] == `function`,
      )),
      (Vo = class e {
        _moduleNameTrie = new Io();
        static _instance;
        constructor() {
          this._initialize();
        }
        _initialize() {
          new zo.Hook(null, { internals: !0 }, (e, t, n) => {
            let r = Ro(t),
              i = this._moduleNameTrie.search(r, {
                maintainInsertionOrder: !0,
                fullOnly: n === void 0,
              });
            for (let { onRequire: r } of i) e = r(e, t, n);
            return e;
          });
        }
        register(e, t) {
          let n = { moduleName: e, onRequire: t };
          return (this._moduleNameTrie.insert(n), n);
        }
        static getInstance() {
          return Bo ? new e() : (this._instance = this._instance ?? new e());
        }
      }));
  }),
  Uo = e.n((e) => {
    var t = [],
      n = new WeakMap(),
      r = new WeakMap(),
      i = new Map(),
      a = [],
      o = {
        set(e, t, r) {
          return n.get(e)[t](r);
        },
        get(e, t) {
          if (t === Symbol.toStringTag) return `Module`;
          let n = r.get(e)[t];
          if (typeof n == `function`) return n();
        },
        defineProperty(e, t, r) {
          if (!(`value` in r))
            throw Error(`Getters/setters are not supported for exports property descriptors.`);
          return n.get(e)[t](r.value);
        },
      };
    function s(e, s, c, l, u) {
      (i.set(e, u), n.set(s, c), r.set(s, l));
      let d = new Proxy(s, o);
      (t.forEach((t) => t(e, d)), a.push([e, d]));
    }
    var c = !1;
    function l() {
      return c;
    }
    function u(e) {
      c = e;
    }
    ((e.register = s),
      (e.importHooks = t),
      (e.specifiers = i),
      (e.toHook = a),
      (e.getExperimentalPatchInternals = l),
      (e.setExperimentalPatchInternals = u));
  }),
  Wo = e.n((e, t) => {
    var n = require("path"),
      r = No(),
      { fileURLToPath: i } = require("url"),
      { MessageChannel: a } = require("worker_threads"),
      { importHooks: o, specifiers: s, toHook: c, getExperimentalPatchInternals: l } = Uo();
    function u(e) {
      (o.push(e), c.forEach(([t, n]) => e(t, n)));
    }
    function d(e) {
      let t = o.indexOf(e);
      t > -1 && o.splice(t, 1);
    }
    function f(e, t, n, r) {
      let i = e(t, n, r);
      i && i !== t && (t.default = i);
    }
    var p;
    function m() {
      let { port1: e, port2: t } = new a(),
        n = 0,
        r;
      ((p = (t) => {
        (n++, e.postMessage(t));
      }),
        e
          .on(`message`, () => {
            (n--, r && n <= 0 && r());
          })
          .unref());
      function i() {
        let e = setInterval(() => {}, 1e3),
          t = new Promise((e) => {
            r = e;
          }).then(() => {
            clearInterval(e);
          });
        return (n === 0 && r(), t);
      }
      let o = t;
      return {
        registerOptions: { data: { addHookMessagePort: o, include: [] }, transferList: [o] },
        addHookMessagePort: o,
        waitForAllMessagesAcknowledged: i,
      };
    }
    function h(e, t, a) {
      if (!(this instanceof h)) return new h(e, t, a);
      typeof e == `function`
        ? ((a = e), (e = null), (t = null))
        : typeof t == `function` && ((a = t), (t = null));
      let o = t ? t.internals === !0 : !1;
      (p && Array.isArray(e) && p(e),
        (this._iitmHook = (t, c) => {
          let u = t,
            d = t.startsWith(`node:`),
            p;
          if (d) t = t.replace(/^node:/, ``);
          else {
            if (t.startsWith(`file://`))
              try {
                t = i(t);
              } catch {}
            let e = r(t);
            e && ((t = e.name), (p = e.basedir));
          }
          if (e) {
            for (let r of e)
              if (r === t) {
                if (p) {
                  if (o) t = t + n.sep + n.relative(p, i(u));
                  else if (!l() && !p.endsWith(s.get(u))) continue;
                }
                f(a, c, t, p);
              }
          } else f(a, c, t, p);
        }),
        u(this._iitmHook));
    }
    ((h.prototype.unhook = function () {
      d(this._iitmHook);
    }),
      (t.exports = h),
      (t.exports.Hook = h),
      (t.exports.addHook = u),
      (t.exports.removeHook = d),
      (t.exports.createAddHookMessageChannel = m));
  });
function Go(e, t, n) {
  let r, i;
  try {
    i = e();
  } catch (e) {
    r = e;
  } finally {
    if ((t(r, i), r && !n)) throw r;
    return i;
  }
}
async function Ko(e, t, n) {
  let r, i;
  try {
    i = await e();
  } catch (e) {
    r = e;
  } finally {
    if ((await t(r, i), r && !n)) throw r;
    return i;
  }
}
function qo(e) {
  return (
    typeof e == `function` &&
    typeof e.__original == `function` &&
    typeof e.__unwrap == `function` &&
    e.__wrapped === !0
  );
}
var Jo = e.r(() => {});
function Yo(e, t, n) {
  return t === void 0 ? e.includes(`*`) : e.some((e) => Fa(t, e, { includePrerelease: n }));
}
var Xo,
  Zo,
  Qo,
  $o,
  es = e.r(() => {
    (So(),
      ko(),
      Mo(),
      Ho(),
      (Xo = Wo()),
      (Zo = e.o(O())),
      (Qo = Po()),
      Jo(),
      ($o = class extends jo {
        _modules;
        _hooks = [];
        _requireInTheMiddleSingleton = Vo.getInstance();
        _enabled = !1;
        constructor(e, t, n) {
          super(e, t, n);
          let r = this.init();
          (r && !Array.isArray(r) && (r = [r]),
            (this._modules = r || []),
            this._config.enabled && this.enable());
        }
        _wrap = (e, t, n) => {
          if ((qo(e[t]) && this._unwrap(e, t), _.types.isProxy(e))) {
            let r = To(Object.assign({}, e), t, n);
            return (Object.defineProperty(e, t, { value: r }), r);
          } else return To(e, t, n);
        };
        _unwrap = (e, t) =>
          _.types.isProxy(e) ? Object.defineProperty(e, t, { value: e[t] }) : Do(e, t);
        _massWrap = (e, t, n) => {
          if (e) Array.isArray(e) || (e = [e]);
          else {
            Zo.diag.error(`must provide one or more modules to patch`);
            return;
          }
          if (!(t && Array.isArray(t))) {
            Zo.diag.error(`must provide one or more functions to wrap on modules`);
            return;
          }
          e.forEach((e) => {
            t.forEach((t) => {
              this._wrap(e, t, n);
            });
          });
        };
        _massUnwrap = (e, t) => {
          if (e) Array.isArray(e) || (e = [e]);
          else {
            Zo.diag.error(`must provide one or more modules to patch`);
            return;
          }
          if (!(t && Array.isArray(t))) {
            Zo.diag.error(`must provide one or more functions to wrap on modules`);
            return;
          }
          e.forEach((e) => {
            t.forEach((t) => {
              this._unwrap(e, t);
            });
          });
        };
        _warnOnPreloadedModules() {
          this._modules.forEach((e) => {
            let { name: t } = e;
            try {
              let e = require.resolve(t);
              require.cache[e] &&
                this._diag.warn(
                  `Module ${t} has been loaded before ${this.instrumentationName} so it might not work, please initialize it before requiring ${t}`,
                );
            } catch {}
          });
        }
        _extractPackageVersion(e) {
          try {
            let t = (0, h.readFileSync)(s.join(e, `package.json`), { encoding: `utf8` }),
              n = JSON.parse(t).version;
            return typeof n == `string` ? n : void 0;
          } catch {
            Zo.diag.warn(`Failed extracting version`, e);
          }
        }
        _onRequire(e, t, n, r) {
          if (!r)
            return typeof e.patch == `function` && ((e.moduleExports = t), this._enabled)
              ? (this._diag.debug(
                  `Applying instrumentation patch for nodejs core module on require hook`,
                  {
                    module: e.name,
                  },
                ),
                e.patch(t))
              : t;
          let i = this._extractPackageVersion(r);
          if (((e.moduleVersion = i), e.name === n))
            return Yo(e.supportedVersions, i, e.includePrerelease) &&
              typeof e.patch == `function` &&
              ((e.moduleExports = t), this._enabled)
              ? (this._diag.debug(`Applying instrumentation patch for module on require hook`, {
                  module: e.name,
                  version: e.moduleVersion,
                  baseDir: r,
                }),
                e.patch(t, e.moduleVersion))
              : t;
          let a = e.files ?? [],
            o = s.normalize(n);
          return a
            .filter((e) => e.name === o)
            .filter((t) => Yo(t.supportedVersions, i, e.includePrerelease))
            .reduce(
              (t, n) => (
                (n.moduleExports = t),
                this._enabled
                  ? (this._diag.debug(
                      `Applying instrumentation patch for nodejs module file on require hook`,
                      { module: e.name, version: e.moduleVersion, fileName: n.name, baseDir: r },
                    ),
                    n.patch(t, e.moduleVersion))
                  : t
              ),
              t,
            );
        }
        enable() {
          if (!this._enabled) {
            if (((this._enabled = !0), this._hooks.length > 0)) {
              for (let e of this._modules) {
                typeof e.patch == `function` &&
                  e.moduleExports &&
                  (this._diag.debug(
                    `Applying instrumentation patch for nodejs module on instrumentation enabled`,
                    { module: e.name, version: e.moduleVersion },
                  ),
                  e.patch(e.moduleExports, e.moduleVersion));
                for (let t of e.files)
                  t.moduleExports &&
                    (this._diag.debug(
                      `Applying instrumentation patch for nodejs module file on instrumentation enabled`,
                      { module: e.name, version: e.moduleVersion, fileName: t.name },
                    ),
                    t.patch(t.moduleExports, e.moduleVersion));
              }
              return;
            }
            this._warnOnPreloadedModules();
            for (let e of this._modules) {
              let t = (t, n, r) => {
                  if (!r && s.isAbsolute(n)) {
                    let e = s.parse(n);
                    ((n = e.name), (r = e.dir));
                  }
                  return this._onRequire(e, t, n, r);
                },
                n = (t, n, r) => this._onRequire(e, t, n, r),
                r = s.isAbsolute(e.name)
                  ? new Qo.Hook([e.name], { internals: !0 }, n)
                  : this._requireInTheMiddleSingleton.register(e.name, n);
              this._hooks.push(r);
              let i = new Xo.Hook([e.name], { internals: !1 }, t);
              this._hooks.push(i);
            }
          }
        }
        disable() {
          if (this._enabled) {
            this._enabled = !1;
            for (let e of this._modules) {
              typeof e.unpatch == `function` &&
                e.moduleExports &&
                (this._diag.debug(
                  `Removing instrumentation patch for nodejs module on instrumentation disabled`,
                  { module: e.name, version: e.moduleVersion },
                ),
                e.unpatch(e.moduleExports, e.moduleVersion));
              for (let t of e.files)
                t.moduleExports &&
                  (this._diag.debug(
                    `Removing instrumentation patch for nodejs module file on instrumentation disabled`,
                    { module: e.name, version: e.moduleVersion, fileName: t.name },
                  ),
                  t.unpatch(t.moduleExports, e.moduleVersion));
            }
          }
        }
        isEnabled() {
          return this._enabled;
        }
      }));
  }),
  ts = e.r(() => {
    es();
  }),
  ns = e.r(() => {
    ts();
  }),
  rs,
  is = e.r(() => {
    rs = class {
      name;
      supportedVersions;
      patch;
      unpatch;
      files;
      constructor(e, t, n, r, i) {
        ((this.name = e),
          (this.supportedVersions = t),
          (this.patch = n),
          (this.unpatch = r),
          (this.files = i || []));
      }
    };
  }),
  as,
  os = e.r(() => {
    (ns(),
      (as = class {
        supportedVersions;
        patch;
        unpatch;
        name;
        constructor(e, t, n, r) {
          ((this.supportedVersions = t),
            (this.patch = n),
            (this.unpatch = r),
            (this.name = (0, s.normalize)(e)));
        }
      }));
  });
function ss(e, t) {
  let n = cs.OLD,
    r = t
      ?.split(`,`)
      .map((e) => e.trim())
      .filter((e) => e !== ``);
  for (let t of r ?? [])
    if (t.toLowerCase() === e + `/dup`) {
      n = cs.DUPLICATE;
      break;
    } else t.toLowerCase() === e && (n = cs.STABLE);
  return n;
}
var cs,
  ls = e.r(() => {
    (function (e) {
      ((e[(e.STABLE = 1)] = `STABLE`),
        (e[(e.OLD = 2)] = `OLD`),
        (e[(e.DUPLICATE = 3)] = `DUPLICATE`));
    })((cs ||= {}));
  }),
  us = e.i({
    InstrumentationBase: () => $o,
    InstrumentationNodeModuleDefinition: () => rs,
    InstrumentationNodeModuleFile: () => as,
    SemconvStability: () => cs,
    isWrapped: () => qo,
    registerInstrumentations: () => Ma,
    safeExecuteInTheMiddle: () => Go,
    safeExecuteInTheMiddleAsync: () => Ko,
    semconvStabilityFromStr: () => ss,
  }),
  ds = e.r(() => {
    (Pa(), ns(), is(), os(), Jo(), ls());
  }),
  L = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  R = globalThis,
  fs = `10.29.0`;
function ps() {
  return (ms(R), R);
}
function ms(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || `10.29.0`), (t[fs] = t[`10.29.0`] || {}));
}
function hs(e, t, n = R) {
  let r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    i = (r[fs] = r[`10.29.0`] || {});
  return i[e] || (i[e] = t());
}
var gs = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`],
  _s = `Sentry Logger `,
  vs = {};
function ys(e) {
  if (!(`console` in R)) return e();
  let t = R.console,
    n = {},
    r = Object.keys(vs);
  r.forEach((e) => {
    let r = vs[e];
    ((n[e] = t[e]), (t[e] = r));
  });
  try {
    return e();
  } finally {
    r.forEach((e) => {
      t[e] = n[e];
    });
  }
}
function bs() {
  Ds().enabled = !0;
}
function xs() {
  Ds().enabled = !1;
}
function Ss() {
  return Ds().enabled;
}
function Cs(...e) {
  Es(`log`, ...e);
}
function ws(...e) {
  Es(`warn`, ...e);
}
function Ts(...e) {
  Es(`error`, ...e);
}
function Es(e, ...t) {
  L &&
    Ss() &&
    ys(() => {
      R.console[e](`${_s}[${e}]:`, ...t);
    });
}
function Ds() {
  return L ? hs(`loggerSettings`, () => ({ enabled: !1 })) : { enabled: !1 };
}
var z = { enable: bs, disable: xs, isEnabled: Ss, log: Cs, warn: ws, error: Ts },
  Os = 50,
  ks = /\(error: (.*)\)/,
  As = /captureMessage|captureException/;
function js(...e) {
  let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, n = 0, r = 0) => {
    let i = [],
      a = e.split(`
`);
    for (let e = n; e < a.length; e++) {
      let n = a[e];
      n.length > 1024 && (n = n.slice(0, 1024));
      let o = ks.test(n) ? n.replace(ks, `$1`) : n;
      if (!o.match(/\S*Error: /)) {
        for (let e of t) {
          let t = e(o);
          if (t) {
            i.push(t);
            break;
          }
        }
        if (i.length >= Os + r) break;
      }
    }
    return Ns(i.slice(r));
  };
}
function Ms(e) {
  return Array.isArray(e) ? js(...e) : e;
}
function Ns(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return (
    /sentryWrapped/.test(Ps(t).function || ``) && t.pop(),
    t.reverse(),
    As.test(Ps(t).function || ``) && (t.pop(), As.test(Ps(t).function || ``) && t.pop()),
    t
      .slice(0, Os)
      .map((e) => ({ ...e, filename: e.filename || Ps(t).filename, function: e.function || `?` }))
  );
}
function Ps(e) {
  return e[e.length - 1] || {};
}
var Fs = `<anonymous>`;
function Is(e) {
  try {
    return !e || typeof e != `function` ? Fs : e.name || Fs;
  } catch {
    return Fs;
  }
}
function Ls(e) {
  return `__v_isVNode` in e && e.__v_isVNode ? `[VueVNode]` : `[VueViewModel]`;
}
var Rs = {},
  zs = {};
function Bs(e, t) {
  ((Rs[e] = Rs[e] || []), Rs[e].push(t));
}
function Vs(e, t) {
  if (!zs[e]) {
    zs[e] = !0;
    try {
      t();
    } catch (t) {
      L && z.error(`Error while instrumenting ${e}`, t);
    }
  }
}
function Hs(e, t) {
  let n = e && Rs[e];
  if (n)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        L &&
          z.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${Is(r)}\nError:`,
            t,
          );
      }
}
var Us = null;
function Ws(e) {
  let t = `error`;
  (Bs(t, e), Vs(t, Gs));
}
function Gs() {
  ((Us = R.onerror),
    (R.onerror = function (e, t, n, r, i) {
      return (
        Hs(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        Us ? Us.apply(this, arguments) : !1
      );
    }),
    (R.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
var Ks = null;
function qs(e) {
  let t = `unhandledrejection`;
  (Bs(t, e), Vs(t, Js));
}
function Js() {
  ((Ks = R.onunhandledrejection),
    (R.onunhandledrejection = function (e) {
      return (Hs(`unhandledrejection`, e), !Ks || Ks.apply(this, arguments));
    }),
    (R.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
var Ys = Object.prototype.toString;
function Xs(e) {
  switch (Ys.call(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
    case `[object WebAssembly.Exception]`:
      return !0;
    default:
      return cc(e, Error);
  }
}
function Zs(e, t) {
  return Ys.call(e) === `[object ${t}]`;
}
function Qs(e) {
  return Zs(e, `ErrorEvent`);
}
function $s(e) {
  return Zs(e, `String`);
}
function ec(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `__sentry_template_string__` in e &&
    `__sentry_template_values__` in e
  );
}
function tc(e) {
  return e === null || ec(e) || (typeof e != `object` && typeof e != `function`);
}
function nc(e) {
  return Zs(e, `Object`);
}
function rc(e) {
  return typeof Event < `u` && cc(e, Event);
}
function ic(e) {
  return typeof Element < `u` && cc(e, Element);
}
function ac(e) {
  return Zs(e, `RegExp`);
}
function oc(e) {
  return !!(e?.then && typeof e.then == `function`);
}
function sc(e) {
  return nc(e) && `nativeEvent` in e && `preventDefault` in e && `stopPropagation` in e;
}
function cc(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function lc(e) {
  return !!(typeof e == `object` && e && (e.__isVue || e._isVue || e.__v_isVNode));
}
var uc = R,
  dc = 80;
function fc(e, t = {}) {
  if (!e) return `<unknown>`;
  try {
    let n = e,
      r = [],
      i = 0,
      a = 0,
      o,
      s = Array.isArray(t) ? t : t.keyAttrs,
      c = (!Array.isArray(t) && t.maxStringLength) || dc;
    for (
      ;
      n &&
      i++ < 5 &&
      ((o = pc(n, s)), !(o === `html` || (i > 1 && a + r.length * 3 + o.length >= c)));
    )
      (r.push(o), (a += o.length), (n = n.parentNode));
    return r.reverse().join(` > `);
  } catch {
    return `<unknown>`;
  }
}
function pc(e, t) {
  let n = e,
    r = [];
  if (!n?.tagName) return ``;
  if (uc.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  let i = t?.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
  if (i?.length)
    i.forEach((e) => {
      r.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    let e = n.className;
    if (e && $s(e)) {
      let t = e.split(/\s+/);
      for (let e of t) r.push(`.${e}`);
    }
  }
  for (let e of [`aria-label`, `type`, `name`, `title`, `alt`]) {
    let t = n.getAttribute(e);
    t && r.push(`[${e}="${t}"]`);
  }
  return r.join(``);
}
function mc(e, t, n) {
  if (!(t in e)) return;
  let r = e[t];
  if (typeof r != `function`) return;
  let i = n(r);
  typeof i == `function` && gc(i, r);
  try {
    e[t] = i;
  } catch {
    L && z.log(`Failed to replace method "${t}" in object`, e);
  }
}
function hc(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    L && z.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function gc(e, t) {
  try {
    ((e.prototype = t.prototype = t.prototype || {}), hc(e, `__sentry_original__`, t));
  } catch {}
}
function _c(e) {
  return e.__sentry_original__;
}
function vc(e) {
  if (Xs(e)) return { message: e.message, name: e.name, stack: e.stack, ...bc(e) };
  if (rc(e)) {
    let t = { type: e.type, target: yc(e.target), currentTarget: yc(e.currentTarget), ...bc(e) };
    return (typeof CustomEvent < `u` && cc(e, CustomEvent) && (t.detail = e.detail), t);
  } else return e;
}
function yc(e) {
  try {
    return ic(e) ? fc(e) : Object.prototype.toString.call(e);
  } catch {
    return `<unknown>`;
  }
}
function bc(e) {
  if (typeof e == `object` && e) {
    let t = {};
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function xc(e) {
  let t = Object.keys(vc(e));
  return (t.sort(), t[0] ? t.join(`, `) : `[object has no keys]`);
}
function Sc(e, t = 0) {
  return typeof e != `string` || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function Cc(e, t) {
  let n = e,
    r = n.length;
  if (r <= 150) return n;
  t > r && (t = r);
  let i = Math.max(t - 60, 0);
  i < 5 && (i = 0);
  let a = Math.min(i + 140, r);
  return (
    a > r - 5 && (a = r),
    a === r && (i = Math.max(a - 140, 0)),
    (n = n.slice(i, a)),
    i > 0 && (n = `'{snip} ${n}`),
    a < r && (n += ` {snip}`),
    n
  );
}
function wc(e, t) {
  if (!Array.isArray(e)) return ``;
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    try {
      lc(r) ? n.push(Ls(r)) : n.push(String(r));
    } catch {
      n.push(`[value cannot be serialized]`);
    }
  }
  return n.join(t);
}
function Tc(e, t, n = !1) {
  return $s(e) ? (ac(t) ? t.test(e) : $s(t) ? (n ? e === t : e.includes(t)) : !1) : !1;
}
function Ec(e, t = [], n = !1) {
  return t.some((t) => Tc(e, t, n));
}
function Dc() {
  let e = R;
  return e.crypto || e.msCrypto;
}
var Oc;
function kc() {
  return Math.random() * 16;
}
function B(e = Dc()) {
  try {
    if (e?.randomUUID) return e.randomUUID().replace(/-/g, ``);
  } catch {}
  return (
    (Oc ||= `10000000100040008000100000000000`),
    Oc.replace(/[018]/g, (e) => (e ^ ((kc() & 15) >> (e / 4))).toString(16))
  );
}
function Ac(e) {
  return e.exception?.values?.[0];
}
function jc(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = Ac(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function Mc(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  ((a.value ||= t || ``), (a.type ||= n || `Error`));
}
function Nc(e, t) {
  let n = Ac(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = { ...r, ...i, ...t }), t && `data` in t)) {
    let e = { ...i?.data, ...t.data };
    n.mechanism.data = e;
  }
}
var Pc =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function Fc(e) {
  return parseInt(e || ``, 10);
}
function Ic(e) {
  let t = e.match(Pc) || [],
    n = Fc(t[1]),
    r = Fc(t[2]),
    i = Fc(t[3]);
  return {
    buildmetadata: t[5],
    major: isNaN(n) ? void 0 : n,
    minor: isNaN(r) ? void 0 : r,
    patch: isNaN(i) ? void 0 : i,
    prerelease: t[4],
  };
}
function Lc(e) {
  if (Rc(e)) return !0;
  try {
    hc(e, `__sentry_captured__`, !0);
  } catch {}
  return !1;
}
function Rc(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
var zc = 1e3;
function Bc() {
  return Date.now() / zc;
}
function Vc() {
  let { performance: e } = R;
  if (!e?.now || !e.timeOrigin) return Bc;
  let t = e.timeOrigin;
  return () => (t + e.now()) / zc;
}
var Hc;
function Uc() {
  return (Hc ??= Vc())();
}
function Wc(e) {
  let t = Uc(),
    n = {
      sid: B(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => qc(n),
    };
  return (e && Gc(n, e), n);
}
function Gc(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || Uc()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : B()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == `number` && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == `number`) e.duration = t.duration;
  else {
    let t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == `number` && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function Kc(e, t) {
  let n = {};
  (t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }), Gc(e, n));
}
function qc(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == `number` || typeof e.did == `string` ? `${e.did}` : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  };
}
function Jc(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  let r = { ...e };
  for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = Jc(r[e], t[e], n - 1));
  return r;
}
function Yc() {
  return B();
}
function Xc() {
  return B().substring(16);
}
var Zc = `_sentrySpan`;
function Qc(e, t) {
  t ? hc(e, Zc, t) : delete e[Zc];
}
function $c(e) {
  return e[Zc];
}
var el = 100,
  tl = class e {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: Yc(), sampleRand: Math.random() }));
    }
    clone() {
      let t = new e();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = { ...this._tags }),
        (t._attributes = { ...this._attributes }),
        (t._extra = { ...this._extra }),
        (t._contexts = { ...this._contexts }),
        this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }),
        (t._user = this._user),
        (t._level = this._level),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
        (t._propagationContext = { ...this._propagationContext }),
        (t._client = this._client),
        (t._lastEventId = this._lastEventId),
        Qc(t, $c(this)),
        t
      );
    }
    setClient(e) {
      this._client = e;
    }
    setLastEventId(e) {
      this._lastEventId = e;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return (this._eventProcessors.push(e), this);
    }
    setUser(e) {
      return (
        (this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }),
        this._session && Gc(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    setTags(e) {
      return ((this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this);
    }
    setTag(e, t) {
      return this.setTags({ [e]: t });
    }
    setAttributes(e) {
      return (
        (this._attributes = { ...this._attributes, ...e }), this._notifyScopeListeners(), this
      );
    }
    setAttribute(e, t) {
      return this.setAttributes({ [e]: t });
    }
    removeAttribute(e) {
      return (
        e in this._attributes && (delete this._attributes[e], this._notifyScopeListeners()), this
      );
    }
    setExtras(e) {
      return ((this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this);
    }
    setExtra(e, t) {
      return ((this._extra = { ...this._extra, [e]: t }), this._notifyScopeListeners(), this);
    }
    setFingerprint(e) {
      return ((this._fingerprint = e), this._notifyScopeListeners(), this);
    }
    setLevel(e) {
      return ((this._level = e), this._notifyScopeListeners(), this);
    }
    setTransactionName(e) {
      return ((this._transactionName = e), this._notifyScopeListeners(), this);
    }
    setContext(e, t) {
      return (
        t === null ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(e) {
      return (e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this);
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      let n = typeof t == `function` ? t(this) : t,
        {
          tags: r,
          attributes: i,
          extra: a,
          user: o,
          contexts: s,
          level: c,
          fingerprint: l = [],
          propagationContext: u,
        } = (n instanceof e ? n.getScopeData() : nc(n) ? t : void 0) || {};
      return (
        (this._tags = { ...this._tags, ...r }),
        (this._attributes = { ...this._attributes, ...i }),
        (this._extra = { ...this._extra, ...a }),
        (this._contexts = { ...this._contexts, ...s }),
        o && Object.keys(o).length && (this._user = o),
        c && (this._level = c),
        l.length && (this._fingerprint = l),
        u && (this._propagationContext = u),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._attributes = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._session = void 0),
        Qc(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: Yc(), sampleRand: Math.random() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(e, t) {
      let n = typeof t == `number` ? t : el;
      if (n <= 0) return this;
      let r = { timestamp: Bc(), ...e, message: e.message ? Sc(e.message, 2048) : e.message };
      return (
        this._breadcrumbs.push(r),
        this._breadcrumbs.length > n &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
          this._client?.recordDroppedEvent(`buffer_overflow`, `log_item`)),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(e) {
      return (this._attachments.push(e), this);
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        attributes: this._attributes,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: $c(this),
      };
    }
    setSDKProcessingMetadata(e) {
      return ((this._sdkProcessingMetadata = Jc(this._sdkProcessingMetadata, e, 2)), this);
    }
    setPropagationContext(e) {
      return ((this._propagationContext = e), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t?.event_id || B();
      if (!this._client)
        return (L && z.warn(`No client configured on scope - will not capture exception!`), n);
      let r = Error(`Sentry syntheticException`);
      return (
        this._client.captureException(
          e,
          { originalException: e, syntheticException: r, ...t, event_id: n },
          this,
        ),
        n
      );
    }
    captureMessage(e, t, n) {
      let r = n?.event_id || B();
      if (!this._client)
        return (L && z.warn(`No client configured on scope - will not capture message!`), r);
      let i = n?.syntheticException ?? Error(e);
      return (
        this._client.captureMessage(
          e,
          t,
          { originalException: e, syntheticException: i, ...n, event_id: r },
          this,
        ),
        r
      );
    }
    captureEvent(e, t) {
      let n = t?.event_id || B();
      return this._client
        ? (this._client.captureEvent(e, { ...t, event_id: n }, this), n)
        : (L && z.warn(`No client configured on scope - will not capture event!`), n);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||=
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this);
        }),
        !1);
    }
  };
function nl() {
  return hs(`defaultCurrentScope`, () => new tl());
}
function rl() {
  return hs(`defaultIsolationScope`, () => new tl());
}
var il = class {
  constructor(e, t) {
    let n;
    n = e || new tl();
    let r;
    ((r = t || new tl()), (this._stack = [{ scope: n }]), (this._isolationScope = r));
  }
  withScope(e) {
    let t = this._pushScope(),
      n;
    try {
      n = e(t);
    } catch (e) {
      throw (this._popScope(), e);
    }
    return oc(n)
      ? n.then(
          (e) => (this._popScope(), e),
          (e) => {
            throw (this._popScope(), e);
          },
        )
      : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    let e = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: e }), e);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
};
function al() {
  let e = ms(ps());
  return (e.stack = e.stack || new il(nl(), rl()));
}
function ol(e) {
  return al().withScope(e);
}
function sl(e, t) {
  let n = al();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function cl(e) {
  return al().withScope(() => e(al().getIsolationScope()));
}
function ll() {
  return {
    withIsolationScope: cl,
    withScope: ol,
    withSetScope: sl,
    withSetIsolationScope: (e, t) => cl(t),
    getCurrentScope: () => al().getScope(),
    getIsolationScope: () => al().getIsolationScope(),
  };
}
function ul(e) {
  let t = ms(ps());
  t.acs = e;
}
function dl(e) {
  let t = ms(e);
  return t.acs ? t.acs : ll();
}
function V() {
  return dl(ps()).getCurrentScope();
}
function H() {
  return dl(ps()).getIsolationScope();
}
function fl() {
  return hs(`globalScope`, () => new tl());
}
function pl(...e) {
  let t = dl(ps());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function U() {
  return V().getClient();
}
function ml(e) {
  let { traceId: t, parentSpanId: n, propagationSpanId: r } = e.getPropagationContext(),
    i = { trace_id: t, span_id: r || Xc() };
  return (n && (i.parent_span_id = n), i);
}
var hl = `sentry.source`,
  gl = `sentry.sample_rate`,
  _l = `sentry.op`,
  vl = `sentry.origin`,
  yl = `sentry.measurement_unit`,
  bl = `sentry.measurement_value`,
  xl = `sentry.custom_span_name`,
  Sl = `sentry.profile_id`,
  Cl = `sentry.exclusive_time`;
function wl(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: `unauthenticated` };
      case 403:
        return { code: 2, message: `permission_denied` };
      case 404:
        return { code: 2, message: `not_found` };
      case 409:
        return { code: 2, message: `already_exists` };
      case 413:
        return { code: 2, message: `failed_precondition` };
      case 429:
        return { code: 2, message: `resource_exhausted` };
      case 499:
        return { code: 2, message: `cancelled` };
      default:
        return { code: 2, message: `invalid_argument` };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: `unimplemented` };
      case 503:
        return { code: 2, message: `unavailable` };
      case 504:
        return { code: 2, message: `deadline_exceeded` };
      default:
        return { code: 2, message: `internal_error` };
    }
  return { code: 2, message: `internal_error` };
}
function Tl(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = wl(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var El = `_sentryScope`,
  Dl = `_sentryIsolationScope`;
function Ol(e) {
  try {
    let t = R.WeakRef;
    if (typeof t == `function`) return new t(e);
  } catch {}
  return e;
}
function kl(e) {
  if (e) {
    if (typeof e == `object` && `deref` in e && typeof e.deref == `function`)
      try {
        return e.deref();
      } catch {
        return;
      }
    return e;
  }
}
function Al(e, t, n) {
  e && (hc(e, Dl, Ol(n)), hc(e, El, t));
}
function jl(e) {
  let t = e;
  return { scope: t[El], isolationScope: kl(t[Dl]) };
}
var Ml = `sentry-`,
  Nl = /^sentry-/;
function Pl(e) {
  let t = Il(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.match(Nl)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function Fl(e) {
  if (e) return Rl(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${Ml}${t}`] = n), e), {}));
}
function Il(e) {
  if (!(!e || (!$s(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = Ll(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : Ll(e);
}
function Ll(e) {
  return e
    .split(`,`)
    .map((e) => {
      let t = e.indexOf(`=`);
      return t === -1
        ? []
        : [e.slice(0, t), e.slice(t + 1)].map((e) => {
            try {
              return decodeURIComponent(e.trim());
            } catch {
              return;
            }
          });
    })
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function Rl(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((e, [t, n], r) => {
      let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = r === 0 ? i : `${e},${i}`;
      return a.length > 8192
        ? (L &&
            z.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, ``);
}
var zl = /^o(\d+)\./,
  Bl = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Vl(e) {
  return e === `http` || e === `https`;
}
function Hl(e, t = !1) {
  let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: c } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${r && `${r}/`}${o}`;
}
function Ul(e) {
  let t = Bl.exec(e);
  if (!t) {
    ys(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1),
    c = ``,
    l = s,
    u = l.split(`/`);
  if ((u.length > 1 && ((c = u.slice(0, -1).join(`/`)), (l = u.pop())), l)) {
    let e = l.match(/^\d+/);
    e && (l = e[0]);
  }
  return Wl({ host: a, pass: i, path: c, projectId: l, port: o, protocol: n, publicKey: r });
}
function Wl(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || ``,
    pass: e.pass || ``,
    host: e.host,
    port: e.port || ``,
    path: e.path || ``,
    projectId: e.projectId,
  };
}
function Gl(e) {
  if (!L) return !0;
  let { port: t, projectId: n, protocol: r } = e;
  return [`protocol`, `publicKey`, `host`, `projectId`].find((t) =>
    e[t] ? !1 : (z.error(`Invalid Sentry Dsn: ${t} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? Vl(r)
        ? t && isNaN(parseInt(t, 10))
          ? (z.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (z.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (z.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Kl(e) {
  return e.match(zl)?.[1];
}
function ql(e) {
  let t = e.getOptions(),
    { host: n } = e.getDsn() || {},
    r;
  return (t.orgId ? (r = String(t.orgId)) : n && (r = Kl(n)), r);
}
function Jl(e) {
  let t = typeof e == `string` ? Ul(e) : Wl(e);
  if (!(!t || !Gl(t))) return t;
}
function Yl(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t;
}
var Xl = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);
function Zl(e) {
  if (!e) return;
  let t = e.match(Xl);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function Ql(e, t) {
  let n = Zl(e),
    r = Pl(t);
  if (!n?.traceId) return { traceId: Yc(), sampleRand: Math.random() };
  let i = tu(n, r);
  r && (r.sample_rand = i.toString());
  let { traceId: a, parentSpanId: o, parentSampled: s } = n;
  return { traceId: a, parentSpanId: o, sampled: s, dsc: r || {}, sampleRand: i };
}
function $l(e = Yc(), t = Xc(), n) {
  let r = ``;
  return (n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`);
}
function eu(e = Yc(), t = Xc(), n) {
  return `00-${e}-${t}-${n ? `01` : `00`}`;
}
function tu(e, t) {
  let n = Yl(t?.sample_rand);
  if (n !== void 0) return n;
  let r = Yl(t?.sample_rate);
  return r && e?.parentSampled !== void 0
    ? e.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random();
}
function nu(e, t) {
  let n = ql(e);
  return t && n && t !== n
    ? (z.log(
        `Won't continue trace because org IDs don't match (incoming baggage: ${t}, SDK options: ${n})`,
      ),
      !1)
    : e.getOptions().strictTraceContinuation && ((t && !n) || (!t && n))
      ? (z.log(
          `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${t}, Sentry client: ${n})`,
        ),
        !1)
      : !0;
}
var ru = !1;
function iu(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: i, parent_span_id: a, status: o, origin: s, links: c } = W(e);
  return {
    parent_span_id: a,
    span_id: t,
    trace_id: n,
    data: r,
    op: i,
    status: o,
    origin: s,
    links: c,
  };
}
function au(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    i = r ? t : W(e).parent_span_id,
    a = jl(e).scope;
  return {
    parent_span_id: i,
    span_id: r ? a?.getPropagationContext().propagationSpanId || Xc() : t,
    trace_id: n,
  };
}
function ou(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return $l(t, n, pu(e));
}
function su(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return eu(t, n, pu(e));
}
function cu(e) {
  if (e && e.length > 0)
    return e.map(({ context: { spanId: e, traceId: t, traceFlags: n, ...r }, attributes: i }) => ({
      span_id: e,
      trace_id: t,
      sampled: n === 1,
      attributes: i,
      ...r,
    }));
}
function lu(e) {
  return typeof e == `number`
    ? uu(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? uu(e.getTime())
        : Uc();
}
function uu(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function W(e) {
  if (fu(e)) return e.getSpanJSON();
  let { spanId: t, traceId: n } = e.spanContext();
  if (du(e)) {
    let { attributes: r, startTime: i, name: a, endTime: o, status: s, links: c } = e;
    return {
      span_id: t,
      trace_id: n,
      data: r,
      description: a,
      parent_span_id:
        `parentSpanId` in e
          ? e.parentSpanId
          : `parentSpanContext` in e
            ? e.parentSpanContext?.spanId
            : void 0,
      start_timestamp: lu(i),
      timestamp: lu(o) || void 0,
      status: mu(s),
      op: r[_l],
      origin: r[vl],
      links: cu(c),
    };
  }
  return { span_id: t, trace_id: n, start_timestamp: 0, data: {} };
}
function du(e) {
  let t = e;
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function fu(e) {
  return typeof e.getSpanJSON == `function`;
}
function pu(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function mu(e) {
  if (!(!e || e.code === 0)) return e.code === 1 ? `ok` : e.message || `internal_error`;
}
var hu = `_sentryChildSpans`,
  gu = `_sentryRootSpan`;
function _u(e, t) {
  (hc(t, gu, e[gu] || e), e[hu] ? e[hu].add(t) : hc(e, hu, new Set([t])));
}
function vu(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && pu(e)) {
      t.add(e);
      let r = e[hu] ? Array.from(e[hu]) : [];
      for (let e of r) n(e);
    }
  }
  return (n(e), Array.from(t));
}
function yu(e) {
  return e[gu] || e;
}
function bu() {
  let e = dl(ps());
  return e.getActiveSpan ? e.getActiveSpan() : $c(V());
}
function xu() {
  ru ||=
    (ys(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    }),
    !0);
}
var Su = !1;
function Cu() {
  if (Su) return;
  function e() {
    let e = bu(),
      t = e && yu(e);
    if (t) {
      let e = `internal_error`;
      (L && z.log(`[Tracing] Root span: ${e} -> Global error occurred`),
        t.setStatus({ code: 2, message: e }));
    }
  }
  ((e.tag = `sentry_tracingErrorCallback`), (Su = !0), Ws(e), qs(e));
}
function wu(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = e || U()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Tu(e) {
  z.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function Eu(e, t) {
  if (!t?.length || !e.description) return !1;
  for (let n of t) {
    if (Ou(n)) {
      if (Tc(e.description, n)) return (L && Tu(e), !0);
      continue;
    }
    if (!n.name && !n.op) continue;
    let t = !n.name || Tc(e.description, n.name),
      r = !n.op || (e.op && Tc(e.op, n.op));
    if (t && r) return (L && Tu(e), !0);
  }
  return !1;
}
function Du(e, t) {
  let n = t.parent_span_id,
    r = t.span_id;
  if (n) for (let t of e) t.parent_span_id === r && (t.parent_span_id = n);
}
function Ou(e) {
  return typeof e == `string` || e instanceof RegExp;
}
var ku = `production`,
  Au = `_frozenDsc`;
function ju(e, t) {
  hc(e, Au, t);
}
function Mu(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = {
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
      org_id: ql(t),
    };
  return (t.emit(`createDsc`, i), i);
}
function Nu(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || Mu(n.traceId, e);
}
function G(e) {
  let t = U();
  if (!t) return {};
  let n = yu(e),
    r = W(n),
    i = r.data,
    a = n.spanContext().traceState,
    o =
      a?.get(`sentry.sample_rate`) ??
      i[`sentry.sample_rate`] ??
      i[`sentry.previous_trace_sample_rate`];
  function s(e) {
    return ((typeof o == `number` || typeof o == `string`) && (e.sample_rate = `${o}`), e);
  }
  let c = n[Au];
  if (c) return s(c);
  let l = a?.get(`sentry.dsc`),
    u = l && Pl(l);
  if (u) return s(u);
  let d = Mu(e.spanContext().traceId, t),
    f = i[hl],
    p = r.description;
  return (
    f !== `url` && p && (d.transaction = p),
    wu() &&
      ((d.sampled = String(pu(n))),
      (d.sample_rand =
        a?.get(`sentry.sample_rand`) ??
        jl(n).scope?.getPropagationContext().sampleRand.toString())),
    s(d),
    t.emit(`createDsc`, d, n),
    d
  );
}
var Pu = class {
  constructor(e = {}) {
    ((this._traceId = e.traceId || Yc()), (this._spanId = e.spanId || Xc()));
  }
  spanContext() {
    return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
  }
  end(e) {}
  setAttribute(e, t) {
    return this;
  }
  setAttributes(e) {
    return this;
  }
  setStatus(e) {
    return this;
  }
  updateName(e) {
    return this;
  }
  isRecording() {
    return !1;
  }
  addEvent(e, t, n) {
    return this;
  }
  addLink(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, t) {}
};
function Fu(e, t = 100, n = 1 / 0) {
  try {
    return Lu(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function Iu(e, t = 3, n = 100 * 1024) {
  let r = Fu(e, t);
  return Vu(r) > n ? Iu(e, t - 1, n) : r;
}
function Lu(e, t, n = 1 / 0, r = 1 / 0, i = Hu()) {
  let [a, o] = i;
  if (
    t == null ||
    [`boolean`, `string`].includes(typeof t) ||
    (typeof t == `number` && Number.isFinite(t))
  )
    return t;
  let s = Ru(e, t);
  if (!s.startsWith(`[object `)) return s;
  if (t.__sentry_skip_normalization__) return t;
  let c =
    typeof t.__sentry_override_normalization_depth__ == `number`
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return s.replace(`object `, ``);
  if (a(t)) return `[Circular ~]`;
  let l = t;
  if (l && typeof l.toJSON == `function`)
    try {
      return Lu(``, l.toJSON(), c - 1, r, i);
    } catch {}
  let u = Array.isArray(t) ? [] : {},
    d = 0,
    f = vc(t);
  for (let e in f) {
    if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
    if (d >= r) {
      u[e] = `[MaxProperties ~]`;
      break;
    }
    let t = f[e];
    ((u[e] = Lu(e, t, c - 1, r, i)), d++);
  }
  return (o(t), u);
}
function Ru(e, t) {
  try {
    if (e === `domain` && t && typeof t == `object` && t._events) return `[Domain]`;
    if (e === `domainEmitter`) return `[DomainEmitter]`;
    if (typeof global < `u` && t === global) return `[Global]`;
    if (typeof window < `u` && t === window) return `[Window]`;
    if (typeof document < `u` && t === document) return `[Document]`;
    if (lc(t)) return Ls(t);
    if (sc(t)) return `[SyntheticEvent]`;
    if (typeof t == `number` && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == `function`) return `[Function: ${Is(t)}]`;
    if (typeof t == `symbol`) return `[${String(t)}]`;
    if (typeof t == `bigint`) return `[BigInt: ${String(t)}]`;
    let n = zu(t);
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function zu(e) {
  let t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : `null prototype`;
}
function Bu(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Vu(e) {
  return Bu(JSON.stringify(e));
}
function K(e, t) {
  let n = t.replace(/\\/g, `/`).replace(/[|\\{}()[\]^$+*?.]/g, `\\$&`),
    r = e;
  try {
    r = decodeURI(e);
  } catch {}
  return r
    .replace(/\\/g, `/`)
    .replace(/webpack:\/?/g, ``)
    .replace(RegExp(`(file://)?/*${n}/*`, `ig`), `app:///`);
}
function Hu() {
  let e = new WeakSet();
  function t(t) {
    return e.has(t) ? !0 : (e.add(t), !1);
  }
  function n(t) {
    e.delete(t);
  }
  return [t, n];
}
function Uu(e, t = []) {
  return [e, t];
}
function Wu(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function Gu(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function Ku(e, t) {
  return Gu(e, (e, n) => t.includes(n));
}
function qu(e) {
  let t = ms(R);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Ju(e) {
  let t = ms(R);
  return t.decodePolyfill ? t.decodePolyfill(e) : new TextDecoder().decode(e);
}
function Yu(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [qu(r), e])
      : r.push(typeof e == `string` ? qu(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if ((i(`\n${JSON.stringify(t)}\n`), typeof n == `string` || n instanceof Uint8Array)) i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch {
        e = JSON.stringify(Fu(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : Xu(r);
}
function Xu(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
function Zu(e) {
  let t = typeof e == `string` ? qu(e) : e;
  function n(e) {
    let n = t.subarray(0, e);
    return ((t = t.subarray(e + 1)), n);
  }
  function r() {
    let e = t.indexOf(10);
    return (e < 0 && (e = t.length), JSON.parse(Ju(n(e))));
  }
  let i = r(),
    a = [];
  for (; t.length;) {
    let e = r(),
      t = typeof e.length == `number` ? e.length : void 0;
    a.push([e, t ? n(t) : r()]);
  }
  return [i, a];
}
function Qu(e) {
  return [{ type: `span` }, e];
}
function $u(e) {
  let t = typeof e.data == `string` ? qu(e.data) : e.data;
  return [
    {
      type: `attachment`,
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ];
}
var ed = {
  session: `session`,
  sessions: `session`,
  attachment: `attachment`,
  transaction: `transaction`,
  event: `error`,
  client_report: `internal`,
  user_report: `default`,
  profile: `profile`,
  profile_chunk: `profile`,
  replay_event: `replay`,
  replay_recording: `replay`,
  check_in: `monitor`,
  feedback: `feedback`,
  span: `span`,
  raw_security: `security`,
  log: `log_item`,
  metric: `metric`,
  trace_metric: `metric`,
};
function td(e) {
  return ed[e];
}
function nd(e) {
  if (!e?.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function rd(e, t, n, r) {
  let i = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Hl(r) }),
    ...(i && { trace: i }),
  };
}
function id(e, t) {
  if (!t) return e;
  let n = e.sdk || {};
  return (
    (e.sdk = {
      ...n,
      name: n.name || t.name,
      version: n.version || t.version,
      integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
      packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
      settings: e.sdk?.settings || t.settings ? { ...e.sdk?.settings, ...t.settings } : void 0,
    }),
    e
  );
}
function ad(e, t, n, r) {
  let i = nd(n);
  return Uu(
    { sent_at: new Date().toISOString(), ...(i && { sdk: i }), ...(!!r && t && { dsn: Hl(t) }) },
    [`aggregates` in e ? [{ type: `sessions` }, e] : [{ type: `session` }, e.toJSON()]],
  );
}
function od(e, t, n, r) {
  let i = nd(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  id(e, n?.sdk);
  let o = rd(e, i, r, t);
  return (delete e.sdkProcessingMetadata, Uu(o, [[{ type: a }, e]]));
}
function sd(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = G(e[0]),
    i = t?.getDsn(),
    a = t?.getOptions().tunnel,
    o = {
      sent_at: new Date().toISOString(),
      ...(n(r) && { trace: r }),
      ...(!!a && i && { dsn: Hl(i) }),
    },
    { beforeSendSpan: s, ignoreSpans: c } = t?.getOptions() || {},
    l = c?.length ? e.filter((e) => !Eu(W(e), c)) : e,
    u = e.length - l.length;
  u && t?.recordDroppedEvent(`before_send`, `span`, u);
  let d = s
      ? (e) => {
          let t = W(e);
          return s(t) || (xu(), t);
        }
      : W,
    f = [];
  for (let e of l) {
    let t = d(e);
    t && f.push(Qu(t));
  }
  return Uu(o, f);
}
function cd(e) {
  if (!L) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >`, parent_span_id: r } = W(e),
    { spanId: i } = e.spanContext(),
    a = pu(e),
    o = yu(e),
    s = o === e,
    c = `[Tracing] Starting ${a ? `sampled` : `unsampled`} ${s ? `root ` : ``}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
  if ((r && l.push(`parent ID: ${r}`), !s)) {
    let { op: e, description: t } = W(o);
    (l.push(`root ID: ${o.spanContext().spanId}`),
      e && l.push(`root op: ${e}`),
      t && l.push(`root description: ${t}`));
  }
  z.log(`${c}
  ${l.join(`
  `)}`);
}
function ld(e) {
  if (!L) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >` } = W(e),
    { spanId: r } = e.spanContext(),
    i = `[Tracing] Finishing "${n}" ${yu(e) === e ? `root ` : ``}span "${t}" with ID ${r}`;
  z.log(i);
}
function ud(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[yl],
        i = n[bl];
      typeof r == `string` && typeof i == `number` && (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
var dd = 1e3,
  fd = class {
    constructor(e = {}) {
      ((this._traceId = e.traceId || Yc()),
        (this._spanId = e.spanId || Xc()),
        (this._startTime = e.startTimestamp || Uc()),
        (this._links = e.links),
        (this._attributes = {}),
        this.setAttributes({ [vl]: `manual`, [_l]: e.op, ...e.attributes }),
        (this._name = e.name),
        e.parentSpanId && (this._parentSpanId = e.parentSpanId),
        `sampled` in e && (this._sampled = e.sampled),
        e.endTimestamp && (this._endTime = e.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = e.isStandalone),
        this._endTime && this._onSpanEnded());
    }
    addLink(e) {
      return (this._links ? this._links.push(e) : (this._links = [e]), this);
    }
    addLinks(e) {
      return (this._links ? this._links.push(...e) : (this._links = e), this);
    }
    recordException(e, t) {}
    spanContext() {
      let { _spanId: e, _traceId: t, _sampled: n } = this;
      return { spanId: e, traceId: t, traceFlags: +!!n };
    }
    setAttribute(e, t) {
      return (t === void 0 ? delete this._attributes[e] : (this._attributes[e] = t), this);
    }
    setAttributes(e) {
      return (Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this);
    }
    updateStartTime(e) {
      this._startTime = lu(e);
    }
    setStatus(e) {
      return ((this._status = e), this);
    }
    updateName(e) {
      return ((this._name = e), this.setAttribute(hl, `custom`), this);
    }
    end(e) {
      this._endTime || ((this._endTime = lu(e)), ld(this), this._onSpanEnded());
    }
    getSpanJSON() {
      return {
        data: this._attributes,
        description: this._name,
        op: this._attributes[_l],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: mu(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[vl],
        profile_id: this._attributes[Sl],
        exclusive_time: this._attributes[Cl],
        measurements: ud(this._events),
        is_segment: (this._isStandaloneSpan && yu(this) === this) || void 0,
        segment_id: this._isStandaloneSpan ? yu(this).spanContext().spanId : void 0,
        links: cu(this._links),
      };
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
      L && z.log(`[Tracing] Adding an event to span:`, e);
      let r = pd(t) ? t : n || Uc(),
        i = pd(t) ? {} : t || {},
        a = { name: e, time: lu(r), attributes: i };
      return (this._events.push(a), this);
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let e = U();
      if ((e && e.emit(`spanEnd`, this), !(this._isStandaloneSpan || this === yu(this)))) return;
      if (this._isStandaloneSpan) {
        this._sampled
          ? gd(sd([this], e))
          : (L &&
              z.log(
                `[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`,
              ),
            e && e.recordDroppedEvent(`sample_rate`, `span`));
        return;
      }
      let t = this._convertSpanToTransaction();
      t && (jl(this).scope || V()).captureEvent(t);
    }
    _convertSpanToTransaction() {
      if (!md(W(this))) return;
      this._name ||=
        (L && z.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
        `<unlabeled transaction>`);
      let { scope: e, isolationScope: t } = jl(this),
        n = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
      if (this._sampled !== !0) return;
      let r = vu(this)
          .filter((e) => e !== this && !hd(e))
          .map((e) => W(e))
          .filter(md),
        i = this._attributes[hl];
      (delete this._attributes[xl],
        r.forEach((e) => {
          delete e.data[xl];
        }));
      let a = {
          contexts: { trace: iu(this) },
          spans:
            r.length > dd
              ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, dd)
              : r,
          start_timestamp: this._startTime,
          timestamp: this._endTime,
          transaction: this._name,
          type: `transaction`,
          sdkProcessingMetadata: {
            capturedSpanScope: e,
            capturedSpanIsolationScope: t,
            dynamicSamplingContext: G(this),
          },
          request: n,
          ...(i && { transaction_info: { source: i } }),
        },
        o = ud(this._events);
      return (
        o &&
          Object.keys(o).length &&
          (L &&
            z.log(
              `[Measurements] Adding measurements to transaction event`,
              JSON.stringify(o, void 0, 2),
            ),
          (a.measurements = o)),
        a
      );
    }
  };
function pd(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function md(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function hd(e) {
  return e instanceof fd && e.isStandaloneSpan();
}
function gd(e) {
  let t = U();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
function _d(e, t, n = () => {}, r = () => {}) {
  let i;
  try {
    i = e();
  } catch (e) {
    throw (t(e), n(), e);
  }
  return vd(i, t, n, r);
}
function vd(e, t, n, r) {
  return oc(e)
    ? e.then(
        (e) => (n(), r(e), e),
        (e) => {
          throw (t(e), n(), e);
        },
      )
    : (n(), r(e), e);
}
function yd(e, t, n) {
  if (!wu(e)) return [!1];
  let r, i;
  typeof e.tracesSampler == `function`
    ? ((i = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (e) =>
          typeof t.parentSampleRate == `number`
            ? t.parentSampleRate
            : typeof t.parentSampled == `boolean`
              ? Number(t.parentSampled)
              : e,
      })),
      (r = !0))
    : t.parentSampled === void 0
      ? e.tracesSampleRate !== void 0 && ((i = e.tracesSampleRate), (r = !0))
      : (i = t.parentSampled);
  let a = Yl(i);
  if (a === void 0)
    return (
      L &&
        z.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`,
        ),
      [!1]
    );
  if (!a)
    return (
      L &&
        z.log(
          `[Tracing] Discarding transaction because ${typeof e.tracesSampler == `function` ? `tracesSampler returned 0 or false` : `a negative sampling decision was inherited or tracesSampleRate is set to 0`}`,
        ),
      [!1, a, r]
    );
  let o = n < a;
  return (
    o ||
      (L &&
        z.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
        )),
    [o, a, r]
  );
}
var bd = `__SENTRY_SUPPRESS_TRACING__`;
function xd(e) {
  let t = Td();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  let n = wd(e),
    { forceTransaction: r, parentSpan: i } = e;
  return (e.scope ? (t) => pl(e.scope, t) : i === void 0 ? (e) => e() : (e) => Sd(i, e))(() => {
    let t = V(),
      a = Od(t, i);
    return e.onlyIfParent && !a
      ? new Pu()
      : Cd({ parentSpan: a, spanArguments: n, forceTransaction: r, scope: t });
  });
}
function Sd(e, t) {
  let n = Td();
  return n.withActiveSpan ? n.withActiveSpan(e, t) : pl((n) => (Qc(n, e || void 0), t(n)));
}
function Cd({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  if (!wu()) {
    let r = new Pu();
    return (
      (n || !e) && ju(r, { sampled: `false`, sample_rate: `0`, transaction: t.name, ...G(r) }), r
    );
  }
  let i = H(),
    a;
  if (e && !n) ((a = Dd(e, r, t)), _u(e, a));
  else if (e) {
    let n = G(e),
      { traceId: i, spanId: o } = e.spanContext(),
      s = pu(e);
    ((a = Ed({ traceId: i, parentSpanId: o, ...t }, r, s)), ju(a, n));
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: o,
      sampled: s,
    } = { ...i.getPropagationContext(), ...r.getPropagationContext() };
    ((a = Ed({ traceId: e, parentSpanId: o, ...t }, r, s)), n && ju(a, n));
  }
  return (cd(a), Al(a, r, i), a);
}
function wd(e) {
  let t = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    let n = { ...t };
    return ((n.startTimestamp = lu(e.startTime)), delete n.startTime, n);
  }
  return t;
}
function Td() {
  return dl(ps());
}
function Ed(e, t, n) {
  let r = U(),
    i = r?.getOptions() || {},
    { name: a = `` } = e,
    o = { spanAttributes: { ...e.attributes }, spanName: a, parentSampled: n };
  r?.emit(`beforeSampling`, o, { decision: !1 });
  let s = o.parentSampled ?? n,
    c = o.spanAttributes,
    l = t.getPropagationContext(),
    [u, d, f] = t.getScopeData().sdkProcessingMetadata[bd]
      ? [!1]
      : yd(
          i,
          { name: a, parentSampled: s, attributes: c, parentSampleRate: Yl(l.dsc?.sample_rate) },
          l.sampleRand,
        ),
    p = new fd({
      ...e,
      attributes: { [hl]: `custom`, [gl]: d !== void 0 && f ? d : void 0, ...c },
      sampled: u,
    });
  return (
    !u &&
      r &&
      (L && z.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`),
      r.recordDroppedEvent(`sample_rate`, `transaction`)),
    r && r.emit(`spanStart`, p),
    p
  );
}
function Dd(e, t, n) {
  let { spanId: r, traceId: i } = e.spanContext(),
    a = !t.getScopeData().sdkProcessingMetadata[bd] && pu(e),
    o = a ? new fd({ ...n, parentSpanId: r, traceId: i, sampled: a }) : new Pu({ traceId: i });
  _u(e, o);
  let s = U();
  return (s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)), o);
}
function Od(e, t) {
  if (t) return t;
  if (t === null) return;
  let n = $c(e);
  if (!n) return;
  let r = U();
  return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? yu(n) : n;
}
var kd = 0,
  Ad = 1,
  jd = 2;
function Md(e) {
  return new Pd((t) => {
    t(e);
  });
}
function Nd(e) {
  return new Pd((t, n) => {
    n(e);
  });
}
var Pd = class e {
  constructor(e) {
    ((this._state = kd), (this._handlers = []), this._runExecutor(e));
  }
  then(t, n) {
    return new e((e, r) => {
      (this._handlers.push([
        !1,
        (n) => {
          if (!t) e(n);
          else
            try {
              e(t(n));
            } catch (e) {
              r(e);
            }
        },
        (t) => {
          if (!n) r(t);
          else
            try {
              e(n(t));
            } catch (e) {
              r(e);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(e) {
    return this.then((e) => e, e);
  }
  finally(t) {
    return new e((e, n) => {
      let r, i;
      return this.then(
        (e) => {
          ((i = !1), (r = e), t && t());
        },
        (e) => {
          ((i = !0), (r = e), t && t());
        },
      ).then(() => {
        if (i) {
          n(r);
          return;
        }
        e(r);
      });
    });
  }
  _executeHandlers() {
    if (this._state === kd) return;
    let e = this._handlers.slice();
    ((this._handlers = []),
      e.forEach((e) => {
        e[0] ||=
          (this._state === Ad && e[1](this._value), this._state === jd && e[2](this._value), !0);
      }));
  }
  _runExecutor(e) {
    let t = (e, t) => {
        if (this._state === kd) {
          if (oc(t)) {
            t.then(n, r);
            return;
          }
          ((this._state = e), (this._value = t), this._executeHandlers());
        }
      },
      n = (e) => {
        t(Ad, e);
      },
      r = (e) => {
        t(jd, e);
      };
    try {
      e(n, r);
    } catch (e) {
      r(e);
    }
  }
};
function Fd(e, t, n, r = 0) {
  try {
    let i = Id(t, n, e, r);
    return oc(i) ? i : Md(i);
  } catch (e) {
    return Nd(e);
  }
}
function Id(e, t, n, r) {
  let i = n[r];
  if (!e || !i) return e;
  let a = i({ ...e }, t);
  return (
    L && a === null && z.log(`Event processor "${i.id || `?`}" dropped event`),
    oc(a) ? a.then((e) => Id(e, t, n, r + 1)) : Id(a, t, n, r + 1)
  );
}
function Ld(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  (Bd(e, t), r && Ud(e, r), Wd(e, n), Vd(e, i), Hd(e, a));
}
function Rd(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    sdkProcessingMetadata: s,
    breadcrumbs: c,
    fingerprint: l,
    eventProcessors: u,
    attachments: d,
    propagationContext: f,
    transactionName: p,
    span: m,
  } = t;
  (zd(e, `extra`, n),
    zd(e, `tags`, r),
    zd(e, `user`, i),
    zd(e, `contexts`, a),
    (e.sdkProcessingMetadata = Jc(e.sdkProcessingMetadata, s, 2)),
    o && (e.level = o),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function zd(e, t, n) {
  e[t] = Jc(e[t], n, 1);
}
function Bd(e, t) {
  let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t;
  (Object.keys(n).length && (e.extra = { ...n, ...e.extra }),
    Object.keys(r).length && (e.tags = { ...r, ...e.tags }),
    Object.keys(i).length && (e.user = { ...i, ...e.user }),
    Object.keys(a).length && (e.contexts = { ...a, ...e.contexts }),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s));
}
function Vd(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Hd(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Ud(e, t) {
  ((e.contexts = { trace: au(t), ...e.contexts }),
    (e.sdkProcessingMetadata = { dynamicSamplingContext: G(t), ...e.sdkProcessingMetadata }));
  let n = W(yu(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function Wd(e, t) {
  ((e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint);
}
var Gd, Kd, qd, Jd;
function Yd(e) {
  let t = R._sentryDebugIds,
    n = R._debugIds;
  if (!t && !n) return {};
  let r = t ? Object.keys(t) : [],
    i = n ? Object.keys(n) : [];
  if (Jd && r.length === Kd && i.length === qd) return Jd;
  ((Kd = r.length), (qd = i.length), (Jd = {}), (Gd ||= {}));
  let a = (t, n) => {
    for (let r of t) {
      let t = n[r],
        i = Gd?.[r];
      if (i && Jd && t) ((Jd[i[0]] = t), Gd && (Gd[r] = [i[0], t]));
      else if (t) {
        let n = e(r);
        for (let e = n.length - 1; e >= 0; e--) {
          let i = n[e]?.filename;
          if (i && Jd && Gd) {
            ((Jd[i] = t), (Gd[r] = [i, t]));
            break;
          }
        }
      }
    }
  };
  return (t && a(r, t), n && a(i, n), Jd);
}
function Xd(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = { ...t, event_id: t.event_id || n.event_id || B(), timestamp: t.timestamp || Bc() },
    l = n.integrations || e.integrations.map((e) => e.name);
  (Zd(c, e),
    ef(c, l),
    i && i.emit(`applyFrameMetadata`, t),
    t.type === void 0 && Qd(c, e.stackParser));
  let u = nf(r, n.captureContext);
  n.mechanism && Nc(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = fl().getScopeData();
  (a && Rd(f, a.getScopeData()), u && Rd(f, u.getScopeData()));
  let p = [...(n.attachments || []), ...f.attachments];
  return (
    p.length && (n.attachments = p),
    Ld(c, f),
    Fd([...d, ...f.eventProcessors], c, n).then(
      (e) => (e && $d(e), typeof o == `number` && o > 0 ? tf(e, o, s) : e),
    )
  );
}
function Zd(e, t) {
  let { environment: n, release: r, dist: i, maxValueLength: a } = t;
  ((e.environment = e.environment || n || `production`),
    !e.release && r && (e.release = r),
    !e.dist && i && (e.dist = i));
  let o = e.request;
  (o?.url && a && (o.url = Sc(o.url, a)),
    a &&
      e.exception?.values?.forEach((e) => {
        e.value &&= Sc(e.value, a);
      }));
}
function Qd(e, t) {
  let n = Yd(t);
  e.exception?.values?.forEach((e) => {
    e.stacktrace?.frames?.forEach((e) => {
      e.filename && (e.debug_id = n[e.filename]);
    });
  });
}
function $d(e) {
  let t = {};
  if (
    (e.exception?.values?.forEach((e) => {
      e.stacktrace?.frames?.forEach((e) => {
        e.debug_id &&
          (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    }),
    Object.keys(t).length === 0)
  )
    return;
  ((e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []));
  let n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: `sourcemap`, code_file: e, debug_id: t });
  });
}
function ef(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function tf(e, t, n) {
  if (!e) return null;
  let r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((e) => ({ ...e, ...(e.data && { data: Fu(e.data, t, n) }) })),
    }),
    ...(e.user && { user: Fu(e.user, t, n) }),
    ...(e.contexts && { contexts: Fu(e.contexts, t, n) }),
    ...(e.extra && { extra: Fu(e.extra, t, n) }),
  };
  return (
    e.contexts?.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data && (r.contexts.trace.data = Fu(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((e) => ({ ...e, ...(e.data && { data: Fu(e.data, t, n) }) }))),
    e.contexts?.flags && r.contexts && (r.contexts.flags = Fu(e.contexts.flags, 3, n)),
    r
  );
}
function nf(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new tl();
  return (n.update(t), n);
}
function rf(e) {
  if (e) return af(e) || sf(e) ? { captureContext: e } : e;
}
function af(e) {
  return e instanceof tl || typeof e == `function`;
}
var of = [`user`, `level`, `extra`, `contexts`, `tags`, `fingerprint`, `propagationContext`];
function sf(e) {
  return Object.keys(e).some((e) => of.includes(e));
}
function cf(e, t) {
  return V().captureException(e, rf(t));
}
function lf(e, t) {
  let n = typeof t == `string` ? t : void 0,
    r = typeof t == `string` ? void 0 : { captureContext: t };
  return V().captureMessage(e, n, r);
}
function uf(e, t) {
  return V().captureEvent(e, t);
}
function df(e, t) {
  H().setTag(e, t);
}
function ff(e) {
  H().setUser(e);
}
async function pf(e) {
  let t = U();
  return t
    ? t.flush(e)
    : (L && z.warn(`Cannot flush events. No client defined.`), Promise.resolve(!1));
}
function mf() {
  let e = U();
  return e?.getOptions().enabled !== !1 && !!e?.getTransport();
}
function hf(e) {
  let t = H(),
    n = V(),
    { userAgent: r } = R.navigator || {},
    i = Wc({ user: n.getUser() || t.getUser(), ...(r && { userAgent: r }), ...e }),
    a = t.getSession();
  return (a?.status === `ok` && Gc(a, { status: `exited` }), gf(), t.setSession(i), i);
}
function gf() {
  let e = H(),
    t = V().getSession() || e.getSession();
  (t && Kc(t), _f(), e.setSession());
}
function _f() {
  let e = H(),
    t = U(),
    n = e.getSession();
  n && t && t.captureSession(n);
}
function vf(e = !1) {
  if (e) {
    gf();
    return;
  }
  _f();
}
var yf = `7`;
function bf(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function xf(e) {
  return `${bf(e)}${e.projectId}/envelope/`;
}
function Sf(e, t) {
  let n = { sentry_version: yf };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function Cf(e, t, n) {
  return t || `${xf(e)}?${Sf(e, n)}`;
}
var wf = [];
function Tf(e) {
  let t = {};
  return (
    e.forEach((e) => {
      let { name: n } = e,
        r = t[n];
      (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
    }),
    Object.values(t)
  );
}
function Ef(e) {
  let t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...t, ...n];
  else if (typeof n == `function`) {
    let e = n(t);
    r = Array.isArray(e) ? e : [e];
  } else r = t;
  return Tf(r);
}
function Df(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t && kf(e, t, n);
    }),
    n
  );
}
function Of(e, t) {
  for (let n of t) n?.afterAllSetup && n.afterAllSetup(e);
}
function kf(e, t, n) {
  if (n[t.name]) {
    L && z.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    !wf.includes(t.name) && typeof t.setupOnce == `function` && (t.setupOnce(), wf.push(t.name)),
    t.setup && typeof t.setup == `function` && t.setup(e),
    typeof t.preprocessEvent == `function`)
  ) {
    let n = t.preprocessEvent.bind(t);
    e.on(`preprocessEvent`, (t, r) => n(t, r, e));
  }
  if (typeof t.processEvent == `function`) {
    let n = t.processEvent.bind(t),
      r = Object.assign((t, r) => n(t, r, e), { id: t.name });
    e.addEventProcessor(r);
  }
  L && z.log(`Integration installed: ${t.name}`);
}
function q(e) {
  return e;
}
function Af(e, t) {
  return t
    ? pl(t, () => {
        let n = bu(),
          r = n ? au(n) : ml(t);
        return [n ? G(n) : Nu(e, t), r];
      })
    : [void 0, void 0];
}
var jf = { trace: 1, debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
function Mf(e) {
  return [
    { type: `log`, item_count: e.length, content_type: `application/vnd.sentry.items.log+json` },
    { items: e },
  ];
}
function Nf(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = Hl(r)),
    Uu(i, [Mf(e)])
  );
}
var Pf = 100;
function Ff(e) {
  switch (typeof e) {
    case `number`:
      return Number.isInteger(e) ? { value: e, type: `integer` } : { value: e, type: `double` };
    case `boolean`:
      return { value: e, type: `boolean` };
    case `string`:
      return { value: e, type: `string` };
    default: {
      let t = ``;
      try {
        t = JSON.stringify(e) ?? ``;
      } catch {}
      return { value: t, type: `string` };
    }
  }
}
function J(e, t, n, r = !0) {
  n && (!e[t] || r) && (e[t] = n);
}
function If(e, t) {
  let n = Vf(),
    r = zf(e);
  r === void 0 ? n.set(e, [t]) : r.length >= Pf ? (Rf(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function Lf(e, t = V(), n = If) {
  let r = t?.getClient() ?? U();
  if (!r) {
    L && z.warn(`No client available to capture log.`);
    return;
  }
  let { release: i, environment: a, enableLogs: o = !1, beforeSendLog: s } = r.getOptions();
  if (!o) {
    L && z.warn(`logging option not enabled, log will not be captured.`);
    return;
  }
  let [, c] = Af(r, t),
    l = { ...e.attributes },
    {
      user: { id: u, email: d, username: f },
    } = Bf(t);
  (J(l, `user.id`, u, !1),
    J(l, `user.email`, d, !1),
    J(l, `user.name`, f, !1),
    J(l, `sentry.release`, i),
    J(l, `sentry.environment`, a));
  let { name: p, version: m } = r.getSdkMetadata()?.sdk ?? {};
  (J(l, `sentry.sdk.name`, p), J(l, `sentry.sdk.version`, m));
  let h = r.getIntegrationByName(`Replay`),
    g = h?.getReplayId(!0);
  (J(l, `sentry.replay_id`, g),
    g && h?.getRecordingMode() === `buffer` && J(l, `sentry._internal.replay_is_buffering`, !0));
  let _ = e.message;
  if (ec(_)) {
    let { __sentry_template_string__: e, __sentry_template_values__: t = [] } = _;
    (t?.length && (l[`sentry.message.template`] = e),
      t.forEach((e, t) => {
        l[`sentry.message.parameter.${t}`] = e;
      }));
  }
  J(l, `sentry.trace.parent_span_id`, $c(t)?.spanContext().spanId);
  let v = { ...e, attributes: l };
  r.emit(`beforeCaptureLog`, v);
  let y = s ? ys(() => s(v)) : v;
  if (!y) {
    (r.recordDroppedEvent(`before_send`, `log_item`, 1),
      L && z.warn(`beforeSendLog returned null, log will not be captured.`));
    return;
  }
  let { level: b, message: x, attributes: S = {}, severityNumber: C } = y;
  (n(r, {
    timestamp: Uc(),
    level: b,
    body: x,
    trace_id: c?.trace_id,
    severity_number: C ?? jf[b],
    attributes: Object.keys(S).reduce((e, t) => ((e[t] = Ff(S[t])), e), {}),
  }),
    r.emit(`afterCaptureLog`, y));
}
function Rf(e, t) {
  let n = t ?? zf(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Nf(n, r._metadata, r.tunnel, e.getDsn());
  (Vf().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i));
}
function zf(e) {
  return Vf().get(e);
}
function Bf(e) {
  let t = fl().getScopeData();
  return (Rd(t, H().getScopeData()), Rd(t, e.getScopeData()), t);
}
function Vf() {
  return hs(`clientToLogBufferMap`, () => new WeakMap());
}
function Hf(e) {
  return [
    {
      type: `trace_metric`,
      item_count: e.length,
      content_type: `application/vnd.sentry.items.trace-metric+json`,
    },
    { items: e },
  ];
}
function Uf(e, t, n, r) {
  let i = {};
  return (
    t?.sdk && (i.sdk = { name: t.sdk.name, version: t.sdk.version }),
    n && r && (i.dsn = Hl(r)),
    Uu(i, [Hf(e)])
  );
}
var Wf = 1e3;
function Gf(e, t) {
  let n = Jf(),
    r = qf(e);
  r === void 0 ? n.set(e, [t]) : r.length >= Wf ? (Kf(e, r), n.set(e, [t])) : n.set(e, [...r, t]);
}
function Kf(e, t) {
  let n = t ?? qf(e) ?? [];
  if (n.length === 0) return;
  let r = e.getOptions(),
    i = Uf(n, r._metadata, r.tunnel, e.getDsn());
  (Jf().set(e, []), e.emit(`flushMetrics`), e.sendEnvelope(i));
}
function qf(e) {
  return Jf().get(e);
}
function Jf() {
  return hs(`clientToMetricBufferMap`, () => new WeakMap());
}
var Yf = Symbol.for(`SentryBufferFullError`);
function Xf(e = 100) {
  let t = new Set();
  function n() {
    return t.size < e;
  }
  function r(e) {
    t.delete(e);
  }
  function i(e) {
    if (!n()) return Nd(Yf);
    let i = e();
    return (
      t.add(i),
      i.then(
        () => r(i),
        () => r(i),
      ),
      i
    );
  }
  function a(e) {
    if (!t.size) return Md(!0);
    let n = Promise.allSettled(Array.from(t)).then(() => !0);
    if (!e) return n;
    let r = [n, new Promise((t) => setTimeout(() => t(!1), e))];
    return Promise.race(r);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: i,
    drain: a,
  };
}
var Zf = 60 * 1e3;
function Qf(e, t = Date.now()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? Zf : r - t;
}
function $f(e, t) {
  return e[t] || e.all || 0;
}
function ep(e, t, n = Date.now()) {
  return $f(e, t) > n;
}
function tp(e, { statusCode: t, headers: n }, r = Date.now()) {
  let i = { ...e },
    a = n?.[`x-sentry-rate-limits`],
    o = n?.[`retry-after`];
  if (a)
    for (let e of a.trim().split(`,`)) {
      let [t, n, , , a] = e.split(`:`, 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (!n) i.all = r + s;
      else
        for (let e of n.split(`;`))
          e === `metric_bucket`
            ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s)
            : (i[e] = r + s);
    }
  else o ? (i.all = r + Qf(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
function np(e, t, n = Xf(e.bufferSize || 64)) {
  let r = {},
    i = (e) => n.drain(e);
  function a(i) {
    let a = [];
    if (
      (Gu(i, (t, n) => {
        let i = td(n);
        ep(r, i) ? e.recordDroppedEvent(`ratelimit_backoff`, i) : a.push(t);
      }),
      a.length === 0)
    )
      return Promise.resolve({});
    let o = Uu(i[0], a),
      s = (t) => {
        Gu(o, (n, r) => {
          e.recordDroppedEvent(t, td(r));
        });
      };
    return n
      .add(() =>
        t({ body: Yu(o) }).then(
          (e) => (
            e.statusCode !== void 0 &&
              (e.statusCode < 200 || e.statusCode >= 300) &&
              L &&
              z.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
            (r = tp(r, e)),
            e
          ),
          (e) => {
            throw (
              s(`network_error`), L && z.error(`Encountered error running transport request:`, e), e
            );
          },
        ),
      )
      .then(
        (e) => e,
        (e) => {
          if (e === Yf)
            return (
              L && z.error(`Skipped sending event because buffer is full.`),
              s(`queue_overflow`),
              Promise.resolve({})
            );
          throw e;
        },
      );
  }
  return { send: a, flush: i };
}
function rp(e, t, n) {
  let r = [{ type: `client_report` }, { timestamp: n || Bc(), discarded_events: e }];
  return Uu(t ? { dsn: t } : {}, [r]);
}
function ip(e) {
  let t = [];
  e.message && t.push(e.message);
  try {
    let n = e.exception.values[e.exception.values.length - 1];
    n?.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`));
  } catch {}
  return t;
}
function ap(e) {
  let {
    trace_id: t,
    parent_span_id: n,
    span_id: r,
    status: i,
    origin: a,
    data: o,
    op: s,
  } = e.contexts?.trace ?? {};
  return {
    data: o ?? {},
    description: e.transaction,
    op: s,
    parent_span_id: n,
    span_id: r ?? ``,
    start_timestamp: e.start_timestamp ?? 0,
    status: i,
    timestamp: e.timestamp,
    trace_id: t ?? ``,
    origin: a,
    profile_id: o?.[Sl],
    exclusive_time: o?.[Cl],
    measurements: e.measurements,
    is_segment: !0,
  };
}
function op(e) {
  return {
    type: `transaction`,
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && { "sentry.profile_id": e.profile_id }),
          ...(e.exclusive_time && { "sentry.exclusive_time": e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
var sp = `Not capturing exception because it's already been captured.`,
  cp = `Discarded session because of missing or non-string release`,
  lp = Symbol.for(`SentryInternalError`),
  up = Symbol.for(`SentryDoNotSendEventError`),
  dp = 5e3;
function fp(e) {
  return { message: e, [lp]: !0 };
}
function pp(e) {
  return { message: e, [up]: !0 };
}
function mp(e) {
  return !!e && typeof e == `object` && lp in e;
}
function hp(e) {
  return !!e && typeof e == `object` && up in e;
}
function gp(e, t, n, r, i) {
  let a = 0,
    o,
    s = !1;
  (e.on(n, () => {
    ((a = 0), clearTimeout(o), (s = !1));
  }),
    e.on(t, (t) => {
      ((a += r(t)),
        a >= 8e5
          ? i(e)
          : s ||
            ((s = !0),
            (o = setTimeout(() => {
              i(e);
            }, dp))));
    }),
    e.on(`flush`, () => {
      i(e);
    }));
}
var _p = class {
  constructor(e) {
    if (
      ((this._options = e),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      (this._promiseBuffer = Xf(e.transportOptions?.bufferSize ?? 64)),
      e.dsn
        ? (this._dsn = Jl(e.dsn))
        : L && z.warn(`No DSN provided, client will not send events.`),
      this._dsn)
    ) {
      let t = Cf(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...e.transportOptions,
        url: t,
      });
    }
    ((this._options.enableLogs =
      this._options.enableLogs ?? this._options._experiments?.enableLogs),
      this._options.enableLogs && gp(this, `afterCaptureLog`, `flushLogs`, wp, Rf),
      (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) &&
        gp(this, `afterCaptureMetric`, `flushMetrics`, Cp, Kf));
  }
  captureException(e, t, n) {
    let r = B();
    if (Lc(e)) return (L && z.log(sp), r);
    let i = { event_id: r, ...t };
    return (
      this._process(
        () =>
          this.eventFromException(e, i)
            .then((e) => this._captureEvent(e, i, n))
            .then((e) => e),
        `error`,
      ),
      i.event_id
    );
  }
  captureMessage(e, t, n, r) {
    let i = { event_id: B(), ...n },
      a = ec(e) ? e : String(e),
      o = tc(e),
      s = o ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
    return (
      this._process(() => s.then((e) => this._captureEvent(e, i, r)), o ? `unknown` : `error`),
      i.event_id
    );
  }
  captureEvent(e, t, n) {
    let r = B();
    if (t?.originalException && Lc(t.originalException)) return (L && z.log(sp), r);
    let i = { event_id: r, ...t },
      a = e.sdkProcessingMetadata || {},
      o = a.capturedSpanScope,
      s = a.capturedSpanIsolationScope,
      c = vp(e.type);
    return (this._process(() => this._captureEvent(e, i, o || n, s), c), i.event_id);
  }
  captureSession(e) {
    (this.sendSession(e), Gc(e, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(e) {
    let t = this._transport;
    if (!t) return !0;
    this.emit(`flush`);
    let n = await this._isClientDoneProcessing(e),
      r = await t.flush(e);
    return n && r;
  }
  async close(e) {
    let t = await this.flush(e);
    return ((this.getOptions().enabled = !1), this.emit(`close`), t);
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() ||
      this._options.integrations.some(({ name: e }) => e.startsWith(`Spotlight`))) &&
      this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    let t = this._integrations[e.name];
    (kf(this, e, this._integrations), t || Of(this, [e]));
  }
  sendEvent(e, t = {}) {
    this.emit(`beforeSendEvent`, e, t);
    let n = od(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (let e of t.attachments || []) n = Wu(n, $u(e));
    this.sendEnvelope(n).then((t) => this.emit(`afterSendEvent`, e, t));
  }
  sendSession(e) {
    let { release: t, environment: n = ku } = this._options;
    if (`aggregates` in e) {
      let r = e.attrs || {};
      if (!r.release && !t) {
        L && z.warn(cp);
        return;
      }
      ((r.release = r.release || t), (r.environment = r.environment || n), (e.attrs = r));
    } else {
      if (!e.release && !t) {
        L && z.warn(cp);
        return;
      }
      ((e.release = e.release || t), (e.environment = e.environment || n));
    }
    this.emit(`beforeSendSession`, e);
    let r = ad(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(e, t, n = 1) {
    if (this._options.sendClientReports) {
      let r = `${e}:${t}`;
      (L && z.log(`Recording outcome: "${r}"${n > 1 ? ` (${n} times)` : ``}`),
        (this._outcomes[r] = (this._outcomes[r] || 0) + n));
    }
  }
  on(e, t) {
    let n = (this._hooks[e] = this._hooks[e] || new Set()),
      r = (...e) => t(...e);
    return (
      n.add(r),
      () => {
        n.delete(r);
      }
    );
  }
  emit(e, ...t) {
    let n = this._hooks[e];
    n && n.forEach((e) => e(...t));
  }
  async sendEnvelope(e) {
    if ((this.emit(`beforeEnvelope`, e), this._isEnabled() && this._transport))
      try {
        return await this._transport.send(e);
      } catch (e) {
        return (L && z.error(`Error while sending envelope:`, e), {});
      }
    return (L && z.error(`Transport disabled`), {});
  }
  _setupIntegrations() {
    let { integrations: e } = this._options;
    ((this._integrations = Df(this, e)), Of(this, e));
  }
  _updateSessionFromEvent(e, t) {
    let n = t.level === `fatal`,
      r = !1,
      i = t.exception?.values;
    if (i) {
      ((r = !0), (n = !1));
      for (let e of i)
        if (e.mechanism?.handled === !1) {
          n = !0;
          break;
        }
    }
    let a = e.status === `ok`;
    ((a && e.errors === 0) || (a && n)) &&
      (Gc(e, { ...(n && { status: `crashed` }), errors: e.errors || Number(r || n) }),
      this.captureSession(e));
  }
  async _isClientDoneProcessing(e) {
    let t = 0;
    for (; !e || t < e;) {
      if ((await new Promise((e) => setTimeout(e, 1)), !this._numProcessing)) return !0;
      t++;
    }
    return !1;
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, t, n, r) {
    let i = this.getOptions(),
      a = Object.keys(this._integrations);
    return (
      !t.integrations && a?.length && (t.integrations = a),
      this.emit(`preprocessEvent`, e, t),
      e.type || r.setLastEventId(e.event_id || t.event_id),
      Xd(i, e, t, n, this, r).then((e) =>
        e === null
          ? e
          : (this.emit(`postprocessEvent`, e, t),
            (e.contexts = { trace: ml(n), ...e.contexts }),
            (e.sdkProcessingMetadata = {
              dynamicSamplingContext: Nu(this, n),
              ...e.sdkProcessingMetadata,
            }),
            e),
      )
    );
  }
  _captureEvent(e, t = {}, n = V(), r = H()) {
    return (
      L && xp(e) && z.log(`Captured error event \`${ip(e)[0] || `<unknown>`}\``),
      this._processEvent(e, t, n, r).then(
        (e) => e.event_id,
        (e) => {
          L && (hp(e) ? z.log(e.message) : mp(e) ? z.warn(e.message) : z.warn(e));
        },
      )
    );
  }
  _processEvent(e, t, n, r) {
    let i = this.getOptions(),
      { sampleRate: a } = i,
      o = Sp(e),
      s = xp(e),
      c = `before send for type \`${e.type || `error`}\``,
      l = a === void 0 ? void 0 : Yl(a);
    if (s && typeof l == `number` && Math.random() > l)
      return (
        this.recordDroppedEvent(`sample_rate`, `error`),
        Nd(
          pp(
            `Discarding event because it's not included in the random sample (sampling rate = ${a})`,
          ),
        )
      );
    let u = vp(e.type);
    return this._prepareEvent(e, t, n, r)
      .then((e) => {
        if (e === null)
          throw (
            this.recordDroppedEvent(`event_processor`, u),
            pp("An event processor returned `null`, will not send event.")
          );
        return t.data && t.data.__sentry__ === !0 ? e : yp(bp(this, i, e, t), c);
      })
      .then((i) => {
        if (i === null) {
          if ((this.recordDroppedEvent(`before_send`, u), o)) {
            let t = 1 + (e.spans || []).length;
            this.recordDroppedEvent(`before_send`, `span`, t);
          }
          throw pp(`${c} returned \`null\`, will not send event.`);
        }
        let a = n.getSession() || r.getSession();
        if ((s && a && this._updateSessionFromEvent(a, i), o)) {
          let e =
            (i.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) -
            (i.spans ? i.spans.length : 0);
          e > 0 && this.recordDroppedEvent(`before_send`, `span`, e);
        }
        let l = i.transaction_info;
        return (
          o &&
            l &&
            i.transaction !== e.transaction &&
            (i.transaction_info = { ...l, source: `custom` }),
          this.sendEvent(i, t),
          i
        );
      })
      .then(null, (e) => {
        throw hp(e) || mp(e)
          ? e
          : (this.captureException(e, {
              mechanism: { handled: !1, type: `internal` },
              data: { __sentry__: !0 },
              originalException: e,
            }),
            fp(
              `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
            ));
      });
  }
  _process(e, t) {
    (this._numProcessing++,
      this._promiseBuffer.add(e).then(
        (e) => (this._numProcessing--, e),
        (e) => (this._numProcessing--, e === Yf && this.recordDroppedEvent(`queue_overflow`, t), e),
      ));
  }
  _clearOutcomes() {
    let e = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.entries(e).map(([e, t]) => {
        let [n, r] = e.split(`:`);
        return { reason: n, category: r, quantity: t };
      })
    );
  }
  _flushOutcomes() {
    L && z.log(`Flushing outcomes...`);
    let e = this._clearOutcomes();
    if (e.length === 0) {
      L && z.log(`No outcomes to send`);
      return;
    }
    if (!this._dsn) {
      L && z.log(`No dsn provided, will not send outcomes`);
      return;
    }
    L && z.log(`Sending outcomes:`, e);
    let t = rp(e, this._options.tunnel && Hl(this._dsn));
    this.sendEnvelope(t);
  }
};
function vp(e) {
  return e === `replay_event` ? `replay` : e || `error`;
}
function yp(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (oc(e))
    return e.then(
      (e) => {
        if (!nc(e) && e !== null) throw fp(n);
        return e;
      },
      (e) => {
        throw fp(`${t} rejected with ${e}`);
      },
    );
  if (!nc(e) && e !== null) throw fp(n);
  return e;
}
function bp(e, t, n, r) {
  let { beforeSend: i, beforeSendTransaction: a, beforeSendSpan: o, ignoreSpans: s } = t,
    c = n;
  if (xp(c) && i) return i(c, r);
  if (Sp(c)) {
    if (o || s) {
      let t = ap(c);
      if (s?.length && Eu(t, s)) return null;
      if (o) {
        let e = o(t);
        e ? (c = Jc(n, op(e))) : xu();
      }
      if (c.spans) {
        let t = [],
          n = c.spans;
        for (let e of n) {
          if (s?.length && Eu(e, s)) {
            Du(n, e);
            continue;
          }
          if (o) {
            let n = o(e);
            n ? t.push(n) : (xu(), t.push(e));
          } else t.push(e);
        }
        let r = c.spans.length - t.length;
        (r && e.recordDroppedEvent(`before_send`, `span`, r), (c.spans = t));
      }
    }
    if (a) {
      if (c.spans) {
        let e = c.spans.length;
        c.sdkProcessingMetadata = { ...n.sdkProcessingMetadata, spanCountBeforeProcessing: e };
      }
      return a(c, r);
    }
  }
  return c;
}
function xp(e) {
  return e.type === void 0;
}
function Sp(e) {
  return e.type === `transaction`;
}
function Cp(e) {
  let t = 0;
  return (e.name && (t += e.name.length * 2), (t += 8), t + Tp(e.attributes));
}
function wp(e) {
  let t = 0;
  return (e.message && (t += e.message.length * 2), t + Tp(e.attributes));
}
function Tp(e) {
  if (!e) return 0;
  let t = 0;
  return (
    Object.values(e).forEach((e) => {
      Array.isArray(e) ? (t += e.length * Ep(e[0])) : tc(e) ? (t += Ep(e)) : (t += 100);
    }),
    t
  );
}
function Ep(e) {
  return typeof e == `string`
    ? e.length * 2
    : typeof e == `number`
      ? 8
      : typeof e == `boolean`
        ? 4
        : 0;
}
function Dp(e, t, n, r, i) {
  let a = { sent_at: new Date().toISOString() };
  return (
    n?.sdk && (a.sdk = { name: n.sdk.name, version: n.sdk.version }),
    r && i && (a.dsn = Hl(i)),
    t && (a.trace = t),
    Uu(a, [Op(e)])
  );
}
function Op(e) {
  return [{ type: `check_in` }, e];
}
function kp(e) {
  let t = e._metadata?.sdk,
    n = t?.name && t?.version ? `${t?.name}/${t?.version}` : void 0;
  e.transportOptions = {
    ...e.transportOptions,
    headers: { ...(n && { "user-agent": n }), ...e.transportOptions?.headers },
  };
}
function Ap(e, t) {
  return e(t.stack || ``, 1);
}
function jp(e, t) {
  let n = { type: t.name || t.constructor.name, value: t.message },
    r = Ap(e, t);
  return (r.length && (n.stacktrace = { frames: r }), n);
}
function Mp(e) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t];
      if (n instanceof Error) return n;
    }
}
function Np(e) {
  if (`name` in e && typeof e.name == `string`) {
    let t = `'${e.name}' captured as exception`;
    return (
      `message` in e && typeof e.message == `string` && (t += ` with message '${e.message}'`), t
    );
  } else if (`message` in e && typeof e.message == `string`) return e.message;
  let t = xc(e);
  if (Qs(e)) return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
  let n = Pp(e);
  return `${n && n !== `Object` ? `'${n}'` : `Object`} captured as exception with keys: ${t}`;
}
function Pp(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function Fp(e, t, n, r) {
  if (Xs(n)) return [n, void 0];
  if (((t.synthetic = !0), nc(n))) {
    let t = e?.getOptions().normalizeDepth,
      i = { __serialized__: Iu(n, t) },
      a = Mp(n);
    if (a) return [a, i];
    let o = Np(n),
      s = r?.syntheticException || Error(o);
    return ((s.message = o), [s, i]);
  }
  let i = r?.syntheticException || Error(n);
  return ((i.message = `${n}`), [i, void 0]);
}
function Ip(e, t, n, r) {
  let i = (r?.data && r.data.mechanism) || { handled: !0, type: `generic` },
    [a, o] = Fp(e, i, n, r),
    s = { exception: { values: [jp(t, a)] } };
  return (o && (s.extra = o), Mc(s, void 0, void 0), Nc(s, i), { ...s, event_id: r?.event_id });
}
function Lp(e, t, n = `info`, r, i) {
  let a = { event_id: r?.event_id, level: n };
  if (i && r?.syntheticException) {
    let n = Ap(e, r.syntheticException);
    n.length &&
      ((a.exception = { values: [{ value: t, stacktrace: { frames: n } }] }),
      Nc(a, { synthetic: !0 }));
  }
  if (ec(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return ((a.logentry = { message: e, params: n }), a);
  }
  return ((a.message = t), a);
}
var Rp = class extends _p {
  constructor(e) {
    (Cu(), kp(e), super(e), this._setUpMetricsProcessing());
  }
  eventFromException(e, t) {
    let n = Ip(this, this._options.stackParser, e, t);
    return ((n.level = `error`), Md(n));
  }
  eventFromMessage(e, t = `info`, n) {
    return Md(Lp(this._options.stackParser, e, t, n, this._options.attachStacktrace));
  }
  captureException(e, t, n) {
    return (zp(t), super.captureException(e, t, n));
  }
  captureEvent(e, t, n) {
    return (
      !e.type && e.exception?.values && e.exception.values.length > 0 && zp(t),
      super.captureEvent(e, t, n)
    );
  }
  captureCheckIn(e, t, n) {
    let r = `checkInId` in e && e.checkInId ? e.checkInId : B();
    if (!this._isEnabled()) return (L && z.warn(`SDK not enabled, will not capture check-in.`), r);
    let { release: i, environment: a, tunnel: o } = this.getOptions(),
      s = {
        check_in_id: r,
        monitor_slug: e.monitorSlug,
        status: e.status,
        release: i,
        environment: a,
      };
    (`duration` in e && (s.duration = e.duration),
      t &&
        (s.monitor_config = {
          schedule: t.schedule,
          checkin_margin: t.checkinMargin,
          max_runtime: t.maxRuntime,
          timezone: t.timezone,
          failure_issue_threshold: t.failureIssueThreshold,
          recovery_threshold: t.recoveryThreshold,
        }));
    let [c, l] = Af(this, n);
    l && (s.contexts = { trace: l });
    let u = Dp(s, c, this.getSdkMetadata(), o, this.getDsn());
    return (L && z.log(`Sending checkin:`, e.monitorSlug, e.status), this.sendEnvelope(u), r);
  }
  _prepareEvent(e, t, n, r) {
    return (
      this._options.platform && (e.platform = e.platform || this._options.platform),
      this._options.runtime &&
        (e.contexts = { ...e.contexts, runtime: e.contexts?.runtime || this._options.runtime }),
      this._options.serverName && (e.server_name = e.server_name || this._options.serverName),
      super._prepareEvent(e, t, n, r)
    );
  }
  _setUpMetricsProcessing() {
    this.on(`processMetric`, (e) => {
      this._options.serverName &&
        (e.attributes = { "server.address": this._options.serverName, ...e.attributes });
    });
  }
};
function zp(e) {
  let t = H().getScopeData().sdkProcessingMetadata.requestSession;
  if (t) {
    let n = e?.mechanism?.handled ?? !0;
    n && t.status !== `crashed` ? (t.status = `errored`) : n || (t.status = `crashed`);
  }
}
var Bp = 5e3,
  Vp = 36e5;
function Hp(e) {
  function t(...e) {
    L && z.log(`[Offline]:`, ...e);
  }
  return (n) => {
    let r = e(n);
    if (!n.createStore) throw Error("No `createStore` function was provided");
    let i = n.createStore(n),
      a = Bp,
      o;
    function s(e, t, r) {
      return Ku(e, [`client_report`]) ? !1 : !n.shouldStore || n.shouldStore(e, t, r);
    }
    function c(e) {
      (o && clearTimeout(o),
        (o = setTimeout(async () => {
          o = void 0;
          let e = await i.shift();
          e &&
            (t(`Attempting to send previously queued event`),
            (e[0].sent_at = new Date().toISOString()),
            u(e, !0).catch((e) => {
              t(`Failed to retry sending`, e);
            }));
        }, e)),
        typeof o != `number` && o.unref && o.unref());
    }
    function l() {
      o || (c(a), (a = Math.min(a * 2, Vp)));
    }
    async function u(e, o = !1) {
      if (!o && Ku(e, [`replay_event`, `replay_recording`])) return (await i.push(e), c(100), {});
      try {
        if (n.shouldSend && (await n.shouldSend(e)) === !1)
          throw Error("Envelope not sent because `shouldSend` callback returned false");
        let t = await r.send(e),
          i = 100;
        if (t) {
          if (t.headers?.[`retry-after`]) i = Qf(t.headers[`retry-after`]);
          else if (t.headers?.[`x-sentry-rate-limits`]) i = 6e4;
          else if ((t.statusCode || 0) >= 400) return t;
        }
        return (c(i), (a = Bp), t);
      } catch (n) {
        if (await s(e, n, a))
          return (
            o ? await i.unshift(e) : await i.push(e), l(), t(`Error sending. Event queued.`, n), {}
          );
        throw n;
      }
    }
    return (
      n.flushAtStartup && l(),
      { send: u, flush: (e) => (e === void 0 && ((a = Bp), c(100)), r.flush(e)) }
    );
  };
}
var Up = new Set();
function Wp() {
  (Up.clear(), L && z.log(`Cleared AI provider skip registrations`));
}
function Gp(e) {
  if (!e) return {};
  let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
}
function Kp(e) {
  return e.split(/[?#]/, 1)[0];
}
function qp(e) {
  let { protocol: t, host: n, path: r } = e,
    i =
      n
        ?.replace(/^.*@/, `[filtered]:[filtered]@`)
        .replace(/(:80)$/, ``)
        .replace(/(:443)$/, ``) || ``;
  return `${t ? `${t}://` : ``}${i}${r}`;
}
function Jp(e, ...t) {
  let n = new String(String.raw(e, ...t));
  return (
    (n.__sentry_template_string__ = e.join(`\0`).replace(/%/g, `%%`).replace(/\0/g, `%s`)),
    (n.__sentry_template_values__ = t),
    n
  );
}
var Yp = Jp;
function Xp(e) {
  `aggregates` in e
    ? e.attrs?.ip_address === void 0 && (e.attrs = { ...e.attrs, ip_address: `{{auto}}` })
    : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`);
}
function Zp(e, t, n = [t], r = `npm`) {
  let i = e._metadata || {};
  ((i.sdk ||= {
    name: `sentry.javascript.${t}`,
    packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: fs })),
    version: fs,
  }),
    (e._metadata = i));
}
function Qp(e = {}) {
  let t = e.client || U();
  if (!mf() || !t) return {};
  let n = dl(ps());
  if (n.getTraceData) return n.getTraceData(e);
  let r = e.scope || V(),
    i = e.span || bu(),
    a = i ? ou(i) : $p(r),
    o = Fl(i ? G(i) : Nu(t, r));
  if (!Xl.test(a)) return (z.warn(`Invalid sentry-trace data. Cannot generate trace data`), {});
  let s = { "sentry-trace": a, baggage: o };
  if (e.propagateTraceparent) {
    let e = i ? su(i) : em(r);
    e && (s.traceparent = e);
  }
  return s;
}
function $p(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return $l(t, r, n);
}
function em(e) {
  let { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext();
  return eu(t, r, n);
}
function tm(e, t, n) {
  let r,
    i,
    a,
    o = n?.maxWait ? Math.max(n.maxWait, t) : 0,
    s = n?.setTimeoutImpl || setTimeout;
  function c() {
    return (l(), (r = e()), r);
  }
  function l() {
    (i !== void 0 && clearTimeout(i), a !== void 0 && clearTimeout(a), (i = a = void 0));
  }
  function u() {
    return i !== void 0 || a !== void 0 ? c() : r;
  }
  function d() {
    return (i && clearTimeout(i), (i = s(c, t)), o && a === void 0 && (a = s(c, o)), r);
  }
  return ((d.cancel = l), (d.flush = u), d);
}
var nm = 100;
function rm(e, t) {
  let n = U(),
    r = H();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = nm } = n.getOptions();
  if (a <= 0) return;
  let o = { timestamp: Bc(), ...e },
    s = i ? ys(() => i(o, t)) : o;
  s !== null && (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var im,
  am = `FunctionToString`,
  om = new WeakMap(),
  sm = q(() => ({
    name: am,
    setupOnce() {
      im = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          let t = _c(this),
            n = om.has(U()) && t !== void 0 ? t : this;
          return im.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      om.set(e, !0);
    },
  })),
  cm = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    `can't redefine non-configurable property "solana"`,
    `vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)`,
    `Can't find variable: _AutofillCallbackHandler`,
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/,
  ],
  lm = `EventFilters`,
  um = q((e = {}) => {
    let t;
    return {
      name: lm,
      setup(n) {
        t = dm(e, n.getOptions());
      },
      processEvent(n, r, i) {
        return ((t ||= dm(e, i.getOptions())), fm(n, t) ? null : n);
      },
    };
  });
function dm(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : cm),
    ],
    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
  };
}
function fm(e, t) {
  if (!e.type) {
    if (pm(e, t.ignoreErrors))
      return (
        L &&
          z.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${jc(e)}`),
        !0
      );
    if (ym(e))
      return (
        L &&
          z.warn(
            `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${jc(e)}`,
          ),
        !0
      );
    if (hm(e, t.denyUrls))
      return (
        L &&
          z.warn(
            `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${jc(e)}.\nUrl: ${vm(e)}`,
          ),
        !0
      );
    if (!gm(e, t.allowUrls))
      return (
        L &&
          z.warn(
            `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${jc(e)}.\nUrl: ${vm(e)}`,
          ),
        !0
      );
  } else if (e.type === `transaction` && mm(e, t.ignoreTransactions))
    return (
      L &&
        z.warn(
          `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${jc(e)}`,
        ),
      !0
    );
  return !1;
}
function pm(e, t) {
  return t?.length ? ip(e).some((e) => Ec(e, t)) : !1;
}
function mm(e, t) {
  if (!t?.length) return !1;
  let n = e.transaction;
  return n ? Ec(n, t) : !1;
}
function hm(e, t) {
  if (!t?.length) return !1;
  let n = vm(e);
  return n ? Ec(n, t) : !1;
}
function gm(e, t) {
  if (!t?.length) return !0;
  let n = vm(e);
  return !n || Ec(n, t);
}
function _m(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`)
      return n.filename || null;
  }
  return null;
}
function vm(e) {
  try {
    let t = [...(e.exception?.values ?? [])]
      .reverse()
      .find((e) => e.mechanism?.parent_id === void 0 && e.stacktrace?.frames?.length)
      ?.stacktrace?.frames;
    return t ? _m(t) : null;
  } catch {
    return (L && z.error(`Cannot extract url for event ${jc(e)}`), null);
  }
}
function ym(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some((e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value)
    : !1;
}
function bm(e, t, n, r, i, a) {
  if (!i.exception?.values || !a || !cc(a.originalException, Error)) return;
  let o =
    i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
  o && (i.exception.values = xm(e, t, r, a.originalException, n, i.exception.values, o, 0));
}
function xm(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (cc(r[i], Error)) {
    Sm(o, s);
    let a = e(t, r[i]),
      l = c.length;
    (Cm(a, i, l, s), (c = xm(e, t, n, r[i], i, [a, ...c], a, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((r, a) => {
        if (cc(r, Error)) {
          Sm(o, s);
          let l = e(t, r),
            u = c.length;
          (Cm(l, `errors[${a}]`, u, s), (c = xm(e, t, n, r, i, [l, ...c], l, u)));
        }
      }),
    c
  );
}
function Sm(e, t) {
  e.mechanism = {
    handled: !0,
    type: `auto.core.linked_errors`,
    ...e.mechanism,
    ...(e.type === `AggregateError` && { is_exception_group: !0 }),
    exception_id: t,
  };
}
function Cm(e, t, n, r) {
  e.mechanism = {
    handled: !0,
    ...e.mechanism,
    type: `chained`,
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
var wm = `cause`,
  Tm = 5,
  Em = `LinkedErrors`,
  Dm = q((e = {}) => {
    let t = e.limit || Tm,
      n = e.key || wm;
    return {
      name: Em,
      preprocessEvent(e, r, i) {
        bm(jp, i.getOptions().stackParser, n, t, e, r);
      },
    };
  });
function Om(e) {
  let t = `console`;
  (Bs(t, e), Vs(t, km));
}
function km() {
  `console` in R &&
    gs.forEach(function (e) {
      e in R.console &&
        mc(R.console, e, function (t) {
          return (
            (vs[e] = t),
            function (...t) {
              (Hs(`console`, { args: t, level: e }), vs[e]?.apply(R.console, t));
            }
          );
        });
    });
}
function Am(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
      ? e
      : `log`;
}
function jm(e, t) {
  let n = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    r === `.` ? e.splice(t, 1) : r === `..` ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
  }
  if (t) for (; n--;) e.unshift(`..`);
  return e;
}
var Mm = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function Nm(e) {
  let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
    n = Mm.exec(t);
  return n ? n.slice(1) : [];
}
function Pm(...e) {
  let t = ``,
    n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    let i = r >= 0 ? e[r] : `/`;
    i && ((t = `${i}/${t}`), (n = i.charAt(0) === `/`));
  }
  return (
    (t = jm(
      t.split(`/`).filter((e) => !!e),
      !n,
    ).join(`/`)),
    (n ? `/` : ``) + t || `.`
  );
}
function Fm(e) {
  let t = 0;
  for (; t < e.length && e[t] === ``; t++);
  let n = e.length - 1;
  for (; n >= 0 && e[n] === ``; n--);
  return t > n ? [] : e.slice(t, n - t + 1);
}
function Im(e, t) {
  ((e = Pm(e).slice(1)), (t = Pm(t).slice(1)));
  let n = Fm(e.split(`/`)),
    r = Fm(t.split(`/`)),
    i = Math.min(n.length, r.length),
    a = i;
  for (let e = 0; e < i; e++)
    if (n[e] !== r[e]) {
      a = e;
      break;
    }
  let o = [];
  for (let e = a; e < n.length; e++) o.push(`..`);
  return ((o = o.concat(r.slice(a))), o.join(`/`));
}
function Lm(e) {
  let t = Nm(e),
    n = t[0] || ``,
    r = t[1];
  return !n && !r ? `.` : ((r &&= r.slice(0, r.length - 1)), n + r);
}
function Rm(e, t) {
  let n = Nm(e)[2] || ``;
  return (t && n.slice(t.length * -1) === t && (n = n.slice(0, n.length - t.length)), n);
}
var zm = `RewriteFrames`,
  Bm = q((e = {}) => {
    let t = e.root,
      n = e.prefix || `app:///`,
      r = `window` in R && !!R.window,
      i = e.iteratee || Vm({ isBrowser: r, root: t, prefix: n });
    function a(e) {
      try {
        return {
          ...e,
          exception: {
            ...e.exception,
            values: e.exception.values.map((e) => ({
              ...e,
              ...(e.stacktrace && { stacktrace: o(e.stacktrace) }),
            })),
          },
        };
      } catch {
        return e;
      }
    }
    function o(e) {
      return { ...e, frames: e?.frames?.map((e) => i(e)) };
    }
    return {
      name: zm,
      processEvent(e) {
        let t = e;
        return (e.exception && Array.isArray(e.exception.values) && (t = a(t)), t);
      },
    };
  });
function Vm({ isBrowser: e, root: t, prefix: n }) {
  return (r) => {
    if (!r.filename) return r;
    let i =
        /^[a-zA-Z]:\\/.test(r.filename) || (r.filename.includes(`\\`) && !r.filename.includes(`/`)),
      a = /^\//.test(r.filename);
    if (e) {
      if (t) {
        let e = r.filename;
        e.indexOf(t) === 0 && (r.filename = e.replace(t, n));
      }
    } else if (i || a) {
      let e = i ? r.filename.replace(/^[a-zA-Z]:/, ``).replace(/\\/g, `/`) : r.filename;
      r.filename = `${n}${t ? Im(t, e) : Rm(e)}`;
    }
    return r;
  };
}
var Hm = `Console`,
  Um = q((e = {}) => {
    let t = new Set(e.levels || gs);
    return {
      name: Hm,
      setup(e) {
        Om(({ args: n, level: r }) => {
          U() !== e || !t.has(r) || Wm(r, n);
        });
      },
    };
  });
function Wm(e, t) {
  let n = {
    category: `console`,
    data: { arguments: t, logger: `console` },
    level: Am(e),
    message: Gm(t),
  };
  if (e === `assert`)
    if (t[0] === !1) {
      let e = t.slice(1);
      ((n.message = e.length > 0 ? `Assertion failed: ${Gm(e)}` : `Assertion failed`),
        (n.data.arguments = e));
    } else return;
  rm(n, { input: t, level: e });
}
function Gm(e) {
  return `util` in R && typeof R.util.format == `function` ? R.util.format(...e) : wc(e, ` `);
}
function Km(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
function qm(e, t = !1) {
  return (
    !(
      t ||
      (e &&
        !e.startsWith(`/`) &&
        !e.match(/^[A-Z]:/) &&
        !e.startsWith(`.`) &&
        !e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
    ) &&
    e !== void 0 &&
    !e.includes(`node_modules/`)
  );
}
function Jm(e) {
  let t = /^\s*[-]{4,}$/,
    n = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/,
    r = /at (?:async )?(.+?) \(data:(.*?),/;
  return (i) => {
    let a = i.match(r);
    if (a) return { filename: `<data:${a[2]}>`, function: a[1] };
    let o = i.match(n);
    if (o) {
      let t, n, r, i, a;
      if (o[1]) {
        r = o[1];
        let e = r.lastIndexOf(`.`);
        if ((r[e - 1] === `.` && e--, e > 0)) {
          ((t = r.slice(0, e)), (n = r.slice(e + 1)));
          let i = t.indexOf(`.Module`);
          i > 0 && ((r = r.slice(i + 1)), (t = t.slice(0, i)));
        }
        i = void 0;
      }
      (n && ((i = t), (a = n)),
        n === `<anonymous>` && ((a = void 0), (r = void 0)),
        r === void 0 && ((a ||= `?`), (r = i ? `${i}.${a}` : a)));
      let s = o[2]?.startsWith(`file://`) ? o[2].slice(7) : o[2],
        c = o[5] === `native`;
      return (
        s?.match(/\/[A-Z]:/) && (s = s.slice(1)),
        !s && o[5] && !c && (s = o[5]),
        {
          filename: s ? decodeURI(s) : void 0,
          module: e ? e(s) : void 0,
          function: r,
          lineno: Xm(o[3]),
          colno: Xm(o[4]),
          in_app: qm(s || ``, c),
        }
      );
    }
    if (i.match(t)) return { filename: i };
  };
}
function Ym(e) {
  return [90, Jm(e)];
}
function Xm(e) {
  return parseInt(e || ``, 10) || void 0;
}
function Zm(e, t, n, r) {
  let i = e(),
    a = !1,
    o = !0;
  return (
    setInterval(() => {
      let e = i.getTimeMs();
      (a === !1 && e > t + n && ((a = !0), o && r()), e < t + n && (a = !1));
    }, 20),
    {
      poll: () => {
        i.reset();
      },
      enabled: (e) => {
        o = e;
      },
    }
  );
}
function Qm(e, t, n) {
  let r = t ? t.replace(/^file:\/\//, ``) : void 0,
    i = e.location.columnNumber ? e.location.columnNumber + 1 : void 0,
    a = e.location.lineNumber ? e.location.lineNumber + 1 : void 0;
  return {
    filename: r,
    module: n(r),
    function: e.functionName || `?`,
    colno: i,
    lineno: a,
    in_app: r ? qm(r) : void 0,
  };
}
var $m = class {
  constructor(e) {
    ((this._maxSize = e), (this._cache = new Map()));
  }
  get size() {
    return this._cache.size;
  }
  get(e) {
    let t = this._cache.get(e);
    if (t !== void 0) return (this._cache.delete(e), this._cache.set(e, t), t);
  }
  set(e, t) {
    if (this._cache.size >= this._maxSize) {
      let e = this._cache.keys().next().value;
      this._cache.delete(e);
    }
    this._cache.set(e, t);
  }
  remove(e) {
    let t = this._cache.get(e);
    return (t && this._cache.delete(e), t);
  }
  clear() {
    this._cache.clear();
  }
  keys() {
    return Array.from(this._cache.keys());
  }
  values() {
    let e = [];
    return (this._cache.forEach((t) => e.push(t)), e);
  }
};
function eh(e, ...t) {
  let [n, r, i, a] = t;
  if (Array.isArray(r)) {
    let t = { ...i };
    ((t[`sentry.message.template`] = n),
      r.forEach((e, n) => {
        t[`sentry.message.parameter.${n}`] = e;
      }),
      Lf({ level: e, message: (0, u.format)(n, ...r), attributes: t }, a?.scope));
  } else Lf({ level: e, message: n, attributes: r }, i?.scope ?? a?.scope);
}
function th(...e) {
  eh(`info`, ...e);
}
function nh(...e) {
  eh(`warn`, ...e);
}
function rh(...e) {
  eh(`error`, ...e);
}
ds();
var ih = {};
function ah(e, t, n) {
  return n ? sh(e, t, n) : oh(e, t);
}
function oh(e, t) {
  return Object.assign(
    (n) => {
      let r = ih[e];
      if (r) return (n && r.setConfig(n), r);
      let i = t(n);
      return ((ih[e] = i), Ma({ instrumentations: [i] }), i);
    },
    { id: e },
  );
}
function sh(e, t, n) {
  return Object.assign(
    (r) => {
      let i = n(r),
        a = ih[e];
      if (a) return (a.setConfig(i), a);
      let o = new t(i);
      return ((ih[e] = o), Ma({ instrumentations: [o] }), o);
    },
    { id: e },
  );
}
P();
var ch = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
function lh() {
  return `unknown_service:${process.argv0}`;
}
var uh = (e) => typeof e == `object` && !!e && typeof e.then == `function`,
  Y = e.o(O()),
  X = dr(),
  dh = class e {
    _rawAttributes;
    _asyncAttributesPending = !1;
    _schemaUrl;
    _memoizedAttributes;
    static FromAttributeList(t, n) {
      let r = new e({}, n);
      return (
        (r._rawAttributes = mh(t)),
        (r._asyncAttributesPending = t.filter(([e, t]) => uh(t)).length > 0),
        r
      );
    }
    constructor(e, t) {
      let n = e.attributes ?? {};
      ((this._rawAttributes = Object.entries(n).map(
        ([e, t]) => (uh(t) && (this._asyncAttributesPending = !0), [e, t]),
      )),
        (this._rawAttributes = mh(this._rawAttributes)),
        (this._schemaUrl = hh(t?.schemaUrl)));
    }
    get asyncAttributesPending() {
      return this._asyncAttributesPending;
    }
    async waitForAsyncAttributes() {
      if (this.asyncAttributesPending) {
        for (let e = 0; e < this._rawAttributes.length; e++) {
          let [t, n] = this._rawAttributes[e];
          this._rawAttributes[e] = [t, uh(n) ? await n : n];
        }
        this._asyncAttributesPending = !1;
      }
    }
    get attributes() {
      if (
        (this.asyncAttributesPending &&
          Y.diag.error(`Accessing resource attributes before async attributes settled`),
        this._memoizedAttributes)
      )
        return this._memoizedAttributes;
      let e = {};
      for (let [t, n] of this._rawAttributes) {
        if (uh(n)) {
          Y.diag.debug(`Unsettled resource attribute ${t} skipped`);
          continue;
        }
        n != null && (e[t] ??= n);
      }
      return (this._asyncAttributesPending || (this._memoizedAttributes = e), e);
    }
    getRawAttributes() {
      return this._rawAttributes;
    }
    get schemaUrl() {
      return this._schemaUrl;
    }
    merge(t) {
      if (t == null) return this;
      let n = gh(this, t),
        r = n ? { schemaUrl: n } : void 0;
      return e.FromAttributeList([...t.getRawAttributes(), ...this.getRawAttributes()], r);
    }
  };
function fh(e, t) {
  return dh.FromAttributeList(Object.entries(e), t);
}
function ph() {
  return fh({
    [X.ATTR_SERVICE_NAME]: lh(),
    [X.ATTR_TELEMETRY_SDK_LANGUAGE]: hr[X.ATTR_TELEMETRY_SDK_LANGUAGE],
    [X.ATTR_TELEMETRY_SDK_NAME]: hr[X.ATTR_TELEMETRY_SDK_NAME],
    [X.ATTR_TELEMETRY_SDK_VERSION]: hr[X.ATTR_TELEMETRY_SDK_VERSION],
  });
}
function mh(e) {
  return e.map(([e, t]) =>
    uh(t)
      ? [
          e,
          t.catch((t) => {
            Y.diag.debug(`promise rejection for resource attribute: %s - %s`, e, t);
          }),
        ]
      : [e, t],
  );
}
function hh(e) {
  if (typeof e == `string` || e === void 0) return e;
  Y.diag.warn(`Schema URL must be string or undefined, got %s. Schema URL will be ignored.`, e);
}
function gh(e, t) {
  let n = e?.schemaUrl,
    r = t?.schemaUrl,
    i = n === void 0 || n === ``,
    a = r === void 0 || r === ``;
  if (i) return r;
  if (a || n === r) return n;
  Y.diag.warn(
    `Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.`,
    n,
    r,
  );
}
var _h = `exception`;
P();
var vh = class {
    _spanContext;
    kind;
    parentSpanContext;
    attributes = {};
    links = [];
    events = [];
    startTime;
    resource;
    instrumentationScope;
    _droppedAttributesCount = 0;
    _droppedEventsCount = 0;
    _droppedLinksCount = 0;
    name;
    status = { code: Y.SpanStatusCode.UNSET };
    endTime = [0, 0];
    _ended = !1;
    _duration = [-1, -1];
    _spanProcessor;
    _spanLimits;
    _attributeValueLengthLimit;
    _performanceStartTime;
    _performanceOffset;
    _startTimeProvided;
    constructor(e) {
      let t = Date.now();
      ((this._spanContext = e.spanContext),
        (this._performanceStartTime = M.now()),
        (this._performanceOffset = t - (this._performanceStartTime + yr())),
        (this._startTimeProvided = e.startTime != null),
        (this._spanLimits = e.spanLimits),
        (this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0),
        (this._spanProcessor = e.spanProcessor),
        (this.name = e.name),
        (this.parentSpanContext = e.parentSpanContext),
        (this.kind = e.kind),
        (this.links = e.links || []),
        (this.startTime = this._getTime(e.startTime ?? t)),
        (this.resource = e.resource),
        (this.instrumentationScope = e.scope),
        e.attributes != null && this.setAttributes(e.attributes),
        this._spanProcessor.onStart(this, e.context));
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(e, t) {
      if (t == null || this._isSpanEnded()) return this;
      if (e.length === 0) return (Y.diag.warn(`Invalid attribute key: ${e}`), this);
      if (!Nn(t)) return (Y.diag.warn(`Invalid attribute value set for key: ${e}`), this);
      let { attributeCountLimit: n } = this._spanLimits;
      return n !== void 0 &&
        Object.keys(this.attributes).length >= n &&
        !Object.prototype.hasOwnProperty.call(this.attributes, e)
        ? (this._droppedAttributesCount++, this)
        : ((this.attributes[e] = this._truncateToSize(t)), this);
    }
    setAttributes(e) {
      for (let [t, n] of Object.entries(e)) this.setAttribute(t, n);
      return this;
    }
    addEvent(e, t, n) {
      if (this._isSpanEnded()) return this;
      let { eventCountLimit: r } = this._spanLimits;
      if (r === 0) return (Y.diag.warn(`No events allowed.`), this._droppedEventsCount++, this);
      (r !== void 0 &&
        this.events.length >= r &&
        (this._droppedEventsCount === 0 && Y.diag.debug(`Dropping extra events.`),
        this.events.shift(),
        this._droppedEventsCount++),
        Or(t) && (Or(n) || (n = t), (t = void 0)));
      let i = jn(t);
      return (
        this.events.push({
          name: e,
          attributes: i,
          time: this._getTime(n),
          droppedAttributesCount: 0,
        }),
        this
      );
    }
    addLink(e) {
      return (this.links.push(e), this);
    }
    addLinks(e) {
      return (this.links.push(...e), this);
    }
    setStatus(e) {
      return this._isSpanEnded()
        ? this
        : ((this.status = { ...e }),
          this.status.message != null &&
            typeof e.message != `string` &&
            (Y.diag.warn(
              `Dropping invalid status.message of type '${typeof e.message}', expected 'string'`,
            ),
            delete this.status.message),
          this);
    }
    updateName(e) {
      return (this._isSpanEnded() || (this.name = e), this);
    }
    end(e) {
      if (this._isSpanEnded()) {
        Y.diag.error(
          `${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`,
        );
        return;
      }
      ((this._ended = !0),
        (this.endTime = this._getTime(e)),
        (this._duration = Sr(this.startTime, this.endTime)),
        this._duration[0] < 0 &&
          (Y.diag.warn(
            `Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.`,
            this.startTime,
            this.endTime,
          ),
          (this.endTime = this.startTime.slice()),
          (this._duration = [0, 0])),
        this._droppedEventsCount > 0 &&
          Y.diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`),
        this._spanProcessor.onEnd(this));
    }
    _getTime(e) {
      if (typeof e == `number` && e <= M.now()) return br(e + this._performanceOffset);
      if (typeof e == `number`) return N(e);
      if (e instanceof Date) return N(e.getTime());
      if (Dr(e)) return e;
      if (this._startTimeProvided) return N(Date.now());
      let t = M.now() - this._performanceStartTime;
      return kr(this.startTime, N(t));
    }
    isRecording() {
      return this._ended === !1;
    }
    recordException(e, t) {
      let n = {};
      (typeof e == `string`
        ? (n[X.ATTR_EXCEPTION_MESSAGE] = e)
        : e &&
          (e.code
            ? (n[X.ATTR_EXCEPTION_TYPE] = e.code.toString())
            : e.name && (n[X.ATTR_EXCEPTION_TYPE] = e.name),
          e.message && (n[X.ATTR_EXCEPTION_MESSAGE] = e.message),
          e.stack && (n[X.ATTR_EXCEPTION_STACKTRACE] = e.stack)),
        n[X.ATTR_EXCEPTION_TYPE] || n[X.ATTR_EXCEPTION_MESSAGE]
          ? this.addEvent(_h, n, t)
          : Y.diag.warn(`Failed to record an exception ${e}`));
    }
    get duration() {
      return this._duration;
    }
    get ended() {
      return this._ended;
    }
    get droppedAttributesCount() {
      return this._droppedAttributesCount;
    }
    get droppedEventsCount() {
      return this._droppedEventsCount;
    }
    get droppedLinksCount() {
      return this._droppedLinksCount;
    }
    _isSpanEnded() {
      if (this._ended) {
        let e = Error(
          `Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
        );
        Y.diag.warn(
          `Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`,
          e,
        );
      }
      return this._ended;
    }
    _truncateToLimitUtil(e, t) {
      return e.length <= t ? e : e.substring(0, t);
    }
    _truncateToSize(e) {
      let t = this._attributeValueLengthLimit;
      return t <= 0
        ? (Y.diag.warn(`Attribute value limit must be positive, got ${t}`), e)
        : typeof e == `string`
          ? this._truncateToLimitUtil(e, t)
          : Array.isArray(e)
            ? e.map((e) => (typeof e == `string` ? this._truncateToLimitUtil(e, t) : e))
            : e;
    }
  },
  Z;
(function (e) {
  ((e[(e.NOT_RECORD = 0)] = `NOT_RECORD`),
    (e[(e.RECORD = 1)] = `RECORD`),
    (e[(e.RECORD_AND_SAMPLED = 2)] = `RECORD_AND_SAMPLED`));
})((Z ||= {}));
var yh = class {
    shouldSample() {
      return { decision: Z.NOT_RECORD };
    }
    toString() {
      return `AlwaysOffSampler`;
    }
  },
  bh = class {
    shouldSample() {
      return { decision: Z.RECORD_AND_SAMPLED };
    }
    toString() {
      return `AlwaysOnSampler`;
    }
  };
P();
var xh = class {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(e) {
      ((this._root = e.root),
        (this._root ||=
          (Wn(Error(`ParentBasedSampler must have a root sampler configured`)), new bh())),
        (this._remoteParentSampled = e.remoteParentSampled ?? new bh()),
        (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new yh()),
        (this._localParentSampled = e.localParentSampled ?? new bh()),
        (this._localParentNotSampled = e.localParentNotSampled ?? new yh()));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = Y.trace.getSpanContext(e);
      return !o || !(0, Y.isSpanContextValid)(o)
        ? this._root.shouldSample(e, t, n, r, i, a)
        : o.isRemote
          ? o.traceFlags & Y.TraceFlags.SAMPLED
            ? this._remoteParentSampled.shouldSample(e, t, n, r, i, a)
            : this._remoteParentNotSampled.shouldSample(e, t, n, r, i, a)
          : o.traceFlags & Y.TraceFlags.SAMPLED
            ? this._localParentSampled.shouldSample(e, t, n, r, i, a)
            : this._localParentNotSampled.shouldSample(e, t, n, r, i, a);
    }
    toString() {
      return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
  },
  Sh = class {
    _ratio;
    _upperBound;
    constructor(e = 0) {
      ((this._ratio = e),
        (this._ratio = this._normalize(e)),
        (this._upperBound = Math.floor(this._ratio * 4294967295)));
    }
    shouldSample(e, t) {
      return {
        decision:
          (0, Y.isValidTraceId)(t) && this._accumulate(t) < this._upperBound
            ? Z.RECORD_AND_SAMPLED
            : Z.NOT_RECORD,
      };
    }
    toString() {
      return `TraceIdRatioBased{${this._ratio}}`;
    }
    _normalize(e) {
      return typeof e != `number` || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
    }
    _accumulate(e) {
      let t = 0;
      for (let n = 0; n < e.length / 8; n++) {
        let r = n * 8,
          i = parseInt(e.slice(r, r + 8), 16);
        t = (t ^ i) >>> 0;
      }
      return t;
    }
  };
P();
var Ch;
(function (e) {
  ((e.AlwaysOff = `always_off`),
    (e.AlwaysOn = `always_on`),
    (e.ParentBasedAlwaysOff = `parentbased_always_off`),
    (e.ParentBasedAlwaysOn = `parentbased_always_on`),
    (e.ParentBasedTraceIdRatio = `parentbased_traceidratio`),
    (e.TraceIdRatio = `traceidratio`));
})((Ch ||= {}));
var wh = 1;
function Th() {
  return {
    sampler: Eh(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: j(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: j(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
    },
    spanLimits: {
      attributeValueLengthLimit: j(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ?? 1 / 0,
      attributeCountLimit: j(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ?? 128,
      linkCountLimit: j(`OTEL_SPAN_LINK_COUNT_LIMIT`) ?? 128,
      eventCountLimit: j(`OTEL_SPAN_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerEventCountLimit: j(`OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT`) ?? 128,
      attributePerLinkCountLimit: j(`OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT`) ?? 128,
    },
  };
}
function Eh() {
  let e = qn(`OTEL_TRACES_SAMPLER`) ?? Ch.ParentBasedAlwaysOn;
  switch (e) {
    case Ch.AlwaysOn:
      return new bh();
    case Ch.AlwaysOff:
      return new yh();
    case Ch.ParentBasedAlwaysOn:
      return new xh({ root: new bh() });
    case Ch.ParentBasedAlwaysOff:
      return new xh({ root: new yh() });
    case Ch.TraceIdRatio:
      return new Sh(Dh());
    case Ch.ParentBasedTraceIdRatio:
      return new xh({ root: new Sh(Dh()) });
    default:
      return (
        Y.diag.error(
          `OTEL_TRACES_SAMPLER value "${e}" invalid, defaulting to "${Ch.ParentBasedAlwaysOn}".`,
        ),
        new xh({ root: new bh() })
      );
  }
}
function Dh() {
  let e = j(`OTEL_TRACES_SAMPLER_ARG`);
  return e == null
    ? (Y.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${wh}.`), wh)
    : e < 0 || e > 1
      ? (Y.diag.error(
          `OTEL_TRACES_SAMPLER_ARG=${e} was given, but it is out of range ([0..1]), defaulting to ${wh}.`,
        ),
        wh)
      : e;
}
P();
function Oh(e) {
  let t = { sampler: Eh() },
    n = Th(),
    r = Object.assign({}, n, t, e);
  return (
    (r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {})),
    (r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {})),
    r
  );
}
function kh(e) {
  let t = Object.assign({}, e.spanLimits);
  return (
    (t.attributeCountLimit =
      e.spanLimits?.attributeCountLimit ??
      e.generalLimits?.attributeCountLimit ??
      j(`OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT`) ??
      j(`OTEL_ATTRIBUTE_COUNT_LIMIT`) ??
      128),
    (t.attributeValueLengthLimit =
      e.spanLimits?.attributeValueLengthLimit ??
      e.generalLimits?.attributeValueLengthLimit ??
      j(`OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      j(`OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT`) ??
      1 / 0),
    Object.assign({}, e, { spanLimits: t })
  );
}
P();
var Ah = class {
    _exporter;
    _maxExportBatchSize;
    _maxQueueSize;
    _scheduledDelayMillis;
    _exportTimeoutMillis;
    _isExporting = !1;
    _finishedSpans = [];
    _timer;
    _shutdownOnce;
    _droppedSpansCount = 0;
    constructor(e, t) {
      ((this._exporter = e),
        (this._maxExportBatchSize =
          typeof t?.maxExportBatchSize == `number`
            ? t.maxExportBatchSize
            : (j(`OTEL_BSP_MAX_EXPORT_BATCH_SIZE`) ?? 512)),
        (this._maxQueueSize =
          typeof t?.maxQueueSize == `number`
            ? t.maxQueueSize
            : (j(`OTEL_BSP_MAX_QUEUE_SIZE`) ?? 2048)),
        (this._scheduledDelayMillis =
          typeof t?.scheduledDelayMillis == `number`
            ? t.scheduledDelayMillis
            : (j(`OTEL_BSP_SCHEDULE_DELAY`) ?? 5e3)),
        (this._exportTimeoutMillis =
          typeof t?.exportTimeoutMillis == `number`
            ? t.exportTimeoutMillis
            : (j(`OTEL_BSP_EXPORT_TIMEOUT`) ?? 3e4)),
        (this._shutdownOnce = new Xi(this._shutdown, this)),
        this._maxExportBatchSize > this._maxQueueSize &&
          (Y.diag.warn(
            `BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize`,
          ),
          (this._maxExportBatchSize = this._maxQueueSize)));
    }
    forceFlush() {
      return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
    }
    onStart(e, t) {}
    onEnd(e) {
      this._shutdownOnce.isCalled ||
        ((e.spanContext().traceFlags & Y.TraceFlags.SAMPLED) !== 0 && this._addToBuffer(e));
    }
    shutdown() {
      return this._shutdownOnce.call();
    }
    _shutdown() {
      return Promise.resolve()
        .then(() => this.onShutdown())
        .then(() => this._flushAll())
        .then(() => this._exporter.shutdown());
    }
    _addToBuffer(e) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        (this._droppedSpansCount === 0 && Y.diag.debug(`maxQueueSize reached, dropping spans`),
          this._droppedSpansCount++);
        return;
      }
      (this._droppedSpansCount > 0 &&
        (Y.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`),
        (this._droppedSpansCount = 0)),
        this._finishedSpans.push(e),
        this._maybeStartTimer());
    }
    _flushAll() {
      return new Promise((e, t) => {
        let n = [],
          r = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
        for (let e = 0, t = r; e < t; e++) n.push(this._flushOneBatch());
        Promise.all(n)
          .then(() => {
            e();
          })
          .catch(t);
      });
    }
    _flushOneBatch() {
      return (
        this._clearTimer(),
        this._finishedSpans.length === 0
          ? Promise.resolve()
          : new Promise((e, t) => {
              let n = setTimeout(() => {
                t(Error(`Timeout`));
              }, this._exportTimeoutMillis);
              Y.context.with(k(Y.context.active()), () => {
                let r;
                this._finishedSpans.length <= this._maxExportBatchSize
                  ? ((r = this._finishedSpans), (this._finishedSpans = []))
                  : (r = this._finishedSpans.splice(0, this._maxExportBatchSize));
                let i = () =>
                    this._exporter.export(r, (r) => {
                      (clearTimeout(n),
                        r.code === Ir.SUCCESS
                          ? e()
                          : t(r.error ?? Error(`BatchSpanProcessor: span export failed`)));
                    }),
                  a = null;
                for (let e = 0, t = r.length; e < t; e++) {
                  let t = r[e];
                  t.resource.asyncAttributesPending &&
                    t.resource.waitForAsyncAttributes &&
                    ((a ??= []), a.push(t.resource.waitForAsyncAttributes()));
                }
                a === null
                  ? i()
                  : Promise.all(a).then(i, (e) => {
                      (Wn(e), t(e));
                    });
              });
            })
      );
    }
    _maybeStartTimer() {
      if (this._isExporting) return;
      let e = () => {
        ((this._isExporting = !0),
          this._flushOneBatch()
            .finally(() => {
              ((this._isExporting = !1),
                this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer()));
            })
            .catch((e) => {
              ((this._isExporting = !1), Wn(e));
            }));
      };
      if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
      this._timer === void 0 &&
        ((this._timer = setTimeout(() => e(), this._scheduledDelayMillis)),
        typeof this._timer != `number` && this._timer.unref());
    }
    _clearTimer() {
      this._timer !== void 0 && (clearTimeout(this._timer), (this._timer = void 0));
    }
  },
  jh = class extends Ah {
    onShutdown() {}
  },
  Mh = 8,
  Nh = 16,
  Ph = class {
    generateTraceId = Ih(Nh);
    generateSpanId = Ih(Mh);
  },
  Fh = Buffer.allocUnsafe(Nh);
function Ih(e) {
  return function () {
    for (let t = 0; t < e / 4; t++) Fh.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, t * 4);
    for (let t = 0; t < e && !(Fh[t] > 0); t++) t === e - 1 && (Fh[e - 1] = 1);
    return Fh.toString(`hex`, 0, e);
  };
}
P();
var Lh = class {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  constructor(e, t, n, r) {
    let i = Oh(t);
    ((this._sampler = i.sampler),
      (this._generalLimits = i.generalLimits),
      (this._spanLimits = i.spanLimits),
      (this._idGenerator = t.idGenerator || new Ph()),
      (this._resource = n),
      (this._spanProcessor = r),
      (this.instrumentationScope = e));
  }
  startSpan(e, t = {}, n = Y.context.active()) {
    t.root && (n = Y.trace.deleteSpan(n));
    let r = Y.trace.getSpan(n);
    if (A(n))
      return (
        Y.diag.debug(`Instrumentation suppressed, returning Noop Span`),
        Y.trace.wrapSpanContext(Y.INVALID_SPAN_CONTEXT)
      );
    let i = r?.spanContext(),
      a = this._idGenerator.generateSpanId(),
      o,
      s,
      c;
    !i || !Y.trace.isSpanContextValid(i)
      ? (s = this._idGenerator.generateTraceId())
      : ((s = i.traceId), (c = i.traceState), (o = i));
    let l = t.kind ?? Y.SpanKind.INTERNAL,
      u = (t.links ?? []).map((e) => ({ context: e.context, attributes: jn(e.attributes) })),
      d = jn(t.attributes),
      f = this._sampler.shouldSample(n, s, e, l, d, u);
    c = f.traceState ?? c;
    let p =
        f.decision === Y.SamplingDecision.RECORD_AND_SAMPLED
          ? Y.TraceFlags.SAMPLED
          : Y.TraceFlags.NONE,
      m = { traceId: s, spanId: a, traceFlags: p, traceState: c };
    if (f.decision === Y.SamplingDecision.NOT_RECORD)
      return (
        Y.diag.debug(`Recording is off, propagating context in a non-recording span`),
        Y.trace.wrapSpanContext(m)
      );
    let h = jn(Object.assign(d, f.attributes));
    return new vh({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: n,
      spanContext: m,
      name: e,
      kind: l,
      links: u,
      parentSpanContext: o,
      attributes: h,
      startTime: t.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits,
    });
  }
  startActiveSpan(e, t, n, r) {
    let i, a, o;
    if (arguments.length < 2) return;
    arguments.length === 2
      ? (o = t)
      : arguments.length === 3
        ? ((i = t), (o = n))
        : ((i = t), (a = n), (o = r));
    let s = a ?? Y.context.active(),
      c = this.startSpan(e, i, s),
      l = Y.trace.setSpan(s, c);
    return Y.context.with(l, o, void 0, c);
  }
  getGeneralLimits() {
    return this._generalLimits;
  }
  getSpanLimits() {
    return this._spanLimits;
  }
};
P();
var Rh = class {
  _spanProcessors;
  constructor(e) {
    this._spanProcessors = e;
  }
  forceFlush() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.forceFlush());
    return new Promise((t) => {
      Promise.all(e)
        .then(() => {
          t();
        })
        .catch((e) => {
          (Wn(e || Error(`MultiSpanProcessor: forceFlush failed`)), t());
        });
    });
  }
  onStart(e, t) {
    for (let n of this._spanProcessors) n.onStart(e, t);
  }
  onEnd(e) {
    for (let t of this._spanProcessors) t.onEnd(e);
  }
  shutdown() {
    let e = [];
    for (let t of this._spanProcessors) e.push(t.shutdown());
    return new Promise((t, n) => {
      Promise.all(e).then(() => {
        t();
      }, n);
    });
  }
};
P();
var zh;
(function (e) {
  ((e[(e.resolved = 0)] = `resolved`),
    (e[(e.timeout = 1)] = `timeout`),
    (e[(e.error = 2)] = `error`),
    (e[(e.unresolved = 3)] = `unresolved`));
})((zh ||= {}));
var Bh = class {
  _config;
  _tracers = new Map();
  _resource;
  _activeSpanProcessor;
  constructor(e = {}) {
    let t = ji({}, Th(), kh(e));
    ((this._resource = t.resource ?? ph()),
      (this._config = Object.assign({}, t, { resource: this._resource })));
    let n = [];
    (e.spanProcessors?.length && n.push(...e.spanProcessors),
      (this._activeSpanProcessor = new Rh(n)));
  }
  getTracer(e, t, n) {
    let r = `${e}@${t || ``}:${n?.schemaUrl || ``}`;
    return (
      this._tracers.has(r) ||
        this._tracers.set(
          r,
          new Lh(
            { name: e, version: t, schemaUrl: n?.schemaUrl },
            this._config,
            this._resource,
            this._activeSpanProcessor,
          ),
        ),
      this._tracers.get(r)
    );
  }
  forceFlush() {
    let e = this._config.forceFlushTimeoutMillis,
      t = this._activeSpanProcessor._spanProcessors.map(
        (t) =>
          new Promise((n) => {
            let r,
              i = setTimeout(() => {
                (n(Error(`Span processor did not completed within timeout period of ${e} ms`)),
                  (r = zh.timeout));
              }, e);
            t.forceFlush()
              .then(() => {
                (clearTimeout(i), r !== zh.timeout && ((r = zh.resolved), n(r)));
              })
              .catch((e) => {
                (clearTimeout(i), (r = zh.error), n(e));
              });
          }),
      );
    return new Promise((e, n) => {
      Promise.all(t)
        .then((t) => {
          let r = t.filter((e) => e !== zh.resolved);
          r.length > 0 ? n(r) : e();
        })
        .catch((e) => n([e]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
};
P();
var Vh = `sentry.parentIsRemote`,
  Hh = `sentry.graphql.operation`;
function Uh(e) {
  if (`parentSpanId` in e) return e.parentSpanId;
  if (`parentSpanContext` in e) return e.parentSpanContext?.spanId;
}
function Wh(e) {
  let t = e;
  return !!t.attributes && typeof t.attributes == `object`;
}
function Gh(e) {
  return typeof e.kind == `number`;
}
function Kh(e) {
  return !!e.status;
}
function qh(e) {
  return !!e.name;
}
function Jh(e) {
  if (!Wh(e)) return {};
  let t = e.attributes[X.ATTR_URL_FULL] || e.attributes[X.SEMATTRS_HTTP_URL],
    n = {
      url: t,
      "http.method":
        e.attributes[X.ATTR_HTTP_REQUEST_METHOD] || e.attributes[X.SEMATTRS_HTTP_METHOD],
    };
  !n[`http.method`] && n.url && (n[`http.method`] = `GET`);
  try {
    if (typeof t == `string`) {
      let e = Gp(t);
      ((n.url = qp(e)),
        e.search && (n[`http.query`] = e.search),
        e.hash && (n[`http.fragment`] = e.hash));
    }
  } catch {}
  return n;
}
function Yh(e) {
  return Gh(e) ? e.kind : Y.SpanKind.INTERNAL;
}
var Xh = `sentry-trace`,
  Zh = `baggage`,
  Qh = `sentry.dsc`,
  $h = `sentry.sampled_not_recording`,
  eg = `sentry.url`,
  tg = `sentry.sample_rand`,
  ng = `sentry.sample_rate`,
  rg = (0, Y.createContextKey)(`sentry_scopes`),
  ig = (0, Y.createContextKey)(`sentry_fork_isolation_scope`),
  ag = (0, Y.createContextKey)(`sentry_fork_set_scope`),
  og = (0, Y.createContextKey)(`sentry_fork_set_isolation_scope`),
  sg = `_scopeContext`;
function cg(e) {
  return e.getValue(rg);
}
function lg(e, t) {
  return e.setValue(rg, t);
}
function ug(e, t) {
  hc(e, sg, t);
}
function dg(e) {
  return e[sg];
}
function fg(e) {
  let { traceFlags: t, traceState: n } = e,
    r = n ? n.get($h) === `1` : !1;
  if (t === Y.TraceFlags.SAMPLED) return !0;
  if (r) return !1;
  let i = n ? n.get(Qh) : void 0,
    a = i ? Pl(i) : void 0;
  if (a?.sampled === `true`) return !0;
  if (a?.sampled === `false`) return !1;
}
function pg(e, t, n) {
  let r = t[X.ATTR_HTTP_REQUEST_METHOD] || t[X.SEMATTRS_HTTP_METHOD];
  if (r) return gg({ attributes: t, name: e, kind: n }, r);
  let i = t[X.SEMATTRS_DB_SYSTEM],
    a = typeof t[`sentry.op`] == `string` && t[`sentry.op`].startsWith(`cache.`);
  if (i && !a) return hg({ attributes: t, name: e });
  let o = t[`sentry.source`] === `custom` ? `custom` : `route`;
  if (t[X.SEMATTRS_RPC_SERVICE]) return { ...yg(e, t, `route`), op: `rpc` };
  if (t[X.SEMATTRS_MESSAGING_SYSTEM]) return { ...yg(e, t, o), op: `message` };
  let s = t[X.SEMATTRS_FAAS_TRIGGER];
  return s
    ? { ...yg(e, t, o), op: s.toString() }
    : { op: void 0, description: e, source: `custom` };
}
function mg(e) {
  let t = Wh(e) ? e.attributes : {};
  return pg(qh(e) ? e.name : `<unknown>`, t, Yh(e));
}
function hg({ attributes: e, name: t }) {
  let n = e[xl];
  if (typeof n == `string`)
    return { op: `db`, description: n, source: e[`sentry.source`] || `custom` };
  if (e[`sentry.source`] === `custom`) return { op: `db`, description: t, source: `custom` };
  let r = e[X.SEMATTRS_DB_STATEMENT];
  return { op: `db`, description: r ? r.toString() : t, source: `task` };
}
function gg({ name: e, kind: t, attributes: n }, r) {
  let i = [`http`];
  switch (t) {
    case Y.SpanKind.CLIENT:
      i.push(`client`);
      break;
    case Y.SpanKind.SERVER:
      i.push(`server`);
      break;
  }
  n[`sentry.http.prefetch`] && i.push(`prefetch`);
  let { urlPath: a, url: o, query: s, fragment: c, hasRoute: l } = vg(n, t);
  if (!a) return { ...yg(e, n), op: i.join(`.`) };
  let u = n[Hh],
    d = `${r} ${a}`,
    f = u ? `${d} (${_g(u)})` : d,
    p = l || a === `/` ? `route` : `url`,
    m = {};
  (o && (m.url = o), s && (m[`http.query`] = s), c && (m[`http.fragment`] = c));
  let h = t === Y.SpanKind.CLIENT || t === Y.SpanKind.SERVER,
    g = !`${n[`sentry.origin`] || `manual`}`.startsWith(`auto`),
    _ = n[hl] === `custom`,
    v = n[xl],
    { description: y, source: b } =
      !_ && v == null && (h || !g) ? { description: f, source: p } : yg(e, n);
  return { op: i.join(`.`), description: y, source: b, data: m };
}
function _g(e) {
  if (Array.isArray(e)) {
    let t = e.slice().sort();
    return t.length <= 5 ? t.join(`, `) : `${t.slice(0, 5).join(`, `)}, +${t.length - 5}`;
  }
  return `${e}`;
}
function vg(e, t) {
  let n = e[X.SEMATTRS_HTTP_TARGET],
    r = e[X.SEMATTRS_HTTP_URL] || e[X.ATTR_URL_FULL],
    i = e[X.ATTR_HTTP_ROUTE],
    a = typeof r == `string` ? Gp(r) : void 0,
    o = a ? qp(a) : void 0,
    s = a?.search || void 0,
    c = a?.hash || void 0;
  return typeof i == `string`
    ? { urlPath: i, url: o, query: s, fragment: c, hasRoute: !0 }
    : t === Y.SpanKind.SERVER && typeof n == `string`
      ? { urlPath: Kp(n), url: o, query: s, fragment: c, hasRoute: !1 }
      : a
        ? { urlPath: o, url: o, query: s, fragment: c, hasRoute: !1 }
        : typeof n == `string`
          ? { urlPath: Kp(n), url: o, query: s, fragment: c, hasRoute: !1 }
          : { urlPath: void 0, url: o, query: s, fragment: c, hasRoute: !1 };
}
function yg(e, t, n = `custom`) {
  let r = t[`sentry.source`] || n,
    i = t[xl];
  return i && typeof i == `string` ? { description: i, source: r } : { description: e, source: r };
}
function bg() {
  return Y.trace.getActiveSpan();
}
var xg = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
function Sg({ dsc: e, sampled: t }) {
  let n = e ? Fl(e) : void 0,
    r = new Qr(),
    i = n ? r.set(Qh, n) : r;
  return t === !1 ? i.set($h, `1`) : i;
}
var Cg = new Set();
function wg(e) {
  Cg.add(e);
}
var Tg = class extends Dn {
    constructor() {
      (super(), wg(`SentryPropagator`), (this._urlMatchesTargetsMap = new $m(100)));
    }
    inject(e, t, n) {
      if (A(e)) {
        xg && z.log(`[Tracing] Not injecting trace data for url because tracing is suppressed.`);
        return;
      }
      let r = Y.trace.getSpan(e),
        i = r && Ng(r),
        a = U()?.getOptions()?.tracePropagationTargets;
      if (!Dg(i, a, this._urlMatchesTargetsMap)) {
        xg &&
          z.log(
            `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`,
            i,
          );
        return;
      }
      let o = Mg(t),
        s = Y.propagation.getBaggage(e) || Y.propagation.createBaggage({}),
        { dynamicSamplingContext: c, traceId: l, spanId: u, sampled: d } = Og(e);
      if (o) {
        let e = Il(o);
        e &&
          Object.entries(e).forEach(([e, t]) => {
            s = s.setEntry(e, { value: t });
          });
      }
      (c &&
        (s = Object.entries(c).reduce(
          (e, [t, n]) => (n ? e.setEntry(`${Ml}${t}`, { value: n }) : e),
          s,
        )),
        l && l !== Y.INVALID_TRACEID && n.set(t, Xh, $l(l, u, d)),
        super.inject(Y.propagation.setBaggage(e, s), t, n));
    }
    extract(e, t, n) {
      let r = n.get(t, Xh),
        i = n.get(t, Zh);
      return jg(kg(e, { sentryTrace: r ? (Array.isArray(r) ? r[0] : r) : void 0, baggage: i }));
    }
    fields() {
      return [Xh, Zh];
    }
  },
  Eg = `[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:`;
function Dg(e, t, n) {
  if (typeof e != `string` || !t) return !0;
  let r = n?.get(e);
  if (r !== void 0) return (xg && !r && z.log(Eg, e), r);
  let i = Ec(e, t);
  return (n?.set(e, i), xg && !i && z.log(Eg, e), i);
}
function Og(e, t = {}) {
  let n = Y.trace.getSpan(e);
  if (n?.spanContext().isRemote) {
    let e = n.spanContext();
    return { dynamicSamplingContext: G(n), traceId: e.traceId, spanId: void 0, sampled: fg(e) };
  }
  if (n) {
    let e = n.spanContext();
    return { dynamicSamplingContext: G(n), traceId: e.traceId, spanId: e.spanId, sampled: fg(e) };
  }
  let r = t.scope || cg(e)?.scope || V(),
    i = t.client || U(),
    a = r.getPropagationContext();
  return {
    dynamicSamplingContext: i ? Nu(i, r) : void 0,
    traceId: a.traceId,
    spanId: a.propagationSpanId,
    sampled: a.sampled,
  };
}
function kg(e, { sentryTrace: t, baggage: n }) {
  let { traceId: r, parentSpanId: i, sampled: a, dsc: o } = Ql(t, n),
    s = U(),
    c = Pl(n);
  if (!i || (s && !nu(s, c?.org_id))) return e;
  let l = Pg({ traceId: r, spanId: i, sampled: a, dsc: o });
  return Y.trace.setSpanContext(e, l);
}
function Ag(e, t, n) {
  let r = jg(kg(e, t));
  return Y.context.with(r, n);
}
function jg(e) {
  let t = cg(e);
  return lg(e, { scope: t ? t.scope : V().clone(), isolationScope: t ? t.isolationScope : H() });
}
function Mg(e) {
  try {
    let t = e[Zh];
    return Array.isArray(t) ? t.join(`,`) : t;
  } catch {
    return;
  }
}
function Ng(e) {
  let t = W(e).data,
    n = t[X.SEMATTRS_HTTP_URL] || t[X.ATTR_URL_FULL];
  if (typeof n == `string`) return n;
  let r = e.spanContext().traceState?.get(eg);
  if (r) return r;
}
function Pg({ spanId: e, traceId: t, sampled: n, dsc: r }) {
  let i = Sg({ dsc: r, sampled: n });
  return {
    traceId: t,
    spanId: e,
    isRemote: !0,
    traceFlags: n ? Y.TraceFlags.SAMPLED : Y.TraceFlags.NONE,
    traceState: i,
  };
}
function Fg(e, t, n) {
  let r = Bg(),
    { name: i, parentSpan: a } = e;
  return qg(a)(() => {
    let a = Ug(e.scope, e.forceTransaction),
      o = e.onlyIfParent && !Y.trace.getSpan(a) ? k(a) : a,
      s = Vg(e);
    if (!wu()) {
      let e = A(o) ? o : k(o);
      return Y.context.with(e, () =>
        r.startActiveSpan(i, s, e, (e) =>
          Y.context.with(a, () =>
            _d(
              () => t(e),
              () => {
                W(e).status === void 0 && e.setStatus({ code: Y.SpanStatusCode.ERROR });
              },
              n ? () => e.end() : void 0,
            ),
          ),
        ),
      );
    }
    return r.startActiveSpan(i, s, o, (e) =>
      _d(
        () => t(e),
        () => {
          W(e).status === void 0 && e.setStatus({ code: Y.SpanStatusCode.ERROR });
        },
        n ? () => e.end() : void 0,
      ),
    );
  });
}
function Ig(e, t) {
  return Fg(e, t, !0);
}
function Lg(e, t) {
  return Fg(e, (e) => t(e, () => e.end()), !1);
}
function Rg(e) {
  let t = Bg(),
    { name: n, parentSpan: r } = e;
  return qg(r)(() => {
    let r = Ug(e.scope, e.forceTransaction),
      i = e.onlyIfParent && !Y.trace.getSpan(r) ? k(r) : r,
      a = Vg(e);
    return (wu() || (i = A(i) ? i : k(i)), t.startSpan(n, a, i));
  });
}
function zg(e, t) {
  let n = e ? Y.trace.setSpan(Y.context.active(), e) : Y.trace.deleteSpan(Y.context.active());
  return Y.context.with(n, () => t(V()));
}
function Bg() {
  return U()?.tracer || Y.trace.getTracer(`@sentry/opentelemetry`, `10.29.0`);
}
function Vg(e) {
  let { startTime: t, attributes: n, kind: r, op: i, links: a } = e,
    o = typeof t == `number` ? Hg(t) : t;
  return { attributes: i ? { [_l]: i, ...n } : n, kind: r, links: a, startTime: o };
}
function Hg(e) {
  return e < 9999999999 ? e * 1e3 : e;
}
function Ug(e, t) {
  let n = Wg(e),
    r = Y.trace.getSpan(n);
  if (!r || !t) return n;
  let i = Y.trace.deleteSpan(n),
    { spanId: a, traceId: o } = r.spanContext(),
    s = fg(r.spanContext()),
    c = Sg({ dsc: G(yu(r)), sampled: s }),
    l = {
      traceId: o,
      spanId: a,
      isRemote: !0,
      traceFlags: s ? Y.TraceFlags.SAMPLED : Y.TraceFlags.NONE,
      traceState: c,
    };
  return Y.trace.setSpanContext(i, l);
}
function Wg(e) {
  if (e) {
    let t = dg(e);
    if (t) return t;
  }
  return Y.context.active();
}
function Gg(e, t) {
  return Ag(Y.context.active(), e, t);
}
function Kg(e, t) {
  let n = dg(t),
    r = n && Y.trace.getSpan(n),
    i = r ? au(r) : ml(t);
  return [r ? G(r) : Nu(e, t), i];
}
function qg(e) {
  return e === void 0 ? (e) => e() : (t) => zg(e, t);
}
function Jg(e) {
  let t = k(Y.context.active());
  return Y.context.with(t, e);
}
function Yg({ span: e, scope: t, client: n } = {}) {
  let r = (t && dg(t)) ?? Y.context.active();
  if (e) {
    let { scope: t } = jl(e);
    r = (t && dg(t)) || Y.trace.setSpan(Y.context.active(), e);
  }
  let {
    traceId: i,
    spanId: a,
    sampled: o,
    dynamicSamplingContext: s,
  } = Og(r, { scope: t, client: n });
  return { "sentry-trace": $l(i, a, o), baggage: Fl(s) };
}
function Xg() {
  function e() {
    return cg(Y.context.active()) || { scope: nl(), isolationScope: rl() };
  }
  function t(e) {
    let t = Y.context.active();
    return Y.context.with(t, () => e(a()));
  }
  function n(e, t) {
    let n = dg(e) || Y.context.active();
    return Y.context.with(n.setValue(ag, e), () => t(e));
  }
  function r(e) {
    let t = Y.context.active();
    return Y.context.with(t.setValue(ig, !0), () => e(o()));
  }
  function i(e, t) {
    let n = Y.context.active();
    return Y.context.with(n.setValue(og, e), () => t(o()));
  }
  function a() {
    return e().scope;
  }
  function o() {
    return e().isolationScope;
  }
  ul({
    withScope: t,
    withSetScope: n,
    withSetIsolationScope: i,
    withIsolationScope: r,
    getCurrentScope: a,
    getIsolationScope: o,
    startSpan: Ig,
    startSpanManual: Lg,
    startInactiveSpan: Rg,
    getActiveSpan: bg,
    suppressTracing: Jg,
    getTraceData: Yg,
    continueTrace: Gg,
    withActiveSpan: zg,
  });
}
function Zg(e) {
  class t extends e {
    constructor(...e) {
      (super(...e), wg(`SentryContextManager`));
    }
    with(e, t, n, ...r) {
      let i = cg(e),
        a = i?.scope || V(),
        o = i?.isolationScope || H(),
        s = e.getValue(ig) === !0,
        c = e.getValue(ag),
        l = e.getValue(og),
        u = c || a.clone(),
        d = lg(e, { scope: u, isolationScope: l || (s ? o.clone() : o) })
          .deleteValue(ig)
          .deleteValue(ag)
          .deleteValue(og);
      return (ug(u, d), super.with(d, t, n, ...r));
    }
  }
  return t;
}
function Qg(e) {
  let t = new Map();
  for (let n of e) e_(t, n);
  return Array.from(t, function ([e, t]) {
    return t;
  });
}
function $g(e) {
  return e.attributes[Vh] === !0 ? void 0 : Uh(e);
}
function e_(e, t) {
  let n = t.spanContext().spanId,
    r = $g(t);
  if (!r) {
    n_(e, { id: n, span: t, children: [] });
    return;
  }
  let i = t_(e, r),
    a = n_(e, { id: n, span: t, parentNode: i, children: [] });
  i.children.push(a);
}
function t_(e, t) {
  return e.get(t) || n_(e, { id: t, children: [] });
}
function n_(e, t) {
  let n = e.get(t.id);
  return n?.span
    ? n
    : n && !n.span
      ? ((n.span = t.span), (n.parentNode = t.parentNode), n)
      : (e.set(t.id, t), t);
}
var r_ = {
    1: `cancelled`,
    2: `unknown_error`,
    3: `invalid_argument`,
    4: `deadline_exceeded`,
    5: `not_found`,
    6: `already_exists`,
    7: `permission_denied`,
    8: `resource_exhausted`,
    9: `failed_precondition`,
    10: `aborted`,
    11: `out_of_range`,
    12: `unimplemented`,
    13: `internal_error`,
    14: `unavailable`,
    15: `data_loss`,
    16: `unauthenticated`,
  },
  i_ = (e) => Object.values(r_).includes(e);
function a_(e) {
  let t = Wh(e) ? e.attributes : {},
    n = Kh(e) ? e.status : void 0;
  if (n) {
    if (n.code === Y.SpanStatusCode.OK) return { code: 1 };
    if (n.code === Y.SpanStatusCode.ERROR) {
      if (n.message === void 0) {
        let e = o_(t);
        if (e) return e;
      }
      return n.message && i_(n.message)
        ? { code: 2, message: n.message }
        : { code: 2, message: `internal_error` };
    }
  }
  return (
    o_(t) ||
    (n?.code === Y.SpanStatusCode.UNSET ? { code: 1 } : { code: 2, message: `unknown_error` })
  );
}
function o_(e) {
  let t = e[X.ATTR_HTTP_RESPONSE_STATUS_CODE] || e[X.SEMATTRS_HTTP_STATUS_CODE],
    n = e[X.SEMATTRS_RPC_GRPC_STATUS_CODE],
    r = typeof t == `number` ? t : typeof t == `string` ? parseInt(t) : void 0;
  if (typeof r == `number`) return wl(r);
  if (typeof n == `string`) return { code: 2, message: r_[n] || `unknown_error` };
}
var s_ = 1e3,
  c_ = 300,
  l_ = class {
    constructor(e) {
      ((this._finishedSpanBucketSize = e?.timeout || c_),
        (this._finishedSpanBuckets = Array(this._finishedSpanBucketSize).fill(void 0)),
        (this._lastCleanupTimestampInS = Math.floor(Date.now() / 1e3)),
        (this._spansToBucketEntry = new WeakMap()),
        (this._sentSpans = new Map()),
        (this._debouncedFlush = tm(this.flush.bind(this), 1, { maxWait: 100 })));
    }
    export(e) {
      let t = Math.floor(Date.now() / 1e3);
      if (this._lastCleanupTimestampInS !== t) {
        let e = 0;
        (this._finishedSpanBuckets.forEach((n, r) => {
          n &&
            n.timestampInS <= t - this._finishedSpanBucketSize &&
            ((e += n.spans.size), (this._finishedSpanBuckets[r] = void 0));
        }),
          e > 0 &&
            xg &&
            z.log(
              `SpanExporter dropped ${e} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`,
            ),
          (this._lastCleanupTimestampInS = t));
      }
      let n = t % this._finishedSpanBucketSize,
        r = this._finishedSpanBuckets[n] || { timestampInS: t, spans: new Set() };
      ((this._finishedSpanBuckets[n] = r), r.spans.add(e), this._spansToBucketEntry.set(e, r));
      let i = $g(e);
      (!i || this._sentSpans.has(i)) && this._debouncedFlush();
    }
    flush() {
      let e = this._finishedSpanBuckets.flatMap((e) => (e ? Array.from(e.spans) : []));
      this._flushSentSpanCache();
      let t = this._maybeSend(e),
        n = t.size,
        r = e.length - n;
      xg &&
        z.log(
          `SpanExporter exported ${n} spans, ${r} spans are waiting for their parent spans to finish`,
        );
      let i = Date.now() + c_ * 1e3;
      for (let e of t) {
        this._sentSpans.set(e.spanContext().spanId, i);
        let t = this._spansToBucketEntry.get(e);
        t && t.spans.delete(e);
      }
      this._debouncedFlush.cancel();
    }
    clear() {
      ((this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0)),
        this._sentSpans.clear(),
        this._debouncedFlush.cancel());
    }
    _maybeSend(e) {
      let t = Qg(e),
        n = new Set(),
        r = this._getCompletedRootNodes(t);
      for (let e of r) {
        let t = e.span;
        n.add(t);
        let r = d_(t);
        if (e.parentNode && this._sentSpans.has(e.parentNode.id)) {
          let e = r.contexts?.trace?.data;
          e && (e[`sentry.parent_span_already_sent`] = !0);
        }
        let i = r.spans || [];
        for (let t of e.children) f_(t, i, n);
        r.spans =
          i.length > s_ ? i.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, s_) : i;
        let a = ud(t.events);
        (a && (r.measurements = a), uf(r));
      }
      return n;
    }
    _flushSentSpanCache() {
      let e = Date.now();
      for (let [t, n] of this._sentSpans.entries()) n <= e && this._sentSpans.delete(t);
    }
    _nodeIsCompletedRootNodeOrHasSentParent(e) {
      return !!e.span && (!e.parentNode || this._sentSpans.has(e.parentNode.id));
    }
    _getCompletedRootNodes(e) {
      return e.filter((e) => this._nodeIsCompletedRootNodeOrHasSentParent(e));
    }
  };
function u_(e) {
  let t = e.attributes;
  return { origin: t[vl], op: t[_l], source: t[hl] };
}
function d_(e) {
  let { op: t, description: n, data: r, origin: i = `manual`, source: a } = p_(e),
    o = jl(e),
    s = e.attributes[gl],
    c = { [hl]: a, [gl]: s, [_l]: t, [vl]: i, ...r, ...m_(e.attributes) },
    { links: l } = e,
    { traceId: u, spanId: d } = e.spanContext(),
    f = {
      parent_span_id: Uh(e),
      span_id: d,
      trace_id: u,
      data: c,
      origin: i,
      op: t,
      status: mu(a_(e)),
      links: cu(l),
    },
    p = c[X.ATTR_HTTP_RESPONSE_STATUS_CODE],
    m = typeof p == `number` ? { response: { status_code: p } } : void 0;
  return {
    contexts: { trace: f, otel: { resource: e.resource.attributes }, ...m },
    spans: [],
    start_timestamp: lu(e.startTime),
    timestamp: lu(e.endTime),
    transaction: n,
    type: `transaction`,
    sdkProcessingMetadata: {
      capturedSpanScope: o.scope,
      capturedSpanIsolationScope: o.isolationScope,
      sampleRate: s,
      dynamicSamplingContext: G(e),
    },
    ...(a && { transaction_info: { source: a } }),
  };
}
function f_(e, t, n) {
  let r = e.span;
  if ((r && n.add(r), !r)) {
    e.children.forEach((e) => {
      f_(e, t, n);
    });
    return;
  }
  let i = r.spanContext().spanId,
    a = r.spanContext().traceId,
    o = Uh(r),
    { attributes: s, startTime: c, endTime: l, links: u } = r,
    { op: d, description: f, data: p, origin: m = `manual` } = p_(r),
    h = { [vl]: m, [_l]: d, ...m_(s), ...p },
    g = a_(r),
    _ = {
      span_id: i,
      trace_id: a,
      data: h,
      description: f,
      parent_span_id: o,
      start_timestamp: lu(c),
      timestamp: lu(l) || void 0,
      status: mu(g),
      op: d,
      origin: m,
      measurements: ud(r.events),
      links: cu(u),
    };
  (t.push(_),
    e.children.forEach((e) => {
      f_(e, t, n);
    }));
}
function p_(e) {
  let { op: t, source: n, origin: r } = u_(e),
    { op: i, description: a, source: o, data: s } = mg(e);
  return { op: t || i, description: a, source: n || o, origin: r, data: { ...s, ...h_(e) } };
}
function m_(e) {
  let t = { ...e };
  return (delete t[gl], delete t[Vh], delete t[xl], t);
}
function h_(e) {
  let t = e.attributes,
    n = {};
  e.kind !== Y.SpanKind.INTERNAL && (n[`otel.kind`] = Y.SpanKind[e.kind]);
  let r = t[X.SEMATTRS_HTTP_STATUS_CODE];
  r && (n[X.ATTR_HTTP_RESPONSE_STATUS_CODE] = r);
  let i = Jh(e);
  return (
    i.url && (n.url = i.url),
    i[`http.query`] && (n[`http.query`] = i[`http.query`].slice(1)),
    i[`http.fragment`] && (n[`http.fragment`] = i[`http.fragment`].slice(1)),
    n
  );
}
function g_(e, t) {
  let n = Y.trace.getSpan(t),
    r = cg(t);
  (n && !n.spanContext().isRemote && _u(n, e),
    n?.spanContext().isRemote && e.setAttribute(Vh, !0),
    t === Y.ROOT_CONTEXT && (r = { scope: nl(), isolationScope: rl() }),
    r && Al(e, r.scope, r.isolationScope),
    cd(e),
    U()?.emit(`spanStart`, e));
}
function __(e) {
  (ld(e), U()?.emit(`spanEnd`, e));
}
var v_ = class {
    constructor(e) {
      (wg(`SentrySpanProcessor`), (this._exporter = new l_(e)));
    }
    async forceFlush() {
      this._exporter.flush();
    }
    async shutdown() {
      this._exporter.clear();
    }
    onStart(e, t) {
      g_(e, t);
    }
    onEnd(e) {
      (__(e), this._exporter.export(e));
    }
  },
  y_ = class {
    constructor(e) {
      ((this._client = e), wg(`SentrySampler`));
    }
    shouldSample(e, t, n, r, i, a) {
      let o = this._client.getOptions(),
        s = C_(e),
        c = s?.spanContext();
      if (!wu(o)) return x_({ decision: void 0, context: e, spanAttributes: i });
      let l = i[X.SEMATTRS_HTTP_METHOD] || i[X.ATTR_HTTP_REQUEST_METHOD];
      if (r === Y.SpanKind.CLIENT && l && (!s || c?.isRemote))
        return x_({ decision: void 0, context: e, spanAttributes: i });
      let u = s ? b_(s, t, n) : void 0;
      if (!(!s || c?.isRemote))
        return x_({
          decision: u ? Z.RECORD_AND_SAMPLED : Z.NOT_RECORD,
          context: e,
          spanAttributes: i,
        });
      let { description: d, data: f, op: p } = pg(n, i, r),
        m = { ...f, ...i };
      p && (m[_l] = p);
      let h = { decision: !0 };
      if (
        (this._client.emit(
          `beforeSampling`,
          { spanAttributes: m, spanName: d, parentSampled: u, parentContext: c },
          h,
        ),
        !h.decision)
      )
        return x_({ decision: void 0, context: e, spanAttributes: i });
      let { isolationScope: g } = cg(e) ?? {},
        _ = c?.traceState ? c.traceState.get(Qh) : void 0,
        v = _ ? Pl(_) : void 0,
        y = Yl(v?.sample_rand) ?? Math.random(),
        [b, x, S] = yd(
          o,
          {
            name: d,
            attributes: m,
            normalizedRequest: g?.getScopeData().sdkProcessingMetadata.normalizedRequest,
            parentSampled: u,
            parentSampleRate: Yl(v?.sample_rate),
          },
          y,
        ),
        C = `${l}`.toUpperCase();
      return C === `OPTIONS` || C === `HEAD`
        ? (xg && z.log(`[Tracing] Not sampling span because HTTP method is '${C}' for ${n}`),
          x_({
            decision: Z.NOT_RECORD,
            context: e,
            spanAttributes: i,
            sampleRand: y,
            downstreamTraceSampleRate: 0,
          }))
        : (!b &&
            u === void 0 &&
            (xg &&
              z.log(
                `[Tracing] Discarding root span because its trace was not chosen to be sampled.`,
              ),
            this._client.recordDroppedEvent(`sample_rate`, `transaction`)),
          {
            ...x_({
              decision: b ? Z.RECORD_AND_SAMPLED : Z.NOT_RECORD,
              context: e,
              spanAttributes: i,
              sampleRand: y,
              downstreamTraceSampleRate: S ? x : void 0,
            }),
            attributes: { [gl]: S ? x : void 0 },
          });
    }
    toString() {
      return `SentrySampler`;
    }
  };
function b_(e, t, n) {
  let r = e.spanContext();
  if ((0, Y.isSpanContextValid)(r) && r.traceId === t) {
    if (r.isRemote) {
      let t = fg(e.spanContext());
      return (
        xg && z.log(`[Tracing] Inheriting remote parent's sampled decision for ${n}: ${t}`), t
      );
    }
    let t = fg(r);
    return (xg && z.log(`[Tracing] Inheriting parent's sampled decision for ${n}: ${t}`), t);
  }
}
function x_({
  decision: e,
  context: t,
  spanAttributes: n,
  sampleRand: r,
  downstreamTraceSampleRate: i,
}) {
  let a = S_(t, n);
  return (
    i !== void 0 && (a = a.set(ng, `${i}`)),
    r !== void 0 && (a = a.set(tg, `${r}`)),
    e == null
      ? { decision: Z.NOT_RECORD, traceState: a }
      : e === Z.NOT_RECORD
        ? { decision: e, traceState: a.set($h, `1`) }
        : { decision: e, traceState: a }
  );
}
function S_(e, t) {
  let n = Y.trace.getSpan(e)?.spanContext()?.traceState || new Qr(),
    r = t[X.SEMATTRS_HTTP_URL] || t[X.ATTR_URL_FULL];
  return (r && typeof r == `string` && (n = n.set(eg, r)), n);
}
function C_(e) {
  let t = Y.trace.getSpan(e);
  return t && (0, Y.isSpanContextValid)(t.spanContext()) ? t : void 0;
}
function w_(e, t) {
  if (!e) return t;
  let n = Il(e),
    r = Il(t);
  if (!r) return e;
  let i = { ...n };
  return (
    Object.entries(r).forEach(([e, t]) => {
      i[e] || (i[e] = t);
    }),
    Rl(i)
  );
}
var T_ = Ic(process.versions.node),
  E_ = T_.major,
  D_ = T_.minor;
(P(), ds());
var O_ = `sentry-trace`,
  k_ = `baggage`,
  A_ = /baggage: (.*)\r\n/,
  j_ = class extends $o {
    constructor(e = {}) {
      (super(`@sentry/instrumentation-node-fetch`, fs, e),
        (this._channelSubs = []),
        (this._propagationDecisionMap = new $m(100)),
        (this._ignoreOutgoingRequestsMap = new WeakMap()));
    }
    init() {}
    disable() {
      (super.disable(),
        this._channelSubs.forEach((e) => e.unsubscribe()),
        (this._channelSubs = []));
    }
    enable() {
      (super.enable(),
        (this._channelSubs = this._channelSubs || []),
        !(this._channelSubs.length > 0) &&
          (this._subscribeToChannel(`undici:request:create`, this._onRequestCreated.bind(this)),
          this._subscribeToChannel(`undici:request:headers`, this._onResponseHeaders.bind(this))));
    }
    _onRequestCreated({ request: e }) {
      if (this.getConfig().enabled === !1) return;
      let t = this._shouldIgnoreOutgoingRequest(e);
      if ((this._ignoreOutgoingRequestsMap.set(e, t), t)) return;
      let n = P_(e.origin, e.path),
        r = U()?.getOptions().tracePropagationTargets,
        i = Dg(n, r, this._propagationDecisionMap) ? Qp() : void 0;
      if (!i) return;
      let { "sentry-trace": a, baggage: o } = i;
      if (Array.isArray(e.headers)) {
        let t = e.headers;
        a && !t.includes(O_) && t.push(O_, a);
        let n = t.findIndex((e) => e === k_);
        if (o && n === -1) t.push(k_, o);
        else if (o) {
          let e = t[n + 1],
            r = w_(e, o);
          r && (t[n + 1] = r);
        }
      } else {
        let t = e.headers;
        a && !t.includes(`${O_}:`) && (e.headers += `${O_}: ${a}\r\n`);
        let n = e.headers.match(A_)?.[1];
        if (o && !n) e.headers += `${k_}: ${o}\r\n`;
        else if (o) {
          let t = w_(n, o);
          t && (e.headers = e.headers.replace(A_, `baggage: ${t}\r\n`));
        }
      }
    }
    _onResponseHeaders({ request: e, response: t }) {
      let n = this.getConfig();
      if (n.enabled === !1) return;
      let r = n.breadcrumbs,
        i = r === void 0 || r,
        a = this._ignoreOutgoingRequestsMap.get(e);
      i && !a && M_(e, t);
    }
    _subscribeToChannel(e, t) {
      let n = E_ > 18 || (E_ === 18 && D_ >= 19),
        r;
      if (n) (re.subscribe?.(e, t), (r = () => re.unsubscribe?.(e, t)));
      else {
        let n = re.channel(e);
        (n.subscribe(t), (r = () => n.unsubscribe(t)));
      }
      this._channelSubs.push({ name: e, unsubscribe: r });
    }
    _shouldIgnoreOutgoingRequest(e) {
      if (A(Y.context.active())) return !0;
      let t = P_(e.origin, e.path),
        n = this.getConfig().ignoreOutgoingRequests;
      return typeof n != `function` || !t ? !1 : n(t);
    }
  };
function M_(e, t) {
  let n = N_(e),
    r = t.statusCode,
    i = Km(r);
  rm(
    { category: `http`, data: { status_code: r, ...n }, type: `http`, level: i },
    { event: `response`, request: e, response: t },
  );
}
function N_(e) {
  try {
    let t = Gp(P_(e.origin, e.path)),
      n = { url: qp(t), "http.method": e.method || `GET` };
    return (t.search && (n[`http.query`] = t.search), t.hash && (n[`http.fragment`] = t.hash), n);
  } catch {
    return {};
  }
}
function P_(e, t = `/`) {
  try {
    return new URL(t, e).toString();
  } catch {
    let n = `${e}`;
    return n.endsWith(`/`) && t.startsWith(`/`)
      ? `${n}${t.slice(1)}`
      : !n.endsWith(`/`) && !t.startsWith(`/`)
        ? `${n}/${t.slice(1)}`
        : `${n}${t}`;
  }
}
var F_ = (0, u.promisify)(f.readFile),
  I_ = (0, u.promisify)(f.readdir),
  L_ = `Context`,
  R_ = q((e = {}) => {
    let t,
      n = { app: !0, os: !0, device: !0, culture: !0, cloudResource: !0, ...e };
    async function r(e) {
      t === void 0 && (t = i());
      let n = z_(await t);
      return (
        (e.contexts = {
          ...e.contexts,
          app: { ...n.app, ...e.contexts?.app },
          os: { ...n.os, ...e.contexts?.os },
          device: { ...n.device, ...e.contexts?.device },
          culture: { ...n.culture, ...e.contexts?.culture },
          cloud_resource: { ...n.cloud_resource, ...e.contexts?.cloud_resource },
        }),
        e
      );
    }
    async function i() {
      let e = {};
      if (
        (n.os && (e.os = await B_()),
        n.app && (e.app = H_()),
        n.device && (e.device = U_(n.device)),
        n.culture)
      ) {
        let t = V_();
        t && (e.culture = t);
      }
      return (n.cloudResource && (e.cloud_resource = Z_()), e);
    }
    return {
      name: L_,
      processEvent(e) {
        return r(e);
      },
    };
  });
function z_(e) {
  if (
    (e.app?.app_memory && (e.app.app_memory = process.memoryUsage().rss),
    e.app?.free_memory && typeof process.availableMemory == `function`)
  ) {
    let t = process.availableMemory?.();
    t != null && (e.app.free_memory = t);
  }
  return (e.device?.free_memory && (e.device.free_memory = c.freemem()), e);
}
async function B_() {
  let e = c.platform();
  switch (e) {
    case `darwin`:
      return J_();
    case `linux`:
      return X_();
    default:
      return { name: W_[e] || e, version: c.release() };
  }
}
function V_() {
  try {
    if (typeof process.versions.icu != `string`) return;
    let e = new Date(9e8);
    if (new Intl.DateTimeFormat(`es`, { month: `long` }).format(e) === `enero`) {
      let e = Intl.DateTimeFormat().resolvedOptions();
      return { locale: e.locale, timezone: e.timeZone };
    }
  } catch {}
}
function H_() {
  let e = process.memoryUsage().rss,
    t = {
      app_start_time: new Date(Date.now() - process.uptime() * 1e3).toISOString(),
      app_memory: e,
    };
  if (typeof process.availableMemory == `function`) {
    let e = process.availableMemory?.();
    e != null && (t.free_memory = e);
  }
  return t;
}
function U_(e) {
  let t = {},
    n;
  try {
    n = c.uptime();
  } catch {}
  if (
    (typeof n == `number` && (t.boot_time = new Date(Date.now() - n * 1e3).toISOString()),
    (t.arch = c.arch()),
    (e === !0 || e.memory) && ((t.memory_size = c.totalmem()), (t.free_memory = c.freemem())),
    e === !0 || e.cpu)
  ) {
    let e = c.cpus(),
      n = e?.[0];
    n &&
      ((t.processor_count = e.length),
      (t.cpu_description = n.model),
      (t.processor_frequency = n.speed));
  }
  return t;
}
var W_ = {
    aix: `IBM AIX`,
    freebsd: `FreeBSD`,
    openbsd: `OpenBSD`,
    sunos: `SunOS`,
    win32: `Windows`,
    ohos: `OpenHarmony`,
    android: `Android`,
  },
  G_ = [
    { name: `fedora-release`, distros: [`Fedora`] },
    { name: `redhat-release`, distros: [`Red Hat Linux`, `Centos`] },
    { name: `redhat_version`, distros: [`Red Hat Linux`] },
    { name: `SuSE-release`, distros: [`SUSE Linux`] },
    { name: `lsb-release`, distros: [`Ubuntu Linux`, `Arch Linux`] },
    { name: `debian_version`, distros: [`Debian`] },
    { name: `debian_release`, distros: [`Debian`] },
    { name: `arch-release`, distros: [`Arch Linux`] },
    { name: `gentoo-release`, distros: [`Gentoo Linux`] },
    { name: `novell-release`, distros: [`SUSE Linux`] },
    { name: `alpine-release`, distros: [`Alpine Linux`] },
  ],
  K_ = {
    alpine: (e) => e,
    arch: (e) => q_(/distrib_release=(.*)/, e),
    centos: (e) => q_(/release ([^ ]+)/, e),
    debian: (e) => e,
    fedora: (e) => q_(/release (..)/, e),
    mint: (e) => q_(/distrib_release=(.*)/, e),
    red: (e) => q_(/release ([^ ]+)/, e),
    suse: (e) => q_(/VERSION = (.*)\n/, e),
    ubuntu: (e) => q_(/distrib_release=(.*)/, e),
  };
function q_(e, t) {
  let n = e.exec(t);
  return n ? n[1] : void 0;
}
async function J_() {
  let e = {
    kernel_version: c.release(),
    name: `Mac OS X`,
    version: `10.${Number(c.release().split(`.`)[0]) - 4}`,
  };
  try {
    let t = await new Promise((e, t) => {
      (0, m.execFile)(`/usr/bin/sw_vers`, (n, r) => {
        if (n) {
          t(n);
          return;
        }
        e(r);
      });
    });
    ((e.name = q_(/^ProductName:\s+(.*)$/m, t)),
      (e.version = q_(/^ProductVersion:\s+(.*)$/m, t)),
      (e.build = q_(/^BuildVersion:\s+(.*)$/m, t)));
  } catch {}
  return e;
}
function Y_(e) {
  return e.split(` `)[0].toLowerCase();
}
async function X_() {
  let e = { kernel_version: c.release(), name: `Linux` };
  try {
    let t = await I_(`/etc`),
      n = G_.find((e) => t.includes(e.name));
    if (!n) return e;
    let r = (await F_((0, l.join)(`/etc`, n.name), { encoding: `utf-8` })).toLowerCase(),
      { distros: i } = n;
    ((e.name = i.find((e) => r.indexOf(Y_(e)) >= 0) || i[0]), (e.version = K_[Y_(e.name)]?.(r)));
  } catch {}
  return e;
}
function Z_() {
  if (process.env.VERCEL)
    return { "cloud.provider": `vercel`, "cloud.region": process.env.VERCEL_REGION };
  if (process.env.AWS_REGION)
    return {
      "cloud.provider": `aws`,
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV,
    };
  if (process.env.GCP_PROJECT) return { "cloud.provider": `gcp` };
  if (process.env.ALIYUN_REGION_ID)
    return { "cloud.provider": `alibaba_cloud`, "cloud.region": process.env.ALIYUN_REGION_ID };
  if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME)
    return { "cloud.provider": `azure`, "cloud.region": process.env.REGION_NAME };
  if (process.env.IBM_CLOUD_REGION)
    return { "cloud.provider": `ibm_cloud`, "cloud.region": process.env.IBM_CLOUD_REGION };
  if (process.env.TENCENTCLOUD_REGION)
    return {
      "cloud.provider": `tencent_cloud`,
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE,
    };
  if (process.env.NETLIFY) return { "cloud.provider": `netlify` };
  if (process.env.FLY_REGION)
    return { "cloud.provider": `fly.io`, "cloud.region": process.env.FLY_REGION };
  if (process.env.DYNO) return { "cloud.provider": `heroku` };
}
var Q_ = new $m(10),
  $_ = new $m(20),
  ev = 7,
  tv = `ContextLines`;
function nv(e, t, n) {
  let r = e.get(t);
  return r === void 0 ? (e.set(t, n), n) : r;
}
function rv(e) {
  return !!(
    e.startsWith(`node:`) ||
    e.endsWith(`.min.js`) ||
    e.endsWith(`.min.cjs`) ||
    e.endsWith(`.min.mjs`) ||
    e.startsWith(`data:`)
  );
}
function iv(e) {
  return (e.lineno !== void 0 && e.lineno > 1e4) || (e.colno !== void 0 && e.colno > 1e3);
}
function av(e, t) {
  let n = Q_.get(e);
  if (n === void 0) return !1;
  for (let e = t[0]; e <= t[1]; e++) if (n[e] === void 0) return !1;
  return !0;
}
function ov(e, t) {
  if (!e.length) return [];
  let n = 0,
    r = e[0];
  if (typeof r != `number`) return [];
  let i = mv(r, t),
    a = [];
  for (;;) {
    if (n === e.length - 1) {
      a.push(i);
      break;
    }
    let r = e[n + 1];
    if (typeof r != `number`) break;
    (r <= i[1] ? (i[1] = r + t) : (a.push(i), (i = mv(r, t))), n++);
  }
  return a;
}
function sv(e, t, n) {
  return new Promise((r, i) => {
    let a = (0, f.createReadStream)(e),
      o = (0, S.createInterface)({ input: a });
    function s() {
      (a.destroy(), r());
    }
    let c = 0,
      l = 0,
      u = t[l];
    if (u === void 0) {
      s();
      return;
    }
    let d = u[0],
      p = u[1];
    function m(t) {
      ($_.set(e, 1),
        ch && z.error(`Failed to read file: ${e}. Error: ${t}`),
        o.close(),
        o.removeAllListeners(),
        s());
    }
    (a.on(`error`, m),
      o.on(`error`, m),
      o.on(`close`, s),
      o.on(`line`, (e) => {
        if ((c++, !(c < d) && ((n[c] = Cc(e, 0)), c >= p))) {
          if (l === t.length - 1) {
            (o.close(), o.removeAllListeners());
            return;
          }
          l++;
          let e = t[l];
          if (e === void 0) {
            (o.close(), o.removeAllListeners());
            return;
          }
          ((d = e[0]), (p = e[1]));
        }
      }));
  });
}
async function cv(e, t) {
  let n = {};
  if (t > 0 && e.exception?.values) {
    for (let t of e.exception.values)
      if (t.stacktrace?.frames?.length)
        for (let e = t.stacktrace.frames.length - 1; e >= 0; e--) {
          let r = t.stacktrace.frames[e],
            i = r?.filename;
          !r ||
            typeof i != `string` ||
            typeof r.lineno != `number` ||
            rv(i) ||
            iv(r) ||
            (n[i] || (n[i] = []), n[i].push(r.lineno));
        }
  }
  let r = Object.keys(n);
  if (r.length == 0) return e;
  let i = [];
  for (let e of r) {
    if ($_.get(e)) continue;
    let r = n[e];
    if (!r) continue;
    r.sort((e, t) => e - t);
    let a = ov(r, t);
    if (a.every((t) => av(e, t))) continue;
    let o = nv(Q_, e, {});
    i.push(sv(e, a, o));
  }
  if (
    (await Promise.all(i).catch(() => {
      ch && z.log(`Failed to read one or more source files and resolve context lines`);
    }),
    t > 0 && e.exception?.values)
  )
    for (let n of e.exception.values)
      n.stacktrace?.frames && n.stacktrace.frames.length > 0 && lv(n.stacktrace.frames, t, Q_);
  return e;
}
function lv(e, t, n) {
  for (let r of e)
    if (r.filename && r.context_line === void 0 && typeof r.lineno == `number`) {
      let e = n.get(r.filename);
      if (e === void 0) continue;
      dv(r.lineno, r, t, e);
    }
}
function uv(e) {
  (delete e.pre_context, delete e.context_line, delete e.post_context);
}
function dv(e, t, n, r) {
  if (t.lineno === void 0 || r === void 0) {
    ch && z.error(`Cannot resolve context for frame with no lineno or file contents`);
    return;
  }
  t.pre_context = [];
  for (let i = fv(e, n); i < e; i++) {
    let e = r[i];
    if (e === void 0) {
      (uv(t), ch && z.error(`Could not find line ${i} in file ${t.filename}`));
      return;
    }
    t.pre_context.push(e);
  }
  if (r[e] === void 0) {
    (uv(t), ch && z.error(`Could not find line ${e} in file ${t.filename}`));
    return;
  }
  t.context_line = r[e];
  let i = pv(e, n);
  t.post_context = [];
  for (let n = e + 1; n <= i; n++) {
    let e = r[n];
    if (e === void 0) break;
    t.post_context.push(e);
  }
}
function fv(e, t) {
  return Math.max(1, e - t);
}
function pv(e, t) {
  return e + t;
}
function mv(e, t) {
  return [fv(e, t), pv(e, t)];
}
var hv = q((e = {}) => {
    let t = e.frameContextLines === void 0 ? ev : e.frameContextLines;
    return {
      name: tv,
      processEvent(e) {
        return cv(e, t);
      },
    };
  }),
  gv;
async function _v() {
  if (gv === void 0)
    try {
      gv = !!(await import(`node:inspector`)).url();
    } catch {
      gv = !1;
    }
  return gv;
}
var vv = `__SENTRY_ERROR_LOCAL_VARIABLES__`;
function yv(e, t, n) {
  let r = 0,
    i = 5,
    a = 0;
  return (
    setInterval(() => {
      (a === 0
        ? r > e && ((i *= 2), n(i), i > 86400 && (i = 86400), (a = i))
        : (--a, a === 0 && t()),
        (r = 0));
    }, 1e3).unref(),
    () => {
      r += 1;
    }
  );
}
function bv(e) {
  return e !== void 0 && (e.length === 0 || e === `?` || e === `<anonymous>`);
}
function xv(e, t) {
  return e === t || `Object.${e}` === t || e === `Object.${t}` || (bv(e) && bv(t));
}
var Sv = `LyohIEBzZW50cnkvbm9kZS1jb3JlIDEwLjI5LjAgKDM1MjlkNDYpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPWdsb2JhbFRoaXMsaT17fTtjb25zdCBvPSJfX1NFTlRSWV9FUlJPUl9MT0NBTF9WQVJJQUJMRVNfXyI7Y29uc3QgYT10O2Z1bmN0aW9uIHMoLi4uZSl7YS5kZWJ1ZyYmZnVuY3Rpb24oZSl7aWYoISgiY29uc29sZSJpbiBuKSlyZXR1cm4gZSgpO2NvbnN0IHQ9bi5jb25zb2xlLG89e30sYT1PYmplY3Qua2V5cyhpKTthLmZvckVhY2goZT0+e2NvbnN0IG49aVtlXTtvW2VdPXRbZV0sdFtlXT1ufSk7dHJ5e3JldHVybiBlKCl9ZmluYWxseXthLmZvckVhY2goZT0+e3RbZV09b1tlXX0pfX0oKCk9PmNvbnNvbGUubG9nKCJbTG9jYWxWYXJpYWJsZXMgV29ya2VyXSIsLi4uZSkpfWFzeW5jIGZ1bmN0aW9uIGMoZSx0LG4saSl7Y29uc3Qgbz1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pO2lbbl09by5yZXN1bHQuZmlsdGVyKGU9PiJsZW5ndGgiIT09ZS5uYW1lJiYhaXNOYU4ocGFyc2VJbnQoZS5uYW1lLDEwKSkpLnNvcnQoKGUsdCk9PnBhcnNlSW50KGUubmFtZSwxMCktcGFyc2VJbnQodC5uYW1lLDEwKSkubWFwKGU9PmUudmFsdWU/LnZhbHVlKX1hc3luYyBmdW5jdGlvbiByKGUsdCxuLGkpe2NvbnN0IG89YXdhaXQgZS5wb3N0KCJSdW50aW1lLmdldFByb3BlcnRpZXMiLHtvYmplY3RJZDp0LG93blByb3BlcnRpZXM6ITB9KTtpW25dPW8ucmVzdWx0Lm1hcChlPT5bZS5uYW1lLGUudmFsdWU/LnZhbHVlXSkucmVkdWNlKChlLFt0LG5dKT0+KGVbdF09bixlKSx7fSl9ZnVuY3Rpb24gdShlLHQpe2UudmFsdWUmJigidmFsdWUiaW4gZS52YWx1ZT92b2lkIDA9PT1lLnZhbHVlLnZhbHVlfHxudWxsPT09ZS52YWx1ZS52YWx1ZT90W2UubmFtZV09YDwke2UudmFsdWUudmFsdWV9PmA6dFtlLm5hbWVdPWUudmFsdWUudmFsdWU6ImRlc2NyaXB0aW9uImluIGUudmFsdWUmJiJmdW5jdGlvbiIhPT1lLnZhbHVlLnR5cGU/dFtlLm5hbWVdPWA8JHtlLnZhbHVlLmRlc2NyaXB0aW9ufT5gOiJ1bmRlZmluZWQiPT09ZS52YWx1ZS50eXBlJiYodFtlLm5hbWVdPSI8dW5kZWZpbmVkPiIpKX1hc3luYyBmdW5jdGlvbiBsKGUsdCl7Y29uc3Qgbj1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuZ2V0UHJvcGVydGllcyIse29iamVjdElkOnQsb3duUHJvcGVydGllczohMH0pLGk9e307Zm9yKGNvbnN0IHQgb2Ygbi5yZXN1bHQpaWYodC52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10LnZhbHVlLmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGMoZSxuLHQubmFtZSxpKX1lbHNlIGlmKHQudmFsdWU/Lm9iamVjdElkJiYiT2JqZWN0Ij09PXQudmFsdWUuY2xhc3NOYW1lKXtjb25zdCBuPXQudmFsdWUub2JqZWN0SWQ7YXdhaXQgcihlLG4sdC5uYW1lLGkpfWVsc2UgdC52YWx1ZSYmdSh0LGkpO3JldHVybiBpfWxldCBmOyhhc3luYyBmdW5jdGlvbigpe2NvbnN0IHQ9bmV3IGU7dC5jb25uZWN0VG9NYWluVGhyZWFkKCkscygiQ29ubmVjdGVkIHRvIG1haW4gdGhyZWFkIik7bGV0IG49ITE7dC5vbigiRGVidWdnZXIucmVzdW1lZCIsKCk9PntuPSExfSksdC5vbigiRGVidWdnZXIucGF1c2VkIixlPT57bj0hMCxhc3luYyBmdW5jdGlvbihlLHtyZWFzb246dCxkYXRhOntvYmplY3RJZDpufSxjYWxsRnJhbWVzOml9KXtpZigiZXhjZXB0aW9uIiE9PXQmJiJwcm9taXNlUmVqZWN0aW9uIiE9PXQpcmV0dXJuO2lmKGY/LigpLG51bGw9PW4pcmV0dXJuO2NvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspe2NvbnN0e3Njb3BlQ2hhaW46bixmdW5jdGlvbk5hbWU6byx0aGlzOnN9PWlbdF0sYz1uLmZpbmQoZT0+ImxvY2FsIj09PWUudHlwZSkscj0iZ2xvYmFsIiE9PXMuY2xhc3NOYW1lJiZzLmNsYXNzTmFtZT9gJHtzLmNsYXNzTmFtZX0uJHtvfWA6bztpZih2b2lkIDA9PT1jPy5vYmplY3Qub2JqZWN0SWQpYVt0XT17ZnVuY3Rpb246cn07ZWxzZXtjb25zdCBuPWF3YWl0IGwoZSxjLm9iamVjdC5vYmplY3RJZCk7YVt0XT17ZnVuY3Rpb246cix2YXJzOm59fX1hd2FpdCBlLnBvc3QoIlJ1bnRpbWUuY2FsbEZ1bmN0aW9uT24iLHtmdW5jdGlvbkRlY2xhcmF0aW9uOmBmdW5jdGlvbigpIHsgdGhpcy4ke299ID0gdGhpcy4ke299IHx8ICR7SlNPTi5zdHJpbmdpZnkoYSl9OyB9YCxzaWxlbnQ6ITAsb2JqZWN0SWQ6bn0pLGF3YWl0IGUucG9zdCgiUnVudGltZS5yZWxlYXNlT2JqZWN0Iix7b2JqZWN0SWQ6bn0pfSh0LGUucGFyYW1zKS50aGVuKGFzeW5jKCk9PntuJiZhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnJlc3VtZSIpfSxhc3luYyBlPT57biYmYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5yZXN1bWUiKX0pfSksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5lbmFibGUiKTtjb25zdCBpPSExIT09YS5jYXB0dXJlQWxsRXhjZXB0aW9ucztpZihhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6aT8iYWxsIjoidW5jYXVnaHQifSksaSl7Y29uc3QgZT1hLm1heEV4Y2VwdGlvbnNQZXJTZWNvbmR8fDUwO2Y9ZnVuY3Rpb24oZSx0LG4pe2xldCBpPTAsbz01LGE9MDtyZXR1cm4gc2V0SW50ZXJ2YWwoKCk9PnswPT09YT9pPmUmJihvKj0yLG4obyksbz44NjQwMCYmKG89ODY0MDApLGE9byk6KGEtPTEsMD09PWEmJnQoKSksaT0wfSwxZTMpLnVucmVmKCksKCk9PntpKz0xfX0oZSxhc3luYygpPT57cygiUmF0ZS1saW1pdCBsaWZ0ZWQuIiksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJhbGwifSl9LGFzeW5jIGU9PntzKGBSYXRlLWxpbWl0IGV4Y2VlZGVkLiBEaXNhYmxpbmcgY2FwdHVyaW5nIG9mIGNhdWdodCBleGNlcHRpb25zIGZvciAke2V9IHNlY29uZHMuYCksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJ1bmNhdWdodCJ9KX0pfX0pKCkuY2F0Y2goZT0+e3MoIkZhaWxlZCB0byBzdGFydCBkZWJ1Z2dlciIsZSl9KSxzZXRJbnRlcnZhbCgoKT0+e30sMWU0KTs=`;
function Cv(...e) {
  z.log(`[LocalVariables]`, ...e);
}
var wv = q((e = {}) => {
  function t(t, n) {
    let r = (t.stacktrace?.frames || []).filter((e) => e.function !== `new Promise`);
    for (let t = 0; t < r.length; t++) {
      let i = r.length - t - 1,
        a = n[t],
        o = r[i];
      if (!o || !a) break;
      a.vars === void 0 ||
        (o.in_app === !1 && e.includeOutOfAppFrames !== !0) ||
        !xv(o.function, a.function) ||
        (o.vars = a.vars);
    }
  }
  function n(e, n) {
    if (
      n.originalException &&
      typeof n.originalException == `object` &&
      `__SENTRY_ERROR_LOCAL_VARIABLES__` in n.originalException &&
      Array.isArray(n.originalException.__SENTRY_ERROR_LOCAL_VARIABLES__)
    ) {
      for (let r of e.exception?.values || []) t(r, n.originalException[vv]);
      n.originalException[vv] = void 0;
    }
    return e;
  }
  async function r() {
    let e = await import(`node:inspector`);
    e.url() || e.open(0);
  }
  function i(e) {
    let t = new ie.Worker(new URL(`data:application/javascript;base64,${Sv}`), {
      workerData: e,
      execArgv: [],
      env: { ...process.env, NODE_OPTIONS: void 0 },
    });
    (process.on(`exit`, () => {
      t.terminate();
    }),
      t.once(`error`, (e) => {
        Cv(`Worker error`, e);
      }),
      t.once(`exit`, (e) => {
        Cv(`Worker exit`, e);
      }),
      t.unref());
  }
  return {
    name: `LocalVariablesAsync`,
    async setup(t) {
      if (!t.getOptions().includeLocalVariables) return;
      if (await _v()) {
        z.warn(
          `Local variables capture has been disabled because the debugger was already enabled`,
        );
        return;
      }
      let n = { ...e, debug: z.isEnabled() };
      r().then(
        () => {
          try {
            i(n);
          } catch (e) {
            z.error(`Failed to start worker`, e);
          }
        },
        (e) => {
          z.error(`Failed to start inspector`, e);
        },
      );
    },
    processEvent(e, t) {
      return n(e, t);
    },
  };
});
function Tv(e) {
  if (e !== void 0)
    return e.slice(-10).reduce((e, t) => `${e},${t.function},${t.lineno},${t.colno}`, ``);
}
function Ev(e, t) {
  if (t !== void 0) return Tv(e(t, 1));
}
function Dv(e) {
  let t = [],
    n = !1;
  function r(r) {
    ((t = []), !n && ((n = !0), e(r)));
  }
  t.push(r);
  function i(e) {
    t.push(e);
  }
  function a(e) {
    let n = t.pop() || r;
    try {
      n(e);
    } catch {
      r(e);
    }
  }
  return { add: i, next: a };
}
var Ov = class e {
    constructor(e) {
      this._session = e;
    }
    static async create(t) {
      if (t) return t;
      let n = await import(`node:inspector`);
      return new e(new n.Session());
    }
    configureAndConnect(e, t) {
      (this._session.connect(),
        this._session.on(`Debugger.paused`, (t) => {
          e(t, () => {
            this._session.post(`Debugger.resume`);
          });
        }),
        this._session.post(`Debugger.enable`),
        this._session.post(`Debugger.setPauseOnExceptions`, { state: t ? `all` : `uncaught` }));
    }
    setPauseOnExceptions(e) {
      this._session.post(`Debugger.setPauseOnExceptions`, { state: e ? `all` : `uncaught` });
    }
    getLocalVariables(e, t) {
      this._getProperties(e, (e) => {
        let { add: n, next: r } = Dv(t);
        for (let t of e)
          if (t.value?.objectId && t.value.className === `Array`) {
            let e = t.value.objectId;
            n((n) => this._unrollArray(e, t.name, n, r));
          } else if (t.value?.objectId && t.value.className === `Object`) {
            let e = t.value.objectId;
            n((n) => this._unrollObject(e, t.name, n, r));
          } else t.value && n((e) => this._unrollOther(t, e, r));
        r({});
      });
    }
    _getProperties(e, t) {
      this._session.post(`Runtime.getProperties`, { objectId: e, ownProperties: !0 }, (e, n) => {
        t(e ? [] : n.result);
      });
    }
    _unrollArray(e, t, n, r) {
      this._getProperties(e, (e) => {
        ((n[t] = e
          .filter((e) => e.name !== `length` && !isNaN(parseInt(e.name, 10)))
          .sort((e, t) => parseInt(e.name, 10) - parseInt(t.name, 10))
          .map((e) => e.value?.value)),
          r(n));
      });
    }
    _unrollObject(e, t, n, r) {
      this._getProperties(e, (e) => {
        ((n[t] = e.map((e) => [e.name, e.value?.value]).reduce((e, [t, n]) => ((e[t] = n), e), {})),
          r(n));
      });
    }
    _unrollOther(e, t, n) {
      (e.value &&
        (`value` in e.value
          ? e.value.value === void 0 || e.value.value === null
            ? (t[e.name] = `<${e.value.value}>`)
            : (t[e.name] = e.value.value)
          : `description` in e.value && e.value.type !== `function`
            ? (t[e.name] = `<${e.value.description}>`)
            : e.value.type === `undefined` && (t[e.name] = `<undefined>`)),
        n(t));
    }
  },
  kv = `LocalVariables`,
  Av = q((e = {}, t) => {
    let n = new $m(20),
      r,
      i = !1;
    function a(t) {
      let r = Tv(t.stacktrace?.frames);
      if (r === void 0) return;
      let i = n.remove(r);
      if (i === void 0) return;
      let a = (t.stacktrace?.frames || []).filter((e) => e.function !== `new Promise`);
      for (let t = 0; t < a.length; t++) {
        let n = a.length - t - 1,
          r = i[t],
          o = a[n];
        if (!o || !r) break;
        r.vars === void 0 ||
          (o.in_app === !1 && e.includeOutOfAppFrames !== !0) ||
          !xv(o.function, r.function) ||
          (o.vars = r.vars);
      }
    }
    function o(e) {
      for (let t of e.exception?.values || []) a(t);
      return e;
    }
    let s;
    async function c() {
      let a = U()?.getOptions();
      if (a?.includeLocalVariables) {
        if (E_ < 18) {
          z.log("The `LocalVariables` integration is only supported on Node >= v18.");
          return;
        }
        if (await _v()) {
          z.warn(
            `Local variables capture has been disabled because the debugger was already enabled`,
          );
          return;
        }
        try {
          let o = await Ov.create(t),
            s = (e, { params: { reason: t, data: i, callFrames: a } }, s) => {
              if (t !== `exception` && t !== `promiseRejection`) {
                s();
                return;
              }
              r?.();
              let c = Ev(e, i.description);
              if (c == null) {
                s();
                return;
              }
              let { add: l, next: u } = Dv((e) => {
                (n.set(c, e), s());
              });
              for (let e = 0; e < Math.min(a.length, 5); e++) {
                let { scopeChain: t, functionName: n, this: r } = a[e],
                  i = t.find((e) => e.type === `local`),
                  s = r.className === `global` || !r.className ? n : `${r.className}.${n}`;
                if (i?.object.objectId === void 0)
                  l((t) => {
                    ((t[e] = { function: s }), u(t));
                  });
                else {
                  let t = i.object.objectId;
                  l((n) =>
                    o.getLocalVariables(t, (t) => {
                      ((n[e] = { function: s, vars: t }), u(n));
                    }),
                  );
                }
              }
              u([]);
            },
            c = e.captureAllExceptions !== !1;
          (o.configureAndConnect((e, t) => s(a.stackParser, e, t), c),
            c &&
              (r = yv(
                e.maxExceptionsPerSecond || 50,
                () => {
                  (z.log(`Local variables rate-limit lifted.`), o.setPauseOnExceptions(!0));
                },
                (e) => {
                  (z.log(
                    `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${e} seconds.`,
                  ),
                    o.setPauseOnExceptions(!1));
                },
              )),
            (i = !0));
        } catch (e) {
          z.log("The `LocalVariables` integration failed to start.", e);
        }
      }
    }
    return {
      name: kv,
      setupOnce() {
        s = c();
      },
      async processEvent(e) {
        return (await s, i ? o(e) : e);
      },
      _getCachedFramesCount() {
        return n.size;
      },
      _getFirstCachedFrame() {
        return n.values()[0];
      },
    };
  }),
  jv = (e = {}) => (T_.major < 19 ? Av(e) : wv(e)),
  Mv = 2e3;
function Nv(e) {
  ys(() => {
    console.error(e);
  });
  let t = U();
  if (t === void 0) {
    (ch && z.warn(`No NodeClient was defined, we are exiting the process now.`),
      global.process.exit(1));
    return;
  }
  let n = t.getOptions(),
    r = n?.shutdownTimeout && n.shutdownTimeout > 0 ? n.shutdownTimeout : Mv;
  t.close(r).then(
    (e) => {
      (e ||
        (ch &&
          z.warn(`We reached the timeout for emptying the request buffer, still exiting now!`)),
        global.process.exit(1));
    },
    (e) => {
      ch && z.error(e);
    },
  );
}
var Pv = `OnUnhandledRejection`,
  Fv = [{ name: `AI_NoOutputGeneratedError` }],
  Iv = q((e = {}) => {
    let t = { mode: e.mode ?? `warn`, ignore: [...Fv, ...(e.ignore ?? [])] };
    return {
      name: Pv,
      setup(e) {
        global.process.on(`unhandledRejection`, Bv(e, t));
      },
    };
  });
function Lv(e) {
  if (typeof e != `object` || !e) return { name: ``, message: String(e ?? ``) };
  let t = e;
  return {
    name: typeof t.name == `string` ? t.name : ``,
    message: typeof t.message == `string` ? t.message : String(e),
  };
}
function Rv(e, t) {
  let n = e.name === void 0 || Tc(t.name, e.name, !0),
    r = e.message === void 0 || Tc(t.message, e.message);
  return n && r;
}
function zv(e, t) {
  let n = Lv(t);
  return e.some((e) => Rv(e, n));
}
function Bv(e, t) {
  return function (n, r) {
    if (U() !== e || zv(t.ignore ?? [], n)) return;
    let i = t.mode === `strict` ? `fatal` : `error`,
      a = n && typeof n == `object` ? n._sentry_active_span : void 0;
    ((a ? (e) => Sd(a, e) : (e) => e())(() => {
      cf(n, {
        originalException: r,
        captureContext: { extra: { unhandledPromiseRejection: !0 }, level: i },
        mechanism: { handled: !1, type: `auto.node.onunhandledrejection` },
      });
    }),
      Vv(n, t.mode));
  };
}
function Vv(e, t) {
  let n = `This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:`;
  t === `warn`
    ? ys(() => {
        (console.warn(n), console.error(e && typeof e == `object` && `stack` in e ? e.stack : e));
      })
    : t === `strict` &&
      (ys(() => {
        console.warn(n);
      }),
      Nv(e));
}
var Hv = `ChildProcess`,
  Uv = q((e = {}) => ({
    name: Hv,
    setup() {
      (ne.channel(`child_process`).subscribe((t) => {
        t && typeof t == `object` && `process` in t && Wv(t.process, e);
      }),
        ne.channel(`worker_threads`).subscribe((t) => {
          t && typeof t == `object` && `worker` in t && Gv(t.worker, e);
        }));
    },
  }));
function Wv(e, t) {
  let n = !1,
    r;
  e.on(`spawn`, () => {
    if (e.spawnfile === `/usr/bin/sw_vers`) {
      n = !0;
      return;
    }
    ((r = { spawnfile: e.spawnfile }), t.includeChildProcessArgs && (r.spawnargs = e.spawnargs));
  })
    .on(`exit`, (e) => {
      n ||
        ((n = !0),
        e !== null &&
          e !== 0 &&
          rm({
            category: `child_process`,
            message: `Child process exited with code '${e}'`,
            level: e === 0 ? `info` : `warning`,
            data: r,
          }));
    })
    .on(`error`, (e) => {
      n ||
        ((n = !0),
        rm({
          category: `child_process`,
          message: `Child process errored with '${e.message}'`,
          level: `error`,
          data: r,
        }));
    });
}
function Gv(e, t) {
  let n;
  e.on(`online`, () => {
    n = e.threadId;
  }).on(`error`, (e) => {
    t.captureWorkerErrors === !1
      ? rm({
          category: `worker_thread`,
          message: `Worker thread errored with '${e.message}'`,
          level: `error`,
          data: { threadId: n },
        })
      : cf(e, {
          mechanism: {
            type: `auto.child_process.worker_thread`,
            handled: !1,
            data: { threadId: String(n) },
          },
        });
  });
}
var Kv = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AbstractAsyncHooksContextManager = void 0));
    var t = require("events"),
      n = [`addListener`, `on`, `once`, `prependListener`, `prependOnceListener`];
    e.AbstractAsyncHooksContextManager = class {
      bind(e, n) {
        return n instanceof t.EventEmitter
          ? this._bindEventEmitter(e, n)
          : typeof n == `function`
            ? this._bindFunction(e, n)
            : n;
      }
      _bindFunction(e, t) {
        let n = this,
          r = function (...r) {
            return n.with(e, () => t.apply(this, r));
          };
        return (
          Object.defineProperty(r, "length", {
            enumerable: !1,
            configurable: !0,
            writable: !1,
            value: t.length,
          }),
          r
        );
      }
      _bindEventEmitter(e, t) {
        return this._getPatchMap(t) === void 0
          ? (this._createPatchMap(t),
            n.forEach((n) => {
              t[n] !== void 0 && (t[n] = this._patchAddListener(t, t[n], e));
            }),
            typeof t.removeListener == `function` &&
              (t.removeListener = this._patchRemoveListener(t, t.removeListener)),
            typeof t.off == `function` && (t.off = this._patchRemoveListener(t, t.off)),
            typeof t.removeAllListeners == `function` &&
              (t.removeAllListeners = this._patchRemoveAllListeners(t, t.removeAllListeners)),
            t)
          : t;
      }
      _patchRemoveListener(e, t) {
        let n = this;
        return function (r, i) {
          let a = n._getPatchMap(e)?.[r];
          if (a === void 0) return t.call(this, r, i);
          let o = a.get(i);
          return t.call(this, r, o || i);
        };
      }
      _patchRemoveAllListeners(e, t) {
        let n = this;
        return function (r) {
          let i = n._getPatchMap(e);
          return (
            i !== void 0 &&
              (arguments.length === 0 ? n._createPatchMap(e) : i[r] !== void 0 && delete i[r]),
            t.apply(this, arguments)
          );
        };
      }
      _patchAddListener(e, t, n) {
        let r = this;
        return function (i, a) {
          if (r._wrapped) return t.call(this, i, a);
          let o = r._getPatchMap(e);
          o === void 0 && (o = r._createPatchMap(e));
          let s = o[i];
          s === void 0 && ((s = new WeakMap()), (o[i] = s));
          let c = r.bind(n, a);
          (s.set(a, c), (r._wrapped = !0));
          try {
            return t.call(this, i, c);
          } finally {
            r._wrapped = !1;
          }
        };
      }
      _createPatchMap(e) {
        let t = Object.create(null);
        return ((e[this._kOtListeners] = t), t);
      }
      _getPatchMap(e) {
        return e[this._kOtListeners];
      }
      _kOtListeners = Symbol(`OtListeners`);
      _wrapped = !1;
    };
  }),
  qv = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.AsyncHooksContextManager = void 0));
    var t = O(),
      n = require("async_hooks"),
      r = Kv();
    e.AsyncHooksContextManager = class extends r.AbstractAsyncHooksContextManager {
      _asyncHook;
      _contexts = new Map();
      _stack = [];
      constructor() {
        (super(),
          (this._asyncHook = n.createHook({
            init: this._init.bind(this),
            before: this._before.bind(this),
            after: this._after.bind(this),
            destroy: this._destroy.bind(this),
            promiseResolve: this._destroy.bind(this),
          })));
      }
      active() {
        return this._stack[this._stack.length - 1] ?? t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        this._enterContext(e);
        try {
          return t.call(n, ...r);
        } finally {
          this._exitContext();
        }
      }
      enable() {
        return (this._asyncHook.enable(), this);
      }
      disable() {
        return (this._asyncHook.disable(), this._contexts.clear(), (this._stack = []), this);
      }
      _init(e, t) {
        if (t === `TIMERWRAP`) return;
        let n = this._stack[this._stack.length - 1];
        n !== void 0 && this._contexts.set(e, n);
      }
      _destroy(e) {
        this._contexts.delete(e);
      }
      _before(e) {
        let t = this._contexts.get(e);
        t !== void 0 && this._enterContext(t);
      }
      _after() {
        this._exitContext();
      }
      _enterContext(e) {
        this._stack.push(e);
      }
      _exitContext() {
        this._stack.pop();
      }
    };
  }),
  Jv = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.AsyncLocalStorageContextManager = void 0));
    var t = O(),
      n = require("async_hooks"),
      r = Kv();
    e.AsyncLocalStorageContextManager = class extends r.AbstractAsyncHooksContextManager {
      _asyncLocalStorage;
      constructor() {
        (super(), (this._asyncLocalStorage = new n.AsyncLocalStorage()));
      }
      active() {
        return this._asyncLocalStorage.getStore() ?? t.ROOT_CONTEXT;
      }
      with(e, t, n, ...r) {
        let i = n == null ? t : t.bind(n);
        return this._asyncLocalStorage.run(e, i, ...r);
      }
      enable() {
        return this;
      }
      disable() {
        return (this._asyncLocalStorage.disable(), this);
      }
    };
  }),
  Yv = Zg(
    e.n((e) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AsyncLocalStorageContextManager = e.AsyncHooksContextManager = void 0));
      var t = qv();
      Object.defineProperty(e, "AsyncHooksContextManager", {
        enumerable: !0,
        get: function () {
          return t.AsyncHooksContextManager;
        },
      });
      var n = Jv();
      Object.defineProperty(e, "AsyncLocalStorageContextManager", {
        enumerable: !0,
        get: function () {
          return n.AsyncLocalStorageContextManager;
        },
      });
    })().AsyncLocalStorageContextManager,
  );
function Xv() {
  (Y.diag.disable(),
    Y.diag.setLogger(
      { error: z.error, warn: z.warn, info: z.log, debug: z.log, verbose: z.log },
      Y.DiagLogLevel.DEBUG,
    ));
}
function Zv(e) {
  return e.replace(/^[A-Z]:/, ``).replace(/\\/g, `/`);
}
function Qv(e = process.argv[1] ? Lm(process.argv[1]) : process.cwd(), t = l.sep === `\\`) {
  let n = t ? Zv(e) : e;
  return (e) => {
    if (!e) return;
    let r = t ? Zv(e) : e,
      { dir: i, base: a, ext: o } = l.posix.parse(r);
    (o === `.js` || o === `.mjs` || o === `.cjs`) && (a = a.slice(0, o.length * -1));
    let s = decodeURIComponent(a);
    i ||= `.`;
    let c = i.lastIndexOf(`/node_modules`);
    if (c > -1) return `${i.slice(c + 14).replace(/\//g, `.`)}:${s}`;
    if (i.startsWith(n)) {
      let e = i.slice(n.length + 1).replace(/\//g, `.`);
      return e ? `${e}:${s}` : s;
    }
    return s;
  };
}
ds();
var $v = 6e4,
  ey = class extends Rp {
    constructor(e) {
      let t =
          e.includeServerName === !1
            ? void 0
            : e.serverName || global.process.env.SENTRY_NAME || c.hostname(),
        n = {
          ...e,
          platform: `node`,
          runtime: { name: `node`, version: global.process.version },
          serverName: t,
        };
      (e.openTelemetryInstrumentations && Ma({ instrumentations: e.openTelemetryInstrumentations }),
        Zp(n, `node`),
        z.log(
          `Initializing Sentry: process: ${process.pid}, thread: ${te.isMainThread ? `main` : `worker-${te.threadId}`}.`,
        ),
        super(n),
        this.getOptions().enableLogs &&
          ((this._logOnExitFlushListener = () => {
            Rf(this);
          }),
          t &&
            this.on(`beforeCaptureLog`, (e) => {
              e.attributes = { ...e.attributes, "server.address": t };
            }),
          process.on(`beforeExit`, this._logOnExitFlushListener)));
    }
    get tracer() {
      if (this._tracer) return this._tracer;
      let e = fs,
        t = Y.trace.getTracer(`@sentry/node`, e);
      return ((this._tracer = t), t);
    }
    async flush(e) {
      return (
        await this.traceProvider?.forceFlush(),
        this.getOptions().sendClientReports && this._flushOutcomes(),
        super.flush(e)
      );
    }
    async close(e) {
      (this._clientReportInterval && clearInterval(this._clientReportInterval),
        this._clientReportOnExitFlushListener &&
          process.off(`beforeExit`, this._clientReportOnExitFlushListener),
        this._logOnExitFlushListener && process.off(`beforeExit`, this._logOnExitFlushListener));
      let t = await super.close(e);
      return (this.traceProvider && (await this.traceProvider.shutdown()), t);
    }
    startClientReportTracking() {
      let e = this.getOptions();
      e.sendClientReports &&
        ((this._clientReportOnExitFlushListener = () => {
          this._flushOutcomes();
        }),
        (this._clientReportInterval = setInterval(() => {
          (ch && z.log(`Flushing client reports based on interval.`), this._flushOutcomes());
        }, e.clientReportFlushInterval ?? $v).unref()),
        process.on(`beforeExit`, this._clientReportOnExitFlushListener));
    }
    _setupIntegrations() {
      (Wp(), super._setupIntegrations());
    }
    _getTraceInfoFromScope(e) {
      return e ? Kg(this, e) : [void 0, void 0];
    }
  },
  ty = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PACKAGE_NAME = e.PACKAGE_VERSION = void 0),
      (e.PACKAGE_VERSION = `0.19.0`),
      (e.PACKAGE_NAME = `@opentelemetry/instrumentation-undici`));
  }),
  ny = e.n((t) => {
    (Object.defineProperty(t, "__esModule", { value: !0 }), (t.UndiciInstrumentation = void 0));
    var n = require("diagnostics_channel"),
      r = require("url"),
      i = (ds(), e.a(us)),
      a = O(),
      o = (P(), e.a(aa)),
      s = dr(),
      c = ty();
    t.UndiciInstrumentation = class extends i.InstrumentationBase {
      _recordFromReq = new WeakMap();
      constructor(e = {}) {
        super(c.PACKAGE_NAME, c.PACKAGE_VERSION, e);
      }
      init() {}
      disable() {
        (super.disable(),
          this._channelSubs.forEach((e) => e.unsubscribe()),
          (this._channelSubs.length = 0));
      }
      enable() {
        (super.enable(),
          (this._channelSubs = this._channelSubs || []),
          !(this._channelSubs.length > 0) &&
            (this.subscribeToChannel(`undici:request:create`, this.onRequestCreated.bind(this)),
            this.subscribeToChannel(`undici:client:sendHeaders`, this.onRequestHeaders.bind(this)),
            this.subscribeToChannel(`undici:request:headers`, this.onResponseHeaders.bind(this)),
            this.subscribeToChannel(`undici:request:trailers`, this.onDone.bind(this)),
            this.subscribeToChannel(`undici:request:error`, this.onError.bind(this))));
      }
      _updateMetricInstruments() {
        this._httpClientDurationHistogram = this.meter.createHistogram(
          s.METRIC_HTTP_CLIENT_REQUEST_DURATION,
          {
            description: `Measures the duration of outbound HTTP requests.`,
            unit: `s`,
            valueType: a.ValueType.DOUBLE,
            advice: {
              explicitBucketBoundaries: [
                0.005, 0.01, 0.025, 0.05, 0.075, 0.1, 0.25, 0.5, 0.75, 1, 2.5, 5, 7.5, 10,
              ],
            },
          },
        );
      }
      subscribeToChannel(e, t) {
        let [r, i] = process.version
            .replace(`v`, ``)
            .split(`.`)
            .map((e) => Number(e)),
          a = r > 18 || (r === 18 && i >= 19),
          o;
        if (a) (n.subscribe?.(e, t), (o = () => n.unsubscribe?.(e, t)));
        else {
          let r = n.channel(e);
          (r.subscribe(t), (o = () => r.unsubscribe(t)));
        }
        this._channelSubs.push({ name: e, unsubscribe: o });
      }
      parseRequestHeaders(e) {
        let t = new Map();
        if (Array.isArray(e.headers))
          for (let n = 0; n < e.headers.length; n += 2) {
            let r = e.headers[n],
              i = e.headers[n + 1];
            typeof r == `string` && t.set(r.toLowerCase(), i);
          }
        else if (typeof e.headers == `string`) {
          let n = e.headers.split(`\r
`);
          for (let e of n) {
            if (!e) continue;
            let n = e.indexOf(`:`);
            if (n === -1) continue;
            let r = e.substring(0, n).toLowerCase(),
              i = e.substring(n + 1).trim(),
              a = t.get(r);
            a && Array.isArray(a) ? a.push(i) : a ? t.set(r, [a, i]) : t.set(r, i);
          }
        }
        return t;
      }
      onRequestCreated({ request: e }) {
        let t = this.getConfig(),
          n = t.enabled !== !1;
        if (
          (0, i.safeExecuteInTheMiddle)(
            () => !n || e.method === `CONNECT` || t.ignoreRequestHook?.(e),
            (e) => e && this._diag.error(`caught ignoreRequestHook error: `, e),
            !0,
          )
        )
          return;
        let c = (0, o.hrTime)(),
          l;
        try {
          l = new r.URL(e.path, e.origin);
        } catch (e) {
          this._diag.warn(`could not determine url.full:`, e);
          return;
        }
        let u = l.protocol.replace(`:`, ``),
          d = this.getRequestMethod(e.method),
          f = {
            [s.ATTR_HTTP_REQUEST_METHOD]: d,
            [s.ATTR_HTTP_REQUEST_METHOD_ORIGINAL]: e.method,
            [s.ATTR_URL_FULL]: l.toString(),
            [s.ATTR_URL_PATH]: l.pathname,
            [s.ATTR_URL_QUERY]: l.search,
            [s.ATTR_URL_SCHEME]: u,
          },
          p = { https: `443`, http: `80` },
          m = l.hostname,
          h = l.port || p[u];
        ((f[s.ATTR_SERVER_ADDRESS] = m),
          h && !isNaN(Number(h)) && (f[s.ATTR_SERVER_PORT] = Number(h)));
        let g = this.parseRequestHeaders(e).get(`user-agent`);
        if (g) {
          let e = Array.isArray(g) ? g[g.length - 1] : g;
          f[s.ATTR_USER_AGENT_ORIGINAL] = e;
        }
        let _ = (0, i.safeExecuteInTheMiddle)(
          () => t.startSpanHook?.(e),
          (e) => e && this._diag.error(`caught startSpanHook error: `, e),
          !0,
        );
        _ &&
          Object.entries(_).forEach(([e, t]) => {
            f[e] = t;
          });
        let v = a.context.active(),
          y = a.trace.getSpan(v),
          b;
        ((b =
          t.requireParentforSpans && (!y || !a.trace.isSpanContextValid(y.spanContext()))
            ? a.trace.wrapSpanContext(a.INVALID_SPAN_CONTEXT)
            : this.tracer.startSpan(
                d === `_OTHER` ? `HTTP` : d,
                { kind: a.SpanKind.CLIENT, attributes: f },
                v,
              )),
          (0, i.safeExecuteInTheMiddle)(
            () => t.requestHook?.(b, e),
            (e) => e && this._diag.error(`caught requestHook error: `, e),
            !0,
          ));
        let x = a.trace.setSpan(a.context.active(), b),
          S = {};
        a.propagation.inject(x, S);
        let C = Object.entries(S);
        for (let t = 0; t < C.length; t++) {
          let [n, r] = C[t];
          typeof e.addHeader == `function`
            ? e.addHeader(n, r)
            : typeof e.headers == `string`
              ? (e.headers += `${n}: ${r}\r\n`)
              : Array.isArray(e.headers) && e.headers.push(n, r);
        }
        this._recordFromReq.set(e, { span: b, attributes: f, startTime: c });
      }
      onRequestHeaders({ request: e, socket: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let r = this.getConfig(),
          { span: i } = n,
          { remoteAddress: a, remotePort: o } = t,
          c = { [s.ATTR_NETWORK_PEER_ADDRESS]: a, [s.ATTR_NETWORK_PEER_PORT]: o };
        if (r.headersToSpanAttributes?.requestHeaders) {
          let t = new Set(r.headersToSpanAttributes.requestHeaders.map((e) => e.toLowerCase())),
            n = this.parseRequestHeaders(e);
          for (let [e, r] of n.entries())
            if (t.has(e)) {
              let t = Array.isArray(r) ? r.join(`, `) : r;
              c[`http.request.header.${e}`] = t;
            }
        }
        i.setAttributes(c);
      }
      onResponseHeaders({ request: e, response: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let { span: r, attributes: o } = n,
          c = { [s.ATTR_HTTP_RESPONSE_STATUS_CODE]: t.statusCode },
          l = this.getConfig();
        (0, i.safeExecuteInTheMiddle)(
          () => l.responseHook?.(r, { request: e, response: t }),
          (e) => e && this._diag.error(`caught responseHook error: `, e),
          !0,
        );
        let u = new Set();
        l.headersToSpanAttributes?.responseHeaders &&
          l.headersToSpanAttributes?.responseHeaders.forEach((e) => u.add(e.toLowerCase()));
        for (let e = 0; e < t.headers.length; e += 2) {
          let n = t.headers[e].toString().toLowerCase(),
            r = t.headers[e + 1];
          if (
            (u.has(n) && (c[`http.response.header.${n}`] = r.toString()), n === `content-length`)
          ) {
            let e = Number(r.toString());
            isNaN(e) || (c[`http.response.header.content-length`] = e);
          }
        }
        (r.setAttributes(c),
          r.setStatus({
            code: t.statusCode >= 400 ? a.SpanStatusCode.ERROR : a.SpanStatusCode.UNSET,
          }),
          (n.attributes = Object.assign(o, c)));
      }
      onDone({ request: e }) {
        let t = this._recordFromReq.get(e);
        if (!t) return;
        let { span: n, attributes: r, startTime: i } = t;
        (n.end(), this._recordFromReq.delete(e), this.recordRequestDuration(r, i));
      }
      onError({ request: e, error: t }) {
        let n = this._recordFromReq.get(e);
        if (!n) return;
        let { span: r, attributes: i, startTime: o } = n;
        (r.recordException(t),
          r.setStatus({ code: a.SpanStatusCode.ERROR, message: t.message }),
          r.end(),
          this._recordFromReq.delete(e),
          (i[s.ATTR_ERROR_TYPE] = t.message),
          this.recordRequestDuration(i, o));
      }
      recordRequestDuration(e, t) {
        let n = {};
        [
          s.ATTR_HTTP_RESPONSE_STATUS_CODE,
          s.ATTR_HTTP_REQUEST_METHOD,
          s.ATTR_SERVER_ADDRESS,
          s.ATTR_SERVER_PORT,
          s.ATTR_URL_SCHEME,
          s.ATTR_ERROR_TYPE,
        ].forEach((t) => {
          t in e && (n[t] = e[t]);
        });
        let r = (0, o.hrTimeToMilliseconds)((0, o.hrTimeDuration)(t, (0, o.hrTime)())) / 1e3;
        this._httpClientDurationHistogram.record(r, n);
      }
      getRequestMethod(e) {
        return e.toUpperCase() in
          {
            CONNECT: !0,
            OPTIONS: !0,
            HEAD: !0,
            GET: !0,
            POST: !0,
            PUT: !0,
            PATCH: !0,
            DELETE: !0,
            TRACE: !0,
          }
          ? e.toUpperCase()
          : `_OTHER`;
      }
    };
  }),
  ry = e.n((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.UndiciInstrumentation = void 0));
    var t = ny();
    Object.defineProperty(e, "UndiciInstrumentation", {
      enumerable: !0,
      get: function () {
        return t.UndiciInstrumentation;
      },
    });
  })(),
  iy = `NodeFetch`,
  ay = ah(iy, ry.UndiciInstrumentation, (e) => uy(e)),
  oy = ah(`${iy}.sentry`, j_, (e) => e),
  sy = q((e = {}) => ({
    name: `NodeFetch`,
    setupOnce() {
      (ly(e, U()?.getOptions()) && ay(e), oy(e));
    },
  }));
function cy(e, t = `/`) {
  let n = `${e}`;
  return n.endsWith(`/`) && t.startsWith(`/`)
    ? `${n}${t.slice(1)}`
    : !n.endsWith(`/`) && !t.startsWith(`/`)
      ? `${n}/${t.slice(1)}`
      : `${n}${t}`;
}
function ly(e, t = {}) {
  return typeof e.spans == `boolean` ? e.spans : !t.skipOpenTelemetrySetup && wu(t);
}
function uy(e = {}) {
  return {
    requireParentforSpans: !1,
    ignoreRequestHook: (t) => {
      let n = cy(t.origin, t.path),
        r = e.ignoreOutgoingRequests;
      return !!(r && n && r(n));
    },
    startSpanHook: () => ({ [vl]: `auto.http.otel.node_fetch` }),
    requestHook: e.requestHook,
    responseHook: e.responseHook,
  };
}
var dy = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  fy = 1e6;
function py(e, t = {}) {
  (e.getOptions().debug && Xv(), (e.traceProvider = my(e, t)));
}
function my(e, t = {}) {
  let n = new Bh({
    sampler: new y_(e),
    resource: ph().merge(
      fh({
        [X.ATTR_SERVICE_NAME]: `node`,
        [X.SEMRESATTRS_SERVICE_NAMESPACE]: `sentry`,
        [X.ATTR_SERVICE_VERSION]: fs,
      }),
    ),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new v_({ timeout: hy(e.getOptions().maxSpanWaitDuration) }),
      ...(t.spanProcessors || []),
    ],
  });
  return (
    Y.trace.setGlobalTracerProvider(n),
    Y.propagation.setGlobalPropagator(new Tg()),
    Y.context.setGlobalContextManager(new Yv()),
    n
  );
}
function hy(e) {
  if (e != null) {
    if (e > fy)
      return (
        dy && z.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${fy}`), fy
      );
    if (e <= 0 || Number.isNaN(e)) {
      dy && z.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
      return;
    }
    return e;
  }
}
var gy;
function _y() {
  if (gy) return;
  let e = (gy = new Map());
  function t(t, n) {
    let r = e.get(t) || { id: t };
    ((r.url = K(n, o.app.getAppPath())), e.set(t, r));
  }
  function n(t, n) {
    let r = e.get(t) || { id: t };
    ((r.title = n), e.set(t, r));
  }
  o.app.on(`web-contents-created`, (r, i) => {
    let a = i.id;
    (i.on(`did-navigate`, (e, n) => t(a, n)),
      i.on(`did-navigate-in-page`, (e, n) => t(a, n)),
      i.on(`page-title-updated`, (e, t) => n(a, t)),
      i.on(`destroyed`, () => {
        setTimeout(() => {
          e.delete(a);
        }, 5e3);
      }));
  });
}
function vy(e) {
  return gy?.get(e);
}
var yy = {
  app: (e) => !e.startsWith(`remote-`),
  autoUpdater: () => !0,
  webContents: (e) => [`dom-ready`, `context-menu`, `load-url`, `destroyed`].includes(e),
  browserWindow: (e) =>
    [
      `closed`,
      `close`,
      `unresponsive`,
      `responsive`,
      `show`,
      `blur`,
      `focus`,
      `hide`,
      `maximize`,
      `minimize`,
      `restore`,
      `enter-full-screen`,
      `leave-full-screen`,
    ].includes(e),
  screen: () => !0,
  powerMonitor: () => !0,
  captureWindowTitles: !1,
};
function by(e) {
  return Object.keys(e).reduce((t, n) => {
    if (n === `captureWindowTitles`) t[n] = !!e[n];
    else {
      let r = e[n];
      Array.isArray(r)
        ? (t[n] = (e) => r.includes(e))
        : (typeof r == `function` || r === !1) && (t[n] = r);
    }
    return t;
  }, {});
}
var xy = q((e = {}) => {
    let t = { ...yy, ...by(e) };
    return {
      name: `ElectronBreadcrumbs`,
      setup(e) {
        let n = e.getOptions(),
          r = !!n?.enableLogs;
        function i(e, n, i, a) {
          let o = e.emit.bind(e);
          e.emit = (e, ...s) => {
            if (i && i(e)) {
              let i = {
                category: `electron`,
                message: `${n}.${e}`,
                timestamp: new Date().getTime() / 1e3,
                type: `ui`,
              };
              (a &&
                ((i.data = { ...vy(a) }),
                !t.captureWindowTitles && i.data?.title && delete i.data?.title),
                rm(i));
              let o = { "sentry.origin": `auto.electron.events` };
              (i.data?.id && (o.id = i.data.id),
                i.data?.url && (o.url = i.data.url),
                r && th(Yp`electron.${n}.${e}`, o));
            }
            return o(e, ...s);
          };
        }
        (_y(),
          o.app.whenReady().then(
            () => {
              (t.screen && i(o.screen, `screen`, t.screen),
                t.powerMonitor && i(o.powerMonitor, `powerMonitor`, t.powerMonitor));
            },
            () => {},
          ),
          t.app && i(o.app, `app`, t.app),
          t.autoUpdater && i(o.autoUpdater, `autoUpdater`, t.autoUpdater),
          t.browserWindow &&
            o.app.on(`browser-window-created`, (e, r) => {
              let a = r.webContents.id;
              i(r, n?.getRendererName?.(r.webContents) || `window`, t.browserWindow, a);
            }),
          t.webContents &&
            o.app.on(`web-contents-created`, (e, r) => {
              let a = r.id;
              i(r, n?.getRendererName?.(r) || `renderer`, t.webContents, a);
            }));
      },
    };
  }),
  Sy = q(() => ({
    name: `OnUncaughtException`,
    setup(e) {
      let t = e.getOptions();
      global.process.on(`uncaughtException`, (n) => {
        (cf(n, {
          originalException: n,
          captureContext: { level: `fatal` },
          data: { mechanism: { handled: !1, type: `generic` } },
        }),
          e.flush(t.shutdownTimeout || 2e3).then(
            () => {
              if (t?.onFatalError) t.onFatalError(n);
              else if (global.process.listenerCount(`uncaughtException`) <= 2) {
                (console.error(`Uncaught Exception:`), console.error(n));
                let e = n.stack,
                  t = `Uncaught Exception:\n${e === void 0 ? `${n.name}: ${n.message}` : e}`;
                o.dialog.showErrorBox(`A JavaScript error occurred in the main process`, t);
              }
            },
            () => {},
          ));
      });
    },
  }));
function Cy() {
  let e = fl().getScopeData(),
    t = H().getScopeData(),
    n = V().getScopeData();
  return (Rd(e, t), Rd(e, n), (e.eventProcessors = []), e);
}
function wy(e) {
  (H().addScopeListener((t) => {
    e(Cy(), t);
  }),
    V().addScopeListener((t) => {
      e(Cy(), t);
    }),
    fl().addScopeListener((t) => {
      e(Cy(), t);
    }));
}
var Ty = `7.5.0`,
  Ey = `sentry.javascript.electron`;
function Dy(e) {
  return {
    name: Ey,
    packages: [{ name: `npm:@sentry/electron`, version: Ty }],
    version: Ty,
    settings: { infer_ip: e ? `auto` : `never` },
  };
}
function Oy() {
  return `${(o.app.name || o.app.getName()).replace(/\W/g, `-`)}@${o.app.getVersion()}`;
}
function ky() {
  return o.app.isPackaged ? `production` : `development`;
}
async function Ay(e) {
  let t = { message: `test` },
    n = {};
  for (let r of e.getEventProcessors()) {
    if (t === null) break;
    t = await r(t, n);
  }
  return (delete t?.message, t || {});
}
var jy;
(function (e) {
  ((e[(e.Classic = 1)] = `Classic`),
    (e[(e.Protocol = 2)] = `Protocol`),
    (e[(e.Both = 3)] = `Both`));
})((jy ||= {}));
function My(e) {
  return {
    createUrl: (t) => `${e}://${t}/sentry_key`,
    urlMatches: function (e, t) {
      return e.startsWith(this.createUrl(t));
    },
    createKey: (t) => `${e}.${t}`,
    namespace: e,
  };
}
var Ny = `sentry-electron-renderer-id`,
  Py = `__sentry_message_port_message__`;
function Fy(e) {
  return !!(e && typeof e == `object` && Py in e);
}
function Iy() {
  return { [Py]: !0 };
}
var Ly = Ic(process.versions.electron),
  Ry = { major: Ly.major || 0, minor: Ly.minor || 0, patch: Ly.patch || 0 },
  zy = Ry.major,
  By = [
    `clean-exit`,
    `abnormal-exit`,
    `killed`,
    `crashed`,
    `oom`,
    `launch-failed`,
    `integrity-failure`,
  ];
function Vy() {
  return (0, s.join)(o.app.getPath(`userData`), `sentry`);
}
function Hy() {
  return Ry.major >= 25;
}
function Uy(e, t, n) {
  Hy()
    ? e.handle(
        t,
        async (e) => (
          n({
            windowId: e.headers.get(`sentry-electron-renderer-id`) || void 0,
            url: e.url,
            body: Buffer.from(await e.arrayBuffer()),
          }),
          new Response(``)
        ),
      )
    : e.registerStringProtocol(t, (e, t) => {
        (n({ windowId: e.headers[Ny], url: e.url, body: e.uploadData?.[0]?.bytes }), t(``));
      });
}
function Wy(e, t) {
  if (e.registerPreloadScript) e.registerPreloadScript({ type: `frame`, filePath: t });
  else {
    let n = e.getPreloads();
    e.setPreloads([t, ...n]);
  }
}
var Gy = class {
    constructor() {
      ((this._entries = []), (this._waiters = []), (this._value = 1));
    }
    async runExclusive(e) {
      let t = await this._acquire();
      try {
        return await e();
      } finally {
        t();
      }
    }
    _acquire() {
      return new Promise((e, t) => {
        (this._entries.push({ resolve: e, reject: t }), this._dispatch());
      });
    }
    _release() {
      ((this._value += 1), this._dispatch());
    }
    _dispatch() {
      for (let e = this._value; e > 0; e--) {
        let t = this._entries?.shift();
        t && ((this._value -= e), (e = this._value + 1), t.resolve(this._newReleaser()));
      }
      this._drainUnlockWaiters();
    }
    _newReleaser() {
      let e = !1;
      return () => {
        e || ((e = !0), this._release());
      };
    }
    _drainUnlockWaiters() {
      for (let e = this._value; e > 0; e--)
        this._waiters[e - 1] && (this._waiters.forEach((e) => e()), (this._waiters = []));
    }
  },
  Ky = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.*\d{0,10}Z$/;
function qy(e, t) {
  return typeof t == `string` && Ky.test(t) ? new Date(t) : t;
}
var Jy = class {
    constructor(e, t, n) {
      ((this._lock = new Gy()), (this._path = (0, s.join)(e, `${t}.json`)), (this._initial = n));
    }
    async set(e) {
      await this._lock.runExclusive(async () => {
        this._data = e;
        try {
          if (e === void 0)
            try {
              await h.promises.unlink(this._path);
            } catch {}
          else
            (await h.promises.mkdir((0, s.dirname)(this._path), { recursive: !0 }),
              await h.promises.writeFile(this._path, JSON.stringify(e)));
        } catch (e) {
          z.warn(`Failed to write to store`, e);
        }
      });
    }
    async get() {
      return this._lock.runExclusive(async () => {
        if (this._data === void 0)
          try {
            this._data = JSON.parse(await h.promises.readFile(this._path, `utf8`), qy);
          } catch {
            this._data = this._initial;
          }
        return this._data;
      });
    }
    async update(e) {
      await this.set(e(await this.get()));
    }
    async clear() {
      await this.set(this._initial);
    }
    async getModifiedDate() {
      try {
        return (await h.promises.stat(this._path))?.mtime;
      } catch {
        return;
      }
    }
  },
  Yy = class extends Jy {
    constructor(e, t, n, r = 500) {
      (super(e, t, n), (this._throttleTime = r));
    }
    async set(e) {
      ((this._data = e),
        (this._pendingWrite = {
          data: e,
          timeout:
            this._pendingWrite?.timeout ||
            setTimeout(() => this._writePending(), this._throttleTime),
        }));
    }
    _writePending() {
      if (this._pendingWrite) {
        let e = this._pendingWrite.data;
        ((this._pendingWrite = void 0), super.set(e).catch(() => {}));
      }
    }
  },
  Xy = 6e4,
  Zy,
  Qy;
function $y() {
  return (
    Zy || ((Zy = new Jy(Vy(), `session`, void 0)), (Qy = Zy.get().then((e) => e && Wc(e)))), Zy
  );
}
function eb(e) {
  let t = { ...e };
  return (delete t.toJSON, t);
}
var tb;
function nb(e) {
  let t = hf();
  (e && vf(),
    $y()
      .set(eb(t))
      .catch(() => {}),
    (tb = setInterval(async () => {
      let e = H().getSession();
      e && e.status === `ok` && (await $y().set(eb(e)));
    }, Xy)));
}
async function rb() {
  tb && clearInterval(tb);
  let e = H().getSession();
  (e
    ? e.status === `ok`
      ? (z.log(`Ending session`), gf())
      : z.log(`Session was already ended`)
    : z.log(`No session`),
    await $y().clear(),
    await pf(2e3));
}
async function ib() {
  let e = await Qy,
    t = H(),
    n = t.getSession();
  return (e && ((Qy = void 0), e.status === `ok` && t.setSession(Wc(e))), n);
}
function ab(e) {
  H().setSession(e);
}
async function ob() {
  let e = U(),
    t = await Qy;
  if (t && e) {
    if (t.status !== `ok`) {
      Qy = void 0;
      return;
    }
    z.log(`Found previous abnormal session`);
    let n = Wc(t);
    (Gc(n, {
      status: `abnormal`,
      errors: (n.errors || 0) + 1,
      release: t.attrs?.release,
      environment: t.attrs?.environment,
    }),
      await e.sendSession(n),
      (Qy = void 0));
  }
}
function sb() {
  tb && clearInterval(tb);
  let e = H().getSession();
  e &&
    e.status === `ok` &&
    (z.log(`Setting session as abnormal ANR`),
    Gc(e, { status: `abnormal`, abnormal_mechanism: `anr_foreground` }),
    vf());
}
function cb() {
  o.app.on(`before-quit`, () => {
    (o.app.removeListener(`will-quit`, lb), o.app.on(`will-quit`, lb));
  });
}
var lb = async (e) => {
    if (!e.defaultPrevented) {
      (z.log(`[Session] Exit Handler`), e.preventDefault());
      try {
        await rb();
      } catch (e) {
        z.warn(`[Session] Error ending session:`, e);
      }
      o.app.exit();
    }
  },
  ub = `MDMP`;
function db(e) {
  return {
    signature: e.subarray(0, 4).toString(),
    version: e.readUInt32LE(4),
    streamCount: e.readUInt32LE(8),
    streamDirectoryRva: e.readUInt32LE(12),
    checksum: e.readUInt32LE(16),
    timeDateStamp: new Date(e.readUInt32LE(20) * 1e3),
    flags: e.readBigUInt64LE(24),
  };
}
function fb(e, t) {
  return { dataSize: e.readUInt32LE(t), rva: e.readUInt32LE(t + 4) };
}
function pb(e, t) {
  return { streamType: e.readUInt32LE(t), location: fb(e, t + 4) };
}
function mb(e, t) {
  return e.subarray(t.rva, t.rva + t.dataSize);
}
function hb(e, t) {
  return fb(e, t + 20);
}
function gb(e, t) {
  let n = e.readUInt32LE(t);
  return e.toString(`utf8`, t + 4, t + 4 + n);
}
function _b(e, t, n) {
  let r = e.readUInt32LE(n),
    i = e.readUInt16LE(n + 4),
    a = e.readUInt32LE(n + 8);
  if (i === 1) return { name: gb(t, r), value: gb(t, a) };
}
function vb(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = hb(n, 0),
    i = e.subarray(r.rva, r.rva + r.dataSize),
    a = i.readUInt32LE(0),
    o = 4,
    s = {};
  for (let t = 0; t < a; t++) {
    let t = _b(i, e, o);
    if (t) {
      let { name: e, value: n } = t;
      s[e] = n;
    }
    o += 12;
  }
  return s;
}
function yb(e, t) {
  let n = e.subarray(t.rva, t.rva + t.dataSize);
  if (n.length === 0) return {};
  let r = n.readUInt32LE(0),
    i = 4,
    a = {};
  for (let t = 0; t < r; t++) {
    let t = fb(n, i + 4);
    ((a = { ...a, ...vb(e, t) }), (i += 12));
  }
  return a;
}
function bb(e, t) {
  return yb(e, fb(t, 44));
}
function xb(e) {
  if (e.length < 1e4) throw Error(`Minidump was less than 10KB so likely incomplete.`);
  let t;
  try {
    t = db(e);
  } catch {
    throw Error(`Failed to parse minidump header`);
  }
  if (t.signature !== `MDMP`) throw Error(`Minidump signature was not '${ub}'`);
  try {
    for (let n = 0; n < t.streamCount; n++) {
      let r = pb(e, t.streamDirectoryRva + n * 12);
      if (r.streamType === 1129316353) {
        let n = bb(e, mb(e, r.location));
        return { header: t, crashpadAnnotations: n };
      }
    }
  } catch {}
  return { header: t };
}
var Sb = 30,
  Cb = 24 * 3600 * 1e3,
  wb = 1e3,
  Tb = 5e3,
  Eb = 500,
  Db = Tb / Eb;
function Ob(e) {
  return new Promise((t) => setTimeout(t, e));
}
function kb(e) {
  let t = new Gy();
  return async (n, r) => {
    await t.runExclusive(async () => {
      for (let t of await e())
        try {
          if (n) continue;
          z.log(`Found minidump`, t);
          let e = await h.promises.stat(t),
            i = new Date().getTime() - Sb * Cb;
          if (e.mtimeMs < i) {
            z.log(`Ignoring minidump as it is over ${Sb} days old`);
            continue;
          }
          let a = 0;
          for (; a <= Db;) {
            let n = new Date().getTime() - wb;
            if (e.mtimeMs < n) {
              let e = await h.promises.readFile(t);
              try {
                let n = xb(e);
                (z.log(`Sending minidump`),
                  await r(n, {
                    attachmentType: `event.minidump`,
                    filename: (0, s.basename)(t),
                    data: e,
                  }));
              } catch (e) {
                let t = e instanceof Error ? e.toString() : `Unknown error`;
                z.warn(`Dropping minidump:\n${t}`);
                break;
              }
              break;
            }
            (z.log(`Waiting. Minidump has been modified in the last ${wb} milliseconds.`),
              (a += 1),
              await Ob(Eb),
              (e = await h.promises.stat(t)));
          }
          a >= Db && z.warn(`Timed out waiting for minidump to stop being modified`);
        } catch (e) {
          z.error(`Failed to load minidump`, e);
        } finally {
          try {
            await h.promises.unlink(t);
          } catch {
            z.warn(`Could not delete minidump`, t);
          }
        }
    });
  };
}
async function Ab(e, t = 100) {
  if (t > 2e3) return;
  let n = (0, s.join)(e, `metadata`);
  try {
    (await h.promises.unlink(n), z.log(`Deleted Crashpad metadata file`, n));
  } catch (n) {
    n.code &&
      n.code == `EBUSY` &&
      setTimeout(async () => {
        await Ab(e, t * 2);
      }, t);
  }
}
async function jb(e) {
  let t = [];
  for (let n of e)
    try {
      let e = await h.promises.readdir(n);
      t.push(...e.map((e) => (0, s.join)(n, e)));
    } catch {}
  return t;
}
function Mb() {
  let e = o.app.getPath(`crashDumps`),
    t = [(0, s.join)(e, process.platform === `win32` ? `reports` : `completed`)];
  return (
    (process.platform === `darwin` || process.platform === `linux`) &&
      t.push((0, s.join)(e, `pending`)),
    kb(
      async () => (
        await Ab(e).catch((e) => z.error(e)),
        (await jb(t)).filter((e) => e.endsWith(`.dmp`))
      ),
    )
  );
}
var Nb = q((e = {}) => {
  let t = e.maxMinidumpsPerSession || 10,
    n,
    r,
    i;
  function a() {
    (z.log(`Starting Electron crashReporter`),
      o.crashReporter.start({
        companyName: ``,
        ignoreSystemCrashHandler: !0,
        productName: o.app.name || o.app.getName(),
        submitURL: `https://f.a.k/e`,
        uploadToServer: !1,
        compress: !0,
      }));
  }
  function s(e) {
    function t(t) {
      setImmediate(async () => n?.set({ scope: t, event: await Ay(e) }));
    }
    (wy((e) => {
      t(e);
    }),
      t(Cy()));
  }
  async function c(e, n) {
    t <= 0 && z.log(`Not sending minidumps because the limit has been reached`);
    let r = e.getOptions().enabled === !1 || t <= 0,
      a = !1;
    return (
      await i?.(r, async (e, r) => {
        a = !0;
        let i = e.crashpadAnnotations?.process_type?.replace(`-process`, ``),
          o = await n(i);
        if (e.crashpadAnnotations) {
          let t = Object.entries(e.crashpadAnnotations).reduce(
            (e, [t, n]) => ((e[`crashpad.${t}`] = n), e),
            {},
          );
          o.contexts = { ...o.contexts, electron: { ...o.contexts?.electron, ...t } };
        }
        t > 0 && (--t, uf(o, { attachments: [r] }));
      }),
      a
    );
  }
  async function l(e, t, n, r) {
    let { getRendererName: i } = t;
    await c(e, (e) => {
      let t = (e === `renderer` && i ? i(n) : e) || `unknown`;
      return (
        z.log(`'${t}' process '${r.reason}'`),
        {
          contexts: { electron: { crashed_url: vy(n.id)?.url || `unknown`, details: r } },
          level: `fatal`,
          platform: `native`,
          tags: { "event.environment": `native`, "event.process": t, "exit.reason": r.reason },
        }
      );
    });
  }
  async function u(e, t) {
    (z.log(`${t.type} process has ${t.reason}`),
      await c(e, (e) => ({
        contexts: { electron: { details: t } },
        level: `fatal`,
        platform: `native`,
        tags: {
          "event.environment": `native`,
          "event.process": e || t.type,
          "exit.reason": t.reason,
        },
      })));
  }
  return {
    name: `SentryMinidump`,
    setup(e) {
      if (process.mas) return;
      (a(), (n = new Yy(Vy(), `scope_v3`, { scope: new tl().getScopeData() })), (r = n.get()));
      try {
        i = Mb();
      } catch (e) {
        z.error(`Failed to create minidump loader`, e);
      }
      let t = e.getOptions();
      if ((s(e), !t?.dsn))
        throw Error(`Attempted to enable Electron native crash reporter but no DSN was supplied`);
      (_y(),
        o.app.on(`render-process-gone`, async (n, r, i) => {
          By.includes(i.reason) && (await l(e, t, r, i));
        }),
        o.app.on(`child-process-gone`, async (t, n) => {
          By.includes(n.reason) && (await u(e, n));
        }),
        o.app.on(`diagnostic-minidump-created`, () => {
          c(e, (e) => ({
            level: `fatal`,
            platform: `native`,
            tags: { "event.environment": `native`, "event.process": e || `unknown` },
          })).catch((e) => z.error(`Failed to capture diagnostic minidumps`, e));
        }));
      let d;
      c(e, async (t) => {
        let n = {
            level: `fatal`,
            platform: `native`,
            tags: { "event.environment": `native`, "event.process": t || `unknown` },
          },
          i = await r;
        return (
          i &&
            (i.scope && Ld(n, i.scope),
            (n.release = i.event?.release),
            (n.environment = i.event?.environment),
            (n.contexts = i.event?.contexts),
            (n.sdkProcessingMetadata = {
              dynamicSamplingContext: {
                trace_id: i.scope.propagationContext.traceId,
                release: i.event?.release,
                environment: i.event?.environment,
                public_key: e.getDsn()?.publicKey,
              },
            })),
          (d = await ib()),
          n
        );
      })
        .then(async (e) => {
          e ? d && ab(d) : await ob();
        })
        .catch((e) => z.error(e));
    },
  };
});
function Pb(e) {
  (delete e.sdkProcessingMetadata?.capturedSpanScope,
    delete e.sdkProcessingMetadata?.capturedSpanIsolationScope);
  for (let t of e.spans || []) delete t.spanRecorder;
}
function Fb(e, t) {
  Pb(t);
  let n = {
    ...e,
    ...t,
    contexts: {
      ...e.contexts,
      ...t.contexts,
      app: { ...e.contexts?.app, ...t.contexts?.app },
      device: { ...e.contexts?.device, ...t.contexts?.device },
    },
    tags: { ...e.tags, ...t.tags },
    sdk: { ...e.sdk, ...t.sdk },
  };
  return ((e.extra || t.extra) && (n.extra = { ...e.extra, ...t.extra }), n);
}
var Ib = Qv(o.app.getAppPath());
function Lb(e, t) {
  for (let n of e.exception?.values || [])
    for (let e of n.stacktrace?.frames || []) e.filename &&= K(e.filename, t);
  for (let n of e.debug_meta?.images || [])
    n.type === `sourcemap` && (n.code_file = K(n.code_file, t));
  e.transaction &&= K(e.transaction, t);
  let { request: n = {} } = e;
  if (
    ((n.url &&= K(n.url, t)),
    e.contexts?.feedback?.url &&
      typeof e.contexts.feedback.url == `string` &&
      (e.contexts.feedback.url = K(e.contexts.feedback.url, t)),
    e.spans)
  )
    for (let n of e.spans)
      n.description?.startsWith(`file://`) && (n.description = K(n.description, t));
  return e;
}
function Rb(e, t, n) {
  let r = Uu(t[0]),
    i = !1;
  return (
    Gu(t, (t, a) => {
      if (a === `replay_event`) {
        i = !0;
        let [a, o] = t,
          s = V().getScopeData();
        ((o.breadcrumbs = s.breadcrumbs),
          (o.tags = s.tags),
          (o.user = s.user),
          (o.environment = e.environment),
          Array.isArray(o.urls) && (o.urls = o.urls.map((e) => K(e, n))),
          o?.request?.url && (o.request.url = K(o.request.url, n)),
          (r = Wu(r, [a, o])));
      } else a === `replay_recording` && (r = Wu(r, t));
    }),
    i ? r : t
  );
}
function zb(e, t) {
  for (let n of e.profile.frames)
    ((n.abs_path &&= K(n.abs_path, t)),
      `filename` in n && typeof n.filename == `string` && (n.filename = K(n.filename, t)),
      (n.module &&= Ib(n.abs_path)));
}
function Bb(e, t, n) {
  (n.release && (e.release = n.release), n.environment && (e.environment = n.environment));
  let r = e.profile;
  if (r?.frames)
    for (let e of r.frames)
      ((e.abs_path &&= K(e.abs_path, t)),
        (e.filename &&= K(e.filename, t)),
        (e.module &&= Ib(e.abs_path)));
}
function Vb(e, t, n) {
  let [r] = t,
    i = Uu({ ...r, sdk: { name: `sentry.javascript.electron`, version: Ty } }),
    a = !1;
  return (
    Gu(t, (t, r) => {
      if (r === `profile_chunk`) {
        a = !0;
        let [r, o] = t;
        (Bb(o, n, e), (i = Wu(i, [r, o])));
      }
    }),
    a ? i : t
  );
}
function Hb() {
  try {
    return require.resolve(`../../preload/default.js`);
  } catch {
    try {
      return (0, s.resolve)(
        (0, y.fileURLToPath)({}.url),
        `..`,
        `..`,
        `..`,
        `..`,
        `preload`,
        `default.js`,
      );
    } catch {}
  }
}
var Ub = q(() => ({
    name: `PreloadInjection`,
    setup(e) {
      let t = e.getOptions();
      (t.ipcMode & jy.Classic) !== 0 &&
        o.app.once(`ready`, () => {
          let e = Hb();
          if (e && typeof e == `string` && (0, s.isAbsolute)(e) && (0, h.existsSync)(e))
            for (let n of t.getSessions()) Wy(n, e);
          else
            z.log(
              `The preload script could not be injected automatically. This is most likely caused by bundling of the main process`,
            );
        });
    },
  })),
  Wb = q((e = {}) => ({
    name: `MainProcessSession`,
    setup() {
      (nb(!!e.sendOnCreate), cb());
    },
  })),
  Gb = { screen: !0, deviceModelManufacturer: !1 };
function Kb() {
  return new Promise((e) => {
    try {
      (0, m.exec)(
        `powershell -NoProfile "Get-CimInstance -ClassName Win32_ComputerSystem | ConvertTo-Json"`,
        (t, n) => {
          t && e({});
          try {
            let t = JSON.parse(n);
            if (t.Manufacturer || t.Model) {
              e({ manufacturer: t.Manufacturer, model: t.Model });
              return;
            }
          } catch {}
          e({});
        },
      );
    } catch {
      e({});
    }
  });
}
function qb() {
  return new Promise((e) => {
    try {
      (0, m.exec)(`system_profiler SPHardwareDataType -json`, (t, n) => {
        t && e({});
        try {
          let t = JSON.parse(n.trim());
          if (t.SPHardwareDataType?.[0]?.machine_model) {
            e({ manufacturer: `Apple`, model: t.SPHardwareDataType[0].machine_model });
            return;
          }
        } catch {}
        e({});
      });
    } catch {
      e({});
    }
  });
}
function Jb() {
  return process.platform === `win32`
    ? Kb()
    : process.platform === `darwin`
      ? qb()
      : Promise.resolve({});
}
var Yb = q((e = {}) => {
  let t = {},
    n = e.deviceModelManufacturer,
    r = { ...Gb, ...e };
  function i() {
    let e = o.screen.getPrimaryDisplay(),
      n = Math.floor(e.size.width * e.scaleFactor),
      r = Math.floor(e.size.height * e.scaleFactor);
    ((t.screen_density = e.scaleFactor), (t.screen_resolution = `${n}x${r}`));
  }
  async function a() {
    let { manufacturer: e, model: n } = await Jb();
    (e || n) && ((t.manufacturer = e), (t.model = n));
  }
  return {
    name: `AdditionalContext`,
    setup() {
      r.screen &&
        o.app.whenReady().then(
          () => {
            (i(),
              o.screen.on(`display-metrics-changed`, () => {
                i();
              }));
          },
          () => {},
        );
    },
    processEvent: async (e) => (n && ((n = !1), await a()), Fb(e, { contexts: { device: t } })),
  };
});
function Xb(e) {
  let { method: t, options: n } =
      typeof e == `string`
        ? { method: `GET`, options: y.parse(e) }
        : { method: (e.method || `GET`).toUpperCase(), options: e },
    r = `url` in n ? n.url : void 0;
  if (!r) {
    let e = {};
    ((e.protocol = n.protocol || `http:`),
      n.host
        ? (e.host = n.host)
        : (n.hostname ? (e.hostname = n.hostname) : (e.hostname = `localhost`),
          n.port && (e.port = n.port)));
    let t = y.parse(n.path || `/`);
    ((e.pathname = t.pathname), (e.search = t.search), (e.hash = t.hash), (r = y.format(e)));
  }
  return { method: t, url: r };
}
function Zb(e, t, n) {
  let r = new $m(100),
    i = new $m(100),
    a = (t, n) => {
      if (e.tracing === void 0) return !0;
      if (e.tracing === !1) return !1;
      let i = `${t}:${n}`,
        a = r.get(i);
      if (a !== void 0) return a;
      let o = e.tracing === !0 || e.tracing(t, n);
      return (r.set(i, o), o);
    },
    o = (e, t) => {
      let r = `${e}:${t}`,
        a = i.get(r);
      if (a !== void 0) return a;
      if (n) {
        let e = Ec(t, n);
        return (i.set(r, e), e);
      }
      return !0;
    },
    s = (e, n, r, i, a) => {
      let o = Km(a?.statusCode);
      if (
        (rm(
          {
            type: `http`,
            category: `electron.net`,
            data: { url: r, method: n, status_code: a?.statusCode },
            level: o,
          },
          { event: e, request: i, response: a },
        ),
        !t)
      )
        return;
      let s = { "sentry.origin": `auto.electron.net`, statusCode: a?.statusCode };
      switch (o) {
        case `error`:
          rh(Yp`Electron.net request failed: ${n} ${r}`, s);
          break;
        case `warning`:
          nh(Yp`Electron.net request warning: ${n} ${r}`, s);
          break;
        default:
          th(Yp`Electron.net request succeeded: ${n} ${r}`, s);
      }
    };
  return function (t) {
    return function (n) {
      let { url: r, method: i } = Xb(n),
        c = t.apply(this, [n]);
      if (r.match(/sentry_key/) || c.getHeader(`x-sentry-auth`)) return c;
      let l = a(i, r)
        ? xd({
            name: `${i} ${r}`,
            onlyIfParent: !0,
            attributes: { url: r, type: `net.request`, "http.method": i },
            op: `http.client`,
          })
        : new Pu();
      if ((l.setAttribute(vl, `auto.http.electron.net`), o(i, r)))
        for (let [e, t] of Object.entries(Qp({ span: l })))
          (z.log(`[Tracing] Adding ${e} header ${t} to outgoing request to "${r}": `),
            c.setHeader(e, t));
      return c
        .once(`response`, function (t) {
          (e.breadcrumbs !== !1 && s(`response`, i, r, this, t),
            t.statusCode && Tl(l, t.statusCode),
            l.end());
        })
        .once(`error`, function (t) {
          (e.breadcrumbs !== !1 && s(`error`, i, r, this, void 0), Tl(l, 500), l.end());
        });
    };
  };
}
var Qb = q((e = {}) => ({
    name: `ElectronNet`,
    setup(t) {
      let n = t.getOptions(),
        r = !!n?.enableLogs;
      (e.breadcrumbs === !1 && e.tracing === !1) ||
        mc(o.net, `request`, Zb(e, r, n?.tracePropagationTargets));
    },
  })),
  $b = { breadcrumbs: By, events: [`abnormal-exit`, `launch-failed`, `integrity-failure`] };
function ex(e, t) {
  let n = `'${t}' process exited with '${e}'`,
    r = Yp`'${t}' process exited with '${e}'`;
  switch (e) {
    case `abnormal-exit`:
    case `killed`:
      return { message: n, level: `warning`, log: nh, messageFmt: r };
    case `crashed`:
    case `oom`:
    case `launch-failed`:
    case `integrity-failure`:
      return { message: n, level: `fatal`, log: rh, messageFmt: r };
    default:
      return { message: n, level: `debug`, log: th, messageFmt: r };
  }
}
var tx = q((e = {}) => {
    let { breadcrumbs: t, events: n } = e,
      r = Uv(e),
      i = {
        breadcrumbs: Array.isArray(t) ? t : t === !1 ? [] : $b.breadcrumbs,
        events: Array.isArray(n) ? n : n === !1 ? [] : $b.events,
      };
    return {
      name: `ChildProcess`,
      setup(e) {
        r.setup?.(e);
        let { breadcrumbs: t, events: n } = i;
        if (Array.from(new Set([...t, ...n])).length > 0) {
          let r = e.getOptions(),
            i = !!r?.enableLogs;
          (o.app.on(`child-process-gone`, (e, r) => {
            let { reason: a } = r,
              { message: o, level: s, log: c, messageFmt: l } = ex(r.reason, r.type);
            (n.includes(a) && lf(o, { level: s, tags: { "event.process": r.type } }),
              t.includes(a) &&
                (rm({ type: `process`, category: `child-process`, message: o, level: s, data: r }),
                i &&
                  c(l, {
                    "sentry.origin": `auto.electron.child-process`,
                    exitCode: r.exitCode,
                    name: r.name,
                    serviceName: r.serviceName,
                  })));
          }),
            o.app.on(`render-process-gone`, (e, a, o) => {
              let { reason: s } = o,
                c = r?.getRendererName?.(a) || `renderer`,
                { message: l, level: u, log: d, messageFmt: f } = ex(o.reason, c);
              (n.includes(s) && lf(l, u),
                t.includes(s) &&
                  (rm({
                    type: `process`,
                    category: `child-process`,
                    message: l,
                    level: u,
                    data: o,
                  }),
                  i &&
                    d(f, {
                      "sentry.origin": `auto.electron.child-process`,
                      exitCode: o.exitCode,
                    })));
            }));
        }
      },
    };
  }),
  nx = q(() => ({
    name: `Screenshots`,
    async processEvent(e, t, n) {
      if (!n.getOptions().attachScreenshot) return e;
      if (!e.transaction && e.platform !== `native`) {
        let e = 1;
        for (let n of o.BrowserWindow.getAllWindows()) {
          t.attachments ||= [];
          try {
            if (!n.isDestroyed() && n.isVisible()) {
              let r = e === 1 ? `screenshot.png` : `screenshot-${e}.png`,
                i = await n.capturePage();
              (t.attachments.push({ filename: r, data: i.toPNG(), contentType: `image/png` }),
                (e += 1));
            }
          } catch (e) {
            z.error(`Error capturing screenshot`, e);
          }
        }
      }
      return e;
    },
  }));
function rx(e = {}, t, n) {
  if (e[t]) {
    let r = e[t];
    Array.isArray(r) ? r.push(n) : (e[t] = [r, n]);
  } else e[t] = n;
  return { responseHeaders: e };
}
function ix(e, t, n) {
  e.webRequest.onHeadersReceived((e, r) => {
    r(rx(e.responseHeaders, t, n));
  });
}
var ax;
function ox(e, t) {
  if (!ax) return;
  let n = t.event_id;
  (ax.set(n, t), e && (e.contexts = { ...e.contexts, profile: { profile_id: n } }));
}
var sx = q(() => ({
    name: `RendererProfiling`,
    setup(e) {
      let t = e.getOptions();
      t.enableRendererProfiling &&
        ((ax = new $m(10)),
        o.app.on(`ready`, () => {
          t.getSessions().forEach((e) => ix(e, `Document-Policy`, `js-profiling`));
        }),
        e.on?.(`beforeEnvelope`, (e) => {
          let n;
          if (
            (Gu(e, (e, t) => {
              if (t === `transaction`)
                for (let t = 1; t < e.length; t++) {
                  let r = e[t];
                  r?.contexts?.profile?.profile_id &&
                    ((n = r.contexts.profile.profile_id), delete r.contexts.profile);
                }
            }),
            !n)
          )
            return;
          let r = ax?.remove(n);
          r &&
            (zb(r, o.app.getAppPath()),
            (r.release = t.release || Oy()),
            (r.environment = t.environment || ky()),
            e[1].push([{ type: `profile` }, r]));
        }));
    },
  })),
  cx = q(() => ({
    name: `NormalizePaths`,
    setup: (e) => {
      setImmediate(() => {
        e.on(`beforeEnvelope`, (e) => {
          Gu(e, (e, t) => {
            t === `profile` && zb(e[1], o.app.getAppPath());
          });
        });
      });
    },
    processEvent(e) {
      return Lb(e, o.app.getAppPath());
    },
  }));
function lx() {
  return o.app.getAppMetrics().reduce((e, t) => e + t.memory.workingSetSize * 1024, 0);
}
var ux = q(() => ({
  name: `ElectronContext`,
  processEvent(e, t, n) {
    (delete e.contexts?.runtime,
      delete e.contexts?.app?.app_memory,
      e.request?.headers && delete e.request.headers[`User-Agent`]);
    let { release: r = Oy(), environment: i = ky() } = n.getOptions();
    return Fb(
      {
        contexts: {
          app: {
            app_name: o.app.name || o.app.getName(),
            app_version: o.app.getVersion(),
            build_type: process.mas ? `app-store` : process.windowsStore ? `windows-store` : void 0,
            app_memory: lx(),
            app_arch: process.arch,
          },
          browser: { name: `Chrome` },
          chrome: { name: `Chrome`, type: `runtime`, version: process.versions.chrome },
          device: { family: `Desktop` },
          node: { name: `Node`, type: `runtime`, version: process.versions.node },
          runtime: { name: `Electron`, version: process.versions.electron },
        },
        environment: i,
        release: r,
        tags: {
          "event.origin": `electron`,
          "event.environment": `javascript`,
          "event.process": `browser`,
        },
      },
      e,
    );
  },
}));
function dx(e) {
  return {
    name: e.deviceString || `GPU`,
    active: e.active,
    id: `0x${e.deviceId.toString(16).padStart(4, `0`)}`,
    vendor_id: `0x${e.vendorId.toString(16).padStart(4, `0`)}`,
    vendor_name: e.vendorString,
    driver_version: e.driverVersion,
  };
}
var fx = q((e = { infoLevel: `basic` }) => {
    let t;
    return {
      name: `GpuContext`,
      processEvent: async (n) => {
        if (t === void 0) {
          let n = await o.app.getGPUInfo(e.infoLevel).catch(() => void 0);
          t = n ? n.gpuDevice.map(dx) : [];
        }
        if (t.length === 1) n.contexts = { ...n.contexts, gpu: t[0] };
        else if (t.length > 1) {
          n.contexts = { ...n.contexts };
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            ((r.type = `gpu`), (n.contexts[`gpu_${e + 1}`] = r));
          }
        }
        return n;
      },
    };
  }),
  px = 30,
  mx = 50;
function hx(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
var gx = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  _x =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  vx = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  yx = /at (.+?) ?\(data:(.+?),/,
  bx = [
    px,
    (e) => {
      let t = e.match(yx);
      if (t) return { filename: `<data:${t[2]}>`, function: t[1] };
      let n = gx.exec(e);
      if (n) {
        let [, e, t, r] = n;
        return hx(e, `?`, +t, +r);
      }
      let r = _x.exec(e);
      if (r) {
        if (r[2] && r[2].indexOf(`eval`) === 0) {
          let e = vx.exec(r[2]);
          e && ((r[2] = e[1]), (r[3] = e[2]), (r[4] = e[3]));
        }
        let [e, t] = Cx(r[1] || `?`, r[2]);
        return hx(t, e, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
      }
    },
  ],
  xx =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Sx = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
js(bx, [
  mx,
  (e) => {
    let t = xx.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(` > eval`) > -1) {
        let e = Sx.exec(t[3]);
        e && ((t[1] = t[1] || `eval`), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ``));
      }
      let e = t[3],
        n = t[1] || `?`;
      return (([n, e] = Cx(n, e)), hx(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0));
    }
  },
]);
var Cx = (e, t) => {
    let n = e.indexOf(`safari-extension`) !== -1,
      r = e.indexOf(`safari-web-extension`) !== -1;
    return n || r
      ? [
          e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  wx = 50,
  [, Tx] = bx,
  [, Ex] = Ym(),
  Dx = (e, t = 0) => {
    let n = [];
    for (let r of e
      .split(
        `
`,
      )
      .slice(t)) {
      let e = Tx(r),
        t = Ex(r);
      if (
        (e && t?.in_app !== !1
          ? n.push(e)
          : t && (t.module === void 0 && delete t.module, n.push(t)),
        n.length >= wx)
      )
        break;
    }
    return Ns(n);
  },
  Ox = js(Ym(Qv(o.app.getAppPath())));
async function kx(e) {
  if (zy < 34)
    throw Error(
      "Electron >= 34 required to capture stack frames via `frame.collectJavaScriptCallStack()`",
    );
  if (e.isDestroyed()) return;
  let t = await e.mainFrame.collectJavaScriptCallStack();
  if (t) {
    if (t.includes(`Website owner has not opted in`)) {
      z.warn(`Could not collect renderer stack frames.
A 'Document-Policy' header of 'include-js-call-stacks-in-crash-reports' must be set`);
      return;
    }
    return Dx(t);
  }
}
function Ax(e, ...t) {
  z.log(`[Renderer Event Loop Block] ${e}`, ...t);
}
function jx(e, t) {
  return () => {
    kx(e)
      .then((e) => {
        e && t(e);
      })
      .catch(() => {});
  };
}
function Mx(e, t) {
  (Ax(`Connecting to debugger`), e.debugger.attach(`1.3`));
  let n = new Map(),
    r = Qv(o.app.getAppPath());
  return (
    e.debugger.on(`message`, (i, a, o) => {
      if (a === `Debugger.scriptParsed`) {
        let e = o;
        n.set(e.scriptId, e.url);
      } else if (a === `Debugger.paused`) {
        let i = o;
        if (i.reason !== `other`) return;
        let a = [...i.callFrames];
        (e.debugger.sendCommand(`Debugger.resume`).then(null, () => {}),
          t(Ns(a.map((e) => Qm(e, n.get(e.location.scriptId), r)))));
      }
    }),
    e.debugger.sendCommand(`Debugger.enable`).catch(() => {}),
    () => {
      if (!e.isDestroyed())
        return (
          Ax(`Pausing debugger to capture stack trace`), e.debugger.sendCommand(`Debugger.pause`)
        );
    }
  );
}
function Nx() {
  let e = process.hrtime();
  return {
    getTimeMs: () => {
      let [t, n] = process.hrtime(e);
      return Math.floor(t * 1e3 + n / 1e6);
    },
    reset: () => {
      e = process.hrtime();
    },
  };
}
var Px = `RendererEventLoopBlock`,
  Fx = q((e = {}) => {
    let t = new Map(),
      n;
    function r(e) {
      return n?.getRendererName?.(e);
    }
    function i(e, t, n) {
      sb();
      let i = r(e) || `renderer`;
      uf({
        level: `error`,
        exception: {
          values: [
            {
              type: `ApplicationNotResponding`,
              value: `Application Not Responding for at least ${t} ms`,
              stacktrace: { frames: n },
              mechanism: { type: `ANR` },
            },
          ],
        },
        tags: { "event.process": i },
      });
    }
    return {
      name: Px,
      setup: (t) => {
        ((n = t.getOptions()),
          zy >= 34 &&
            (o.app.commandLine.appendSwitch(
              `enable-features`,
              `DocumentPolicyIncludeJSCallStacksInCrashReports`,
            ),
            e.captureNativeStacktrace &&
              o.app.on(`ready`, () => {
                n?.getSessions().forEach((e) =>
                  ix(e, `Document-Policy`, `include-js-call-stacks-in-crash-reports`),
                );
              })));
      },
      createRendererEventLoopBlockStatusHandler: () => (n, r) => {
        let a = t.get(r);
        function s() {
          a?.enabled(!1);
        }
        function c() {
          a?.enabled(!0);
        }
        if (a === void 0) {
          Ax(`Renderer sent first status message`, n.config);
          let l;
          (n.config.captureStackTrace &&
            (l = (e.captureNativeStacktrace && zy >= 34 ? jx : Mx)(r, (e) => {
              (Ax(`Event captured with stack frames`), i(r, n.config.anrThreshold, e));
            })),
            (a = Zm(Nx, 100, n.config.anrThreshold, async () => {
              (Ax(`Watchdog timeout`),
                l ? l() : (Ax(`Capturing event`), i(r, n.config.anrThreshold)));
            })),
            r.once(`destroyed`, () => {
              (t?.delete(r),
                o.powerMonitor.off(`suspend`, s),
                o.powerMonitor.off(`resume`, c),
                o.powerMonitor.off(`lock-screen`, s),
                o.powerMonitor.off(`unlock-screen`, c));
            }),
            r.once(`blur`, s),
            r.once(`focus`, c),
            o.powerMonitor.on(`suspend`, s),
            o.powerMonitor.on(`resume`, c),
            o.powerMonitor.on(`lock-screen`, s),
            o.powerMonitor.on(`unlock-screen`, c),
            t.set(r, a));
        }
        (a.poll(),
          n.status !== `alive` &&
            (Ax(`Renderer visibility changed '${n.status}'`), a.enabled(n.status === `visible`)));
      },
    };
  });
function Ix(e) {
  return e.getIntegrationByName(Px)?.createRendererEventLoopBlockStatusHandler();
}
var Lx = 1024 * 32;
function Rx(e) {
  return new g.Readable({
    read() {
      (this.push(e), this.push(null));
    },
  });
}
function zx(e) {
  let { hostname: t, pathname: n, port: r, protocol: i, search: a } = new y.URL(e);
  return { method: `POST`, hostname: t, path: `${n}${a}`, port: parseInt(r, 10), protocol: i };
}
function Bx(e) {
  return np(e, Vx(e.url, e.headers || {}));
}
function Vx(e, t) {
  return (
    (t[`Content-Type`] = `application/x-sentry-envelope`),
    function (n) {
      return o.app.whenReady().then(
        () =>
          new Promise((r, i) => {
            let a = Rx(n.body),
              s = { ...t };
            n.body.length > Lx &&
              ((s[`content-encoding`] = `gzip`), (a = a.pipe((0, b.createGzip)())));
            let c = o.net.request(zx(e));
            for (let [e, t] of Object.entries(s)) c.setHeader(e, t);
            (c.on(`response`, (e) => {
              (e.on(`error`, i), e.on(`data`, () => {}), e.on(`end`, () => {}));
              let t = e.headers[`retry-after`] ?? null,
                n = e.headers[`x-sentry-rate-limits`] ?? null;
              r({
                statusCode: e.statusCode,
                headers: {
                  "retry-after": Array.isArray(t) ? t[0] || null : t,
                  "x-sentry-rate-limits": Array.isArray(n) ? n[0] || null : n,
                },
              });
            }),
              c.on(`error`, i),
              a.pipe(c));
          }),
      );
    }
  );
}
var Hx = 864e5;
function Ux(e, t) {
  let n = Date.now() - Hx * t;
  return (e?.date?.getTime() || 0) < n;
}
function Wx(e) {
  let t = e[0];
  if (typeof t.sent_at == `string`) return new Date(t.sent_at);
}
function Gx(e) {
  function t(...e) {
    z.log(`[Offline Store]:`, ...e);
  }
  let n = {
      maxAgeDays: e.maxAgeDays || 30,
      maxQueueSize: e.maxQueueSize || 30,
      queuePath: e.queuePath || (0, s.join)(Vy(), `queue`),
    },
    r = new Jy(n.queuePath, `queue-v2`, []);
  function i(e) {
    h.promises.unlink((0, s.join)(n.queuePath, e)).catch(() => {});
  }
  function a(e) {
    for (; e[0] && Ux(e[0], n.maxAgeDays);) {
      let n = e.shift();
      (t(`Removing stale envelope`, n), i(n.id));
    }
  }
  async function o(e, o, c) {
    t(`${o}ing envelope into offline storage`);
    let l = B();
    try {
      let t = Yu(e);
      (await h.promises.mkdir(n.queuePath, { recursive: !0 }),
        await h.promises.writeFile((0, s.join)(n.queuePath, l), t));
    } catch (e) {
      t(`Failed to save`, e);
    }
    await r.update((t) =>
      o === `push` && (a(t), t.length >= n.maxQueueSize)
        ? (i(l), t)
        : (t[o]({ id: l, date: c || Wx(e) || new Date() }), t),
    );
  }
  let c;
  return {
    push: async (e) => {
      await o(e, `push`);
    },
    unshift: async (e) => {
      await o(e, `unshift`, c);
    },
    shift: async () => {
      t(`Popping envelope from offline storage`);
      let e;
      if ((await r.update((t) => (a(t), (e = t.shift()), t)), e))
        try {
          let t = await h.promises.readFile((0, s.join)(n.queuePath, e.id));
          return (i(e.id), (c = e.date), Zu(t));
        } catch (e) {
          t(`Failed to read`, e);
        }
    },
  };
}
function Kx(e = Bx) {
  return (t) => Hp(e)({ flushAtStartup: !0, createStore: Gx, ...t });
}
function qx(e) {
  let t,
    n = [],
    r;
  return (
    Gu(e, (e, i) => {
      if (i === `event` || i === `transaction` || i === `feedback`)
        t = Array.isArray(e) ? e[1] : void 0;
      else if (i === `attachment`) {
        let [t, r] = e;
        n.push({
          filename: t.filename,
          attachmentType: t.attachment_type,
          contentType: t.content_type,
          data: r,
        });
      } else i === `profile` && (r = e[1]);
    }),
    t ? [t, n, r] : void 0
  );
}
function Jx(e) {
  let t;
  return (
    Gu(e, (e, n) => {
      n === `profile_chunk` && (t = e[1]);
    }),
    t
  );
}
async function Yx(e) {
  let t = e.getIntegrationByName(`Context`),
    n = e.getIntegrationByName(`AdditionalContext`),
    r = {},
    i = {};
  ((r = (await t?.processEvent?.(r, i, e)) || r), (r = (await n?.processEvent?.(r, i, e)) || r));
  let a = {};
  return (
    r.contexts?.os?.name && (a[`os.name`] = r.contexts.os.name),
    r.contexts?.os?.version && (a[`os.version`] = r.contexts.os.version),
    r.contexts?.device?.brand && (a[`device.brand`] = r.contexts.device.brand),
    r.contexts?.device?.model && (a[`device.model`] = r.contexts.device.model),
    r.contexts?.device?.family && (a[`device.family`] = r.contexts.device.family),
    a
  );
}
var Xx;
function Zx(e) {
  return (
    Xx === void 0 &&
      ((Xx = {}),
      Yx(e)
        .then((e) => {
          Xx = e;
        })
        .catch(() => {})),
    Xx || {}
  );
}
var Qx, $x;
function eS() {
  ((Qx ||= new Set()), ($x ||= new Map()));
  for (let e of o.webContents.getAllWebContents()) {
    let t = e.id;
    Qx.has(t) ||
      e.isDestroyed() ||
      e.executeJavaScript(`window.__SENTRY_RENDERER_ID__`).then((n) => {
        n &&
          Qx &&
          $x &&
          (Qx.add(t),
          $x.set(n, t),
          e.once(`destroyed`, () => {
            (Qx?.delete(t), $x?.delete(n));
          }));
      }, z.error);
  }
}
function tS(e, t, n, r, i) {
  let a = (i && e?.getRendererName?.(i)) || `renderer`;
  ((t.breadcrumbs = t.breadcrumbs || []),
    delete t.environment,
    delete t.sdk?.name,
    delete t.sdk?.version,
    delete t.sdk?.packages,
    n && (t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, dynamicSamplingContext: n }),
    uf(Fb(t, { tags: { "event.process": a } }), { attachments: r }));
}
var nS;
function rS(e, t, n, r) {
  let i = Zu(n),
    [a] = i,
    s = a.trace;
  s &&
    ((nS ||= e.getDsn()?.publicKey),
    (s.release = t.release),
    (s.environment = t.environment),
    (s.public_key = nS));
  let c = qx(i);
  if (c) {
    let [e, n, i] = c;
    (i && ox(e, i), tS(t, e, s, n, r));
  } else if (Jx(i)) {
    let e = Vb(t, i, o.app.getAppPath());
    U()?.getTransport()?.send(e);
  } else {
    let e = Rb(t, i, o.app.getAppPath());
    U()?.getTransport()?.send(e);
  }
}
function iS(e) {
  return e != null && Object.keys(e).length > 0;
}
function aS(e, t) {
  let n;
  try {
    n = JSON.parse(t);
  } catch {
    z.warn(`sentry-electron received an invalid scope message`);
    return;
  }
  let r = V();
  (iS(n.user) && r.setUser(n.user),
    iS(n.tags) && r.setTags(n.tags),
    iS(n.extra) && r.setExtras(n.extra));
  for (let e of n.attachments || []) r.addAttachment(e);
  let i = n.breadcrumbs.pop();
  i && r.addBreadcrumb(i, e?.maxBreadcrumbs || 100);
}
function oS(e, t, n, r) {
  let i = (n && t?.getRendererName?.(n)) || `renderer`,
    a = r || {};
  (t.release && (a[`sentry.release`] = { value: t.release, type: `string` }),
    t.environment && (a[`sentry.environment`] = { value: t.environment, type: `string` }),
    (a[`sentry.sdk.name`] = { value: `sentry.javascript.electron`, type: `string` }),
    (a[`sentry.sdk.version`] = { value: Ty, type: `string` }),
    (a[`electron.process`] = { value: i, type: `string` }));
  let o = Zx(e);
  return (
    o[`os.name`] && (a[`os.name`] = { value: o[`os.name`], type: `string` }),
    o[`os.version`] && (a[`os.version`] = { value: o[`os.version`], type: `string` }),
    o[`device.brand`] && (a[`device.brand`] = { value: o[`device.brand`], type: `string` }),
    o[`device.model`] && (a[`device.model`] = { value: o[`device.model`], type: `string` }),
    o[`device.family`] && (a[`device.family`] = { value: o[`device.family`], type: `string` }),
    a
  );
}
function sS(e, t, n, r) {
  ((n.attributes = oS(e, t, r, n.attributes)), If(e, n));
}
function cS(e, t, n, r) {
  ((n.attributes = oS(e, t, r, n.attributes)), Gf(e, n));
}
function lS(e, t, n) {
  if (o.app.isReady())
    throw Error(`Sentry SDK should be initialized before the Electron app 'ready' event is fired`);
  let r = {
    scheme: t.namespace,
    privileges: { bypassCSP: !0, corsEnabled: !0, supportFetchAPI: !0, secure: !0 },
  };
  (o.protocol.registerSchemesAsPrivileged([r]),
    (o.protocol.registerSchemesAsPrivileged = new Proxy(o.protocol.registerSchemesAsPrivileged, {
      apply: (e, t, n) => {
        e([...n[0], r]);
      },
    })));
  let i = Ix(e);
  o.app
    .whenReady()
    .then(() => {
      for (let r of n.getSessions())
        Uy(r.protocol, t.namespace, (r) => {
          let a = () => {
              let e = r.windowId ? $x?.get(r.windowId) : void 0;
              return e ? o.webContents.fromId(e) : void 0;
            },
            s = r.body;
          if (t.urlMatches(r.url, `start`)) eS();
          else if (t.urlMatches(r.url, `scope`) && s) aS(n, s.toString());
          else if (t.urlMatches(r.url, `envelope`) && s) rS(e, n, s, a());
          else if (t.urlMatches(r.url, `structured-log`) && s)
            sS(e, n, JSON.parse(s.toString()), a());
          else if (t.urlMatches(r.url, `metric`) && s) cS(e, n, JSON.parse(s.toString()), a());
          else if (i && t.urlMatches(r.url, `status`) && s) {
            let e = a();
            if (e) {
              let t = JSON.parse(s.toString()).status;
              i(t, e);
            }
          }
        });
    })
    .catch((e) => z.error(e));
}
function uS(e, t, n) {
  (o.ipcMain.on(t.createKey(`start`), ({ sender: e }) => {
    let t = e.id;
    ((Qx ||= new Set()),
      !Qx.has(t) &&
        (e.isDestroyed() ||
          (Qx.add(t),
          e.once(`destroyed`, () => {
            Qx?.delete(t);
          }))));
  }),
    o.ipcMain.on(t.createKey(`scope`), (e, t) => aS(n, t)),
    o.ipcMain.on(t.createKey(`envelope`), ({ sender: t }, r) => rS(e, n, r, t)),
    o.ipcMain.on(t.createKey(`structured-log`), ({ sender: t }, r) => sS(e, n, r, t)),
    o.ipcMain.on(t.createKey(`metric`), ({ sender: t }, r) => cS(e, n, r, t)));
  let r = Ix(e);
  r && o.ipcMain.on(t.createKey(`status`), ({ sender: e }, t) => r(t, e));
}
function dS(e, t) {
  let n = My(t.ipcNamespace);
  ((t.ipcMode & jy.Protocol) > 0 && lS(e, n, t), (t.ipcMode & jy.Classic) > 0 && uS(e, n, t));
}
function fS(e) {
  z.log(`[Utility Process] ${e}`);
}
function pS() {
  o.utilityProcess?.fork &&
    (o.utilityProcess.fork = new Proxy(o.utilityProcess.fork, {
      apply: (e, t, n) => {
        let r = e.apply(t, n);
        function i() {
          let [, , e] = n;
          return e?.serviceName || `pid:${r.pid}`;
        }
        return (
          r.on(`message`, (e) => {
            if (Fy(e)) {
              fS(`SDK started in utility process '${i()}'`);
              let { port1: e, port2: t } = new o.MessageChannelMain();
              (t.on(`message`, (e) => {
                (e.data instanceof Uint8Array || typeof e.data == `string`) && mS(e.data);
              }),
                t.start(),
                r.postMessage(Iy(), [e]));
            }
          }),
          (r.on = new Proxy(r.on, {
            apply: (e, t, [n, r]) =>
              n === `message`
                ? e.apply(t, [
                    `message`,
                    (e) => {
                      if (!Fy(e)) return r(e);
                    },
                  ])
                : e.apply(t, [n, r]),
          })),
          r
        );
      },
    }));
}
function mS(e) {
  let t = Zu(e),
    n = qx(t);
  if (n) {
    let [e, t] = n;
    hS(e, t);
  } else U()?.getTransport()?.send(t);
}
function hS(e, t) {
  (delete e.environment,
    delete e.release,
    delete e.sdk?.name,
    delete e.sdk?.version,
    delete e.sdk?.packages,
    uf(Fb(e, { tags: { "event.process": `utility` } }), { attachments: t }));
}
function gS(e) {
  let t = [
    Nb(),
    xy(),
    Qb(),
    ux(),
    tx(),
    Sy(),
    Ub(),
    Yb(),
    nx(),
    fx(),
    Fx(),
    Wb(),
    um(),
    sm(),
    Dm(),
    Um(),
    sy(),
    Iv(),
    hv(),
    jv(),
    R_({ cloudResource: !1 }),
    cx(),
  ];
  return (e.attachScreenshot && t.push(nx()), e.enableRendererProfiling && t.push(sx()), t);
}
function _S(e) {
  let [t = 0] = process.versions.electron.split(`.`).map(Number);
  if (t < 23) throw Error(`Sentry Electron SDK requires Electron 23 or higher`);
  let n = {
      _metadata: { sdk: Dy(!!e.sendDefaultPii) },
      ipcMode: jy.Both,
      ipcNamespace: `sentry-ipc`,
      release: Oy(),
      environment: ky(),
      defaultIntegrations: gS(e),
      transport: Kx(),
      transportOptions: {},
      getSessions: () => [o.session.defaultSession],
      ...e,
      stackParser: Ms(e.stackParser || Ox),
      includeServerName: !1,
    },
    r = { ...n, integrations: Ef(n) };
  (r.debug && z.enable(), yS(r), pS(), Xg());
  let i = V();
  i.update(r.initialScope);
  let a = new ey(r);
  (r.sendDefaultPii === !0 && a.on(`beforeSendSession`, Xp),
    a.on(`beforeCaptureLog`, (e) => {
      e.attributes = { ...e.attributes, "electron.process": `browser`, ...Zx(a) };
    }),
    i.setClient(a),
    a.init(),
    dS(a, r),
    r.skipOpenTelemetrySetup || py(a));
}
var vS = [
  { userAdded: `ElectronMinidump`, toRemove: `SentryMinidump` },
  { userAdded: `BrowserWindowSession`, toRemove: `MainProcessSession` },
];
function yS(e) {
  for (let { userAdded: t, toRemove: n } of vS)
    e.integrations.some((e) => e.name === t) &&
      (e.integrations = e.integrations.filter((e) => e.name !== n));
}
function bS() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`,
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop());)
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
var xS = r.i(`owl-browser-crash-counter`),
  SS = null,
  CS = !1,
  wS = 0,
  TS = class extends n.bu {
    delivery = null;
    listener = null;
    constructor(e) {
      (super(), e.once(`destroyed`, () => this[Symbol.dispose]()));
    }
    subscribe(e) {
      (this.unsubscribe(),
        (this.listener = e.dup()),
        this.listener.onRpcBroken(() => this.unsubscribe()));
      let t = this.listener;
      ((this.delivery = async (e) => {
        try {
          var n = bS();
          await n.u(t(e));
        } catch (e) {
          n.e = e;
        } finally {
          n.d();
        }
      }),
        DS(this.delivery));
    }
    unsubscribe() {
      (SS === this.delivery && DS(null),
        (this.delivery = null),
        this.listener?.[Symbol.dispose](),
        (this.listener = null));
    }
    [Symbol.dispose]() {
      this.unsubscribe();
    }
  };
function ES() {
  ((wS += 1), OS());
}
function DS(e) {
  ((SS = e), OS());
}
async function OS() {
  if (SS == null || wS === 0 || CS) return;
  CS = !0;
  let e = SS,
    t = wS,
    n = !1;
  try {
    (await e(t), (wS -= t), (n = !0));
  } catch {
    xS().info(`Failed to deliver Owl browser crash counter`);
  } finally {
    CS = !1;
  }
  wS > 0 && (n || SS !== e) && OS();
}
var kS = `event.minidump`,
  AS = `.dmp`,
  jS = `_sidecar.json`;
function MS(e, t) {
  if (e === `win32`) return [l.win32.join(t, `reports`)];
  let n = [l.posix.join(t, `completed`)];
  return ((e === `darwin` || e === `linux`) && n.push(l.posix.join(t, `pending`)), n);
}
function NS(e = {}) {
  let t = e.maxMinidumpAttachments;
  return (n, r) => {
    if (!r.attachments?.some(({ attachmentType: e }) => e === kS)) return n;
    let i = PS(r, e),
      a = n.contexts?.electron?.[`crashpad.ptype`],
      o = i?.ptype ?? (typeof a == `string` ? a : void 0);
    if (o == null) return null;
    if ((zS(n, i, o), i?.ptype === `browser` && i.capture_kind === `crash` && ES(), t != null)) {
      let e = t;
      ((r.attachments = r.attachments?.filter((t) =>
        t.attachmentType === kS ? (e === 0 ? !1 : (--e, !0)) : !0,
      )),
        (t = e));
    }
    return n;
  };
}
function PS(e, t) {
  let n = FS(t);
  for (let t of e.attachments ?? []) {
    if (t.attachmentType !== kS) continue;
    let e = LS(t.filename, n);
    if (e != null) return e;
  }
  return null;
}
function FS(e) {
  let t = e.crashDumpsPath ?? IS(e.app);
  return t == null ? [] : MS(e.platform ?? process.platform, t);
}
function IS(e) {
  try {
    return e?.getPath(`crashDumps`);
  } catch {
    return;
  }
}
function LS(e, t) {
  let n = RS(e);
  if (n == null) return null;
  let r = [...new Set(t.map((e) => (0, l.join)(e, n)))].sort();
  for (let e of r)
    if ((0, f.existsSync)(e))
      try {
        let t = JSON.parse((0, f.readFileSync)(e, `utf8`));
        if (typeof t != `object` || !t || Array.isArray(t)) continue;
        let n = `capture_kind` in t ? t.capture_kind : void 0,
          r = `ptype` in t ? t.ptype : void 0,
          i = `osarch` in t ? t.osarch : void 0;
        return {
          capture_kind: typeof n == `string` ? n : void 0,
          osarch: typeof i == `string` ? i : void 0,
          ptype: typeof r == `string` ? r : void 0,
        };
      } catch {
        continue;
      }
  return null;
}
function RS(e) {
  return e.toLowerCase().endsWith(AS) ? `${e.slice(0, -4)}${jS}` : null;
}
function zS(e, t, n) {
  let r = e.tags ?? {};
  ((e.tags = r), (r[`minidump.source`] = `owl`));
  let i = t?.capture_kind === `crash` || t?.capture_kind === `dump_without_crashing`;
  i && (r[`minidump.capture_kind`] = t.capture_kind);
  let a = r[`event.process`];
  ((a == null || a === `unknown`) && (r[`event.process`] = n),
    t?.capture_kind === `dump_without_crashing`
      ? ((e.level = `error`), (r[`exit.reason`] = `dump_without_crashing`))
      : (r[`exit.reason`] ??= `crashed`));
  let o = e.contexts ?? {};
  e.contexts = o;
  let s = o.electron ?? {};
  ((o.electron = s),
    t?.ptype != null && s[`crashpad.ptype`] == null && (s[`crashpad.ptype`] = t.ptype),
    t?.osarch != null && s[`crashpad.osarch`] == null && (s[`crashpad.osarch`] = t.osarch),
    i && (s[`crashpad.capture_kind`] = t.capture_kind));
}
var BS = 0.001,
  VS = 2 * 1024 * 1024,
  HS = Promise.withResolvers(),
  US = HS.promise,
  WS = { addBreadcrumb: rm, captureException: cf, captureMessage: lf, setUser: ff },
  GS = {
    codexAppSessionId: i.o,
    buildFlavor: i.i.resolve(),
    buildNumber: vt.value,
    appVersion: o.app.getVersion(),
    desktopTraceSampleRate: process.env.CODEX_OTEL_TRACES_ENDPOINT == null ? 0 : 1,
    dsn: pe,
  };
function KS(e) {
  if (!e) {
    HS.resolve(!1);
    return;
  }
  qS();
  let t = n.cl(GS.appVersion),
    r = GS.buildFlavor === i.i.Prod,
    a = !r,
    s = !r || Math.random() < BS,
    c;
  r && (c = +!!s);
  let l = he(t.version);
  (_S({
    ipcMode: jy.Classic,
    dsn: GS.dsn,
    environment: GS.buildFlavor,
    release: l,
    dist: GS.buildNumber ?? void 0,
    beforeBreadcrumb: me,
    beforeSend: NS({ app: o.app, maxMinidumpAttachments: c }),
    tracesSampleRate: 0,
    integrations: (e) => [
      ...e.filter(({ name: e }) => e !== `ChildProcess` && e !== `Console`),
      tx({
        breadcrumbs: [
          `clean-exit`,
          `abnormal-exit`,
          `killed`,
          `crashed`,
          `oom`,
          `integrity-failure`,
        ],
        events: [`abnormal-exit`, `integrity-failure`],
      }),
      Um({ levels: [`warn`, `error`] }),
      Bm({ root: o.app.isPackaged ? o.app.getAppPath() : process.cwd(), prefix: `app:///` }),
    ],
  }),
    df(`sessionId`, i.o),
    df(`preRelease`, a),
    df(`minidumpAttachmentUploadEnabled`, s),
    df(`buildFlavor`, GS.buildFlavor),
    df(`bundle`, `electron`),
    df(`host`, `app`),
    JS(),
    HS.resolve(!0));
}
function qS() {
  let e = (0, l.join)(o.app.getPath(`userData`), `sentry`, `scope_v3.json`);
  try {
    (0, f.statSync)(e).size > VS && (0, f.unlinkSync)(e);
  } catch {}
}
function JS() {
  let e = new Set();
  function t(t, n, r) {
    let i = [`launch-failed`, t, n, String(r)],
      a = i.join(`\0`);
    e.has(a) ||
      (e.add(a),
      lf(`Electron process launch failed`, {
        fingerprint: i,
        level: `fatal`,
        tags: {
          "event.process": t,
          "exit.code": r,
          "exit.reason": `launch-failed`,
          "process.name": n,
        },
      }));
  }
  (o.app.on(`child-process-gone`, (e, n) => {
    n.reason === `launch-failed` && t(n.type, n.serviceName ?? n.name ?? n.type, n.exitCode);
  }),
    o.app.on(`render-process-gone`, (e, n, r) => {
      r.reason === `launch-failed` && t(`renderer`, n.getType(), r.exitCode);
    }));
}
function YS(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `code` in e &&
    (e.code === `EPIPE` || e.code === `ERR_STREAM_DESTROYED` || e.code === `EBADF`)
  );
}
function XS(e = [process.stdout, process.stderr]) {
  for (let t of e)
    t.__codexIgnoreConsoleWriteErrors ||
      ((t.__codexIgnoreConsoleWriteErrors = !0),
      t.on(`error`, (e) => {
        if (!YS(e)) throw e;
      }));
}
function ZS() {
  let e = !1;
  return (t, n) => {
    if (!e)
      try {
        switch (t) {
          case `error`:
            console.error(n);
            break;
          case `warning`:
            console.warn(n);
            break;
          case `info`:
            console.info(n);
            break;
          case `debug`:
            console.debug(n);
            break;
          case `trace`:
            console.log(n);
            break;
        }
      } catch (t) {
        if (YS(t)) {
          e = !0;
          return;
        }
        throw t;
      }
  };
}
function QS(e, t, n, a) {
  let o = (e) => e ?? { safe: {}, sensitive: {} },
    s = ZS(),
    c = i.t({ appSessionId: n, nonFatalReporter: e }),
    l = (e) => {
      let t = new Date().toISOString();
      c.logLine(`${t} ${e}`);
    },
    u = (e) => (n, i) => {
      if (!je(e, a)) return;
      let c = o(i),
        u = { ...c.safe, ...c.sensitive },
        d = Object.keys(u).length === 0 ? n : `${n} ${r.t(u)}`;
      (s(e, d), l(`${e} ${d}`), t.log(e, n, c.safe));
    },
    d = {
      trace: u(`trace`),
      debug: u(`debug`),
      info: u(`info`),
      warning: u(`warning`),
      error: u(`error`),
    };
  r.o({
    trace: d.trace,
    debug: d.debug,
    info: d.info,
    warning: d.warning,
    error: d.error,
    log: (e, t, n) => {
      d[e](t, n);
    },
    dispose: () => {},
  });
}
var $S = e.o(n.Pl()),
  eC = `linux-package-metadata.json`,
  tC = 900 * 1e3,
  nC = n.ru({
    codexAppBrand: n.su().trim().pipe(n.eu(`chatgpt`)),
    codexBuildFlavor: n.su(),
    version: n.su().trim().min(1),
  }),
  rC = class {
    options;
    isUpdateReady = !1;
    constructor(e) {
      this.options = e;
    }
    initialize() {
      this.hasUpdater() &&
        (this.checkForUpdates(),
        setInterval(() => {
          this.checkForUpdates();
        }, tC).unref());
    }
    hasUpdater() {
      return iC(this.options);
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    getUnavailableReason() {
      return this.hasUpdater() ? null : `unsupported Linux package runtime`;
    }
    checkForUpdates = async () => {
      if (!this.hasUpdater() || this.isUpdateReady) return;
      let e = aC({
        buildFlavor: this.options.buildFlavor,
        executablePath: this.options.executablePath,
      });
      e == null ||
        !oC(e, this.options.runningVersion) ||
        ((this.isUpdateReady = !0), this.options.onUpdateReadyChanged(!0));
    };
    async installUpdatesIfAvailable() {
      this.isUpdateReady && (o.app.relaunch(), this.options.onInstallUpdatesRequested?.());
    }
  };
function iC({ buildFlavor: e, isPackaged: t }) {
  return (
    process.platform === `linux` && t && i.i.shouldIncludeLinuxPackageUpdater(e, process.platform)
  );
}
function aC({ buildFlavor: e, executablePath: t }) {
  let n = l.default.join(l.default.dirname(t), `resources`, eC);
  try {
    let t = nC.safeParse(JSON.parse((0, f.readFileSync)(n, `utf8`)));
    return !t.success || i.i.parse(t.data.codexBuildFlavor) !== e ? null : t.data.version;
  } catch {
    return null;
  }
}
function oC(e, t) {
  let r, i;
  try {
    ((r = n.ul(e)), (i = n.ul(t)));
  } catch {
    return !1;
  }
  if (n.ol(r) !== e || n.ol(i) !== t) return !1;
  for (let e of [`major`, `minor`, `patch`]) if (r[e] !== i[e]) return r[e] > i[e];
  return !1;
}
var sC = 10080 * 60 * 1e3,
  cC = 7200 * 1e3,
  lC = 3600 * 1e3,
  uC = 7,
  dC = 1440 * 60 * 1e3,
  fC = n.iu(
    (e) => (typeof e == `number` && Number.isInteger(e) ? e : null),
    n.nu().int().nullable(),
  ),
  pC = n.ru({
    relaunchNotification: fC,
    relaunchNotificationPeriodMs: fC,
    relaunchWindow: n
      .uu()
      .optional()
      .transform((e) => e ?? null),
    relaunchFastIfOutdatedDays: fC,
  }),
  mC = n.ru({ entries: n.Yl(n.ru({ duration_mins: fC, start: n.ru({ hour: fC, minute: fC }) })) }),
  hC = n.ru({
    owlUpdatePolicies: n.ru({
      getRelaunchNotificationPolicy: n.Zl((e) => typeof e == `function`),
      on: n.Zl((e) => typeof e == `function`),
    }),
  });
function gC() {
  let e = process._linkedBinding;
  if (typeof e != `function`) return null;
  let t;
  try {
    t = e.call(process, `electron_browser_owl_update_policies`);
  } catch {
    return null;
  }
  return bC(t) ? t.owlUpdatePolicies : null;
}
function _C(e) {
  return yC(e.getRelaunchNotificationPolicy());
}
function vC(e, t) {
  return CC(e + xC(t), t.relaunchWindow);
}
function yC(e) {
  let t = pC.safeParse(e);
  return t.success ? t.data : null;
}
function bC(e) {
  return hC.safeParse(e).success;
}
function xC(e) {
  let { relaunchNotificationPeriodMs: t } = e,
    n;
  return (
    (n = t == null || t < lC ? sC : t), SC(e.relaunchFastIfOutdatedDays) ? Math.min(n, cC) : n
  );
}
function SC(e) {
  if (e == null || e < uC) return !1;
  let t = n.sl(o.app.getVersion());
  return t ? Date.now() - t.getTime() > e * dC : !1;
}
function CC(e, t) {
  let n = wC(t);
  if (!n || n.durationMs >= 1440 * 60 * 1e3) return e;
  let r = TC(e, n),
    i = r + n.durationMs;
  return e >= r && e < i
    ? e
    : e >= i
      ? DC(EC(r, 1), n)
      : e < EC(r, -1) + n.durationMs
        ? e
        : DC(r, n);
}
function wC(e) {
  let t = mC.safeParse(e);
  if (!t.success) return null;
  let n = t.data.entries[0];
  if (n == null) return null;
  let { hour: r, minute: i } = n.start,
    a = n.duration_mins;
  return r == null ||
    i == null ||
    a == null ||
    r < 0 ||
    r > 23 ||
    i < 0 ||
    i > 59 ||
    a < 1 ||
    a > 1440
    ? null
    : { durationMs: a * 60 * 1e3, hour: r, minute: i };
}
function TC(e, t) {
  let n = new Date(e);
  return (n.setHours(t.hour, t.minute, 0, 0), n.getTime());
}
function EC(e, t) {
  let n = new Date(e);
  return (n.setDate(n.getDate() + t), n.getTime());
}
function DC(e, t) {
  return e + Math.floor(Math.random() * t.durationMs);
}
var OC = `codex_desktop:message-from-view`,
  kC = `codex_desktop:message-for-view`,
  AC = `codex_desktop:chunked-message-ack`,
  jC = `codex_desktop:remote-hosted-pip-video-frame`,
  MC = `codex_desktop:browser-sidebar-runtime-message`,
  NC = `codex_desktop:browser-page-event`,
  PC = `codex_desktop:mcp-app-sandbox-guest-message`,
  FC = `codex_desktop:mcp-app-sandbox-host-message`,
  IC = `codex_desktop:show-context-menu`,
  LC = `codex_desktop:get-sentry-init-options`,
  RC = `codex_desktop:get-build-flavor`,
  zC = `codex_desktop:get-system-theme-variant`,
  BC = `codex_desktop:get-shared-object-snapshot`,
  VC = `codex_desktop:get-initial-sidebar-bootstrap`,
  HC = `codex_desktop:get-fast-mode-rollout-metrics`,
  UC = `codex_desktop:system-theme-variant-updated`,
  WC = `codex_desktop:trigger-sentry-test`,
  GC = `codex_desktop:connect-app-host`,
  KC = `codex_desktop:start-file-drag`,
  qC = `icons`,
  JC = `https://chatgpt.com/backend-api`,
  YC = `http://localhost:8000/api`,
  XC = `Codex Desktop`,
  ZC = `codex_desktop`;
function QC(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function $C(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
var ew = { darwin: `Mac OS`, linux: `X11; Linux`, win32: `Windows NT 10.0` };
function tw({ appVersion: e, platform: t = process.platform, arch: n = process.arch }) {
  return `Codex Desktop/${e} (${ew[t] ?? t}; ${n})`;
}
function nw() {
  let e = process.env.CODEX_APP_VERSION?.trim();
  return !o.app.isPackaged && e ? e : o.app.getVersion();
}
function rw(e) {
  let t = process.env.CODEX_API_BASE_URL;
  return t && t.trim().length > 0
    ? t.replace(/\/+$/, ``)
    : (process.env.CODEX_API_ENDPOINT ?? ``).toLowerCase() === `localhost`
      ? e.devApiBaseUrl
      : e.prodApiBaseUrl;
}
function iw(e, t) {
  return n.Xo(rw(e), t);
}
async function aw({
  action: e,
  appServerClient: t,
  desktopOriginator: n,
  headers: r = {},
  refreshToken: i = !1,
}) {
  let a = await t.getAuthToken({ refreshToken: i });
  if (!a) throw Error(`Sign in to ChatGPT to ${e}.`);
  let o = { ...r };
  return (ow(o, a, { desktopOriginator: n }), o);
}
function ow(e, t, { desktopOriginator: r, includeSurfaceHeaders: i = !0 }) {
  let a = n.Qr(t);
  if (
    (lw(e, `Authorization`, `Bearer ${t}`),
    a?.accountId && lw(e, `ChatGPT-Account-Id`, a.accountId),
    a?.isFedramp === !0)
  )
    lw(e, `X-OpenAI-Fedramp`, `true`);
  else {
    let t = uw(e, `X-OpenAI-Fedramp`);
    t != null && delete e[t];
  }
  i && sw(e, { desktopOriginator: r });
}
function sw(e, { desktopOriginator: t }) {
  (cw(e, `originator`) || lw(e, `originator`, t),
    cw(e, `User-Agent`) || lw(e, `User-Agent`, tw({ appVersion: nw() })));
}
function cw(e, t) {
  return uw(e, t) != null;
}
function lw(e, t, n) {
  let r = uw(e, t);
  (r && delete e[r], (e[t] = n));
}
function uw(e, t) {
  let n = t.toLowerCase();
  return Object.keys(e).find((e) => e.toLowerCase() === n);
}
var dw = `codex/app/appcast`,
  fw = `wham/app/appcast`,
  pw = r.i(`production-appcast`);
function mw({ beta: e, installationId: t, planType: r }) {
  let i = process.arch;
  if (i !== `arm64` && i !== `x64`)
    return (pw().warning(`Unsupported production appcast architecture`), null);
  let a = o.app.getVersion();
  try {
    if (n.ol(n.ul(a)) !== a) return (pw().warning(`Invalid production appcast app version`), null);
  } catch {
    return (pw().warning(`Invalid production appcast app version`), null);
  }
  let s = hw();
  return (
    s.searchParams.set(`installation_id`, t),
    s.searchParams.set(`arch`, i),
    s.searchParams.set(`app_version`, a),
    s.searchParams.set(`beta`, String(e)),
    s.searchParams.set(`os-version`, process.getSystemVersion()),
    s.searchParams.set(`plan_type`, r),
    s.toString()
  );
}
function hw() {
  let e = new URL(iw({ desktopOriginator: XC, devApiBaseUrl: YC, prodApiBaseUrl: JC }, fw));
  return (
    [`localhost`, `127.0.0.1`, `[::1]`].includes(e.hostname.toLowerCase()) &&
      (e.pathname = `/api/${dw}`),
    e
  );
}
function gw(e, t) {
  let n = vw(e),
    r = vw(t),
    i = Math.max(n.length, r.length);
  for (let e = 0; e < i; e += 1) {
    let t = n[e] ?? 0,
      i = r[e] ?? 0;
    if (t !== i) return t - i;
  }
  return 0;
}
function _w(e) {
  let t = e.trim().split(`.`);
  return t.length > 1 && t.every((e) => /^\d+$/.test(e));
}
function vw(e) {
  let t = e.trim().split(`.`);
  if (t.some((e) => !/^\d+$/.test(e))) throw Error(`Invalid build version '${e}'.`);
  return t.map((e) => Number.parseInt(e, 10));
}
var yw = 61e3;
async function bw() {
  let e = yw - process.uptime() * 1e3;
  e > 0 && (await (0, x.setTimeout)(e));
}
var xw = r.i(`windows-updater`),
  Sw = (0, ee.createRequire)(__filename),
  Cw = `installing`,
  ww = class {
    options;
    stateRoot = ``;
    isUpdateReady = !1;
    downloadProgressPercent = null;
    installProgressPercent = null;
    lastUnavailableReason = null;
    inFlightCheck = null;
    inFlightManualCheck = null;
    inFlightInstall = null;
    lastValidatedUpdateManifest = null;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      if (!o.app.isPackaged) {
        this.lastUnavailableReason = `dev build`;
        return;
      }
      if (!this.options.manifestUrl.trim()) {
        this.lastUnavailableReason = `missing packaged windows update url`;
        return;
      }
      if (!this.options.packageIdentity.trim()) {
        this.lastUnavailableReason = `missing packaged windows package identity`;
        return;
      }
      if (!this.options.packagePublisher.trim()) {
        this.lastUnavailableReason = `missing packaged windows package publisher`;
        return;
      }
      let e = this.options.nativeAddon.getCurrentPackageFamily().trim();
      if (!e) {
        this.lastUnavailableReason = `missing current windows package family`;
        return;
      }
      (this.options.nativeAddon.armProcessTreeCleanup(),
        (this.stateRoot = l.default.join(o.app.getPath(`userData`), `windows-msix-updater`, e)),
        await p.default.mkdir(this.stateRoot, { recursive: !0 }),
        (this.stateRoot = await p.default.realpath(this.stateRoot)),
        await p.default.rm(l.default.join(this.stateRoot, Cw), { recursive: !0, force: !0 }),
        await this.reconcileLocalPreparedState(),
        this.options.checkIntervalMs > 0 &&
          setInterval(() => {
            this.checkForUpdatesInBackground();
          }, this.options.checkIntervalMs).unref(),
        this.options.checkForUpdatesOnInitialize !== !1 && this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.lastUnavailableReason == null;
    }
    getUnavailableReason() {
      return this.lastUnavailableReason;
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    replayUpdateManifestValidated() {
      return this.lastValidatedUpdateManifest == null
        ? Promise.resolve()
        : this.notifyUpdateManifestValidated(this.lastValidatedUpdateManifest);
    }
    async checkForUpdates() {
      let e = this.inFlightManualCheck ?? this.performManualCheck().catch(() => {});
      this.inFlightManualCheck = e;
      try {
        await e;
      } finally {
        this.inFlightManualCheck === e && (this.inFlightManualCheck = null);
      }
    }
    async checkForUpdatesInBackground() {
      if (this.inFlightManualCheck) {
        await this.inFlightManualCheck;
        return;
      }
      this.inFlightInstall || (await this.runCheck({ manual: !1 }).catch(() => {}));
    }
    async installUpdatesIfAvailable() {
      if (this.inFlightInstall) {
        await this.inFlightInstall;
        return;
      }
      let e = this.installPreparedUpdate();
      this.inFlightInstall = e;
      try {
        await e;
      } catch (e) {
        (this.setInstallProgressPercent(null),
          xw().error(`Failed to install prepared Windows update`, {
            safe: {},
            sensitive: { error: e },
          }),
          await this.showActionError({
            message: `Unable to install the ${o.app.getName()} update.`,
            detail: `Try checking for updates again.`,
          }));
      } finally {
        this.inFlightInstall === e && (this.inFlightInstall = null);
      }
    }
    async runCheck({ manual: e }) {
      let t = this.inFlightCheck ?? this.performCheck();
      this.inFlightCheck = t;
      try {
        let n = await t;
        return (e && (await this.showManualCheckResult(n)), n);
      } catch (t) {
        throw (
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          xw().error(`Failed to check for Windows updates`, { safe: {}, sensitive: { error: t } }),
          e &&
            (await this.showActionError({
              message: `Unable to check for ${o.app.getName()} updates.`,
              detail: t instanceof Error ? t.message : String(t),
            })),
          t
        );
      } finally {
        this.inFlightCheck === t && (this.inFlightCheck = null);
      }
    }
    async performManualCheck() {
      if (!this.inFlightInstall) {
        if (this.isUpdateReady && this.inFlightCheck == null) {
          await this.showManualCheckResult(`update-ready`);
          return;
        }
        await this.runCheck({ manual: !0 });
      }
    }
    async fetchManifest() {
      let e = await o.net.fetch(this.options.manifestUrl);
      if (!e.ok)
        throw Error(`Windows update manifest request failed (${e.status} ${e.statusText})`);
      this.assertFetchedHttpsUrl(e.url, this.options.manifestUrl, `manifest`);
      let t = JSON.parse(await e.text());
      if (
        typeof t.buildVersion != `string` ||
        typeof t.packageIdentity != `string` ||
        (typeof t.packagePublisher != `string` && this.options.getPackageUrlForBuildVersion == null)
      )
        throw Error(`Windows update manifest is missing required fields.`);
      let n = t.buildVersion.trim(),
        r = this.selectManifestPackage(t, this.options.getPackageUrlForBuildVersion?.(n) ?? null);
      return {
        buildVersion: n,
        frameworks: t.frameworks,
        packageIdentity: t.packageIdentity.trim(),
        packagePublisher:
          typeof t.packagePublisher == `string`
            ? t.packagePublisher.trim()
            : this.options.packagePublisher,
        ...r,
      };
    }
    selectManifestPackage(e, t) {
      if (Array.isArray(e.packages)) {
        let t = e.packages.find((e) => e.arch === process.arch);
        if (t == null)
          throw Error(`Windows update manifest is missing a package for ${process.arch}.`);
        return this.validateManifestPackage(t);
      }
      return typeof e.packageUrl != `string` && t != null
        ? { packageUrl: this.validatePackageUrl(t), length: null, sha256: null }
        : this.validateManifestPackage(e);
    }
    validateManifestPackage(e) {
      if (
        typeof e.packageUrl != `string` ||
        typeof e.sha256 != `string` ||
        typeof e.length != `number`
      )
        throw Error(`Windows update manifest is missing required fields.`);
      return {
        packageUrl: this.validatePackageUrl(e.packageUrl),
        sha256: e.sha256.trim().toLowerCase(),
        length: e.length,
      };
    }
    validatePackageUrl(e) {
      let t = new URL(e.trim());
      if (t.protocol !== `https:`)
        throw Error(`Windows update package URL must use https transport.`);
      return t.toString();
    }
    async downloadUpdatePackage(e) {
      let t = e.packageUrl,
        n = decodeURIComponent(l.default.posix.basename(new URL(t).pathname)).trim();
      if (n === `` || !n.toLowerCase().endsWith(`.msix`))
        throw Error(`Invalid Windows update package URL '${t}'.`);
      let r = l.default.join(this.stateRoot, n),
        i = `${r}.download`;
      await this.cleanupDownloadedPackages(i);
      let a = await o.net.fetch(t);
      if (!a.ok || a.body == null)
        throw Error(`Windows update download failed (${a.status} ${a.statusText})`);
      this.assertFetchedHttpsUrl(a.url, t, `package`);
      let s = (0, d.createHash)(`sha256`),
        c = 0,
        u = Number(a.headers.get(`content-length`)),
        f = e.length ?? (Number.isFinite(u) && u > 0 ? u : null);
      this.setDownloadProgressPercent(0);
      let m = v.Readable.fromWeb(a.body),
        h = await p.default.open(i, `w`);
      try {
        for await (let e of m) {
          let t = Buffer.isBuffer(e) ? e : Buffer.from(e);
          ((c += t.length),
            f != null && f > 0 && this.setDownloadProgressPercent((c / f) * 100),
            s.update(t),
            await h.write(t));
        }
      } finally {
        await h.close();
      }
      this.setDownloadProgressPercent(100);
      let g = s.digest(`hex`).toLowerCase();
      if (e.length != null && c !== e.length)
        throw (
          await p.default.rm(i, { force: !0 }),
          Error(`Downloaded MSIX length mismatch (expected ${e.length}, got ${c}).`)
        );
      if (e.sha256 != null && g !== e.sha256)
        throw (
          await p.default.rm(i, { force: !0 }),
          Error(`Downloaded MSIX checksum mismatch (expected ${e.sha256}, got ${g}).`)
        );
      return (await p.default.rename(i, r), { length: c, packagePath: r, sha256: g });
    }
    async installPreparedUpdate() {
      let e = await this.readStageState();
      if (e == null) throw Error(`Install requested without a staged Windows update.`);
      let t = l.default.join(this.stateRoot, Cw),
        n = e.packagePath.startsWith(`https:`),
        r = n ? e.packagePath : l.default.join(t, l.default.basename(e.packagePath));
      n || (await p.default.mkdir(t, { recursive: !0 }), await p.default.link(e.packagePath, r));
      try {
        throw (
          this.setUpdateReady(!1),
          this.setInstallProgressPercent(0),
          await bw(),
          await this.options.onBeforeInstall?.(),
          await this.options.nativeAddon.activateStagedPackage(r, (e) => {
            this.setInstallProgressPercent(e);
          }),
          Error(`Windows completed the update without restarting the app.`)
        );
      } catch (e) {
        throw (
          await this.reconcileLocalPreparedState(),
          this.setInstallProgressPercent(null),
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          e
        );
      } finally {
        await p.default.rm(t, { recursive: !0, force: !0 });
      }
    }
    async showManualCheckResult(e) {
      if (e === `update-ready`) {
        await o.dialog.showMessageBox({
          type: `info`,
          buttons: [`OK`],
          defaultId: 0,
          noLink: !0,
          message: `${o.app.getName()} update is ready to install.`,
        });
        return;
      }
      await o.dialog.showMessageBox({
        type: `info`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: `${o.app.getName()} is up to date.`,
      });
    }
    async reconcileLocalPreparedState() {
      let e = await this.readStageState();
      if (e == null) {
        ((this.lastValidatedUpdateManifest = null), this.setUpdateReady(!1));
        return;
      }
      if (gw(e.buildVersion, this.options.buildVersion) <= 0) {
        (await this.discardPreparedUpdate(), (this.lastValidatedUpdateManifest = null));
        return;
      }
      (this.setUpdateReady(!0),
        this.setUpdateLifecycleState(`ready`),
        await this.notifyUpdateManifestValidated({
          buildVersion: e.buildVersion,
          frameworks: e.frameworks,
        }));
    }
    async readStageState() {
      let e = this.getStageStatePath();
      try {
        let t = await p.default.readFile(e, `utf8`),
          n = JSON.parse(t);
        if (
          typeof n.buildVersion != `string` ||
          (typeof n.length != `number` && n.length != null) ||
          typeof n.packagePath != `string` ||
          (typeof n.sha256 != `string` && n.sha256 != null)
        )
          throw Error(`missing required fields`);
        let r = n.packagePath.trim();
        if (r === ``) throw Error(`missing required package path`);
        let i = r.startsWith(`https:`)
          ? this.validatePackageUrl(r)
          : l.default.join(this.stateRoot, decodeURIComponent(l.default.basename(r)));
        return {
          buildVersion: n.buildVersion.trim(),
          frameworks: n.frameworks,
          length: n.length ?? null,
          packagePath: i,
          sha256: n.sha256?.trim().toLowerCase() ?? null,
        };
      } catch (t) {
        return t?.code === `ENOENT`
          ? null
          : (xw().warning(`Discarding invalid Windows updater staged state.`, {
              safe: {},
              sensitive: { error: t, statePath: e },
            }),
            await p.default.rm(e, { force: !0 }),
            null);
      }
    }
    async cleanupDownloadedPackages(e) {
      let t = await p.default.readdir(this.stateRoot, { withFileTypes: !0 });
      await Promise.all(
        t
          .filter((e) => {
            if (!e.isFile()) return !1;
            let t = e.name.toLowerCase();
            return t.endsWith(`.msix`) || t.endsWith(`.download`);
          })
          .map((t) => {
            let n = l.default.join(this.stateRoot, t.name);
            return e != null && n === e ? Promise.resolve() : p.default.rm(n, { force: !0 });
          }),
      );
    }
    assertFetchedHttpsUrl(e, t, n) {
      let r = e.trim() || t;
      if (new URL(r).protocol !== `https:`)
        throw Error(`Windows update ${n} URL must use https transport.`);
    }
    async performCheck() {
      this.isUpdateReady || this.setUpdateLifecycleState(`checking`);
      let e = await this.fetchManifest();
      if (e.packageIdentity !== this.options.packageIdentity)
        throw Error(
          `Windows update manifest targets package identity '${e.packageIdentity}' instead of '${this.options.packageIdentity}'.`,
        );
      if (e.packagePublisher !== this.options.packagePublisher)
        throw Error(
          `Windows update manifest targets package publisher '${e.packagePublisher}' instead of '${this.options.packagePublisher}'.`,
        );
      if (gw(e.buildVersion, this.options.buildVersion) <= 0) {
        (await this.discardPreparedUpdate(),
          (this.lastValidatedUpdateManifest = null),
          this.setUpdateLifecycleState(`idle`));
        let e = this.options.onUpdateCheckUpToDate;
        return (
          e != null &&
            Promise.resolve()
              .then(e)
              .catch((e) => {
                xw().warning(`Windows up-to-date check hook failed`, {
                  safe: {},
                  sensitive: { error: e },
                });
              }),
          `up-to-date`
        );
      }
      let t = await this.readStageState();
      if (
        t != null &&
        t.buildVersion === e.buildVersion &&
        (e.length == null || t.length === e.length) &&
        (e.sha256 == null || t.sha256 === e.sha256)
      )
        return (
          await this.notifyUpdateManifestValidated({
            buildVersion: t.buildVersion,
            frameworks: t.frameworks,
          }),
          this.setUpdateReady(!0),
          this.setUpdateLifecycleState(`ready`),
          `update-ready`
        );
      (await this.notifyUpdateManifestValidated({
        buildVersion: e.buildVersion,
        frameworks: e.frameworks,
      }),
        t != null && (await this.discardPreparedUpdate()),
        this.setUpdateLifecycleState(`downloading`));
      let n;
      if (this.options.getPackageUrlForBuildVersion != null)
        n = {
          buildVersion: e.buildVersion,
          frameworks: e.frameworks,
          length: null,
          packagePath: e.packageUrl,
          sha256: null,
        };
      else {
        let t = await this.downloadUpdatePackage(e);
        (await this.assertDownloadedPackageMatchesManifest(t.packagePath),
          (n = { buildVersion: e.buildVersion, frameworks: e.frameworks, ...t }));
      }
      await this.options.nativeAddon.stagePackage(n.packagePath);
      let r = this.getStageStatePath();
      return (
        await p.default.writeFile(`${r}.tmp`, JSON.stringify(n, null, 2)),
        await p.default.rename(`${r}.tmp`, r),
        this.setUpdateReady(!0),
        this.setUpdateLifecycleState(`ready`),
        `update-ready`
      );
    }
    async notifyUpdateManifestValidated(e) {
      this.lastValidatedUpdateManifest = e;
      let t = this.options.onUpdateManifestValidated;
      if (t == null) return;
      let n = (t) => {
        xw().warning(`Windows update manifest validated hook failed`, {
          safe: { buildVersion: e.buildVersion },
          sensitive: { error: t },
        });
      };
      try {
        await t(e);
      } catch (e) {
        n(e);
      }
    }
    async assertDownloadedPackageMatchesManifest(e) {
      let t = await this.options.nativeAddon.readPackageMetadata(e);
      if (t.packageIdentity !== this.options.packageIdentity)
        throw Error(
          `Downloaded MSIX has package identity '${t.packageIdentity}' instead of '${this.options.packageIdentity}'.`,
        );
      if (t.packagePublisher !== this.options.packagePublisher)
        throw Error(
          `Downloaded MSIX has package publisher '${t.packagePublisher}' instead of '${this.options.packagePublisher}'.`,
        );
      if (t.architecture !== process.arch)
        throw Error(
          `Downloaded MSIX has architecture '${t.architecture}' instead of '${process.arch}'.`,
        );
    }
    getStageStatePath() {
      return l.default.join(this.stateRoot, `staged-msix.json`);
    }
    async discardPreparedUpdate() {
      (await p.default.rm(this.getStageStatePath(), { force: !0 }),
        await this.cleanupDownloadedPackages(),
        this.setUpdateReady(!1));
    }
    setUpdateReady(e) {
      this.isUpdateReady !== e &&
        ((this.isUpdateReady = e), this.options.onUpdateReadyChanged?.(e));
    }
    setUpdateLifecycleState(e) {
      (this.options.onUpdateLifecycleStateChanged?.(e),
        e !== `downloading` && this.setDownloadProgressPercent(null));
    }
    setDownloadProgressPercent(e) {
      let t = e == null ? null : Math.round(Math.min(100, Math.max(0, e)));
      this.downloadProgressPercent !== t &&
        ((this.downloadProgressPercent = t), this.options.onDownloadProgressChanged?.(t));
    }
    setInstallProgressPercent(e) {
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e));
    }
    async showActionError({ message: e, detail: t }) {
      await o.dialog.showMessageBox({
        type: `error`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: e,
        detail: t,
      });
    }
  };
function Tw() {
  let e;
  try {
    return Sw((0, l.join)(process.resourcesPath, `native`, `windows-updater.node`));
  } catch (t) {
    e = t;
  }
  return (
    xw().error(`Failed to load native Windows updater addon`, {
      safe: {},
      sensitive: { error: e },
    }),
    null
  );
}
var Ew = 1,
  Dw = 1800 * 1e3,
  Ow = n.ru({
    schemaVersion: n.nu().int().min(Ew),
    buildVersion: n.su().trim().min(1),
    storeProductId: n.su().trim().min(1),
    packageIdentity: n.su().trim().min(1),
  });
function kw(e) {
  let t = new URL(e.storeUpdateManifestUrl.trim());
  if (t.protocol !== `https:`)
    throw Error(`Windows Store update manifest URL must use https transport.`);
  return t.toString();
}
async function Aw(e) {
  let t = kw(e),
    n = await e.fetch(t);
  if (n.status === 404) return null;
  if (!n.ok)
    throw Error(`Windows Store update manifest request failed (${n.status} ${n.statusText})`);
  if (new URL(n.url.trim() || t).protocol !== `https:`)
    throw Error(`Windows Store update manifest must use https transport.`);
  return Ow.parse(JSON.parse(await n.text()));
}
function jw(e) {
  let { manifest: t } = e,
    n = _w(e.buildVersion),
    r = e.lastStoreDetectionAttemptAtMs != null && e.nowMs - e.lastStoreDetectionAttemptAtMs < Dw;
  if (t == null)
    return n
      ? n
        ? `up-to-date`
        : `should-check-store`
      : e.isUpdateReady
        ? `update-ready`
        : r
          ? `waiting-for-store`
          : `should-check-store`;
  if (t.storeProductId !== e.storeProductId)
    throw Error(
      `Windows Store update manifest targets product '${t.storeProductId}' instead of '${e.storeProductId}'.`,
    );
  if (t.packageIdentity !== e.packageIdentity)
    throw Error(
      `Windows Store update manifest targets package identity '${t.packageIdentity}' instead of '${e.packageIdentity}'.`,
    );
  if (!_w(t.buildVersion))
    throw Error(`Windows Store update manifest has invalid build version '${t.buildVersion}'.`);
  return n && gw(t.buildVersion, e.buildVersion) <= 0
    ? `up-to-date`
    : e.isUpdateReady
      ? `update-ready`
      : r
        ? `waiting-for-store`
        : `should-check-store`;
}
var Mw = r.i(`windows-store-updater`),
  Nw = class {
    options;
    isUpdateReady = !1;
    downloadProgressPercent = null;
    installProgressPercent = null;
    lastUnavailableReason = null;
    activeCheck = null;
    inFlightManualCheck = null;
    inFlightInstall = null;
    lastStoreDetectionAttemptAtMs = null;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      if (!o.app.isPackaged) {
        this.lastUnavailableReason = `dev build`;
        return;
      }
      if (!this.options.storeProductId.trim()) {
        this.lastUnavailableReason = `missing windows store product id`;
        return;
      }
      if (!this.options.storeUpdateManifestUrl.trim()) {
        this.lastUnavailableReason = `missing windows store update manifest url`;
        return;
      }
      if (!this.options.packageIdentity.trim()) {
        this.lastUnavailableReason = `missing packaged windows package identity`;
        return;
      }
      try {
        kw(this.options);
      } catch {
        this.lastUnavailableReason = `invalid windows store update manifest url`;
        return;
      }
      if (!this.options.nativeAddon.getCurrentPackageFamily().trim()) {
        this.lastUnavailableReason = `missing current windows package family`;
        return;
      }
      (this.options.checkIntervalMs > 0 &&
        setInterval(() => {
          this.checkForUpdatesInBackground();
        }, this.options.checkIntervalMs).unref(),
        this.options.checkOnInitialize !== !1 && this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.lastUnavailableReason == null;
    }
    getUnavailableReason() {
      return this.lastUnavailableReason;
    }
    getIsUpdateReady() {
      return this.isUpdateReady;
    }
    async checkForUpdates() {
      await this.runManualCheck({ allowFallback: !1 }).catch(() => {});
    }
    async checkForUpdatesWithFallbackDecision({ manual: e = !1 } = {}) {
      return e
        ? this.runManualCheck({ allowFallback: !0 })
            .then(({ decision: e }) => e)
            .catch(() => ({ kind: `handled` }))
        : this.inFlightManualCheck
          ? (await this.inFlightManualCheck.promise, { kind: `handled` })
          : this.runCheck({ allowFallback: !0, manual: !1 })
              .then(({ decision: e }) => e)
              .catch(() => ({ kind: `handled` }));
    }
    async checkForUpdatesInBackground() {
      if (this.inFlightManualCheck) {
        await this.inFlightManualCheck.promise;
        return;
      }
      await this.runCheck({ allowFallback: !1, manual: !1 }).catch(() => {});
    }
    async installUpdatesIfAvailable() {
      if (this.inFlightInstall) {
        await this.inFlightInstall;
        return;
      }
      let e = this.performInstall();
      this.inFlightInstall = e;
      try {
        await e;
      } catch (e) {
        (this.setInstallProgressPercent(null),
          Mw().error(`Failed to install Windows Store update`, {
            safe: {},
            sensitive: { error: e },
          }),
          await this.showActionError({
            message: `Unable to install the ${o.app.getName()} update.`,
            detail: `Try checking for updates again.`,
          }));
      } finally {
        this.inFlightInstall === e && (this.inFlightInstall = null);
      }
    }
    async runCheck({ allowFallback: e, manual: t }) {
      let n = this.activeCheck;
      if (n == null || n.allowFallback !== e || (t && !n.bypassStoreDetectionThrottle)) {
        let r = n;
        ((n = {
          allowFallback: e,
          bypassStoreDetectionThrottle: t,
          promise: (async () => (
            r != null && (await r.promise.catch(() => {})),
            this.performCheck({ allowFallback: e, bypassStoreDetectionThrottle: t })
          ))(),
        }),
          (this.activeCheck = n));
      }
      try {
        let e = await n.promise;
        return (
          t &&
            e.decision.kind === `handled` &&
            e.outcome != null &&
            (await this.showCheckResult(e.outcome)),
          e
        );
      } catch (e) {
        throw (
          this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
          Mw().error(`Failed to check for Windows Store updates`, {
            safe: {},
            sensitive: { error: e },
          }),
          t &&
            (await this.showActionError({
              message: `Unable to check for ${o.app.getName()} updates.`,
              detail: e instanceof Error ? e.message : String(e),
            })),
          e
        );
      } finally {
        this.activeCheck === n && (this.activeCheck = null);
      }
    }
    async performCheck({ allowFallback: e, bypassStoreDetectionThrottle: t }) {
      this.isUpdateReady || this.setUpdateLifecycleState(`checking`);
      let n = await Aw({ fetch: (e) => o.net.fetch(e), ...this.options });
      _w(this.options.buildVersion) ||
        Mw().warning(
          `Local Windows Store build version is unavailable; bypassing manifest version gate.`,
          {
            safe: {
              buildVersion: this.options.buildVersion,
              manifestBuildVersion: n?.buildVersion ?? null,
              packageIdentity: this.options.packageIdentity,
            },
            sensitive: {},
          },
        );
      let r = jw({
        manifest: n,
        storeProductId: this.options.storeProductId,
        packageIdentity: this.options.packageIdentity,
        buildVersion: this.options.buildVersion,
        isUpdateReady: this.isUpdateReady,
        lastStoreDetectionAttemptAtMs: t ? null : this.lastStoreDetectionAttemptAtMs,
        nowMs: Date.now(),
      });
      if (r === `up-to-date`)
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          { decision: { kind: `handled` }, outcome: `up-to-date` }
        );
      if (r !== `should-check-store`)
        return (
          this.setUpdateLifecycleState(r === `update-ready` ? `ready` : `idle`),
          {
            decision: { kind: `handled` },
            outcome: r === `update-ready` ? `update-ready` : `waiting-for-store`,
          }
        );
      ((this.lastStoreDetectionAttemptAtMs = Date.now()),
        Mw().info(`Checking Windows Store for package updates`, {
          safe: {
            buildVersion: this.options.buildVersion,
            manifestBuildVersion: n?.buildVersion ?? null,
            packageIdentity: this.options.packageIdentity,
          },
          sensitive: {},
        }),
        this.setUpdateLifecycleState(`downloading`),
        this.setDownloadProgressPercent(0));
      let i;
      try {
        i = await this.options.nativeAddon.trySilentDownloadStoreUpdates((e) => {
          this.setDownloadProgressPercent(e);
        });
      } catch (t) {
        if (
          (this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          Mw().warning(`Windows Store update operation failed`, {
            safe: {},
            sensitive: { error: t },
          }),
          !e)
        )
          throw t;
        return { decision: { kind: `fallback`, reason: `store-operation-failed` }, outcome: null };
      }
      if (
        (Mw().info(`Windows Store package update check completed`, {
          safe: {
            canSilentlyDownload: i.canSilentlyDownload,
            completed: i.completed,
            hasUpdate: i.hasUpdate,
            overallState: i.overallState,
          },
          sensitive: {},
        }),
        !i.hasUpdate)
      )
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          { decision: { kind: `handled` }, outcome: `up-to-date` }
        );
      if (!i.canSilentlyDownload)
        return (
          this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          e
            ? {
                decision: { kind: `fallback`, reason: `silent-download-unavailable` },
                outcome: null,
              }
            : { decision: { kind: `handled` }, outcome: `update-available-in-store` }
        );
      if (!i.completed) {
        if (
          (this.setUpdateReady(!1),
          this.setUpdateLifecycleState(`idle`),
          i.overallState === `OtherError` || i.overallState === `Unknown`)
        ) {
          if (!e)
            throw Error(`Windows Store update download failed with state '${i.overallState}'.`);
          return { decision: { kind: `fallback`, reason: `store-download-failed` }, outcome: null };
        }
        throw Error(`Windows Store update download failed with state '${i.overallState}'.`);
      }
      return (
        this.setDownloadProgressPercent(100),
        this.setUpdateReady(!0),
        this.setUpdateLifecycleState(`ready`),
        { decision: { kind: `handled` }, outcome: `update-ready` }
      );
    }
    async runManualCheck({ allowFallback: e }) {
      let t = this.inFlightManualCheck;
      if (t == null || t.allowFallback !== e) {
        let n = t;
        ((t = {
          allowFallback: e,
          promise: (async () => (
            n != null && (await n.promise.catch(() => {})),
            this.performManualCheck({ allowFallback: e })
          ))(),
        }),
          (this.inFlightManualCheck = t));
      }
      try {
        return await t.promise;
      } finally {
        this.inFlightManualCheck === t && (this.inFlightManualCheck = null);
      }
    }
    async performManualCheck({ allowFallback: e }) {
      return this.isUpdateReady && this.activeCheck == null
        ? (await this.showCheckResult(`update-ready`),
          { decision: { kind: `handled` }, outcome: `update-ready` })
        : this.runCheck({ allowFallback: e, manual: !0 });
    }
    async performInstall() {
      if (!this.isUpdateReady) return;
      (this.setUpdateReady(!1), this.setInstallProgressPercent(0));
      let e = !1,
        t = () => {
          e || ((e = !0), this.options.onInstallUpdatesRequested?.());
        };
      (await bw(), this.options.onBeforeInstall && (await this.options.onBeforeInstall()));
      let n = await this.options.nativeAddon.trySilentDownloadAndInstallStoreUpdates((e, n) => {
        (this.setInstallProgressPercent(e), n === `Deploying` && t());
      });
      if (!n.hasUpdate) {
        this.setInstallProgressPercent(null);
        return;
      }
      if (!n.canSilentlyDownload) {
        (this.setInstallProgressPercent(null),
          await this.showCheckResult(`update-available-in-store`));
        return;
      }
      if ((this.setUpdateReady(!0), n.completed)) {
        (this.setUpdateReady(!1), this.setInstallProgressPercent(100), t());
        return;
      }
      throw (
        this.setInstallProgressPercent(null),
        Error(`Windows Store update install failed with state '${n.overallState}'.`)
      );
    }
    setUpdateReady(e) {
      this.isUpdateReady !== e &&
        ((this.isUpdateReady = e), this.options.onUpdateReadyChanged?.(e));
    }
    setUpdateLifecycleState(e) {
      (this.options.onUpdateLifecycleStateChanged?.(e),
        e !== `downloading` && this.setDownloadProgressPercent(null));
    }
    setDownloadProgressPercent(e) {
      let t = e == null ? null : Math.round(Math.min(100, Math.max(0, e)));
      this.downloadProgressPercent !== t &&
        ((this.downloadProgressPercent = t), this.options.onDownloadProgressChanged?.(t));
    }
    setInstallProgressPercent(e) {
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e));
    }
    async showActionError({ message: e, detail: t }) {
      await o.dialog.showMessageBox({
        type: `error`,
        buttons: [`OK`],
        defaultId: 0,
        noLink: !0,
        message: e,
        detail: t,
      });
    }
    async showCheckResult(e) {
      switch (e) {
        case `up-to-date`:
          await o.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${o.app.getName()} is up to date.`,
          });
          return;
        case `update-ready`:
          await o.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${o.app.getName()} update is ready to install.`,
          });
          return;
        case `update-available-in-store`:
          await o.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `${o.app.getName()} update is available.`,
            detail: `Open Microsoft Store to install the update.`,
          });
          return;
        case `waiting-for-store`:
          await o.dialog.showMessageBox({
            type: `info`,
            buttons: [`OK`],
            defaultId: 0,
            noLink: !0,
            message: `Microsoft Store was checked recently.`,
            detail: `Try checking again later.`,
          });
          return;
      }
    }
  },
  Pw = class {
    options;
    activeUpdater = null;
    installPromise = null;
    isMsixFallbackUpdaterInitialized = !1;
    shouldCheckMsixFallback = !1;
    constructor(e) {
      this.options = e;
    }
    async initialize() {
      await this.options.storeUpdater.initialize();
      try {
        (await this.options.msixFallbackUpdater.initialize(),
          (this.isMsixFallbackUpdaterInitialized = !0));
      } catch {}
      (this.hasMsixFallbackUpdater() &&
        this.options.msixFallbackUpdater.getIsUpdateReady() &&
        ((this.activeUpdater = this.options.msixFallbackUpdater),
        (this.shouldCheckMsixFallback = !0)),
        this.options.checkIntervalMs > 0 &&
          setInterval(() => {
            this.checkForUpdatesInBackground();
          }, this.options.checkIntervalMs).unref(),
        this.checkForUpdatesInBackground());
    }
    hasUpdater() {
      return this.options.storeUpdater.hasUpdater() || this.hasMsixFallbackUpdater();
    }
    getUnavailableReason() {
      return this.hasUpdater()
        ? null
        : (this.options.storeUpdater.getUnavailableReason() ??
            (this.isMsixFallbackUpdaterInitialized
              ? this.options.msixFallbackUpdater.getUnavailableReason()
              : null));
    }
    getIsUpdateReady() {
      return (
        this.options.storeUpdater.getIsUpdateReady() ||
        (this.hasMsixFallbackUpdater() && this.options.msixFallbackUpdater.getIsUpdateReady())
      );
    }
    async checkForUpdates() {
      await this.runCheck(`manual`);
    }
    async checkForUpdatesInBackground() {
      await this.runCheck(`background`);
    }
    async installUpdatesIfAvailable() {
      if (this.installPromise != null) return this.installPromise;
      let e = null;
      if (
        (this.activeUpdater?.getIsUpdateReady()
          ? (e = this.activeUpdater)
          : this.hasMsixFallbackUpdater() && this.options.msixFallbackUpdater.getIsUpdateReady()
            ? (e = this.options.msixFallbackUpdater)
            : this.options.storeUpdater.hasUpdater() &&
              this.options.storeUpdater.getIsUpdateReady() &&
              (e = this.options.storeUpdater),
        e != null)
      )
        try {
          ((this.installPromise = e.installUpdatesIfAvailable()), await this.installPromise);
        } finally {
          ((this.installPromise = null),
            this.activeUpdater != null &&
              !this.activeUpdater.getIsUpdateReady() &&
              (this.activeUpdater = null));
        }
    }
    async runCheck(e) {
      if (!this.options.storeUpdater.hasUpdater()) {
        ((this.shouldCheckMsixFallback = !0), await this.checkMsixFallback(e));
        return;
      }
      if (
        (
          await this.options.storeUpdater.checkForUpdatesWithFallbackDecision({
            manual: e === `manual`,
          })
        ).kind === `fallback`
      ) {
        ((this.shouldCheckMsixFallback = !0), await this.checkMsixFallback(e));
        return;
      }
      if (this.options.storeUpdater.getIsUpdateReady()) {
        ((this.shouldCheckMsixFallback = !1), (this.activeUpdater = this.options.storeUpdater));
        return;
      }
      this.shouldCheckMsixFallback && (await this.checkMsixFallback(e));
    }
    async checkMsixFallback(e) {
      this.hasMsixFallbackUpdater() &&
        (e === `manual`
          ? await this.options.msixFallbackUpdater.checkForUpdates()
          : await this.options.msixFallbackUpdater.checkForUpdatesInBackground(),
        this.options.msixFallbackUpdater.getIsUpdateReady()
          ? (this.activeUpdater = this.options.msixFallbackUpdater)
          : this.activeUpdater === this.options.msixFallbackUpdater && (this.activeUpdater = null));
    }
    hasMsixFallbackUpdater() {
      return this.isMsixFallbackUpdaterInitialized && this.options.msixFallbackUpdater.hasUpdater();
    }
  },
  Fw = (0, ee.createRequire)(__filename),
  Iw = 15,
  Lw = 3e5,
  Rw = 300 * 60 * 1e3,
  zw = 60 * 1e3,
  Bw = 1440 * 60 * 1e3,
  Vw = 3,
  Hw = 2 ** 31 - 1;
function Uw() {
  let e = process.env.SPARKLE_UPDATE_INTERVAL_MINUTES;
  if (!e) return Iw * 60 * 1e3;
  let t = Number(e);
  return Number.isFinite(t) ? (t <= 0 ? 0 : t * 60 * 1e3) : Iw * 60 * 1e3;
}
var Ww = class {
  options;
  prepareWindowsUpdate;
  logger = r.r(`sparkle`);
  inAppUpdatesLaunchPolicy = `pending`;
  inAppUpdatesLaunchPolicyResolution = Promise.withResolvers();
  inAppUpdatesLaunchPolicyTimer = null;
  updaterInitialization = null;
  updater = null;
  pendingWindowsRuntimeFrameworkStageReplay = !1;
  isUpdateReady = !1;
  updateLifecycleState = `idle`;
  downloadProgressPercent = null;
  installProgressPercent = null;
  lastUnavailableReason = null;
  updateDownloadedAtMs = null;
  downloadedUpdateAppBrand = null;
  forcedUpdateTimer = null;
  forcedUpdateInstallStarted = !1;
  forcedUpdateRetryAtMs = null;
  owlUpdatePolicies = null;
  relaunchNotice = null;
  automaticBackgroundDownloadsEnabled = !1;
  sparkleQueryParams = { beta: !1, planType: `unknown` };
  pendingSparkleQueryParams = null;
  productionSparkle = null;
  macExecutableIdentityAtLaunch = null;
  setAutomaticBackgroundDownloadsEnabledForMac = null;
  constructor(e) {
    this.options = e;
  }
  async initialize() {
    if (!this.options.enableUpdater) {
      ((this.lastUnavailableReason =
        process.platform !== `darwin` && process.platform !== `win32`
          ? `unsupported platform`
          : `disabled for build flavor (${this.options.buildFlavor})`),
        this.inAppUpdatesLaunchPolicyResolution.resolve(void 0));
      return;
    }
    (o.ipcMain.handle(`codex_desktop:check-for-updates`, async (e) => {
      this.options.isTrustedIpcEvent(e) && (await this.checkForUpdates());
    }),
      this.logger.info(`in_app_updates_policy_wait_started`, { safe: { timeoutMs: Lw } }),
      (this.inAppUpdatesLaunchPolicyTimer = setTimeout(() => {
        ((this.inAppUpdatesLaunchPolicyTimer = null),
          this.logger.info(`in_app_updates_policy_timeout`, {
            safe: { timeoutMs: Lw, policy: this.inAppUpdatesLaunchPolicy },
          }),
          this.allowInAppUpdatesForLaunch());
      }, Lw)),
      this.inAppUpdatesLaunchPolicyTimer.unref());
  }
  async latchInAppUpdatesEnabledForLaunch(e) {
    if (
      (this.logger.info(`in_app_updates_policy_latch`, {
        safe: {
          enabled: e,
          policy: this.inAppUpdatesLaunchPolicy,
          ignored: this.inAppUpdatesLaunchPolicy !== `pending`,
        },
      }),
      this.inAppUpdatesLaunchPolicy === `pending`)
    ) {
      if (e) {
        await this.allowInAppUpdatesForLaunch();
        return;
      }
      (this.clearInAppUpdatesLaunchPolicyTimer(),
        (this.inAppUpdatesLaunchPolicy = `denied`),
        this.inAppUpdatesLaunchPolicyResolution.resolve(void 0));
    }
  }
  async startUpdaterAfterStartupFailure() {
    (this.logger.info(`in_app_updates_policy_startup_recovery`, {
      safe: { policy: this.inAppUpdatesLaunchPolicy },
    }),
      await this.allowInAppUpdatesForLaunch());
  }
  hasUpdater() {
    return this.updater != null;
  }
  replayWindowsRuntimeFrameworkStage() {
    return process.platform === `win32`
      ? this.updater == null
        ? ((this.pendingWindowsRuntimeFrameworkStageReplay = !0), Promise.resolve())
        : (this.updater.replayUpdateManifestValidated?.() ?? Promise.resolve())
      : Promise.resolve();
  }
  async allowInAppUpdatesForLaunch() {
    this.inAppUpdatesLaunchPolicy !== `denied` &&
      (this.clearInAppUpdatesLaunchPolicyTimer(),
      (this.inAppUpdatesLaunchPolicy = `allowed`),
      this.inAppUpdatesLaunchPolicyResolution.resolve(void 0),
      await this.initializeUpdater());
  }
  initializeUpdater() {
    return this.options.enableUpdater
      ? ((this.updaterInitialization ??= this.initializeUpdaterOnce()), this.updaterInitialization)
      : Promise.resolve();
  }
  async initializeUpdaterOnce() {
    try {
      if (
        (process.platform === `win32`
          ? await this.initializeWindowsUpdater()
          : process.platform === `linux`
            ? this.initializeLinuxPackageUpdater()
            : await this.initializeMacSparkle(),
        this.hasUpdater())
      ) {
        this.observeRelaunchNotificationPolicy();
        return;
      }
      this.logger.warning(`Updater unavailable after init.`, {
        safe: {
          platform: process.platform,
          packaged: this.options.isPackaged,
          reason: this.lastUnavailableReason,
        },
        sensitive: {},
      });
    } catch (e) {
      (this.logger.error(`Failed to set up updater`, { safe: {}, sensitive: { error: e } }),
        (this.lastUnavailableReason = `updater initialization failed`),
        (this.updater = null));
    }
  }
  clearInAppUpdatesLaunchPolicyTimer() {
    this.inAppUpdatesLaunchPolicyTimer != null &&
      (clearTimeout(this.inAppUpdatesLaunchPolicyTimer),
      (this.inAppUpdatesLaunchPolicyTimer = null));
  }
  getIsUpdateReady() {
    return this.isUpdateReady;
  }
  getInstallProgressPercent() {
    return this.installProgressPercent;
  }
  getDownloadProgressPercent() {
    return this.downloadProgressPercent;
  }
  getDownloadedUpdateAppBrand() {
    return this.downloadedUpdateAppBrand;
  }
  getUpdateLifecycleState() {
    return this.updateLifecycleState;
  }
  getRelaunchNotice() {
    return this.relaunchNotice == null
      ? null
      : this.createRelaunchNotice(this.relaunchNotice.deadlineAtMs);
  }
  showRelaunchNoticeForDebug() {
    this.setRelaunchNotice(Date.now() + Rw);
  }
  async checkForUpdates() {
    if (
      (await this.inAppUpdatesLaunchPolicyResolution.promise,
      this.inAppUpdatesLaunchPolicy !== `denied`)
    ) {
      if ((await this.allowInAppUpdatesForLaunch(), !this.updater)) {
        this.logger.warning(`Update check request ignored (updater unavailable).`);
        return;
      }
      try {
        await this.updater.checkForUpdates();
      } catch (e) {
        (this.updateLifecycleState === `checking` &&
          !this.isUpdateReady &&
          this.setUpdateLifecycleState(`idle`),
          this.logger.error(`Failed to check for updates`, { safe: {}, sensitive: { error: e } }));
      }
    }
  }
  async installUpdatesIfAvailable() {
    if (
      (await this.inAppUpdatesLaunchPolicyResolution.promise,
      this.inAppUpdatesLaunchPolicy === `denied`)
    )
      return !1;
    if ((await this.allowInAppUpdatesForLaunch(), !this.updater))
      return (this.logger.warning(`Update install request ignored (updater unavailable).`), !1);
    try {
      return (
        this.isUpdateReady &&
          process.platform !== `darwin` &&
          this.setUpdateLifecycleState(`installing`),
        await this.updater.installUpdatesIfAvailable(),
        !0
      );
    } catch (e) {
      return (
        this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`),
        this.options.onInstallUpdatesAborted?.(),
        this.logger.error(`Failed to install update`, { safe: {}, sensitive: { error: e } }),
        !1
      );
    }
  }
  getUnavailableReason() {
    return this.inAppUpdatesLaunchPolicy === `denied`
      ? `disabled by update policy`
      : this.lastUnavailableReason;
  }
  setSparkleQueryParams(e) {
    ((0, $S.default)(this.sparkleQueryParams, e) && this.pendingSparkleQueryParams == null) ||
      ((this.sparkleQueryParams = e), this.applySparkleQueryParams());
  }
  setAutomaticBackgroundDownloadsEnabled(e) {
    this.automaticBackgroundDownloadsEnabled !== e &&
      ((this.automaticBackgroundDownloadsEnabled = e),
      this.setAutomaticBackgroundDownloadsEnabledForMac?.(e));
  }
  applySparkleQueryParams() {
    let e = this.options.productionAppcastStateStore,
      t = this.productionSparkle;
    if (!(e == null || t == null)) {
      if (!this.canReconfigureProductionAppcast()) {
        this.pendingSparkleQueryParams = this.sparkleQueryParams;
        return;
      }
      try {
        let n = mw({
          beta: this.sparkleQueryParams.beta,
          installationId: e.getOrCreateInstallationId(),
          planType: this.sparkleQueryParams.planType,
        });
        if (n == null) return;
        (t.init(n), (this.pendingSparkleQueryParams = null), (this.lastUnavailableReason = null));
      } catch (e) {
        this.logger.error(`Failed to update production appcast plan`, {
          safe: {},
          sensitive: { error: e },
        });
      }
    }
  }
  canReconfigureProductionAppcast() {
    return (
      !this.isUpdateReady &&
      this.downloadProgressPercent == null &&
      this.updateLifecycleState === `idle`
    );
  }
  async initializeWindowsUpdater() {
    let e = Tw();
    if (!e) {
      this.lastUnavailableReason = `failed to load native windows updater`;
      return;
    }
    let t = Uw(),
      n = {
        nativeAddon: e,
        onBeforeInstall: async () => {
          await this.prepareWindowsUpdate?.();
        },
        onUpdateReadyChanged: (e) => {
          this.setUpdateReady(e);
        },
        onDownloadProgressChanged: (e) => {
          this.setDownloadProgressPercent(e);
        },
        onInstallProgressChanged: (e) => {
          this.setInstallProgressPercent(e);
        },
        onUpdateLifecycleStateChanged: (e) => {
          this.setUpdateLifecycleState(e);
        },
      },
      r = i.a(`codexWindowsPackageIdentity`)?.trim() ?? ``,
      a = i.i.getWindowsStoreConfig(this.options.buildFlavor, r),
      o = i.a(`codexWindowsPackagePublisher`)?.trim() ?? ``,
      s;
    if (a != null) {
      let e = process.arch === `x64` || process.arch === `arm64`,
        i = null,
        c = () => {
          this.setUpdateReady(i?.getIsUpdateReady() ?? !1);
        },
        l = new Nw({
          storeProductId: a.storeProductId,
          storeUpdateManifestUrl: a.storeUpdateManifestUrl,
          buildVersion: this.resolveWindowsStoreBuildVersion(),
          packageIdentity: r,
          onInstallUpdatesRequested: this.options.onInstallUpdatesRequested,
          checkIntervalMs: e ? 0 : t,
          checkOnInitialize: !e,
          ...n,
          onUpdateReadyChanged: e ? c : n.onUpdateReadyChanged,
        });
      e
        ? ((i = new Pw({
            checkIntervalMs: t,
            storeUpdater: l,
            msixFallbackUpdater: new ww({
              manifestUrl: a.storeUpdateManifestUrl,
              getPackageUrlForBuildVersion: (e) => Kw(a.storeUpdateManifestUrl, e),
              buildVersion: this.resolveWindowsStoreBuildVersion(),
              packageIdentity: r,
              packagePublisher: o,
              checkIntervalMs: 0,
              checkForUpdatesOnInitialize: !1,
              ...n,
              onUpdateReadyChanged: c,
            }),
          })),
          (s = i))
        : (s = l);
    } else {
      let e = this.resolveWindowsUpdateUrl();
      if (!e) return;
      s = new ww({
        manifestUrl: e,
        buildVersion: this.resolveBuildVersion(),
        packageIdentity: r,
        packagePublisher: o,
        checkIntervalMs: t,
        onUpdateCheckUpToDate: void 0,
        onUpdateManifestValidated: void 0,
        ...n,
      });
    }
    if ((await s.initialize(), !s.hasUpdater())) {
      this.lastUnavailableReason = s.getUnavailableReason();
      return;
    }
    ((this.lastUnavailableReason = null),
      (this.updater = s),
      this.pendingWindowsRuntimeFrameworkStageReplay &&
        ((this.pendingWindowsRuntimeFrameworkStageReplay = !1),
        this.updater.replayUpdateManifestValidated?.()),
      this.setUpdateReady(s.getIsUpdateReady()),
      this.setInstallProgressPercent(null));
  }
  initializeLinuxPackageUpdater() {
    let e = new rC({
      buildFlavor: this.options.buildFlavor,
      executablePath: process.execPath,
      isPackaged: this.options.isPackaged,
      runningVersion: o.app.getVersion(),
      onInstallUpdatesRequested: () => {
        this.options.onInstallUpdatesRequested?.();
      },
      onUpdateReadyChanged: (e) => {
        this.setUpdateReady(e);
      },
    });
    if ((e.initialize(), !e.hasUpdater())) {
      this.lastUnavailableReason = e.getUnavailableReason();
      return;
    }
    ((this.lastUnavailableReason = null), (this.updater = e));
  }
  async initializeMacSparkle() {
    if (process.platform !== `darwin`) {
      this.lastUnavailableReason = `unsupported platform`;
      return;
    }
    if (!this.options.isPackaged) {
      this.lastUnavailableReason = `dev build`;
      return;
    }
    this.macExecutableIdentityAtLaunch = this.readMacExecutableIdentity();
    let e =
        this.options.buildFlavor === i.i.Prod && this.options.productionAppcastStateStore != null
          ? this.options.productionAppcastStateStore
          : null,
      t = e != null,
      n,
      r = null,
      a;
    if (e != null) {
      let t = mw({
        beta: this.sparkleQueryParams.beta,
        installationId: e.getOrCreateInstallationId(),
        planType: this.sparkleQueryParams.planType,
      });
      if (t == null) {
        this.lastUnavailableReason = `production sparkle feed unavailable`;
        return;
      }
      n = t;
    } else {
      let e = this.resolveMacSparkleFeedUrl();
      if (e == null) return;
      let t = this.options.useInternalUpdateCdn ? this.resolveMacSparkleInternalCdnFeedUrl() : null;
      ((n = t ?? e),
        (r = t ? e : null),
        (a = t ? await this.getInternalUpdateCdnRequestHeaders(n) : void 0),
        a === !1 && ((n = e), (r = null)));
    }
    let o = null,
      s;
    try {
      o = Fw((0, l.join)(process.resourcesPath, `native`, `sparkle.node`));
    } catch (e) {
      s = e;
    }
    if (!o) {
      (this.logger.error(`Failed to load native Sparkle addon`, {
        safe: {},
        sensitive: { error: s },
      }),
        (this.lastUnavailableReason = `failed to load native sparkle addon`));
      return;
    }
    let c = o,
      u = c.setUpdateLifecycleStateSink,
      d = typeof u == `function`;
    try {
      (typeof c.setLogSink == `function` &&
        c.setLogSink((e, t) => {
          this.logger.log(
            this.decodeNativeLogLevel(e) ?? `info`,
            t,
            r != null && t === `Switching Sparkle to the fallback feed.`
              ? { safe: { updateFeed: `legacy` } }
              : void 0,
          );
        }),
        typeof c.setInstallUpdatesRequestedSink == `function` &&
          c.setInstallUpdatesRequestedSink(() => {
            this.options.onInstallUpdatesRequested?.({ quitImmediately: !1 });
          }),
        typeof c.setDownloadProgressSink == `function` &&
          c.setDownloadProgressSink((e) => {
            this.setDownloadProgressPercent(e);
          }),
        typeof c.setUpdateReadySink == `function` &&
          c.setUpdateReadySink((e) => {
            this.setUpdateReady(e);
          }),
        typeof c.setUpdateDownloadedSink == `function` &&
          c.setUpdateDownloadedSink((e, t) => {
            this.setUpdateDownloaded(e, t);
          }),
        d &&
          u((e) => {
            if (e === `install-aborted`) {
              this.options.onInstallUpdatesAborted?.();
              return;
            }
            this.setUpdateLifecycleState(e);
          }),
        c.setAutomaticBackgroundDownloadsEnabled(this.automaticBackgroundDownloadsEnabled),
        t || a === !1 || a === void 0 ? c.init(n) : r ? c.init(n, a, r) : c.init(n, a),
        i.i.isInternal(this.options.buildFlavor) &&
          this.logger.info(`Sparkle update feed selected`, {
            safe: { updateFeed: r == null ? `legacy` : `restricted` },
          }),
        (this.lastUnavailableReason = null));
    } catch (e) {
      (this.logger.error(`Failed to initialize Sparkle addon`, {
        safe: {},
        sensitive: { error: e },
      }),
        (this.lastUnavailableReason = `failed to initialize sparkle addon`));
      return;
    }
    t && (this.productionSparkle = c);
    let f = async () => {
        if (r == null) return;
        let e = await this.getInternalUpdateCdnRequestHeaders(n);
        !e || (0, $S.default)(a, e) || (c.setCookieHeader(e.Cookie), (a = e));
      },
      p = async (e = !0) => {
        try {
          (e && r != null && (await f()),
            d &&
              !this.isUpdateReady &&
              this.updateLifecycleState === `idle` &&
              this.setUpdateLifecycleState(`checking`),
            c.checkForUpdatesInBackground());
        } catch (e) {
          (this.isUpdateReady || this.setUpdateLifecycleState(`idle`),
            this.logger.error(`Failed to check for updates in background`, {
              safe: {},
              sensitive: { error: e },
            }));
        }
      };
    if (
      ((this.setAutomaticBackgroundDownloadsEnabledForMac = (e) => {
        (c.setAutomaticBackgroundDownloadsEnabled(e), e && !t && p());
      }),
      (this.updater = {
        checkForUpdates: async () => {
          (r != null && (await f()),
            d &&
              !this.isUpdateReady &&
              this.updateLifecycleState === `idle` &&
              this.setUpdateLifecycleState(`checking`),
            c.checkForUpdates());
        },
        installUpdatesIfAvailable: async () => {
          if (!(this.isUpdateReady && this.relaunchStaleMacExecutableIfNeeded())) {
            if ((r != null && (await f()), typeof c.installLatestUpdate == `function`)) {
              (this.isUpdateReady &&
                (this.logBackendAppcastUpdateEvent({
                  action: `install_started`,
                  checkType: null,
                  result: null,
                  targetBuildNumber: null,
                }),
                this.options.onInstallUpdatesRequested?.({ quitImmediately: !1 })),
                c.installLatestUpdate());
              return;
            }
            (this.isUpdateReady &&
              (this.logBackendAppcastUpdateEvent({
                action: `install_started`,
                checkType: null,
                result: null,
                targetBuildNumber: null,
              }),
              this.options.onInstallUpdatesRequested?.()),
              c.installUpdatesIfAvailable());
          }
        },
      }),
      !t)
    ) {
      let e = Uw();
      (e > 0 && setInterval(() => void p(), e).unref(), p(!1));
    }
  }
  resolveMacSparkleFeedUrl() {
    return (
      (i.a(`codexSparkleFeedUrl`)?.trim() ?? ``) ||
      ((this.lastUnavailableReason = `missing packaged sparkle feed url`), null)
    );
  }
  resolveMacSparkleInternalCdnFeedUrl() {
    let e = i.a(`codexSparkleInternalCdnFeedUrl`)?.trim() ?? ``;
    if (!e) return null;
    try {
      if (new URL(e).protocol === `https:`) return e;
    } catch {}
    return (this.logger.warning(`Ignoring invalid internal update CDN feed URL`), null);
  }
  async getInternalUpdateCdnRequestHeaders(e) {
    if (!this.options.getInternalUpdateCdnRequestHeaders)
      return ((this.lastUnavailableReason = `sparkle update access is unavailable`), !1);
    let t;
    try {
      t = await this.options.getInternalUpdateCdnRequestHeaders(e);
    } catch (e) {
      return (
        this.logger.error(`Failed to authorize Sparkle update access`, {
          safe: {},
          sensitive: { error: e },
        }),
        (this.lastUnavailableReason = `sparkle update access is unavailable`),
        !1
      );
    }
    return t || ((this.lastUnavailableReason = `sparkle update access was not authorized`), !1);
  }
  resolveWindowsUpdateUrl() {
    let e = i.a(`codexWindowsUpdateUrl`)?.trim() ?? ``;
    if (!e) return ((this.lastUnavailableReason = `missing packaged windows update url`), null);
    let t;
    try {
      t = new URL(e);
    } catch {
      return ((this.lastUnavailableReason = `invalid packaged windows update url`), null);
    }
    return t.protocol === `https:`
      ? t.toString()
      : ((this.lastUnavailableReason = `windows update url must use https transport`), null);
  }
  resolveBuildVersion() {
    return i.a(`codexBuildNumber`)?.trim() ?? o.app.getVersion();
  }
  resolveWindowsStoreBuildVersion() {
    let e = o.app.getVersion().trim();
    try {
      return n.ll(e);
    } catch (t) {
      return (
        this.logger.warning(
          `Failed to normalize Windows Store build version from app version; using raw app version.`,
          { safe: { appVersion: e }, sensitive: { error: t } },
        ),
        e
      );
    }
  }
  setUpdateReady(e) {
    (e
      ? this.setUpdateLifecycleState(`ready`)
      : (this.updateLifecycleState === `ready` || this.updateLifecycleState === `installing`) &&
        this.setUpdateLifecycleState(`idle`),
      this.isUpdateReady !== e &&
        ((this.isUpdateReady = e),
        e
          ? process.platform === `darwin`
            ? this.logBackendAppcastUpdateEvent({
                action: `check_completed`,
                checkType: null,
                result: `update_available`,
                targetBuildNumber: null,
              })
            : this.setUpdateDownloaded(!0)
          : (this.setUpdateDownloaded(!1), this.applyPendingSparkleQueryParams()),
        this.scheduleForcedUpdateInstall(),
        this.options.onUpdateReadyChanged?.(e)));
  }
  setUpdateDownloaded(e, t = null) {
    let n = e ? Gw(t) : null;
    if (
      (this.downloadedUpdateAppBrand !== n &&
        ((this.downloadedUpdateAppBrand = n), this.options.onDownloadedUpdateAppBrandChanged?.(n)),
      e)
    ) {
      if (this.updateDownloadedAtMs != null) return;
      ((this.updateDownloadedAtMs = Date.now()),
        this.logBackendAppcastUpdateEvent({
          action: `download_completed`,
          checkType: null,
          result: `succeeded`,
          targetBuildNumber: null,
        }));
    } else {
      if (this.updateDownloadedAtMs == null) return;
      ((this.updateDownloadedAtMs = null),
        (this.forcedUpdateInstallStarted = !1),
        (this.forcedUpdateRetryAtMs = null),
        this.applyPendingSparkleQueryParams());
    }
    this.scheduleForcedUpdateInstall();
  }
  observeRelaunchNotificationPolicy() {
    ((this.owlUpdatePolicies = gC()),
      this.owlUpdatePolicies &&
        (this.owlUpdatePolicies.on(`relaunch-notification-policy-changed`, () => {
          this.scheduleForcedUpdateInstall();
        }),
        this.scheduleForcedUpdateInstall()));
  }
  scheduleForcedUpdateInstall() {
    this.forcedUpdateTimer &&= (clearTimeout(this.forcedUpdateTimer), null);
    let e = this.getRelaunchNotificationPolicy();
    if (
      !this.isUpdateReady ||
      this.updateDownloadedAtMs == null ||
      e?.relaunchNotification !== 2 ||
      this.forcedUpdateInstallStarted
    ) {
      this.setRelaunchNotice(null);
      return;
    }
    let t = vC(this.updateDownloadedAtMs, e),
      n = Math.ceil(Math.max(0, t - this.updateDownloadedAtMs) / Vw),
      r = this.updateDownloadedAtMs + n;
    (this.setRelaunchNotice(Date.now() < r ? null : t),
      this.scheduleForcedUpdateInstallAt(Math.max(t, this.forcedUpdateRetryAtMs ?? t), t, r));
  }
  scheduleForcedUpdateInstallAt(e, t, n) {
    let r = Date.now(),
      i = t - Bw,
      a = Math.max(0, (r < n ? Math.min(e, n) : r < i ? Math.min(e, i) : e) - r),
      o = Math.min(a, Hw);
    ((this.forcedUpdateTimer = setTimeout(() => {
      this.forcedUpdateTimer = null;
      let r = Date.now();
      if (r < e) {
        (this.setRelaunchNotice(r < n ? null : t), this.scheduleForcedUpdateInstallAt(e, t, n));
        return;
      }
      this.installForcedUpdate();
    }, o)),
      this.forcedUpdateTimer.unref());
  }
  getRelaunchNotificationPolicy() {
    return this.owlUpdatePolicies ? _C(this.owlUpdatePolicies) : null;
  }
  async installForcedUpdate() {
    this.forcedUpdateInstallStarted ||
      !this.isUpdateReady ||
      ((this.forcedUpdateInstallStarted = !0),
      this.setRelaunchNotice(null),
      this.logger.info(`Installing update required by managed relaunch policy.`),
      !((await this.installUpdatesIfAvailable()) || !this.isUpdateReady) &&
        ((this.forcedUpdateInstallStarted = !1),
        (this.forcedUpdateRetryAtMs = Date.now() + zw),
        this.scheduleForcedUpdateInstall()));
  }
  setInstallProgressPercent(e) {
    (e == null
      ? this.updateLifecycleState === `installing` &&
        this.setUpdateLifecycleState(this.isUpdateReady ? `ready` : `idle`)
      : this.setUpdateLifecycleState(`installing`),
      this.installProgressPercent !== e &&
        ((this.installProgressPercent = e), this.options.onInstallProgressChanged?.(e)));
  }
  setDownloadProgressPercent(e) {
    this.downloadProgressPercent !== e &&
      ((this.downloadProgressPercent = e), this.options.onDownloadProgressChanged?.(e));
  }
  createRelaunchNotice(e) {
    let t = Date.now();
    return { deadlineAtMs: e, dismissable: e - t > Bw, reportedAtMs: t };
  }
  setRelaunchNotice(e) {
    if (e == null) {
      if (this.relaunchNotice == null) return;
      ((this.relaunchNotice = null), this.options.onRelaunchNoticeChanged?.(null));
      return;
    }
    let t = this.createRelaunchNotice(e);
    (this.relaunchNotice?.deadlineAtMs === t.deadlineAtMs &&
      this.relaunchNotice.dismissable === t.dismissable) ||
      ((this.relaunchNotice = t), this.options.onRelaunchNoticeChanged?.(t));
  }
  setUpdateLifecycleState(e) {
    this.updateLifecycleState !== e &&
      ((this.updateLifecycleState = e),
      e === `ready` && process.platform !== `darwin`
        ? this.setUpdateDownloaded(!0)
        : e === `idle` && !this.isUpdateReady && this.setUpdateDownloaded(!1),
      this.applyPendingSparkleQueryParams(),
      this.options.onUpdateLifecycleStateChanged?.(e));
  }
  applyPendingSparkleQueryParams() {
    this.pendingSparkleQueryParams == null ||
      !this.canReconfigureProductionAppcast() ||
      this.applySparkleQueryParams();
  }
  readMacExecutableIdentity() {
    if (this.options.getMacExecutableIdentity) return this.options.getMacExecutableIdentity();
    try {
      let e = (0, f.statSync)(process.execPath, { throwIfNoEntry: !1 });
      return e?.isFile() ? { dev: e.dev, ino: e.ino } : null;
    } catch (e) {
      return (
        this.logger.warning(`Failed to read macOS app executable identity`, {
          safe: {},
          sensitive: { error: e },
        }),
        null
      );
    }
  }
  relaunchStaleMacExecutableIfNeeded() {
    let e = this.macExecutableIdentityAtLaunch;
    if (e == null) return !1;
    let t = this.readMacExecutableIdentity();
    return t == null || (t.dev === e.dev && t.ino === e.ino)
      ? !1
      : (this.logger.warning(
          `Relaunching before macOS update install because the app executable changed on disk.`,
          { safe: { currentIdentity: t, launchIdentity: e }, sensitive: {} },
        ),
        o.app.relaunch({ execPath: process.execPath }),
        this.options.onInstallUpdatesRequested
          ? this.options.onInstallUpdatesRequested({ quitImmediately: !0 })
          : o.app.quit(),
        !0);
  }
  logBackendAppcastUpdateEvent(e) {
    this.options.buildFlavor === i.i.Prod &&
      this.logger.info(`Production Sparkle update event`, {
        safe: {
          ...e,
          backendAppcastEnabled: this.productionSparkle != null,
          currentBuildNumber: i.a(`codexBuildNumber`)?.trim() ?? null,
        },
      });
  }
  decodeNativeLogLevel(e) {
    switch (e) {
      case 1:
        return `trace`;
      case 2:
        return `debug`;
      case 3:
        return `info`;
      case 4:
        return `warning`;
      case 5:
        return `error`;
      default:
        return null;
    }
  }
};
function Gw(e) {
  let t = e?.match(/^(ChatGPT|Codex)(?: \([^)]+\))?-darwin-/)?.[1];
  return n.gl(t?.toLowerCase()) ?? null;
}
function Kw(e, t) {
  return new URL(`releases/${encodeURIComponent(t)}/ChatGPT-${process.arch}.msix`, e).toString();
}
var qw = `electron-thread-read-state-v1`,
  Jw = `unread-thread-ids-by-host-v1`,
  Yw = n.au(n.su(), n.Yl(n.su().min(1))),
  Xw = n.ru({
    version: n.eu(1),
    unreadByIdentity: n.au(n.su(), Yw),
    legacyMigration: n
      .ru({
        identityKey: n.su(),
        unreadThreadIdsByHostId: Yw,
        adoptedHostIds: n.au(n.su(), n.su()),
        cleared: n.Xl().optional(),
      })
      .optional(),
  }),
  Zw = `electron-persisted-atom-state`,
  Qw = `electron-initial-follow-up-queue-mode`,
  $w = `electron-custom-runtime-state`,
  eT = `electron-custom-runtime-outbox-state`,
  tT = `electron-worktree-cleanup-buffer-start-ms`,
  nT = `electron-avatar-overlay-open`,
  rT = `electron-avatar-overlay-bounds`,
  iT = `electron-remote-hosted-pip-content-max-display-size`,
  aT = `electron-remote-hosted-pip-task-visibility-state`,
  oT = `electron-remote-control-client-enrollments`,
  sT = `electron-local-remote-control-environment-id`,
  cT = `electron-local-remote-control-installation-id`,
  lT = `electron-automations-installation-id`,
  uT = `electron-automations-habitat-migration-state`,
  dT = `electron-chrome-extension-sync-managed-plugin-ids`,
  fT = `electron-browser-extension-recently-used`,
  pT = `electron-integrity-state-envelope`,
  mT = `electron-mac-push-deregistration-token`,
  hT = `electron-internal-update-cdn-enabled`,
  gT = `electron-windows-core-runtime-frameworks-enabled`,
  _T = `electron-windows-primary-runtime-frameworks-enabled`,
  vT = `electron-desktop-otraces-sample-rate`,
  yT = `electron-browser-download-history`,
  bT = `electron-completed-local-data-migration-ids`,
  xT = `electron-remote-control-config-migration-completed`,
  ST = `electron-codex-app-config-applied-remote-declarations`,
  CT = 500,
  wT = r.i(`global-state`),
  TT = n.Ll.object({
    left: n.Ll.number(),
    top: n.Ll.number(),
    width: n.Ll.number().positive(),
    height: n.Ll.number().positive(),
  }),
  ET = n.Ll.object({
    x: n.Ll.number(),
    y: n.Ll.number(),
    width: n.Ll.number().positive(),
    height: n.Ll.number().positive(),
  }),
  DT = n.Ll.enum([`top-start`, `top-end`, `bottom-start`, `bottom-end`]),
  OT = n.Ll.enum([`shown`, `hidden`]),
  kT = n.Ll.array(
    n.Ll.object({
      canCancel: n.Ll.boolean(),
      canPause: n.Ll.boolean(),
      canResume: n.Ll.boolean(),
      conversationId: n.Ll.string().nullable(),
      exists: n.Ll.boolean(),
      filename: n.Ll.string(),
      id: n.Ll.string(),
      path: n.Ll.string(),
      receivedBytes: n.Ll.number(),
      source: n.Ll.enum([`agent`, `user`]),
      startedAtMs: n.Ll.number(),
      status: n.Ll.enum([`started`, `in_progress`, `paused`, `failed`, `canceled`, `complete`]),
      totalBytes: n.Ll.number(),
      updatedAtMs: n.Ll.number(),
      url: n.Ll.string(),
    }),
  ).max(200),
  AT = n.Ll.union([kT, n.Ll.object({ downloads: kT, version: n.Ll.literal(1) })]),
  jT = n.Ll.object({
    x: n.Ll.number(),
    y: n.Ll.number(),
    width: n.Ll.number().positive().optional(),
    height: n.Ll.number().positive().optional(),
    anchor: ET.optional(),
    displayBounds: ET.optional(),
    displayId: n.Ll.number().optional(),
    mascot: TT.optional(),
    placement: DT.optional(),
    tray: TT.nullable().optional(),
  }),
  MT = NT({
    [qw]: Xw,
    "electron-main-window-bounds": n.Ll.object({
      x: n.Ll.number(),
      y: n.Ll.number(),
      width: n.Ll.number(),
      height: n.Ll.number(),
      isMaximized: n.Ll.boolean().optional(),
    }),
    [nT]: n.Ll.boolean(),
    [rT]: jT.extend({
      byDisplayId: n.Ll.record(n.Ll.string(), jT).optional(),
      byResolution: n.Ll.record(n.Ll.string(), jT).optional(),
    }),
    [iT]: n.Ll.number().positive(),
    [aT]: n.Ll.record(n.Ll.string(), OT),
    [Zw]: n.Ll.record(n.Ll.string(), n.Ll.unknown()),
    [Qw]: n.Ll.enum([`queue`, `steer`]),
    [$w]: n.Ll.unknown(),
    [eT]: n.Ll.array(
      n.Ll.object({
        callId: n.Ll.string(),
        conversationId: n.Ll.string().transform(n.ml),
        message: n.Ll.string(),
        sentAtMs: n.Ll.number(),
        turnId: n.Ll.string(),
      }),
    ),
    [oT]: n.Ll.record(
      n.Ll.string(),
      n.Ll.object({
        accountUserId: n.Ll.string(),
        algorithm: n.Ll.literal(`ecdsa_p256_sha256`),
        clientId: n.Ll.string(),
        keyId: n.Ll.string(),
        protectionClass: n.Ll.enum([
          `hardware_secure_enclave`,
          `hardware_tpm`,
          `os_protected_nonextractable`,
        ]),
        publicKeySpkiDerBase64: n.Ll.string(),
      }),
    ),
    [sT]: n.Ll.string(),
    [cT]: n.Ll.string(),
    [lT]: n.Ll.uuid(),
    [uT]: n.Ll.record(n.Ll.string(), n.Ll.enum([`declined`, `in_progress`, `complete`])),
    [dT]: n.Ll.array(n.Ll.string()),
    [fT]: n.Ll.record(n.Ll.string(), n.Ll.array(n.Ll.string())),
    [pT]: n.Ll.string(),
    [mT]: n.Ll.union([
      n.Ll.string(),
      n.Ll.object({ token: n.Ll.string(), isFedramp: n.Ll.literal(!0) }),
    ]),
    [hT]: n.Ll.boolean(),
    [gT]: n.Ll.boolean(),
    [_T]: n.Ll.boolean(),
    [vT]: n.Ll.number().min(0).max(1),
    [yT]: AT,
    [bT]: n.Ll.array(n.Ll.string()),
    [xT]: n.Ll.boolean(),
    [ST]: n.Ll.record(n.Ll.string(), n.Ll.array(n.Ll.string())),
    [tT]: n.Ll.number(),
  });
function NT(e) {
  let t = Object.entries(e).map(([e, t]) => [e, t.optional()]);
  return Object.fromEntries(t);
}
var PT = class {
    state;
    filePath;
    persistDebounced;
    persistScheduledForAtoms = !1;
    persistScheduledForCustomRuntime = !1;
    persistQueued = Promise.resolve();
    constructor(e) {
      ((this.filePath = e),
        (this.state = LT(this.filePath)),
        (this.persistDebounced = se(() => {
          this.persistScheduledForAtoms &&
            ((this.persistScheduledForAtoms = !1), this.queueGlobalStatePersistence());
        }, CT)));
    }
    getStateFilePath() {
      return this.filePath;
    }
    get(e) {
      let t = this.state.get(e);
      return t !== void 0 && t != null ? t : (n.Ac(e) ?? null);
    }
    getStored(e) {
      return this.state.get(e);
    }
    set(e, t) {
      (t === void 0 ? this.state.delete(e) : this.state.set(e, t), this.persistForKey(e));
    }
    update(e, t) {
      let n = t(this.state.has(e) ? this.state.get(e) : null);
      (n === void 0 ? this.state.delete(e) : this.state.set(e, n), this.persistForKey(e));
    }
    delete(e) {
      (this.state.delete(e), this.persistForKey(e));
    }
    flush() {
      return this.flushWith(BT);
    }
    flushOrThrow() {
      return this.flushWith(VT);
    }
    flushWith(e) {
      return (
        (this.persistScheduledForCustomRuntime = !1),
        (this.persistScheduledForAtoms &&= (this.persistDebounced.cancel(), !1)),
        (this.persistQueued = this.persistQueued
          .catch(() => void 0)
          .then(() => {
            e(this.filePath, this.state);
          })),
        this.persistQueued
      );
    }
    persistForKey(e) {
      if (e === `electron-persisted-atom-state`) {
        ((this.persistScheduledForAtoms = !0), this.persistDebounced());
        return;
      }
      if (e === `electron-custom-runtime-state` || e === `electron-custom-runtime-outbox-state`) {
        this.persistScheduledForCustomRuntime ||
          ((this.persistScheduledForCustomRuntime = !0),
          queueMicrotask(() => {
            this.persistScheduledForCustomRuntime &&
              ((this.persistScheduledForCustomRuntime = !1), this.queueGlobalStatePersistence());
          }));
        return;
      }
      this.queueGlobalStatePersistence();
    }
    queueGlobalStatePersistence() {
      this.persistQueued = this.persistQueued
        .catch(() => void 0)
        .then(() => HT(this.filePath, this.state));
    }
  },
  FT = new Set(Object.keys(MT));
function IT(e) {
  return FT.has(e);
}
function LT(e) {
  if (!(0, f.existsSync)(e)) return new Map();
  let t = RT(e);
  if (t != null) return t;
  let n = RT(`${e}.bak`);
  return n == null
    ? new Map()
    : (wT().warning(`Loaded global state from backup`, { safe: {}, sensitive: {} }), n);
}
function RT(e) {
  if (!(0, f.existsSync)(e)) return null;
  try {
    let t = (0, f.readFileSync)(e, `utf8`),
      n = JSON.parse(t);
    if (!n || typeof n != `object`) throw Error(`Expected global state to be a JSON object`);
    let r = [];
    for (let [e, t] of Object.entries(n)) {
      if (IT(e) && !MT[e].safeParse(t).success) {
        wT().warning(`Dropping invalid global state for key`, { safe: { key: e }, sensitive: {} });
        continue;
      }
      r.push([e, t]);
    }
    return new Map(r);
  } catch (e) {
    return (
      wT().warning(`Failed to load global state`, { safe: {}, sensitive: { error: e } }), null
    );
  }
}
function zT(e) {
  let t = {};
  for (let [n, r] of e.entries()) r !== void 0 && (t[n] = r);
  return JSON.stringify(t);
}
function BT(e, t) {
  try {
    VT(e, t);
  } catch (e) {
    wT().warning(`Failed to persist global state`, { safe: {}, sensitive: { error: e } });
  }
}
function VT(e, t) {
  let n = zT(t);
  (WT(e, n), WT(`${e}.bak`, n));
}
async function HT(e, t) {
  try {
    let n = zT(t);
    (await GT(e, n), await GT(`${e}.bak`, n));
  } catch (e) {
    wT().warning(`Failed to persist global state`, { safe: {}, sensitive: { error: e } });
  }
}
function UT(e) {
  return (0, l.join)(
    (0, l.dirname)(e),
    `.${(0, l.basename)(e)}.tmp-${Date.now()}-${(0, d.randomUUID)()}`,
  );
}
function WT(e, t) {
  let n = UT(e);
  try {
    ((0, f.writeFileSync)(n, t, `utf8`), (0, f.renameSync)(n, e));
  } catch (e) {
    throw ((0, f.rmSync)(n, { force: !0 }), e);
  }
}
async function GT(e, t) {
  let n = UT(e);
  try {
    (await (0, p.writeFile)(n, t, `utf8`), await (0, p.rename)(n, e));
  } catch (e) {
    throw (await (0, p.rm)(n, { force: !0 }), e);
  }
}
function KT(e) {
  e === `light` || e === `dark`
    ? (o.nativeTheme.themeSource = e)
    : (o.nativeTheme.themeSource = `system`);
}
var qT = r.i(`settings-store`),
  JT = `enter-behavior`,
  YT = `electron:onboarding-projectless-completed`,
  XT = n.Ll.lazy(() =>
    n.Ll.union([
      n.Ll.string(),
      n.Ll.number(),
      n.Ll.boolean(),
      n.Ll.null(),
      n.Ll.array(XT),
      n.Ll.record(n.Ll.string(), XT),
    ]),
  ),
  ZT = n.Ll.object({ desktop: n.Ll.record(n.Ll.string(), n.Ll.unknown()).optional() }).loose(),
  QT = class {
    filePath;
    globalState;
    state;
    changeListeners = new Map();
    pendingLegacyMigrations = new Map();
    pendingWrites = new Map();
    desktopConfig;
    configClient = null;
    persistQueued = Promise.resolve();
    constructor(e, t) {
      ((this.filePath = e),
        (this.globalState = t),
        (this.desktopConfig = eE(this.filePath)),
        (this.state = nE(this.desktopConfig)),
        $T(this.state, this.pendingLegacyMigrations, this.globalState));
    }
    getStateFilePath() {
      return this.filePath;
    }
    getDesktopConfig() {
      return this.desktopConfig;
    }
    async captureInitialFollowUpQueueMode() {
      let e = this.globalState.getStored(Qw);
      if (e != null) return e;
      let t = this.globalState.getStored(Zw)?.[YT] === !0,
        r = Object.keys(this.globalState.getStored(n.kc.LOCAL_PROJECTS) ?? {}).length > 0,
        i = t || r ? `queue` : `steer`;
      return (this.globalState.set(Qw, i), await this.globalState.flush(), i);
    }
    async initialize(e) {
      let t = await this.captureInitialFollowUpQueueMode(),
        r = new Map([...this.changeListeners.keys()].map((e) => [e, this.get(e)]));
      ((this.configClient = e), (this.desktopConfig = e.config.desktop ?? {}));
      let i = nE(this.desktopConfig),
        a = new Set();
      for (let e of n.Qi)
        if (!this.pendingWrites.has(e.key)) {
          if (i.has(e.key)) {
            (this.state.set(e.key, i.get(e.key)),
              this.pendingLegacyMigrations.delete(e.key) && a.add(e.key));
            continue;
          }
          this.pendingLegacyMigrations.has(e.key) || this.state.delete(e.key);
        }
      this.initializeFollowUpQueueMode(t);
      for (let [e, t] of r) Object.is(t, this.get(e)) || this.notifyChangeListeners(e);
      (iE(a, this.globalState), await this.persistPendingSettings());
    }
    onDidChange(e, t) {
      let n = this.changeListeners.get(e) ?? new Set();
      return (
        n.add(t),
        this.changeListeners.set(e, n),
        () => {
          (n.delete(t), n.size === 0 && this.changeListeners.delete(e));
        }
      );
    }
    get(e) {
      return this.state.get(e);
    }
    getEffective(e) {
      return this.get(e) ?? n.Yi(e).default;
    }
    set(e, t) {
      let r = this.get(e),
        i = n.Xi(e).parse(t);
      (this.state.set(e, i),
        (this.desktopConfig[e] = be(n.Xi(e), i)),
        this.pendingWrites.set(e, i),
        Object.is(r, i) || this.notifyChangeListeners(e),
        this.persistPendingSettings());
    }
    flush() {
      return this.persistQueued.then(() => this.persistPendingSettings());
    }
    notifyChangeListeners(e) {
      for (let t of this.changeListeners.get(e) ?? []) t();
    }
    initializeFollowUpQueueMode(e) {
      let t = n.ia.followUpQueueMode.key;
      this.state.has(t) ||
        (this.state.set(t, e),
        (this.desktopConfig[t] = be(n.Xi(t), e)),
        this.pendingWrites.set(t, e));
    }
    persistPendingSettings() {
      let e = this.configClient;
      return (
        e == null ||
          (this.persistQueued = this.persistQueued
            .catch(() => void 0)
            .then(async () => {
              let t = new Map(this.pendingLegacyMigrations),
                r = new Map(this.pendingWrites),
                i = new Map(t);
              for (let [e, t] of r) i.set(e, t);
              if (i.size !== 0)
                try {
                  await e.batchWriteConfigValues({
                    edits: [...i.entries()].map(([e, t]) => {
                      let r = be(n.Xi(e), t);
                      return { keyPath: `desktop.${e}`, mergeStrategy: `replace`, value: r };
                    }),
                  });
                  for (let [e, n] of t)
                    this.pendingLegacyMigrations.get(e) === n &&
                      this.pendingLegacyMigrations.delete(e);
                  for (let [e, t] of r)
                    this.pendingWrites.get(e) === t && this.pendingWrites.delete(e);
                  iE(new Set(t.keys()), this.globalState);
                } catch (e) {
                  qT().warning(`Failed to persist desktop settings`, {
                    safe: {},
                    sensitive: { error: e },
                  });
                }
            })),
        this.persistQueued
      );
    }
  };
function $T(e, t, r) {
  let i = r.getStored(Zw);
  for (let a of n.Qi) {
    if (e.has(a.key)) continue;
    let o = rE(a, r, i);
    if (o === void 0) continue;
    let s = n.Xi(a.key).safeParse(o);
    if (!s.success) {
      qT().warning(`Dropping invalid migrated setting`, { safe: { key: a.key }, sensitive: {} });
      continue;
    }
    (e.set(a.key, s.data), t.set(a.key, s.data));
  }
}
function eE(e) {
  if (!(0, f.existsSync)(e)) return {};
  try {
    return tE(ZT.parse(n.ii((0, f.readFileSync)(e, `utf8`))).desktop ?? {});
  } catch (e) {
    return (
      qT().warning(`Failed to load desktop settings from config.toml`, {
        safe: {},
        sensitive: { error: e },
      }),
      {}
    );
  }
}
function tE(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    let e = XT.safeParse(r);
    if (!e.success) {
      qT().warning(`Dropping unsupported desktop config value`, {
        safe: { key: n },
        sensitive: {},
      });
      continue;
    }
    t[n] = e.data;
  }
  return t;
}
function nE(e) {
  let t = new Map();
  for (let [r, i] of Object.entries(e)) {
    let e = n.Yi(r);
    if (e == null) continue;
    let a = n.Xi(e.key).safeParse(xe(n.Xi(e.key), i));
    if (!a.success) {
      qT().warning(`Dropping invalid desktop setting`, { safe: { key: r }, sensitive: {} });
      continue;
    }
    t.set(e.key, a.data);
  }
  return t;
}
function rE(e, t, r) {
  let { hostStorage: i } = e;
  switch (i.kind) {
    case `configuration`: {
      let a = t.getStored(i.key);
      return a === void 0
        ? e.key === n.ia.composerEnterBehavior.key &&
          r != null &&
          Object.prototype.hasOwnProperty.call(r, JT)
          ? r[JT]
          : e.key === n.ia.keepRemoteControlAwakeWhilePluggedIn.key
            ? t.getStored(n.ia.preventSleepWhileRunning.key)
            : void 0
        : a;
    }
    case `global-state`:
      return t.getStored(i.key);
    case `persisted-atom`:
      return r == null || !Object.prototype.hasOwnProperty.call(r, i.key)
        ? void 0
        : e.key === n.na.defaultServiceTier.key
          ? n.da(r)
          : r[i.key];
  }
}
function iE(e, t) {
  if (e.size === 0) return;
  let r = t.getStored(Zw),
    i = r ? { ...r } : null,
    a = !1;
  for (let r of e) {
    let e = n.Yi(r);
    switch (
      (r === n.ia.composerEnterBehavior.key &&
        i != null &&
        Object.prototype.hasOwnProperty.call(i, JT) &&
        (delete i[JT], (a = !0)),
      e.hostStorage.kind)
    ) {
      case `configuration`:
      case `global-state`:
        t.delete(e.hostStorage.key);
        break;
      case `persisted-atom`:
        i != null &&
          Object.prototype.hasOwnProperty.call(i, e.hostStorage.key) &&
          (delete i[e.hostStorage.key], (a = !0));
        break;
    }
  }
  a && t.set(Zw, Object.keys(i ?? {}).length === 0 ? void 0 : (i ?? void 0));
}
var aE = `.codex-global-state.json`,
  oE = `config.toml`;
async function sE() {
  try {
    let e = n.ci();
    if ((await (0, p.mkdir)(e, { recursive: !0 })) === void 0) return;
    await (0, p.writeFile)((0, l.join)(e, `.desktop-created`), ``, { flag: `wx` });
  } catch (e) {
    if (e instanceof Error && `code` in e && e.code === `EEXIST`) return;
    r.n().warning(`Failed to record Windows desktop home ownership`, {
      safe: {},
      sensitive: { error: e },
    });
  }
}
function cE(e) {
  return new PT((0, l.join)(e, aE));
}
async function lE(e, t) {
  (e.set(hT, t), await e.flush());
}
async function uE({ moduleDir: e }) {
  n.Br();
  let t = n.ci(),
    r = process.env.BUILD_FLAVOR ?? (process.env.NODE_ENV === `production` ? `prod` : `dev`),
    i = (0, l.join)(
      t,
      `sqlite`,
      r === `prod` ? `codex-history-snapshots.db` : `codex-history-snapshots-${r}.db`,
    );
  await Promise.allSettled(
    [``, `-wal`, `-shm`, `-journal`].map((e) => (0, p.rm)(`${i}${e}`, { force: !0 })),
  );
  let a = (0, l.join)(e, `preload.js`),
    o = (0, l.join)(e, `..`, `..`),
    s = (0, l.join)(o, `..`),
    c = cE(t),
    u = c.getStateFilePath();
  (0, f.existsSync)(u) ||
    (0, f.existsSync)(`${u}.bak`) ||
    (c.set(n.kc.DESKTOP_FIRST_SEEN_AT_MS, Date.now()), c.update(Zw, (e) => ({ ...e, [ae]: !0 })));
  let d = new QT((0, l.join)(t, oE), c),
    m =
      process.platform === `win32` &&
      process.env.WSL_DISTRO_NAME == null &&
      d.getEffective(n.ia.runCodexInWsl.key) === !0 &&
      (await n.pi()) != null;
  n._i(() => m);
  let h = await n.li({ preferWsl: m });
  return (
    KT(d.getEffective(n.la.theme.key) ?? `system`),
    {
      codexHome: t,
      executionCodexHome: h,
      preloadPath: a,
      desktopRoot: o,
      repoRoot: s,
      globalState: c,
      settingsStore: d,
    }
  );
}
function dE(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55;
}
function fE(e) {
  let t = new Uint8Array(e.length / 2),
    n = 0;
  for (let r = 0; r < e.length; r += 2) {
    let i = dE(e.charCodeAt(r)),
      a = dE(e.charCodeAt(r + 1));
    t[n++] = (i << 4) | a;
  }
  return t;
}
P();
function pE(e) {
  let t = BigInt(1e9);
  return BigInt(Math.trunc(e[0])) * t + BigInt(Math.trunc(e[1]));
}
function mE(e) {
  return { low: Number(BigInt.asUintN(32, e)), high: Number(BigInt.asUintN(32, e >> BigInt(32))) };
}
function hE(e) {
  return mE(pE(e));
}
function gE(e) {
  return pE(e).toString();
}
var _E = typeof BigInt < `u` ? gE : wr;
function vE(e) {
  return e;
}
function yE(e) {
  if (e !== void 0) return fE(e);
}
var bE = { encodeHrTime: hE, encodeSpanContext: fE, encodeOptionalSpanContext: yE };
function xE(e) {
  if (e === void 0) return bE;
  let t = e.useLongBits ?? !0,
    n = e.useHex ?? !1;
  return {
    encodeHrTime: t ? hE : _E,
    encodeSpanContext: n ? vE : fE,
    encodeOptionalSpanContext: n ? vE : yE,
  };
}
function SE(e) {
  let t = { attributes: wE(e.attributes), droppedAttributesCount: 0 },
    n = e.schemaUrl;
  return (n && n !== `` && (t.schemaUrl = n), t);
}
function CE(e) {
  return { name: e.name, version: e.version };
}
function wE(e) {
  return Object.keys(e).map((t) => TE(t, e[t]));
}
function TE(e, t) {
  return { key: e, value: EE(t) };
}
function EE(e) {
  let t = typeof e;
  return t === `string`
    ? { stringValue: e }
    : t === `number`
      ? Number.isInteger(e)
        ? { intValue: e }
        : { doubleValue: e }
      : t === `boolean`
        ? { boolValue: e }
        : e instanceof Uint8Array
          ? { bytesValue: e }
          : Array.isArray(e)
            ? { arrayValue: { values: e.map(EE) } }
            : t === `object` && e != null
              ? { kvlistValue: { values: Object.entries(e).map(([e, t]) => TE(e, t)) } }
              : {};
}
var DE = 256,
  OE = 512;
function kE(e, t) {
  let n = (e & 255) | DE;
  return (t && (n |= OE), n);
}
function AE(e, t) {
  let n = e.spanContext(),
    r = e.status,
    i = e.parentSpanContext?.spanId ? t.encodeSpanContext(e.parentSpanContext?.spanId) : void 0;
  return {
    traceId: t.encodeSpanContext(n.traceId),
    spanId: t.encodeSpanContext(n.spanId),
    parentSpanId: i,
    traceState: n.traceState?.serialize(),
    name: e.name,
    kind: e.kind == null ? 0 : e.kind + 1,
    startTimeUnixNano: t.encodeHrTime(e.startTime),
    endTimeUnixNano: t.encodeHrTime(e.endTime),
    attributes: wE(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    events: e.events.map((e) => ME(e, t)),
    droppedEventsCount: e.droppedEventsCount,
    status: { code: r.code, message: r.message },
    links: e.links.map((e) => jE(e, t)),
    droppedLinksCount: e.droppedLinksCount,
    flags: kE(n.traceFlags, e.parentSpanContext?.isRemote),
  };
}
function jE(e, t) {
  return {
    attributes: e.attributes ? wE(e.attributes) : [],
    spanId: t.encodeSpanContext(e.context.spanId),
    traceId: t.encodeSpanContext(e.context.traceId),
    traceState: e.context.traceState?.serialize(),
    droppedAttributesCount: e.droppedAttributesCount || 0,
    flags: kE(e.context.traceFlags, e.context.isRemote),
  };
}
function ME(e, t) {
  return {
    attributes: e.attributes ? wE(e.attributes) : [],
    name: e.name,
    timeUnixNano: t.encodeHrTime(e.time),
    droppedAttributesCount: e.droppedAttributesCount || 0,
  };
}
function NE(e, t) {
  return { resourceSpans: FE(e, xE(t)) };
}
function PE(e) {
  let t = new Map();
  for (let n of e) {
    let e = t.get(n.resource);
    e || ((e = new Map()), t.set(n.resource, e));
    let r = `${n.instrumentationScope.name}@${n.instrumentationScope.version || ``}:${n.instrumentationScope.schemaUrl || ``}`,
      i = e.get(r);
    (i || ((i = []), e.set(r, i)), i.push(n));
  }
  return t;
}
function FE(e, t) {
  let n = PE(e),
    r = [],
    i = n.entries(),
    a = i.next();
  for (; !a.done;) {
    let [e, n] = a.value,
      o = [],
      s = n.values(),
      c = s.next();
    for (; !c.done;) {
      let e = c.value;
      if (e.length > 0) {
        let n = e.map((e) => AE(e, t));
        o.push({
          scope: CE(e[0].instrumentationScope),
          spans: n,
          schemaUrl: e[0].instrumentationScope.schemaUrl,
        });
      }
      c = s.next();
    }
    let l = SE(e),
      u = { resource: l, scopeSpans: o, schemaUrl: l.schemaUrl };
    (r.push(u), (a = i.next()));
  }
  return r;
}
var IE = {
  serializeRequest: (e) => {
    let t = NE(e, { useHex: !0, useLongBits: !1 });
    return new TextEncoder().encode(JSON.stringify(t));
  },
  deserializeResponse: (e) => {
    if (e.length === 0) return {};
    let t = new TextDecoder();
    return JSON.parse(t.decode(e));
  },
};
P();
var LE = new oi(),
  RE = null,
  zE = null,
  BE = new Sh(0),
  VE = 0,
  HE = !1,
  UE = {
    shouldSample: (e, t, n, r, i, a) =>
      a?.some(({ context: e }) => (e.traceFlags & Y.TraceFlags.SAMPLED) !== 0)
        ? { decision: Z.RECORD_AND_SAMPLED }
        : BE.shouldSample(e, t),
    toString: () => BE.toString(),
  };
function WE(e, t, r) {
  (Y.context.setGlobalContextManager(new Yv()),
    (VE = e.desktopTraceSampleRate),
    (HE = t === `electron-main`),
    (BE = new Sh(VE)),
    r != null && (RE = r));
  let i = new Bh({
    resource: fh({
      "codex.build_flavor": e.buildFlavor,
      "codex.build_number": e.buildNumber ?? `unknown`,
      "codex.process": t,
      "os.type": process.platform,
      "service.name": `codex-desktop`,
      "service.version": e.appVersion,
    }),
    sampler: new xh({ root: UE }),
    spanProcessors: [
      new jh(ZE(), {
        exportTimeoutMillis: 1e4,
        maxExportBatchSize: 256,
        maxQueueSize: 1024,
        scheduledDelayMillis: 5e3,
      }),
    ],
  });
  zE = i;
  let a = i.getTracer(`codex-desktop`);
  n.Ai({
    getActiveSpanContext: () => {
      let e = Y.trace.getActiveSpan();
      if (e == null) return null;
      let { spanId: t, traceFlags: n, traceId: r } = e.spanContext();
      return (n & Y.TraceFlags.SAMPLED) === 0 ? null : { spanId: t, traceId: r };
    },
    getActiveTraceContext: () => {
      let e = {};
      return (
        LE.inject(Y.context.active(), e, Y.defaultTextMapSetter),
        e.traceparent == null
          ? null
          : {
              traceparent: e.traceparent,
              ...(e.tracestate == null ? {} : { tracestate: e.tracestate }),
            }
      );
    },
    runWithTraceContext: (e, t) =>
      e == null
        ? t()
        : Y.context.with(LE.extract(Y.context.active(), e, Y.defaultTextMapGetter), t),
    setActiveSpanAttributes: (e) => {
      Y.trace.getActiveSpan()?.setAttributes(e);
    },
    setActiveSpanOutcome: (e, t) => {
      let n = Y.trace.getActiveSpan();
      n != null &&
        (n.setAttribute(`codex.outcome`, e),
        e === `failure` &&
          (n.setAttribute(`error.category`, t ?? `operation`),
          n.setAttribute(`error.type`, `operation_failed`),
          n.setStatus({ code: Y.SpanStatusCode.ERROR })));
    },
    startSpan: (e, t) => {
      let r =
        e.root === !0
          ? Y.ROOT_CONTEXT
          : e.trace == null
            ? Y.context.active()
            : LE.extract(Y.context.active(), e.trace, Y.defaultTextMapGetter);
      return a.startActiveSpan(
        e.name,
        {
          attributes: { "codex.operation": e.op, ...e.attributes },
          links: e.links?.flatMap((e) => {
            let t = Y.trace.getSpanContext(LE.extract(Y.ROOT_CONTEXT, e, Y.defaultTextMapGetter));
            return t == null ? [] : [{ context: t }];
          }),
          startTime: e.startTimeMs,
        },
        r,
        (r) => {
          let i = (t) => {
            if (t != null) {
              let e = n.ki(t);
              (r.setAttributes(e),
                e[`codex.outcome`] === `failure` && r.setStatus({ code: Y.SpanStatusCode.ERROR }));
            }
            r.end(e.endTimeMs);
          };
          try {
            let e = t();
            return (
              e instanceof Promise
                ? e.then(
                    () => i(),
                    (e) => i(e),
                  )
                : i(),
              e
            );
          } catch (e) {
            throw (i(e), e);
          }
        },
      );
    },
  });
}
function GE(e) {
  RE = e;
}
function KE(e) {
  process.env.CODEX_OTEL_TRACES_ENDPOINT ??
    ((VE = Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0), (BE = new Sh(VE)));
}
function qE() {
  return VE > 0;
}
function JE() {
  return VE;
}
async function YE(e) {
  if (!(HE && !qE())) {
    if (RE == null) throw Error(`Desktop trace exporter is unavailable`);
    await RE(e);
  }
}
async function XE() {
  await zE?.forceFlush();
}
function ZE() {
  return {
    export: (e, t) => {
      let n = IE.serializeRequest(e);
      if (n == null) {
        t({ code: Ir.FAILED });
        return;
      }
      YE(n).then(
        () => t({ code: Ir.SUCCESS }),
        (e) => t({ code: Ir.FAILED, error: e }),
      );
    },
    shutdown: async () => {},
  };
}
var QE = null;
function $E(e) {
  if (QE) return QE;
  let t = Date.now();
  WE(GS, `electron-main`);
  let r = e ?? i.i.resolve(),
    a = Me(r),
    s = new n.o(),
    c = ke((e, t, n) => {
      WS.captureException(e, {
        fingerprint: n.groupingFingerprint,
        level: t === `fatal` ? `fatal` : `error`,
        tags: n.tags,
        extra: n.extra,
      });
    }),
    u = (e) => {
      c.reportNonFatal(`Datadog log sink failure`, {
        kind: `datadog-log-sink-failure`,
        tags: { failureType: e.type, reason: e.reason },
        extra: { failure: e },
      });
    },
    d = new n.wt({
      analyticsEnabled: s.get().then((e) => e.analytics?.enabled !== !1),
      fetchImpl: (e, t) => o.net.fetch(e, t),
      reportFailure: u,
    }),
    f = new n.Ct({
      source: `codex-desktop`,
      env: r,
      codexAppSessionId: i.o,
      platform: process.platform,
      buildInfo: { version: o.app.getVersion(), buildNumber: vt.value },
      reportFailure: u,
      transport: d,
    });
  (QS(c, f, i.o, a), Ze());
  let p = [],
    m = null,
    h = () => {
      if (process.platform === `win32` && o.app.isPackaged) {
        o.app.exit(0);
        return;
      }
      o.app.quit();
    },
    g = (e) => {},
    _ = () => {},
    v = (e) => {},
    y = (e) => {},
    b = (e) => {},
    x = (e) => {},
    S = (e) => {},
    C = (e) => !1,
    ee =
      r === i.i.Prod &&
      process.platform === `darwin` &&
      i.a(`codexReleaseChannel`) !== `prod-internal`
        ? new xt((0, l.join)(o.app.getPath(`appData`), i.r(r)))
        : null;
  return (
    (QE = {
      startedAtMs: t,
      buildFlavor: r,
      desktopSentry: WS,
      errorReporter: c,
      datadogLogger: f,
      maxLogLevel: a,
      startupConfig: s,
      sparkleManager: new Ww({
        enableUpdater: i.i.shouldIncludeUpdater(r, process.platform, process.env),
        buildFlavor: r,
        isPackaged: o.app.isPackaged,
        useInternalUpdateCdn: !1,
        getInternalUpdateCdnRequestHeaders: void 0,
        productionAppcastStateStore: ee?.backendAppcastEnabled ? ee : void 0,
        onUpdateReadyChanged: (e) => {
          y(e);
        },
        onInstallUpdatesRequested: (e) => {
          h(e);
        },
        onInstallUpdatesAborted: () => {
          _();
        },
        onInstallProgressChanged: (e) => {
          b(e);
        },
        onDownloadProgressChanged: (e) => {
          x(e);
        },
        onDownloadedUpdateAppBrandChanged: (e) => {
          S(e);
        },
        onUpdateLifecycleStateChanged: (e) => {
          g(e);
        },
        onRelaunchNoticeChanged: (e) => {
          v(e);
        },
        isTrustedIpcEvent: (e) => C(e),
      }),
      startupPhases: new Ee(),
      productionAppcastStateStore: ee,
      setSparkleBridgeHandlers: (e) => {
        (e.onInstallUpdatesRequested != null && (h = e.onInstallUpdatesRequested),
          e.onInstallUpdatesAborted != null && (_ = e.onInstallUpdatesAborted),
          e.onUpdateLifecycleStateChanged != null && (g = e.onUpdateLifecycleStateChanged),
          e.onRelaunchNoticeChanged != null && (v = e.onRelaunchNoticeChanged),
          e.onUpdateReadyChanged != null && (y = e.onUpdateReadyChanged),
          e.onInstallProgressChanged != null && (b = e.onInstallProgressChanged),
          e.onDownloadProgressChanged != null && (x = e.onDownloadProgressChanged),
          e.onDownloadedUpdateAppBrandChanged != null && (S = e.onDownloadedUpdateAppBrandChanged),
          e.isTrustedIpcEvent != null && (C = e.isTrustedIpcEvent));
      },
      setSecondInstanceArgsHandler: (e) => {
        m = e;
        for (let t of p) e(t);
        p.length = 0;
      },
      queueSecondInstanceArgs: (e) => {
        if (m) {
          m(e);
          return;
        }
        p.push(e);
      },
    }),
    QE
  );
}
var eD = `codex`,
  tD = `chatgpt.com`,
  nD = `/codex/open-app`,
  rD = `codex-dev`,
  iD = `--open-project`,
  aD = new Set([`marketplace`]),
  oD = new Set([`marketplacePath`, `mode`]),
  sD = `connections/ssh/add`,
  cD = new Set([`name`, `alias`, `projectPath`, `enabled`]),
  lD = [
    `browser-use`,
    `chronicle`,
    `connections`,
    `connections/computer`,
    `connections/devices`,
    `connections/ssh`,
    sD,
  ],
  uD = new Set([`name`, `description`, `imageUrl`, `spriteVersionNumber`]),
  dD = n
    .Rl()
    .pipe(n.lu([n.eu(1), n.eu(2)]))
    .optional(),
  fD = n.du().transform((e, t) => {
    let r = new URL(e).protocol;
    return r !== `http:` && r !== `https:`
      ? (t.addIssue({ code: `custom`, message: `Invalid browser deep link URL` }), n.gu)
      : e;
  }),
  pD = n
    .su()
    .regex(/^[A-Za-z0-9_-]{1,128}$/)
    .transform(oe),
  mD = n.Gl([`true`, `false`]).transform((e) => e === `true`),
  hD = /^sage-backfill-[a-f0-9]{64}$/,
  gD = /^kepler(?:-[a-z0-9-]+)?\.gateway\.(?:data-0s|data-1)\.internal\.api\.openai\.org$/;
function _D(e, t = process.platform) {
  return e || t === `win32` || t === `linux` ? eD : rD;
}
function Q(e) {
  return e.pathname.split(`/`).filter(Boolean);
}
function $(e, t) {
  let n = e.searchParams.get(t);
  return n == null || n.trim().length === 0 ? null : n;
}
function vD(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (
    t.protocol !== `https:` ||
    t.hostname !== tD ||
    t.pathname !== nD ||
    t.username !== `` ||
    t.password !== `` ||
    t.port !== `` ||
    t.hash !== `` ||
    t.searchParams.get(`target`) === `launch`
  )
    return null;
  let r = new URL(`codex://threads/new`),
    i = t.searchParams.get(`q`)?.trim(),
    a = t.searchParams.getAll(`mode`),
    o = a.length === 1 ? n.Aa.safeParse(a[0]) : null,
    s = o?.success === !0 ? o.data : null;
  return (
    s == null &&
      a.length === 0 &&
      t.searchParams.get(`fallback`) === `work` &&
      i != null &&
      i.length > 0 &&
      (s = `work`),
    i != null && i.length > 0 && r.searchParams.set(`prompt`, i),
    s != null && r.searchParams.set(`mode`, s),
    r.toString()
  );
}
function yD(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (t.protocol === `https:`)
    return t.hostname !== tD ||
      t.username !== `` ||
      t.password !== `` ||
      t.port !== `` ||
      t.hash !== ``
      ? null
      : SD(t);
  if (
    (!e.startsWith(`${eD}://`) && !e.startsWith(`${rD}://`)) ||
    (t.protocol !== `${eD}:` && t.protocol !== `${rD}:`)
  )
    return null;
  switch (t.host) {
    case `plugins`:
      return jD(t) ?? MD(t) ?? FD(t);
    case `mcp-app`:
      return ID(t);
    case `activate`:
      return e === `${t.protocol}//activate/life_sciences`
        ? { kind: `experienceActivation`, experience: `life_sciences` }
        : null;
    case `pets`:
      return ND(t);
    case `automations`:
      return { kind: `automations` };
    case `codex-app`:
      return DD(t);
    case `connector`:
      return RD(t, e);
    case `chatgpt`:
      return SD(t);
    case `browser`:
      return OD(t, e);
    case `launch`:
      return Q(t).length === 0 ? { kind: `launch` } : null;
    case `new`:
      return kD(t);
    case `settings`:
      return [`mcp-app`, `plugins`].includes(Q(t)[0] ?? ``) ? ID(t) : CD(t);
    case `shared-thread`:
      return bD(t);
    case `space`:
      return null;
    case `skills`:
      return xD(t);
    case `threads`: {
      if (Q(t)[0] === `new`)
        return [`browserUrl`, `mode`, `originUrl`, `path`, `prompt`].some((e) =>
          t.searchParams.has(e),
        )
          ? kD(t)
          : { kind: `newThread` };
      let e = n.Ra(t, { allowExtraPathSegments: !0 }),
        r = AD(t);
      return e == null || r == null ? null : { kind: `localConversation`, ...e, ...r };
    }
    default:
      return null;
  }
}
function bD(e) {
  let [t, n] = Q(e);
  return t == null ||
    !/^cx_[0-9a-f]{32}$/.test(t) ||
    n != null ||
    e.username !== `` ||
    e.password !== `` ||
    e.port !== `` ||
    e.hash !== `` ||
    e.search !== ``
    ? null
    : { kind: `sharedCodexSnapshot`, shareId: t };
}
function xD(e) {
  let t = e.searchParams.get(`category`);
  return t == null
    ? { kind: `skills` }
    : { kind: `skills`, search: `?${new URLSearchParams({ category: t }).toString()}` };
}
function SD(e) {
  let [t, n, r, i] = Q(e);
  if (t !== `share` || i != null || e.searchParams.size !== 0) return null;
  let a = n;
  if (n === `e`) a = r;
  else if (r != null) return null;
  let o = LD(a);
  return o == null ? null : { kind: `sharedChatGptConversation`, sharedConversationId: o };
}
function CD(e) {
  let t = Q(e),
    r = t.join(`/`),
    [, i, a] = t,
    o = null;
  i === `google-chrome` ? (o = `chrome`) : i != null && n._s(i) && (o = i);
  let s =
    t[0] === `computer-use` && a == null && o != null
      ? `computer-use/${o}`
      : lD.find((e) => e === r);
  if (s == null) return { kind: `settings` };
  let c = { kind: `settings`, section: s };
  if (s === sD) {
    let t = $(e, `name`)?.trim(),
      n = $(e, `alias`)?.trim(),
      r = t ?? n,
      i = $(e, `projectPath`)?.trim(),
      a = $(e, `enabled`)?.trim();
    if (
      r == null ||
      (t != null && n != null && t !== n) ||
      (e.searchParams.has(`projectPath`) && i == null) ||
      (e.searchParams.has(`enabled`) && a !== `true` && a !== `false`) ||
      !PD(e, cD)
    )
      return { kind: `settings`, section: `connections/ssh` };
    let o = new URLSearchParams({ name: r });
    (i != null && o.set(`projectPath`, i),
      a != null && o.set(`enabled`, a),
      (c.search = `?${o.toString()}`));
  }
  return (e.hash !== `` && (c.hash = e.hash), c);
}
function wD(e, { allowBareWindowsProjectPathArg: t = !1 } = {}) {
  let n = [];
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (i === iD) {
      let t = e[r + 1]?.trim();
      ((r += 1), t && n.push({ route: { kind: `newThread`, path: t } }));
      continue;
    }
    if (i.startsWith(`${iD}=`)) {
      let e = i.slice(15).trim();
      e && n.push({ route: { kind: `newThread`, path: e } });
      continue;
    }
    let a = yD(i);
    if (a) {
      n.push({ route: a, sourceUrl: TD(a, i), isOsDeepLink: !0 });
      continue;
    }
    t && r > 0 && ED(i) && n.push({ route: { kind: `newThread`, path: i } });
  }
  return n;
}
function TD(e, t) {
  if (e.kind === `spacePage`) return `codex://space`;
  if (e.kind === `sharedCodexSnapshot`)
    return `codex://shared-thread?utm_source=shared_thread_viewer`;
  let n = e.kind === `settings` ? Q(new URL(t)).join(`/`) : null;
  return e.kind !== `connectorOAuthCallback` &&
    n !== sD &&
    !(`browserUrl` in e && e.browserUrl != null)
    ? t
    : void 0;
}
function ED(e) {
  let t = e.trim();
  return t.length === 0 ? !1 : /^[a-zA-Z]:[\\/]/.test(t) || t.startsWith(`\\\\`);
}
function DD(e) {
  let [t] = Q(e);
  return t === `apply-config` ? { kind: `applyCodexAppConfig` } : null;
}
function OD(e, t) {
  let n = e.searchParams.get(`url`);
  if (
    e.pathname !== `` ||
    e.username !== `` ||
    e.password !== `` ||
    e.port !== `` ||
    e.hash !== `` ||
    t.includes(`#`) ||
    e.searchParams.size !== 1 ||
    n == null
  )
    return null;
  let r = zD(n);
  return r == null ? null : { kind: `browser`, browserUrl: r };
}
function kD(e) {
  let t = AD(e),
    r = e.searchParams.getAll(`mode`),
    i = $(e, `originUrl`),
    a = $(e, `path`),
    o = $(e, `projectId`),
    s;
  if (r.length > 1) return null;
  if (r.length === 1) {
    let e = n.Aa.safeParse(r[0]);
    if (!e.success) return null;
    s = e.data;
  }
  return t == null ||
    (a != null && n.Xs(a.replaceAll(`\\`, `/`))) ||
    (t.prompt == null && t.browserUrl == null && s == null && i == null && a == null && o == null)
    ? null
    : {
        codexAppMode: s,
        kind: `newThread`,
        originUrl: i,
        path: a,
        projectId: o == null ? void 0 : n.ao(o),
        ...t,
      };
}
function AD(e) {
  let t = $(e, `prompt`),
    n = e.searchParams.get(`browserTabId`),
    r = n == null ? null : pD.safeParse(n),
    i = e.searchParams.get(`browserActive`),
    a = i == null ? null : mD.safeParse(i),
    o = e.searchParams.get(`browserUrl`),
    s = o == null ? null : fD.safeParse(o);
  if (
    (s != null && !s.success) ||
    (r != null && !r.success) ||
    (a != null && !a.success) ||
    (s == null && (r != null || a != null)) ||
    (a != null && r == null)
  )
    return null;
  if (a?.data === !1) {
    if (s == null || !s.success || r == null || !r.success || !hD.test(r.data)) return null;
    let e = new URL(s.data);
    if (
      e.protocol !== `https:` ||
      e.username !== `` ||
      e.password !== `` ||
      e.port !== `` ||
      e.hash !== `` ||
      !gD.test(e.hostname) ||
      e.pathname !== `/backfill` ||
      e.searchParams.size !== 2 ||
      e.searchParams.get(`backfillUi`) !== `sage` ||
      !e.searchParams.get(`sageBackfillId`)
    )
      return null;
  }
  let c = { browserUrl: s?.data, prompt: t ?? void 0 };
  return (r != null && (c.browserTabId = r.data), a != null && (c.browserActive = a.data), c);
}
function jD(e) {
  let [t, r, i] = Q(e);
  if (t !== `install` || i != null) return null;
  let a = LD(r);
  if (a == null || !PD(e, aD)) return null;
  let o = $(e, `marketplace`)?.trim();
  return n.La(o) ? { kind: `pluginInstall`, marketplaceName: o, pluginName: a } : null;
}
function MD(e) {
  let [t, r] = Q(e);
  if (r != null || !PD(e, oD)) return null;
  let i = LD(t),
    a = $(e, `marketplacePath`)?.trim(),
    o = $(e, `mode`)?.trim();
  return i == null || a == null || (o != null && o !== `share`) || !n.Js(a) || n.Xs(a)
    ? null
    : {
        kind: `localPluginDetail`,
        hostId: null,
        marketplacePath: a,
        pluginName: i,
        openShareDialog: o === `share`,
      };
}
function ND(e) {
  let [t, n] = Q(e);
  if (t !== `install` || n != null || !PD(e, uD)) return null;
  let r = $(e, `name`)?.trim(),
    i = $(e, `description`)?.trim() ?? null,
    a = $(e, `imageUrl`),
    o = dD.safeParse($(e, `spriteVersionNumber`) ?? void 0);
  if (r == null || a == null || !o.success) return null;
  try {
    let e = new URL(a);
    return e.protocol === `https:`
      ? {
          kind: `petInstall`,
          name: r,
          description: i,
          imageUrl: e.toString(),
          spriteVersionNumber: o.data,
        }
      : null;
  } catch {
    return null;
  }
}
function PD(e, t) {
  for (let n of e.searchParams.keys()) if (!t.has(n)) return !1;
  return !0;
}
function FD(e) {
  let [t, r] = Q(e);
  if (r != null) return null;
  let i = LD(t);
  if (i == null) return null;
  let a = n.Na(i);
  return a == null ? null : { kind: `pluginDetail`, hostId: $(e, `hostId`), pluginId: a };
}
function ID(e) {
  let t = e.host === `settings` ? `settings` : `global`,
    [r, i, ...a] = Q(e).slice(+(t === `settings`));
  if (e.username !== `` || e.password !== `` || e.port !== `` || e.hash !== ``) return null;
  let o = LD(r),
    s = LD(i);
  if (o == null || s == null || n.Pa(o) == null) return null;
  let c = [];
  for (let e of a) {
    let t = LD(e);
    if (t == null) return null;
    c.push(t);
  }
  let l = Array.from(e.searchParams.entries());
  return {
    entrypoint: t,
    kind: `pluginMcpApp`,
    pluginId: o,
    target: c.length === 0 && l.length === 0 ? null : { path: c, query: l },
    toolName: s,
  };
}
function LD(e) {
  if (e == null || e.trim().length === 0) return null;
  try {
    let t = decodeURIComponent(e).trim();
    return t.length > 0 ? t : null;
  } catch {
    return null;
  }
}
function RD(e, t) {
  let [n] = Q(e);
  return n === `oauth_callback`
    ? { kind: `connectorOAuthCallback`, fullRedirectUrl: t, returnTo: $(e, `returnTo`) }
    : null;
}
function zD(e) {
  if (e.trim() !== e) return null;
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return (t.protocol !== `http:` && t.protocol !== `https:`) ||
    t.hostname === `` ||
    t.username !== `` ||
    t.password !== ``
    ? null
    : t.toString();
}
function BD({ isMacOS: e, isPackaged: t, hasExplicitUserDataPath: n = !1 }) {
  return t ? !e || n : !1;
}
function VD({
  app: e,
  isMacOS: i,
  platform: a = process.platform,
  ensurePrimaryWindowVisible: o,
  getPrimaryWindow: s,
  navigateToRoute: c,
  initialArgv: l,
  errorReporter: u,
  onDeepLinkReceived: d,
  openHttpUrl: f,
}) {
  let p = [],
    m = r.n();
  async function h() {
    if (p.length === 0 || !e.isReady()) return;
    let t = p.at(-1),
      n =
        (t?.kind === `codexDeepLink` &&
        t.route.kind === `localConversation` &&
        t.route.browserActive === !1
          ? s?.()
          : null) ?? (await o());
    if (!n) return;
    let r = p.at(-1);
    ((p.length = 0),
      r?.kind === `codexDeepLink`
        ? await c(n, r.route)
        : r?.kind === `httpUrl` && (await f?.(n, r.urlString)));
  }
  function g(t) {
    (p.push({ kind: `codexDeepLink`, route: t }),
      e.isReady() &&
        h().catch((e) => {
          u.reportNonFatal(e instanceof Error ? e : n.oo(e), { kind: `flush-pending-deep-links` });
        }));
  }
  function _(t) {
    (p.push({ kind: `httpUrl`, urlString: t }),
      e.isReady() &&
        h().catch((e) => {
          u.reportNonFatal(e instanceof Error ? e : n.oo(e), { kind: `flush-pending-http-urls` });
        }));
  }
  function v(e, t) {
    let n = yD(e);
    return n
      ? (g(
          t != null && (n.kind === `localPluginDetail` || n.kind === `localConversation`)
            ? { ...n, hostId: t }
            : n,
        ),
        !0)
      : !1;
  }
  let y = e.isPackaged && !i;
  function b(e) {
    if (a !== `linux`) return null;
    let t = e.at(-1);
    return t == null || yD(t) != null ? null : zD(t);
  }
  function x(e) {
    if (a !== `win32`) return !1;
    for (let t = e.length - 1; t >= 0; --t) {
      let n = zD(e[t]);
      if (n != null) return (_(n), !0);
    }
    return !1;
  }
  function S(e) {
    let t = wD(e),
      n = b(e),
      r = t.at(-1);
    r?.isOsDeepLink && n == null && d?.(r.sourceUrl);
    for (let e of t) g(e.route);
    n == null ? t.length === 0 && x(e) : _(n);
  }
  function C(e) {
    let t = wD(e, { allowBareWindowsProjectPathArg: y }),
      n = b(e),
      r = t.at(-1);
    r?.isOsDeepLink && n == null && d?.(r.sourceUrl);
    for (let e of t) g(e.route);
    return (n != null && _(n), n != null || t.length > 0 || x(e));
  }
  function ee() {
    if (process.platform === `win32`) return;
    let t = _D(e.isPackaged);
    try {
      e.setAsDefaultProtocolClient(t) ||
        m.warning(`Failed to register ${t}:// protocol handler`, {
          safe: { isPackaged: e.isPackaged },
          sensitive: {},
        });
    } catch (e) {
      m.warning(`Failed to register ${t}:// protocol handler`, {
        safe: {},
        sensitive: { error: e },
      });
    }
  }
  if (i) {
    let n = (e, t) => {
      let n = yD(e);
      if (n) {
        (g(n), d?.(TD(n, e)), t?.preventDefault());
        return;
      }
      let r = zD(e);
      r && (_(r), t?.preventDefault());
    };
    e.on(`open-url`, (e, t) => {
      n(t, e);
    });
    for (let e of t.a()) n(e);
  }
  return (
    S(l),
    {
      registerProtocolClient: ee,
      queueProcessArgs: C,
      flushPendingDeepLinks: h,
      queueCodexDeepLinkUrl: v,
    }
  );
}
function HD() {
  let e = process.execPath;
  for (;;) {
    if (l.extname(e) === `.app`) return e;
    let t = l.dirname(e);
    if (t === e) return process.execPath;
    e = t;
  }
}
var UD = { retry: `Retry`, recover: `Back Up and Rebuild`, quit: `Quit` },
  WD = `db-backups`,
  GD = `failed to initialize sqlite state runtime under `,
  KD = `failed to initialize state runtime at `,
  qD = `timed out waiting for state db backfill at `,
  JD = `Codex app-server process closed: `,
  YD = `
Most recent error: `;
function XD(e) {
  let t = ZD(e);
  return t.startsWith(GD) || t.startsWith(KD) || t.startsWith(qD);
}
function ZD(e) {
  let t = e instanceof Error ? e.message : String(e);
  if (t.startsWith(JD)) return t.slice(33);
  let n = t.indexOf(YD);
  return n === -1 ? t : t.slice(n + 20);
}
async function QD(e) {
  return $D({
    databasePath: n.zr(),
    open: () => {
      let t = n.Br({ migrationProvenance: e });
      if (t == null) throw Error(`SQLite is only available in the Electron app.`);
      nO(t);
    },
  });
}
async function $D({
  databasePath: e,
  onBackfillWait: t,
  open: n,
  shouldHandleError: r = () => !0,
}) {
  let i = new Set(),
    a = !1;
  for (;;)
    try {
      return (await n(), !0);
    } catch (n) {
      if (!r(n)) throw n;
      if (tO(n)) {
        a || ((a = !0), await t?.());
        continue;
      }
      let s = eO(e),
        c = n;
      if (s != null && (hO(n, s) || (await pO(s))) && !i.has(s)) {
        i.add(s);
        try {
          await iO(s);
          continue;
        } catch (e) {
          c = { originalError: n, recoveryError: e };
        }
      }
      for (;;) {
        let e = await rO(s, c);
        if (e === `retry`) break;
        if (e === `recover` && s != null)
          try {
            await iO(s);
            break;
          } catch (e) {
            c = { originalError: c, recoveryError: e };
            continue;
          }
        return (o.app.quit(), !1);
      }
      continue;
    }
}
function eO(e) {
  return e != null && (l.posix.isAbsolute(e) || l.win32.isAbsolute(e)) ? e : null;
}
function tO(e) {
  let t = ZD(e);
  return XD(e) && t.includes(qD);
}
function nO(e) {
  if (typeof e.prepare(`PRAGMA user_version`).get()?.user_version != `number`)
    throw Error(`SQLite readiness query returned an unexpected result.`);
}
async function rO(e, t) {
  let n = e == null ? [`retry`, `quit`] : [`retry`, `recover`, `quit`];
  return (
    n[
      (
        await o.dialog.showMessageBox({
          type: `error`,
          buttons: n.map((e) => UD[e]),
          defaultId: 0,
          cancelId: n.length - 1,
          message: `${o.app.getName()} cannot access its local database.`,
          detail: [
            `The app cannot finish launching until its SQLite database is accessible.`,
            ``,
            `Database path: ${e ?? `unavailable in app-server startup error`}`,
            ``,
            e == null
              ? `Close other ${o.app.getName()} applications, then click Retry to check whether access has been restored.`
              : `Close other ${o.app.getName()} applications, then click Retry to check whether access has been restored. If the database cannot be opened, Back Up and Rebuild moves it aside so the app can create a fresh one.`,
            ``,
            `Error: ${oO(t)}`,
          ].join(`
`),
          noLink: !0,
        })
      ).response
    ] ?? `quit`
  );
}
async function iO(e) {
  await aO(e, await sO(e));
}
async function aO(e, t, n) {
  let r = {
    type: `info`,
    buttons: [`OK`],
    defaultId: 0,
    cancelId: 0,
    message: `${o.app.getName()} rebuilt its local database.`,
    detail: [
      `${o.app.getName()} detected a damaged local database, moved it into a backup folder, and will continue startup with a fresh database.`,
      ``,
      `Database path: ${e}`,
      ``,
      `Backup folder: ${t}`,
    ].join(`
`),
    noLink: !0,
  };
  if (n == null || n.isDestroyed()) {
    await o.dialog.showMessageBox(r);
    return;
  }
  await o.dialog.showMessageBox(n, r);
}
function oO(e) {
  return gO(e)
    ? [oO(e.originalError), ``, `Recovery failed: ${oO(e.recoveryError)}`].join(`
`)
    : e instanceof Error && e.message.length > 0
      ? e.message
      : String(e);
}
async function sO(e) {
  n.Rr();
  let t = (0, l.dirname)(e);
  if ((await mO(t))?.isFile()) return dO(t);
  let r = cO(e),
    i = await lO(t);
  for (let e of r) (await fO(e)) && (await (0, p.rename)(e, (0, l.join)(i, (0, l.basename)(e))));
  return i;
}
function cO(e) {
  return [e, `${e}-wal`, `${e}-shm`];
}
async function lO(e) {
  return uO((0, l.join)(e, WD));
}
async function uO(e) {
  await (0, p.mkdir)(e, { recursive: !0 });
  for (let t = 0; ; t += 1) {
    let n = (0, l.join)(e, `sqlite-${Math.floor(Date.now() / 1e3)}-${t}`);
    try {
      return (await (0, p.mkdir)(n, { recursive: !1 }), n);
    } catch (e) {
      if (!_O(e, `EEXIST`)) throw e;
    }
  }
}
async function dO(e) {
  let t = await uO((0, l.join)((0, l.dirname)(e), `${(0, l.basename)(e)}.${WD}`));
  return (
    await (0, p.rename)(e, (0, l.join)(t, (0, l.basename)(e))),
    await (0, p.mkdir)(e, { recursive: !0 }),
    t
  );
}
async function fO(e) {
  try {
    return (await (0, p.stat)(e), !0);
  } catch (e) {
    if (_O(e, `ENOENT`)) return !1;
    throw e;
  }
}
async function pO(e) {
  return (await mO((0, l.dirname)(e)))?.isFile() ? !0 : ((await mO(e))?.isDirectory() ?? !1);
}
async function mO(e) {
  try {
    return await (0, p.stat)(e);
  } catch (e) {
    if (_O(e, `ENOENT`)) return null;
    throw e;
  }
}
function hO(e, t) {
  if (_O(e, `SQLITE_CORRUPT`) || _O(e, `SQLITE_NOTADB`)) return !0;
  let n = oO(e).replaceAll(t, ``).toLowerCase();
  return (
    n.includes(`database disk image is malformed`) ||
    n.includes(`file is not a database`) ||
    /\bsqlite_(?:corrupt|notadb)\b/.test(n)
  );
}
function gO(e) {
  return typeof e == `object` && !!e && `originalError` in e && `recoveryError` in e;
}
function _O(e, t) {
  return typeof e == `object` && !!e && `code` in e && e.code === t;
}
var vO = () => !1;
function yO() {
  o.app.on(`window-all-closed`, () => {
    process.platform !== `win32` &&
      ((process.platform === `darwin` && o.app.isPackaged) ||
        (process.platform === `linux` && vO()) ||
        o.app.quit());
  });
}
function bO(e) {
  vO = e;
}
(Object.defineProperty(exports, "$", {
  enumerable: !0,
  get: function () {
    return ZC;
  },
}),
  Object.defineProperty(exports, "A", {
    enumerable: !0,
    get: function () {
      return vT;
    },
  }),
  Object.defineProperty(exports, "At", {
    enumerable: !0,
    get: function () {
      return vt;
    },
  }),
  Object.defineProperty(exports, "B", {
    enumerable: !0,
    get: function () {
      return iT;
    },
  }),
  Object.defineProperty(exports, "Bt", {
    enumerable: !0,
    get: function () {
      return je;
    },
  }),
  Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function () {
      return KT;
    },
  }),
  Object.defineProperty(exports, "Ct", {
    enumerable: !0,
    get: function () {
      return QC;
    },
  }),
  Object.defineProperty(exports, "D", {
    enumerable: !0,
    get: function () {
      return dT;
    },
  }),
  Object.defineProperty(exports, "Dt", {
    enumerable: !0,
    get: function () {
      return US;
    },
  }),
  Object.defineProperty(exports, "E", {
    enumerable: !0,
    get: function () {
      return fT;
    },
  }),
  Object.defineProperty(exports, "Et", {
    enumerable: !0,
    get: function () {
      return KS;
    },
  }),
  Object.defineProperty(exports, "F", {
    enumerable: !0,
    get: function () {
      return cT;
    },
  }),
  Object.defineProperty(exports, "Ft", {
    enumerable: !0,
    get: function () {
      return Ue;
    },
  }),
  Object.defineProperty(exports, "G", {
    enumerable: !0,
    get: function () {
      return Yw;
    },
  }),
  Object.defineProperty(exports, "H", {
    enumerable: !0,
    get: function () {
      return tT;
    },
  }),
  Object.defineProperty(exports, "Ht", {
    enumerable: !0,
    get: function () {
      return oe;
    },
  }),
  Object.defineProperty(exports, "I", {
    enumerable: !0,
    get: function () {
      return mT;
    },
  }),
  Object.defineProperty(exports, "It", {
    enumerable: !0,
    get: function () {
      return Re;
    },
  }),
  Object.defineProperty(exports, "J", {
    enumerable: !0,
    get: function () {
      return sw;
    },
  }),
  Object.defineProperty(exports, "K", {
    enumerable: !0,
    get: function () {
      return Tw;
    },
  }),
  Object.defineProperty(exports, "L", {
    enumerable: !0,
    get: function () {
      return Zw;
    },
  }),
  Object.defineProperty(exports, "Lt", {
    enumerable: !0,
    get: function () {
      return Ie;
    },
  }),
  Object.defineProperty(exports, "M", {
    enumerable: !0,
    get: function () {
      return pT;
    },
  }),
  Object.defineProperty(exports, "Mt", {
    enumerable: !0,
    get: function () {
      return Qe;
    },
  }),
  Object.defineProperty(exports, "N", {
    enumerable: !0,
    get: function () {
      return yT;
    },
  }),
  Object.defineProperty(exports, "Nt", {
    enumerable: !0,
    get: function () {
      return tt;
    },
  }),
  Object.defineProperty(exports, "O", {
    enumerable: !0,
    get: function () {
      return ST;
    },
  }),
  Object.defineProperty(exports, "Ot", {
    enumerable: !0,
    get: function () {
      return TS;
    },
  }),
  Object.defineProperty(exports, "P", {
    enumerable: !0,
    get: function () {
      return sT;
    },
  }),
  Object.defineProperty(exports, "Pt", {
    enumerable: !0,
    get: function () {
      return nt;
    },
  }),
  Object.defineProperty(exports, "Q", {
    enumerable: !0,
    get: function () {
      return AC;
    },
  }),
  Object.defineProperty(exports, "R", {
    enumerable: !0,
    get: function () {
      return oT;
    },
  }),
  Object.defineProperty(exports, "Rt", {
    enumerable: !0,
    get: function () {
      return Le;
    },
  }),
  Object.defineProperty(exports, "S", {
    enumerable: !0,
    get: function () {
      return lE;
    },
  }),
  Object.defineProperty(exports, "St", {
    enumerable: !0,
    get: function () {
      return $C;
    },
  }),
  Object.defineProperty(exports, "T", {
    enumerable: !0,
    get: function () {
      return nT;
    },
  }),
  Object.defineProperty(exports, "Tt", {
    enumerable: !0,
    get: function () {
      return GS;
    },
  }),
  Object.defineProperty(exports, "U", {
    enumerable: !0,
    get: function () {
      return Jw;
    },
  }),
  Object.defineProperty(exports, "V", {
    enumerable: !0,
    get: function () {
      return aT;
    },
  }),
  Object.defineProperty(exports, "Vt", {
    enumerable: !0,
    get: function () {
      return Oe;
    },
  }),
  Object.defineProperty(exports, "W", {
    enumerable: !0,
    get: function () {
      return qw;
    },
  }),
  Object.defineProperty(exports, "X", {
    enumerable: !0,
    get: function () {
      return iw;
    },
  }),
  Object.defineProperty(exports, "Y", {
    enumerable: !0,
    get: function () {
      return aw;
    },
  }),
  Object.defineProperty(exports, "Z", {
    enumerable: !0,
    get: function () {
      return nw;
    },
  }),
  Object.defineProperty(exports, "_", {
    enumerable: !0,
    get: function () {
      return qE;
    },
  }),
  Object.defineProperty(exports, "_t", {
    enumerable: !0,
    get: function () {
      return KC;
    },
  }),
  Object.defineProperty(exports, "a", {
    enumerable: !0,
    get: function () {
      return QD;
    },
  }),
  Object.defineProperty(exports, "at", {
    enumerable: !0,
    get: function () {
      return kC;
    },
  }),
  Object.defineProperty(exports, "b", {
    enumerable: !0,
    get: function () {
      return uE;
    },
  }),
  Object.defineProperty(exports, "bt", {
    enumerable: !0,
    get: function () {
      return JC;
    },
  }),
  Object.defineProperty(exports, "c", {
    enumerable: !0,
    get: function () {
      return _D;
    },
  }),
  Object.defineProperty(exports, "ct", {
    enumerable: !0,
    get: function () {
      return PC;
    },
  }),
  Object.defineProperty(exports, "d", {
    enumerable: !0,
    get: function () {
      return VD;
    },
  }),
  Object.defineProperty(exports, "dt", {
    enumerable: !0,
    get: function () {
      return HC;
    },
  }),
  Object.defineProperty(exports, "et", {
    enumerable: !0,
    get: function () {
      return XC;
    },
  }),
  Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function () {
      return BD;
    },
  }),
  Object.defineProperty(exports, "ft", {
    enumerable: !0,
    get: function () {
      return VC;
    },
  }),
  Object.defineProperty(exports, "g", {
    enumerable: !0,
    get: function () {
      return JE;
    },
  }),
  Object.defineProperty(exports, "gt", {
    enumerable: !0,
    get: function () {
      return IC;
    },
  }),
  Object.defineProperty(exports, "h", {
    enumerable: !0,
    get: function () {
      return XE;
    },
  }),
  Object.defineProperty(exports, "ht", {
    enumerable: !0,
    get: function () {
      return zC;
    },
  }),
  Object.defineProperty(exports, "i", {
    enumerable: !0,
    get: function () {
      return aO;
    },
  }),
  Object.defineProperty(exports, "it", {
    enumerable: !0,
    get: function () {
      return FC;
    },
  }),
  Object.defineProperty(exports, "j", {
    enumerable: !0,
    get: function () {
      return PT;
    },
  }),
  Object.defineProperty(exports, "jt", {
    enumerable: !0,
    get: function () {
      return $e;
    },
  }),
  Object.defineProperty(exports, "k", {
    enumerable: !0,
    get: function () {
      return bT;
    },
  }),
  Object.defineProperty(exports, "kt", {
    enumerable: !0,
    get: function () {
      return bS;
    },
  }),
  Object.defineProperty(exports, "l", {
    enumerable: !0,
    get: function () {
      return vD;
    },
  }),
  Object.defineProperty(exports, "lt", {
    enumerable: !0,
    get: function () {
      return OC;
    },
  }),
  Object.defineProperty(exports, "m", {
    enumerable: !0,
    get: function () {
      return YE;
    },
  }),
  Object.defineProperty(exports, "mt", {
    enumerable: !0,
    get: function () {
      return BC;
    },
  }),
  Object.defineProperty(exports, "n", {
    enumerable: !0,
    get: function () {
      return bO;
    },
  }),
  Object.defineProperty(exports, "nt", {
    enumerable: !0,
    get: function () {
      return qC;
    },
  }),
  Object.defineProperty(exports, "o", {
    enumerable: !0,
    get: function () {
      return $D;
    },
  }),
  Object.defineProperty(exports, "ot", {
    enumerable: !0,
    get: function () {
      return NC;
    },
  }),
  Object.defineProperty(exports, "p", {
    enumerable: !0,
    get: function () {
      return $E;
    },
  }),
  Object.defineProperty(exports, "pt", {
    enumerable: !0,
    get: function () {
      return LC;
    },
  }),
  Object.defineProperty(exports, "q", {
    enumerable: !0,
    get: function () {
      return ow;
    },
  }),
  Object.defineProperty(exports, "r", {
    enumerable: !0,
    get: function () {
      return XD;
    },
  }),
  Object.defineProperty(exports, "rt", {
    enumerable: !0,
    get: function () {
      return GC;
    },
  }),
  Object.defineProperty(exports, "s", {
    enumerable: !0,
    get: function () {
      return HD;
    },
  }),
  Object.defineProperty(exports, "st", {
    enumerable: !0,
    get: function () {
      return MC;
    },
  }),
  Object.defineProperty(exports, "t", {
    enumerable: !0,
    get: function () {
      return yO;
    },
  }),
  Object.defineProperty(exports, "tt", {
    enumerable: !0,
    get: function () {
      return YC;
    },
  }),
  Object.defineProperty(exports, "u", {
    enumerable: !0,
    get: function () {
      return zD;
    },
  }),
  Object.defineProperty(exports, "ut", {
    enumerable: !0,
    get: function () {
      return RC;
    },
  }),
  Object.defineProperty(exports, "v", {
    enumerable: !0,
    get: function () {
      return KE;
    },
  }),
  Object.defineProperty(exports, "vt", {
    enumerable: !0,
    get: function () {
      return UC;
    },
  }),
  Object.defineProperty(exports, "w", {
    enumerable: !0,
    get: function () {
      return rT;
    },
  }),
  Object.defineProperty(exports, "wt", {
    enumerable: !0,
    get: function () {
      return XS;
    },
  }),
  Object.defineProperty(exports, "x", {
    enumerable: !0,
    get: function () {
      return sE;
    },
  }),
  Object.defineProperty(exports, "xt", {
    enumerable: !0,
    get: function () {
      return jC;
    },
  }),
  Object.defineProperty(exports, "y", {
    enumerable: !0,
    get: function () {
      return GE;
    },
  }),
  Object.defineProperty(exports, "yt", {
    enumerable: !0,
    get: function () {
      return WC;
    },
  }),
  Object.defineProperty(exports, "z", {
    enumerable: !0,
    get: function () {
      return xT;
    },
  }),
  Object.defineProperty(exports, "zt", {
    enumerable: !0,
    get: function () {
      return Me;
    },
  }));
//# sourceMappingURL=window-all-closed-DnjtB60s.js.map
