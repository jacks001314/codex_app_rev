"use strict"
;((exports.ids = [683]),
  (exports.modules = {
    55006(t, e, i) {
      i.d(e, { CodexMicroService: () => U })
      var n = i(55822),
        s = i(85452),
        l = i(4745),
        r = i(89477),
        o = i(86697),
        c = i.n(o),
        a = i(4482),
        h = i(67726)
      let d = (0, n.createRequire)(__filename)
      function u(t) {
        return g().watch(t)
      }
      function g() {
        let t,
          e,
          i = ((t = c().join(
            a.app.getAppPath(),
            "native",
            "hid-topology-watcher-addon",
            "build",
            `Release-${process.arch}`,
            "hid_topology_watcher.node",
          )),
          null ==
          (e = (0, h.b)({ isPackaged: a.app.isPackaged, env: process.env, resourcesPath: process.resourcesPath }))
            ? [t]
            : [c().join(e, "native", "hid-topology-watcher.node"), t]).find(r.existsSync)
        if (null == i) throw Error("HID topology watcher addon not found")
        return d(i)
      }
      let p = [33431, 33432],
        y = [33632, ...p],
        f = (0, n.createRequire)(__filename),
        v = (0, n.createRequire)(f.resolve("@worklouder/device-kit-oai")),
        { ConnectionType: m, DeviceLayoutType: S, DeviceType: b } = f("@worklouder/device-kit-oai")
      async function L() {
        return (
          "linux" === process.platform
            ? (
                await Promise.all(
                  y.map(async (t) =>
                    (
                      await (0, n.createRequire)(v.resolve("@worklouder/wl-device-kit"))("node-hid").devicesAsync(
                        12346,
                        t,
                      )
                    ).map((e) => ({ ...e, productId: t })),
                  ),
                )
              ).flat()
            : await g().findCodexMicroInterfaces()
        )
          .flatMap((t) => {
            var e
            let i = 33632 === (e = t.productId) ? b.CodexMicro : p.some((t) => t === e) ? b.CreatorMicroV2 : null
            return null == t.path || 65280 !== t.usagePage || null == i
              ? []
              : [
                  {
                    portPath: t.path,
                    devicePid: String(t.productId),
                    connectionType: m.hid,
                    deviceType: i,
                    layoutType: S.universal,
                    isUsbConnection:
                      "usb" === t.transport ||
                      ((null == t.transport || "unknown" === t.transport) && t.release % 4 == 0),
                  },
                ]
          })
          .toSorted((t, e) => {
            let i = Number(e.isUsbConnection) - Number(t.isUsbConnection)
            return 0 !== i ? i : C(Number(t.devicePid)) - C(Number(e.devicePid))
          })
      }
      function C(t) {
        return y.findIndex((e) => e === t)
      }
      let T = (0, l.$Cz)("CodexMicroService"),
        {
          ConnectionEventType: R,
          DeviceType: P,
          OAILightingEffect: w,
          RPCApiOAI: I,
          WLDeviceCommImpl: A,
          WLDeviceError: D,
          WLDeviceErrorCode: k,
        } = (0, n.createRequire)(__filename)("@worklouder/device-kit-oai"),
        M = [1e3, 2e3, 5e3, 1e4],
        F = [250, 1e3, 3e3],
        E = {
          keys: { effect: w.off, brightness: 0, speed: 0, magic: 0, color: 0 },
          ambient: { effect: w.off, brightness: 0, speed: 0, magic: 0, color: 0 },
        },
        O = {
          brightness: 1,
          inactivityTimeoutMs: null,
          slots: Array.from({ length: 6 }, (t, e) => ({
            id: e,
            threadKey: null,
            title: null,
            status: "off",
            selected: !1,
          })),
          voiceState: "idle",
        }
      class x extends D {}
      class U {
        options
        findDevices
        watchHidTopology
        createComm
        createApi
        schedule
        clearScheduled
        comm = null
        api = null
        unsubscribeConnectionEvent = null
        unsubscribeHid = null
        unsubscribeJoystick = null
        hidTopologyWatcher = null
        reconnectTimer = null
        topologySettleTimer = null
        topologyFallbackTimer = null
        batteryRefreshTimer = null
        lightingRecoveryTimer = null
        selectionLightingTimer = null
        inputQuietTimer = null
        inactivityLightingTimer = null
        connectPromise = null
        connectionCleanupPromise = null
        topologyReconciliationPromise = null
        connectionAbortController = null
        resolvePendingDeviceRpcs = null
        lightingWritePromise = Promise.resolve()
        lightingRestorePromise = null
        connectionAttemptId = 0
        topologyReconciliationPending = !1
        topologySettleRetryIndex = 0
        transportReconnectAttempt = 0
        lightingRecoveryAttempt = 0
        pendingDeviceRpcCount = 0
        lightingActivityId = 0
        joystickInDeadZone = !1
        initialLightingPending = !1
        lifecycleState = "initial"
        selectedSlotId = null
        selectionLightingVisible = !1
        lightingOffForInactivity = !1
        lastLightingModel = O
        displayedLightingModel = O
        appliedLightingConfigKey = null
        appliedThreadLightingKey = null
        deferredLightingModel = null
        batteryRefreshPending = !1
        connectedDevicePortPath = null
        deviceStateCause = "device-lifecycle"
        deviceState = { status: "not-detected", transport: null, model: null, error: null, battery: null }
        constructor(t) {
          this.options = t
          let e = {
            debug: (...t) => {
              T.debug("Work Louder debug", { safe: {}, sensitive: { args: t } })
            },
            error: (...t) => {
              T.error("Work Louder error", { safe: {}, sensitive: { args: t } })
            },
            info: (...t) => {
              T.info("Work Louder info", { safe: {}, sensitive: { args: t } })
            },
            warn: (...t) => {
              T.warning("Work Louder warning", { safe: {}, sensitive: { args: t } })
            },
          }
          ;((this.findDevices = t.findDevices ?? L),
            (this.watchHidTopology = t.watchHidTopology ?? u),
            (this.createComm = t.createComm ?? (() => new A(e))),
            (this.createApi = t.createApi ?? ((t) => new I(t, e))),
            (this.schedule = t.schedule ?? setTimeout),
            (this.clearScheduled = t.clearScheduled ?? clearTimeout))
        }
        getState() {
          return this.deviceState
        }
        start() {
          if ("started" !== this.lifecycleState) {
            ;((this.lifecycleState = "started"),
              this.resolvePendingDeviceRpcs?.(),
              (this.transportReconnectAttempt = 0))
            try {
              this.hidTopologyWatcher = this.watchHidTopology(() => {
                this.handleHidTopologyChanged()
              })
            } catch (t) {
              ;(T.warning("Failed to watch HID topology", { safe: {}, sensitive: { error: t } }),
                this.scheduleTopologyFallbackScan())
            }
            this.ensureConnected()
          }
        }
        async updateLighting(t) {
          if (((this.lastLightingModel = t), "stopped" === this.lifecycleState)) return !1
          if (!t.preserveSelectionLighting) {
            let e = t.slots.find((t) => t.selected && "off" !== t.status)?.id ?? null
            e !== this.selectedSlotId &&
              ((this.selectedSlotId = e),
              this.clearSelectionLightingTimer(),
              (this.selectionLightingVisible = null != e),
              this.initialLightingPending ||
                "unavailable" === this.deviceState.controlPlaneStatus ||
                this.scheduleSelectionLightingTimer())
          }
          if ("unavailable" === this.deviceState.controlPlaneStatus) return !1
          let e = this.lightingOffForInactivity,
            i = this.resetInactivityLighting()
          if (
            ("started" !== this.lifecycleState && this.start(),
            await this.connectPromise,
            null == this.api || "unavailable" === this.getState().controlPlaneStatus || !(await this.applyLighting(t)))
          )
            return !1
          let n = !t.suspendDeviceStatusRefresh && null == this.inputQuietTimer && this.batteryRefreshPending
          return (
            this.finishLightingUpdate(i, e, !0),
            n && ((this.batteryRefreshPending = !1), this.refreshBatteryStatus()),
            !0
          )
        }
        async stop() {
          this.lifecycleState = "stopped"
          let t = this.connectionAttemptId,
            e = this.connectionCleanupPromise
          ;((this.topologyReconciliationPending = !1),
            this.hidTopologyWatcher?.dispose(),
            (this.hidTopologyWatcher = null),
            null != this.reconnectTimer && (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
            this.clearTopologySettleRetry(),
            (this.transportReconnectAttempt = 0),
            null != this.topologyFallbackTimer &&
              (this.clearScheduled(this.topologyFallbackTimer), (this.topologyFallbackTimer = null)))
          let i = this.api,
            n = this.comm
          if ("unavailable" !== this.deviceState.controlPlaneStatus && 0 !== this.pendingDeviceRpcCount) {
            let t = Promise.withResolvers(),
              e = () => {
                t.resolve(void 0)
              }
            this.resolvePendingDeviceRpcs = e
            let i = this.schedule(e, 1e4)
            try {
              await t.promise
            } finally {
              ;(this.clearScheduled(i), this.resolvePendingDeviceRpcs === e && (this.resolvePendingDeviceRpcs = null))
            }
          }
          if ("stopped" !== this.lifecycleState || this.connectionAttemptId !== t) return
          this.connectionAttemptId += 1
          let s = this.connectionAttemptId
          this.clearConnectionSubscriptions()
          let l = "unavailable" !== this.deviceState.controlPlaneStatus && 0 === this.pendingDeviceRpcCount
          if (
            (this.connectionAbortController?.abort(),
            (this.connectionAbortController = null),
            (this.pendingDeviceRpcCount = 0),
            (this.initialLightingPending = !1),
            (this.lightingWritePromise = Promise.resolve()),
            (this.comm = null),
            (this.api = null),
            (this.connectedDevicePortPath = null),
            null != this.batteryRefreshTimer &&
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
              null != i &&
                l &&
                (await Promise.allSettled([i.sendLightingConfig(E), i.sendThreadsLighting(q(O.slots, 0))]))
            }),
            await n?.disconnect(),
            await e,
            (this.appliedLightingConfigKey = null),
            (this.appliedThreadLightingKey = null),
            "stopped" !== this.lifecycleState || this.connectionAttemptId !== s)
          ) {
            this.isCurrentConnectionAttempt(s) && null == this.api && this.ensureConnected()
            return
          }
          ;((this.displayedLightingModel = O),
            this.setDeviceState(
              { status: "not-detected", transport: null, model: null, error: null, battery: null },
              "service-stop",
            ))
        }
        dispose() {
          return this.stop()
        }
        async ensureConnected(t = "device-lifecycle") {
          if ("started" !== this.lifecycleState) return
          let e = this.connectionCleanupPromise
          if (null != e) {
            ;(await e, await this.ensureConnected(t))
            return
          }
          if (null != this.api || null != this.reconnectTimer) return
          if (null != this.connectPromise) {
            ;(await this.connectPromise, await this.ensureConnected(t))
            return
          }
          let i = this.connectionAttemptId
          ;((this.connectPromise = this.connect(i, t).finally(() => {
            this.connectPromise = null
          })),
            await this.connectPromise)
        }
        async connect(t, e) {
          let i,
            n =
              "error" === this.deviceState.status && "transport-unavailable" === this.deviceState.error
                ? this.deviceState.error
                : null
          try {
            i = await this.findDevices()
          } catch (e) {
            if (!this.isCurrentConnectionAttempt(t)) return
            ;(T.warning("Codex Micro discovery failed", { safe: {}, sensitive: { error: e } }),
              this.setDeviceState({
                status: "error",
                transport: null == n ? null : this.deviceState.transport,
                model: null == n ? null : this.deviceState.model,
                error: n ?? "discovery-failed",
                battery: null,
              }),
              this.scheduleTopologySettleRetry())
            return
          }
          if (!this.isCurrentConnectionAttempt(t)) return
          let [s] = i
          if (null == s) {
            ;((this.transportReconnectAttempt = 0),
              this.setDeviceState({ status: "not-detected", transport: null, model: null, error: null, battery: null }))
            return
          }
          let l = K(s),
            r = W(s),
            o = l,
            c = r,
            a = null != n
          for (let s of (this.clearTopologySettleRetry(),
          null == n &&
            this.setDeviceState({ status: "detected", transport: l, model: r, error: null, battery: null }, e),
          i)) {
            let i,
              n = K(s),
              l = W(s)
            ;((o = n), (c = l))
            let r = this.createComm(),
              h = !1,
              d = !1,
              u = r.onConnectionEvent((e) => {
                if (!this.isCurrentConnectionAttempt(t)) return
                let n = this.comm === r
                switch (e.type) {
                  case R.CONNECTED:
                    break
                  case R.DISCONNECTED:
                  case R.ERROR: {
                    let t = e.type === R.ERROR && e.error instanceof Error ? e.error : void 0
                    n && d && !this.initialLightingPending
                      ? this.invalidateActiveConnection(
                          r,
                          e.type === R.DISCONNECTED ? "sdk-disconnected" : "sdk-error",
                          t,
                        )
                      : ((h = !0), (i = t), n && this.connectionAbortController?.abort())
                  }
                }
              })
            try {
              if ((await r.connect(s), h)) throw i ?? Error("Codex Micro connection failed")
              if (!this.isCurrentConnectionAttempt(t)) {
                ;(this.clearConnectionCandidateRuntime(r, u), await this.disconnectConnectionCandidate(r))
                return
              }
              let o = this.createApi(r)
              ;((this.comm = r),
                (this.api = o),
                (this.connectionAbortController = new AbortController()),
                (this.pendingDeviceRpcCount = 0),
                (this.initialLightingPending = !0),
                (this.joystickInDeadZone = !1),
                (this.unsubscribeConnectionEvent = u),
                (this.connectedDevicePortPath = s.portPath),
                (this.appliedLightingConfigKey = null),
                (this.appliedThreadLightingKey = null),
                (this.lightingOffForInactivity = !0),
                (this.unsubscribeHid = o.onHidReceived((t) => {
                  this.handleHidEvent(t)
                })),
                (this.unsubscribeJoystick = o.onJoystickMove((t) => {
                  this.handleJoystickEvent(t)
                })),
                (d = !0),
                this.setDeviceState({ status: "connected", transport: n, model: l, error: null, battery: null }, e))
              let c = this.lightingActivityId,
                a = await this.applyLatestLighting(o, r)
              if (h) throw i ?? Error("Codex Micro connection failed")
              if (!this.isCurrentConnectionAttempt(t) || this.comm !== r || this.api !== o) return
              if (!a) {
                ;(this.markInitialLightingUnavailable(o, r),
                  (this.initialLightingPending = !1),
                  this.scheduleTransportReconnect())
                return
              }
              ;((this.initialLightingPending = !1),
                this.scheduleSelectionLightingTimer(),
                this.finishLightingUpdate(c, !0, a),
                this.setDeviceState({ status: "connected", transport: n, model: l, error: null, battery: null }, e),
                await this.refreshBatteryStatus(),
                this.comm === r && this.api === o && (this.transportReconnectAttempt = 0))
              return
            } catch (i) {
              if (!this.isCurrentConnectionAttempt(t)) {
                ;(this.clearConnectionCandidateRuntime(r, u), await this.disconnectConnectionCandidate(r))
                return
              }
              ;(T.warning("Codex Micro connection failed", { safe: {}, sensitive: { error: i } }),
                Q(i) && (a = !0),
                this.clearConnectionCandidateRuntime(r, u),
                "connected" === this.deviceState.status &&
                  this.setDeviceState({ status: "detected", transport: n, model: l, error: null, battery: null }, e),
                await this.disconnectConnectionCandidate(r))
            }
          }
          ;(this.setDeviceState({
            status: "error",
            transport: o,
            model: c,
            error: a ? "transport-unavailable" : "connection-failed",
            battery: null,
          }),
            this.scheduleTransportReconnect())
        }
        requestTopologyReconciliation() {
          if (
            "started" !== this.lifecycleState ||
            ((this.topologyReconciliationPending = !0), null != this.topologyReconciliationPromise)
          )
            return
          let t = this.reconcilePendingTopologyChanges().catch((t) => {
            T.warning("Failed to reconcile HID topology", { safe: {}, sensitive: { error: t } })
          })
          ;((this.topologyReconciliationPromise = t),
            t.finally(() => {
              ;((this.topologyReconciliationPromise = null),
                this.topologyReconciliationPending && this.requestTopologyReconciliation())
            }))
        }
        async reconcilePendingTopologyChanges() {
          for (; "started" === this.lifecycleState && this.topologyReconciliationPending;)
            ((this.topologyReconciliationPending = !1), await this.reconcileTopology())
        }
        async reconcileTopology() {
          let t = this.connectionCleanupPromise
          if (null != t && (await t, "started" !== this.lifecycleState)) return
          if (null == this.api) {
            ;(null != this.reconnectTimer && (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
              await this.ensureConnected())
            return
          }
          let e = this.connectionAttemptId,
            i = await this.findDevices()
          if (
            !this.isCurrentConnectionAttempt(e) ||
            i.some(
              ({ isUsbConnection: t, portPath: e }) =>
                e === this.connectedDevicePortPath && (t || i.every((t) => !t.isUsbConnection)),
            )
          )
            return
          this.connectionAttemptId += 1
          let n = this.connectionAttemptId,
            s = this.clearConnectedDeviceRuntime()
          if ((await s?.disconnect(), !this.isCurrentConnectionAttempt(n))) return
          let l = 0 === i.length ? "device-lifecycle" : "transport-handoff"
          ;(this.setDeviceState(
            { status: "not-detected", transport: null, model: null, error: null, battery: null },
            l,
          ),
            await this.ensureConnected(l))
        }
        handleHidTopologyChanged() {
          ;(this.clearTopologySettleRetry(),
            (this.transportReconnectAttempt = 0),
            this.requestTopologyReconciliation(),
            this.scheduleTopologySettleRetry())
        }
        applyLighting(t) {
          return this.enqueueLightingWrite(async () => {
            let e = this.api
            if ("started" !== this.lifecycleState || null == e || null != this.lightingRecoveryTimer) return !1
            if (this.deferLightingUntilInputQuiet(t)) return !0
            let i = (function (t, e, i, n, l) {
                if (null != l)
                  return {
                    keys: E.keys,
                    ambient: { effect: w.snake, brightness: n, speed: 0.4, magic: 0, color: (0, s.q3U)(l) },
                  }
                let r = t.find((t) => t.selected),
                  o = (function (t, e) {
                    switch (t) {
                      case "idle":
                        return null
                      case "recording":
                      case "processing":
                        return {
                          effect: w.snake,
                          brightness: e,
                          speed: 0.4,
                          magic: 0,
                          color: "recording" === t ? 3050327 : 0xffffff,
                        }
                      case "completed":
                        return { effect: w.solid, brightness: e, speed: 0, magic: 0, color: 0xffffff }
                    }
                  })(e, n)
                if (null == r || "off" === r.status) return { keys: E.keys, ambient: o ?? E.ambient }
                let c = {
                    effect: "working" === r.status ? w.snake : w.solid,
                    brightness: n,
                    speed: 0.4 * ("working" === r.status),
                    magic: 0,
                    color: (0, s.q3U)(r.status),
                  },
                  a = o ?? ("working" === r.status || i ? c : E.ambient)
                return {
                  keys: i ? { effect: w.solid, brightness: n, speed: 0, magic: 0, color: a.color } : E.keys,
                  ambient: a,
                }
              })(t.slots, t.voiceState, this.selectionLightingVisible, t.brightness, t.snakingAmbientStatus),
              n = JSON.stringify(i)
            if (n !== this.appliedLightingConfigKey) {
              if (!(await this.writeLightingRpc(e, () => e.sendLightingConfig(i)))) return !1
              this.api === e && (this.appliedLightingConfigKey = n)
            }
            if ("started" !== this.lifecycleState || this.api !== e) return !1
            if (this.deferLightingUntilInputQuiet(t)) return !0
            let l = q(t.slots, t.brightness),
              r = JSON.stringify(l)
            if (r !== this.appliedThreadLightingKey) {
              if (!(await this.writeLightingRpc(e, () => e.sendThreadsLighting(l)))) return !1
              this.api === e && (this.appliedThreadLightingKey = r)
            }
            return (this.api === e && ((this.displayedLightingModel = t), (this.lightingRecoveryAttempt = 0)), !0)
          })
        }
        async applyLatestLighting(t, e) {
          for (; this.api === t && this.comm === e;) {
            let t = this.lastLightingModel
            if (!(await this.applyLighting(t))) break
            if (this.lastLightingModel === t) return !0
          }
          return !1
        }
        handleHidEvent(t) {
          if ("started" !== this.lifecycleState) return
          ;(this.scheduleInputQuietFlush(), this.handleLightingActivity())
          let e = /^AG0([0-5])$/.exec(t.key),
            i = null == e ? null : Number(e[1]),
            n =
              this.initialLightingPending || "unavailable" === this.deviceState.controlPlaneStatus
                ? this.lastLightingModel
                : this.displayedLightingModel
          this.options.onHidEvent({
            key: t.key,
            act: t.act ?? null,
            agent: t.agent ?? null,
            slot: i,
            threadKey: null == i ? null : (n.slots[i]?.threadKey ?? null),
          })
        }
        handleJoystickEvent(t) {
          if ("started" === this.lifecycleState) {
            if (t.distance <= 0.05) {
              this.joystickInDeadZone ||
                ((this.joystickInDeadZone = !0), this.options.onJoystickEvent({ angle: 0, distance: 0 }))
              return
            }
            ;((this.joystickInDeadZone = !1),
              this.scheduleInputQuietFlush(),
              t.distance > 0.1 && this.handleLightingActivity(),
              this.options.onJoystickEvent(t))
          }
        }
        async writeLightingRpc(t, e) {
          let i = this.comm
          if (null == i || this.api !== t) return !1
          try {
            return (await this.retryDeviceRpc(t, i, e, "lighting-rpc"), !0)
          } catch (e) {
            if (this.initialLightingPending && this.api === t && Q(e)) throw e
            await this.handleLightingRpcFailure(t, e instanceof Error ? e : void 0)
          }
          return !1
        }
        async retryDeviceRpc(t, e, i, n) {
          let s = async () => {
              let t = await this.runDeviceRpc(i)
              if (!t.ok) throw new D(t.error.code, t.error.message, t.error.details)
              return t.value
            },
            l = async () => {
              let i = this.initialLightingPending
                ? this.schedule(() => this.markInitialLightingUnavailable(t, e), 50)
                : null
              try {
                return await s()
              } finally {
                null != i && this.clearScheduled(i)
              }
            }
          try {
            return await s()
          } catch (i) {
            if (
              i instanceof D &&
              i.code === k.Timeout &&
              "started" === this.lifecycleState &&
              this.api === t &&
              this.comm === e
            )
              try {
                return await l()
              } catch (s) {
                throw (
                  i instanceof x &&
                    s instanceof x &&
                    !this.initialLightingPending &&
                    this.api === t &&
                    this.comm === e &&
                    (await this.invalidateActiveConnection(e, n, s)),
                  s
                )
              }
            throw i
          }
        }
        async runDeviceRpc(t) {
          let e = this.connectionAbortController
          if (null == e || e.signal.aborted) throw new D(k.DeviceDisconnected, "Device disconnected")
          let i = e.signal,
            n = Promise.withResolvers(),
            s = () => {
              n.reject(new D(k.DeviceDisconnected, "Device disconnected"))
            }
          i.addEventListener("abort", s, { once: !0 })
          let l = this.schedule(() => {
            n.reject(new x(k.Timeout, "Request timed out"))
          }, 15e3)
          try {
            let i = t()
            this.pendingDeviceRpcCount += 1
            let s = () => {
              this.connectionAbortController === e &&
                ((this.pendingDeviceRpcCount -= 1),
                0 === this.pendingDeviceRpcCount && this.resolvePendingDeviceRpcs?.())
            }
            return (i.then(s, s), await Promise.race([i, n.promise]))
          } finally {
            ;(this.clearScheduled(l), i.removeEventListener("abort", s))
          }
        }
        async handleLightingRpcFailure(t, e) {
          let i = this.comm
          if (null != i && this.api === t && Q(e))
            return void (await this.invalidateActiveConnection(i, "lighting-rpc", e))
          if (null != i && this.initialLightingPending) return void this.markInitialLightingUnavailable(t, i)
          if (
            "connected" === this.deviceState.status &&
            "unavailable" !== this.deviceState.controlPlaneStatus &&
            this.api === t &&
            null != i
          ) {
            if (H(e)) return void (await this.invalidateActiveConnection(i, "lighting-rpc", e))
            this.scheduleLightingRecovery(t, i, e)
          }
        }
        markInitialLightingUnavailable(t, e) {
          this.initialLightingPending &&
            this.api === t &&
            this.comm === e &&
            "connected" === this.deviceState.status &&
            this.setDeviceState({
              status: "connected",
              transport: this.deviceState.transport,
              model: this.deviceState.model,
              error: null,
              battery: null,
              controlPlaneStatus: "unavailable",
            })
        }
        scheduleLightingRecovery(t, e, i) {
          if (
            "started" !== this.lifecycleState ||
            this.api !== t ||
            this.comm !== e ||
            null != this.lightingRecoveryTimer
          )
            return
          ;((this.appliedLightingConfigKey = null), (this.appliedThreadLightingKey = null))
          let n = M[Math.min(this.lightingRecoveryAttempt, M.length - 1)]
          ;(0 === this.lightingRecoveryAttempt &&
            T.warning("Codex Micro lighting temporarily unavailable", {
              safe: { code: i instanceof D ? i.code : null, retryDelayMs: n },
              sensitive: { error: i },
            }),
            (this.lightingRecoveryAttempt += 1))
          let s = this.lightingActivityId
          this.lightingRecoveryTimer = this.schedule(() => {
            if (
              ((this.lightingRecoveryTimer = null),
              "started" === this.lifecycleState && this.api === t && this.comm === e)
            ) {
              if (this.lightingOffForInactivity && this.lightingActivityId === s)
                return void this.applyInactivityLightingOff(s)
              this.updateLighting(this.lastLightingModel)
            }
          }, n)
        }
        invalidateActiveConnection(t, e, i) {
          if ("started" !== this.lifecycleState || this.comm !== t) return Promise.resolve()
          let n = this.deviceState.transport
          ;("unavailable" === this.deviceState.controlPlaneStatus && (this.transportReconnectAttempt = 0),
            (this.connectionAttemptId += 1))
          let s = this.connectionAttemptId
          this.clearConnectedDeviceRuntime()
          let l = Promise.resolve()
            .then(() => t.disconnect())
            .catch((t) => {
              T.warning("Failed to disconnect Codex Micro", { safe: {}, sensitive: { error: t } })
            })
            .then(() => {
              this.isCurrentConnectionAttempt(s) && this.scheduleTransportReconnect()
            })
            .finally(() => {
              this.connectionCleanupPromise === l && (this.connectionCleanupPromise = null)
            })
          return (
            (this.connectionCleanupPromise = l),
            this.setDeviceState({
              status: "error",
              transport: n,
              model: this.deviceState.model,
              error: "transport-unavailable",
              battery: null,
            }),
            T.warning("Codex Micro connection invalidated", {
              safe: { code: i instanceof D ? i.code : null, reason: "transport-unavailable", source: e },
              sensitive: { error: i },
            }),
            l
          )
        }
        clearConnectedDeviceRuntime() {
          ;(this.connectionAbortController?.abort(),
            (this.connectionAbortController = null),
            (this.pendingDeviceRpcCount = 0),
            this.resolvePendingDeviceRpcs?.(),
            (this.initialLightingPending = !1),
            (this.lightingWritePromise = Promise.resolve()),
            null != this.reconnectTimer && (this.clearScheduled(this.reconnectTimer), (this.reconnectTimer = null)),
            null != this.batteryRefreshTimer &&
              (this.clearScheduled(this.batteryRefreshTimer), (this.batteryRefreshTimer = null)),
            this.clearLightingRecovery(),
            this.clearSelectionLightingTimer(),
            this.clearInputQuietState(),
            this.resetInactivityLighting(),
            (this.selectionLightingVisible = !1),
            (this.lightingOffForInactivity = !1),
            (this.lightingRestorePromise = null),
            this.clearConnectionSubscriptions())
          let t = this.comm
          return (
            (this.comm = null),
            (this.api = null),
            (this.connectedDevicePortPath = null),
            (this.displayedLightingModel = O),
            (this.appliedLightingConfigKey = null),
            (this.appliedThreadLightingKey = null),
            t
          )
        }
        clearConnectionCandidateRuntime(t, e) {
          this.comm === t ? this.clearConnectedDeviceRuntime() : e()
        }
        async disconnectConnectionCandidate(t) {
          try {
            await t.disconnect()
          } catch (t) {
            T.warning("Failed to disconnect Codex Micro connection candidate", { safe: {}, sensitive: { error: t } })
          }
        }
        async retryInitialLighting(t, e) {
          if (
            "started" !== this.lifecycleState ||
            "connected" !== this.deviceState.status ||
            "unavailable" !== this.deviceState.controlPlaneStatus ||
            this.api !== t ||
            this.comm !== e
          )
            return
          let i = this.lightingActivityId,
            n = await this.applyLatestLighting(t, e)
          if ("started" === this.lifecycleState && this.api === t && this.comm === e) {
            if (!n) return void this.scheduleTransportReconnect()
            ;(this.scheduleSelectionLightingTimer(),
              this.finishLightingUpdate(i, !0, n),
              this.setDeviceState({
                status: "connected",
                transport: this.deviceState.transport,
                model: this.deviceState.model,
                error: null,
                battery: null,
              }),
              await this.refreshBatteryStatus(),
              this.api === t && this.comm === e && (this.transportReconnectAttempt = 0))
          }
        }
        scheduleTransportReconnect() {
          if ("started" !== this.lifecycleState || null != this.reconnectTimer) return
          let t = M[Math.min(this.transportReconnectAttempt, M.length - 1)]
          ;((this.transportReconnectAttempt += 1),
            (this.reconnectTimer = this.schedule(() => {
              this.reconnectTimer = null
              let t = this.api,
                e = this.comm
              null != t && null != e ? this.retryInitialLighting(t, e) : this.ensureConnected()
            }, t)))
        }
        scheduleTopologySettleRetry() {
          let t = F[this.topologySettleRetryIndex]
          "started" === this.lifecycleState &&
            null == this.topologySettleTimer &&
            null != t &&
            ((this.topologySettleRetryIndex += 1),
            (this.topologySettleTimer = this.schedule(() => {
              ;((this.topologySettleTimer = null),
                this.requestTopologyReconciliation(),
                this.scheduleTopologySettleRetry())
            }, t)))
        }
        clearTopologySettleRetry() {
          ;(null != this.topologySettleTimer &&
            (this.clearScheduled(this.topologySettleTimer), (this.topologySettleTimer = null)),
            (this.topologySettleRetryIndex = 0))
        }
        scheduleTopologyFallbackScan() {
          "started" === this.lifecycleState &&
            null == this.hidTopologyWatcher &&
            null == this.topologyFallbackTimer &&
            (this.topologyFallbackTimer = this.schedule(() => {
              ;((this.topologyFallbackTimer = null),
                this.requestTopologyReconciliation(),
                this.scheduleTopologyFallbackScan())
            }, 3e4))
        }
        clearConnectionSubscriptions() {
          ;(this.unsubscribeConnectionEvent?.(),
            this.unsubscribeHid?.(),
            this.unsubscribeJoystick?.(),
            (this.unsubscribeConnectionEvent = null),
            (this.unsubscribeHid = null),
            (this.unsubscribeJoystick = null))
        }
        clearLightingRecovery() {
          ;(null != this.lightingRecoveryTimer &&
            (this.clearScheduled(this.lightingRecoveryTimer), (this.lightingRecoveryTimer = null)),
            (this.lightingRecoveryAttempt = 0))
        }
        scheduleSelectionLightingTimer() {
          this.selectionLightingVisible &&
            null == this.selectionLightingTimer &&
            (this.selectionLightingTimer = this.schedule(() => {
              ;((this.selectionLightingTimer = null),
                (this.selectionLightingVisible = !1),
                "unavailable" !== this.deviceState.controlPlaneStatus && this.applyLighting(this.lastLightingModel))
            }, 4e3))
        }
        clearSelectionLightingTimer() {
          null != this.selectionLightingTimer &&
            (this.clearScheduled(this.selectionLightingTimer), (this.selectionLightingTimer = null))
        }
        scheduleInputQuietFlush() {
          this.initialLightingPending ||
            "connected" !== this.deviceState.status ||
            "unavailable" === this.deviceState.controlPlaneStatus ||
            (null != this.inputQuietTimer && this.clearScheduled(this.inputQuietTimer),
            (this.inputQuietTimer = this.schedule(() => {
              this.inputQuietTimer = null
              let t = this.deferredLightingModel
              this.deferredLightingModel = null
              let e = this.batteryRefreshPending
              ;((this.batteryRefreshPending = !1), this.flushDeferredDeviceWrites(t, e))
            }, 100)))
        }
        deferLightingUntilInputQuiet(t) {
          return null != this.inputQuietTimer && ((this.deferredLightingModel = t), !0)
        }
        clearInputQuietState() {
          ;(null != this.inputQuietTimer && (this.clearScheduled(this.inputQuietTimer), (this.inputQuietTimer = null)),
            (this.deferredLightingModel = null),
            (this.batteryRefreshPending = !1))
        }
        async flushDeferredDeviceWrites(t, e) {
          ;(null != t && (await this.applyLighting(t)), e && (await this.refreshBatteryStatus()))
        }
        resetInactivityLighting() {
          return (this.clearInactivityLightingTimer(), (this.lightingActivityId += 1), this.lightingActivityId)
        }
        handleLightingActivity() {
          if (
            this.initialLightingPending ||
            "connected" !== this.deviceState.status ||
            "unavailable" === this.deviceState.controlPlaneStatus
          )
            return
          let t = this.resetInactivityLighting()
          if (!this.lightingOffForInactivity) return void this.scheduleInactivityLightingOff(t)
          let e = this.lightingRestorePromise ?? this.applyLighting(this.lastLightingModel)
          this.lightingRestorePromise = e
          let i = (i) => {
            ;(this.lightingRestorePromise === e && (this.lightingRestorePromise = null),
              this.finishLightingUpdate(t, !0, i))
          }
          e.then(i, () => {
            i(!1)
          })
        }
        finishLightingUpdate(t, e, i) {
          if (t === this.lightingActivityId) {
            if (e && !i) return void this.scheduleInactivityLightingOff(t)
            ;((this.lightingOffForInactivity = !1), this.scheduleInactivityLightingOff(t))
          }
        }
        scheduleInactivityLightingOff(t) {
          let e = this.lastLightingModel.inactivityTimeoutMs
          null != e &&
            "started" === this.lifecycleState &&
            null != this.api &&
            t === this.lightingActivityId &&
            (this.clearInactivityLightingTimer(),
            (this.inactivityLightingTimer = this.schedule(() => {
              if (((this.inactivityLightingTimer = null), t !== this.lightingActivityId)) return
              this.lightingOffForInactivity = !0
              let e = (e) => {
                t === this.lightingActivityId &&
                  this.lightingOffForInactivity &&
                  !e &&
                  this.scheduleInactivityLightingOff(t)
              }
              this.applyInactivityLightingOff(t).then(e, () => e(!1))
            }, e)))
        }
        clearInactivityLightingTimer() {
          null != this.inactivityLightingTimer &&
            (this.clearScheduled(this.inactivityLightingTimer), (this.inactivityLightingTimer = null))
        }
        applyInactivityLightingOff(t) {
          return this.enqueueLightingWrite(async () => {
            let e = this.api
            return (
              "started" === this.lifecycleState &&
              null != e &&
              t === this.lightingActivityId &&
              !!this.lightingOffForInactivity &&
              ((this.appliedLightingConfigKey = null),
              (this.appliedThreadLightingKey = null),
              !!(await this.writeLightingRpc(e, () => e.sendLightingConfig(E))) &&
                "started" === this.lifecycleState &&
                this.api === e &&
                t === this.lightingActivityId &&
                !!this.lightingOffForInactivity &&
                this.writeLightingRpc(e, () => e.sendThreadsLighting(q(O.slots, 0))))
            )
          })
        }
        enqueueLightingWrite(t) {
          let e = this.lightingWritePromise.then(t, t)
          return (
            (this.lightingWritePromise = e.then(
              () => void 0,
              () => void 0,
            )),
            e
          )
        }
        async refreshBatteryStatus() {
          let t = this.api,
            e = this.comm
          if (
            "started" === this.lifecycleState &&
            "unavailable" !== this.deviceState.controlPlaneStatus &&
            null != t &&
            null != e
          ) {
            if (null != this.inputQuietTimer || this.lastLightingModel.suspendDeviceStatusRefresh) {
              this.batteryRefreshPending = !0
              return
            }
            try {
              let i = await this.retryDeviceRpc(t, e, () => t.getDeviceStatus(), "battery-rpc")
              if (this.api !== t || this.comm !== e) return
              this.setDeviceState({
                status: "connected",
                transport: this.deviceState.transport,
                model: this.deviceState.model,
                error: null,
                battery:
                  null == i.batteryPercentage
                    ? null
                    : { percentage: i.batteryPercentage, isCharging: i.isCharging ?? null },
              })
            } catch (i) {
              if (H(i))
                return void (await this.invalidateActiveConnection(e, "battery-rpc", i instanceof Error ? i : void 0))
              if (this.api !== t || this.comm !== e) return
              this.setDeviceState({
                status: "connected",
                transport: this.deviceState.transport,
                model: this.deviceState.model,
                error: null,
                battery: null,
              })
            }
            "started" === this.lifecycleState &&
              this.api === t &&
              this.comm === e &&
              null == this.batteryRefreshTimer &&
              (this.batteryRefreshTimer = this.schedule(() => {
                ;((this.batteryRefreshTimer = null), this.refreshBatteryStatus())
              }, 6e4))
          }
        }
        setDeviceState(t, e = "device-lifecycle") {
          ;(this.deviceStateCause !== e ||
            this.deviceState.status !== t.status ||
            this.deviceState.transport !== t.transport ||
            this.deviceState.model !== t.model ||
            this.deviceState.error !== t.error ||
            this.deviceState.controlPlaneStatus !== t.controlPlaneStatus ||
            this.deviceState.battery?.percentage !== t.battery?.percentage ||
            this.deviceState.battery?.isCharging !== t.battery?.isCharging) &&
            ((this.deviceStateCause = e), (this.deviceState = t), this.options.onDeviceStateChanged(t, e))
        }
        isCurrentConnectionAttempt(t) {
          return "started" === this.lifecycleState && this.connectionAttemptId === t
        }
      }
      function K(t) {
        return null == t.isUsbConnection ? "unknown" : t.isUsbConnection ? "usb" : "bluetooth"
      }
      function W(t) {
        return t.deviceType === P.CreatorMicroV2 ? "creator-micro-v2" : "codex-micro"
      }
      function Q(t) {
        return t instanceof D && (t.code === k.DeviceDisconnected || t.code === k.HidUnavailable)
      }
      function H(t) {
        if (!(t instanceof D)) return !1
        switch (t.code) {
          case k.WriteFailed:
          case k.HidUnavailable:
          case k.DeviceDisconnected:
            return !0
          case k.Timeout:
          case k.AlreadyConnected:
          case k.RpcError:
          case k.InvalidResponse:
          case k.Aborted:
          case k.Unknown:
            return !1
        }
      }
      function q(t, e) {
        return t.map((t) => {
          if ("off" === t.status)
            return {
              id: t.id,
              color: 0,
              brightness: 0,
              effect: w.off,
              speed: 0,
              syncKeysLighting: !1,
              syncAmbientLighting: !1,
            }
          let i = t.selected || !!t.pulsing
          return {
            id: t.id,
            color: (0, s.q3U)(t.status),
            brightness: e,
            effect: i ? w.breath : w.solid,
            speed: 0.4 * !!i,
            syncKeysLighting: !1,
            syncAmbientLighting: !1,
          }
        })
      }
    },
  }))
//# sourceMappingURL=early-bootstrap-683-6f96aeff2cec2ea8.js.map
