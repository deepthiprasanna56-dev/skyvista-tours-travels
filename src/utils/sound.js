// Web Audio API ambient sounds for luxury flight experience without external audio files
let audioCtx = null

function getAudioContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export function playCabinChime() {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    // Two-tone First Class cabin chime (Ding-Dong: F5 followed by C5)
    const now = ctx.currentTime

    // First tone (Ding)
    const osc1 = ctx.createOscillator()
    const gain1 = ctx.createGain()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(698.46, now) // F5
    gain1.gain.setValueAtTime(0.18, now)
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2)
    osc1.connect(gain1)
    gain1.connect(ctx.destination)
    osc1.start(now)
    osc1.stop(now + 1.2)

    // Second tone (Dong)
    const osc2 = ctx.createOscillator()
    const gain2 = ctx.createGain()
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(523.25, now + 0.35) // C5
    gain2.gain.setValueAtTime(0.16, now + 0.35)
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.8)
    osc2.connect(gain2)
    gain2.connect(ctx.destination)
    osc2.start(now + 0.35)
    osc2.stop(now + 1.8)
  } catch {
    // AudioContext blocked or not allowed, ignore silently
  }
}

export function playButtonBeep() {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, now)
    gain.gain.setValueAtTime(0.05, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + 0.1)
  } catch {
    // ignore
  }
}

export function playEngineGlide() {
  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = 'triangle'
    osc.frequency.setValueAtTime(120, now)
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.8)

    gain.gain.setValueAtTime(0.01, now)
    gain.gain.linearRampToValueAtTime(0.08, now + 0.4)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + 1.0)
  } catch {
    // ignore
  }
}
