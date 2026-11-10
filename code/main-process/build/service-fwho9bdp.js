const e = require("./src-KMpTO78a.js"),
  t = require("./src-B6LqG3ek.js"),
  n = require("./logger-DkO6GWbX.js"),
  r = require("./electron-resources-path-BDLw2lp0.js");
let i = require("electron"),
  a = require("node:path");
a = e.o(a);
let o = require("node:fs"),
  s = require("node:module");
var c = `hid-topology-watcher.node`,
  l = `hid_topology_watcher.node`,
  u = (0, s.createRequire)(__filename);
function d(e) {
  return p().watch(e);
}
function f() {
  return p().findCodexMicroInterfaces();
}
function p() {
  let e = m().find(o.existsSync);
  if (e == null) throw Error(`HID topology watcher addon not found`);
  return u(e);
}
function m() {
  let e = a.default.join(
      i.app.getAppPath(),
      `native`,
      `hid-topology-watcher-addon`,
      `build`,
      `Release-${process.arch}`,
      l,
    ),
    t = r.t({ env: process.env, resourcesPath: process.resourcesPath });
  return t == null ? [e] : [a.default.join(t, `native`, c), e];
}
var h = 12346,
  g = 33632,
  _ = [33431, 33432],
  v = [g, ..._],
  y = 65280,
  b = (0, s.createRequire)(__filename),
  x = (0, s.createRequire)(b.resolve(`@worklouder/device-kit-oai`)),
  { ConnectionType: ee, DeviceLayoutType: S, DeviceType: C } = b(`@worklouder/device-kit-oai`);
async function te() {
  return ne(
    process.platform === `linux`
      ? (
          await Promise.all(
            v.map(async (e) => (await T().devicesAsync(h, e)).map((t) => ({ ...t, productId: e }))),
          )
        ).flat()
      : await f(),
  );
}
function ne(e) {
  return e
    .flatMap((e) => {
      let t = re(e.productId);
      return e.path == null || e.usagePage !== y || t == null
        ? []
        : [
            {
              portPath: e.path,
              devicePid: String(e.productId),
              connectionType: ee.hid,
              deviceType: t,
              layoutType: S.universal,
              isUsbConnection:
                e.transport === `usb` ||
                ((e.transport == null || e.transport === `unknown`) && e.release % 4 == 0),
            },
          ];
    })
    .toSorted((e, t) => {
      let n = Number(t.isUsbConnection) - Number(e.isUsbConnection);
      return n === 0 ? w(Number(e.devicePid)) - w(Number(t.devicePid)) : n;
    });
}
function w(e) {
  return v.findIndex((t) => t === e);
}
function re(e) {
  return e === g ? C.CodexMicro : _.some((t) => t === e) ? C.CreatorMicroV2 : null;
}
function T() {
  return (0, s.createRequire)(x.resolve(`@worklouder/wl-device-kit`))(`node-hid`);
}
var E = n.r(`CodexMicroService`),
  {
    ConnectionEventType: D,
    DeviceType: ie,
    OAILightingEffect: O,
    RPCApiOAI: ae,
    WLDeviceCommImpl: k,
    WLDeviceError: A,
    WLDeviceErrorCode: j,
  } = (0, s.createRequire)(__filename)(`@worklouder/device-kit-oai`),
  M = 6,
  N = [1e3, 2e3, 5e3, 1e4],
  P = [250, 1e3, 3e3],
  F = 3e4,
  I = 6e4,
  L = 15e3,
  R = 1e4,
  z = 50,
  B = 4e3,
  V = 100,
  H = 0.05,
  U = 0.1,
  W = 0.4,
  G = 0.4,
  K = {
    keys: { effect: O.off, brightness: 0, speed: 0, magic: 0, color: 0 },
    ambient: { effect: O.off, brightness: 0, speed: 0, magic: 0, color: 0 },
  },
  q = { brightness: 1, inactivityTimeoutMs: null, slots: le(), voiceState: `idle` },
  J = class extends A {},
  oe = class {
    options;
    findDevices;
    watchHidTopology;
    createComm;
    createApi;
    schedule;
    clearScheduled;
    comm = null;
    api = null;
    unsubscribeConnectionEvent = null;
    unsubscribeHid = null;
    unsubscribeJoystick = null;
    hidTopologyWatcher = null;
    reconnectTimer = null;
    topologySettleTimer = null;
    topologyFallbackTimer = null;
    batteryRefreshTimer = null;
    lightingRecoveryTimer = null;
    selectionLightingTimer = null;
    inputQuietTimer = null;
    inactivityLightingTimer = null;
    connectPromise = null;
    connectionCleanupPromise = null;
    topologyReconciliationPromise = null;
    connectionAbortController = null;
    resolvePendingDeviceRpcs = null;
    lightingWritePromise = Promise.resolve();
    lightingRestorePromise = null;
    connectionAttemptId = 0;
    topologyReconciliationPending = !1;
    topologySettleRetryIndex = 0;
    transportReconnectAttempt = 0;
    lightingRecoveryAttempt = 0;
    pendingDeviceRpcCount = 0;
    lightingActivityId = 0;
    joystickInDeadZone = !1;
    initialLightingPending = !1;
    lifecycleState = `initial`;
    selectedSlotId = null;
    selectionLightingVisible = !1;
    lightingOffForInactivity = !1;
    lastLightingModel = q;
    displayedLightingModel = q;
    appliedLightingConfigKey = null;
    appliedThreadLightingKey = null;
    deferredLightingModel = null;
    batteryRefreshPending = !1;
    connectedDevicePortPath = null;
    deviceStateCause = `device-lifecycle`;
    deviceState = {
      status: `not-detected`,
      transport: null,
      model: null,
      error: null,
      battery: null,
    };
    constructor(e) {
      this.options = e;
      let t = ue();
      ((this.findDevices = e.findDevices ?? te),
        (this.watchHidTopology = e.watchHidTopology ?? d),
        (this.createComm = e.createComm ?? (() => new k(t))),
        (this.createApi = e.createApi ?? ((e) => new ae(e, t))),
        (this.schedule = e.schedule ?? setTimeout),
        (this.clearScheduled = e.clearScheduled ?? clearTimeout));
    }
    getState() {
      return this.deviceState;
    }
    start() {
      if (this.lifecycleState !== `started`) {
        ((this.lifecycleState = `started`),
          this.resolvePendingDeviceRpcs?.(),
          (this.transportReconnectAttempt = 0));
        try {
          this.hidTopologyWatcher = this.watchHidTopology(() => {
            this.handleHidTopologyChanged();
          });
        } catch (e) {
          (E.warning(`Failed to watch HID topology`, { safe: {}, sensitive: { error: e } }),
            this.scheduleTopologyFallbackScan());
        }
        this.ensureConnected();
      }
    }
    async updateLighting(e) {
      if (((this.lastLightingModel = e), this.lifecycleState === `stopped`)) return !1;
      if (!e.preserveSelectionLighting) {
        let t = e.slots.find((e) => e.selected && e.status !== `off`)?.id ?? null;
        t !== this.selectedSlotId &&
          ((this.selectedSlotId = t),
          this.clearSelectionLightingTimer(),
          (this.selectionLightingVisible = t != null),
          !this.initialLightingPending &&
            this.deviceState.controlPlaneStatus !== `unavailable` &&
            this.scheduleSelectionLightingTimer());
      }
      if (this.deviceState.controlPlaneStatus === `unavailable`) return !1;
      let t = this.lightingOffForInactivity,
        n = this.resetInactivityLighting();
      if (
        (this.lifecycleState !== `started` && this.start(),
        await this.connectPromise,
        this.api == null ||
          this.getState().controlPlaneStatus === `unavailable` ||
          !(await this.applyLighting(e)))
      )
        return !1;
      let r =
        !e.suspendDeviceStatusRefresh && this.inputQuietTimer == null && this.batteryRefreshPending;
      return (
        this.finishLightingUpdate(n, t, !0),
        r && ((this.batteryRefreshPending = !1), this.refreshBatteryStatus()),
        !0
      );
    }
    async stop() {
      this.lifecycleState = `stopped`;
      let e = this.connectionAttemptId,
        t = this.connectionCleanupPromise;
      ((this.topologyReconciliationPending = !1),
        this.hidTopologyWatcher?.dispose(),
        (this.hidTopologyWatcher = null),
        this.reconnectTimer != null &&
          (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
        this.clearTopologySettleRetry(),
        (this.transportReconnectAttempt = 0),
        this.topologyFallbackTimer != null &&
          (this.clearScheduled(this.topologyFallbackTimer), (this.topologyFallbackTimer = null)));
      let n = this.api,
        r = this.comm;
      if (
        this.deviceState.controlPlaneStatus !== `unavailable` &&
        this.pendingDeviceRpcCount !== 0
      ) {
        let e = Promise.withResolvers(),
          t = () => {
            e.resolve(void 0);
          };
        this.resolvePendingDeviceRpcs = t;
        let n = this.schedule(t, R);
        try {
          await e.promise;
        } finally {
          (this.clearScheduled(n),
            this.resolvePendingDeviceRpcs === t && (this.resolvePendingDeviceRpcs = null));
        }
      }
      if (this.lifecycleState !== `stopped` || this.connectionAttemptId !== e) return;
      this.connectionAttemptId += 1;
      let i = this.connectionAttemptId;
      this.clearConnectionSubscriptions();
      let a =
        this.deviceState.controlPlaneStatus !== `unavailable` && this.pendingDeviceRpcCount === 0;
      if (
        (this.connectionAbortController?.abort(),
        (this.connectionAbortController = null),
        (this.pendingDeviceRpcCount = 0),
        (this.initialLightingPending = !1),
        (this.lightingWritePromise = Promise.resolve()),
        (this.comm = null),
        (this.api = null),
        (this.connectedDevicePortPath = null),
        this.batteryRefreshTimer != null &&
          (this.clearScheduled(this.batteryRefreshTimer), (this.batteryRefreshTimer = null)),
        this.clearLightingRecovery(),
        this.clearSelectionLightingTimer(),
        this.clearInputQuietState(),
        this.resetInactivityLighting(),
        (this.selectedSlotId = null),
        (this.selectionLightingVisible = !1),
        (this.lightingOffForInactivity = !1),
        (this.lightingRestorePromise = null),
        await this.enqueueLightingWrite(async () => {
          n == null ||
            !a ||
            (await Promise.allSettled([
              n.sendLightingConfig(K),
              n.sendThreadsLighting($(q.slots, 0)),
            ]));
        }),
        await r?.disconnect(),
        await t,
        (this.appliedLightingConfigKey = null),
        (this.appliedThreadLightingKey = null),
        this.lifecycleState !== `stopped` || this.connectionAttemptId !== i)
      ) {
        this.isCurrentConnectionAttempt(i) && this.api == null && this.ensureConnected();
        return;
      }
      ((this.displayedLightingModel = q),
        this.setDeviceState(
          { status: `not-detected`, transport: null, model: null, error: null, battery: null },
          `service-stop`,
        ));
    }
    dispose() {
      return this.stop();
    }
    async ensureConnected(e = `device-lifecycle`) {
      if (this.lifecycleState !== `started`) return;
      let t = this.connectionCleanupPromise;
      if (t != null) {
        (await t, await this.ensureConnected(e));
        return;
      }
      if (this.api != null || this.reconnectTimer != null) return;
      if (this.connectPromise != null) {
        (await this.connectPromise, await this.ensureConnected(e));
        return;
      }
      let n = this.connectionAttemptId;
      ((this.connectPromise = this.connect(n, e).finally(() => {
        this.connectPromise = null;
      })),
        await this.connectPromise);
    }
    async connect(e, t) {
      let n =
          this.deviceState.status === `error` && this.deviceState.error === `transport-unavailable`
            ? this.deviceState.error
            : null,
        r;
      try {
        r = await this.findDevices();
      } catch (t) {
        if (!this.isCurrentConnectionAttempt(e)) return;
        (E.warning(`Codex Micro discovery failed`, { safe: {}, sensitive: { error: t } }),
          this.setDeviceState({
            status: `error`,
            transport: n == null ? null : this.deviceState.transport,
            model: n == null ? null : this.deviceState.model,
            error: n ?? `discovery-failed`,
            battery: null,
          }),
          this.scheduleTopologySettleRetry());
        return;
      }
      if (!this.isCurrentConnectionAttempt(e)) return;
      let [i] = r;
      if (i == null) {
        ((this.transportReconnectAttempt = 0),
          this.setDeviceState({
            status: `not-detected`,
            transport: null,
            model: null,
            error: null,
            battery: null,
          }));
        return;
      }
      let a = Y(i),
        o = X(i),
        s = a,
        c = o,
        l = n != null;
      (this.clearTopologySettleRetry(),
        n ??
          this.setDeviceState(
            { status: `detected`, transport: a, model: o, error: null, battery: null },
            t,
          ));
      for (let n of r) {
        let r = Y(n),
          i = X(n);
        ((s = r), (c = i));
        let a = this.createComm(),
          o = !1,
          u = !1,
          d,
          f = a.onConnectionEvent((t) => {
            if (!this.isCurrentConnectionAttempt(e)) return;
            let n = this.comm === a;
            switch (t.type) {
              case D.CONNECTED:
                break;
              case D.DISCONNECTED:
              case D.ERROR: {
                let e = t.type === D.ERROR && t.error instanceof Error ? t.error : void 0;
                n && u && !this.initialLightingPending
                  ? this.invalidateActiveConnection(
                      a,
                      t.type === D.DISCONNECTED ? `sdk-disconnected` : `sdk-error`,
                      e,
                    )
                  : ((o = !0), (d = e), n && this.connectionAbortController?.abort());
                break;
              }
            }
          });
        try {
          if ((await a.connect(n), o)) throw d ?? Error(`Codex Micro connection failed`);
          if (!this.isCurrentConnectionAttempt(e)) {
            (this.clearConnectionCandidateRuntime(a, f),
              await this.disconnectConnectionCandidate(a));
            return;
          }
          let s = this.createApi(a);
          ((this.comm = a),
            (this.api = s),
            (this.connectionAbortController = new AbortController()),
            (this.pendingDeviceRpcCount = 0),
            (this.initialLightingPending = !0),
            (this.joystickInDeadZone = !1),
            (this.unsubscribeConnectionEvent = f),
            (this.connectedDevicePortPath = n.portPath),
            (this.appliedLightingConfigKey = null),
            (this.appliedThreadLightingKey = null),
            (this.lightingOffForInactivity = !0),
            (this.unsubscribeHid = s.onHidReceived((e) => {
              this.handleHidEvent(e);
            })),
            (this.unsubscribeJoystick = s.onJoystickMove((e) => {
              this.handleJoystickEvent(e);
            })),
            (u = !0),
            this.setDeviceState(
              { status: `connected`, transport: r, model: i, error: null, battery: null },
              t,
            ));
          let c = this.lightingActivityId,
            l = await this.applyLatestLighting(s, a);
          if (o) throw d ?? Error(`Codex Micro connection failed`);
          if (!this.isCurrentConnectionAttempt(e) || this.comm !== a || this.api !== s) return;
          if (!l) {
            (this.markInitialLightingUnavailable(s, a),
              (this.initialLightingPending = !1),
              this.scheduleTransportReconnect());
            return;
          }
          ((this.initialLightingPending = !1),
            this.scheduleSelectionLightingTimer(),
            this.finishLightingUpdate(c, !0, l),
            this.setDeviceState(
              { status: `connected`, transport: r, model: i, error: null, battery: null },
              t,
            ),
            await this.refreshBatteryStatus(),
            this.comm === a && this.api === s && (this.transportReconnectAttempt = 0));
          return;
        } catch (n) {
          if (!this.isCurrentConnectionAttempt(e)) {
            (this.clearConnectionCandidateRuntime(a, f),
              await this.disconnectConnectionCandidate(a));
            return;
          }
          (E.warning(`Codex Micro connection failed`, { safe: {}, sensitive: { error: n } }),
            Z(n) && (l = !0),
            this.clearConnectionCandidateRuntime(a, f),
            this.deviceState.status === `connected` &&
              this.setDeviceState(
                { status: `detected`, transport: r, model: i, error: null, battery: null },
                t,
              ),
            await this.disconnectConnectionCandidate(a));
        }
      }
      (this.setDeviceState({
        status: `error`,
        transport: s,
        model: c,
        error: l ? `transport-unavailable` : `connection-failed`,
        battery: null,
      }),
        this.scheduleTransportReconnect());
    }
    requestTopologyReconciliation() {
      if (
        this.lifecycleState !== `started` ||
        ((this.topologyReconciliationPending = !0), this.topologyReconciliationPromise != null)
      )
        return;
      let e = this.reconcilePendingTopologyChanges().catch((e) => {
        E.warning(`Failed to reconcile HID topology`, { safe: {}, sensitive: { error: e } });
      });
      ((this.topologyReconciliationPromise = e),
        e.finally(() => {
          ((this.topologyReconciliationPromise = null),
            this.topologyReconciliationPending && this.requestTopologyReconciliation());
        }));
    }
    async reconcilePendingTopologyChanges() {
      for (; this.lifecycleState === `started` && this.topologyReconciliationPending;)
        ((this.topologyReconciliationPending = !1), await this.reconcileTopology());
    }
    async reconcileTopology() {
      let e = this.connectionCleanupPromise;
      if (e != null && (await e, this.lifecycleState !== `started`)) return;
      if (this.api == null) {
        (this.reconnectTimer != null &&
          (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
          await this.ensureConnected());
        return;
      }
      let t = this.connectionAttemptId,
        n = await this.findDevices();
      if (
        !this.isCurrentConnectionAttempt(t) ||
        n.some(
          ({ isUsbConnection: e, portPath: t }) =>
            t === this.connectedDevicePortPath && (e || n.every((e) => !e.isUsbConnection)),
        )
      )
        return;
      this.connectionAttemptId += 1;
      let r = this.connectionAttemptId;
      if (
        (await this.clearConnectedDeviceRuntime()?.disconnect(),
        !this.isCurrentConnectionAttempt(r))
      )
        return;
      let i = n.length === 0 ? `device-lifecycle` : `transport-handoff`;
      (this.setDeviceState(
        { status: `not-detected`, transport: null, model: null, error: null, battery: null },
        i,
      ),
        await this.ensureConnected(i));
    }
    handleHidTopologyChanged() {
      (this.clearTopologySettleRetry(),
        (this.transportReconnectAttempt = 0),
        this.requestTopologyReconciliation(),
        this.scheduleTopologySettleRetry());
    }
    applyLighting(e) {
      return this.enqueueLightingWrite(async () => {
        let t = this.api;
        if (this.lifecycleState !== `started` || t == null || this.lightingRecoveryTimer != null)
          return !1;
        if (this.deferLightingUntilInputQuiet(e)) return !0;
        let n = se(
            e.slots,
            e.voiceState,
            this.selectionLightingVisible,
            e.brightness,
            e.snakingAmbientStatus,
          ),
          r = JSON.stringify(n);
        if (r !== this.appliedLightingConfigKey) {
          if (!(await this.writeLightingRpc(t, () => t.sendLightingConfig(n)))) return !1;
          this.api === t && (this.appliedLightingConfigKey = r);
        }
        if (this.lifecycleState !== `started` || this.api !== t) return !1;
        if (this.deferLightingUntilInputQuiet(e)) return !0;
        let i = $(e.slots, e.brightness),
          a = JSON.stringify(i);
        if (a !== this.appliedThreadLightingKey) {
          if (!(await this.writeLightingRpc(t, () => t.sendThreadsLighting(i)))) return !1;
          this.api === t && (this.appliedThreadLightingKey = a);
        }
        return (
          this.api === t && ((this.displayedLightingModel = e), (this.lightingRecoveryAttempt = 0)),
          !0
        );
      });
    }
    async applyLatestLighting(e, t) {
      for (; this.api === e && this.comm === t;) {
        let e = this.lastLightingModel;
        if (!(await this.applyLighting(e))) return !1;
        if (this.lastLightingModel === e) return !0;
      }
      return !1;
    }
    handleHidEvent(e) {
      if (this.lifecycleState !== `started`) return;
      (this.scheduleInputQuietFlush(), this.handleLightingActivity());
      let t = /^AG0([0-5])$/.exec(e.key),
        n = t == null ? null : Number(t[1]),
        r =
          this.initialLightingPending || this.deviceState.controlPlaneStatus === `unavailable`
            ? this.lastLightingModel
            : this.displayedLightingModel;
      this.options.onHidEvent({
        key: e.key,
        act: e.act ?? null,
        agent: e.agent ?? null,
        slot: n,
        threadKey: n == null ? null : (r.slots[n]?.threadKey ?? null),
      });
    }
    handleJoystickEvent(e) {
      if (this.lifecycleState === `started`) {
        if (e.distance <= H) {
          this.joystickInDeadZone ||
            ((this.joystickInDeadZone = !0),
            this.options.onJoystickEvent({ angle: 0, distance: 0 }));
          return;
        }
        ((this.joystickInDeadZone = !1),
          this.scheduleInputQuietFlush(),
          e.distance > U && this.handleLightingActivity(),
          this.options.onJoystickEvent(e));
      }
    }
    async writeLightingRpc(e, t) {
      let n = this.comm;
      if (n == null || this.api !== e) return !1;
      try {
        return (await this.retryDeviceRpc(e, n, t, `lighting-rpc`), !0);
      } catch (t) {
        if (this.initialLightingPending && this.api === e && Z(t)) throw t;
        await this.handleLightingRpcFailure(e, t instanceof Error ? t : void 0);
      }
      return !1;
    }
    async retryDeviceRpc(e, t, n, r) {
      let i = async () => {
          let e = await this.runDeviceRpc(n);
          if (!e.ok) throw new A(e.error.code, e.error.message, e.error.details);
          return e.value;
        },
        a = async () => {
          let n = this.initialLightingPending
            ? this.schedule(() => this.markInitialLightingUnavailable(e, t), z)
            : null;
          try {
            return await i();
          } finally {
            n != null && this.clearScheduled(n);
          }
        };
      try {
        return await i();
      } catch (n) {
        if (
          n instanceof A &&
          n.code === j.Timeout &&
          this.lifecycleState === `started` &&
          this.api === e &&
          this.comm === t
        )
          try {
            return await a();
          } catch (i) {
            throw (
              n instanceof J &&
                i instanceof J &&
                !this.initialLightingPending &&
                this.api === e &&
                this.comm === t &&
                (await this.invalidateActiveConnection(t, r, i)),
              i
            );
          }
        throw n;
      }
    }
    async runDeviceRpc(e) {
      let t = this.connectionAbortController;
      if (t == null || t.signal.aborted) throw new A(j.DeviceDisconnected, `Device disconnected`);
      let n = t.signal,
        r = Promise.withResolvers(),
        i = () => {
          r.reject(new A(j.DeviceDisconnected, `Device disconnected`));
        };
      n.addEventListener(`abort`, i, { once: !0 });
      let a = this.schedule(() => {
        r.reject(new J(j.Timeout, `Request timed out`));
      }, L);
      try {
        let n = e();
        this.pendingDeviceRpcCount += 1;
        let i = () => {
          this.connectionAbortController === t &&
            (--this.pendingDeviceRpcCount,
            this.pendingDeviceRpcCount === 0 && this.resolvePendingDeviceRpcs?.());
        };
        return (n.then(i, i), await Promise.race([n, r.promise]));
      } finally {
        (this.clearScheduled(a), n.removeEventListener(`abort`, i));
      }
    }
    async handleLightingRpcFailure(e, t) {
      let n = this.comm;
      if (n != null && this.api === e && Z(t)) {
        await this.invalidateActiveConnection(n, `lighting-rpc`, t);
        return;
      }
      if (n != null && this.initialLightingPending) {
        this.markInitialLightingUnavailable(e, n);
        return;
      }
      if (
        !(
          this.deviceState.status !== `connected` ||
          this.deviceState.controlPlaneStatus === `unavailable` ||
          this.api !== e ||
          n == null
        )
      ) {
        if (Q(t)) {
          await this.invalidateActiveConnection(n, `lighting-rpc`, t);
          return;
        }
        this.scheduleLightingRecovery(e, n, t);
      }
    }
    markInitialLightingUnavailable(e, t) {
      !this.initialLightingPending ||
        this.api !== e ||
        this.comm !== t ||
        this.deviceState.status !== `connected` ||
        this.setDeviceState({
          status: `connected`,
          transport: this.deviceState.transport,
          model: this.deviceState.model,
          error: null,
          battery: null,
          controlPlaneStatus: `unavailable`,
        });
    }
    scheduleLightingRecovery(e, t, n) {
      if (
        this.lifecycleState !== `started` ||
        this.api !== e ||
        this.comm !== t ||
        this.lightingRecoveryTimer != null
      )
        return;
      ((this.appliedLightingConfigKey = null), (this.appliedThreadLightingKey = null));
      let r = N[Math.min(this.lightingRecoveryAttempt, N.length - 1)];
      (this.lightingRecoveryAttempt === 0 &&
        E.warning(`Codex Micro lighting temporarily unavailable`, {
          safe: { code: n instanceof A ? n.code : null, retryDelayMs: r },
          sensitive: { error: n },
        }),
        (this.lightingRecoveryAttempt += 1));
      let i = this.lightingActivityId;
      this.lightingRecoveryTimer = this.schedule(() => {
        if (
          ((this.lightingRecoveryTimer = null),
          this.lifecycleState === `started` && this.api === e && this.comm === t)
        ) {
          if (this.lightingOffForInactivity && this.lightingActivityId === i) {
            this.applyInactivityLightingOff(i);
            return;
          }
          this.updateLighting(this.lastLightingModel);
        }
      }, r);
    }
    invalidateActiveConnection(e, t, n) {
      if (this.lifecycleState !== `started` || this.comm !== e) return Promise.resolve();
      let r = this.deviceState.transport;
      (this.deviceState.controlPlaneStatus === `unavailable` &&
        (this.transportReconnectAttempt = 0),
        (this.connectionAttemptId += 1));
      let i = this.connectionAttemptId;
      this.clearConnectedDeviceRuntime();
      let a = Promise.resolve()
        .then(() => e.disconnect())
        .catch((e) => {
          E.warning(`Failed to disconnect Codex Micro`, { safe: {}, sensitive: { error: e } });
        })
        .then(() => {
          this.isCurrentConnectionAttempt(i) && this.scheduleTransportReconnect();
        })
        .finally(() => {
          this.connectionCleanupPromise === a && (this.connectionCleanupPromise = null);
        });
      return (
        (this.connectionCleanupPromise = a),
        this.setDeviceState({
          status: `error`,
          transport: r,
          model: this.deviceState.model,
          error: `transport-unavailable`,
          battery: null,
        }),
        E.warning(`Codex Micro connection invalidated`, {
          safe: {
            code: n instanceof A ? n.code : null,
            reason: `transport-unavailable`,
            source: t,
          },
          sensitive: { error: n },
        }),
        a
      );
    }
    clearConnectedDeviceRuntime() {
      (this.connectionAbortController?.abort(),
        (this.connectionAbortController = null),
        (this.pendingDeviceRpcCount = 0),
        this.resolvePendingDeviceRpcs?.(),
        (this.initialLightingPending = !1),
        (this.lightingWritePromise = Promise.resolve()),
        this.reconnectTimer != null &&
          (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
        this.batteryRefreshTimer != null &&
          (this.clearScheduled(this.batteryRefreshTimer), (this.batteryRefreshTimer = null)),
        this.clearLightingRecovery(),
        this.clearSelectionLightingTimer(),
        this.clearInputQuietState(),
        this.resetInactivityLighting(),
        (this.selectionLightingVisible = !1),
        (this.lightingOffForInactivity = !1),
        (this.lightingRestorePromise = null),
        this.clearConnectionSubscriptions());
      let e = this.comm;
      return (
        (this.comm = null),
        (this.api = null),
        (this.connectedDevicePortPath = null),
        (this.displayedLightingModel = q),
        (this.appliedLightingConfigKey = null),
        (this.appliedThreadLightingKey = null),
        e
      );
    }
    clearConnectionCandidateRuntime(e, t) {
      this.comm === e ? this.clearConnectedDeviceRuntime() : t();
    }
    async disconnectConnectionCandidate(e) {
      try {
        await e.disconnect();
      } catch (e) {
        E.warning(`Failed to disconnect Codex Micro connection candidate`, {
          safe: {},
          sensitive: { error: e },
        });
      }
    }
    async retryInitialLighting(e, t) {
      if (
        this.lifecycleState !== `started` ||
        this.deviceState.status !== `connected` ||
        this.deviceState.controlPlaneStatus !== `unavailable` ||
        this.api !== e ||
        this.comm !== t
      )
        return;
      let n = this.lightingActivityId,
        r = await this.applyLatestLighting(e, t);
      if (!(this.lifecycleState !== `started` || this.api !== e || this.comm !== t)) {
        if (!r) {
          this.scheduleTransportReconnect();
          return;
        }
        (this.scheduleSelectionLightingTimer(),
          this.finishLightingUpdate(n, !0, r),
          this.setDeviceState({
            status: `connected`,
            transport: this.deviceState.transport,
            model: this.deviceState.model,
            error: null,
            battery: null,
          }),
          await this.refreshBatteryStatus(),
          this.api === e && this.comm === t && (this.transportReconnectAttempt = 0));
      }
    }
    scheduleTransportReconnect() {
      if (this.lifecycleState !== `started` || this.reconnectTimer != null) return;
      let e = N[Math.min(this.transportReconnectAttempt, N.length - 1)];
      ((this.transportReconnectAttempt += 1),
        (this.reconnectTimer = this.schedule(() => {
          this.reconnectTimer = null;
          let e = this.api,
            t = this.comm;
          if (e != null && t != null) {
            this.retryInitialLighting(e, t);
            return;
          }
          this.ensureConnected();
        }, e)));
    }
    scheduleTopologySettleRetry() {
      let e = P[this.topologySettleRetryIndex];
      this.lifecycleState !== `started` ||
        this.topologySettleTimer != null ||
        e == null ||
        ((this.topologySettleRetryIndex += 1),
        (this.topologySettleTimer = this.schedule(() => {
          ((this.topologySettleTimer = null),
            this.requestTopologyReconciliation(),
            this.scheduleTopologySettleRetry());
        }, e)));
    }
    clearTopologySettleRetry() {
      (this.topologySettleTimer != null &&
        (this.clearScheduled(this.topologySettleTimer), (this.topologySettleTimer = null)),
        (this.topologySettleRetryIndex = 0));
    }
    scheduleTopologyFallbackScan() {
      this.lifecycleState !== `started` ||
        this.hidTopologyWatcher != null ||
        this.topologyFallbackTimer != null ||
        (this.topologyFallbackTimer = this.schedule(() => {
          ((this.topologyFallbackTimer = null),
            this.requestTopologyReconciliation(),
            this.scheduleTopologyFallbackScan());
        }, F));
    }
    clearConnectionSubscriptions() {
      (this.unsubscribeConnectionEvent?.(),
        this.unsubscribeHid?.(),
        this.unsubscribeJoystick?.(),
        (this.unsubscribeConnectionEvent = null),
        (this.unsubscribeHid = null),
        (this.unsubscribeJoystick = null));
    }
    clearLightingRecovery() {
      (this.lightingRecoveryTimer != null &&
        (this.clearScheduled(this.lightingRecoveryTimer), (this.lightingRecoveryTimer = null)),
        (this.lightingRecoveryAttempt = 0));
    }
    scheduleSelectionLightingTimer() {
      !this.selectionLightingVisible ||
        this.selectionLightingTimer != null ||
        (this.selectionLightingTimer = this.schedule(() => {
          ((this.selectionLightingTimer = null),
            (this.selectionLightingVisible = !1),
            this.deviceState.controlPlaneStatus !== `unavailable` &&
              this.applyLighting(this.lastLightingModel));
        }, B));
    }
    clearSelectionLightingTimer() {
      this.selectionLightingTimer != null &&
        (this.clearScheduled(this.selectionLightingTimer), (this.selectionLightingTimer = null));
    }
    scheduleInputQuietFlush() {
      this.initialLightingPending ||
        this.deviceState.status !== `connected` ||
        this.deviceState.controlPlaneStatus === `unavailable` ||
        (this.inputQuietTimer != null && this.clearScheduled(this.inputQuietTimer),
        (this.inputQuietTimer = this.schedule(() => {
          this.inputQuietTimer = null;
          let e = this.deferredLightingModel;
          this.deferredLightingModel = null;
          let t = this.batteryRefreshPending;
          ((this.batteryRefreshPending = !1), this.flushDeferredDeviceWrites(e, t));
        }, V)));
    }
    deferLightingUntilInputQuiet(e) {
      return this.inputQuietTimer == null ? !1 : ((this.deferredLightingModel = e), !0);
    }
    clearInputQuietState() {
      (this.inputQuietTimer != null &&
        (this.clearScheduled(this.inputQuietTimer), (this.inputQuietTimer = null)),
        (this.deferredLightingModel = null),
        (this.batteryRefreshPending = !1));
    }
    async flushDeferredDeviceWrites(e, t) {
      (e != null && (await this.applyLighting(e)), t && (await this.refreshBatteryStatus()));
    }
    resetInactivityLighting() {
      return (
        this.clearInactivityLightingTimer(), (this.lightingActivityId += 1), this.lightingActivityId
      );
    }
    handleLightingActivity() {
      if (
        this.initialLightingPending ||
        this.deviceState.status !== `connected` ||
        this.deviceState.controlPlaneStatus === `unavailable`
      )
        return;
      let e = this.resetInactivityLighting();
      if (!this.lightingOffForInactivity) {
        this.scheduleInactivityLightingOff(e);
        return;
      }
      let t = this.lightingRestorePromise ?? this.applyLighting(this.lastLightingModel);
      this.lightingRestorePromise = t;
      let n = (n) => {
        (this.lightingRestorePromise === t && (this.lightingRestorePromise = null),
          this.finishLightingUpdate(e, !0, n));
      };
      t.then(n, () => {
        n(!1);
      });
    }
    finishLightingUpdate(e, t, n) {
      if (e === this.lightingActivityId) {
        if (t && !n) {
          this.scheduleInactivityLightingOff(e);
          return;
        }
        ((this.lightingOffForInactivity = !1), this.scheduleInactivityLightingOff(e));
      }
    }
    scheduleInactivityLightingOff(e) {
      let t = this.lastLightingModel.inactivityTimeoutMs;
      t == null ||
        this.lifecycleState !== `started` ||
        this.api == null ||
        e !== this.lightingActivityId ||
        (this.clearInactivityLightingTimer(),
        (this.inactivityLightingTimer = this.schedule(() => {
          if (((this.inactivityLightingTimer = null), e !== this.lightingActivityId)) return;
          this.lightingOffForInactivity = !0;
          let t = (t) => {
            e === this.lightingActivityId &&
              this.lightingOffForInactivity &&
              !t &&
              this.scheduleInactivityLightingOff(e);
          };
          this.applyInactivityLightingOff(e).then(t, () => t(!1));
        }, t)));
    }
    clearInactivityLightingTimer() {
      this.inactivityLightingTimer != null &&
        (this.clearScheduled(this.inactivityLightingTimer), (this.inactivityLightingTimer = null));
    }
    applyInactivityLightingOff(e) {
      return this.enqueueLightingWrite(async () => {
        let t = this.api;
        return this.lifecycleState !== `started` ||
          t == null ||
          e !== this.lightingActivityId ||
          !this.lightingOffForInactivity ||
          ((this.appliedLightingConfigKey = null),
          (this.appliedThreadLightingKey = null),
          !(await this.writeLightingRpc(t, () => t.sendLightingConfig(K)))) ||
          this.lifecycleState !== `started` ||
          this.api !== t ||
          e !== this.lightingActivityId ||
          !this.lightingOffForInactivity
          ? !1
          : this.writeLightingRpc(t, () => t.sendThreadsLighting($(q.slots, 0)));
      });
    }
    enqueueLightingWrite(e) {
      let t = this.lightingWritePromise.then(e, e);
      return (
        (this.lightingWritePromise = t.then(
          () => void 0,
          () => void 0,
        )),
        t
      );
    }
    async refreshBatteryStatus() {
      let e = this.api,
        t = this.comm;
      if (
        !(
          this.lifecycleState !== `started` ||
          this.deviceState.controlPlaneStatus === `unavailable` ||
          e == null ||
          t == null
        )
      ) {
        if (this.inputQuietTimer != null || this.lastLightingModel.suspendDeviceStatusRefresh) {
          this.batteryRefreshPending = !0;
          return;
        }
        try {
          let n = await this.retryDeviceRpc(e, t, () => e.getDeviceStatus(), `battery-rpc`);
          if (this.api !== e || this.comm !== t) return;
          this.setDeviceState({
            status: `connected`,
            transport: this.deviceState.transport,
            model: this.deviceState.model,
            error: null,
            battery:
              n.batteryPercentage == null
                ? null
                : { percentage: n.batteryPercentage, isCharging: n.isCharging ?? null },
          });
        } catch (n) {
          if (Q(n)) {
            await this.invalidateActiveConnection(
              t,
              `battery-rpc`,
              n instanceof Error ? n : void 0,
            );
            return;
          }
          if (this.api !== e || this.comm !== t) return;
          this.setDeviceState({
            status: `connected`,
            transport: this.deviceState.transport,
            model: this.deviceState.model,
            error: null,
            battery: null,
          });
        }
        this.lifecycleState === `started` &&
          this.api === e &&
          this.comm === t &&
          this.batteryRefreshTimer == null &&
          (this.batteryRefreshTimer = this.schedule(() => {
            ((this.batteryRefreshTimer = null), this.refreshBatteryStatus());
          }, I));
      }
    }
    setDeviceState(e, t = `device-lifecycle`) {
      (this.deviceStateCause === t &&
        this.deviceState.status === e.status &&
        this.deviceState.transport === e.transport &&
        this.deviceState.model === e.model &&
        this.deviceState.error === e.error &&
        this.deviceState.controlPlaneStatus === e.controlPlaneStatus &&
        this.deviceState.battery?.percentage === e.battery?.percentage &&
        this.deviceState.battery?.isCharging === e.battery?.isCharging) ||
        ((this.deviceStateCause = t),
        (this.deviceState = e),
        this.options.onDeviceStateChanged(e, t));
    }
    isCurrentConnectionAttempt(e) {
      return this.lifecycleState === `started` && this.connectionAttemptId === e;
    }
  };
function Y(e) {
  return e.isUsbConnection == null ? `unknown` : e.isUsbConnection ? `usb` : `bluetooth`;
}
function X(e) {
  return e.deviceType === ie.CreatorMicroV2 ? `creator-micro-v2` : `codex-micro`;
}
function Z(e) {
  return e instanceof A && (e.code === j.DeviceDisconnected || e.code === j.HidUnavailable);
}
function Q(e) {
  if (!(e instanceof A)) return !1;
  switch (e.code) {
    case j.WriteFailed:
    case j.HidUnavailable:
    case j.DeviceDisconnected:
      return !0;
    case j.Timeout:
    case j.AlreadyConnected:
    case j.RpcError:
    case j.InvalidResponse:
    case j.Aborted:
    case j.Unknown:
      return !1;
  }
}
function $(e, n) {
  return e.map((e) => {
    if (e.status === `off`)
      return {
        id: e.id,
        color: 0,
        brightness: 0,
        effect: O.off,
        speed: 0,
        syncKeysLighting: !1,
        syncAmbientLighting: !1,
      };
    let r = e.selected || !!e.pulsing;
    return {
      id: e.id,
      color: t.Il(e.status),
      brightness: n,
      effect: r ? O.breath : O.solid,
      speed: r ? W : 0,
      syncKeysLighting: !1,
      syncAmbientLighting: !1,
    };
  });
}
function se(e, n, r, i, a) {
  if (a != null)
    return {
      keys: K.keys,
      ambient: { effect: O.snake, brightness: i, speed: G, magic: 0, color: t.Il(a) },
    };
  let o = e.find((e) => e.selected),
    s = ce(n, i);
  if (o == null || o.status === `off`) return { keys: K.keys, ambient: s ?? K.ambient };
  let c = {
      effect: o.status === `working` ? O.snake : O.solid,
      brightness: i,
      speed: o.status === `working` ? G : 0,
      magic: 0,
      color: t.Il(o.status),
    },
    l = s ?? (o.status === `working` || r ? c : K.ambient);
  return {
    keys: r ? { effect: O.solid, brightness: i, speed: 0, magic: 0, color: l.color } : K.keys,
    ambient: l,
  };
}
function ce(e, t) {
  switch (e) {
    case `idle`:
      return null;
    case `recording`:
    case `processing`:
      return {
        effect: O.snake,
        brightness: t,
        speed: G,
        magic: 0,
        color: e === `recording` ? 3050327 : 16777215,
      };
    case `completed`:
      return { effect: O.solid, brightness: t, speed: 0, magic: 0, color: 16777215 };
  }
}
function le() {
  return Array.from({ length: M }, (e, t) => ({
    id: t,
    threadKey: null,
    title: null,
    status: `off`,
    selected: !1,
  }));
}
function ue() {
  return {
    debug: (...e) => {
      E.debug(`Work Louder debug`, { safe: {}, sensitive: { args: e } });
    },
    error: (...e) => {
      E.error(`Work Louder error`, { safe: {}, sensitive: { args: e } });
    },
    info: (...e) => {
      E.info(`Work Louder info`, { safe: {}, sensitive: { args: e } });
    },
    warn: (...e) => {
      E.warning(`Work Louder warning`, { safe: {}, sensitive: { args: e } });
    },
  };
}
exports.CodexMicroService = oe;
//# sourceMappingURL=service-fwho9bdp.js.map
