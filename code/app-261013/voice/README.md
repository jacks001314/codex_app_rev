# voice

Realtime Voice 与听写。27 个 chunk，原始 385,244 B。

- `voice/voice-session-*.js`：语音会话状态机；
- `voice/voice-session-parameters-*.js`：`backend_reasoning_effort` 等参数；
- `voice/voice-dsp-*.js`：Silero VAD v6 与音频处理；
- `voice/realtime-buffered-audio-worklet-*.js`：连接中缓冲；
- `voice/voice-settings-*.js`：Voice 设置页；
- `voice/wingman-voice-nux-*.js`：首次使用披露；
- `voice/realtime-voice-*.js`：启动面、picker、状态信号。

分析见 `../../realtime-voice.md`。
