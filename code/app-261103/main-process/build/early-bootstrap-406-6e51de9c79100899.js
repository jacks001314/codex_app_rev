"use strict"
;((exports.ids = [406]),
  (exports.modules = {
    90861(e, i, t) {
      t.d(i, { z: () => o })
      var r = {}
      ;(t.r(r),
        t.d(r, {
          ar: () => p,
          az: () => b,
          be: () => y,
          bg: () => _,
          bn: () => I,
          ca: () => k,
          ckb: () => h,
          cs: () => w,
          da: () => S,
          de: () => U,
          el: () => D,
          en: () => j.A,
          eo: () => N,
          es: () => O,
          fa: () => P,
          fi: () => A,
          fr: () => z,
          frCA: () => Z,
          gu: () => L,
          he: () => T,
          hi: () => V,
          hr: () => E,
          hu: () => C,
          hy: () => M,
          id: () => B,
          is: () => G,
          it: () => F,
          ja: () => W,
          ka: () => K,
          kh: () => X,
          km: () => q,
          kn: () => Y,
          ko: () => H,
          lt: () => ei,
          mk: () => et,
          ms: () => er,
          ne: () => en,
          nl: () => ea,
          nn: () => eu,
          no: () => eo,
          ota: () => el,
          pl: () => ed,
          ps: () => es,
          pt: () => ec,
          ptBR: () => em,
          ro: () => ev,
          ru: () => e$,
          sk: () => eg,
          sl: () => ep,
          sv: () => eb,
          ta: () => ex,
          tg: () => ey,
          th: () => e_,
          tk: () => eI,
          tr: () => ek,
          ua: () => ew,
          uk: () => eh,
          ur: () => eS,
          uz: () => eU,
          vi: () => eD,
          yo: () => eO,
          zhCN: () => ej,
          zhTW: () => eN,
        }))
      var n = {}
      t.r(n)
      var a = {}
      ;(t.r(a),
        t.d(a, {
          $ZodAny: () => c.Gb,
          $ZodArray: () => c.$p,
          $ZodAsyncError: () => l.GT,
          $ZodBase64: () => c.Dq,
          $ZodBase64URL: () => c.CQ,
          $ZodBigInt: () => c.BN,
          $ZodBigIntFormat: () => c.IT,
          $ZodBoolean: () => c.sF,
          $ZodCIDRv4: () => c.CI,
          $ZodCIDRv6: () => c.Cn,
          $ZodCUID: () => c.bl,
          $ZodCUID2: () => c.Zu,
          $ZodCatch: () => c.t$,
          $ZodCheck: () => v.QP,
          $ZodCheckBigIntFormat: () => v.uE,
          $ZodCheckEndsWith: () => v.E6,
          $ZodCheckGreaterThan: () => v.J_,
          $ZodCheckIncludes: () => v.Tt,
          $ZodCheckLengthEquals: () => v.RM,
          $ZodCheckLessThan: () => v.sm,
          $ZodCheckLowerCase: () => v.NI,
          $ZodCheckMaxLength: () => v.Yk,
          $ZodCheckMaxSize: () => v.j2,
          $ZodCheckMimeType: () => v.sj,
          $ZodCheckMinLength: () => v.Kk,
          $ZodCheckMinSize: () => v.PH,
          $ZodCheckMultipleOf: () => v.Jk,
          $ZodCheckNumberFormat: () => v.KH,
          $ZodCheckOverwrite: () => v.v$,
          $ZodCheckProperties: () => v.nJ,
          $ZodCheckProperty: () => v.XF,
          $ZodCheckRegex: () => v.DG,
          $ZodCheckSizeEquals: () => v.e2,
          $ZodCheckStartsWith: () => v.J,
          $ZodCheckStringFormat: () => v.ql,
          $ZodCheckUpperCase: () => v.kH,
          $ZodCodec: () => c.YY,
          $ZodCreditCard: () => c.ZZ,
          $ZodCustom: () => c.b0,
          $ZodCustomStringFormat: () => c.ZQ,
          $ZodCyclicError: () => m.H0,
          $ZodDate: () => c.o5,
          $ZodDefault: () => c.rv,
          $ZodDiscriminatedUnion: () => c.P0,
          $ZodE164: () => c.Oy,
          $ZodEmail: () => c.qG,
          $ZodEmoji: () => c.cG,
          $ZodEncodeError: () => l.cV,
          $ZodEnum: () => c.VO,
          $ZodError: () => d.a$,
          $ZodExactOptional: () => c.RL,
          $ZodFile: () => c.CT,
          $ZodFunction: () => c._A,
          $ZodGUID: () => c.Zc,
          $ZodIBAN: () => c.ew,
          $ZodIPv4: () => c.Lc,
          $ZodIPv6: () => c.Zy,
          $ZodISODate: () => c.v1,
          $ZodISODateTime: () => c.Ko,
          $ZodISODuration: () => c.$N,
          $ZodISOTime: () => c.Ax,
          $ZodIntersection: () => c.LJ,
          $ZodJWT: () => c.h8,
          $ZodKSUID: () => c.GY,
          $ZodLazy: () => c.kU,
          $ZodLiteral: () => c.nu,
          $ZodMAC: () => c.rO,
          $ZodMap: () => c.eb,
          $ZodNaN: () => c.zP,
          $ZodNanoID: () => c.Py,
          $ZodNever: () => c.Um,
          $ZodNonOptional: () => c.N$,
          $ZodNull: () => c.x8,
          $ZodNullable: () => c.qc,
          $ZodNumber: () => c.vz,
          $ZodNumberFormat: () => c.I,
          $ZodObject: () => c.L8,
          $ZodObjectJIT: () => c.w,
          $ZodOptional: () => c.ig,
          $ZodPipe: () => c._m,
          $ZodPrefault: () => c.VF,
          $ZodPreprocess: () => c.KX,
          $ZodPromise: () => c.hA,
          $ZodReadonly: () => c.Sb,
          $ZodRealError: () => d.Kd,
          $ZodRecord: () => c.h,
          $ZodRegistry: () => eP.rs,
          $ZodSet: () => c.Oi,
          $ZodString: () => c.$v,
          $ZodStringFormat: () => c.EY,
          $ZodSuccess: () => c.Dw,
          $ZodSymbol: () => c.U5,
          $ZodTemplateLiteral: () => c.d,
          $ZodTransform: () => c.Wc,
          $ZodTuple: () => c.G3,
          $ZodType: () => c.W4,
          $ZodULID: () => c.g5,
          $ZodURL: () => c.VY,
          $ZodUUID: () => c.Zn,
          $ZodUndefined: () => c.Mv,
          $ZodUnion: () => c.cu,
          $ZodUnknown: () => c.GP,
          $ZodVoid: () => c.WH,
          $ZodXID: () => c.TF,
          $ZodXor: () => c.pm,
          $brand: () => l._e,
          $constructor: () => l.xI,
          $input: () => eP.nP,
          $output: () => eP.UY,
          Doc: () => eA.J,
          INVALID: () => ez,
          JSONSchema: () => n,
          JSONSchemaGenerator: () => ir,
          NEVER: () => l.tm,
          TimePrecision: () => ie.So,
          URL_BAD_FORMAT: () => c.Ix,
          URL_UNPARSEABLE: () => c.bc,
          ZodCompileAsyncError: () => eL,
          ZodCompileUnsupportedError: () => eT,
          _any: () => ie.KA,
          _array: () => ie.dZ,
          _base64: () => ie.rt,
          _base64url: () => ie.cU,
          _bigint: () => ie.z$,
          _boolean: () => ie._L,
          _catch: () => ie.nb,
          _check: () => ie.ST,
          _cidrv4: () => ie.Uy,
          _cidrv6: () => ie.gP,
          _coercedBigint: () => ie.St,
          _coercedBoolean: () => ie.dN,
          _coercedDate: () => ie.B4,
          _coercedNumber: () => ie.qG,
          _coercedString: () => ie.K_,
          _creditCard: () => ie.vN,
          _cuid: () => ie.fs,
          _cuid2: () => ie.Bj,
          _custom: () => ie.FO,
          _date: () => ie.YY,
          _decode: () => s.e2,
          _decodeAsync: () => s.or,
          _default: () => ie.Rv,
          _discriminatedUnion: () => ie.FG,
          _e164: () => ie.KB,
          _email: () => ie.Mu,
          _emoji: () => ie.aC,
          _encode: () => s.Mv,
          _encodeAsync: () => s.GW,
          _endsWith: () => ie.ER,
          _enum: () => ie.$8,
          _file: () => ie.K2,
          _float32: () => ie.HL,
          _float64: () => ie.g6,
          _gt: () => ie.Tx,
          _gte: () => ie.qm,
          _guid: () => ie.tB,
          _iban: () => ie.aZ,
          _includes: () => ie.dR,
          _int: () => ie.LK,
          _int32: () => ie.sw,
          _int64: () => ie.Jg,
          _intersection: () => ie.tj,
          _ipv4: () => ie.Ny,
          _ipv6: () => ie.$O,
          _isoDate: () => ie.db,
          _isoDateTime: () => ie.G1,
          _isoDuration: () => ie.f2,
          _isoTime: () => ie.Kn,
          _jwt: () => ie.rk,
          _ksuid: () => ie._z,
          _lazy: () => ie.kx,
          _length: () => ie.YA,
          _literal: () => ie.rn,
          _lowercase: () => ie.hH,
          _lt: () => ie.Au,
          _lte: () => ie.Zm,
          _mac: () => ie.R8,
          _map: () => ie.rF,
          _max: () => ie.Yv,
          _maxLength: () => ie.Eb,
          _maxSize: () => ie.vL,
          _mime: () => ie.GZ,
          _min: () => ie.Q_,
          _minLength: () => ie.m9,
          _minSize: () => ie.Nd,
          _multipleOf: () => ie.Hi,
          _nan: () => ie.L4,
          _nanoid: () => ie.Dl,
          _nativeEnum: () => ie.Un,
          _negative: () => ie.bR,
          _never: () => ie.G8,
          _nonnegative: () => ie.UI,
          _nonoptional: () => ie.v$,
          _nonpositive: () => ie.ej,
          _normalize: () => ie.lo,
          _null: () => ie.jw,
          _nullable: () => ie.jS,
          _number: () => ie.F7,
          _optional: () => ie.oI,
          _overwrite: () => ie.bS,
          _parse: () => s.Tj,
          _parseAsync: () => s.Rb,
          _pipe: () => ie.yz,
          _positive: () => ie.NC,
          _promise: () => ie.Z$,
          _properties: () => ie.T2,
          _property: () => ie.Jf,
          _readonly: () => ie.CM,
          _record: () => ie.Bb,
          _refine: () => ie.fU,
          _regex: () => ie.Fk,
          _safeDecode: () => s.VS,
          _safeDecodeAsync: () => s.R3,
          _safeEncode: () => s.rh,
          _safeEncodeAsync: () => s.v_,
          _safeParse: () => s.Od,
          _safeParseAsync: () => s.wG,
          _set: () => ie.QC,
          _size: () => ie.d$,
          _slugify: () => ie.TL,
          _startsWith: () => ie.$S,
          _string: () => ie.Rl,
          _stringFormat: () => ie.Af,
          _stringbool: () => ie.fI,
          _success: () => ie.P7,
          _superRefine: () => ie.MB,
          _symbol: () => ie.W7,
          _templateLiteral: () => ie.Bt,
          _toLowerCase: () => ie.Il,
          _toUpperCase: () => ie.xY,
          _transform: () => ie.MQ,
          _trim: () => ie.WN,
          _tuple: () => ie.gt,
          _uint32: () => ie.P,
          _uint64: () => ie.ii,
          _ulid: () => ie.Ct,
          _undefined: () => ie.E4,
          _union: () => ie.h8,
          _unknown: () => ie.em,
          _uppercase: () => ie.qF,
          _url: () => ie.Fn,
          _uuid: () => ie.Be,
          _uuidv4: () => ie.nA,
          _uuidv6: () => ie.pY,
          _uuidv7: () => ie.wA,
          _void: () => ie.OC,
          _xid: () => ie.Pw,
          _xor: () => ie.f0,
          base64Charset: () => c.cq,
          base64urlCharset: () => c.xE,
          canParseURL: () => c.L$,
          clone: () => c.o8,
          compile: () => eV,
          compileFn: () => eC,
          config: () => l.$W,
          createStandardJSONSchemaMethod: () => ii.uE,
          createToJSONSchemaMethod: () => ii.OA,
          decode: () => s.D4,
          decodeAsync: () => s.Re,
          describe: () => ie.q0,
          encode: () => s.lF,
          encodeAsync: () => s.X$,
          extractDefs: () => ii.Wb,
          finalize: () => ii.jE,
          flattenError: () => d.JM,
          formatError: () => d.Wk,
          getDiscriminatedOption: () => c.IB,
          globalConfig: () => l.cr,
          globalRegistry: () => eP.fd,
          handleUnrepresentable: () => ii._S,
          initializeContext: () => ii.az,
          isBackEdge: () => m.TE,
          isRecursiveSchema: () => m.Kw,
          isValidBase64: () => c.UY,
          isValidBase64URL: () => c.tV,
          isValidCIDRv6: () => c.Xe,
          isValidCreditCard: () => c.uv,
          isValidIBAN: () => c.DT,
          isValidIPv6: () => c.SW,
          isValidJWT: () => c.c2,
          locales: () => r,
          memoizer: () => m.x3,
          mergeValues: () => c.D3,
          meta: () => ie.mI,
          parse: () => s.qg,
          parseAsync: () => s.EJ,
          parseURLObject: () => c.y5,
          prettifyError: () => d.S1,
          process: () => ii.eh,
          processSchema: () => ii.Lp,
          regexes: () => g,
          registry: () => eP.u5,
          safeDecode: () => s.ex,
          safeDecodeAsync: () => s.yR,
          safeEncode: () => s.wy,
          safeEncodeAsync: () => s.EM,
          safeParse: () => s.xL,
          safeParseAsync: () => s.bp,
          standardProps: () => c.YK,
          stripTabAndNewline: () => c.NH,
          toDotPath: () => d.sR,
          toJSONSchema: () => it.bl,
          toZod: () => $.toZod,
          treeifyError: () => d.ZC,
          urlHostnameOk: () => c.bL,
          urlProtocolOk: () => c.Yf,
          util: () => $,
          validate: () => s.tf,
          validateAsync: () => s.F0,
          validateURL: () => c.qU,
          version: () => f.r,
          withParser: () => eE,
        }))
      var u = {}
      ;(t.r(u),
        t.d(u, {
          endsWith: () => ie.ER,
          gt: () => ie.Tx,
          gte: () => ie.qm,
          includes: () => ie.dR,
          length: () => ie.YA,
          lowercase: () => ie.hH,
          lt: () => ie.Au,
          lte: () => ie.Zm,
          maxLength: () => ie.Eb,
          maxSize: () => ie.vL,
          mime: () => ie.GZ,
          minLength: () => ie.m9,
          minSize: () => ie.Nd,
          multipleOf: () => ie.Hi,
          negative: () => ie.bR,
          nonnegative: () => ie.UI,
          nonpositive: () => ie.ej,
          normalize: () => ie.lo,
          overwrite: () => ie.bS,
          positive: () => ie.NC,
          properties: () => ie.T2,
          property: () => ie.Jf,
          regex: () => ie.Fk,
          size: () => ie.d$,
          slugify: () => ie.TL,
          startsWith: () => ie.$S,
          toLowerCase: () => ie.Il,
          toUpperCase: () => ie.xY,
          trim: () => ie.WN,
          uppercase: () => ie.qF,
        }))
      var o = {}
      ;(t.r(o),
        t.d(o, {
          $brand: () => l._e,
          $input: () => eP.nP,
          $output: () => eP.UY,
          INVALID: () => ez,
          NEVER: () => l.tm,
          TimePrecision: () => ie.So,
          ZodAny: () => ia.ZodAny,
          ZodArray: () => ia.ZodArray,
          ZodBase64: () => ia.ZodBase64,
          ZodBase64URL: () => ia.ZodBase64URL,
          ZodBigInt: () => ia.ZodBigInt,
          ZodBigIntFormat: () => ia.ZodBigIntFormat,
          ZodBoolean: () => ia.ZodBoolean,
          ZodCIDRv4: () => ia.ZodCIDRv4,
          ZodCIDRv6: () => ia.ZodCIDRv6,
          ZodCUID: () => ia.ZodCUID,
          ZodCUID2: () => ia.ZodCUID2,
          ZodCatch: () => ia.ZodCatch,
          ZodCodec: () => ia.ZodCodec,
          ZodCompileAsyncError: () => eL,
          ZodCompileUnsupportedError: () => eT,
          ZodCreditCard: () => ia.ZodCreditCard,
          ZodCustom: () => ia.ZodCustom,
          ZodCustomStringFormat: () => ia.ZodCustomStringFormat,
          ZodDate: () => ia.ZodDate,
          ZodDefault: () => ia.ZodDefault,
          ZodDiscriminatedUnion: () => ia.ZodDiscriminatedUnion,
          ZodE164: () => ia.ZodE164,
          ZodEmail: () => ia.ZodEmail,
          ZodEmoji: () => ia.ZodEmoji,
          ZodEnum: () => ia.ZodEnum,
          ZodError: () => iu.G,
          ZodExactOptional: () => ia.ZodExactOptional,
          ZodFile: () => ia.ZodFile,
          ZodFirstPartyTypeKind: () => il.kY,
          ZodFunction: () => ia.ZodFunction,
          ZodGUID: () => ia.ZodGUID,
          ZodIBAN: () => ia.ZodIBAN,
          ZodIPv4: () => ia.ZodIPv4,
          ZodIPv6: () => ia.ZodIPv6,
          ZodISODate: () => ia.ZodISODate,
          ZodISODateTime: () => ia.ZodISODateTime,
          ZodISODuration: () => ia.ZodISODuration,
          ZodISOTime: () => ia.ZodISOTime,
          ZodInstanceOf: () => ia.ZodInstanceOf,
          ZodIntersection: () => ia.ZodIntersection,
          ZodIssueCode: () => il.eq,
          ZodJWT: () => ia.ZodJWT,
          ZodKSUID: () => ia.ZodKSUID,
          ZodLazy: () => ia.ZodLazy,
          ZodLiteral: () => ia.ZodLiteral,
          ZodMAC: () => ia.ZodMAC,
          ZodMap: () => ia.ZodMap,
          ZodNaN: () => ia.ZodNaN,
          ZodNanoID: () => ia.ZodNanoID,
          ZodNever: () => ia.ZodNever,
          ZodNonOptional: () => ia.ZodNonOptional,
          ZodNull: () => ia.ZodNull,
          ZodNullable: () => ia.ZodNullable,
          ZodNumber: () => ia.ZodNumber,
          ZodNumberFormat: () => ia.ZodNumberFormat,
          ZodObject: () => ia.ZodObject,
          ZodOptional: () => ia.ZodOptional,
          ZodPipe: () => ia.ZodPipe,
          ZodPrefault: () => ia.ZodPrefault,
          ZodPreprocess: () => ia.ZodPreprocess,
          ZodPromise: () => ia.ZodPromise,
          ZodReadonly: () => ia.ZodReadonly,
          ZodRealError: () => iu.g,
          ZodRecord: () => ia.ZodRecord,
          ZodSet: () => ia.ZodSet,
          ZodString: () => ia.ZodString,
          ZodStringFormat: () => ia.ZodStringFormat,
          ZodSuccess: () => ia.ZodSuccess,
          ZodSymbol: () => ia.ZodSymbol,
          ZodTemplateLiteral: () => ia.ZodTemplateLiteral,
          ZodTransform: () => ia.ZodTransform,
          ZodTuple: () => ia.ZodTuple,
          ZodType: () => ia.ZodType,
          ZodULID: () => ia.ZodULID,
          ZodURL: () => ia.ZodURL,
          ZodUUID: () => ia.ZodUUID,
          ZodUndefined: () => ia.ZodUndefined,
          ZodUnion: () => ia.ZodUnion,
          ZodUnknown: () => ia.ZodUnknown,
          ZodVoid: () => ia.ZodVoid,
          ZodXID: () => ia.ZodXID,
          ZodXor: () => ia.ZodXor,
          _ZodString: () => ia._ZodString,
          _default: () => ia._default,
          _function: () => ia._function,
          any: () => ia.any,
          array: () => ia.array,
          base64: () => ia.base64,
          base64url: () => ia.base64url,
          bigint: () => ia.bigint,
          boolean: () => ia.boolean,
          catch: () => ia.catch,
          check: () => ia.check,
          cidrv4: () => ia.cidrv4,
          cidrv6: () => ia.cidrv6,
          clone: () => $.clone,
          codec: () => ia.codec,
          coerce: () => iD,
          compile: () => eV,
          config: () => l.$W,
          core: () => a,
          creditCard: () => ia.creditCard,
          cuid: () => ia.cuid,
          cuid2: () => ia.cuid2,
          currencyCode: () => ia.currencyCode,
          custom: () => ia.custom,
          date: () => ia.date,
          decode: () => io.D4,
          decodeAsync: () => io.Re,
          deepPartial: () => ih,
          describe: () => ia.describe,
          discriminatedUnion: () => ia.discriminatedUnion,
          e164: () => ia.e164,
          email: () => ia.email,
          emoji: () => ia.emoji,
          encode: () => io.lF,
          encodeAsync: () => io.X$,
          endsWith: () => ie.ER,
          enum: () => ia.enum,
          exactOptional: () => ia.exactOptional,
          file: () => ia.file,
          flattenError: () => d.JM,
          float32: () => ia.float32,
          float64: () => ia.float64,
          formatError: () => d.Wk,
          fromJSONSchema: () => i_,
          function: () => ia.function,
          getDiscriminatedOption: () => c.IB,
          getErrorMap: () => il.si,
          globalRegistry: () => eP.fd,
          gt: () => ie.Tx,
          gte: () => ie.qm,
          guid: () => ia.guid,
          hash: () => ia.hash,
          hex: () => ia.hex,
          hostname: () => ia.hostname,
          httpUrl: () => ia.httpUrl,
          iban: () => ia.iban,
          includes: () => ie.dR,
          input: () => iS,
          instanceof: () => ia.instanceof,
          int: () => ia.int,
          int32: () => ia.int32,
          int64: () => ia.int64,
          intersection: () => ia.intersection,
          invertCodec: () => ia.invertCodec,
          ipv4: () => ia.ipv4,
          ipv6: () => ia.ipv6,
          iso: () => is,
          json: () => ia.json,
          jwt: () => ia.jwt,
          keyof: () => ia.keyof,
          ksuid: () => ia.ksuid,
          lazy: () => ia.lazy,
          length: () => ie.YA,
          literal: () => ia.literal,
          locales: () => r,
          looseObject: () => ia.looseObject,
          looseRecord: () => ia.looseRecord,
          lowercase: () => ie.hH,
          lt: () => ie.Au,
          lte: () => ie.Zm,
          mac: () => ia.mac,
          map: () => ia.map,
          maxLength: () => ie.Eb,
          maxSize: () => ie.vL,
          memoizer: () => m.x3,
          meta: () => ia.meta,
          mime: () => ie.GZ,
          minLength: () => ie.m9,
          minSize: () => ie.Nd,
          multipleOf: () => ie.Hi,
          nan: () => ia.nan,
          nanoid: () => ia.nanoid,
          nativeEnum: () => ia.nativeEnum,
          negative: () => ie.bR,
          never: () => ia.never,
          nonnegative: () => ie.UI,
          nonoptional: () => ia.nonoptional,
          nonpositive: () => ie.ej,
          normalize: () => ie.lo,
          null: () => ia.null,
          nullable: () => ia.nullable,
          nullish: () => ia.nullish,
          number: () => ia.number,
          object: () => ia.object,
          optional: () => ia.optional,
          output: () => iU,
          overwrite: () => ie.bS,
          parse: () => io.qg,
          parseAsync: () => io.EJ,
          partialRecord: () => ia.partialRecord,
          pipe: () => ia.pipe,
          positive: () => ie.NC,
          prefault: () => ia.prefault,
          preprocess: () => ia.preprocess,
          prettifyError: () => d.S1,
          promise: () => ia.promise,
          properties: () => ie.T2,
          property: () => ie.Jf,
          readonly: () => ia.readonly,
          record: () => ia.record,
          refine: () => ia.refine,
          regex: () => ie.Fk,
          regexes: () => g,
          registry: () => eP.u5,
          safeDecode: () => io.ex,
          safeDecodeAsync: () => io.yR,
          safeEncode: () => io.wy,
          safeEncodeAsync: () => io.EM,
          safeParse: () => io.xL,
          safeParseAsync: () => io.bp,
          set: () => ia.set,
          setErrorMap: () => il.pJ,
          size: () => ie.d$,
          slugify: () => ie.TL,
          startsWith: () => ie.$S,
          strictObject: () => ia.strictObject,
          string: () => ia.string,
          stringFormat: () => ia.stringFormat,
          stringbool: () => ia.stringbool,
          success: () => ia.success,
          superRefine: () => ia.superRefine,
          symbol: () => ia.symbol,
          templateLiteral: () => ia.templateLiteral,
          toJSONSchema: () => it.bl,
          toLowerCase: () => ie.Il,
          toUpperCase: () => ie.xY,
          toZod: () => $.toZod,
          transform: () => ia.transform,
          treeifyError: () => d.ZC,
          trim: () => ie.WN,
          tuple: () => ia.tuple,
          uint32: () => ia.uint32,
          uint64: () => ia.uint64,
          ulid: () => ia.ulid,
          undefined: () => ia.undefined,
          union: () => ia.union,
          unknown: () => ia.unknown,
          uppercase: () => ie.qF,
          url: () => ia.url,
          util: () => $,
          uuid: () => ia.uuid,
          uuidv4: () => ia.uuidv4,
          uuidv6: () => ia.uuidv6,
          uuidv7: () => ia.uuidv7,
          validate: () => io.tf,
          validateAsync: () => io.F0,
          void: () => ia.void,
          withParser: () => eE,
          xid: () => ia.xid,
          xor: () => ia.xor,
        }))
      var l = t(23065),
        s = t(69683),
        d = t(22433),
        c = t(28500),
        m = t(85992),
        v = t(17691),
        f = t(60211),
        $ = t(43578),
        g = t(91947)
      function p() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "حرف", verb: "أن يحوي" },
              file: { unit: "بايت", verb: "أن يحوي" },
              array: { unit: "عنصر", verb: "أن يحوي" },
              set: { unit: "عنصر", verb: "أن يحوي" },
              map: { unit: "عنصر", verb: "أن يحوي" },
            }),
            (i = {
              regex: "مدخل",
              email: "بريد إلكتروني",
              url: "رابط",
              emoji: "إيموجي",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "تاريخ ووقت بمعيار ISO",
              date: "تاريخ بمعيار ISO",
              time: "وقت بمعيار ISO",
              duration: "مدة بمعيار ISO",
              ipv4: "عنوان IPv4",
              ipv6: "عنوان IPv6",
              mac: "عنوان MAC",
              cidrv4: "مدى عناوين بصيغة IPv4",
              cidrv6: "مدى عناوين بصيغة IPv6",
              base64: "نَص بترميز base64-encoded",
              base64url: "نَص بترميز base64url-encoded",
              json_string: "نَص على هيئة JSON",
              e164: "رقم هاتف بمعيار E.164",
              credit_card: "رقم بطاقة الائتمان",
              currency_code: "رمز العملة",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "مدخل",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `مدخلات غير مقبولة: يفترض إدخال instanceof ${r.expected}، ولكن تم إدخال ${n}`
                  return `مدخلات غير مقبولة: يفترض إدخال ${e}، ولكن تم إدخال ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `مدخلات غير مقبولة: يفترض إدخال ${$.stringifyPrimitive(r.values[0])}`
                  return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return ` أكبر من اللازم: يفترض أن تكون ${r.origin ?? "القيمة"} ${i} ${r.maximum.toString()} ${t.unit ?? "عنصر"}`
                  return `أكبر من اللازم: يفترض أن تكون ${r.origin ?? "القيمة"} ${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()} ${t.unit}`
                  return `أصغر من اللازم: يفترض لـ ${r.origin} أن يكون ${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `نَص غير مقبول: يجب أن يبدأ بـ "${r.prefix}"`
                  if ("ends_with" === r.format) return `نَص غير مقبول: يجب أن ينتهي بـ "${r.suffix}"`
                  if ("includes" === r.format) return `نَص غير مقبول: يجب أن يتضمَّن "${r.includes}"`
                  if ("regex" === r.format) return `نَص غير مقبول: يجب أن يطابق النمط ${r.pattern}`
                  return `${i[r.format] ?? r.format} غير مقبول`
                case "not_multiple_of":
                  return `رقم غير مقبول: يجب أن يكون من مضاعفات ${r.divisor}`
                case "unrecognized_keys":
                  return `معرف${r.keys.length > 1 ? "ات" : ""} غريب${r.keys.length > 1 ? "ة" : ""}: ${$.joinValues(r.keys, "، ")}`
                case "invalid_key":
                  return `معرف غير مقبول في ${r.origin}`
                case "invalid_union":
                default:
                  return "مدخل غير مقبول"
                case "invalid_element":
                  return `مدخل غير مقبول في ${r.origin}`
              }
            }),
        }
      }
      function b() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "simvol", verb: "olmalıdır" },
              file: { unit: "bayt", verb: "olmalıdır" },
              array: { unit: "element", verb: "olmalıdır" },
              set: { unit: "element", verb: "olmalıdır" },
              map: { unit: "element", verb: "olmalıdır" },
            }),
            (i = {
              regex: "input",
              email: "email address",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datetime",
              date: "ISO date",
              time: "ISO time",
              duration: "ISO duration",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              mac: "MAC address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded string",
              base64url: "base64url-encoded string",
              json_string: "JSON string",
              e164: "E.164 number",
              credit_card: "kredit kartı nömrəsi",
              currency_code: "valyuta kodu",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Yanlış dəyər: g\xf6zlənilən instanceof ${r.expected}, daxil olan ${n}`
                  return `Yanlış dəyər: g\xf6zlənilən ${e}, daxil olan ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Yanlış dəyər: g\xf6zlənilən ${$.stringifyPrimitive(r.values[0])}`
                  return `Yanlış se\xe7im: aşağıdakılardan biri olmalıdır: ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${r.origin ?? "dəyər"} ${i}${r.maximum.toString()} ${t.unit ?? "element"}`
                  return `\xc7ox b\xf6y\xfck: g\xf6zlənilən ${r.origin ?? "dəyər"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `\xc7ox ki\xe7ik: g\xf6zlənilən ${r.origin} ${i}${r.minimum.toString()} ${t.unit}`
                  return `\xc7ox ki\xe7ik: g\xf6zlənilən ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Yanlış mətn: "${r.prefix}" ilə başlamalıdır`
                  if ("ends_with" === r.format) return `Yanlış mətn: "${r.suffix}" ilə bitməlidir`
                  if ("includes" === r.format) return `Yanlış mətn: "${r.includes}" daxil olmalıdır`
                  if ("regex" === r.format) return `Yanlış mətn: ${r.pattern} şablonuna uyğun olmalıdır`
                  return `Yanlış ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Yanlış ədəd: ${r.divisor} ilə b\xf6l\xfcnə bilən olmalıdır`
                case "unrecognized_keys":
                  return `Tanınmayan a\xe7ar${r.keys.length > 1 ? "lar" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} daxilində yanlış a\xe7ar`
                case "invalid_union":
                default:
                  return "Yanlış dəyər"
                case "invalid_element":
                  return `${r.origin} daxilində yanlış dəyər`
              }
            }),
        }
      }
      function x(e, i, t, r) {
        let n = Math.abs(e),
          a = n % 10,
          u = n % 100
        return u >= 11 && u <= 19 ? r : 1 === a ? i : a >= 2 && a <= 4 ? t : r
      }
      function y() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" },
              array: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
              set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
              map: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" },
              file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" },
            }),
            (i = {
              regex: "увод",
              email: "email адрас",
              url: "URL",
              emoji: "эмодзі",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO дата і час",
              date: "ISO дата",
              time: "ISO час",
              duration: "ISO працягласць",
              ipv4: "IPv4 адрас",
              ipv6: "IPv6 адрас",
              mac: "MAC адрас",
              cidrv4: "IPv4 дыяпазон",
              cidrv6: "IPv6 дыяпазон",
              base64: "радок у фармаце base64",
              base64url: "радок у фармаце base64url",
              json_string: "JSON радок",
              e164: "нумар E.164",
              credit_card: "нумар крэдытнай карты",
              currency_code: "код валюты",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "увод",
            }),
            (t = { nan: "NaN", number: "лік", array: "масіў" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Няправільны ўвод: чакаўся instanceof ${r.expected}, атрымана ${n}`
                  return `Няправільны ўвод: чакаўся ${e}, атрымана ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Няправільны ўвод: чакалася ${$.stringifyPrimitive(r.values[0])}`
                  return `Няправільны варыянт: чакаўся адзін з ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = x(Number(r.maximum), t.unit.one, t.unit.few, t.unit.many)
                    return `Занадта вялікі: чакалася, што ${r.origin ?? "значэнне"} павінна ${t.verb} ${i}${r.maximum.toString()} ${e}`
                  }
                  return `Занадта вялікі: чакалася, што ${r.origin ?? "значэнне"} павінна быць ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = x(Number(r.minimum), t.unit.one, t.unit.few, t.unit.many)
                    return `Занадта малы: чакалася, што ${r.origin} павінна ${t.verb} ${i}${r.minimum.toString()} ${e}`
                  }
                  return `Занадта малы: чакалася, што ${r.origin} павінна быць ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Няправільны радок: павінен пачынацца з "${r.prefix}"`
                  if ("ends_with" === r.format) return `Няправільны радок: павінен заканчвацца на "${r.suffix}"`
                  if ("includes" === r.format) return `Няправільны радок: павінен змяшчаць "${r.includes}"`
                  if ("regex" === r.format) return `Няправільны радок: павінен адпавядаць шаблону ${r.pattern}`
                  return `Няправільны ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Няправільны лік: павінен быць кратным ${r.divisor}`
                case "unrecognized_keys":
                  return `Нераспазнаны ${r.keys.length > 1 ? "ключы" : "ключ"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Няправільны ключ у ${r.origin}`
                case "invalid_union":
                default:
                  return "Няправільны ўвод"
                case "invalid_element":
                  return `Няправільнае значэнне ў ${r.origin}`
              }
            }),
        }
      }
      function _() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "символа", verb: "да съдържа" },
              file: { unit: "байта", verb: "да съдържа" },
              array: { unit: "елемента", verb: "да съдържа" },
              set: { unit: "елемента", verb: "да съдържа" },
              map: { unit: "елемента", verb: "да съдържа" },
            }),
            (i = {
              regex: "вход",
              email: "имейл адрес",
              url: "URL",
              emoji: "емоджи",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO време",
              date: "ISO дата",
              time: "ISO време",
              duration: "ISO продължителност",
              ipv4: "IPv4 адрес",
              ipv6: "IPv6 адрес",
              mac: "MAC адрес",
              cidrv4: "IPv4 диапазон",
              cidrv6: "IPv6 диапазон",
              base64: "base64-кодиран низ",
              base64url: "base64url-кодиран низ",
              json_string: "JSON низ",
              e164: "E.164 номер",
              credit_card: "номер на кредитна карта",
              currency_code: "код на валута",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "вход",
            }),
            (t = { nan: "NaN", number: "число", array: "масив" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `Невалиден вход: очакван instanceof ${r.expected}, получен ${n}`
                  return `Невалиден вход: очакван ${e}, получен ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Невалиден вход: очакван ${$.stringifyPrimitive(r.values[0])}`
                  return `Невалидна опция: очаквано едно от ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Твърде голямо: очаква се ${r.origin ?? "стойност"} да съдържа ${i}${r.maximum.toString()} ${t.unit ?? "елемента"}`
                  return `Твърде голямо: очаква се ${r.origin ?? "стойност"} да бъде ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Твърде малко: очаква се ${r.origin} да съдържа ${i}${r.minimum.toString()} ${t.unit}`
                  return `Твърде малко: очаква се ${r.origin} да бъде ${i}${r.minimum.toString()}`
                }
                case "invalid_format": {
                  if ("starts_with" === r.format) return `Невалиден низ: трябва да започва с "${r.prefix}"`
                  if ("ends_with" === r.format) return `Невалиден низ: трябва да завършва с "${r.suffix}"`
                  if ("includes" === r.format) return `Невалиден низ: трябва да включва "${r.includes}"`
                  if ("regex" === r.format) return `Невалиден низ: трябва да съвпада с ${r.pattern}`
                  let e = "Невалиден"
                  return (
                    "emoji" === r.format && (e = "Невалидно"),
                    "datetime" === r.format && (e = "Невалидно"),
                    "date" === r.format && (e = "Невалидна"),
                    "time" === r.format && (e = "Невалидно"),
                    "duration" === r.format && (e = "Невалидна"),
                    `${e} ${i[r.format] ?? r.format}`
                  )
                }
                case "not_multiple_of":
                  return `Невалидно число: трябва да бъде кратно на ${r.divisor}`
                case "unrecognized_keys":
                  return `Неразпознат${r.keys.length > 1 ? "и" : ""} ключ${r.keys.length > 1 ? "ове" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Невалиден ключ в ${r.origin}`
                case "invalid_union":
                default:
                  return "Невалиден вход"
                case "invalid_element":
                  return `Невалидна стойност в ${r.origin}`
              }
            }),
        }
      }
      function I() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "অক্ষর", verb: "থাকতে হবে" },
              file: { unit: "বাইট", verb: "থাকতে হবে" },
              array: { unit: "আইটেম", verb: "থাকতে হবে" },
              set: { unit: "আইটেম", verb: "থাকতে হবে" },
              map: { unit: "এন্ট্রি", verb: "থাকতে হবে" },
            }),
            (i = {
              regex: "ইনপুট",
              email: "ইমেইল ঠিকানা",
              url: "URL",
              emoji: "ইমোজি",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO তারিখ ও সময়",
              date: "ISO তারিখ",
              time: "ISO সময়",
              duration: "ISO সময়কাল",
              ipv4: "IPv4 ঠিকানা",
              ipv6: "IPv6 ঠিকানা",
              mac: "MAC ঠিকানা",
              cidrv4: "IPv4 রেঞ্জ",
              cidrv6: "IPv6 রেঞ্জ",
              base64: "base64-এনকোডেড স্ট্রিং",
              base64url: "base64url-এনকোডেড স্ট্রিং",
              json_string: "JSON স্ট্রিং",
              e164: "E.164 নম্বর",
              credit_card: "ক্রেডিট কার্ড নম্বর",
              currency_code: "মুদ্রা কোড",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ইনপুট",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `অবৈধ ইনপুট: প্রত্যাশিত ${e}, প্রাপ্ত ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `অবৈধ ইনপুট: প্রত্যাশিত ${$.stringifyPrimitive(r.values[0])}`
                  return `অবৈধ অপশন: ${$.joinValues(r.values, " | ")} এর মধ্যে একটি প্রত্যাশিত`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `অনেক বড়: ${r.origin ?? "মান"} ${i}${r.maximum.toString()} ${t.unit ?? "এলিমেন্ট"} হতে হবে`
                  return `অনেক বড়: ${r.origin ?? "মান"} ${i}${r.maximum.toString()} হতে হবে`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `অনেক ছোট: ${r.origin} ${i}${r.minimum.toString()} ${t.unit} হতে হবে`
                  return `অনেক ছোট: ${r.origin} ${i}${r.minimum.toString()} হতে হবে`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `অবৈধ স্ট্রিং: "${r.prefix}" দিয়ে শুরু হতে হবে`
                  if ("ends_with" === r.format) return `অবৈধ স্ট্রিং: "${r.suffix}" দিয়ে শেষ হতে হবে`
                  if ("includes" === r.format) return `অবৈধ স্ট্রিং: "${r.includes}" অন্তর্ভুক্ত থাকতে হবে`
                  if ("regex" === r.format) return `অবৈধ স্ট্রিং: ${r.pattern} প্যাটার্ন মিলতে হবে`
                  return `অবৈধ ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `অবৈধ নম্বর: ${r.divisor} এর গুণিতক হতে হবে`
                case "unrecognized_keys":
                  return `অচেনা কী${r.keys.length > 1 ? "গুলো" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} এ অবৈধ কী`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `অবৈধ ডিসক্রিমিনেটর মান। প্রত্যাশিত ${e}`
                  }
                  return "অবৈধ ইনপুট"
                case "invalid_element":
                  return `${r.origin} এ অবৈধ মান`
                default:
                  return "অবৈধ ইনপুট"
              }
            }),
        }
      }
      function k() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caràcters", verb: "contenir" },
              file: { unit: "bytes", verb: "contenir" },
              array: { unit: "elements", verb: "contenir" },
              set: { unit: "elements", verb: "contenir" },
              map: { unit: "elements", verb: "contenir" },
            }),
            (i = {
              regex: "entrada",
              email: "adreça electrònica",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data i hora ISO",
              date: "data ISO",
              time: "hora ISO",
              duration: "durada ISO",
              ipv4: "adreça IPv4",
              ipv6: "adreça IPv6",
              mac: "adreça MAC",
              cidrv4: "rang IPv4",
              cidrv6: "rang IPv6",
              base64: "cadena codificada en base64",
              base64url: "cadena codificada en base64url",
              json_string: "cadena JSON",
              e164: "número E.164",
              credit_card: "número de targeta de crèdit",
              currency_code: "codi de moneda",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "entrada",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Tipus inv\xe0lid: s'esperava instanceof ${r.expected}, s'ha rebut ${n}`
                  return `Tipus inv\xe0lid: s'esperava ${e}, s'ha rebut ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Valor inv\xe0lid: s'esperava ${$.stringifyPrimitive(r.values[0])}`
                  return `Opci\xf3 inv\xe0lida: s'esperava una de ${$.joinValues(r.values, " o ")}`
                case "too_big": {
                  let i = r.inclusive ? "com a màxim" : "menys de",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xe9s ${i} ${r.maximum.toString()} ${t.unit ?? "elements"}`
                  return `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? "com a mínim" : "més de",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Massa petit: s'esperava que ${r.origin} contingu\xe9s ${i} ${r.minimum.toString()} ${t.unit}`
                  return `Massa petit: s'esperava que ${r.origin} fos ${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Format inv\xe0lid: ha de comen\xe7ar amb "${r.prefix}"`
                  if ("ends_with" === r.format) return `Format inv\xe0lid: ha d'acabar amb "${r.suffix}"`
                  if ("includes" === r.format) return `Format inv\xe0lid: ha d'incloure "${r.includes}"`
                  if ("regex" === r.format) return `Format inv\xe0lid: ha de coincidir amb el patr\xf3 ${r.pattern}`
                  return `Format inv\xe0lid per a ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `N\xfamero inv\xe0lid: ha de ser m\xfaltiple de ${r.divisor}`
                case "unrecognized_keys":
                  return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Clau inv\xe0lida a ${r.origin}`
                case "invalid_union":
                default:
                  return "Entrada invàlida"
                case "invalid_element":
                  return `Element inv\xe0lid a ${r.origin}`
              }
            }),
        }
      }
      function h() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "پیت", verb: "بێت" },
              file: { unit: "بایت", verb: "بێت" },
              array: { unit: "دانە", verb: "بێت" },
              set: { unit: "دانە", verb: "بێت" },
              map: { unit: "دانە", verb: "بێت" },
            }),
            (i = {
              regex: "regex",
              email: "ئیمەیڵ",
              url: "بەستەر (URL)",
              emoji: "ئیمۆجی",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ڕێکەوت و کات",
              date: "ڕێکەوت",
              time: "کات",
              duration: "ماوە",
              ipv4: "ناونیشانی IPv4",
              ipv6: "ناونیشانی IPv6",
              mac: "ناونیشانی MAC",
              cidrv4: "مەودای IPv4",
              cidrv6: "مەودای IPv6",
              base64: "دەقی base64",
              base64url: "دەقی base64url",
              json_string: "دەقی JSON",
              e164: "ژمارەی E.164",
              credit_card: "ژمارەی کارتی کرێدیت",
              currency_code: "کۆدی دراو",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "تێکردە",
            }),
            (t = {
              nan: "NaN",
              string: "نووسین",
              number: "ژمارە",
              boolean: "boolean",
              array: "array",
              object: "object",
              date: "ڕێکەوت",
              integer: "ژمارە",
              float: "ژمارە",
              null: "null",
              undefined: "undefined",
              function: "function",
              symbol: "symbol",
              unknown: "unknown",
              promise: "promise",
              void: "void",
              never: "never",
              map: "map",
              set: "set",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i,
                    a = ["ا", "و", "ۆ", "وو", "ە", "ی", "ێ"].some((e) => n.endsWith(e)) ? "یە" : "ە",
                    u = /^[a-zA-Z]+$/.test(n)
                  if ("null" === i || "undefined" === i) return "داواکراوە"
                  return `چاوەڕوانکراوە ${e} بێت، بەڵام ${n}${u ? "" : a}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `بەهاکە نادرووستە: چاوەڕوانکراوە ${$.stringifyPrimitive(r.values[0])} بێت`
                  return `هەڵبژاردەی نادروست: چاوەڕوانکراوە یەکێک بێت لە ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = e[r.origin] ?? null
                  if (i) return `پێویستە بە لایەنی زۆرەوە ${r.maximum.toString()} ${i.unit} ${i.verb}`
                  return `پێویستە بە لایەنی زۆرەوە ${r.maximum.toString()} بێت`
                }
                case "too_small": {
                  let i = e[r.origin] ?? null
                  if (i) return `پێویستە بە لایەنی کەمەوە ${r.minimum.toString()} ${i.unit} ${i.verb}`
                  return `پێویستە بە لایەنی کەمەوە ${r.minimum.toString()} بێت`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `دەقی نادروست: پێویستە دەستپێبکات بە "${r.prefix}"`
                  if ("ends_with" === r.format) return `دەقی نادروست: پێویستە کۆتاییبێت بە "${r.suffix}"`
                  if ("includes" === r.format) return `دەقی نادروست: پێویستە "${r.includes}" لەخۆبگرێت`
                  if ("regex" === r.format) return `دەقی نادروست: پێویستە لەگەڵ پاتێرنی ${r.pattern} بگونجێت`
                  return `بەهای ${i[r.format] ?? r.format} نادروستە`
                case "not_multiple_of":
                  return `ژمارەی نادروست: دەبێت چەند هێندە بێت بۆ ${r.divisor}`
                case "unrecognized_keys":
                  return `کلیلی نەناسراو: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `کلیلی نادروست لە ${r.origin}`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `بەهای نەناسراو هەیە. بەهای چاوەڕوانکراو: ${e}`
                  }
                  return "یەکگرتنی نادروست"
                case "invalid_element":
                  return `${r.origin} بەهاکە نادروستە`
                default:
                  return "تێکردەی نادروست"
              }
            }),
        }
      }
      function w() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "znaků", verb: "mít" },
              file: { unit: "bajtů", verb: "mít" },
              array: { unit: "prvků", verb: "mít" },
              set: { unit: "prvků", verb: "mít" },
              map: { unit: "prvků", verb: "mít" },
            }),
            (i = {
              regex: "regulární výraz",
              email: "e-mailová adresa",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "datum a čas ve formátu ISO",
              date: "datum ve formátu ISO",
              time: "čas ve formátu ISO",
              duration: "doba trvání ISO",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              mac: "MAC adresa",
              cidrv4: "rozsah IPv4",
              cidrv6: "rozsah IPv6",
              base64: "řetězec zakódovaný ve formátu base64",
              base64url: "řetězec zakódovaný ve formátu base64url",
              json_string: "řetězec ve formátu JSON",
              e164: "číslo E.164",
              credit_card: "číslo kreditní karty",
              currency_code: "kód měny",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "vstup",
            }),
            (t = { nan: "NaN", number: "číslo", string: "řetězec", function: "funkce", array: "pole" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Neplatn\xfd vstup: oček\xe1v\xe1no instanceof ${r.expected}, obdrženo ${n}`
                  return `Neplatn\xfd vstup: oček\xe1v\xe1no ${e}, obdrženo ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Neplatn\xfd vstup: oček\xe1v\xe1no ${$.stringifyPrimitive(r.values[0])}`
                  return `Neplatn\xe1 možnost: oček\xe1v\xe1na jedna z hodnot ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Hodnota je př\xedliš velk\xe1: ${r.origin ?? "hodnota"} mus\xed m\xedt ${i}${r.maximum.toString()} ${t.unit ?? "prvků"}`
                  return `Hodnota je př\xedliš velk\xe1: ${r.origin ?? "hodnota"} mus\xed b\xfdt ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Hodnota je př\xedliš mal\xe1: ${r.origin ?? "hodnota"} mus\xed m\xedt ${i}${r.minimum.toString()} ${t.unit ?? "prvků"}`
                  return `Hodnota je př\xedliš mal\xe1: ${r.origin ?? "hodnota"} mus\xed b\xfdt ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Neplatn\xfd řetězec: mus\xed zač\xednat na "${r.prefix}"`
                  if ("ends_with" === r.format) return `Neplatn\xfd řetězec: mus\xed končit na "${r.suffix}"`
                  if ("includes" === r.format) return `Neplatn\xfd řetězec: mus\xed obsahovat "${r.includes}"`
                  if ("regex" === r.format) return `Neplatn\xfd řetězec: mus\xed odpov\xeddat vzoru ${r.pattern}`
                  return `Neplatn\xfd form\xe1t ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Neplatn\xe9 č\xedslo: mus\xed b\xfdt n\xe1sobkem ${r.divisor}`
                case "unrecognized_keys":
                  return `Nezn\xe1m\xe9 kl\xedče: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Neplatn\xfd kl\xedč v ${r.origin}`
                case "invalid_union":
                default:
                  return "Neplatný vstup"
                case "invalid_element":
                  return `Neplatn\xe1 hodnota v ${r.origin}`
              }
            }),
        }
      }
      function S() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "tegn", verb: "havde" },
              file: { unit: "bytes", verb: "havde" },
              array: { unit: "elementer", verb: "indeholdt" },
              set: { unit: "elementer", verb: "indeholdt" },
              map: { unit: "elementer", verb: "indeholdt" },
            }),
            (i = {
              regex: "input",
              email: "e-mailadresse",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dato- og klokkeslæt",
              date: "ISO-dato",
              time: "ISO-klokkeslæt",
              duration: "ISO-varighed",
              ipv4: "IPv4-adresse",
              ipv6: "IPv6-adresse",
              mac: "MAC-adresse",
              cidrv4: "IPv4-spektrum",
              cidrv6: "IPv6-spektrum",
              base64: "base64-kodet streng",
              base64url: "base64url-kodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              credit_card: "kreditkortnummer",
              currency_code: "valutakode",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = {
              nan: "NaN",
              string: "streng",
              number: "tal",
              boolean: "boolean",
              array: "liste",
              object: "objekt",
              set: "sæt",
              file: "fil",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `Ugyldigt input: forventede instanceof ${r.expected}, fik ${n}`
                  return `Ugyldigt input: forventede ${e}, fik ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Ugyldig v\xe6rdi: forventede ${$.stringifyPrimitive(r.values[0])}`
                  return `Ugyldigt valg: forventede en af f\xf8lgende ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n)
                    return `For stor: forventede ${a ?? "value"} ${n.verb} ${i} ${r.maximum.toString()} ${n.unit ?? "elementer"}`
                  return `For stor: forventede ${a ?? "value"} havde ${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n) return `For lille: forventede ${a} ${n.verb} ${i} ${r.minimum.toString()} ${n.unit}`
                  return `For lille: forventede ${a} havde ${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ugyldig streng: skal starte med "${r.prefix}"`
                  if ("ends_with" === r.format) return `Ugyldig streng: skal ende med "${r.suffix}"`
                  if ("includes" === r.format) return `Ugyldig streng: skal indeholde "${r.includes}"`
                  if ("regex" === r.format) return `Ugyldig streng: skal matche m\xf8nsteret ${r.pattern}`
                  return `Ugyldig ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ugyldigt tal: skal v\xe6re deleligt med ${r.divisor}`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ugyldig n\xf8gle i ${r.origin}`
                case "invalid_union":
                  return "Ugyldigt input: matcher ingen af de tilladte typer"
                case "invalid_element":
                  return `Ugyldig v\xe6rdi i ${r.origin}`
                default:
                  return "Ugyldigt input"
              }
            }),
        }
      }
      function U() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "Zeichen", verb: "zu haben" },
              file: { unit: "Bytes", verb: "zu haben" },
              array: { unit: "Elemente", verb: "zu haben" },
              set: { unit: "Elemente", verb: "zu haben" },
              map: { unit: "Elemente", verb: "zu haben" },
            }),
            (i = {
              regex: "Eingabe",
              email: "E-Mail-Adresse",
              url: "URL",
              emoji: "Emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-Datum und -Uhrzeit",
              date: "ISO-Datum",
              time: "ISO-Uhrzeit",
              duration: "ISO-Dauer",
              ipv4: "IPv4-Adresse",
              ipv6: "IPv6-Adresse",
              mac: "MAC-Adresse",
              cidrv4: "IPv4-Bereich",
              cidrv6: "IPv6-Bereich",
              base64: "Base64-codierter String",
              base64url: "Base64-URL-codierter String",
              json_string: "JSON-String",
              e164: "E.164-Nummer",
              credit_card: "Kreditkartennummer",
              currency_code: "Währungscode",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "Eingabe",
            }),
            (t = { nan: "NaN", number: "Zahl", array: "Array" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Ung\xfcltige Eingabe: erwartet instanceof ${r.expected}, erhalten ${n}`
                  return `Ung\xfcltige Eingabe: erwartet ${e}, erhalten ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Ung\xfcltige Eingabe: erwartet ${$.stringifyPrimitive(r.values[0])}`
                  return `Ung\xfcltige Option: erwartet eine von ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Zu gro\xdf: erwartet, dass ${r.origin ?? "Wert"} ${i}${r.maximum.toString()} ${t.unit ?? "Elemente"} hat`
                  return `Zu gro\xdf: erwartet, dass ${r.origin ?? "Wert"} ${i}${r.maximum.toString()} ist`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ${t.unit} hat`
                  return `Zu klein: erwartet, dass ${r.origin} ${i}${r.minimum.toString()} ist`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ung\xfcltiger String: muss mit "${r.prefix}" beginnen`
                  if ("ends_with" === r.format) return `Ung\xfcltiger String: muss mit "${r.suffix}" enden`
                  if ("includes" === r.format) return `Ung\xfcltiger String: muss "${r.includes}" enthalten`
                  if ("regex" === r.format) return `Ung\xfcltiger String: muss dem Muster ${r.pattern} entsprechen`
                  return `Ung\xfcltig: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ung\xfcltige Zahl: muss ein Vielfaches von ${r.divisor} sein`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ung\xfcltiger Schl\xfcssel in ${r.origin}`
                case "invalid_union":
                default:
                  return "Ungültige Eingabe"
                case "invalid_element":
                  return `Ung\xfcltiger Wert in ${r.origin}`
              }
            }),
        }
      }
      function D() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "χαρακτήρες", verb: "να έχει" },
              file: { unit: "bytes", verb: "να έχει" },
              array: { unit: "στοιχεία", verb: "να έχει" },
              set: { unit: "στοιχεία", verb: "να έχει" },
              map: { unit: "καταχωρήσεις", verb: "να έχει" },
            }),
            (i = {
              regex: "είσοδος",
              email: "διεύθυνση email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO ημερομηνία και ώρα",
              date: "ISO ημερομηνία",
              time: "ISO ώρα",
              duration: "ISO διάρκεια",
              ipv4: "διεύθυνση IPv4",
              ipv6: "διεύθυνση IPv6",
              mac: "διεύθυνση MAC",
              cidrv4: "εύρος IPv4",
              cidrv6: "εύρος IPv6",
              base64: "συμβολοσειρά κωδικοποιημένη σε base64",
              base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
              json_string: "συμβολοσειρά JSON",
              e164: "αριθμός E.164",
              credit_card: "αριθμός πιστωτικής κάρτας",
              currency_code: "κωδικός νομίσματος",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "είσοδος",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if ("string" == typeof r.expected && /^[A-Z]/.test(r.expected))
                    return `Μη έγκυρη είσοδος: αναμενόταν instanceof ${r.expected}, λήφθηκε ${n}`
                  return `Μη έγκυρη είσοδος: αναμενόταν ${e}, λήφθηκε ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Μη έγκυρη είσοδος: αναμενόταν ${$.stringifyPrimitive(r.values[0])}`
                  return `Μη έγκυρη επιλογή: αναμενόταν ένα από ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Πολύ μεγάλο: αναμενόταν ${r.origin ?? "τιμή"} να έχει ${i}${r.maximum.toString()} ${t.unit ?? "στοιχεία"}`
                  return `Πολύ μεγάλο: αναμενόταν ${r.origin ?? "τιμή"} να είναι ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Πολύ μικρό: αναμενόταν ${r.origin} να έχει ${i}${r.minimum.toString()} ${t.unit}`
                  return `Πολύ μικρό: αναμενόταν ${r.origin} να είναι ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${r.prefix}"`
                  if ("ends_with" === r.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${r.suffix}"`
                  if ("includes" === r.format) return `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${r.includes}"`
                  if ("regex" === r.format)
                    return `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${r.pattern}`
                  return `Μη έγκυρο: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${r.divisor}`
                case "unrecognized_keys":
                  return `Άγνωστ${r.keys.length > 1 ? "α" : "ο"} κλειδ${r.keys.length > 1 ? "ιά" : "ί"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Μη έγκυρο κλειδί στο ${r.origin}`
                case "invalid_union":
                default:
                  return "Μη έγκυρη είσοδος"
                case "invalid_element":
                  return `Μη έγκυρη τιμή στο ${r.origin}`
              }
            }),
        }
      }
      var j = t(56719)
      function N() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "karaktrojn", verb: "havi" },
              file: { unit: "bajtojn", verb: "havi" },
              array: { unit: "elementojn", verb: "havi" },
              set: { unit: "elementojn", verb: "havi" },
              map: { unit: "elementojn", verb: "havi" },
            }),
            (i = {
              regex: "enigo",
              email: "retadreso",
              url: "URL",
              emoji: "emoĝio",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-datotempo",
              date: "ISO-dato",
              time: "ISO-tempo",
              duration: "ISO-daŭro",
              ipv4: "IPv4-adreso",
              ipv6: "IPv6-adreso",
              mac: "MAC-adreso",
              cidrv4: "IPv4-rango",
              cidrv6: "IPv6-rango",
              base64: "64-ume kodita karaktraro",
              base64url: "URL-64-ume kodita karaktraro",
              json_string: "JSON-karaktraro",
              e164: "E.164-nombro",
              credit_card: "kreditkarta numero",
              currency_code: "valuta kodo",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "enigo",
            }),
            (t = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Nevalida enigo: atendiĝis instanceof ${r.expected}, riceviĝis ${n}`
                  return `Nevalida enigo: atendiĝis ${e}, riceviĝis ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Nevalida enigo: atendiĝis ${$.stringifyPrimitive(r.values[0])}`
                  return `Nevalida opcio: atendiĝis unu el ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Tro granda: atendiĝis ke ${r.origin ?? "valoro"} havu ${i}${r.maximum.toString()} ${t.unit ?? "elementojn"}`
                  return `Tro granda: atendiĝis ke ${r.origin ?? "valoro"} havu ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Tro malgranda: atendiĝis ke ${r.origin} havu ${i}${r.minimum.toString()} ${t.unit}`
                  return `Tro malgranda: atendiĝis ke ${r.origin} estu ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Nevalida karaktraro: devas komenciĝi per "${r.prefix}"`
                  if ("ends_with" === r.format) return `Nevalida karaktraro: devas finiĝi per "${r.suffix}"`
                  if ("includes" === r.format) return `Nevalida karaktraro: devas inkluzivi "${r.includes}"`
                  if ("regex" === r.format) return `Nevalida karaktraro: devas kongrui kun la modelo ${r.pattern}`
                  return `Nevalida ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Nevalida nombro: devas esti oblo de ${r.divisor}`
                case "unrecognized_keys":
                  return `Nekonata${r.keys.length > 1 ? "j" : ""} ŝlosilo${r.keys.length > 1 ? "j" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Nevalida ŝlosilo en ${r.origin}`
                case "invalid_union":
                default:
                  return "Nevalida enigo"
                case "invalid_element":
                  return `Nevalida valoro en ${r.origin}`
              }
            }),
        }
      }
      function O() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caracteres", verb: "tener" },
              file: { unit: "bytes", verb: "tener" },
              array: { unit: "elementos", verb: "tener" },
              set: { unit: "elementos", verb: "tener" },
            }),
            (i = {
              regex: "entrada",
              email: "dirección de correo electrónico",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "fecha y hora ISO",
              date: "fecha ISO",
              time: "hora ISO",
              duration: "duración ISO",
              ipv4: "dirección IPv4",
              ipv6: "dirección IPv6",
              mac: "dirección MAC",
              cidrv4: "rango IPv4",
              cidrv6: "rango IPv6",
              base64: "cadena codificada en base64",
              base64url: "URL codificada en base64",
              json_string: "cadena JSON",
              e164: "número E.164",
              credit_card: "número de tarjeta de crédito",
              currency_code: "código de moneda",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "entrada",
            }),
            (t = {
              nan: "NaN",
              string: "texto",
              number: "número",
              boolean: "booleano",
              array: "arreglo",
              object: "objeto",
              set: "conjunto",
              file: "archivo",
              date: "fecha",
              bigint: "número grande",
              symbol: "símbolo",
              undefined: "indefinido",
              null: "nulo",
              function: "función",
              map: "mapa",
              record: "registro",
              tuple: "tupla",
              enum: "enumeración",
              union: "unión",
              literal: "literal",
              promise: "promesa",
              void: "vacío",
              never: "nunca",
              unknown: "desconocido",
              any: "cualquiera",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Entrada inv\xe1lida: se esperaba instanceof ${r.expected}, recibido ${n}`
                  return `Entrada inv\xe1lida: se esperaba ${e}, recibido ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Entrada inv\xe1lida: se esperaba ${$.stringifyPrimitive(r.values[0])}`
                  return `Opci\xf3n inv\xe1lida: se esperaba una de ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n)
                    return `Demasiado grande: se esperaba que ${a ?? "valor"} tuviera ${i}${r.maximum.toString()} ${n.unit ?? "elementos"}`
                  return `Demasiado grande: se esperaba que ${a ?? "valor"} fuera ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n)
                    return `Demasiado peque\xf1o: se esperaba que ${a} tuviera ${i}${r.minimum.toString()} ${n.unit}`
                  return `Demasiado peque\xf1o: se esperaba que ${a} fuera ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Cadena inv\xe1lida: debe comenzar con "${r.prefix}"`
                  if ("ends_with" === r.format) return `Cadena inv\xe1lida: debe terminar en "${r.suffix}"`
                  if ("includes" === r.format) return `Cadena inv\xe1lida: debe incluir "${r.includes}"`
                  if ("regex" === r.format) return `Cadena inv\xe1lida: debe coincidir con el patr\xf3n ${r.pattern}`
                  return `Inv\xe1lido ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `N\xfamero inv\xe1lido: debe ser m\xfaltiplo de ${r.divisor}`
                case "unrecognized_keys":
                  return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Llave inv\xe1lida en ${t[r.origin] ?? r.origin}`
                case "invalid_union":
                default:
                  return "Entrada inválida"
                case "invalid_element":
                  return `Valor inv\xe1lido en ${t[r.origin] ?? r.origin}`
              }
            }),
        }
      }
      function P() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "کاراکتر", verb: "داشته باشد" },
              file: { unit: "بایت", verb: "داشته باشد" },
              array: { unit: "آیتم", verb: "داشته باشد" },
              set: { unit: "آیتم", verb: "داشته باشد" },
              map: { unit: "آیتم", verb: "داشته باشد" },
            }),
            (i = {
              regex: "ورودی",
              email: "آدرس ایمیل",
              url: "URL",
              emoji: "ایموجی",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "تاریخ و زمان ایزو",
              date: "تاریخ ایزو",
              time: "زمان ایزو",
              duration: "مدت زمان ایزو",
              ipv4: "IPv4 آدرس",
              ipv6: "IPv6 آدرس",
              mac: "MAC آدرس",
              cidrv4: "IPv4 دامنه",
              cidrv6: "IPv6 دامنه",
              base64: "base64-encoded رشته",
              base64url: "base64url-encoded رشته",
              json_string: "JSON رشته",
              e164: "E.164 عدد",
              credit_card: "شماره کارت اعتباری",
              currency_code: "کد ارز",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ورودی",
            }),
            (t = { nan: "NaN", number: "عدد", array: "آرایه" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `ورودی نامعتبر: می‌بایست instanceof ${r.expected} می‌بود، ${n} دریافت شد`
                  return `ورودی نامعتبر: می‌بایست ${e} می‌بود، ${n} دریافت شد`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `ورودی نامعتبر: می‌بایست ${$.stringifyPrimitive(r.values[0])} می‌بود`
                  return `گزینه نامعتبر: می‌بایست یکی از ${$.joinValues(r.values, "|")} می‌بود`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `خیلی بزرگ: ${r.origin ?? "مقدار"} باید ${i}${r.maximum.toString()} ${t.unit ?? "عنصر"} باشد`
                  return `خیلی بزرگ: ${r.origin ?? "مقدار"} باید ${i}${r.maximum.toString()} باشد`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} ${t.unit} باشد`
                  return `خیلی کوچک: ${r.origin} باید ${i}${r.minimum.toString()} باشد`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `رشته نامعتبر: باید با "${r.prefix}" شروع شود`
                  if ("ends_with" === r.format) return `رشته نامعتبر: باید با "${r.suffix}" تمام شود`
                  if ("includes" === r.format) return `رشته نامعتبر: باید شامل "${r.includes}" باشد`
                  if ("regex" === r.format) return `رشته نامعتبر: باید با الگوی ${r.pattern} مطابقت داشته باشد`
                  return `${i[r.format] ?? r.format} نامعتبر`
                case "not_multiple_of":
                  return `عدد نامعتبر: باید مضرب ${r.divisor} باشد`
                case "unrecognized_keys":
                  return `کلید${r.keys.length > 1 ? "های" : ""} ناشناس: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `کلید ناشناس در ${r.origin}`
                case "invalid_union":
                default:
                  return "ورودی نامعتبر"
                case "invalid_element":
                  return `مقدار نامعتبر در ${r.origin}`
              }
            }),
        }
      }
      function A() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "merkkiä", subject: "merkkijonon" },
              file: { unit: "tavua", subject: "tiedoston" },
              array: { unit: "alkiota", subject: "listan" },
              set: { unit: "alkiota", subject: "joukon" },
              map: { unit: "alkiota", subject: "kuvauksen" },
              number: { unit: "", subject: "luvun" },
              bigint: { unit: "", subject: "suuren kokonaisluvun" },
              int: { unit: "", subject: "kokonaisluvun" },
              date: { unit: "", subject: "päivämäärän" },
            }),
            (i = {
              regex: "säännöllinen lauseke",
              email: "sähköpostiosoite",
              url: "URL-osoite",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-aikaleima",
              date: "ISO-päivämäärä",
              time: "ISO-aika",
              duration: "ISO-kesto",
              ipv4: "IPv4-osoite",
              ipv6: "IPv6-osoite",
              mac: "MAC-osoite",
              cidrv4: "IPv4-alue",
              cidrv6: "IPv6-alue",
              base64: "base64-koodattu merkkijono",
              base64url: "base64url-koodattu merkkijono",
              json_string: "JSON-merkkijono",
              e164: "E.164-luku",
              credit_card: "luottokortin numero",
              currency_code: "valuuttakoodi",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "templaattimerkkijono",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Virheellinen tyyppi: odotettiin instanceof ${r.expected}, oli ${n}`
                  return `Virheellinen tyyppi: odotettiin ${e}, oli ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Virheellinen sy\xf6te: t\xe4ytyy olla ${$.stringifyPrimitive(r.values[0])}`
                  return `Virheellinen valinta: t\xe4ytyy olla yksi seuraavista: ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) return `Liian suuri: ${t.subject} t\xe4ytyy olla ${i}${r.maximum.toString()} ${t.unit}`.trim()
                  return `Liian suuri: arvon t\xe4ytyy olla ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Liian pieni: ${t.subject} t\xe4ytyy olla ${i}${r.minimum.toString()} ${t.unit}`.trim()
                  return `Liian pieni: arvon t\xe4ytyy olla ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Virheellinen sy\xf6te: t\xe4ytyy alkaa "${r.prefix}"`
                  if ("ends_with" === r.format) return `Virheellinen sy\xf6te: t\xe4ytyy loppua "${r.suffix}"`
                  if ("includes" === r.format)
                    return `Virheellinen sy\xf6te: t\xe4ytyy sis\xe4lt\xe4\xe4 "${r.includes}"`
                  if ("regex" === r.format)
                    return `Virheellinen sy\xf6te: t\xe4ytyy vastata s\xe4\xe4nn\xf6llist\xe4 lauseketta ${r.pattern}`
                  return `Virheellinen ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Virheellinen luku: t\xe4ytyy olla luvun ${r.divisor} monikerta`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return "Virheellinen avain tietueessa"
                case "invalid_union":
                  return "Virheellinen unioni"
                case "invalid_element":
                  return "Virheellinen arvo joukossa"
                default:
                  return "Virheellinen syöte"
              }
            }),
        }
      }
      function z() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caractères", verb: "avoir" },
              file: { unit: "octets", verb: "avoir" },
              array: { unit: "éléments", verb: "avoir" },
              set: { unit: "éléments", verb: "avoir" },
            }),
            (i = {
              regex: "expression régulière",
              email: "adresse e-mail",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "date et heure ISO",
              date: "date ISO",
              time: "heure ISO",
              duration: "durée ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              mac: "adresse MAC",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "chaîne de caractères encodée en base64",
              base64url: "chaîne de caractères encodée en base64url",
              json_string: "chaîne de caractères JSON",
              e164: "numéro au format E.164",
              credit_card: "numéro de carte de crédit",
              currency_code: "code de devise",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "entrée",
            }),
            (t = {
              string: "chaîne de caractères",
              number: "nombre",
              int: "entier",
              boolean: "booléen",
              bigint: "grand entier",
              symbol: "symbole",
              undefined: "indéfini",
              null: "null",
              never: "jamais",
              void: "vide",
              date: "date",
              array: "tableau",
              object: "objet",
              tuple: "tuple",
              record: "record",
              map: "map",
              set: "ensemble",
              file: "fichier",
              nonoptional: "non optionnel",
              nan: "NaN",
              function: "fonction",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Entr\xe9e invalide : instance de ${r.expected} attendu, ${n} re\xe7u`
                  return `Entr\xe9e invalide : ${e} attendu, ${n} re\xe7u`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Entr\xe9e invalide : ${$.stringifyPrimitive(r.values[0])} attendu`
                  return `Option invalide : une valeur parmi ${$.joinValues(r.values, "|")} attendue`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    n = e[r.origin] ?? null
                  if (n)
                    return `Trop grand : ${t[r.origin] ?? "valeur"} doit ${n.verb} ${i}${r.maximum.toString()} ${n.unit ?? "élément(s)"}`
                  return `Trop grand : ${t[r.origin] ?? "valeur"} doit \xeatre ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    n = e[r.origin] ?? null
                  if (n)
                    return `Trop petit : ${t[r.origin] ?? "valeur"} doit ${n.verb} ${i}${r.minimum.toString()} ${n.unit}`
                  return `Trop petit : ${t[r.origin] ?? "valeur"} doit \xeatre ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format)
                    return `Cha\xeene de caract\xe8res invalide : doit commencer par "${r.prefix}"`
                  if ("ends_with" === r.format)
                    return `Cha\xeene de caract\xe8res invalide : doit se terminer par "${r.suffix}"`
                  if ("includes" === r.format)
                    return `Cha\xeene de caract\xe8res invalide : doit inclure "${r.includes}"`
                  if ("regex" === r.format)
                    return `Cha\xeene de caract\xe8res invalide : doit correspondre au motif ${r.pattern}`
                  return `${i[r.format] ?? r.format} invalide`
                case "not_multiple_of":
                  return `Nombre invalide : doit \xeatre un multiple de ${r.divisor}`
                case "unrecognized_keys":
                  return `Cl\xe9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Cl\xe9 invalide dans ${r.origin}`
                case "invalid_union":
                default:
                  return "Entrée invalide"
                case "invalid_element":
                  return `Valeur invalide dans ${r.origin}`
              }
            }),
        }
      }
      function Z() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caractères", verb: "avoir" },
              file: { unit: "octets", verb: "avoir" },
              array: { unit: "éléments", verb: "avoir" },
              set: { unit: "éléments", verb: "avoir" },
              map: { unit: "éléments", verb: "avoir" },
            }),
            (i = {
              regex: "entrée",
              email: "adresse courriel",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "date-heure ISO",
              date: "date ISO",
              time: "heure ISO",
              duration: "durée ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              mac: "adresse MAC",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "chaîne encodée en base64",
              base64url: "chaîne encodée en base64url",
              json_string: "chaîne JSON",
              e164: "numéro E.164",
              credit_card: "numéro de carte de crédit",
              currency_code: "code de devise",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "entrée",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Entr\xe9e invalide : attendu instanceof ${r.expected}, re\xe7u ${n}`
                  return `Entr\xe9e invalide : attendu ${e}, re\xe7u ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Entr\xe9e invalide : attendu ${$.stringifyPrimitive(r.values[0])}`
                  return `Option invalide : attendu l'une des valeurs suivantes ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "≤" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${i}${r.maximum.toString()} ${t.unit}`
                  return `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? "≥" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Trop petit : attendu que ${r.origin} ait ${i}${r.minimum.toString()} ${t.unit}`
                  return `Trop petit : attendu que ${r.origin} soit ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Cha\xeene invalide : doit commencer par "${r.prefix}"`
                  if ("ends_with" === r.format) return `Cha\xeene invalide : doit se terminer par "${r.suffix}"`
                  if ("includes" === r.format) return `Cha\xeene invalide : doit inclure "${r.includes}"`
                  if ("regex" === r.format) return `Cha\xeene invalide : doit correspondre au motif ${r.pattern}`
                  return `${i[r.format] ?? r.format} invalide`
                case "not_multiple_of":
                  return `Nombre invalide : doit \xeatre un multiple de ${r.divisor}`
                case "unrecognized_keys":
                  return `Cl\xe9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Cl\xe9 invalide dans ${r.origin}`
                case "invalid_union":
                default:
                  return "Entrée invalide"
                case "invalid_element":
                  return `Valeur invalide dans ${r.origin}`
              }
            }),
        }
      }
      function L() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "અક્ષર", verb: "હોવા જોઈએ" },
              file: { unit: "બાયટ", verb: "હોવા જોઈએ" },
              array: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
              set: { unit: "આઇટમ", verb: "હોવા જોઈએ" },
              map: { unit: "એન્ટ્રી", verb: "હોવા જોઈએ" },
            }),
            (i = {
              regex: "ઇનપુટ",
              email: "ઈમેઇલ એડ્રેસ",
              url: "URL",
              emoji: "ઇમોજી",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO તારીખ અને સમય",
              date: "ISO તારીખ",
              time: "ISO સમય",
              duration: "ISO અવધિ",
              ipv4: "IPv4 એડ્રેસ",
              ipv6: "IPv6 એડ્રેસ",
              mac: "MAC એડ્રેસ",
              cidrv4: "IPv4 શ્રેણી",
              cidrv6: "IPv6 શ્રેણી",
              base64: "base64-એન્કોડેડ સ્ટ્રિંગ",
              base64url: "base64url-એન્કોડેડ સ્ટ્રિંગ",
              json_string: "JSON સ્ટ્રિંગ",
              e164: "E.164 નંબર",
              credit_card: "ક્રેડિટ કાર્ડ નંબર",
              currency_code: "ચલણ કોડ",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ઇનપુટ",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `અમાન્ય ઇનપુટ: અપેક્ષિત ${e}, પ્રાપ્ત ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `અમાન્ય ઇનપુટ: અપેક્ષિત ${$.stringifyPrimitive(r.values[0])}`
                  return `અમાન્ય વિકલ્પ: ${$.joinValues(r.values, " | ")} માધ્યમથી એક અપેક્ષિત`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ખૂબ મોટું: ${r.origin ?? "મૂલ્ય"} ${i}${r.maximum.toString()} ${t.unit ?? "એલિમેન્ટ"} હોવા જોઈએ`
                  return `ખૂબ મોટું: ${r.origin ?? "મૂલ્ય"} ${i}${r.maximum.toString()} હોવું જોઈએ`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `ખૂબ નાનું: ${r.origin} ${i}${r.minimum.toString()} ${t.unit} હોવા જોઈએ`
                  return `ખૂબ નાનું: ${r.origin} ${i}${r.minimum.toString()} હોવું જોઈએ`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `અમાન્ય સ્ટ્રિંગ: "${r.prefix}" થી શરૂ થવું જોઈએ`
                  if ("ends_with" === r.format) return `અમાન્ય સ્ટ્રિંગ: "${r.suffix}" પર સમાપ્ત થવું જોઈએ`
                  if ("includes" === r.format) return `અમાન્ય સ્ટ્રિંગ: "${r.includes}" શામેલ હોવું જોઈએ`
                  if ("regex" === r.format) return `અમાન્ય સ્ટ્રિંગ: પેટર્ન ${r.pattern} સાથે મેળ ખાવું જોઈએ`
                  return `અમાન્ય ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `અમાન્ય નંબર: ${r.divisor} નો ગુણાંક હોવો જોઈએ`
                case "unrecognized_keys":
                  return `ઓળખી શકાતા નહીં તે કી${r.keys.length > 1 ? "ઓ" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} માં અમાન્ય કી`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `અમાન્ય ડિસ્ક્રિમિનેટર મૂલ્ય. અપેક્ષિત ${e}`
                  }
                  return "અમાન્ય ઇનપુટ"
                case "invalid_element":
                  return `${r.origin} માં અમાન્ય મૂલ્ય`
                default:
                  return "અમાન્ય ઇનપુટ"
              }
            }),
        }
      }
      function T() {
        let e, i, t, r, n, a, u, o, l
        return {
          localeError:
            ((e = {
              string: { label: "מחרוזת", gender: "f" },
              number: { label: "מספר", gender: "m" },
              boolean: { label: "ערך בוליאני", gender: "m" },
              bigint: { label: "BigInt", gender: "m" },
              date: { label: "תאריך", gender: "m" },
              array: { label: "מערך", gender: "m" },
              object: { label: "אובייקט", gender: "m" },
              null: { label: "ערך ריק (null)", gender: "m" },
              undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
              symbol: { label: "סימבול (Symbol)", gender: "m" },
              function: { label: "פונקציה", gender: "f" },
              map: { label: "מפה (Map)", gender: "f" },
              set: { label: "קבוצה (Set)", gender: "f" },
              file: { label: "קובץ", gender: "m" },
              promise: { label: "Promise", gender: "m" },
              NaN: { label: "NaN", gender: "m" },
              unknown: { label: "ערך לא ידוע", gender: "m" },
              value: { label: "ערך", gender: "m" },
            }),
            (i = {
              string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
              file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
              array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
              set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
              number: { unit: "", shortLabel: "קטן", longLabel: "גדול" },
            }),
            (t = (i) => (i ? e[i] : void 0)),
            (r = (i) => {
              let r = t(i)
              return r ? r.label : (i ?? e.unknown.label)
            }),
            (n = (e) => `ה${r(e)}`),
            (a = (e) => {
              let i = t(e)
              return "f" === (i?.gender ?? "m") ? "צריכה להיות" : "צריך להיות"
            }),
            (u = (e) => (e ? (i[e] ?? null) : null)),
            (o = {
              regex: { label: "קלט", gender: "m" },
              email: { label: "כתובת אימייל", gender: "f" },
              url: { label: "כתובת רשת", gender: "f" },
              emoji: { label: "אימוג'י", gender: "m" },
              uuid: { label: "UUID", gender: "m" },
              uuidv4: { label: "UUIDv4", gender: "m" },
              uuidv6: { label: "UUIDv6", gender: "m" },
              nanoid: { label: "nanoid", gender: "m" },
              guid: { label: "GUID", gender: "m" },
              cuid: { label: "cuid", gender: "m" },
              cuid2: { label: "cuid2", gender: "m" },
              ulid: { label: "ULID", gender: "m" },
              xid: { label: "XID", gender: "m" },
              ksuid: { label: "KSUID", gender: "m" },
              datetime: { label: "תאריך וזמן ISO", gender: "m" },
              date: { label: "תאריך ISO", gender: "m" },
              time: { label: "זמן ISO", gender: "m" },
              duration: { label: "משך זמן ISO", gender: "m" },
              ipv4: { label: "כתובת IPv4", gender: "f" },
              ipv6: { label: "כתובת IPv6", gender: "f" },
              mac: { label: "כתובת MAC", gender: "f" },
              cidrv4: { label: "טווח IPv4", gender: "m" },
              cidrv6: { label: "טווח IPv6", gender: "m" },
              base64: { label: "מחרוזת בבסיס 64", gender: "f" },
              base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
              json_string: { label: "מחרוזת JSON", gender: "f" },
              e164: { label: "מספר E.164", gender: "m" },
              credit_card: { label: "מספר כרטיס אשראי", gender: "m" },
              currency_code: { label: "קוד מטבע", gender: "m" },
              iban: { label: "IBAN", gender: "m" },
              jwt: { label: "JWT", gender: "m" },
              template_literal: { label: "קלט", gender: "m" },
              ends_with: { label: "קלט", gender: "m" },
              includes: { label: "קלט", gender: "m" },
              lowercase: { label: "קלט", gender: "m" },
              starts_with: { label: "קלט", gender: "m" },
              uppercase: { label: "קלט", gender: "m" },
            }),
            (l = { nan: "NaN" }),
            (i) => {
              switch (i.code) {
                case "invalid_type": {
                  let t = i.expected,
                    n = l[t ?? ""] ?? r(t),
                    a = $.parsedType(i.input),
                    u = l[a] ?? e[a]?.label ?? a
                  if (/^[A-Z]/.test(i.expected)) return `קלט לא תקין: צריך להיות instanceof ${i.expected}, התקבל ${u}`
                  return `קלט לא תקין: צריך להיות ${n}, התקבל ${u}`
                }
                case "invalid_value": {
                  if (1 === i.values.length) return `ערך לא תקין: הערך חייב להיות ${$.stringifyPrimitive(i.values[0])}`
                  let e = i.values.map((e) => $.stringifyPrimitive(e))
                  if (2 === i.values.length) return `ערך לא תקין: האפשרויות המתאימות הן ${e[0]} או ${e[1]}`
                  let t = e[e.length - 1],
                    r = e.slice(0, -1).join(", ")
                  return `ערך לא תקין: האפשרויות המתאימות הן ${r} או ${t}`
                }
                case "too_big": {
                  let e = u(i.origin),
                    t = n(i.origin ?? "value")
                  if ("string" === i.origin)
                    return `${e?.longLabel ?? "ארוך"} מדי: ${t} צריכה להכיל ${i.maximum.toString()} ${e?.unit ?? ""} ${i.inclusive ? "או פחות" : "לכל היותר"}`.trim()
                  if ("number" === i.origin) {
                    let e = i.inclusive ? `קטן או שווה ל-${i.maximum}` : `קטן מ-${i.maximum}`
                    return `גדול מדי: ${t} צריך להיות ${e}`
                  }
                  if ("array" === i.origin || "set" === i.origin) {
                    let r = "set" === i.origin ? "צריכה" : "צריך",
                      n = i.inclusive ? `${i.maximum} ${e?.unit ?? ""} או פחות` : `פחות מ-${i.maximum} ${e?.unit ?? ""}`
                    return `גדול מדי: ${t} ${r} להכיל ${n}`.trim()
                  }
                  let r = i.inclusive ? "<=" : "<",
                    o = a(i.origin ?? "value")
                  if (e?.unit) return `${e.longLabel} מדי: ${t} ${o} ${r}${i.maximum.toString()} ${e.unit}`
                  return `${e?.longLabel ?? "גדול"} מדי: ${t} ${o} ${r}${i.maximum.toString()}`
                }
                case "too_small": {
                  let e = u(i.origin),
                    t = n(i.origin ?? "value")
                  if ("string" === i.origin)
                    return `${e?.shortLabel ?? "קצר"} מדי: ${t} צריכה להכיל ${i.minimum.toString()} ${e?.unit ?? ""} ${i.inclusive ? "או יותר" : "לפחות"}`.trim()
                  if ("number" === i.origin) {
                    let e = i.inclusive ? `גדול או שווה ל-${i.minimum}` : `גדול מ-${i.minimum}`
                    return `קטן מדי: ${t} צריך להיות ${e}`
                  }
                  if ("array" === i.origin || "set" === i.origin) {
                    let r = "set" === i.origin ? "צריכה" : "צריך"
                    if (1 === i.minimum && i.inclusive) {
                      let e = (i.origin, "לפחות פריט אחד")
                      return `קטן מדי: ${t} ${r} להכיל ${e}`
                    }
                    let n = i.inclusive
                      ? `${i.minimum} ${e?.unit ?? ""} או יותר`
                      : `יותר מ-${i.minimum} ${e?.unit ?? ""}`
                    return `קטן מדי: ${t} ${r} להכיל ${n}`.trim()
                  }
                  let r = i.inclusive ? ">=" : ">",
                    o = a(i.origin ?? "value")
                  if (e?.unit) return `${e.shortLabel} מדי: ${t} ${o} ${r}${i.minimum.toString()} ${e.unit}`
                  return `${e?.shortLabel ?? "קטן"} מדי: ${t} ${o} ${r}${i.minimum.toString()}`
                }
                case "invalid_format": {
                  if ("starts_with" === i.format) return `המחרוזת חייבת להתחיל ב "${i.prefix}"`
                  if ("ends_with" === i.format) return `המחרוזת חייבת להסתיים ב "${i.suffix}"`
                  if ("includes" === i.format) return `המחרוזת חייבת לכלול "${i.includes}"`
                  if ("regex" === i.format) return `המחרוזת חייבת להתאים לתבנית ${i.pattern}`
                  let e = o[i.format],
                    t = e?.label ?? i.format,
                    r = e?.gender ?? "m"
                  return `${t} לא ${"f" === r ? "תקינה" : "תקין"}`
                }
                case "not_multiple_of":
                  return `מספר לא תקין: חייב להיות מכפלה של ${i.divisor}`
                case "unrecognized_keys":
                  return `מפתח${i.keys.length > 1 ? "ות" : ""} לא מזוה${i.keys.length > 1 ? "ים" : "ה"}: ${$.joinValues(i.keys, ", ")}`
                case "invalid_key":
                  return "שדה לא תקין באובייקט"
                case "invalid_union":
                default:
                  return "קלט לא תקין"
                case "invalid_element": {
                  let e = n(i.origin ?? "array")
                  return `ערך לא תקין ב${e}`
                }
              }
            }),
        }
      }
      function V() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "अक्षर", verb: "रखने के लिए" },
              file: { unit: "बाइट्स", verb: "रखने के लिए" },
              array: { unit: "तत्व", verb: "रखने के लिए" },
              set: { unit: "तत्व", verb: "रखने के लिए" },
              map: { unit: "प्रविष्टियाँ", verb: "रखने के लिए" },
            }),
            (i = {
              regex: "इनपुट",
              email: "ईमेल पता",
              url: "URL",
              emoji: "इमोजी",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO तिथि और समय",
              date: "ISO तिथि",
              time: "ISO समय",
              duration: "ISO अवधि",
              ipv4: "IPv4 पता",
              ipv6: "IPv6 पता",
              mac: "MAC पता",
              cidrv4: "IPv4 श्रेणी",
              cidrv6: "IPv6 श्रेणी",
              base64: "Base64-एन्कोडेड स्ट्रिंग",
              base64url: "Base64URL-एन्कोडेड स्ट्रिंग",
              json_string: "JSON स्ट्रिंग",
              e164: "E.164 संख्या",
              credit_card: "क्रेडिट कार्ड संख्या",
              currency_code: "मुद्रा कोड",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "इनपुट",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `अमान्य इनपुट: अपेक्षित ${$.stringifyPrimitive(r.values[0])}`
                  return `अमान्य विकल्प: अपेक्षित मानों में से एक ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) return `बहुत बड़ा: अपेक्षित था कि ${r.origin ?? "मान"} में ${i}${r.maximum} ${t.unit} हों`
                  return `बहुत बड़ा: अपेक्षित था कि ${r.origin ?? "मान"} ${i}${r.maximum} हो`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `बहुत छोटा: अपेक्षित था कि ${r.origin} में ${i}${r.minimum} ${t.unit} हों`
                  return `बहुत छोटा: अपेक्षित था कि ${r.origin} ${i}${r.minimum} हो`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `अमान्य स्ट्रिंग: "${r.prefix}" से शुरू होना चाहिए`
                  if ("ends_with" === r.format) return `अमान्य स्ट्रिंग: "${r.suffix}" पर समाप्त होना चाहिए`
                  if ("includes" === r.format) return `अमान्य स्ट्रिंग: इसमें "${r.includes}" शामिल होना चाहिए`
                  if ("regex" === r.format) return `अमान्य स्ट्रिंग: पैटर्न ${r.pattern} से मेल खाना चाहिए`
                  return `अमान्य ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `अमान्य संख्या: यह ${r.divisor} का गुणज होना चाहिए`
                case "unrecognized_keys":
                  return `अपरिचित कुंजी${r.keys.length > 1 ? "याँ" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `अमान्य कुंजी: ${r.origin} में`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`
                  }
                  return "अमान्य इनपुट"
                case "invalid_element":
                  return `अमान्य मान: ${r.origin} में`
                default:
                  return "अमान्य इनपुट"
              }
            }),
        }
      }
      function E() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "znakova", verb: "imati" },
              file: { unit: "bajtova", verb: "imati" },
              array: { unit: "stavki", verb: "imati" },
              set: { unit: "stavki", verb: "imati" },
            }),
            (i = {
              regex: "unos",
              email: "email adresa",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum i vrijeme",
              date: "ISO datum",
              time: "ISO vrijeme",
              duration: "ISO trajanje",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              mac: "MAC adresa",
              cidrv4: "IPv4 raspon",
              cidrv6: "IPv6 raspon",
              base64: "base64 kodirani tekst",
              base64url: "base64url kodirani tekst",
              json_string: "JSON tekst",
              e164: "E.164 broj",
              credit_card: "broj kreditne kartice",
              currency_code: "kod valute",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "unos",
            }),
            (t = {
              nan: "NaN",
              string: "tekst",
              number: "broj",
              boolean: "boolean",
              array: "niz",
              object: "objekt",
              set: "skup",
              file: "datoteka",
              date: "datum",
              bigint: "bigint",
              symbol: "simbol",
              undefined: "undefined",
              null: "null",
              function: "funkcija",
              map: "mapa",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Neispravan unos: očekuje se instanceof ${r.expected}, a primljeno je ${n}`
                  return `Neispravan unos: očekuje se ${e}, a primljeno je ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Neispravna vrijednost: očekivano ${$.stringifyPrimitive(r.values[0])}`
                  return `Neispravna opcija: očekivano jedno od ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n)
                    return `Preveliko: očekivano da ${a ?? "vrijednost"} ima ${i}${r.maximum.toString()} ${n.unit ?? "elemenata"}`
                  return `Preveliko: očekivano da ${a ?? "vrijednost"} bude ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    n = e[r.origin] ?? null,
                    a = t[r.origin] ?? r.origin
                  if (n) return `Premalo: očekivano da ${a} ima ${i}${r.minimum.toString()} ${n.unit}`
                  return `Premalo: očekivano da ${a} bude ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Neispravan tekst: mora započinjati s "${r.prefix}"`
                  if ("ends_with" === r.format) return `Neispravan tekst: mora završavati s "${r.suffix}"`
                  if ("includes" === r.format) return `Neispravan tekst: mora sadržavati "${r.includes}"`
                  if ("regex" === r.format) return `Neispravan tekst: mora odgovarati uzorku ${r.pattern}`
                  return `Neispravna ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Neispravan broj: mora biti višekratnik od ${r.divisor}`
                case "unrecognized_keys":
                  return `Neprepoznat${r.keys.length > 1 ? "i ključevi" : " ključ"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Neispravan ključ u ${t[r.origin] ?? r.origin}`
                case "invalid_union":
                default:
                  return "Neispravan unos"
                case "invalid_element":
                  return `Neispravna vrijednost u ${t[r.origin] ?? r.origin}`
              }
            }),
        }
      }
      function C() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "karakter", verb: "legyen" },
              file: { unit: "byte", verb: "legyen" },
              array: { unit: "elem", verb: "legyen" },
              set: { unit: "elem", verb: "legyen" },
              map: { unit: "elem", verb: "legyen" },
            }),
            (i = {
              regex: "bemenet",
              email: "email cím",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO időbélyeg",
              date: "ISO dátum",
              time: "ISO idő",
              duration: "ISO időintervallum",
              ipv4: "IPv4 cím",
              ipv6: "IPv6 cím",
              mac: "MAC cím",
              cidrv4: "IPv4 tartomány",
              cidrv6: "IPv6 tartomány",
              base64: "base64-kódolt string",
              base64url: "base64url-kódolt string",
              json_string: "JSON string",
              e164: "E.164 szám",
              credit_card: "hitelkártyaszám",
              currency_code: "pénznemkód",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "bemenet",
            }),
            (t = { nan: "NaN", number: "szám", array: "tömb" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k instanceof ${r.expected}, a kapott \xe9rt\xe9k ${n}`
                  return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${e}, a kapott \xe9rt\xe9k ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `\xc9rv\xe9nytelen bemenet: a v\xe1rt \xe9rt\xe9k ${$.stringifyPrimitive(r.values[0])}`
                  return `\xc9rv\xe9nytelen opci\xf3: valamelyik \xe9rt\xe9k v\xe1rt ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `T\xfal nagy: ${r.origin ?? "érték"} m\xe9rete t\xfal nagy ${i}${r.maximum.toString()} ${t.unit ?? "elem"}`
                  return `T\xfal nagy: a bemeneti \xe9rt\xe9k ${r.origin ?? "érték"} t\xfal nagy: ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${r.origin} m\xe9rete t\xfal kicsi ${i}${r.minimum.toString()} ${t.unit}`
                  return `T\xfal kicsi: a bemeneti \xe9rt\xe9k ${r.origin} t\xfal kicsi ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format)
                    return `\xc9rv\xe9nytelen string: "${r.prefix}" \xe9rt\xe9kkel kell kezdődnie`
                  if ("ends_with" === r.format)
                    return `\xc9rv\xe9nytelen string: "${r.suffix}" \xe9rt\xe9kkel kell v\xe9gződnie`
                  if ("includes" === r.format)
                    return `\xc9rv\xe9nytelen string: "${r.includes}" \xe9rt\xe9ket kell tartalmaznia`
                  if ("regex" === r.format) return `\xc9rv\xe9nytelen string: ${r.pattern} mint\xe1nak kell megfelelnie`
                  return `\xc9rv\xe9nytelen ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `\xc9rv\xe9nytelen sz\xe1m: ${r.divisor} t\xf6bbsz\xf6r\xf6s\xe9nek kell lennie`
                case "unrecognized_keys":
                  return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `\xc9rv\xe9nytelen kulcs ${r.origin}`
                case "invalid_union":
                default:
                  return "Érvénytelen bemenet"
                case "invalid_element":
                  return `\xc9rv\xe9nytelen \xe9rt\xe9k: ${r.origin}`
              }
            }),
        }
      }
      function R(e, i, t) {
        return 1 === Math.abs(e) ? i : t
      }
      function J(e) {
        if (!e) return ""
        let i = e[e.length - 1]
        return e + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(i) ? "ն" : "ը")
      }
      function M() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: { one: "նշան", many: "նշաններ" }, verb: "ունենալ" },
              file: { unit: { one: "բայթ", many: "բայթեր" }, verb: "ունենալ" },
              array: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
              set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
              map: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" },
            }),
            (i = {
              regex: "մուտք",
              email: "էլ. հասցե",
              url: "URL",
              emoji: "էմոջի",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO ամսաթիվ և ժամ",
              date: "ISO ամսաթիվ",
              time: "ISO ժամ",
              duration: "ISO տևողություն",
              ipv4: "IPv4 հասցե",
              ipv6: "IPv6 հասցե",
              mac: "MAC հասցե",
              cidrv4: "IPv4 միջակայք",
              cidrv6: "IPv6 միջակայք",
              base64: "base64 ձևաչափով տող",
              base64url: "base64url ձևաչափով տող",
              json_string: "JSON տող",
              e164: "E.164 համար",
              credit_card: "կրեդիտ քարտի համար",
              currency_code: "արժույթի կոդ",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "մուտք",
            }),
            (t = { nan: "NaN", number: "թիվ", array: "զանգված" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Սխալ մուտքագրում․ սպասվում էր instanceof ${r.expected}, ստացվել է ${n}`
                  return `Սխալ մուտքագրում․ սպասվում էր ${e}, ստացվել է ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Սխալ մուտքագրում․ սպասվում էր ${$.stringifyPrimitive(r.values[1])}`
                  return `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = R(Number(r.maximum), t.unit.one, t.unit.many)
                    return `Չափազանց մեծ արժեք․ սպասվում է, որ ${J(r.origin ?? "արժեք")} կունենա ${i}${r.maximum.toString()} ${e}`
                  }
                  return `Չափազանց մեծ արժեք․ սպասվում է, որ ${J(r.origin ?? "արժեք")} լինի ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = R(Number(r.minimum), t.unit.one, t.unit.many)
                    return `Չափազանց փոքր արժեք․ սպասվում է, որ ${J(r.origin)} կունենա ${i}${r.minimum.toString()} ${e}`
                  }
                  return `Չափազանց փոքր արժեք․ սպասվում է, որ ${J(r.origin)} լինի ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Սխալ տող․ պետք է սկսվի "${r.prefix}"-ով`
                  if ("ends_with" === r.format) return `Սխալ տող․ պետք է ավարտվի "${r.suffix}"-ով`
                  if ("includes" === r.format) return `Սխալ տող․ պետք է պարունակի "${r.includes}"`
                  if ("regex" === r.format) return `Սխալ տող․ պետք է համապատասխանի ${r.pattern} ձևաչափին`
                  return `Սխալ ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${r.divisor}-ի`
                case "unrecognized_keys":
                  return `Չճանաչված բանալի${r.keys.length > 1 ? "ներ" : ""}. ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Սխալ բանալի ${J(r.origin)}-ում`
                case "invalid_union":
                default:
                  return "Սխալ մուտքագրում"
                case "invalid_element":
                  return `Սխալ արժեք ${J(r.origin)}-ում`
              }
            }),
        }
      }
      function B() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "karakter", verb: "memiliki" },
              file: { unit: "byte", verb: "memiliki" },
              array: { unit: "item", verb: "memiliki" },
              set: { unit: "item", verb: "memiliki" },
              map: { unit: "item", verb: "memiliki" },
            }),
            (i = {
              regex: "input",
              email: "alamat email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "tanggal dan waktu format ISO",
              date: "tanggal format ISO",
              time: "jam format ISO",
              duration: "durasi format ISO",
              ipv4: "alamat IPv4",
              ipv6: "alamat IPv6",
              mac: "alamat MAC",
              cidrv4: "rentang alamat IPv4",
              cidrv6: "rentang alamat IPv6",
              base64: "string dengan enkode base64",
              base64url: "string dengan enkode base64url",
              json_string: "string JSON",
              e164: "angka E.164",
              credit_card: "nomor kartu kredit",
              currency_code: "kode mata uang",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Input tidak valid: diharapkan instanceof ${r.expected}, diterima ${n}`
                  return `Input tidak valid: diharapkan ${e}, diterima ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Input tidak valid: diharapkan ${$.stringifyPrimitive(r.values[0])}`
                  return `Pilihan tidak valid: diharapkan salah satu dari ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${i}${r.maximum.toString()} ${t.unit ?? "elemen"}`
                  return `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Terlalu kecil: diharapkan ${r.origin} memiliki ${i}${r.minimum.toString()} ${t.unit}`
                  return `Terlalu kecil: diharapkan ${r.origin} menjadi ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `String tidak valid: harus dimulai dengan "${r.prefix}"`
                  if ("ends_with" === r.format) return `String tidak valid: harus berakhir dengan "${r.suffix}"`
                  if ("includes" === r.format) return `String tidak valid: harus menyertakan "${r.includes}"`
                  if ("regex" === r.format) return `String tidak valid: harus sesuai pola ${r.pattern}`
                  return `${i[r.format] ?? r.format} tidak valid`
                case "not_multiple_of":
                  return `Angka tidak valid: harus kelipatan dari ${r.divisor}`
                case "unrecognized_keys":
                  return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Kunci tidak valid di ${r.origin}`
                case "invalid_union":
                default:
                  return "Input tidak valid"
                case "invalid_element":
                  return `Nilai tidak valid di ${r.origin}`
              }
            }),
        }
      }
      function G() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "stafi", verb: "að hafa" },
              file: { unit: "bæti", verb: "að hafa" },
              array: { unit: "hluti", verb: "að hafa" },
              set: { unit: "hluti", verb: "að hafa" },
              map: { unit: "hluti", verb: "að hafa" },
            }),
            (i = {
              regex: "gildi",
              email: "netfang",
              url: "vefslóð",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dagsetning og tími",
              date: "ISO dagsetning",
              time: "ISO tími",
              duration: "ISO tímalengd",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              mac: "MAC address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded strengur",
              base64url: "base64url-encoded strengur",
              json_string: "JSON strengur",
              e164: "E.164 tölugildi",
              credit_card: "kreditkortanúmer",
              currency_code: "gjaldmiðilskóði",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "gildi",
            }),
            (t = { nan: "NaN", number: "númer", array: "fylki" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Rangt gildi: \xde\xfa sl\xf3st inn ${n} \xfear sem \xe1 a\xf0 vera instanceof ${r.expected}`
                  return `Rangt gildi: \xde\xfa sl\xf3st inn ${n} \xfear sem \xe1 a\xf0 vera ${e}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Rangt gildi: gert r\xe1\xf0 fyrir ${$.stringifyPrimitive(r.values[0])}`
                  return `\xd3gilt val: m\xe1 vera eitt af eftirfarandi ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${r.origin ?? "gildi"} hafi ${i}${r.maximum.toString()} ${t.unit ?? "hluti"}`
                  return `Of st\xf3rt: gert er r\xe1\xf0 fyrir a\xf0 ${r.origin ?? "gildi"} s\xe9 ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${r.origin} hafi ${i}${r.minimum.toString()} ${t.unit}`
                  return `Of l\xedti\xf0: gert er r\xe1\xf0 fyrir a\xf0 ${r.origin} s\xe9 ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 byrja \xe1 "${r.prefix}"`
                  if ("ends_with" === r.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 enda \xe1 "${r.suffix}"`
                  if ("includes" === r.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 innihalda "${r.includes}"`
                  if ("regex" === r.format) return `\xd3gildur strengur: ver\xf0ur a\xf0 fylgja mynstri ${r.pattern}`
                  return `Rangt ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `R\xf6ng tala: ver\xf0ur a\xf0 vera margfeldi af ${r.divisor}`
                case "unrecognized_keys":
                  return `\xd3\xfeekkt ${r.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Rangur lykill \xed ${r.origin}`
                case "invalid_union":
                default:
                  return "Rangt gildi"
                case "invalid_element":
                  return `Rangt gildi \xed ${r.origin}`
              }
            }),
        }
      }
      function F() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caratteri", verb: "avere" },
              file: { unit: "byte", verb: "avere" },
              array: { unit: "elementi", verb: "avere" },
              set: { unit: "elementi", verb: "avere" },
              map: { unit: "elementi", verb: "avere" },
            }),
            (i = {
              regex: "input",
              email: "indirizzo email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data e ora ISO",
              date: "data ISO",
              time: "ora ISO",
              duration: "durata ISO",
              ipv4: "indirizzo IPv4",
              ipv6: "indirizzo IPv6",
              mac: "indirizzo MAC",
              cidrv4: "intervallo IPv4",
              cidrv6: "intervallo IPv6",
              base64: "stringa codificata in base64",
              base64url: "URL codificata in base64",
              json_string: "stringa JSON",
              e164: "numero E.164",
              credit_card: "numero di carta di credito",
              currency_code: "codice valuta",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN", number: "numero", array: "vettore" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Input non valido: atteso instanceof ${r.expected}, ricevuto ${n}`
                  return `Input non valido: atteso ${e}, ricevuto ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Input non valido: atteso ${$.stringifyPrimitive(r.values[0])}`
                  return `Opzione non valida: atteso uno tra ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Troppo grande: ${r.origin ?? "valore"} deve avere ${i}${r.maximum.toString()} ${t.unit ?? "elementi"}`
                  return `Troppo grande: ${r.origin ?? "valore"} deve essere ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Troppo piccolo: ${r.origin} deve avere ${i}${r.minimum.toString()} ${t.unit}`
                  return `Troppo piccolo: ${r.origin} deve essere ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Stringa non valida: deve iniziare con "${r.prefix}"`
                  if ("ends_with" === r.format) return `Stringa non valida: deve terminare con "${r.suffix}"`
                  if ("includes" === r.format) return `Stringa non valida: deve includere "${r.includes}"`
                  if ("regex" === r.format) return `Stringa non valida: deve corrispondere al pattern ${r.pattern}`
                  return `Input non valido: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Numero non valido: deve essere un multiplo di ${r.divisor}`
                case "unrecognized_keys":
                  return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Chiave non valida in ${r.origin}`
                case "invalid_union":
                default:
                  return "Input non valido"
                case "invalid_element":
                  return `Valore non valido in ${r.origin}`
              }
            }),
        }
      }
      function W() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "文字", verb: "である" },
              file: { unit: "バイト", verb: "である" },
              array: { unit: "要素", verb: "である" },
              set: { unit: "要素", verb: "である" },
              map: { unit: "要素", verb: "である" },
            }),
            (i = {
              regex: "入力値",
              email: "メールアドレス",
              url: "URL",
              emoji: "絵文字",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO日時",
              date: "ISO日付",
              time: "ISO時刻",
              duration: "ISO期間",
              ipv4: "IPv4アドレス",
              ipv6: "IPv6アドレス",
              mac: "MACアドレス",
              cidrv4: "IPv4範囲",
              cidrv6: "IPv6範囲",
              base64: "base64エンコード文字列",
              base64url: "base64urlエンコード文字列",
              json_string: "JSON文字列",
              e164: "E.164番号",
              credit_card: "クレジットカード番号",
              currency_code: "通貨コード",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "入力値",
            }),
            (t = { nan: "NaN", number: "数値", array: "配列" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `無効な入力: instanceof ${r.expected}が期待されましたが、${n}が入力されました`
                  return `無効な入力: ${e}が期待されましたが、${n}が入力されました`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `無効な入力: ${$.stringifyPrimitive(r.values[0])}が期待されました`
                  return `無効な選択: ${$.joinValues(r.values, "、")}のいずれかである必要があります`
                case "too_big": {
                  let i = r.inclusive ? "以下である" : "より小さい",
                    t = e[r.origin] ?? null
                  if (t)
                    return `大きすぎる値: ${r.origin ?? "値"}は${r.maximum.toString()}${t.unit ?? "要素"}${i}必要があります`
                  return `大きすぎる値: ${r.origin ?? "値"}は${r.maximum.toString()}${i}必要があります`
                }
                case "too_small": {
                  let i = r.inclusive ? "以上である" : "より大きい",
                    t = e[r.origin] ?? null
                  if (t) return `小さすぎる値: ${r.origin}は${r.minimum.toString()}${t.unit}${i}必要があります`
                  return `小さすぎる値: ${r.origin}は${r.minimum.toString()}${i}必要があります`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `無効な文字列: "${r.prefix}"で始まる必要があります`
                  if ("ends_with" === r.format) return `無効な文字列: "${r.suffix}"で終わる必要があります`
                  if ("includes" === r.format) return `無効な文字列: "${r.includes}"を含む必要があります`
                  if ("regex" === r.format) return `無効な文字列: パターン${r.pattern}に一致する必要があります`
                  return `無効な${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `無効な数値: ${r.divisor}の倍数である必要があります`
                case "unrecognized_keys":
                  return `認識されていないキー${r.keys.length > 1 ? "群" : ""}: ${$.joinValues(r.keys, "、")}`
                case "invalid_key":
                  return `${r.origin}内の無効なキー`
                case "invalid_union":
                default:
                  return "無効な入力"
                case "invalid_element":
                  return `${r.origin}内の無効な値`
              }
            }),
        }
      }
      function K() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
              file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
              array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
              set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
              map: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
            }),
            (i = {
              regex: "შეყვანა",
              email: "ელ-ფოსტის მისამართი",
              url: "URL",
              emoji: "ემოჯი",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "თარიღი-დრო",
              date: "თარიღი",
              time: "დრო",
              duration: "ხანგრძლივობა",
              ipv4: "IPv4 მისამართი",
              ipv6: "IPv6 მისამართი",
              mac: "MAC მისამართი",
              cidrv4: "IPv4 დიაპაზონი",
              cidrv6: "IPv6 დიაპაზონი",
              base64: "base64-კოდირებული ველი",
              base64url: "base64url-კოდირებული ველი",
              json_string: "JSON ველი",
              e164: "E.164 ნომერი",
              credit_card: "საკრედიტო ბარათის ნომერი",
              currency_code: "ვალუტის კოდი",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "შეყვანა",
            }),
            (t = {
              nan: "NaN",
              number: "რიცხვი",
              string: "ველი",
              boolean: "ბულეანი",
              function: "ფუნქცია",
              array: "მასივი",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `არასწორი შეყვანა: მოსალოდნელი instanceof ${r.expected}, მიღებული ${n}`
                  return `არასწორი შეყვანა: მოსალოდნელი ${e}, მიღებული ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `არასწორი შეყვანა: მოსალოდნელი ${$.stringifyPrimitive(r.values[0])}`
                  return `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${$.joinValues(r.values, "|")}-დან`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ზედმეტად დიდი: მოსალოდნელი ${r.origin ?? "მნიშვნელობა"} ${t.verb} ${i}${r.maximum.toString()} ${t.unit}`
                  return `ზედმეტად დიდი: მოსალოდნელი ${r.origin ?? "მნიშვნელობა"} იყოს ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ზედმეტად პატარა: მოსალოდნელი ${r.origin} ${t.verb} ${i}${r.minimum.toString()} ${t.unit}`
                  return `ზედმეტად პატარა: მოსალოდნელი ${r.origin} იყოს ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `არასწორი ველი: უნდა იწყებოდეს "${r.prefix}"-ით`
                  if ("ends_with" === r.format) return `არასწორი ველი: უნდა მთავრდებოდეს "${r.suffix}"-ით`
                  if ("includes" === r.format) return `არასწორი ველი: უნდა შეიცავდეს "${r.includes}"-ს`
                  if ("regex" === r.format) return `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${r.pattern}`
                  return `არასწორი ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `არასწორი რიცხვი: უნდა იყოს ${r.divisor}-ის ჯერადი`
                case "unrecognized_keys":
                  return `უცნობი გასაღებ${r.keys.length > 1 ? "ები" : "ი"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `არასწორი გასაღები ${r.origin}-ში`
                case "invalid_union":
                default:
                  return "არასწორი შეყვანა"
                case "invalid_element":
                  return `არასწორი მნიშვნელობა ${r.origin}-ში`
              }
            }),
        }
      }
      function q() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "តួអក្សរ", verb: "គួរមាន" },
              file: { unit: "បៃ", verb: "គួរមាន" },
              array: { unit: "ធាតុ", verb: "គួរមាន" },
              set: { unit: "ធាតុ", verb: "គួរមាន" },
              map: { unit: "ធាតុ", verb: "គួរមាន" },
            }),
            (i = {
              regex: "ទិន្នន័យបញ្ចូល",
              email: "អាសយដ្ឋានអ៊ីមែល",
              url: "URL",
              emoji: "សញ្ញាអារម្មណ៍",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
              date: "កាលបរិច្ឆេទ ISO",
              time: "ម៉ោង ISO",
              duration: "រយៈពេល ISO",
              ipv4: "អាសយដ្ឋាន IPv4",
              ipv6: "អាសយដ្ឋាន IPv6",
              mac: "អាសយដ្ឋាន MAC",
              cidrv4: "ដែនអាសយដ្ឋាន IPv4",
              cidrv6: "ដែនអាសយដ្ឋាន IPv6",
              base64: "ខ្សែអក្សរអ៊ិកូដ base64",
              base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
              json_string: "ខ្សែអក្សរ JSON",
              e164: "លេខ E.164",
              credit_card: "លេខប័ណ្ណឥណទាន",
              currency_code: "កូដរូបិយប័ណ្ណ",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ទិន្នន័យបញ្ចូល",
            }),
            (t = { nan: "NaN", number: "លេខ", array: "អារេ (Array)", null: "គ្មានតម្លៃ (null)" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${r.expected} ប៉ុន្តែទទួលបាន ${n}`
                  return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${e} ប៉ុន្តែទទួលបាន ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${$.stringifyPrimitive(r.values[0])}`
                  return `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ធំពេក៖ ត្រូវការ ${r.origin ?? "តម្លៃ"} ${i} ${r.maximum.toString()} ${t.unit ?? "ធាតុ"}`
                  return `ធំពេក៖ ត្រូវការ ${r.origin ?? "តម្លៃ"} ${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()} ${t.unit}`
                  return `តូចពេក៖ ត្រូវការ ${r.origin} ${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${r.prefix}"`
                  if ("ends_with" === r.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${r.suffix}"`
                  if ("includes" === r.format) return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${r.includes}"`
                  if ("regex" === r.format)
                    return `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${r.pattern}`
                  return `មិនត្រឹមត្រូវ៖ ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${r.divisor}`
                case "unrecognized_keys":
                  return `រកឃើញសោមិនស្គាល់៖ ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `សោមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`
                case "invalid_union":
                default:
                  return "ទិន្នន័យមិនត្រឹមត្រូវ"
                case "invalid_element":
                  return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${r.origin}`
              }
            }),
        }
      }
      function X() {
        return q()
      }
      function Y() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "ಅಕ್ಷರಗಳು", verb: "ಹೊಂದಲು" },
              file: { unit: "ಬೈಟ್‌ಗಳು", verb: "ಹೊಂದಲು" },
              array: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
              set: { unit: "ವಸ್ತುಗಳು", verb: "ಹೊಂದಲು" },
              map: { unit: "entries", verb: "ಹೊಂದಲು" },
            }),
            (i = {
              regex: "ಇನ್ಪುಟ್",
              email: "email ವಿಳಾಸ",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO ದಿನಾಂಕದ ಸಮಯ",
              date: "ISO ದಿನಾಂಕ",
              time: "ISO ಸಮಯ",
              duration: "ISO ಅವಧಿ",
              ipv4: "IPv4 ವಿಳಾಸ",
              ipv6: "IPv6 ವಿಳಾಸ",
              mac: "MAC ವಿಳಾಸ",
              cidrv4: "IPv4 ವ್ಯಾಪ್ತಿಯ",
              cidrv6: "IPv6 ವ್ಯಾಪ್ತಿಯ",
              base64: "base64-encodedಸ್ಟ್ರಿಂಗ್",
              base64url: "base64url-encodedಸ್ಟ್ರಿಂಗ್",
              json_string: "JSONಸ್ಟ್ರಿಂಗ್",
              e164: "E.164 ಸಂಖ್ಯೆ",
              credit_card: "ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
              currency_code: "ಕರೆನ್ಸಿ ಕೋಡ್",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ಇನ್ಪುಟ್",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}, ಸ್ವೀಕರಿಸಿದನು ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${$.stringifyPrimitive(r.values[0])}`
                  return `ಅಮಾನ್ಯ ಆಯ್ಕೆ: ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${r.origin ?? "value"} ಹೊಂದಲು ${i}${r.maximum.toString()} ${t.unit ?? "ಅಂಶಗಳು"}`
                  return `ತುಂಬಾ ದೊಡ್ಡದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${r.origin ?? "value"} ಎಂದು ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${r.origin} ಹೊಂದಲು ${i}${r.minimum.toString()} ${t.unit}`
                  return `ತುಂಬಾ ಚಿಕ್ಕದು: ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${r.origin} ಎಂದು ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಬೇಕು "${r.prefix}"`
                  if ("ends_with" === r.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಇದರೊಂದಿಗೆ ಕೊನೆಗೊಳ್ಳಬೇಕು "${r.suffix}"`
                  if ("includes" === r.format) return `ಅಮಾನ್ಯ ಸ್ಟ್ರಿಂಗ್: ಒಳಗೊಂಡಿರಬೇಕು "${r.includes}"`
                  if ("regex" === r.format) return `ಅಮಾನ್ಯವಾದ ಸ್ಟ್ರಿಂಗ್: ಮಾದರಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು ${r.pattern}`
                  return `ಅಮಾನ್ಯ ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `ಅಮಾನ್ಯ ಸಂಖ್ಯೆ: ಬಹುಸಂಖ್ಯೆಯಾಗಿರಬೇಕು ${r.divisor}`
                case "unrecognized_keys":
                  return `ಗುರುತಿಸಲಾಗದ ಕೀ ${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `ಅಮಾನ್ಯವಾದ ಕೀ ಇನ್ ${r.origin}`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `ಅಮಾನ್ಯ ತಾರತಮ್ಯ ಮೌಲ್ಯ. ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ ${e}`
                  }
                  return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್"
                case "invalid_element":
                  return `ರಲ್ಲಿ ಅಮಾನ್ಯ ಮೌಲ್ಯ ${r.origin}`
                default:
                  return "ಅಮಾನ್ಯ ಇನ್‌ಪುಟ್"
              }
            }),
        }
      }
      function H() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "문자", verb: "to have" },
              file: { unit: "바이트", verb: "to have" },
              array: { unit: "개", verb: "to have" },
              set: { unit: "개", verb: "to have" },
              map: { unit: "개", verb: "to have" },
            }),
            (i = {
              regex: "입력",
              email: "이메일 주소",
              url: "URL",
              emoji: "이모지",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO 날짜시간",
              date: "ISO 날짜",
              time: "ISO 시간",
              duration: "ISO 기간",
              ipv4: "IPv4 주소",
              ipv6: "IPv6 주소",
              mac: "MAC 주소",
              cidrv4: "IPv4 범위",
              cidrv6: "IPv6 범위",
              base64: "base64 인코딩 문자열",
              base64url: "base64url 인코딩 문자열",
              json_string: "JSON 문자열",
              e164: "E.164 번호",
              credit_card: "신용카드 번호",
              currency_code: "통화 코드",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "입력",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `잘못된 입력: 예상 타입은 instanceof ${r.expected}, 받은 타입은 ${n}입니다`
                  return `잘못된 입력: 예상 타입은 ${e}, 받은 타입은 ${n}입니다`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `잘못된 입력: 값은 ${$.stringifyPrimitive(r.values[0])} 이어야 합니다`
                  return `잘못된 옵션: ${$.joinValues(r.values, "또는 ")} 중 하나여야 합니다`
                case "too_big": {
                  let i = r.inclusive ? "이하" : "미만",
                    t = "미만" === i ? "이어야 합니다" : "여야 합니다",
                    n = e[r.origin] ?? null,
                    a = n?.unit ?? "요소"
                  if (n) return `${r.origin ?? "값"}이 너무 큽니다: ${r.maximum.toString()}${a} ${i}${t}`
                  return `${r.origin ?? "값"}이 너무 큽니다: ${r.maximum.toString()} ${i}${t}`
                }
                case "too_small": {
                  let i = r.inclusive ? "이상" : "초과",
                    t = "이상" === i ? "이어야 합니다" : "여야 합니다",
                    n = e[r.origin] ?? null,
                    a = n?.unit ?? "요소"
                  if (n) return `${r.origin ?? "값"}이 너무 작습니다: ${r.minimum.toString()}${a} ${i}${t}`
                  return `${r.origin ?? "값"}이 너무 작습니다: ${r.minimum.toString()} ${i}${t}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `잘못된 문자열: "${r.prefix}"(으)로 시작해야 합니다`
                  if ("ends_with" === r.format) return `잘못된 문자열: "${r.suffix}"(으)로 끝나야 합니다`
                  if ("includes" === r.format) return `잘못된 문자열: "${r.includes}"을(를) 포함해야 합니다`
                  if ("regex" === r.format) return `잘못된 문자열: 정규식 ${r.pattern} 패턴과 일치해야 합니다`
                  return `잘못된 ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `잘못된 숫자: ${r.divisor}의 배수여야 합니다`
                case "unrecognized_keys":
                  return `인식할 수 없는 키: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `잘못된 키: ${r.origin}`
                case "invalid_union":
                default:
                  return "잘못된 입력"
                case "invalid_element":
                  return `잘못된 값: ${r.origin}`
              }
            }),
        }
      }
      let Q = (e) => e.charAt(0).toUpperCase() + e.slice(1)
      function ee(e) {
        let i = Math.abs(e),
          t = i % 10,
          r = i % 100
        return (r >= 11 && r <= 19) || 0 === t ? "many" : 1 === t ? "one" : "few"
      }
      function ei() {
        return {
          localeError: (() => {
            let e = {
              string: {
                unit: { one: "simbolis", few: "simboliai", many: "simbolių" },
                verb: {
                  smaller: { inclusive: "turi būti ne ilgesnė kaip", notInclusive: "turi būti trumpesnė kaip" },
                  bigger: { inclusive: "turi būti ne trumpesnė kaip", notInclusive: "turi būti ilgesnė kaip" },
                },
              },
              file: {
                unit: { one: "baitas", few: "baitai", many: "baitų" },
                verb: {
                  smaller: { inclusive: "turi būti ne didesnis kaip", notInclusive: "turi būti mažesnis kaip" },
                  bigger: { inclusive: "turi būti ne mažesnis kaip", notInclusive: "turi būti didesnis kaip" },
                },
              },
              array: {
                unit: { one: "elementą", few: "elementus", many: "elementų" },
                verb: {
                  smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" },
                  bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" },
                },
              },
              set: {
                unit: { one: "elementą", few: "elementus", many: "elementų" },
                verb: {
                  smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" },
                  bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" },
                },
              },
            }
            function i(i, t, r, n) {
              let a = e[i] ?? null
              return null === a ? a : { unit: a.unit[t], verb: a.verb[n][r ? "inclusive" : "notInclusive"] }
            }
            let t = {
                regex: "įvestis",
                email: "el. pašto adresas",
                url: "URL",
                emoji: "jaustukas",
                uuid: "UUID",
                uuidv4: "UUIDv4",
                uuidv6: "UUIDv6",
                nanoid: "nanoid",
                guid: "GUID",
                cuid: "cuid",
                cuid2: "cuid2",
                ulid: "ULID",
                xid: "XID",
                ksuid: "KSUID",
                datetime: "ISO data ir laikas",
                date: "ISO data",
                time: "ISO laikas",
                duration: "ISO trukmė",
                ipv4: "IPv4 adresas",
                ipv6: "IPv6 adresas",
                mac: "MAC adresas",
                cidrv4: "IPv4 tinklo prefiksas (CIDR)",
                cidrv6: "IPv6 tinklo prefiksas (CIDR)",
                base64: "base64 užkoduota eilutė",
                base64url: "base64url užkoduota eilutė",
                json_string: "JSON eilutė",
                e164: "E.164 numeris",
                credit_card: "kredito kortelės numeris",
                currency_code: "valiutos kodas",
                iban: "IBAN",
                jwt: "JWT",
                template_literal: "įvestis",
              },
              r = {
                nan: "NaN",
                number: "skaičius",
                bigint: "sveikasis skaičius",
                string: "eilutė",
                boolean: "loginė reikšmė",
                undefined: "neapibrėžta reikšmė",
                function: "funkcija",
                symbol: "simbolis",
                array: "masyvas",
                object: "objektas",
                null: "nulinė reikšmė",
              }
            return (e) => {
              switch (e.code) {
                case "invalid_type": {
                  let i = r[e.expected] ?? e.expected,
                    t = $.parsedType(e.input),
                    n = r[t] ?? t
                  if (/^[A-Z]/.test(e.expected)) return `Gautas tipas ${n}, o tikėtasi - instanceof ${e.expected}`
                  return `Gautas tipas ${n}, o tikėtasi - ${i}`
                }
                case "invalid_value":
                  if (1 === e.values.length) return `Privalo būti ${$.stringifyPrimitive(e.values[0])}`
                  return `Privalo būti vienas iš ${$.joinValues(e.values, "|")} pasirinkimų`
                case "too_big": {
                  let t = r[e.origin] ?? e.origin,
                    n = i(e.origin, ee(Number(e.maximum)), e.inclusive ?? !1, "smaller")
                  if (n?.verb)
                    return `${Q(t ?? e.origin ?? "reikšmė")} ${n.verb} ${e.maximum.toString()} ${n.unit ?? "elementų"}`
                  let a = e.inclusive ? "ne didesnis kaip" : "mažesnis kaip"
                  return `${Q(t ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.maximum.toString()} ${n?.unit}`
                }
                case "too_small": {
                  let t = r[e.origin] ?? e.origin,
                    n = i(e.origin, ee(Number(e.minimum)), e.inclusive ?? !1, "bigger")
                  if (n?.verb)
                    return `${Q(t ?? e.origin ?? "reikšmė")} ${n.verb} ${e.minimum.toString()} ${n.unit ?? "elementų"}`
                  let a = e.inclusive ? "ne mažesnis kaip" : "didesnis kaip"
                  return `${Q(t ?? e.origin ?? "reikšmė")} turi būti ${a} ${e.minimum.toString()} ${n?.unit}`
                }
                case "invalid_format":
                  if ("starts_with" === e.format) return `Eilutė privalo prasidėti "${e.prefix}"`
                  if ("ends_with" === e.format) return `Eilutė privalo pasibaigti "${e.suffix}"`
                  if ("includes" === e.format) return `Eilutė privalo įtraukti "${e.includes}"`
                  if ("regex" === e.format) return `Eilutė privalo atitikti ${e.pattern}`
                  return `Neteisingas ${t[e.format] ?? e.format}`
                case "not_multiple_of":
                  return `Skaičius privalo būti ${e.divisor} kartotinis.`
                case "unrecognized_keys":
                  return `Neatpažint${e.keys.length > 1 ? "i" : "as"} rakt${e.keys.length > 1 ? "ai" : "as"}: ${$.joinValues(e.keys, ", ")}`
                case "invalid_key":
                  return "Rastas klaidingas raktas"
                case "invalid_union":
                default:
                  return "Klaidinga įvestis"
                case "invalid_element": {
                  let i = r[e.origin] ?? e.origin
                  return `${Q(i ?? e.origin ?? "reikšmė")} turi klaidingą įvestį`
                }
              }
            }
          })(),
        }
      }
      function et() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "знаци", verb: "да имаат" },
              file: { unit: "бајти", verb: "да имаат" },
              array: { unit: "ставки", verb: "да имаат" },
              set: { unit: "ставки", verb: "да имаат" },
              map: { unit: "ставки", verb: "да имаат" },
            }),
            (i = {
              regex: "внес",
              email: "адреса на е-пошта",
              url: "URL",
              emoji: "емоџи",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO датум и време",
              date: "ISO датум",
              time: "ISO време",
              duration: "ISO времетраење",
              ipv4: "IPv4 адреса",
              ipv6: "IPv6 адреса",
              mac: "MAC адреса",
              cidrv4: "IPv4 опсег",
              cidrv6: "IPv6 опсег",
              base64: "base64-енкодирана низа",
              base64url: "base64url-енкодирана низа",
              json_string: "JSON низа",
              e164: "E.164 број",
              credit_card: "број на кредитна картичка",
              currency_code: "код на валута",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "внес",
            }),
            (t = { nan: "NaN", number: "број", array: "низа" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `Грешен внес: се очекува instanceof ${r.expected}, примено ${n}`
                  return `Грешен внес: се очекува ${e}, примено ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Invalid input: expected ${$.stringifyPrimitive(r.values[0])}`
                  return `Грешана опција: се очекува една ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Премногу голем: се очекува ${r.origin ?? "вредноста"} да има ${i}${r.maximum.toString()} ${t.unit ?? "елементи"}`
                  return `Премногу голем: се очекува ${r.origin ?? "вредноста"} да биде ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Премногу мал: се очекува ${r.origin} да има ${i}${r.minimum.toString()} ${t.unit}`
                  return `Премногу мал: се очекува ${r.origin} да биде ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Неважечка низа: мора да започнува со "${r.prefix}"`
                  if ("ends_with" === r.format) return `Неважечка низа: мора да завршува со "${r.suffix}"`
                  if ("includes" === r.format) return `Неважечка низа: мора да вклучува "${r.includes}"`
                  if ("regex" === r.format) return `Неважечка низа: мора да одгоара на патернот ${r.pattern}`
                  return `Invalid ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Грешен број: мора да биде делив со ${r.divisor}`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Грешен клуч во ${r.origin}`
                case "invalid_union":
                default:
                  return "Грешен внес"
                case "invalid_element":
                  return `Грешна вредност во ${r.origin}`
              }
            }),
        }
      }
      function er() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "aksara", verb: "mempunyai" },
              file: { unit: "bait", verb: "mempunyai" },
              array: { unit: "elemen", verb: "mempunyai" },
              set: { unit: "elemen", verb: "mempunyai" },
              map: { unit: "elemen", verb: "mempunyai" },
            }),
            (i = {
              regex: "input",
              email: "alamat e-mel",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "tarikh masa ISO",
              date: "tarikh ISO",
              time: "masa ISO",
              duration: "tempoh ISO",
              ipv4: "alamat IPv4",
              ipv6: "alamat IPv6",
              mac: "alamat MAC",
              cidrv4: "julat IPv4",
              cidrv6: "julat IPv6",
              base64: "string dikodkan base64",
              base64url: "string dikodkan base64url",
              json_string: "string JSON",
              e164: "nombor E.164",
              credit_card: "nombor kad kredit",
              currency_code: "kod mata wang",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN", number: "nombor" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Input tidak sah: dijangka instanceof ${r.expected}, diterima ${n}`
                  return `Input tidak sah: dijangka ${e}, diterima ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Input tidak sah: dijangka ${$.stringifyPrimitive(r.values[0])}`
                  return `Pilihan tidak sah: dijangka salah satu daripada ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${t.verb} ${i}${r.maximum.toString()} ${t.unit ?? "elemen"}`
                  return `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Terlalu kecil: dijangka ${r.origin} ${t.verb} ${i}${r.minimum.toString()} ${t.unit}`
                  return `Terlalu kecil: dijangka ${r.origin} adalah ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `String tidak sah: mesti bermula dengan "${r.prefix}"`
                  if ("ends_with" === r.format) return `String tidak sah: mesti berakhir dengan "${r.suffix}"`
                  if ("includes" === r.format) return `String tidak sah: mesti mengandungi "${r.includes}"`
                  if ("regex" === r.format) return `String tidak sah: mesti sepadan dengan corak ${r.pattern}`
                  return `${i[r.format] ?? r.format} tidak sah`
                case "not_multiple_of":
                  return `Nombor tidak sah: perlu gandaan ${r.divisor}`
                case "unrecognized_keys":
                  return `Kunci tidak dikenali: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Kunci tidak sah dalam ${r.origin}`
                case "invalid_union":
                default:
                  return "Input tidak sah"
                case "invalid_element":
                  return `Nilai tidak sah dalam ${r.origin}`
              }
            }),
        }
      }
      function en() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "अक्षर", verb: "हुनुपर्छ" },
              file: { unit: "बाइट", verb: "हुनुपर्छ" },
              array: { unit: "तत्व", verb: "हुनुपर्छ" },
              set: { unit: "तत्व", verb: "हुनुपर्छ" },
              map: { unit: "प्रविष्टि", verb: "हुनुपर्छ" },
            }),
            (i = {
              regex: "इनपुट",
              email: "इमेल ठेगाना",
              url: "URL",
              emoji: "इमोजी",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO मिति र समय",
              date: "ISO मिति",
              time: "ISO समय",
              duration: "ISO अवधि",
              ipv4: "IPv4 ठेगाना",
              ipv6: "IPv6 ठेगाना",
              mac: "MAC ठेगाना",
              cidrv4: "IPv4 दायरा",
              cidrv6: "IPv6 दायरा",
              base64: "base64-इन्कोड गरिएको स्ट्रिङ",
              base64url: "base64url-इन्कोड गरिएको स्ट्रिङ",
              json_string: "JSON स्ट्रिङ",
              e164: "E.164 नम्बर",
              credit_card: "क्रेडिट कार्ड नम्बर",
              currency_code: "मुद्रा कोड",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "इनपुट",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `अमान्य इनपुट: अपेक्षित ${e}, प्राप्त ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `अमान्य इनपुट: अपेक्षित ${$.stringifyPrimitive(r.values[0])}`
                  return `अमान्य विकल्प: अपेक्षित मानहरू मध्ये एक ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) return `धेरै ठूलो: ${r.origin ?? "मान"} मा ${i}${r.maximum.toString()} ${t.unit} ${t.verb}`
                  return `धेरै ठूलो: ${r.origin ?? "मान"} ${i}${r.maximum.toString()} हुनुपर्छ`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `धेरै सानो: ${r.origin} मा ${i}${r.minimum.toString()} ${t.unit} ${t.verb}`
                  return `धेरै सानो: ${r.origin} ${i}${r.minimum.toString()} हुनुपर्छ`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `अमान्य स्ट्रिङ: "${r.prefix}" बाट सुरु हुनुपर्छ`
                  if ("ends_with" === r.format) return `अमान्य स्ट्रिङ: "${r.suffix}" मा समाप्त हुनुपर्छ`
                  if ("includes" === r.format) return `अमान्य स्ट्रिङ: "${r.includes}" समावेश हुनुपर्छ`
                  if ("regex" === r.format) return `अमान्य स्ट्रिङ: ढाँचा ${r.pattern} सँग मेल खानुपर्छ`
                  return `अमान्य ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `अमान्य संख्या: ${r.divisor} को गुणज हुनुपर्छ`
                case "unrecognized_keys":
                  return `अपरिचित कुञ्जी${r.keys.length > 1 ? "हरू" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `अमान्य कुञ्जी: ${r.origin} मा`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `अमान्य डिस्क्रिमिनेटर मान: अपेक्षित ${e}`
                  }
                  return "अमान्य इनपुट"
                case "invalid_element":
                  return `अमान्य मान: ${r.origin} मा`
                default:
                  return "अमान्य इनपुट"
              }
            }),
        }
      }
      function ea() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "tekens", verb: "heeft" },
              file: { unit: "bytes", verb: "heeft" },
              array: { unit: "elementen", verb: "heeft" },
              set: { unit: "elementen", verb: "heeft" },
              map: { unit: "elementen", verb: "heeft" },
            }),
            (i = {
              regex: "invoer",
              email: "emailadres",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum en tijd",
              date: "ISO datum",
              time: "ISO tijd",
              duration: "ISO duur",
              ipv4: "IPv4-adres",
              ipv6: "IPv6-adres",
              mac: "MAC-adres",
              cidrv4: "IPv4-bereik",
              cidrv6: "IPv6-bereik",
              base64: "base64-gecodeerde tekst",
              base64url: "base64 URL-gecodeerde tekst",
              json_string: "JSON string",
              e164: "E.164-nummer",
              credit_card: "creditcardnummer",
              currency_code: "valutacode",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "invoer",
            }),
            (t = { nan: "NaN", number: "getal" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Ongeldige invoer: verwacht instanceof ${r.expected}, ontving ${n}`
                  return `Ongeldige invoer: verwacht ${e}, ontving ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Ongeldige invoer: verwacht ${$.stringifyPrimitive(r.values[0])}`
                  return `Ongeldige optie: verwacht \xe9\xe9n van ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null,
                    n = "date" === r.origin ? "laat" : "string" === r.origin ? "lang" : "groot"
                  if (t)
                    return `Te ${n}: verwacht dat ${r.origin ?? "waarde"} ${i}${r.maximum.toString()} ${t.unit ?? "elementen"} ${t.verb}`
                  return `Te ${n}: verwacht dat ${r.origin ?? "waarde"} ${i}${r.maximum.toString()} is`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null,
                    n = "date" === r.origin ? "vroeg" : "string" === r.origin ? "kort" : "klein"
                  if (t) return `Te ${n}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} ${t.unit} ${t.verb}`
                  return `Te ${n}: verwacht dat ${r.origin} ${i}${r.minimum.toString()} is`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ongeldige tekst: moet met "${r.prefix}" beginnen`
                  if ("ends_with" === r.format) return `Ongeldige tekst: moet op "${r.suffix}" eindigen`
                  if ("includes" === r.format) return `Ongeldige tekst: moet "${r.includes}" bevatten`
                  if ("regex" === r.format) return `Ongeldige tekst: moet overeenkomen met patroon ${r.pattern}`
                  return `Ongeldig: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`
                case "unrecognized_keys":
                  return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ongeldige key in ${r.origin}`
                case "invalid_union":
                default:
                  return "Ongeldige invoer"
                case "invalid_element":
                  return `Ongeldige waarde in ${r.origin}`
              }
            }),
        }
      }
      function eu() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "teikn", verb: "å ha" },
              file: { unit: "bytes", verb: "å ha" },
              array: { unit: "element", verb: "å innehalde" },
              set: { unit: "element", verb: "å innehalde" },
              map: { unit: "element", verb: "å innehalde" },
            }),
            (i = {
              regex: "input",
              email: "e-postadresse",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dato- og klokkeslett",
              date: "ISO-dato",
              time: "ISO-klokkeslett",
              duration: "ISO-varigheit",
              ipv4: "IPv4-adresse",
              ipv6: "IPv6-adresse",
              mac: "MAC-adresse",
              cidrv4: "IPv4-spekter",
              cidrv6: "IPv6-spekter",
              base64: "base64-enkoda streng",
              base64url: "base64url-enkoda streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              credit_card: "kredittkortnummer",
              currency_code: "valutakode",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN", number: "tal", array: "liste" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `Ugyldig input: forventa instanceof ${r.expected}, fekk ${n}`
                  return `Ugyldig input: forventa ${e}, fekk ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Ugyldig verdi: forventa ${$.stringifyPrimitive(r.values[0])}`
                  return `Ugyldig val: forventa eitt av ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `For stor(t): forventa ${r.origin ?? "value"} til \xe5 ha ${i}${r.maximum.toString()} ${t.unit ?? "element"}`
                  return `For stor(t): forventa ${r.origin ?? "value"} til \xe5 ha ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `For lite(n): forventa ${r.origin} til \xe5 ha ${i}${r.minimum.toString()} ${t.unit}`
                  return `For lite(n): forventa ${r.origin} til \xe5 ha ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ugyldig streng: m\xe5 starte med "${r.prefix}"`
                  if ("ends_with" === r.format) return `Ugyldig streng: m\xe5 slutte med "${r.suffix}"`
                  if ("includes" === r.format) return `Ugyldig streng: m\xe5 innehalde "${r.includes}"`
                  if ("regex" === r.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${r.pattern}`
                  return `Ugyldig ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ugyldig tal: m\xe5 vere eit multiplum av ${r.divisor}`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Ukjende nøklar" : "Ukjend nøkkel"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ugyldig n\xf8kkel i ${r.origin}`
                case "invalid_union":
                default:
                  return "Ugyldig input"
                case "invalid_element":
                  return `Ugyldig verdi i ${r.origin}`
              }
            }),
        }
      }
      function eo() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "tegn", verb: "å ha" },
              file: { unit: "bytes", verb: "å ha" },
              array: { unit: "elementer", verb: "å inneholde" },
              set: { unit: "elementer", verb: "å inneholde" },
              map: { unit: "elementer", verb: "å inneholde" },
            }),
            (i = {
              regex: "input",
              email: "e-postadresse",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dato- og klokkeslett",
              date: "ISO-dato",
              time: "ISO-klokkeslett",
              duration: "ISO-varighet",
              ipv4: "IPv4-adresse",
              ipv6: "IPv6-adresse",
              mac: "MAC-adresse",
              cidrv4: "IPv4-spekter",
              cidrv6: "IPv6-spekter",
              base64: "base64-enkodet streng",
              base64url: "base64url-enkodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              credit_card: "kredittkortnummer",
              currency_code: "valutakode",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN", number: "tall", array: "liste" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `Ugyldig input: forventet instanceof ${r.expected}, fikk ${n}`
                  return `Ugyldig input: forventet ${e}, fikk ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Ugyldig verdi: forventet ${$.stringifyPrimitive(r.values[0])}`
                  return `Ugyldig valg: forventet en av ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `For stor(t): forventet ${r.origin ?? "value"} til \xe5 ha ${i}${r.maximum.toString()} ${t.unit ?? "elementer"}`
                  return `For stor(t): forventet ${r.origin ?? "value"} til \xe5 ha ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `For lite(n): forventet ${r.origin} til \xe5 ha ${i}${r.minimum.toString()} ${t.unit}`
                  return `For lite(n): forventet ${r.origin} til \xe5 ha ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ugyldig streng: m\xe5 starte med "${r.prefix}"`
                  if ("ends_with" === r.format) return `Ugyldig streng: m\xe5 ende med "${r.suffix}"`
                  if ("includes" === r.format) return `Ugyldig streng: m\xe5 inneholde "${r.includes}"`
                  if ("regex" === r.format) return `Ugyldig streng: m\xe5 matche m\xf8nsteret ${r.pattern}`
                  return `Ugyldig ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ugyldig tall: m\xe5 v\xe6re et multiplum av ${r.divisor}`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ugyldig n\xf8kkel i ${r.origin}`
                case "invalid_union":
                default:
                  return "Ugyldig input"
                case "invalid_element":
                  return `Ugyldig verdi i ${r.origin}`
              }
            }),
        }
      }
      function el() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "harf", verb: "olmalıdır" },
              file: { unit: "bayt", verb: "olmalıdır" },
              array: { unit: "unsur", verb: "olmalıdır" },
              set: { unit: "unsur", verb: "olmalıdır" },
              map: { unit: "unsur", verb: "olmalıdır" },
            }),
            (i = {
              regex: "giren",
              email: "epostagâh",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO hengâmı",
              date: "ISO tarihi",
              time: "ISO zamanı",
              duration: "ISO müddeti",
              ipv4: "IPv4 nişânı",
              ipv6: "IPv6 nişânı",
              mac: "MAC nişânı",
              cidrv4: "IPv4 menzili",
              cidrv6: "IPv6 menzili",
              base64: "base64-şifreli metin",
              base64url: "base64url-şifreli metin",
              json_string: "JSON metin",
              e164: "E.164 sayısı",
              credit_card: "i'tibâr kartı numarası",
              currency_code: "para birimi kodu",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "giren",
            }),
            (t = { nan: "NaN", number: "numara", array: "saf", null: "gayb" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `F\xe2sit giren: umulan instanceof ${r.expected}, alınan ${n}`
                  return `F\xe2sit giren: umulan ${e}, alınan ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `F\xe2sit giren: umulan ${$.stringifyPrimitive(r.values[0])}`
                  return `F\xe2sit tercih: m\xfbteberler ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Fazla b\xfcy\xfck: ${r.origin ?? "value"}, ${i}${r.maximum.toString()} ${t.unit ?? "elements"} sahip olmalıydı.`
                  return `Fazla b\xfcy\xfck: ${r.origin ?? "value"}, ${i}${r.maximum.toString()} olmalıydı.`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Fazla k\xfc\xe7\xfck: ${r.origin}, ${i}${r.minimum.toString()} ${t.unit} sahip olmalıydı.`
                  return `Fazla k\xfc\xe7\xfck: ${r.origin}, ${i}${r.minimum.toString()} olmalıydı.`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `F\xe2sit metin: "${r.prefix}" ile başlamalı.`
                  if ("ends_with" === r.format) return `F\xe2sit metin: "${r.suffix}" ile bitmeli.`
                  if ("includes" === r.format) return `F\xe2sit metin: "${r.includes}" ihtiv\xe2 etmeli.`
                  if ("regex" === r.format) return `F\xe2sit metin: ${r.pattern} nakşına uymalı.`
                  return `F\xe2sit ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `F\xe2sit sayı: ${r.divisor} katı olmalıydı.`
                case "unrecognized_keys":
                  return `Tanınmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} i\xe7in tanınmayan anahtar var.`
                case "invalid_union":
                  return "Giren tanınamadı."
                case "invalid_element":
                  return `${r.origin} i\xe7in tanınmayan kıymet var.`
                default:
                  return "Kıymet tanınamadı."
              }
            }),
        }
      }
      function es() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "توکي", verb: "ولري" },
              file: { unit: "بایټس", verb: "ولري" },
              array: { unit: "توکي", verb: "ولري" },
              set: { unit: "توکي", verb: "ولري" },
              map: { unit: "توکي", verb: "ولري" },
            }),
            (i = {
              regex: "ورودي",
              email: "بریښنالیک",
              url: "یو آر ال",
              emoji: "ایموجي",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "نیټه او وخت",
              date: "نېټه",
              time: "وخت",
              duration: "موده",
              ipv4: "د IPv4 پته",
              ipv6: "د IPv6 پته",
              mac: "د MAC پته",
              cidrv4: "د IPv4 ساحه",
              cidrv6: "د IPv6 ساحه",
              base64: "base64-encoded متن",
              base64url: "base64url-encoded متن",
              json_string: "JSON متن",
              e164: "د E.164 شمېره",
              credit_card: "د کریډیټ کارت شمیره",
              currency_code: "د اسعارو کوډ",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ورودي",
            }),
            (t = { nan: "NaN", number: "عدد", array: "ارې" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `ناسم ورودي: باید instanceof ${r.expected} وای, مګر ${n} ترلاسه شو`
                  return `ناسم ورودي: باید ${e} وای, مګر ${n} ترلاسه شو`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `ناسم ورودي: باید ${$.stringifyPrimitive(r.values[0])} وای`
                  return `ناسم انتخاب: باید یو له ${$.joinValues(r.values, "|")} څخه وای`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `ډیر لوی: ${r.origin ?? "ارزښت"} باید ${i}${r.maximum.toString()} ${t.unit ?? "عنصرونه"} ولري`
                  return `ډیر لوی: ${r.origin ?? "ارزښت"} باید ${i}${r.maximum.toString()} وي`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} ${t.unit} ولري`
                  return `ډیر کوچنی: ${r.origin} باید ${i}${r.minimum.toString()} وي`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `ناسم متن: باید د "${r.prefix}" سره پیل شي`
                  if ("ends_with" === r.format) return `ناسم متن: باید د "${r.suffix}" سره پای ته ورسيږي`
                  if ("includes" === r.format) return `ناسم متن: باید "${r.includes}" ولري`
                  if ("regex" === r.format) return `ناسم متن: باید د ${r.pattern} سره مطابقت ولري`
                  return `${i[r.format] ?? r.format} ناسم دی`
                case "not_multiple_of":
                  return `ناسم عدد: باید د ${r.divisor} مضرب وي`
                case "unrecognized_keys":
                  return `ناسم ${r.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `ناسم کلیډ په ${r.origin} کې`
                case "invalid_union":
                default:
                  return "ناسمه ورودي"
                case "invalid_element":
                  return `ناسم عنصر په ${r.origin} کې`
              }
            }),
        }
      }
      function ed() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "znaków", verb: "mieć" },
              file: { unit: "bajtów", verb: "mieć" },
              array: { unit: "elementów", verb: "mieć" },
              set: { unit: "elementów", verb: "mieć" },
              map: { unit: "elementów", verb: "mieć" },
            }),
            (i = {
              regex: "wyrażenie",
              email: "adres email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data i godzina w formacie ISO",
              date: "data w formacie ISO",
              time: "godzina w formacie ISO",
              duration: "czas trwania ISO",
              ipv4: "adres IPv4",
              ipv6: "adres IPv6",
              mac: "adres MAC",
              cidrv4: "zakres IPv4",
              cidrv6: "zakres IPv6",
              base64: "ciąg znaków zakodowany w formacie base64",
              base64url: "ciąg znaków zakodowany w formacie base64url",
              json_string: "ciąg znaków w formacie JSON",
              e164: "liczba E.164",
              credit_card: "numer karty kredytowej",
              currency_code: "kod waluty",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "wejście",
            }),
            (t = { nan: "NaN", number: "liczba", array: "tablica" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${r.expected}, otrzymano ${n}`
                  return `Nieprawidłowe dane wejściowe: oczekiwano ${e}, otrzymano ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${$.stringifyPrimitive(r.values[0])}`
                  return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Za duża wartość: oczekiwano, że ${r.origin ?? "wartość"} będzie mieć ${i}${r.maximum.toString()} ${t.unit ?? "elementów"}`
                  return `Zbyt duż(y/a/e): oczekiwano, że ${r.origin ?? "wartość"} będzie wynosić ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Za mała wartość: oczekiwano, że ${r.origin ?? "wartość"} będzie mieć ${i}${r.minimum.toString()} ${t.unit ?? "elementów"}`
                  return `Zbyt mał(y/a/e): oczekiwano, że ${r.origin ?? "wartość"} będzie wynosić ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format)
                    return `Nieprawidłowy ciąg znak\xf3w: musi zaczynać się od "${r.prefix}"`
                  if ("ends_with" === r.format) return `Nieprawidłowy ciąg znak\xf3w: musi kończyć się na "${r.suffix}"`
                  if ("includes" === r.format) return `Nieprawidłowy ciąg znak\xf3w: musi zawierać "${r.includes}"`
                  if ("regex" === r.format) return `Nieprawidłowy ciąg znak\xf3w: musi odpowiadać wzorcowi ${r.pattern}`
                  return `Nieprawidłow(y/a/e) ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Nieprawidłowa liczba: musi być wielokrotnością ${r.divisor}`
                case "unrecognized_keys":
                  return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Nieprawidłowy klucz w ${r.origin}`
                case "invalid_union":
                default:
                  return "Nieprawidłowe dane wejściowe"
                case "invalid_element":
                  return `Nieprawidłowa wartość w ${r.origin}`
              }
            }),
        }
      }
      function ec() {
        return {
          localeError: (() => {
            let e = {
                string: { unit: "caracteres" },
                file: { unit: "bytes" },
                array: { unit: "elementos" },
                set: { unit: "elementos" },
                map: { unit: "entradas" },
              },
              i = {
                regex: "a entrada",
                email: "o endereço de e-mail",
                url: "o URL",
                emoji: "o emoji",
                uuid: "o UUID",
                uuidv4: "o UUIDv4",
                uuidv6: "o UUIDv6",
                nanoid: "o nanoid",
                guid: "o GUID",
                cuid: "o cuid",
                cuid2: "o cuid2",
                ulid: "o ULID",
                xid: "o XID",
                ksuid: "o KSUID",
                datetime: "a data e hora ISO",
                date: "a data ISO",
                time: "a hora ISO",
                duration: "a duração ISO",
                ipv4: "o endereço IPv4",
                ipv6: "o endereço IPv6",
                mac: "o endereço MAC",
                cidrv4: "o intervalo de endereços IPv4",
                cidrv6: "o intervalo de endereços IPv6",
                base64: "o texto codificado em base64",
                base64url: "o texto codificado em base64url",
                json_string: "o texto JSON",
                e164: "o número E.164",
                credit_card: "o número de cartão de crédito",
                currency_code: "o código de moeda",
                iban: "o IBAN",
                jwt: "o JWT",
                template_literal: "a entrada",
              },
              t = { definite: "o", indefinite: "um" },
              r = { definite: "a", indefinite: "uma" },
              n = {
                string: { name: "texto", articles: t },
                number: { name: "número", articles: t },
                int: { name: "número inteiro", articles: t },
                boolean: { name: "valor booleano", articles: t },
                bigint: { name: "número bigint", articles: t },
                symbol: { name: "símbolo", articles: t },
                undefined: { name: 'valor "undefined"', articles: t },
                null: { name: 'valor "nulo"', articles: t },
                never: { name: 'valor "never"', articles: t },
                void: { name: 'valor "void"', articles: t },
                date: { name: "data", articles: r },
                array: { name: "vetor", articles: t },
                object: { name: "objeto", articles: t },
                tuple: { name: "tuplo", articles: t },
                record: { name: "registo", articles: t },
                map: { name: "mapa", articles: t },
                set: { name: "conjunto", articles: t },
                file: { name: "ficheiro", articles: t },
                nonoptional: { name: "valor não opcional", articles: t },
                nan: { name: 'valor "NaN"', articles: t },
                function: { name: "função", articles: r },
              }
            function a(e, i) {
              let r = n[e] ?? { name: `valor "${e}"`, articles: t }
              return `${r.articles[i]} ${r.name}`
            }
            return (t) => {
              switch (t.code) {
                case "invalid_type": {
                  let e = a(t.expected, "indefinite"),
                    i = a($.parsedType(t.input), "indefinite")
                  return `Entrada inv\xe1lida: esperava ${e}, recebeu ${i}`
                }
                case "invalid_value":
                  if (1 === t.values.length) return `Entrada inv\xe1lida: esperava ${$.stringifyPrimitive(t.values[0])}`
                  return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${$.joinValues(t.values, "|")}`
                case "too_big": {
                  let i = t.inclusive ? "<=" : "<",
                    r = e[t.origin] ?? null
                  if (r)
                    return `Demasiado grande: esperava que ${a(t.origin, "definite")} tivesse ${i} ${t.maximum.toString()} ${r.unit ?? "elementos"}`
                  return `Demasiado grande: esperava que ${a(t.origin, "definite")} fosse ${i} ${t.maximum.toString()}`
                }
                case "too_small": {
                  let i = t.inclusive ? ">=" : ">",
                    r = e[t.origin] ?? null
                  if (r)
                    return `Demasiado pequeno: esperava que ${a(t.origin, "definite")} tivesse ${i} ${t.minimum.toString()} ${r.unit ?? "elementos"}`
                  return `Demasiado pequeno: esperava que ${a(t.origin, "definite")} fosse ${i} ${t.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === t.format) return `Texto inv\xe1lido: deve come\xe7ar por "${t.prefix}"`
                  if ("ends_with" === t.format) return `Texto inv\xe1lido: deve terminar em "${t.suffix}"`
                  if ("includes" === t.format) return `Texto inv\xe1lido: deve incluir "${t.includes}"`
                  if ("regex" === t.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${t.pattern}`
                  return `Formato d${i[t.format] ?? t.format} inv\xe1lido`
                case "not_multiple_of":
                  return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${t.divisor}`
                case "unrecognized_keys": {
                  let e = t.keys.length > 1 ? "s" : ""
                  return `Chave${e} inv\xe1lida${e}: ${$.joinValues(t.keys, ", ")}`
                }
                case "invalid_key":
                case "invalid_element":
                  return `Entrada inv\xe1lida n${a(t.origin, "definite")}`
                case "invalid_union":
                  if (t.options && Array.isArray(t.options) && t.options.length > 0) {
                    let e = t.options.map((e) => `'${e}'`).join(" | ")
                    return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`
                  }
                  return "Entrada inválida"
                default:
                  return "Entrada inválida"
              }
            }
          })(),
        }
      }
      function em() {
        return {
          localeError: (() => {
            let e = {
                string: { unit: "caracteres" },
                file: { unit: "bytes" },
                array: { unit: "elementos" },
                set: { unit: "elementos" },
                map: { unit: "entradas" },
              },
              i = {
                regex: "a entrada",
                email: "o endereço de e-mail",
                url: "o URL",
                emoji: "o emoji",
                uuid: "o UUID",
                uuidv4: "o UUIDv4",
                uuidv6: "o UUIDv6",
                nanoid: "o nanoid",
                guid: "o GUID",
                cuid: "o cuid",
                cuid2: "o cuid2",
                ulid: "o ULID",
                xid: "o XID",
                ksuid: "o KSUID",
                datetime: "a data e hora ISO",
                date: "a data ISO",
                time: "a hora ISO",
                duration: "a duração ISO",
                ipv4: "o endereço IPv4",
                ipv6: "o endereço IPv6",
                mac: "o endereço MAC",
                cidrv4: "a faixa de endereços IPv4",
                cidrv6: "a faixa de endereços IPv6",
                base64: "o texto codificado em base64",
                base64url: "o texto codificado em base64url",
                json_string: "o texto JSON",
                e164: "o número E.164",
                credit_card: "o número de cartão de crédito",
                currency_code: "o código de moeda",
                iban: "o IBAN",
                jwt: "o JWT",
                template_literal: "a entrada",
              },
              t = { definite: "o", indefinite: "um" },
              r = { definite: "a", indefinite: "uma" },
              n = {
                string: { name: "texto", articles: t },
                number: { name: "número", articles: t },
                int: { name: "número inteiro", articles: t },
                boolean: { name: "valor booleano", articles: t },
                bigint: { name: "número bigint", articles: t },
                symbol: { name: "símbolo", articles: t },
                undefined: { name: 'valor "undefined"', articles: t },
                null: { name: 'valor "nulo"', articles: t },
                never: { name: 'valor "never"', articles: t },
                void: { name: 'valor "void"', articles: t },
                date: { name: "data", articles: r },
                array: { name: "vetor", articles: t },
                object: { name: "objeto", articles: t },
                tuple: { name: "tupla", articles: r },
                record: { name: "registro", articles: t },
                map: { name: "mapa", articles: t },
                set: { name: "conjunto", articles: t },
                file: { name: "arquivo", articles: t },
                nonoptional: { name: "valor não opcional", articles: t },
                nan: { name: 'valor "NaN"', articles: t },
                function: { name: "função", articles: r },
              }
            function a(e, i) {
              let r = n[e] ?? { name: `valor "${e}"`, articles: t }
              return `${r.articles[i]} ${r.name}`
            }
            return (t) => {
              switch (t.code) {
                case "invalid_type": {
                  let e = a(t.expected, "indefinite"),
                    i = a($.parsedType(t.input), "indefinite")
                  return `Entrada inv\xe1lida: esperava ${e}, recebeu ${i}`
                }
                case "invalid_value":
                  if (1 === t.values.length) return `Entrada inv\xe1lida: esperava ${$.stringifyPrimitive(t.values[0])}`
                  return `Op\xe7\xe3o inv\xe1lida: esperava uma das seguintes op\xe7\xf5es: ${$.joinValues(t.values, "|")}`
                case "too_big": {
                  let i = t.inclusive ? "<=" : "<",
                    r = e[t.origin] ?? null
                  if (r)
                    return `Grande demais: esperava que ${a(t.origin, "definite")} tivesse ${i} ${t.maximum.toString()} ${r.unit ?? "elementos"}`
                  return `Grande demais: esperava que ${a(t.origin, "definite")} fosse ${i} ${t.maximum.toString()}`
                }
                case "too_small": {
                  let i = t.inclusive ? ">=" : ">",
                    r = e[t.origin] ?? null
                  if (r)
                    return `Pequeno demais: esperava que ${a(t.origin, "definite")} tivesse ${i} ${t.minimum.toString()} ${r.unit ?? "elementos"}`
                  return `Pequeno demais: esperava que ${a(t.origin, "definite")} fosse ${i} ${t.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === t.format) return `Texto inv\xe1lido: deve come\xe7ar com "${t.prefix}"`
                  if ("ends_with" === t.format) return `Texto inv\xe1lido: deve terminar com "${t.suffix}"`
                  if ("includes" === t.format) return `Texto inv\xe1lido: deve incluir "${t.includes}"`
                  if ("regex" === t.format) return `Texto inv\xe1lido: deve corresponder ao padr\xe3o ${t.pattern}`
                  return `Formato d${i[t.format] ?? t.format} inv\xe1lido`
                case "not_multiple_of":
                  return `N\xfamero inv\xe1lido: deve ser m\xfaltiplo de ${t.divisor}`
                case "unrecognized_keys": {
                  let e = t.keys.length > 1 ? "s" : ""
                  return `Chave${e} inv\xe1lida${e}: ${$.joinValues(t.keys, ", ")}`
                }
                case "invalid_key":
                case "invalid_element":
                  return `Entrada inv\xe1lida n${a(t.origin, "definite")}`
                case "invalid_union":
                  if (t.options && Array.isArray(t.options) && t.options.length > 0) {
                    let e = t.options.map((e) => `'${e}'`).join(" | ")
                    return `Valor de discrimina\xe7\xe3o inv\xe1lido. Esperava ${e}`
                  }
                  return "Entrada inválida"
                default:
                  return "Entrada inválida"
              }
            }
          })(),
        }
      }
      function ev() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "caractere", verb: "să aibă" },
              file: { unit: "octeți", verb: "să aibă" },
              array: { unit: "elemente", verb: "să aibă" },
              set: { unit: "elemente", verb: "să aibă" },
              map: { unit: "intrări", verb: "să aibă" },
            }),
            (i = {
              regex: "intrare",
              email: "adresă de email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "dată și oră ISO",
              date: "dată ISO",
              time: "oră ISO",
              duration: "durată ISO",
              ipv4: "adresă IPv4",
              ipv6: "adresă IPv6",
              mac: "adresă MAC",
              cidrv4: "interval IPv4",
              cidrv6: "interval IPv6",
              base64: "șir codat base64",
              base64url: "șir codat base64url",
              json_string: "șir JSON",
              e164: "număr E.164",
              credit_card: "număr de card de credit",
              currency_code: "cod valutar",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "intrare",
            }),
            (t = {
              nan: "NaN",
              string: "șir",
              number: "număr",
              boolean: "boolean",
              function: "funcție",
              array: "matrice",
              object: "obiect",
              undefined: "nedefinit",
              symbol: "simbol",
              bigint: "număr mare",
              void: "void",
              never: "never",
              map: "hartă",
              set: "set",
            }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `Intrare invalidă: așteptat ${e}, primit ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Intrare invalidă: așteptat ${$.stringifyPrimitive(r.values[0])}`
                  return `Opțiune invalidă: așteptat una dintre ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Prea mare: așteptat ca ${r.origin ?? "valoarea"} ${t.verb} ${i}${r.maximum.toString()} ${t.unit ?? "elemente"}`
                  return `Prea mare: așteptat ca ${r.origin ?? "valoarea"} să fie ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Prea mic: așteptat ca ${r.origin} ${t.verb} ${i}${r.minimum.toString()} ${t.unit}`
                  return `Prea mic: așteptat ca ${r.origin} să fie ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Șir invalid: trebuie să \xeenceapă cu "${r.prefix}"`
                  if ("ends_with" === r.format) return `Șir invalid: trebuie să se termine cu "${r.suffix}"`
                  if ("includes" === r.format) return `Șir invalid: trebuie să includă "${r.includes}"`
                  if ("regex" === r.format) return `Șir invalid: trebuie să se potrivească cu modelul ${r.pattern}`
                  return `Format invalid: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Număr invalid: trebuie să fie multiplu de ${r.divisor}`
                case "unrecognized_keys":
                  return `Chei nerecunoscute: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Cheie invalidă \xeen ${r.origin}`
                case "invalid_union":
                default:
                  return "Intrare invalidă"
                case "invalid_element":
                  return `Valoare invalidă \xeen ${r.origin}`
              }
            }),
        }
      }
      function ef(e, i, t, r) {
        let n = Math.abs(e),
          a = n % 10,
          u = n % 100
        return u >= 11 && u <= 19 ? r : 1 === a ? i : a >= 2 && a <= 4 ? t : r
      }
      function e$() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: { one: "символ", few: "символа", many: "символов" }, verb: "иметь" },
              file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" },
              array: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
              set: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
              map: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" },
            }),
            (i = {
              regex: "ввод",
              email: "email адрес",
              url: "URL",
              emoji: "эмодзи",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO дата и время",
              date: "ISO дата",
              time: "ISO время",
              duration: "ISO длительность",
              ipv4: "IPv4 адрес",
              ipv6: "IPv6 адрес",
              mac: "MAC адрес",
              cidrv4: "IPv4 диапазон",
              cidrv6: "IPv6 диапазон",
              base64: "строка в формате base64",
              base64url: "строка в формате base64url",
              json_string: "JSON строка",
              e164: "номер E.164",
              credit_card: "номер кредитной карты",
              currency_code: "код валюты",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ввод",
            }),
            (t = { nan: "NaN", number: "число", array: "массив" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Неверный ввод: ожидалось instanceof ${r.expected}, получено ${n}`
                  return `Неверный ввод: ожидалось ${e}, получено ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Неверный ввод: ожидалось ${$.stringifyPrimitive(r.values[0])}`
                  return `Неверный вариант: ожидалось одно из ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = ef(Number(r.maximum), t.unit.one, t.unit.few, t.unit.many)
                    return `Слишком большое значение: ожидалось, что ${r.origin ?? "значение"} будет иметь ${i}${r.maximum.toString()} ${e}`
                  }
                  return `Слишком большое значение: ожидалось, что ${r.origin ?? "значение"} будет ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) {
                    let e = ef(Number(r.minimum), t.unit.one, t.unit.few, t.unit.many)
                    return `Слишком маленькое значение: ожидалось, что ${r.origin} будет иметь ${i}${r.minimum.toString()} ${e}`
                  }
                  return `Слишком маленькое значение: ожидалось, что ${r.origin} будет ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Неверная строка: должна начинаться с "${r.prefix}"`
                  if ("ends_with" === r.format) return `Неверная строка: должна заканчиваться на "${r.suffix}"`
                  if ("includes" === r.format) return `Неверная строка: должна содержать "${r.includes}"`
                  if ("regex" === r.format) return `Неверная строка: должна соответствовать шаблону ${r.pattern}`
                  return `Неверный ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Неверное число: должно быть кратным ${r.divisor}`
                case "unrecognized_keys":
                  return `Нераспознанн${r.keys.length > 1 ? "ые" : "ый"} ключ${r.keys.length > 1 ? "и" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Неверный ключ в ${r.origin}`
                case "invalid_union":
                default:
                  return "Неверные входные данные"
                case "invalid_element":
                  return `Неверное значение в ${r.origin}`
              }
            }),
        }
      }
      function eg() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "znakov", verb: "mať" },
              file: { unit: "bajtov", verb: "mať" },
              array: { unit: "prvkov", verb: "mať" },
              set: { unit: "prvkov", verb: "mať" },
              map: { unit: "položiek", verb: "mať" },
            }),
            (i = {
              regex: "regulárny výraz",
              email: "e-mailová adresa",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "dátum a čas vo formáte ISO",
              date: "dátum vo formáte ISO",
              time: "čas vo formáte ISO",
              duration: "doba trvania ISO",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              mac: "MAC adresa",
              cidrv4: "rozsah IPv4",
              cidrv6: "rozsah IPv6",
              base64: "reťazec zakódovaný vo formáte base64",
              base64url: "reťazec zakódovaný vo formáte base64url",
              json_string: "reťazec vo formáte JSON",
              e164: "číslo E.164",
              credit_card: "číslo kreditnej karty",
              currency_code: "kód meny",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "vstup",
            }),
            (t = { nan: "NaN", number: "číslo", string: "reťazec", function: "funkcia", array: "pole" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Neplatn\xfd vstup: očak\xe1van\xe9 instanceof ${r.expected}, obdržan\xe9 ${n}`
                  return `Neplatn\xfd vstup: očak\xe1van\xe9 ${e}, obdržan\xe9 ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Neplatn\xfd vstup: očak\xe1van\xe9 ${$.stringifyPrimitive(r.values[0])}`
                  return `Neplatn\xfd vstup: očak\xe1van\xe1 jedna z hodn\xf4t ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Hodnota je pr\xedliš veľk\xe1: ${r.origin ?? "hodnota"} mus\xed mať ${i}${r.maximum.toString()} ${t.unit ?? "prvkov"}`
                  return `Hodnota je pr\xedliš veľk\xe1: ${r.origin ?? "hodnota"} mus\xed byť ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Hodnota je pr\xedliš mal\xe1: ${r.origin ?? "hodnota"} mus\xed mať ${i}${r.minimum.toString()} ${t.unit ?? "prvkov"}`
                  return `Hodnota je pr\xedliš mal\xe1: ${r.origin ?? "hodnota"} mus\xed byť ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Neplatn\xfd reťazec: mus\xed zač\xednať na "${r.prefix}"`
                  if ("ends_with" === r.format) return `Neplatn\xfd reťazec: mus\xed končiť na "${r.suffix}"`
                  if ("includes" === r.format) return `Neplatn\xfd reťazec: mus\xed obsahovať "${r.includes}"`
                  if ("regex" === r.format) return `Neplatn\xfd reťazec: mus\xed zodpovedať vzoru ${r.pattern}`
                  return `Neplatn\xfd form\xe1t ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Neplatn\xe9 č\xedslo: mus\xed byť n\xe1sobkom ${r.divisor}`
                case "unrecognized_keys":
                  return `Nezn\xe1me kl\xfače: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Neplatn\xfd kl\xfač v ${r.origin}`
                case "invalid_union":
                default:
                  return "Neplatný vstup"
                case "invalid_element":
                  return `Neplatn\xe1 hodnota v ${r.origin}`
              }
            }),
        }
      }
      function ep() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "znakov", verb: "imeti" },
              file: { unit: "bajtov", verb: "imeti" },
              array: { unit: "elementov", verb: "imeti" },
              set: { unit: "elementov", verb: "imeti" },
              map: { unit: "elementov", verb: "imeti" },
            }),
            (i = {
              regex: "vnos",
              email: "e-poštni naslov",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum in čas",
              date: "ISO datum",
              time: "ISO čas",
              duration: "ISO trajanje",
              ipv4: "IPv4 naslov",
              ipv6: "IPv6 naslov",
              mac: "MAC naslov",
              cidrv4: "obseg IPv4",
              cidrv6: "obseg IPv6",
              base64: "base64 kodiran niz",
              base64url: "base64url kodiran niz",
              json_string: "JSON niz",
              e164: "E.164 številka",
              credit_card: "številka kreditne kartice",
              currency_code: "koda valute",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "vnos",
            }),
            (t = { nan: "NaN", number: "število", array: "tabela" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Neveljaven vnos: pričakovano instanceof ${r.expected}, prejeto ${n}`
                  return `Neveljaven vnos: pričakovano ${e}, prejeto ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Neveljaven vnos: pričakovano ${$.stringifyPrimitive(r.values[0])}`
                  return `Neveljavna možnost: pričakovano eno izmed ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Preveliko: pričakovano, da bo ${r.origin ?? "vrednost"} imelo ${i}${r.maximum.toString()} ${t.unit ?? "elementov"}`
                  return `Preveliko: pričakovano, da bo ${r.origin ?? "vrednost"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Premajhno: pričakovano, da bo ${r.origin} imelo ${i}${r.minimum.toString()} ${t.unit}`
                  return `Premajhno: pričakovano, da bo ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Neveljaven niz: mora se začeti z "${r.prefix}"`
                  if ("ends_with" === r.format) return `Neveljaven niz: mora se končati z "${r.suffix}"`
                  if ("includes" === r.format) return `Neveljaven niz: mora vsebovati "${r.includes}"`
                  if ("regex" === r.format) return `Neveljaven niz: mora ustrezati vzorcu ${r.pattern}`
                  return `Neveljaven ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Neveljavno število: mora biti večkratnik ${r.divisor}`
                case "unrecognized_keys":
                  return `Neprepoznan${r.keys.length > 1 ? "i ključi" : " ključ"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Neveljaven ključ v ${r.origin}`
                case "invalid_union":
                default:
                  return "Neveljaven vnos"
                case "invalid_element":
                  return `Neveljavna vrednost v ${r.origin}`
              }
            }),
        }
      }
      function eb() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "tecken", verb: "att ha" },
              file: { unit: "bytes", verb: "att ha" },
              array: { unit: "objekt", verb: "att innehålla" },
              set: { unit: "objekt", verb: "att innehålla" },
              map: { unit: "objekt", verb: "att innehålla" },
            }),
            (i = {
              regex: "reguljärt uttryck",
              email: "e-postadress",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-datum och tid",
              date: "ISO-datum",
              time: "ISO-tid",
              duration: "ISO-varaktighet",
              ipv4: "IPv4-adress",
              ipv6: "IPv6-adress",
              mac: "MAC-adress",
              cidrv4: "IPv4-spektrum",
              cidrv6: "IPv6-spektrum",
              base64: "base64-kodad sträng",
              base64url: "base64url-kodad sträng",
              json_string: "JSON-sträng",
              e164: "E.164-nummer",
              credit_card: "kreditkortsnummer",
              currency_code: "valutakod",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "mall-literal",
            }),
            (t = { nan: "NaN", number: "antal", array: "lista" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Ogiltig inmatning: f\xf6rv\xe4ntat instanceof ${r.expected}, fick ${n}`
                  return `Ogiltig inmatning: f\xf6rv\xe4ntat ${e}, fick ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Ogiltig inmatning: f\xf6rv\xe4ntat ${$.stringifyPrimitive(r.values[0])}`
                  return `Ogiltigt val: f\xf6rv\xe4ntade en av ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `F\xf6r stor(t): f\xf6rv\xe4ntade ${r.origin ?? "värdet"} att ha ${i}${r.maximum.toString()} ${t.unit ?? "element"}`
                  return `F\xf6r stor(t): f\xf6rv\xe4ntat ${r.origin ?? "värdet"} att ha ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `F\xf6r lite(t): f\xf6rv\xe4ntade ${r.origin ?? "värdet"} att ha ${i}${r.minimum.toString()} ${t.unit}`
                  return `F\xf6r lite(t): f\xf6rv\xe4ntade ${r.origin ?? "värdet"} att ha ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ogiltig str\xe4ng: m\xe5ste b\xf6rja med "${r.prefix}"`
                  if ("ends_with" === r.format) return `Ogiltig str\xe4ng: m\xe5ste sluta med "${r.suffix}"`
                  if ("includes" === r.format) return `Ogiltig str\xe4ng: m\xe5ste inneh\xe5lla "${r.includes}"`
                  if ("regex" === r.format) return `Ogiltig str\xe4ng: m\xe5ste matcha m\xf6nstret "${r.pattern}"`
                  return `Ogiltig(t) ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ogiltigt tal: m\xe5ste vara en multipel av ${r.divisor}`
                case "unrecognized_keys":
                  return `${r.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Ogiltig nyckel i ${r.origin ?? "värdet"}`
                case "invalid_union":
                default:
                  return "Ogiltig input"
                case "invalid_element":
                  return `Ogiltigt v\xe4rde i ${r.origin ?? "värdet"}`
              }
            }),
        }
      }
      function ex() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
              file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
              array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
              set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
              map: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
            }),
            (i = {
              regex: "உள்ளீடு",
              email: "மின்னஞ்சல் முகவரி",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO தேதி நேரம்",
              date: "ISO தேதி",
              time: "ISO நேரம்",
              duration: "ISO கால அளவு",
              ipv4: "IPv4 முகவரி",
              ipv6: "IPv6 முகவரி",
              mac: "MAC முகவரி",
              cidrv4: "IPv4 வரம்பு",
              cidrv6: "IPv6 வரம்பு",
              base64: "base64-encoded சரம்",
              base64url: "base64url-encoded சரம்",
              json_string: "JSON சரம்",
              e164: "E.164 எண்",
              credit_card: "கடன் அட்டை எண்",
              currency_code: "நாணயக் குறியீடு",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "input",
            }),
            (t = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${r.expected}, பெறப்பட்டது ${n}`
                  return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${e}, பெறப்பட்டது ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${$.stringifyPrimitive(r.values[0])}`
                  return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${$.joinValues(r.values, "|")} இல் ஒன்று`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin ?? "மதிப்பு"} ${i}${r.maximum.toString()} ${t.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
                  return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${r.origin ?? "மதிப்பு"} ${i}${r.maximum.toString()} ஆக இருக்க வேண்டும்`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ${t.unit} ஆக இருக்க வேண்டும்`
                  return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${r.origin} ${i}${r.minimum.toString()} ஆக இருக்க வேண்டும்`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `தவறான சரம்: "${r.prefix}" இல் தொடங்க வேண்டும்`
                  if ("ends_with" === r.format) return `தவறான சரம்: "${r.suffix}" இல் முடிவடைய வேண்டும்`
                  if ("includes" === r.format) return `தவறான சரம்: "${r.includes}" ஐ உள்ளடக்க வேண்டும்`
                  if ("regex" === r.format) return `தவறான சரம்: ${r.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                  return `தவறான ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `தவறான எண்: ${r.divisor} இன் பலமாக இருக்க வேண்டும்`
                case "unrecognized_keys":
                  return `அடையாளம் தெரியாத விசை${r.keys.length > 1 ? "கள்" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} இல் தவறான விசை`
                case "invalid_union":
                default:
                  return "தவறான உள்ளீடு"
                case "invalid_element":
                  return `${r.origin} இல் தவறான மதிப்பு`
              }
            }),
        }
      }
      function ey() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "аломат", verb: "дошта бошад" },
              file: { unit: "байт", verb: "дошта бошад" },
              array: { unit: "унсур", verb: "дошта бошад" },
              set: { unit: "унсур", verb: "дошта бошад" },
              map: { unit: "сабт", verb: "дошта бошад" },
            }),
            (i = {
              regex: "вуруд",
              email: "суроғаи email",
              url: "URL",
              emoji: "эмоҷи",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "санаву вақти ISO",
              date: "санаи ISO",
              time: "вақти ISO",
              duration: "давомнокии ISO",
              ipv4: "суроғаи IPv4",
              ipv6: "суроғаи IPv6",
              mac: "суроғаи MAC",
              cidrv4: "маҳдудаи IPv4",
              cidrv6: "маҳдудаи IPv6",
              base64: "сатри дар формати base64",
              base64url: "сатри дар формати base64url",
              json_string: "сатри JSON",
              e164: "рақами E.164",
              credit_card: "рақами корти кредитӣ",
              currency_code: "рамзи асъор",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "вуруд",
            }),
            (t = { nan: "NaN", number: "рақам", string: "сатр", array: "массив", object: "объект", date: "сана" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `Вуруди нодуруст: ${e} интизор мерафт, ${n} гирифта шуд`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Вуруди нодуруст: ${$.stringifyPrimitive(r.values[0])} интизор мерафт`
                  return `Интихоби нодуруст: яке аз ${$.joinValues(r.values, "|")} интизор мерафт`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Хеле калон: ${r.origin ?? "қимат"} бояд ${i}${r.maximum.toString()} ${t.unit} ${t.verb}`
                  return `Хеле калон: ${r.origin ?? "қимат"} бояд ${i}${r.maximum.toString()} бошад`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Хеле хурд: ${r.origin} бояд ${i}${r.minimum.toString()} ${t.unit} ${t.verb}`
                  return `Хеле хурд: ${r.origin} бояд ${i}${r.minimum.toString()} бошад`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Сатри нодуруст: бояд бо "${r.prefix}" оғоз шавад`
                  if ("ends_with" === r.format) return `Сатри нодуруст: бояд бо "${r.suffix}" анҷом ёбад`
                  if ("includes" === r.format) return `Сатри нодуруст: бояд "${r.includes}"-ро дар бар гирад`
                  if ("regex" === r.format) return `Сатри нодуруст: бояд ба намунаи ${r.pattern} мувофиқат кунад`
                  return `${i[r.format] ?? r.format}-и нодуруст`
                case "not_multiple_of":
                  return `Рақами нодуруст: бояд ба ${r.divisor} бе бақия тақсим шавад`
                case "unrecognized_keys":
                  return `Калид${r.keys.length > 1 ? "ҳои" : "и"} номаълум: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Калиди нодуруст дар ${r.origin}`
                case "invalid_union":
                  if (r.options && Array.isArray(r.options) && r.options.length > 0) {
                    let e = r.options.map((e) => `'${e}'`).join(" | ")
                    return `Қимати нодурусти дискриминатор: ${e} интизор мерафт`
                  }
                  return "Вуруди нодуруст"
                case "invalid_element":
                  return `Қимати нодуруст дар ${r.origin}`
                default:
                  return "Вуруди нодуруст"
              }
            }),
        }
      }
      function e_() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "ตัวอักษร", verb: "ควรมี" },
              file: { unit: "ไบต์", verb: "ควรมี" },
              array: { unit: "รายการ", verb: "ควรมี" },
              set: { unit: "รายการ", verb: "ควรมี" },
              map: { unit: "รายการ", verb: "ควรมี" },
            }),
            (i = {
              regex: "ข้อมูลที่ป้อน",
              email: "ที่อยู่อีเมล",
              url: "URL",
              emoji: "อิโมจิ",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "วันที่เวลาแบบ ISO",
              date: "วันที่แบบ ISO",
              time: "เวลาแบบ ISO",
              duration: "ช่วงเวลาแบบ ISO",
              ipv4: "ที่อยู่ IPv4",
              ipv6: "ที่อยู่ IPv6",
              mac: "ที่อยู่ MAC",
              cidrv4: "ช่วง IP แบบ IPv4",
              cidrv6: "ช่วง IP แบบ IPv6",
              base64: "ข้อความแบบ Base64",
              base64url: "ข้อความแบบ Base64 สำหรับ URL",
              json_string: "ข้อความแบบ JSON",
              e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
              credit_card: "หมายเลขบัตรเครดิต",
              currency_code: "รหัสสกุลเงิน",
              iban: "IBAN",
              jwt: "โทเคน JWT",
              template_literal: "ข้อมูลที่ป้อน",
            }),
            (t = { nan: "NaN", number: "ตัวเลข", array: "อาร์เรย์ (Array)", null: "ไม่มีค่า (null)" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${r.expected} แต่ได้รับ ${n}`
                  return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${e} แต่ได้รับ ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `ค่าไม่ถูกต้อง: ควรเป็น ${$.stringifyPrimitive(r.values[0])}`
                  return `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                    t = e[r.origin] ?? null
                  if (t)
                    return `เกินกำหนด: ${r.origin ?? "ค่า"} ควรมี${i} ${r.maximum.toString()} ${t.unit ?? "รายการ"}`
                  return `เกินกำหนด: ${r.origin ?? "ค่า"} ควรมี${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? "อย่างน้อย" : "มากกว่า",
                    t = e[r.origin] ?? null
                  if (t) return `น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()} ${t.unit}`
                  return `น้อยกว่ากำหนด: ${r.origin} ควรมี${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${r.prefix}"`
                  if ("ends_with" === r.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${r.suffix}"`
                  if ("includes" === r.format) return `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${r.includes}" อยู่ในข้อความ`
                  if ("regex" === r.format) return `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${r.pattern}`
                  return `รูปแบบไม่ถูกต้อง: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${r.divisor} ได้ลงตัว`
                case "unrecognized_keys":
                  return `พบคีย์ที่ไม่รู้จัก: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `คีย์ไม่ถูกต้องใน ${r.origin}`
                case "invalid_union":
                  return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้"
                case "invalid_element":
                  return `ข้อมูลไม่ถูกต้องใน ${r.origin}`
                default:
                  return "ข้อมูลไม่ถูกต้อง"
              }
            }),
        }
      }
      function eI() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "simwol", verb: "bolmaly" },
              file: { unit: "baýt", verb: "bolmaly" },
              array: { unit: "elementler", verb: "bolmaly" },
              set: { unit: "elementler", verb: "bolmaly" },
              map: { unit: "elementler", verb: "bolmaly" },
            }),
            (i = {
              regex: "giriş",
              email: "e-poçta salgysy",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO sene we wagt",
              date: "ISO sene",
              time: "ISO wagt",
              duration: "ISO wagt aralygy",
              ipv4: "IPv4 salgysy",
              ipv6: "IPv6 salgysy",
              mac: "MAC salgysy",
              cidrv4: "IPv4 aralygy",
              cidrv6: "IPv6 aralygy",
              base64: "base64 bilen şifrlenen setir",
              base64url: "base64url bilen şifrlenen setir",
              json_string: "JSON setiri",
              e164: "E.164 nomeri",
              credit_card: "kredit kartynyň nomeri",
              currency_code: "walýuta kody",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "şablon",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  return `N\xe4dogry baha: garaşylan ${e} \xfderine ${n} alyndy`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `N\xe4dogry baha: ${$.stringifyPrimitive(r.values[0])} bolmaly`
                  return `N\xe4dogry sa\xfdlaw: aşakdakylardan biri bolmaly: ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Has uly: garaşyl\xfdan ${r.origin ?? "baha"} ${i} ${r.maximum.toString()} ${t.unit ?? "element"}`
                  return `Has uly: garaşyl\xfdan ${r.origin ?? "baha"} ${i} ${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Has ki\xe7i: garaşyl\xfdan ${r.origin} ${i} ${r.minimum.toString()} ${t.unit}`
                  return `Has ki\xe7i: garaşyl\xfdan ${r.origin} ${i} ${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `N\xe4dogry setir: "${r.prefix}" bilen başlamaly`
                  if ("ends_with" === r.format) return `N\xe4dogry setir: "${r.suffix}" bilen gutarmaly`
                  if ("includes" === r.format) return `N\xe4dogry setir: "${r.includes}" saklamaly`
                  if ("regex" === r.format) return `N\xe4dogry setir: ${r.pattern} nusga la\xfdyk bolmaly`
                  return `N\xe4dogry ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `N\xe4dogry san: ${r.divisor} bilen galyndysyz b\xf6l\xfcnmeli`
                case "unrecognized_keys":
                  return `Tanalma\xfdan a\xe7ar${r.keys.length > 1 ? "lar" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} i\xe7inde n\xe4dogry a\xe7ar`
                case "invalid_union":
                default:
                  return "Nädogry baha"
                case "invalid_element":
                  return `${r.origin} i\xe7inde n\xe4dogry baha`
              }
            }),
        }
      }
      function ek() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "karakter", verb: "olmalı" },
              file: { unit: "bayt", verb: "olmalı" },
              array: { unit: "öğe", verb: "olmalı" },
              set: { unit: "öğe", verb: "olmalı" },
              map: { unit: "öğe", verb: "olmalı" },
            }),
            (i = {
              regex: "girdi",
              email: "e-posta adresi",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO tarih ve saat",
              date: "ISO tarih",
              time: "ISO saat",
              duration: "ISO süre",
              ipv4: "IPv4 adresi",
              ipv6: "IPv6 adresi",
              mac: "MAC adresi",
              cidrv4: "IPv4 aralığı",
              cidrv6: "IPv6 aralığı",
              base64: "base64 ile şifrelenmiş metin",
              base64url: "base64url ile şifrelenmiş metin",
              json_string: "JSON dizesi",
              e164: "E.164 sayısı",
              credit_card: "kredi kartı numarası",
              currency_code: "para birimi kodu",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "Şablon dizesi",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Ge\xe7ersiz değer: beklenen instanceof ${r.expected}, alınan ${n}`
                  return `Ge\xe7ersiz değer: beklenen ${e}, alınan ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Ge\xe7ersiz değer: beklenen ${$.stringifyPrimitive(r.values[0])}`
                  return `Ge\xe7ersiz se\xe7enek: aşağıdakilerden biri olmalı: ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `\xc7ok b\xfcy\xfck: beklenen ${r.origin ?? "değer"} ${i}${r.maximum.toString()} ${t.unit ?? "öğe"}`
                  return `\xc7ok b\xfcy\xfck: beklenen ${r.origin ?? "değer"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `\xc7ok k\xfc\xe7\xfck: beklenen ${r.origin} ${i}${r.minimum.toString()} ${t.unit}`
                  return `\xc7ok k\xfc\xe7\xfck: beklenen ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ge\xe7ersiz metin: "${r.prefix}" ile başlamalı`
                  if ("ends_with" === r.format) return `Ge\xe7ersiz metin: "${r.suffix}" ile bitmeli`
                  if ("includes" === r.format) return `Ge\xe7ersiz metin: "${r.includes}" i\xe7ermeli`
                  if ("regex" === r.format) return `Ge\xe7ersiz metin: ${r.pattern} desenine uymalı`
                  return `Ge\xe7ersiz ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Ge\xe7ersiz sayı: ${r.divisor} ile tam b\xf6l\xfcnebilmeli`
                case "unrecognized_keys":
                  return `Tanınmayan anahtar${r.keys.length > 1 ? "lar" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} i\xe7inde ge\xe7ersiz anahtar`
                case "invalid_union":
                default:
                  return "Geçersiz değer"
                case "invalid_element":
                  return `${r.origin} i\xe7inde ge\xe7ersiz değer`
              }
            }),
        }
      }
      function eh() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "символів", verb: "матиме" },
              file: { unit: "байтів", verb: "матиме" },
              array: { unit: "елементів", verb: "матиме" },
              set: { unit: "елементів", verb: "матиме" },
              map: { unit: "елементів", verb: "матиме" },
            }),
            (i = {
              regex: "вхідні дані",
              email: "адреса електронної пошти",
              url: "URL",
              emoji: "емодзі",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "дата та час ISO",
              date: "дата ISO",
              time: "час ISO",
              duration: "тривалість ISO",
              ipv4: "адреса IPv4",
              ipv6: "адреса IPv6",
              mac: "адреса MAC",
              cidrv4: "діапазон IPv4",
              cidrv6: "діапазон IPv6",
              base64: "рядок у кодуванні base64",
              base64url: "рядок у кодуванні base64url",
              json_string: "рядок JSON",
              e164: "номер E.164",
              credit_card: "номер кредитної картки",
              currency_code: "код валюти",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "вхідні дані",
            }),
            (t = { nan: "NaN", number: "число", array: "масив" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Неправильні вхідні дані: очікується instanceof ${r.expected}, отримано ${n}`
                  return `Неправильні вхідні дані: очікується ${e}, отримано ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Неправильні вхідні дані: очікується ${$.stringifyPrimitive(r.values[0])}`
                  return `Неправильна опція: очікується одне з ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Занадто велике: очікується, що ${r.origin ?? "значення"} ${t.verb} ${i}${r.maximum.toString()} ${t.unit ?? "елементів"}`
                  return `Занадто велике: очікується, що ${r.origin ?? "значення"} буде ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Занадто мале: очікується, що ${r.origin} ${t.verb} ${i}${r.minimum.toString()} ${t.unit}`
                  return `Занадто мале: очікується, що ${r.origin} буде ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Неправильний рядок: повинен починатися з "${r.prefix}"`
                  if ("ends_with" === r.format) return `Неправильний рядок: повинен закінчуватися на "${r.suffix}"`
                  if ("includes" === r.format) return `Неправильний рядок: повинен містити "${r.includes}"`
                  if ("regex" === r.format) return `Неправильний рядок: повинен відповідати шаблону ${r.pattern}`
                  return `Неправильний ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Неправильне число: повинно бути кратним ${r.divisor}`
                case "unrecognized_keys":
                  return `Нерозпізнаний ключ${r.keys.length > 1 ? "і" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Неправильний ключ у ${r.origin}`
                case "invalid_union":
                default:
                  return "Неправильні вхідні дані"
                case "invalid_element":
                  return `Неправильне значення у ${r.origin}`
              }
            }),
        }
      }
      function ew() {
        return eh()
      }
      function eS() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "حروف", verb: "ہونا" },
              file: { unit: "بائٹس", verb: "ہونا" },
              array: { unit: "آئٹمز", verb: "ہونا" },
              set: { unit: "آئٹمز", verb: "ہونا" },
              map: { unit: "آئٹمز", verb: "ہونا" },
            }),
            (i = {
              regex: "ان پٹ",
              email: "ای میل ایڈریس",
              url: "یو آر ایل",
              emoji: "ایموجی",
              uuid: "یو یو آئی ڈی",
              uuidv4: "یو یو آئی ڈی وی 4",
              uuidv6: "یو یو آئی ڈی وی 6",
              nanoid: "نینو آئی ڈی",
              guid: "جی یو آئی ڈی",
              cuid: "سی یو آئی ڈی",
              cuid2: "سی یو آئی ڈی 2",
              ulid: "یو ایل آئی ڈی",
              xid: "ایکس آئی ڈی",
              ksuid: "کے ایس یو آئی ڈی",
              datetime: "آئی ایس او ڈیٹ ٹائم",
              date: "آئی ایس او تاریخ",
              time: "آئی ایس او وقت",
              duration: "آئی ایس او مدت",
              ipv4: "آئی پی وی 4 ایڈریس",
              ipv6: "آئی پی وی 6 ایڈریس",
              mac: "ایم اے سی ایڈریس",
              cidrv4: "آئی پی وی 4 رینج",
              cidrv6: "آئی پی وی 6 رینج",
              base64: "بیس 64 ان کوڈڈ سٹرنگ",
              base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
              json_string: "جے ایس او این سٹرنگ",
              e164: "ای 164 نمبر",
              credit_card: "کریڈٹ کارڈ نمبر",
              currency_code: "کرنسی کوڈ",
              iban: "IBAN",
              jwt: "جے ڈبلیو ٹی",
              template_literal: "ان پٹ",
            }),
            (t = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `غلط ان پٹ: instanceof ${r.expected} متوقع تھا، ${n} موصول ہوا`
                  return `غلط ان پٹ: ${e} متوقع تھا، ${n} موصول ہوا`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `غلط ان پٹ: ${$.stringifyPrimitive(r.values[0])} متوقع تھا`
                  return `غلط آپشن: ${$.joinValues(r.values, "|")} میں سے ایک متوقع تھا`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `بہت بڑا: ${r.origin ?? "ویلیو"} کے ${i}${r.maximum.toString()} ${t.unit ?? "عناصر"} ہونے متوقع تھے`
                  return `بہت بڑا: ${r.origin ?? "ویلیو"} کا ${i}${r.maximum.toString()} ہونا متوقع تھا`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `بہت چھوٹا: ${r.origin} کے ${i}${r.minimum.toString()} ${t.unit} ہونے متوقع تھے`
                  return `بہت چھوٹا: ${r.origin} کا ${i}${r.minimum.toString()} ہونا متوقع تھا`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `غلط سٹرنگ: "${r.prefix}" سے شروع ہونا چاہیے`
                  if ("ends_with" === r.format) return `غلط سٹرنگ: "${r.suffix}" پر ختم ہونا چاہیے`
                  if ("includes" === r.format) return `غلط سٹرنگ: "${r.includes}" شامل ہونا چاہیے`
                  if ("regex" === r.format) return `غلط سٹرنگ: پیٹرن ${r.pattern} سے میچ ہونا چاہیے`
                  return `غلط ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `غلط نمبر: ${r.divisor} کا مضاعف ہونا چاہیے`
                case "unrecognized_keys":
                  return `غیر تسلیم شدہ کی${r.keys.length > 1 ? "ز" : ""}: ${$.joinValues(r.keys, "، ")}`
                case "invalid_key":
                  return `${r.origin} میں غلط کی`
                case "invalid_union":
                default:
                  return "غلط ان پٹ"
                case "invalid_element":
                  return `${r.origin} میں غلط ویلیو`
              }
            }),
        }
      }
      function eU() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "belgi", verb: "bo‘lishi kerak" },
              file: { unit: "bayt", verb: "bo‘lishi kerak" },
              array: { unit: "element", verb: "bo‘lishi kerak" },
              set: { unit: "element", verb: "bo‘lishi kerak" },
              map: { unit: "yozuv", verb: "bo‘lishi kerak" },
            }),
            (i = {
              regex: "kirish",
              email: "elektron pochta manzili",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO sana va vaqti",
              date: "ISO sana",
              time: "ISO vaqt",
              duration: "ISO davomiylik",
              ipv4: "IPv4 manzil",
              ipv6: "IPv6 manzil",
              mac: "MAC manzil",
              cidrv4: "IPv4 diapazon",
              cidrv6: "IPv6 diapazon",
              base64: "base64 kodlangan satr",
              base64url: "base64url kodlangan satr",
              json_string: "JSON satr",
              e164: "E.164 raqam",
              credit_card: "kredit karta raqami",
              currency_code: "valyuta kodi",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "kirish",
            }),
            (t = { nan: "NaN", number: "raqam", array: "massiv" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Noto‘g‘ri kirish: kutilgan instanceof ${r.expected}, qabul qilingan ${n}`
                  return `Noto‘g‘ri kirish: kutilgan ${e}, qabul qilingan ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `Noto‘g‘ri kirish: kutilgan ${$.stringifyPrimitive(r.values[0])}`
                  return `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${i}${r.maximum.toString()} ${t.unit} ${t.verb}`
                  return `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()} ${t.unit} ${t.verb}`
                  return `Juda kichik: kutilgan ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Noto‘g‘ri satr: "${r.prefix}" bilan boshlanishi kerak`
                  if ("ends_with" === r.format) return `Noto‘g‘ri satr: "${r.suffix}" bilan tugashi kerak`
                  if ("includes" === r.format) return `Noto‘g‘ri satr: "${r.includes}" ni o‘z ichiga olishi kerak`
                  if ("regex" === r.format) return `Noto‘g‘ri satr: ${r.pattern} shabloniga mos kelishi kerak`
                  return `Noto‘g‘ri ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Noto‘g‘ri raqam: ${r.divisor} ning karralisi bo‘lishi kerak`
                case "unrecognized_keys":
                  return `Noma’lum kalit${r.keys.length > 1 ? "lar" : ""}: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} dagi kalit noto‘g‘ri`
                case "invalid_union":
                default:
                  return "Noto‘g‘ri kirish"
                case "invalid_element":
                  return `${r.origin} da noto‘g‘ri qiymat`
              }
            }),
        }
      }
      function eD() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "ký tự", verb: "có" },
              file: { unit: "byte", verb: "có" },
              array: { unit: "phần tử", verb: "có" },
              set: { unit: "phần tử", verb: "có" },
              map: { unit: "phần tử", verb: "có" },
            }),
            (i = {
              regex: "đầu vào",
              email: "địa chỉ email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ngày giờ ISO",
              date: "ngày ISO",
              time: "giờ ISO",
              duration: "khoảng thời gian ISO",
              ipv4: "địa chỉ IPv4",
              ipv6: "địa chỉ IPv6",
              mac: "địa chỉ MAC",
              cidrv4: "dải IPv4",
              cidrv6: "dải IPv6",
              base64: "chuỗi mã hóa base64",
              base64url: "chuỗi mã hóa base64url",
              json_string: "chuỗi JSON",
              e164: "số E.164",
              credit_card: "số thẻ tín dụng",
              currency_code: "mã tiền tệ",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "đầu vào",
            }),
            (t = { nan: "NaN", number: "số", array: "mảng" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi instanceof ${r.expected}, nhận được ${n}`
                  return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${e}, nhận được ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `Đầu v\xe0o kh\xf4ng hợp lệ: mong đợi ${$.stringifyPrimitive(r.values[0])}`
                  return `T\xf9y chọn kh\xf4ng hợp lệ: mong đợi một trong c\xe1c gi\xe1 trị ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `Qu\xe1 lớn: mong đợi ${r.origin ?? "giá trị"} ${t.verb} ${i}${r.maximum.toString()} ${t.unit ?? "phần tử"}`
                  return `Qu\xe1 lớn: mong đợi ${r.origin ?? "giá trị"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `Qu\xe1 nhỏ: mong đợi ${r.origin} ${t.verb} ${i}${r.minimum.toString()} ${t.unit}`
                  return `Qu\xe1 nhỏ: mong đợi ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Chuỗi kh\xf4ng hợp lệ: phải bắt đầu bằng "${r.prefix}"`
                  if ("ends_with" === r.format) return `Chuỗi kh\xf4ng hợp lệ: phải kết th\xfac bằng "${r.suffix}"`
                  if ("includes" === r.format) return `Chuỗi kh\xf4ng hợp lệ: phải bao gồm "${r.includes}"`
                  if ("regex" === r.format) return `Chuỗi kh\xf4ng hợp lệ: phải khớp với mẫu ${r.pattern}`
                  return `${i[r.format] ?? r.format} kh\xf4ng hợp lệ`
                case "not_multiple_of":
                  return `Số kh\xf4ng hợp lệ: phải l\xe0 bội số của ${r.divisor}`
                case "unrecognized_keys":
                  return `Kh\xf3a kh\xf4ng được nhận dạng: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Kh\xf3a kh\xf4ng hợp lệ trong ${r.origin}`
                case "invalid_union":
                default:
                  return "Đầu vào không hợp lệ"
                case "invalid_element":
                  return `Gi\xe1 trị kh\xf4ng hợp lệ trong ${r.origin}`
              }
            }),
        }
      }
      function ej() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "字符", verb: "包含" },
              file: { unit: "字节", verb: "包含" },
              array: { unit: "项", verb: "包含" },
              set: { unit: "项", verb: "包含" },
              map: { unit: "项", verb: "包含" },
            }),
            (i = {
              regex: "输入",
              email: "电子邮件",
              url: "URL",
              emoji: "表情符号",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO日期时间",
              date: "ISO日期",
              time: "ISO时间",
              duration: "ISO时长",
              ipv4: "IPv4地址",
              ipv6: "IPv6地址",
              mac: "MAC地址",
              cidrv4: "IPv4网段",
              cidrv6: "IPv6网段",
              base64: "base64编码字符串",
              base64url: "base64url编码字符串",
              json_string: "JSON字符串",
              e164: "E.164号码",
              credit_card: "信用卡号",
              currency_code: "货币代码",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "输入",
            }),
            (t = { nan: "NaN", number: "数字", array: "数组", null: "空值(null)" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `无效输入：期望 instanceof ${r.expected}，实际接收 ${n}`
                  return `无效输入：期望 ${e}，实际接收 ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `无效输入：期望 ${$.stringifyPrimitive(r.values[0])}`
                  return `无效选项：期望以下之一 ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t) return `数值过大：期望 ${r.origin ?? "值"} ${i}${r.maximum.toString()} ${t.unit ?? "个元素"}`
                  return `数值过大：期望 ${r.origin ?? "值"} ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `数值过小：期望 ${r.origin} ${i}${r.minimum.toString()} ${t.unit}`
                  return `数值过小：期望 ${r.origin} ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `无效字符串：必须以 "${r.prefix}" 开头`
                  if ("ends_with" === r.format) return `无效字符串：必须以 "${r.suffix}" 结尾`
                  if ("includes" === r.format) return `无效字符串：必须包含 "${r.includes}"`
                  if ("regex" === r.format) return `无效字符串：必须满足正则表达式 ${r.pattern}`
                  return `无效${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `无效数字：必须是 ${r.divisor} 的倍数`
                case "unrecognized_keys":
                  return `出现未知的键(key): ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `${r.origin} 中的键(key)无效`
                case "invalid_union":
                default:
                  return "无效输入"
                case "invalid_element":
                  return `${r.origin} 中包含无效值(value)`
              }
            }),
        }
      }
      function eN() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "字元", verb: "擁有" },
              file: { unit: "位元組", verb: "擁有" },
              array: { unit: "項目", verb: "擁有" },
              set: { unit: "項目", verb: "擁有" },
              map: { unit: "項目", verb: "擁有" },
            }),
            (i = {
              regex: "輸入",
              email: "郵件地址",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO 日期時間",
              date: "ISO 日期",
              time: "ISO 時間",
              duration: "ISO 期間",
              ipv4: "IPv4 位址",
              ipv6: "IPv6 位址",
              mac: "MAC 位址",
              cidrv4: "IPv4 範圍",
              cidrv6: "IPv6 範圍",
              base64: "base64 編碼字串",
              base64url: "base64url 編碼字串",
              json_string: "JSON 字串",
              e164: "E.164 數值",
              credit_card: "信用卡號",
              currency_code: "貨幣代碼",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "輸入",
            }),
            (t = { nan: "NaN" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected)) return `無效的輸入值：預期為 instanceof ${r.expected}，但收到 ${n}`
                  return `無效的輸入值：預期為 ${e}，但收到 ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length) return `無效的輸入值：預期為 ${$.stringifyPrimitive(r.values[0])}`
                  return `無效的選項：預期為以下其中之一 ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `數值過大：預期 ${r.origin ?? "值"} 應為 ${i}${r.maximum.toString()} ${t.unit ?? "個元素"}`
                  return `數值過大：預期 ${r.origin ?? "值"} 應為 ${i}${r.maximum.toString()}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t) return `數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()} ${t.unit}`
                  return `數值過小：預期 ${r.origin} 應為 ${i}${r.minimum.toString()}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `無效的字串：必須以 "${r.prefix}" 開頭`
                  if ("ends_with" === r.format) return `無效的字串：必須以 "${r.suffix}" 結尾`
                  if ("includes" === r.format) return `無效的字串：必須包含 "${r.includes}"`
                  if ("regex" === r.format) return `無效的字串：必須符合格式 ${r.pattern}`
                  return `無效的 ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `無效的數字：必須為 ${r.divisor} 的倍數`
                case "unrecognized_keys":
                  return `無法識別的鍵值${r.keys.length > 1 ? "們" : ""}：${$.joinValues(r.keys, "、")}`
                case "invalid_key":
                  return `${r.origin} 中有無效的鍵值`
                case "invalid_union":
                default:
                  return "無效的輸入值"
                case "invalid_element":
                  return `${r.origin} 中有無效的值`
              }
            }),
        }
      }
      function eO() {
        let e, i, t
        return {
          localeError:
            ((e = {
              string: { unit: "àmi", verb: "ní" },
              file: { unit: "bytes", verb: "ní" },
              array: { unit: "nkan", verb: "ní" },
              set: { unit: "nkan", verb: "ní" },
              map: { unit: "nkan", verb: "ní" },
            }),
            (i = {
              regex: "ẹ̀rọ ìbáwọlé",
              email: "àdírẹ́sì ìmẹ́lì",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "àkókò ISO",
              date: "ọjọ́ ISO",
              time: "àkókò ISO",
              duration: "àkókò tó pé ISO",
              ipv4: "àdírẹ́sì IPv4",
              ipv6: "àdírẹ́sì IPv6",
              mac: "àdírẹ́sì MAC",
              cidrv4: "àgbègbè IPv4",
              cidrv6: "àgbègbè IPv6",
              base64: "ọ̀rọ̀ tí a kọ́ ní base64",
              base64url: "ọ̀rọ̀ base64url",
              json_string: "ọ̀rọ̀ JSON",
              e164: "nọ́mbà E.164",
              credit_card: "nọmba kaadi gbese",
              currency_code: "koodu owó",
              iban: "IBAN",
              jwt: "JWT",
              template_literal: "ẹ̀rọ ìbáwọlé",
            }),
            (t = { nan: "NaN", number: "nọ́mbà", array: "akopọ" }),
            (r) => {
              switch (r.code) {
                case "invalid_type": {
                  let e = t[r.expected] ?? r.expected,
                    i = $.parsedType(r.input),
                    n = t[i] ?? i
                  if (/^[A-Z]/.test(r.expected))
                    return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi instanceof ${r.expected}, \xe0mọ̀ a r\xed ${n}`
                  return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${e}, \xe0mọ̀ a r\xed ${n}`
                }
                case "invalid_value":
                  if (1 === r.values.length)
                    return `\xccb\xe1wọl\xe9 aṣ\xecṣe: a n\xed l\xe1ti fi ${$.stringifyPrimitive(r.values[0])}`
                  return `\xc0ṣ\xe0y\xe0n aṣ\xecṣe: yan ọ̀kan l\xe1ra ${$.joinValues(r.values, "|")}`
                case "too_big": {
                  let i = r.inclusive ? "<=" : "<",
                    t = e[r.origin] ?? null
                  if (t)
                    return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ p\xe9 ${r.origin ?? "iye"} ${t.verb} ${i}${r.maximum} ${t.unit}`
                  return `T\xf3 pọ̀ j\xf9: a n\xed l\xe1ti jẹ́ ${i}${r.maximum}`
                }
                case "too_small": {
                  let i = r.inclusive ? ">=" : ">",
                    t = e[r.origin] ?? null
                  if (t)
                    return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ p\xe9 ${r.origin} ${t.verb} ${i}${r.minimum} ${t.unit}`
                  return `K\xe9r\xe9 ju: a n\xed l\xe1ti jẹ́ ${i}${r.minimum}`
                }
                case "invalid_format":
                  if ("starts_with" === r.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀l\xfa "${r.prefix}"`
                  if ("ends_with" === r.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ par\xed pẹ̀l\xfa "${r.suffix}"`
                  if ("includes" === r.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ n\xed "${r.includes}"`
                  if ("regex" === r.format) return `Ọ̀rọ̀ aṣ\xecṣe: gbọ́dọ̀ b\xe1 \xe0pẹẹrẹ mu ${r.pattern}`
                  return `Aṣ\xecṣe: ${i[r.format] ?? r.format}`
                case "not_multiple_of":
                  return `Nọ́mb\xe0 aṣ\xecṣe: gbọ́dọ̀ jẹ́ \xe8y\xe0 p\xedp\xedn ti ${r.divisor}`
                case "unrecognized_keys":
                  return `Bọt\xecn\xec \xe0\xecmọ̀: ${$.joinValues(r.keys, ", ")}`
                case "invalid_key":
                  return `Bọt\xecn\xec aṣ\xecṣe n\xedn\xfa ${r.origin}`
                case "invalid_union":
                default:
                  return "Ìbáwọlé aṣìṣe"
                case "invalid_element":
                  return `Iye aṣ\xecṣe n\xedn\xfa ${r.origin}`
              }
            }),
        }
      }
      var eP = t(79105),
        eA = t(46302)
      let ez = Symbol.for("zod.compile.invalid"),
        eZ = Symbol.for("zod.compile.fallback")
      class eL extends Error {
        constructor(e = "z.compile does not support async refinements, transforms, or checks") {
          ;(super(e), (this.name = "ZodCompileAsyncError"))
        }
      }
      class eT extends Error {
        constructor(e, i = !0) {
          ;(super(`z.compile does not support ${e}; this schema must use the runtime parser`),
            (this.name = "ZodCompileUnsupportedError"),
            (this.islandable = i))
        }
      }
      function eV(e, i) {
        try {
          let i = eC(e),
            t = eE(e, i)
          return (
            (t._zod.bag.validator = (function (e, i) {
              try {
                return eC(e, { assertOnly: !0 })
              } catch {
                return i
              }
            })(e, i)),
            t
          )
        } catch (t) {
          if (i?.strict) throw t
          return e
        }
      }
      function eE(e, i) {
        if ((0, m.Kw)(e)) throw new eT("a schema whose subtree contains a reference cycle")
        let t = $.clone(e),
          r = e._zod.run,
          n = r.__originalRun ?? r,
          a = (e, t) => {
            if (t?.async || t?.direction === "backward" || t?.skipChecks || t?.[eZ] || (t && (0, m.TE)(t, e.value)))
              return n(e, t)
            let r = i(e.value)
            return r !== ez ? ((e.value = r), e) : (t && (t[eZ] = !0), n(e, t))
          }
        return (
          (a.__originalRun = n),
          (t._zod.bag.fallbackRun = n),
          (t._zod.bag.validator = i),
          (t._zod.run = a),
          r.__originalRun ||
            (function (e, i, t) {
              if ("function" == typeof i.safeParse) {
                let r = i.safeParse
                e.safeParse = (e, i) => {
                  let n = t(e)
                  return n !== ez ? { success: !0, data: n } : r(e, i)
                }
              }
              if ("function" == typeof i.parse) {
                let r = i.parse
                e.parse = (e, i) => {
                  let n = t(e)
                  return n !== ez ? n : r(e, i)
                }
              }
            })(t, e, i),
          t
        )
      }
      function eC(e, i) {
        let t,
          r = !0
        try {
          r = (0, m.Kw)(e)
        } catch {}
        if (r) throw new eT("a schema whose subtree contains a reference cycle")
        let n = { constants: new Map(), constantCounter: 0, varCounter: 0, definite: !0 },
          a = new eA.J(["input"]),
          u = e6(a, n, e, "input", !i?.assertOnly)
        a.write(null === u ? "return true;" : `return ${u};`)
        let o = ["INVALID", ...n.constants.keys()],
          l = [ez, ...n.constants.values()],
          s = a.content.join("\n"),
          d = i?.debug
            ? o.length > 0
              ? `// Constants: ${o.join(", ")}
${s}`
              : s
            : "",
          c = Function,
          v = `return (input) => {
${s}
}`
        try {
          t = new c(...o, v)(...l)
        } catch (e) {
          throw new eT(`this schema (generated code failed to evaluate: ${e.message})`)
        }
        return (i?.debug && (t.code = d), (t.definite = n.definite), t)
      }
      function eR(e, i) {
        for (let [t, r] of e.constants) if (r === i) return t
        let t = `c${e.constantCounter++}`
        return (e.constants.set(t, i), t)
      }
      function eJ(e, i) {
        return ((e.definite = !1), eR(e, i))
      }
      function eM(e) {
        return `v${e.varCounter++}`
      }
      function eB(e, i) {
        let t = e._zod.run({ value: i, issues: [] }, {})
        return t && "function" == typeof t.then ? ez : 0 === t.issues.length ? t.value : ez
      }
      function eG(e, i, t, r, n = !0) {
        let a = e.content.length,
          u = i.constants.size,
          o = i.constantCounter,
          l = i.varCounter
        try {
          return e6(e, i, t, r, n)
        } catch ($) {
          var s, d, c, m
          let n, v, f
          if (!($ instanceof eT) || !$.islandable) throw $
          if (((e.content.length = a), i.constants.size > u))
            for (let e of Array.from(i.constants.keys()).slice(u)) i.constants.delete(e)
          return (
            (i.constantCounter = o),
            (i.varCounter = l),
            (s = e),
            (d = i),
            (c = t),
            (m = r),
            (d.definite = !1),
            (n = eR(d, c)),
            (v = eR(d, eB)),
            (f = eM(d)),
            s.write(`const ${f} = ${v}(${n}, ${m});`),
            s.write(`if (${f} === INVALID) return INVALID;`),
            f
          )
        }
      }
      let eF = new Set(["max_size", "min_size", "size_equals", "max_length", "min_length", "length_equals"])
      function eW(e, i, t, r) {
        let n = eR(i, $.codePointLength),
          a = eM(i)
        return (e.write(`const ${a} = typeof ${t} === "string" && ${r} ? ${n}(${t}) : ${t}.length;`), a)
      }
      function eK(e, i) {
        if ("number" != typeof e || !Number.isFinite(e)) throw new eT(`${i} bound of type ${typeof e}`)
        return `${e}`
      }
      function eq(e, i) {
        if ("bigint" == typeof i) return `${i}n`
        if ("number" == typeof i) {
          if (Number.isNaN(i)) throw new eT("comparison check with NaN bound")
          return `${i}`
        }
        if (i instanceof Date) {
          if (Number.isNaN(i.getTime())) throw new eT("comparison check with Invalid Date bound")
          return eR(e, i)
        }
        throw new eT(`comparison check bound of type ${typeof i}`)
      }
      function eX(e, i, t) {
        let r = i.format
        switch (r) {
          case "safeint":
            e.write(`if (!Number.isSafeInteger(${t})) return INVALID;`)
            break
          case "int32":
            e.write(`if (!Number.isInteger(${t}) || ${t} < -2147483648 || ${t} > 2147483647) return INVALID;`)
            break
          case "uint32":
            e.write(`if (!Number.isInteger(${t}) || ${t} < 0 || ${t} > 4294967295) return INVALID;`)
            break
          case "float32":
            e.write(
              `if (!Number.isFinite(${t}) || ${t} < -3.4028234663852886e38 || ${t} > 3.4028234663852886e38) return INVALID;`,
            )
            break
          case "float64":
            e.write(`if (!Number.isFinite(${t})) return INVALID;`)
            break
          default:
            throw new eT(`number format ${r}`)
        }
      }
      function eY() {
        throw new l.GT()
      }
      function eH(e) {
        this.issues.push(e)
      }
      let eQ = new Set([
        "cidrv4",
        "cuid",
        "cuid2",
        "date",
        "datetime",
        "duration",
        "e164",
        "email",
        "emoji",
        "ends_with",
        "guid",
        "includes",
        "ipv4",
        "ksuid",
        "lowercase",
        "mac",
        "nanoid",
        "regex",
        "starts_with",
        "time",
        "ulid",
        "uppercase",
        "uuid",
        "xid",
      ])
      function e4(e, i, t, r, n = !0) {
        let a = t.format
        if ("base64" === a) {
          let t = eR(i, c.UY)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("base64url" === a) {
          let t = eR(i, c.tV)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("jwt" === a) {
          let n = eR(i, c.c2),
            a = eR(i, t.alg ?? null)
          return (e.write(`if (!${n}(${r}, ${a})) return INVALID;`), r)
        }
        if ("ipv6" === a) {
          let t = eR(i, c.SW)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("cidrv6" === a) {
          let t = eR(i, c.Xe)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("credit_card" === a) {
          let t = eR(i, c.uv)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("iban" === a) {
          let t = eR(i, c.DT)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if ("url" === a || "httpurl" === a || t.normalize || void 0 !== t.hostname || void 0 !== t.protocol) {
          let a = eR(i, c.qU),
            u = eR(i, t),
            o = eM(i),
            l = eM(i)
          if (
            (e.write(`const ${o} = ${r}.trim();`),
            e.write(`const ${l} = ${a}(${o}, ${u});`),
            e.write(`if (typeof ${l} === "number") return INVALID;`),
            void 0 !== t.hostname)
          ) {
            let t = eR(i, c.bL)
            e.write(`if (!${t}(${l}, ${u}.hostname)) return INVALID;`)
          }
          if (void 0 !== t.protocol) {
            let t = eR(i, c.Yf)
            e.write(`if (!${t}(${l}, ${u}.protocol)) return INVALID;`)
          }
          if (!n) return null
          let s = eM(i),
            d = t.normalize ? `${l}.href` : `${eR(i, c.NH)}(${o})`
          return (e.write(`const ${s} = ${d};`), s)
        }
        let u = t.fn
        if (u) {
          if (e5(u)) throw new eT(`async string format ${a}`)
          let t = eR(i, u)
          return (e.write(`if (!${t}(${r})) return INVALID;`), r)
        }
        if (eQ.has(a) && t.pattern) {
          let n = eR(i, t.pattern)
          return (e.write(`${n}.lastIndex = 0;`), e.write(`if (!${n}.test(${r})) return INVALID;`), r)
        }
        let o = t.format
        switch (o) {
          case "regex":
            throw new eT("regex format without a pattern")
          case "lowercase":
            e.write(`if (${r} !== ${r}.toLowerCase()) return INVALID;`)
            break
          case "uppercase":
            e.write(`if (${r} !== ${r}.toUpperCase()) return INVALID;`)
            break
          case "includes":
            e.write(`if (!${r}.includes(${$.esc(t.includes)})) return INVALID;`)
            break
          case "starts_with": {
            let i = t.prefix
            e.write(`if (${r}.slice(0, ${i.length}) !== ${$.esc(i)}) return INVALID;`)
            break
          }
          case "ends_with": {
            let i = t.suffix
            e.write(`if (${r}.slice(-${i.length}) !== ${$.esc(i)}) return INVALID;`)
            break
          }
          default:
            throw new eT(`string format ${o}`)
        }
        return r
      }
      function e6(e, i, t, r, n = !0) {
        var a,
          u,
          o,
          l,
          s,
          d,
          m,
          v,
          f,
          p,
          b,
          x,
          y,
          _,
          I,
          k,
          h,
          w,
          S,
          U,
          D,
          j,
          N,
          O,
          P,
          A,
          z,
          Z,
          L,
          T,
          V,
          E,
          C,
          R,
          J,
          M,
          B,
          G,
          F
        let W,
          K = t._zod.def,
          q = K.type
        if (K.coerce) throw new eT(`coercion (z.coerce.${q}())`)
        let X = n || !!K.checks?.length
        switch (q) {
          case "string":
            W = (function (e, i, t, r, n = !0) {
              e.write(`if (typeof ${r} !== "string") return INVALID;`)
              let a = t._zod.def
              return void 0 === a.format ? r : e4(e, i, a, r, n)
            })(e, i, t, r, X)
            break
          case "number":
            let Y
            ;((a = e),
              (u = t),
              (o = r),
              a.write(`if (typeof ${o} !== "number" || !Number.isFinite(${o})) return INVALID;`),
              "number_format" === (Y = u._zod.def).check && Y.format && eX(a, { format: Y.format }, o),
              (W = o))
            break
          case "boolean":
            ;((l = e), (s = r), l.write(`if (typeof ${s} !== "boolean") return INVALID;`), (W = s))
            break
          case "bigint":
            W = (function (e, i, t) {
              e.write(`if (typeof ${t} !== "bigint") return INVALID;`)
              let r = i._zod.def
              if (r.format)
                switch (r.format) {
                  case "int64":
                    e.write(`if (${t} < -9223372036854775808n || ${t} > 9223372036854775807n) return INVALID;`)
                    break
                  case "uint64":
                    e.write(`if (${t} < 0n || ${t} > 18446744073709551615n) return INVALID;`)
                }
              return t
            })(e, t, r)
            break
          case "symbol":
            ;((d = e), (m = r), d.write(`if (typeof ${m} !== "symbol") return INVALID;`), (W = m))
            break
          case "undefined":
            ;((v = e), (f = r), v.write(`if (${f} !== undefined) return INVALID;`), (W = f))
            break
          case "null":
            ;((p = e), (b = r), p.write(`if (${b} !== null) return INVALID;`), (W = b))
            break
          case "any":
          case "unknown":
            W = r
            break
          case "never":
            ;(e.write("return INVALID;"), (W = r))
            break
          case "void":
            ;((x = e), (y = r), x.write(`if (${y} !== undefined) return INVALID;`), (W = y))
            break
          case "nan":
            ;((_ = e),
              (I = r),
              _.write(`if (typeof ${I} !== "number" || !Number.isNaN(${I})) return INVALID;`),
              (W = I))
            break
          case "date":
            ;((k = e),
              (h = r),
              k.write(`if (!(${h} instanceof Date) || Number.isNaN(${h}.getTime())) return INVALID;`),
              (W = h))
            break
          case "object":
            W = (function (e, i, t, r, n = !0) {
              let a = t._zod.def
              e.write(`if (typeof ${r} !== "object" || ${r} === null || Array.isArray(${r})) return INVALID;`)
              let u = a.shape,
                o = Object.keys(u),
                l = Object.getOwnPropertySymbols(u),
                s = l.length ? [...o, ...l] : o,
                d = (e) => ("symbol" == typeof e ? eR(i, e) : $.esc(e))
              if (o.includes("__proto__")) throw new eT('object shape key "__proto__"')
              let c = new Map()
              for (let t of s) {
                let a = u[t],
                  o = d(t),
                  l = eM(i)
                if ((e.write(`const ${l} = ${r}[${o}];`), void 0 !== a._zod.optin)) {
                  let n = eM(i)
                  ;(e.write(`let ${n} = (() => {`),
                    e.indented((e) => {
                      let t = eG(e, i, a, l)
                      e.write(`return ${t};`)
                    }),
                    e.write("})();"),
                    "optional" === a._zod.optout
                      ? (e.write(`if (${n} === INVALID) {`),
                        e.indented((e) => {
                          ;(e.write(`if (${o} in ${r}) return INVALID;`), e.write(`${n} = undefined;`))
                        }),
                        e.write("}"))
                      : e.write(`if (${n} === INVALID) return INVALID;`),
                    c.set(t, n))
                } else {
                  var m
                  void 0 === (m = a)._zod.optin &&
                    (function e(i) {
                      if (i._zod.def.coerce) return !0
                      let t = i._zod.def
                      switch (t.type) {
                        case "any":
                        case "unknown":
                        case "undefined":
                        case "void":
                        case "default":
                        case "prefault":
                        case "transform":
                        case "custom":
                        case "lazy":
                        case "catch":
                        default:
                          return !0
                        case "string":
                        case "number":
                        case "boolean":
                        case "bigint":
                        case "symbol":
                        case "null":
                        case "never":
                        case "nan":
                        case "date":
                        case "object":
                        case "array":
                        case "tuple":
                        case "record":
                        case "map":
                        case "set":
                        case "file":
                        case "template_literal":
                          return !1
                        case "nonoptional":
                          return !!t.innerType && e(t.innerType)
                        case "literal":
                          return !!t.values?.includes(void 0)
                        case "enum":
                          return !!i._zod.values?.has(void 0)
                        case "optional":
                        case "nullable":
                        case "readonly":
                        case "success":
                          return !t.innerType || e(t.innerType)
                        case "union":
                          return !t.options || t.options.some(e)
                        case "intersection":
                          if (!t.left || !t.right) return !0
                          return e(t.left) && e(t.right)
                        case "pipe":
                          return !t.in || e(t.in)
                      }
                    })(m) &&
                    e.write(`if (!(${o} in ${r})) return INVALID;`)
                  let u = eG(e, i, a, l, n)
                  null !== u && c.set(t, u)
                }
              }
              let v = a.catchall,
                f = "none"
              if (v) {
                let i = v._zod.def.type
                if ("never" === i) {
                  let i = o.map((e) => `k !== ${$.esc(e)}`).join(" && ") || "true"
                  ;(e.write(`for (const k in ${r}) {`),
                    e.indented((e) => {
                      e.write(`if (${i}) return INVALID;`)
                    }),
                    e.write("}"))
                } else f = ("unknown" !== i && "any" !== i) || v._zod.def.checks?.length ? "schema" : "passthrough"
              }
              let g = eM(i),
                p = s.some((e) => e0(u[e]) || e1(u[e]))
              if (!n) {
                if ("schema" === f) {
                  let t = o.length > 0 ? eR(i, new Set(o)) : null
                  ;(e.write(`for (const k in ${r}) {`),
                    e.indented((e) => {
                      ;(e.write('if (k === "__proto__") continue;'), t && e.write(`if (${t}.has(k)) continue;`))
                      let n = eM(i)
                      ;(e.write(`const ${n} = ${r}[k];`), eG(e, i, v, n, !1))
                    }),
                    e.write("}"))
                }
                return null
              }
              if (p)
                for (let i of (e.write(`const ${g} = {};`), s)) {
                  let t = d(i),
                    n = c.get(i)
                  e1(u[i])
                    ? e.write(`if (${t} in ${r}) ${g}[${t}] = ${n};`)
                    : e0(u[i])
                      ? e.write(`if (${n} !== undefined || ${t} in ${r}) ${g}[${t}] = ${n};`)
                      : e.write(`${g}[${t}] = ${n};`)
                }
              else {
                let i = s.map((e) => `${"symbol" == typeof e ? `[${d(e)}]` : $.esc(e)}: ${c.get(e)}`).join(", ")
                e.write(`const ${g} = { ${i} };`)
              }
              if ("none" !== f) {
                let t = o.length > 0 ? eR(i, new Set(o)) : null
                ;(e.write(`for (const k in ${r}) {`),
                  e.indented((e) => {
                    if (
                      (e.write('if (k === "__proto__") continue;'),
                      t && e.write(`if (${t}.has(k)) continue;`),
                      "passthrough" === f)
                    )
                      e.write(`${g}[k] = ${r}[k];`)
                    else {
                      let t = eM(i)
                      e.write(`const ${t} = ${r}[k];`)
                      let n = eG(e, i, v, t)
                      e.write(`${g}[k] = ${n};`)
                    }
                  }),
                  e.write("}"))
              }
              return g
            })(e, i, t, r, X)
            break
          case "optional":
            W = (function (e, i, t, r, n = !0) {
              var a
              let u = t._zod.def
              if (((a = t), a._zod.traits?.has("$ZodExactOptional") === !0)) return e6(e, i, u.innerType, r, n)
              if ("defaulted" === u.innerType._zod.optin) {
                let t = eM(i),
                  n = eM(i)
                return (
                  e.write(`let ${t};`),
                  e.write(`if (${r} === undefined) {`),
                  e.indented((e) => {
                    ;(e.write(`const ${n} = (() => {`),
                      e.indented((e) => {
                        let t = e6(e, i, u.innerType, r)
                        e.write(`return ${t};`)
                      }),
                      e.write("})();"),
                      e.write(`if (${n} !== INVALID) ${t} = ${n};`))
                  }),
                  e.write("} else {"),
                  e.indented((e) => {
                    let n = e6(e, i, u.innerType, r)
                    e.write(`${t} = ${n};`)
                  }),
                  e.write("}"),
                  t
                )
              }
              let o = n ? eM(i) : null
              return (
                o && e.write(`let ${o};`),
                e.write(`if (${r} !== undefined) {`),
                e.indented((e) => {
                  let t = e6(e, i, u.innerType, r, n)
                  o && null !== t && e.write(`${o} = ${t};`)
                }),
                e.write("}"),
                o
              )
            })(e, i, t, r, X)
            break
          case "nullable":
            W = (function (e, i, t, r, n = !0) {
              let a = t._zod.def,
                u = n ? eM(i) : null
              return (
                u && e.write(`let ${u} = null;`),
                e.write(`if (${r} !== null) {`),
                e.indented((e) => {
                  let t = e6(e, i, a.innerType, r, n)
                  u && null !== t && e.write(`${u} = ${t};`)
                }),
                e.write("}"),
                u
              )
            })(e, i, t, r, X)
            break
          case "array":
            W = (function (e, i, t, r, n = !0) {
              let a = t._zod.def
              ;(e.write(`if (!Array.isArray(${r})) return INVALID;`), e2(e, t, `${r}.length`))
              let u = n ? eM(i) : null,
                o = eM(i),
                l = eM(i)
              return (
                u && e.write(`const ${u} = new Array(${r}.length);`),
                e.write(`for (let ${o} = 0; ${o} < ${r}.length; ${o}++) {`),
                e.indented((e) => {
                  e.write(`const ${l} = ${r}[${o}];`)
                  let t = eG(e, i, a.element, l, n)
                  u && null !== t && e.write(`${u}[${o}] = ${t};`)
                }),
                e.write("}"),
                u
              )
            })(e, i, t, r, X)
            break
          case "literal":
            W = (function (e, i, t, r) {
              let n = t._zod.def.values
              if (1 !== n.length) {
                let t = eR(i, new Set(n))
                return (e.write(`if (!${t}.has(${r})) return INVALID;`), r)
              }
              let a = n[0]
              if ("number" == typeof a && Number.isNaN(a)) {
                let t = eR(i, new Set(n))
                return (e.write(`if (!${t}.has(${r})) return INVALID;`), r)
              }
              if ("string" == typeof a) e.write(`if (${r} !== ${$.esc(a)}) return INVALID;`)
              else if ("number" == typeof a || "boolean" == typeof a) e.write(`if (${r} !== ${a}) return INVALID;`)
              else if (null === a) e.write(`if (${r} !== null) return INVALID;`)
              else if (void 0 === a) e.write(`if (${r} !== undefined) return INVALID;`)
              else if ("bigint" == typeof a) e.write(`if (${r} !== ${a}n) return INVALID;`)
              else throw new eT(`literal type ${typeof a}`)
              return r
            })(e, i, t, r)
            break
          case "enum":
            W = (function (e, i, t, r) {
              let n = t._zod.values
              if (!n) throw new eT("enum schema without enumerated values")
              let a = eR(i, n)
              return (e.write(`if (!${a}.has(${r})) return INVALID;`), r)
            })(e, i, t, r)
            break
          case "readonly": {
            let n = e9(e, i, t, r),
              a = eM(i)
            ;(e.write(`const ${a} = Object.freeze(${n});`), (W = a))
            break
          }
          case "success":
            ;(e9(e, i, t, r), (W = "true"))
            break
          case "default":
          case "prefault":
            W = (function (e, i, t, r) {
              let n = t._zod.def,
                a = Object.getOwnPropertyDescriptor(t._zod.def, "defaultValue") ? () => t._zod.def.defaultValue : void 0
              if ("prefault" === t._zod.def.type) {
                if (!a) return e6(e, i, n.innerType, r)
                let t = eR(i, a),
                  u = eM(i)
                return (
                  e.write(`let ${u} = ${r};`),
                  e.write(`if (${r} === undefined) ${u} = ${t}();`),
                  e6(e, i, n.innerType, u)
                )
              }
              let u = eM(i)
              if (a) {
                let t = eR(i, a),
                  o = eR(i, $.shallowClone)
                ;(e.write(`let ${u};`),
                  e.write(`if (${r} === undefined) {`),
                  e.indented((e) => {
                    e.write(`${u} = ${o}(${t}());`)
                  }),
                  e.write("} else {"),
                  e.indented((e) => {
                    let a = e6(e, i, n.innerType, r)
                    e.write(`${u} = ${a} === undefined ? ${o}(${t}()) : ${a};`)
                  }),
                  e.write("}"))
              } else
                (e.write(`let ${u};`),
                  e.write(`if (${r} !== undefined) {`),
                  e.indented((e) => {
                    let t = e6(e, i, n.innerType, r)
                    e.write(`${u} = ${t};`)
                  }),
                  e.write("}"))
              return u
            })(e, i, t, r)
            break
          case "nonoptional":
            let H, Q
            ;((w = e),
              (S = i),
              (U = t),
              (D = r),
              (H = e6(w, S, U._zod.def.innerType, D)),
              (Q = eM(S)),
              w.write(`const ${Q} = ${H};`),
              w.write(`if (${Q} === undefined) return INVALID;`),
              (W = Q))
            break
          case "tuple":
            W = (function (e, i, t, r) {
              let n = t._zod.def,
                a = n.items,
                u = n.rest
              e.write(`if (!Array.isArray(${r})) return INVALID;`)
              let o = e7(a, "optin"),
                l = e7(a, "optout")
              u
                ? e.write(`if (${r}.length < ${o}) return INVALID;`)
                : e.write(`if (${r}.length < ${o} || ${r}.length > ${a.length}) return INVALID;`)
              let s = eM(i)
              e.write(`const ${s} = [];`)
              for (let t = 0; t < a.length; t++) {
                let n = a[t]
                if (t >= l)
                  (e.write(`if (${s}.length === ${t}) {`),
                    e.indented((e) => {
                      ;(e.write(`if (${t} < ${r}.length) {`),
                        e.indented((e) => {
                          let a = eM(i)
                          e.write(`const ${a} = ${r}[${t}];`)
                          let u = eG(e, i, n, a)
                          e.write(`${s}[${t}] = ${u};`)
                        }),
                        e.write("} else {"),
                        e.indented((e) => {
                          if (e1(n)) return void e.write(`${s}.length = ${t};`)
                          let r = eM(i),
                            a = eM(i)
                          ;(e.write(`const ${r} = undefined;`),
                            e.write(`const ${a} = (() => {`),
                            e.indented((e) => {
                              let t = eG(e, i, n, r)
                              e.write(`return ${t};`)
                            }),
                            e.write("})();"),
                            e.write(`if (${a} === INVALID || ${a} === undefined) ${s}.length = ${t};`),
                            e.write(`else ${s}[${t}] = ${a};`))
                        }),
                        e.write("}"))
                    }),
                    e.write("}"))
                else {
                  let a = eM(i)
                  e.write(`const ${a} = ${r}[${t}];`)
                  let u = eG(e, i, n, a)
                  e.write(`${s}[${t}] = ${u};`)
                }
              }
              if (u) {
                let t = eM(i),
                  n = eM(i)
                ;(e.write(`for (let ${t} = ${a.length}; ${t} < ${r}.length; ${t}++) {`),
                  e.indented((e) => {
                    e.write(`const ${n} = ${r}[${t}];`)
                    let a = eG(e, i, u, n)
                    e.write(`${s}[${t}] = ${a};`)
                  }),
                  e.write("}"))
              }
              return s
            })(e, i, t, r)
            break
          case "union":
            W = (function (e, i, t, r) {
              let n = t._zod.def,
                a = n.options
              if (n.discriminator)
                return (function (e, i, t, r) {
                  if (t.unionFallback) throw new eT("discriminated union with unionFallback")
                  if (0 === t.options.length) return (e.write("return INVALID;"), r)
                  let n = eM(i),
                    a = eM(i)
                  ;(e.write(`const ${n} = ${r}?.[${$.esc(t.discriminator)}];`), e.write(`let ${a};`))
                  let u = !0,
                    o = new Set()
                  for (let l of t.options) {
                    let s = l._zod.propValues?.[t.discriminator]
                    if (!s || 0 === s.size)
                      throw new eT("discriminated union option without static discriminator values")
                    for (let e of s) {
                      if (o.has(e)) throw new eT(`duplicate discriminator value ${String(e)}`)
                      o.add(e)
                    }
                    let d = Array.from(s, (e) =>
                        (function (e, i, t) {
                          if ("string" == typeof t) return `${i} === ${$.esc(t)}`
                          if ("number" == typeof t) return Number.isNaN(t) ? `Number.isNaN(${i})` : `${i} === ${t}`
                          if ("boolean" == typeof t) return `${i} === ${t}`
                          if (null === t) return `${i} === null`
                          if (void 0 === t) return `${i} === undefined`
                          if ("bigint" == typeof t) return `${i} === ${t}n`
                          if ("symbol" == typeof t) {
                            let r = eR(e, t)
                            return `${i} === ${r}`
                          }
                          throw new eT(`literal discriminator value ${String(t)}`)
                        })(i, n, e),
                      ),
                      c = u ? "if" : "else if"
                    ;(e.write(`${c} (${d.join(" || ")}) {`),
                      e.indented((e) => {
                        let t = e6(e, i, l, r)
                        e.write(`${a} = ${t};`)
                      }),
                      e.write("}"),
                      (u = !1))
                  }
                  return (e.write("else { return INVALID; }"), a)
                })(e, i, n, r)
              if (!1 === n.inclusive) throw new eT("exclusive unions (z.xor)")
              if (0 === a.length) return (e.write("return INVALID;"), r)
              if (1 === a.length) return e6(e, i, a[0], r)
              if (a.every((e) => "literal" === e._zod.def.type && !e._zod.def.checks?.length)) {
                let t = eR(i, new Set(a.flatMap((e) => e._zod.def.values)))
                return (e.write(`if (!${t}.has(${r})) return INVALID;`), r)
              }
              let u = eM(i)
              e.write(`let ${u};`)
              for (let t = 0; t < a.length; t++) {
                let n = a[t]
                ;(0 === t ? e.write(`${u} = (() => {`) : e.write(`if (${u} === INVALID) ${u} = (() => {`),
                  e.indented((e) => {
                    let t = e6(e, i, n, r)
                    e.write(`return ${t};`)
                  }),
                  e.write("})();"))
              }
              return (e.write(`if (${u} === INVALID) return INVALID;`), u)
            })(e, i, t, r)
            break
          case "intersection":
            let ee, ei, et, er, en
            ;((j = e),
              (N = i),
              (O = t),
              (P = r),
              (ee = O._zod.def),
              (N.definite = !1),
              (ei = eG(j, N, ee.left, P)),
              (et = eG(j, N, ee.right, P)),
              (er = eR(N, c.D3)),
              (en = eM(N)),
              j.write(`const ${en} = ${er}(${ei}, ${et});`),
              j.write(`if (!${en}.valid) return INVALID;`),
              (W = `${en}.data`))
            break
          case "record":
            W = (function (e, i, t, r) {
              let n = t._zod.def,
                a = eR(i, $.isPlainObject)
              e.write(`if (!${a}(${r})) return INVALID;`)
              let u = eM(i),
                o = eM(i),
                l = eM(i)
              e.write(`const ${u} = {};`)
              let s = n.partial ? void 0 : n.keyType._zod.values
              if (s) {
                let t = []
                for (let a of s) {
                  var d, c
                  if ("string" != typeof a && "number" != typeof a && "symbol" != typeof a)
                    throw new eT(`record key value ${String(a)}`)
                  let o = "number" == typeof a ? a.toString() : a
                  if ("__proto__" === o) throw new eT('record key "__proto__"')
                  t.push(o)
                  let l = eR(i, a),
                    s = e6(e, i, n.keyType, l),
                    m = eM(i)
                  e.write(`const ${m} = ${r}[${((d = i), "string" == typeof (c = o) ? $.esc(c) : eR(d, c))}];`)
                  let v = eG(e, i, n.valueType, m)
                  e.write(`${u}[${s}] = ${v};`)
                }
                let a = eR(i, new Set(t))
                return (
                  e.write(`for (const ${o} in ${r}) {`),
                  e.indented((e) => {
                    ;(e.write(`if (${a}.has(${o})) continue;`),
                      "loose" === n.mode
                        ? e.write(`if (${o} !== "__proto__") ${u}[${o}] = ${r}[${o}];`)
                        : e.write("return INVALID;"))
                  }),
                  e.write("}"),
                  u
                )
              }
              let m = n.keyType._zod.def
              if (!("string" === m.type && void 0 === m.format && !m.coerce && (m.checks?.length ?? 0) === 0)) {
                let t = "loose" === n.mode,
                  a = eC(n.keyType)
                !1 === a.definite && (i.definite = !1)
                let l = eR(i, a),
                  s = eR(i, g.number),
                  d = eM(i)
                return (
                  e3(e, i, r, o, (e) => {
                    ;(e.write(`let ${d} = ${l}(${o});`),
                      e.write(
                        `if (${d} === INVALID && typeof ${o} === "string" && ${s}.test(${o})) ${d} = ${l}(Number(${o}));`,
                      ),
                      t
                        ? e.write(`if (${d} === INVALID) { ${u}[${o}] = ${r}[${o}]; continue; }`)
                        : e.write(`if (${d} === INVALID) return INVALID;`),
                      e.write(`if (${d} === "__proto__") continue;`))
                    let a = eM(i)
                    e.write(`const ${a} = ${r}[${o}];`)
                    let c = eG(e, i, n.valueType, a)
                    e.write(`${u}[${d}] = ${c};`)
                  }),
                  u
                )
              }
              return (
                e3(
                  e,
                  i,
                  r,
                  o,
                  (e) => {
                    e.write(`const ${l} = ${r}[${o}];`)
                    let t = eG(e, i, n.valueType, l)
                    e.write(`${u}[${o}] = ${t};`)
                  },
                  "return INVALID;",
                ),
                u
              )
            })(e, i, t, r)
            break
          case "map":
            let ea, eu, eo, el
            ;((A = e),
              (z = i),
              (Z = t),
              (L = r),
              (ea = Z._zod.def),
              A.write(`if (!(${L} instanceof Map)) return INVALID;`),
              e2(A, Z, `${L}.size`),
              (eu = eM(z)),
              (eo = eM(z)),
              (el = eM(z)),
              A.write(`const ${eu} = new Map();`),
              A.write(`for (const [${eo}, ${el}] of ${L}) {`),
              A.indented((e) => {
                let i = e6(e, z, ea.keyType, eo),
                  t = e6(e, z, ea.valueType, el)
                e.write(`${eu}.set(${i}, ${t});`)
              }),
              A.write("}"),
              (W = eu))
            break
          case "set":
            let es, ed, ec
            ;((T = e),
              (V = i),
              (E = t),
              (C = r),
              (es = E._zod.def),
              T.write(`if (!(${C} instanceof Set)) return INVALID;`),
              e2(T, E, `${C}.size`),
              (ed = eM(V)),
              (ec = eM(V)),
              T.write(`const ${ed} = new Set();`),
              T.write(`for (const ${ec} of ${C}) {`),
              T.indented((e) => {
                let i = e6(e, V, es.valueType, ec)
                e.write(`${ed}.add(${i});`)
              }),
              T.write("}"),
              (W = ed))
            break
          case "file":
            ;((R = e), (J = r), R.write(`if (!(${J} instanceof File)) return INVALID;`), (W = J))
            break
          case "template_literal":
            W = (function (e, i, t, r) {
              e.write(`if (typeof ${r} !== "string") return INVALID;`)
              let n = t._zod.pattern
              if (n) {
                let t = eR(i, n)
                ;(e.write(`${t}.lastIndex = 0;`), e.write(`if (!${t}.test(${r})) return INVALID;`))
              }
              return r
            })(e, i, t, r)
            break
          case "lazy":
            let em, ev, ef
            ;((M = e),
              (B = i),
              (G = t),
              (F = r),
              (em = eJ(B, G._zod.def.getter)),
              (ev = eR(B, { parser: null })),
              M.write(`if (!${ev}.parser) {`),
              M.indented((e) => {
                ;(e.write(`const inner = ${em}();`),
                  e.write(`${ev}.parser = function(input) {`),
                  e.indented((e) => {
                    ;(e.write("const result = inner._zod.run({ value: input, issues: [] }, {});"),
                      e.write("return result.issues.length === 0 ? result.value : INVALID;"))
                  }),
                  e.write("};"))
              }),
              M.write("}"),
              (ef = eM(B)),
              M.write(`const ${ef} = ${ev}.parser(${F});`),
              M.write(`if (${ef} === INVALID) return INVALID;`),
              (W = ef))
            break
          case "pipe":
            W = (function (e, i, t, r) {
              let n = t._zod.def,
                a = e6(e, i, n.in, r)
              if (!n.transform) return e6(e, i, n.out, a)
              {
                if (e5(n.transform)) throw new eL("z.compile: async transforms in pipes are not supported")
                let t = n.transform,
                  r = eJ(i, (e) => {
                    let i = { value: e, issues: [], addIssue: eH },
                      r = t(e, i)
                    return r instanceof Promise ? ez : 0 === i.issues.length ? r : ez
                  }),
                  u = eM(i)
                return (
                  e.write(`const ${u} = ${r}(${a});`),
                  e.write(`if (${u} === INVALID) return INVALID;`),
                  e6(e, i, n.out, u)
                )
              }
            })(e, i, t, r)
            break
          case "custom":
            W = (function (e, i, t, r) {
              let n = t._zod.def
              if (n.fn) {
                if (e5(n.fn)) throw new eL("z.compile: async custom predicates are not supported")
                let t = eJ(i, n.fn),
                  a = eR(i, eY),
                  u = eM(i)
                ;(e.write(`const ${u} = ${t}(${r});`),
                  e.write(`if (${u} instanceof Promise) ${a}();`),
                  e.write(`if (!${u}) return INVALID;`))
              } else throw new eT("custom schema without a predicate function")
              return r
            })(e, i, t, r)
            break
          case "transform":
            W = (function (e, i, t, r) {
              let n = t._zod.def
              if (n.transform) {
                if (e5(n.transform)) throw new eL("z.compile: async transforms are not supported")
                let t = n.transform,
                  a = eJ(i, (e) => {
                    let i = { value: e, issues: [], addIssue: eH },
                      r = t(e, i)
                    return r instanceof Promise ? ez : 0 === i.issues.length ? r : ez
                  }),
                  u = eM(i)
                return (e.write(`const ${u} = ${a}(${r});`), e.write(`if (${u} === INVALID) return INVALID;`), u)
              }
              return r
            })(e, i, t, r)
            break
          case "catch":
            W = (function (e, i, t, r) {
              let n = t._zod.def
              if (!n.catchValue[$.CONSTANT_CATCH])
                throw new eT("catch with a callback (only a constant catch value compiles)", !1)
              let a = eM(i)
              ;(e.write(`let ${a} = (() => {`),
                e.indented((e) => {
                  let t = eG(e, i, n.innerType, r)
                  e.write(`return ${t};`)
                }),
                e.write("})();"))
              let u = eR(i, n.innerType),
                o = eJ(i, n.catchValue),
                l = eR(i, e8)
              return (
                e.write(`if (${a} === INVALID) {`),
                e.indented((e) => {
                  ;(e.write(`${a} = ${l}(${u}, ${o}, ${r});`), e.write(`if (${a} === INVALID) return INVALID;`))
                }),
                e.write("}"),
                a
              )
            })(e, i, t, r)
            break
          default:
            throw new eT(`schema type ${q}`)
        }
        return null === W
          ? null
          : (function (e, i, t, r) {
              let n = t._zod.def.checks
              if (!n || 0 === n.length) return r
              let a = r
              for (let t of n) {
                let r = t._zod.def
                if (r.when && !eF.has(r.check)) throw new eT('check with a custom "when" condition')
                switch (r.check) {
                  case "greater_than":
                    !(function (e, i, t, r) {
                      let n = t.inclusive ? "<" : "<="
                      e.write(`if (${r} ${n} ${eq(i, t.value)}) return INVALID;`)
                    })(e, i, r, a)
                    break
                  case "less_than":
                    !(function (e, i, t, r) {
                      let n = t.inclusive ? ">" : ">="
                      e.write(`if (${r} ${n} ${eq(i, t.value)}) return INVALID;`)
                    })(e, i, r, a)
                    break
                  case "multiple_of":
                    !(function (e, i, t, r) {
                      if ("bigint" == typeof t.value) {
                        if (t.value === BigInt(0)) throw new eT("multiple_of check with a zero divisor")
                        e.write(`if (${r} % ${t.value}n !== 0n) return INVALID;`)
                      } else {
                        let n = eR(i, $.floatSafeRemainder)
                        e.write(`if (${n}(${r}, ${eK(t.value, "multiple_of")}) !== 0) return INVALID;`)
                      }
                    })(e, i, r, a)
                    break
                  case "number_format":
                    eX(e, r, a)
                    break
                  case "min_length": {
                    let t = eK(r.minimum, "min_length"),
                      n = eW(e, i, a, `${a}.length >= ${t} && ${a}.length < ${2 * r.minimum}`)
                    e.write(`if (${n} < ${t}) return INVALID;`)
                    break
                  }
                  case "max_length": {
                    let t = eK(r.maximum, "max_length"),
                      n = eW(e, i, a, `${a}.length > ${t}`)
                    e.write(`if (${n} > ${t}) return INVALID;`)
                    break
                  }
                  case "length_equals": {
                    let t = eK(r.length, "length_equals"),
                      n = eW(e, i, a, `${a}.length >= ${t} && ${a}.length <= ${2 * r.length}`)
                    e.write(`if (${n} !== ${t}) return INVALID;`)
                    break
                  }
                  case "min_size":
                    e.write(`if (${a}.size < ${eK(r.minimum, "min_size")}) return INVALID;`)
                    break
                  case "max_size":
                    e.write(`if (${a}.size > ${eK(r.maximum, "max_size")}) return INVALID;`)
                    break
                  case "size_equals":
                    e.write(`if (${a}.size !== ${eK(r.size, "size_equals")}) return INVALID;`)
                    break
                  case "string_format":
                    a = e4(e, i, r, a)
                    break
                  case "custom":
                    a = (function (e, i, t, r) {
                      let n = t._zod.def
                      if (n.fn) {
                        if (e5(n.fn)) throw new eL("z.compile: async .refine() predicates are not supported")
                        let t = eJ(i, n.fn),
                          a = eR(i, eY),
                          u = eM(i)
                        return (
                          e.write(`const ${u} = ${t}(${r});`),
                          e.write(`if (${u} instanceof Promise) ${a}();`),
                          e.write(`if (!${u}) return INVALID;`),
                          r
                        )
                      }
                      if (t._zod.check) {
                        if (e5(t._zod.check))
                          throw new eL("z.compile: async .superRefine() / check functions are not supported")
                        let n = t._zod.check,
                          a = eJ(i, (e) => {
                            let i = { value: e, issues: [], addIssue: eH }
                            return (n(i) instanceof Promise && eY(), 0 === i.issues.length ? i.value : ez)
                          }),
                          u = eM(i)
                        return (
                          e.write(`const ${u} = ${a}(${r});`),
                          e.write(`if (${u} === INVALID) return INVALID;`),
                          u
                        )
                      }
                      throw new eT("custom check without a predicate or check function")
                    })(e, i, t, a)
                    break
                  case "bigint_format":
                    !(function (e, i, t) {
                      let r = i.format
                      if (r)
                        switch (r) {
                          case "int64":
                            e.write(`if (${t} < -9223372036854775808n || ${t} > 9223372036854775807n) return INVALID;`)
                            break
                          case "uint64":
                            e.write(`if (${t} < 0n || ${t} > 18446744073709551615n) return INVALID;`)
                            break
                          default:
                            throw new eT(`bigint format ${r}`)
                        }
                    })(e, r, a)
                    break
                  case "mime_type":
                    !(function (e, i, t, r) {
                      let n = t.mime
                      if (n && n.length > 0) {
                        let t = eR(i, new Set(n))
                        e.write(`if (!${t}.has(${r}.type)) return INVALID;`)
                      }
                    })(e, i, r, a)
                    break
                  case "property":
                    !(function (e, i, t, r) {
                      let n = `${r}[${JSON.stringify(t.property)}]`
                      e6(e, i, t.schema, n)
                    })(e, i, r, a)
                    break
                  case "properties":
                    !(function (e, i, t, r) {
                      if (t.when) throw new eT('check with a custom "when" condition')
                      e.write(`if (${r} == null) return INVALID;`)
                      let n = t.shape
                      for (let t of Reflect.ownKeys(n)) {
                        let a = "symbol" == typeof t ? eR(i, t) : $.esc(t),
                          u = eM(i)
                        ;(e.write(`const ${u} = ${r}[${a}];`), eG(e, i, n[t], u, !1))
                      }
                    })(e, i, r, a)
                    break
                  case "overwrite": {
                    let r = eM(i)
                    ;((function (e, i, t, r, n) {
                      let a = t._zod.def.tx
                      if (!a) throw new eT("overwrite check without a transform function")
                      if (e5(a)) throw new eL("z.compile: async overwrite transforms are not supported")
                      let u = eR(i, a)
                      e.write(`const ${n} = ${u}(${r});`)
                    })(e, i, t, a, r),
                      (a = r))
                    break
                  }
                  default:
                    throw new eT(`check type ${r.check}`)
                }
              }
              return a
            })(e, i, t, W)
      }
      function e1(e) {
        return "optional" === e._zod.optin && "optional" === e._zod.optout
      }
      function e0(e) {
        return (
          ("defaulted" !== e._zod.optin || "optional" === e._zod.optout) &&
          (function e(i) {
            let t = i._zod.def
            switch (t.type) {
              case "string":
              case "number":
              case "boolean":
              case "bigint":
              case "symbol":
              case "null":
              case "nan":
              case "date":
              case "object":
              case "array":
              case "tuple":
              case "record":
              case "map":
              case "set":
              case "file":
              case "template_literal":
              case "never":
              case "success":
                return !1
              case "literal":
                return !!t.values?.includes(void 0)
              case "enum":
                return !!i._zod.values?.has(void 0)
              case "optional":
              default:
                return !0
              case "nullable":
              case "readonly":
              case "nonoptional":
                return !t.innerType || e(t.innerType)
              case "union":
                return !t.options || t.options.some(e)
              case "intersection":
                return !t.left || !t.right || e(t.left) || e(t.right)
              case "pipe":
                return !t.out || e(t.out)
            }
          })(e)
        )
      }
      function e2(e, i, t) {
        for (let [r, n] of $.sizeCaps(i._zod.def.checks))
          e.write(`if (${t} > ${eK(r, n._zod.def.check)}) return INVALID;`)
      }
      function e9(e, i, t, r) {
        return e6(e, i, t._zod.def.innerType, r)
      }
      function e7(e, i) {
        for (let t = e.length - 1; t >= 0; t--)
          if (!("optin" === i ? void 0 !== e[t]._zod.optin : "optional" === e[t]._zod.optout)) return t + 1
        return 0
      }
      function e3(e, i, t, r, n, a) {
        let u = eR(i, Object.prototype.propertyIsEnumerable),
          o = eM(i),
          l = eM(i),
          s = eM(i)
        ;(e.write(`const ${o} = Object.getOwnPropertySymbols(${t});`),
          e.write(`const ${l} = Object.getOwnPropertyNames(${t});`),
          e.write(`for (let ${s} = 0; ${s} < ${l}.length; ${s}++) {`),
          e.indented((e) => {
            ;(e.write(`const ${r} = ${l}[${s}];`),
              e.write(`if (${r} === "__proto__" || !${u}.call(${t}, ${r})) continue;`),
              n(e))
          }),
          e.write("}"),
          e.write(`for (let ${s} = 0; ${s} < ${o}.length; ${s}++) {`),
          e.indented((e) => {
            ;(e.write(`const ${r} = ${o}[${s}];`),
              e.write(`if (!${u}.call(${t}, ${r})) continue;`),
              a ? e.write(a) : n(e))
          }),
          e.write("}"))
      }
      function e5(e) {
        return (
          "function" == typeof e &&
          ("AsyncFunction" === e.constructor.name || "AsyncFunction" === e[Symbol.toStringTag])
        )
      }
      function e8(e, i, t) {
        let r = e._zod.run({ value: t, issues: [] }, {})
        return r && "function" == typeof r.then ? ez : 0 === r.issues.length ? r.value : i()
      }
      var ie = t(69580),
        ii = t(78468),
        it = t(69150)
      class ir {
        get metadataRegistry() {
          return this.ctx.metadataRegistry
        }
        get target() {
          return this.ctx.target
        }
        get unrepresentable() {
          return this.ctx.unrepresentable
        }
        get override() {
          return this.ctx.override
        }
        get io() {
          return this.ctx.io
        }
        get counter() {
          return this.ctx.counter
        }
        set counter(e) {
          this.ctx.counter = e
        }
        get seen() {
          return this.ctx.seen
        }
        constructor(e) {
          let i = e?.target ?? "draft-2020-12"
          ;("draft-4" === i && (i = "draft-04"),
            "draft-7" === i && (i = "draft-07"),
            (this.ctx = (0, ii.az)({
              processors: it.Df,
              target: i,
              ...(e?.metadata && { metadata: e.metadata }),
              ...(e?.unrepresentable && { unrepresentable: e.unrepresentable }),
              ...(e?.override && { override: e.override }),
              ...(e?.io && { io: e.io }),
            })))
        }
        process(e, i = { path: [], schemaPath: [] }) {
          return (0, ii.Lp)(e, this.ctx, i)
        }
        emit(e, i) {
          ;(i &&
            (i.cycles && (this.ctx.cycles = i.cycles),
            i.reused && (this.ctx.reused = i.reused),
            i.external && (this.ctx.external = i.external)),
            (this.ctx.sharedDefsExtractedFor = void 0),
            (this.ctx.sharedEmitDoneFor = void 0),
            (0, ii.Wb)(this.ctx, e))
          let { "~standard": t, ...r } = (0, ii.jE)(this.ctx, e)
          return r
        }
      }
      var ia = t(35553),
        iu = t(13082),
        io = t(80554),
        il = t(64839),
        is = t(95908)
      let id = { ...ia, ...u, iso: is },
        ic = new Set([
          "$schema",
          "$ref",
          "$defs",
          "definitions",
          "$id",
          "id",
          "$comment",
          "$anchor",
          "$vocabulary",
          "$dynamicRef",
          "$dynamicAnchor",
          "type",
          "enum",
          "const",
          "anyOf",
          "oneOf",
          "allOf",
          "not",
          "properties",
          "required",
          "additionalProperties",
          "patternProperties",
          "propertyNames",
          "minProperties",
          "maxProperties",
          "items",
          "prefixItems",
          "additionalItems",
          "minItems",
          "maxItems",
          "uniqueItems",
          "contains",
          "minContains",
          "maxContains",
          "minLength",
          "maxLength",
          "pattern",
          "format",
          "minimum",
          "maximum",
          "exclusiveMinimum",
          "exclusiveMaximum",
          "multipleOf",
          "description",
          "default",
          "contentEncoding",
          "contentMediaType",
          "contentSchema",
          "unevaluatedItems",
          "unevaluatedProperties",
          "if",
          "then",
          "else",
          "dependentSchemas",
          "dependentRequired",
          "nullable",
          "readOnly",
        ])
      function im(e, i) {
        return e.map((e, t) => (t < i ? e : e.optional()))
      }
      let iv = new Set([
          "items",
          "prefixItems",
          "additionalItems",
          "additionalProperties",
          "contains",
          "propertyNames",
          "not",
          "if",
          "then",
          "else",
          "allOf",
          "anyOf",
          "oneOf",
          "unevaluatedItems",
          "unevaluatedProperties",
          "contentSchema",
        ]),
        i$ = new Set(["properties", "patternProperties", "dependentSchemas", "dependencies", "$defs", "definitions"])
      function ig(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          (Array.isArray(e)
            ? e.some(ig)
            : "string" == typeof e.$ref ||
              Object.entries(e).some(([e, i]) =>
                iv.has(e) ? ig(i) : !!i$.has(e) && "object" == typeof i && null !== i && Object.values(i).some(ig),
              ))
        )
      }
      function ip(e) {
        return 1 === e ? "element" : "elements"
      }
      function ib(e, i) {
        if (!1 !== e) return void 0 === e || !0 === e ? id.any() : iy(e, i)
      }
      let ix = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)$/
      function iy(e, i) {
        if ("boolean" == typeof e) return e ? id.any() : id.never()
        let t = (function e(i, t) {
            var r, n, a, u
            let o
            if (void 0 !== i.not) {
              if ("object" == typeof i.not && 0 === Object.keys(i.not).length) return id.never()
              throw Error("not is not supported in Zod (except { not: {} } for never)")
            }
            if (void 0 !== i.unevaluatedItems) throw Error("unevaluatedItems is not supported")
            if (void 0 !== i.unevaluatedProperties) throw Error("unevaluatedProperties is not supported")
            if (void 0 !== i.if || void 0 !== i.then || void 0 !== i.else)
              throw Error("Conditional schemas (if/then/else) are not supported")
            if (void 0 !== i.dependentSchemas || void 0 !== i.dependentRequired)
              throw Error("dependentSchemas and dependentRequired are not supported")
            if (i.$ref) {
              let e = i.$ref
              if (t.refs.has(e)) return t.refs.get(e)
              if (t.processing.has(e))
                return id.lazy(() => {
                  if (!t.refs.has(e)) throw Error(`Circular reference not resolved: ${e}`)
                  return t.refs.get(e)
                })
              t.processing.add(e)
              let r = iy(
                (function (e, i) {
                  if (!e.startsWith("#"))
                    throw Error("External $ref is not supported, only local refs (#/...) are allowed")
                  let t = e.slice(1).split("/").filter(Boolean)
                  if (0 === t.length) return i.rootSchema
                  let r = "draft-2020-12" === i.version ? "$defs" : "definitions"
                  if (t[0] === r) {
                    let r = void 0 === t[1] ? void 0 : t[1].replace(/~1/g, "/").replace(/~0/g, "~")
                    if (!r || !i.defs[r]) throw Error(`Reference not found: ${e}`)
                    return i.defs[r]
                  }
                  throw Error(`Reference not found: ${e}`)
                })(e, t),
                t,
              )
              return (t.refs.set(e, r), t.processing.delete(e), r)
            }
            if (void 0 !== i.enum) {
              let e = i.enum
              if ("openapi-3.0" === t.version && !0 === i.nullable && 1 === e.length && null === e[0]) return id.null()
              if (0 === e.length) return id.never()
              if (1 === e.length) return id.literal(e[0])
              if (e.every((e) => "string" == typeof e)) return id.enum(e)
              let r = e.map((e) => id.literal(e))
              return r.length < 2 ? r[0] : id.union([r[0], r[1], ...r.slice(2)])
            }
            if (void 0 !== i.const) return id.literal(i.const)
            let l = i.type
            if (Array.isArray(l)) {
              let r = l.map((r) => e({ ...i, type: r }, t))
              return 0 === r.length ? id.never() : 1 === r.length ? r[0] : id.union(r)
            }
            if (!l) return id.any()
            switch (l) {
              case "string": {
                let e = id.string()
                if (i.format) {
                  let t = i.format
                  "email" === t
                    ? (e = e.check(id.email()))
                    : "uri" === t || "uri-reference" === t
                      ? (e = e.check(id.url()))
                      : "uuid" === t || "guid" === t
                        ? (e = e.check(id.uuid()))
                        : "date-time" === t
                          ? (e = e.check(id.iso.datetime({ offset: !0 })))
                          : "date" === t
                            ? (e = e.check(id.iso.date()))
                            : "time" === t
                              ? (e = e.check(id.regex(ix)))
                              : "duration" === t
                                ? (e = e.check(id.iso.duration()))
                                : "hostname" === t
                                  ? (e = e.check(id.hostname()))
                                  : "ipv4" === t
                                    ? (e = e.check(id.ipv4()))
                                    : "ipv6" === t
                                      ? (e = e.check(id.ipv6()))
                                      : "mac" === t
                                        ? (e = e.check(id.mac()))
                                        : "cidr" === t
                                          ? (e = e.check(id.cidrv4()))
                                          : "cidr-v6" === t
                                            ? (e = e.check(id.cidrv6()))
                                            : "base64" === t
                                              ? (e = e.check(id.base64()))
                                              : "base64url" === t
                                                ? (e = e.check(id.base64url()))
                                                : "e164" === t
                                                  ? (e = e.check(id.e164()))
                                                  : "credit_card" === t
                                                    ? (e = e.check(id.creditCard()))
                                                    : "iban" === t
                                                      ? (e = e.check(id.iban()))
                                                      : "jwt" === t
                                                        ? (e = e.check(id.jwt()))
                                                        : "emoji" === t
                                                          ? (e = e.check(id.emoji()))
                                                          : "nanoid" === t
                                                            ? (e = e.check(id.nanoid()))
                                                            : "cuid" === t
                                                              ? (e = e.check(id.cuid()))
                                                              : "cuid2" === t
                                                                ? (e = e.check(id.cuid2()))
                                                                : "ulid" === t
                                                                  ? (e = e.check(id.ulid()))
                                                                  : "xid" === t
                                                                    ? (e = e.check(id.xid()))
                                                                    : "ksuid" === t && (e = e.check(id.ksuid()))
                }
                ;("number" == typeof i.minLength && (e = e.min(i.minLength)),
                  "number" == typeof i.maxLength && (e = e.max(i.maxLength)),
                  i.pattern && (e = e.regex(new RegExp(i.pattern))),
                  (o = e))
                break
              }
              case "number":
              case "integer": {
                let e = "integer" === l ? id.number().int() : id.number()
                ;("number" == typeof i.minimum && !0 !== i.exclusiveMinimum && (e = e.min(i.minimum)),
                  "number" == typeof i.maximum && !0 !== i.exclusiveMaximum && (e = e.max(i.maximum)),
                  "number" == typeof i.exclusiveMinimum
                    ? (e = e.gt(i.exclusiveMinimum))
                    : !0 === i.exclusiveMinimum && "number" == typeof i.minimum && (e = e.gt(i.minimum)),
                  "number" == typeof i.exclusiveMaximum
                    ? (e = e.lt(i.exclusiveMaximum))
                    : !0 === i.exclusiveMaximum && "number" == typeof i.maximum && (e = e.lt(i.maximum)),
                  "number" == typeof i.multipleOf && (e = e.multipleOf(i.multipleOf)),
                  (o = e))
                break
              }
              case "boolean":
                o = id.boolean()
                break
              case "null":
                o = id.null()
                break
              case "object": {
                let e = {},
                  a = i.properties || {},
                  u = new Set(i.required || []),
                  l = "object" == typeof i.additionalProperties ? iy(i.additionalProperties, t) : void 0
                for (let [i, r] of Object.entries(a)) {
                  let n = iy(r, t)
                  ;(0, $.assignProp)(e, i, u.has(i) ? n : n.optional())
                }
                if (i.patternProperties) {
                  let r = i.patternProperties,
                    n = Object.keys(r),
                    a = []
                  for (let e of n) {
                    let i = iy(r[e], t),
                      n = id.string().regex(new RegExp(e))
                    a.push(id.looseRecord(n, i))
                  }
                  let u = []
                  if ((Object.keys(e).length > 0 && u.push(id.object(e).passthrough()), u.push(...a), 0 === u.length))
                    o = id.object({}).passthrough()
                  else if (1 === u.length) o = u[0]
                  else {
                    let e = id.intersection(u[0], u[1])
                    for (let i = 2; i < u.length; i++) e = id.intersection(e, u[i])
                    o = e
                  }
                  if (!1 === i.additionalProperties) {
                    let i = Object.keys(e),
                      t = n.map((e) => new RegExp(e)),
                      r = o
                    o = o.check((e) => {
                      if (!(0, $.isPlainObject)(e.value)) return
                      let n = []
                      for (let r of Object.keys(e.value)) !i.includes(r) && (t.some((e) => e.test(r)) || n.push(r))
                      n.length && e.issues.push({ code: "unrecognized_keys", keys: n, input: e.value, inst: r })
                    })
                  }
                } else {
                  let t = id.object(e)
                  o = !1 === i.additionalProperties ? t.strict() : l ? t.catchall(l) : t.passthrough()
                }
                let s = void 0 !== i.propertyNames && !0 !== i.propertyNames,
                  d = "number" == typeof i.minProperties ? i.minProperties : void 0,
                  c = "number" == typeof i.maxProperties ? i.maxProperties : void 0
                if (s || void 0 !== d || void 0 !== c) {
                  let e
                  ;(s &&
                    (e = iy(
                      "object" == typeof i.propertyNames && void 0 === i.propertyNames.type
                        ? { type: "string", ...i.propertyNames }
                        : i.propertyNames,
                      t,
                    )),
                    (r = o),
                    (n = { keySchema: e, minProperties: d, maxProperties: c }),
                    (o = id
                      .transform((e) => e)
                      .check((e) => {
                        let i = e.value
                        if ("object" != typeof i || null === i || Array.isArray(i)) return
                        let t = Object.getOwnPropertyNames(i)
                        if (
                          (void 0 !== n.minProperties &&
                            t.length < n.minProperties &&
                            e.issues.push({
                              origin: "object",
                              code: "too_small",
                              minimum: n.minProperties,
                              inclusive: !0,
                              message: `Too small: expected object to have >=${n.minProperties} properties`,
                              input: i,
                              inst: r,
                              continue: !0,
                            }),
                          void 0 !== n.maxProperties &&
                            t.length > n.maxProperties &&
                            e.issues.push({
                              origin: "object",
                              code: "too_big",
                              maximum: n.maxProperties,
                              inclusive: !0,
                              message: `Too big: expected object to have <=${n.maxProperties} properties`,
                              input: i,
                              inst: r,
                              continue: !0,
                            }),
                          n.keySchema)
                        )
                          for (let i of t) {
                            let t = n.keySchema.safeParse(i)
                            t.success ||
                              e.issues.push({
                                code: "invalid_key",
                                origin: "record",
                                issues: t.error.issues,
                                input: i,
                                path: [i],
                                continue: !0,
                              })
                          }
                      })
                      .pipe(r)))
                }
                break
              }
              case "array": {
                let e = i.prefixItems,
                  r = i.items
                if (e && Array.isArray(e)) {
                  let n = "number" == typeof i.minItems ? i.minItems : 0,
                    a = im(
                      e.map((e) => iy(e, t)),
                      n,
                    ),
                    u = Array.isArray(r) ? void 0 : ib(r, t),
                    l = id.tuple(a)
                  ;((o = u ? l.rest(u) : l),
                    "number" == typeof i.minItems && (o = o.check(id.minLength(i.minItems))),
                    "number" == typeof i.maxItems && (o = o.check(id.maxLength(i.maxItems))))
                } else if (Array.isArray(r)) {
                  let e = "number" == typeof i.minItems ? i.minItems : 0,
                    n = im(
                      r.map((e) => iy(e, t)),
                      e,
                    ),
                    a = ib(i.additionalItems, t),
                    u = id.tuple(n)
                  ;((o = a ? u.rest(a) : u),
                    "number" == typeof i.minItems && (o = o.check(id.minLength(i.minItems))),
                    "number" == typeof i.maxItems && (o = o.check(id.maxLength(i.maxItems))))
                } else if (void 0 !== r) {
                  let e = iy(r, t),
                    n = id.array(e)
                  ;("number" == typeof i.minItems && (n = n.min(i.minItems)),
                    "number" == typeof i.maxItems && (n = n.max(i.maxItems)),
                    (o = n))
                } else o = id.array(id.any())
                ;(!0 === i.uniqueItems || void 0 !== i.contains) &&
                  ((a = o),
                  (u = {
                    uniqueItems: !0 === i.uniqueItems,
                    containsSchema: void 0 !== i.contains ? iy(i.contains, t) : void 0,
                    minContains: "number" == typeof i.minContains ? i.minContains : void 0,
                    maxContains: "number" == typeof i.maxContains ? i.maxContains : void 0,
                  }),
                  (o = id
                    .transform((e) => e)
                    .check((e) => {
                      let i = e.value
                      if (Array.isArray(i)) {
                        if (!0 === u.uniqueItems) {
                          let t = new Map()
                          for (let r = 0; r < i.length; r++) {
                            let n = (function e(i, t) {
                              if (null === i) return "z"
                              let r = typeof i
                              if ("object" !== r) {
                                if ("number" === r && Number.isNaN(i)) return null
                                let e = String(i)
                                return `${r[0]}${e.length}:${e}`
                              }
                              if (t.has(i)) return null
                              t.add(i)
                              try {
                                if (Array.isArray(i)) {
                                  let r = []
                                  for (let n of i) {
                                    let i = e(n, t)
                                    if (null === i) return null
                                    r.push(i)
                                  }
                                  return `a${r.length}:[${r.join(",")}]`
                                }
                                let r = Object.keys(i).sort(),
                                  n = []
                                for (let a of r) {
                                  let r = e(i[a], t)
                                  if (null === r) return null
                                  n.push(`${a.length}:${a}=${r}`)
                                }
                                return `o${n.length}:{${n.join(",")}}`
                              } finally {
                                t.delete(i)
                              }
                            })(i[r], new Set())
                            if (null === n) continue
                            let a = t.get(n)
                            if (void 0 === a) {
                              t.set(n, r)
                              continue
                            }
                            e.issues.push({
                              code: "custom",
                              message: `Array items must be unique: element at index ${r} duplicates the one at index ${a}`,
                              input: i,
                              path: [r],
                              continue: !0,
                            })
                          }
                        }
                        if (u.containsSchema) {
                          let t = u.minContains ?? 1,
                            r = void 0 !== u.maxContains ? u.maxContains + 1 : 1 / 0,
                            n = 0
                          for (let e of i) if (u.containsSchema.safeParse(e).success && ++n >= r) break
                          ;(n < t &&
                            e.issues.push({
                              code: "custom",
                              message: `Array must contain at least ${t} matching ${ip(t)}; found ${n}`,
                              input: i,
                              continue: !0,
                            }),
                            void 0 !== u.maxContains &&
                              n > u.maxContains &&
                              e.issues.push({
                                code: "custom",
                                message: `Array must contain at most ${u.maxContains} matching ${ip(u.maxContains)}`,
                                input: i,
                                continue: !0,
                              }))
                        }
                      }
                    })
                    .pipe(a)))
                break
              }
              default:
                throw Error(`Unsupported type: ${l}`)
            }
            return o
          })(e, i),
          r = e.type || void 0 !== e.enum || void 0 !== e.const
        if (e.anyOf && Array.isArray(e.anyOf)) {
          let n = e.anyOf.map((e) => iy(e, i)),
            a = id.union(n)
          t = r ? id.intersection(t, a) : a
        }
        if (e.oneOf && Array.isArray(e.oneOf)) {
          let n = e.oneOf.map((e) => iy(e, i)),
            a = id.xor(n)
          t = r ? id.intersection(t, a) : a
        }
        if (e.allOf && Array.isArray(e.allOf))
          if (0 === e.allOf.length) t = r ? t : id.any()
          else {
            let n = r ? t : iy(e.allOf[0], i),
              a = +!r
            for (let t = a; t < e.allOf.length; t++) n = id.intersection(n, iy(e.allOf[t], i))
            t = n
          }
        ;(!0 === e.nullable && "openapi-3.0" === i.version && (t = id.nullable(t)),
          !0 === e.readOnly && (t = id.readonly(t)),
          void 0 !== e.default && (t = t.default(e.default)))
        let n = {}
        for (let i of ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"])
          i in e && (n[i] = e[i])
        for (let i of ["contentEncoding", "contentMediaType", "contentSchema"]) i in e && (n[i] = e[i])
        if ("object" === e.type && void 0 === e.$ref)
          for (let i of (void 0 === e.propertyNames || ig(e.propertyNames) || (n.propertyNames = e.propertyNames),
          ["minProperties", "maxProperties"]))
            void 0 !== e[i] && (n[i] = e[i])
        if ("array" === e.type && void 0 === e.$ref)
          for (let i of (void 0 === e.contains || ig(e.contains) || (n.contains = e.contains),
          ["uniqueItems", "minContains", "maxContains"]))
            void 0 !== e[i] && (n[i] = e[i])
        for (let i of Object.keys(e)) ic.has(i) || (0, $.assignProp)(n, i, e[i])
        return (Object.keys(n).length > 0 && i.registry.add(t, n), e.description && (t = t.describe(e.description)), t)
      }
      function i_(e, i) {
        var t, r
        let n, a
        if ("boolean" == typeof e) return e ? id.any() : id.never()
        try {
          n = JSON.parse(JSON.stringify(e))
        } catch {
          throw Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas")
        }
        let u = {
          version:
            ((t = n),
            (r = i?.defaultTarget),
            "https://json-schema.org/draft/2020-12/schema" === (a = t.$schema)
              ? "draft-2020-12"
              : "http://json-schema.org/draft-07/schema#" === a
                ? "draft-7"
                : "http://json-schema.org/draft-04/schema#" === a
                  ? "draft-4"
                  : (r ?? "draft-2020-12")),
          defs: n.$defs || n.definitions || {},
          refs: new Map(),
          processing: new Set(),
          rootSchema: n,
          registry: i?.registry ?? eP.fd,
        }
        return iy(n, u)
      }
      let iI = Symbol("z.visit/resolving")
      function ik(e, i) {
        let t =
            "function" == typeof i
              ? i
              : (e, t) => {
                  let r = i[e._zod.def.type]
                  return r ? r(e, t) : e
                },
          r = new Map()
        return (function e(i) {
          let n = r.get(i)
          if (n === iI) return new c.kU({ type: "lazy", getter: () => r.get(i) })
          if (void 0 !== n) return n
          r.set(i, iI)
          let a = (function (i) {
              let t = i._zod.def
              switch (t.type) {
                case "object": {
                  let r = t.shape,
                    n = Object.keys(r),
                    a = !1,
                    u = {}
                  for (let i of n) {
                    let t = e(r[i])
                    ;(t !== r[i] && (a = !0), (u[i] = t))
                  }
                  let o = t.catchall
                  return (
                    t.catchall && (o = e(t.catchall)) !== t.catchall && (a = !0),
                    a ? (0, $.clone)(i, { ...t, shape: u, catchall: o }) : i
                  )
                }
                case "array": {
                  let r = e(t.element)
                  return r === t.element ? i : (0, $.clone)(i, { ...t, element: r })
                }
                case "tuple": {
                  let r = t.items,
                    n = !1,
                    a = []
                  for (let i of r) {
                    let t = e(i)
                    ;(t !== i && (n = !0), a.push(t))
                  }
                  let u = t.rest
                  return (
                    t.rest && (u = e(t.rest)) !== t.rest && (n = !0),
                    n ? (0, $.clone)(i, { ...t, items: a, rest: u }) : i
                  )
                }
                case "record":
                case "map": {
                  let r = e(t.keyType),
                    n = e(t.valueType)
                  return r === t.keyType && n === t.valueType ? i : (0, $.clone)(i, { ...t, keyType: r, valueType: n })
                }
                case "set": {
                  let r = e(t.valueType)
                  return r === t.valueType ? i : (0, $.clone)(i, { ...t, valueType: r })
                }
                case "union": {
                  let r = t.options,
                    n = !1,
                    a = []
                  for (let i of r) {
                    let t = e(i)
                    ;(t !== i && (n = !0), a.push(t))
                  }
                  return n ? (0, $.clone)(i, { ...t, options: a }) : i
                }
                case "intersection": {
                  let r = e(t.left),
                    n = e(t.right)
                  return r === t.left && n === t.right ? i : (0, $.clone)(i, { ...t, left: r, right: n })
                }
                case "optional":
                case "nullable":
                case "default":
                case "prefault":
                case "catch":
                case "readonly":
                case "nonoptional":
                case "promise":
                case "success": {
                  let r = e(t.innerType)
                  return r === t.innerType ? i : (0, $.clone)(i, { ...t, innerType: r })
                }
                case "pipe": {
                  let r = e(t.in),
                    n = e(t.out)
                  return r === t.in && n === t.out ? i : (0, $.clone)(i, { ...t, in: r, out: n })
                }
                case "function": {
                  let r = e(t.input),
                    n = e(t.output)
                  return r === t.input && n === t.output ? i : (0, $.clone)(i, { ...t, input: r, output: n })
                }
                case "lazy": {
                  let r = t.getter,
                    { _cachedInner: n, ...a } = t
                  return (0, $.clone)(i, { ...a, getter: () => e(r()) })
                }
                default:
                  return i
              }
            })(i),
            u = t(a, a !== i)
          return (r.set(i, u), u)
        })(e)
      }
      function ih(e) {
        return ik(e, {
          object: (e) => e.partial(),
          union: (e) => {
            let i = e._zod.def
            return void 0 === i.discriminator ? e : ia.union(i.options)
          },
        })
      }
      function iw(e) {
        return (function (e, i) {
          if (!i?.length) return e
          let t = e._zod.def
          return (0, $.clone)(e, (0, $.mergeDefs)(t, { checks: [...(t.checks ?? []), ...i] }), { parent: !0 })
        })(e.out, e.checks)
      }
      function iS(e) {
        return ik(e, {
          pipe: (e) => {
            var i
            return (i = e._zod.def).in._zod.traits.has("$ZodTransform") ? iw(i) : i.in
          },
          default: (e, i) => (i ? ia.optional(e._zod.def.innerType) : e),
          catch: (e, i) => (i ? e._zod.def.innerType : e),
        })
      }
      function iU(e) {
        return ik(e, { pipe: (e) => iw(e._zod.def), prefault: (e, i) => (i ? e._zod.def.innerType : e) })
      }
      var iD = t(94240)
    },
    94240(e, i, t) {
      t.r(i)
      var r = t(69580),
        n = t(35553)
      t.d(
        i,
        {},
        {
          bigint: function (e) {
            return r.St(n.ZodBigInt, e)
          },
          boolean: function (e) {
            return r.dN(n.ZodBoolean, e)
          },
          date: function (e) {
            return r.B4(n.ZodDate, e)
          },
          number: function (e) {
            return r.qG(n.ZodNumber, e)
          },
          string: function (e) {
            return r.K_(n.ZodString, e)
          },
        },
      )
    },
    64839(e, i, t) {
      var r,
        n = t(23065)
      ;(r || (r = {}),
        t.d(
          i,
          { kY: () => r },
          {
            eq: {
              invalid_type: "invalid_type",
              too_big: "too_big",
              too_small: "too_small",
              invalid_format: "invalid_format",
              not_multiple_of: "not_multiple_of",
              unrecognized_keys: "unrecognized_keys",
              invalid_union: "invalid_union",
              invalid_key: "invalid_key",
              invalid_element: "invalid_element",
              invalid_value: "invalid_value",
              custom: "custom",
            },
            pJ: function (e) {
              n.$W({ customError: e })
            },
            si: function () {
              return n.$W().customError
            },
          },
        ))
    },
  }))
//# sourceMappingURL=early-bootstrap-406-6e51de9c79100899.js.map
