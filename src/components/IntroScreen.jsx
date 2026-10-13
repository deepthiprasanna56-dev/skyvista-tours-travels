import { useState, useEffect, useCallback } from 'react'
import { Icon } from './Icons'
import { playCabinChime, playButtonBeep } from '../utils/sound'

export function IntroScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const handleEnter = useCallback(() => {
    if (soundEnabled) {
      playCabinChime()
    }
    setIsExiting(true)
    setTimeout(() => {
      onFinish()
    }, 650)
  }, [onFinish, soundEnabled])

  // Progress counter with authentic aviation initialization steps
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 28)

    return () => clearInterval(timer)
  }, [])

  // Auto exit shortly after reaching 100%
  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        handleEnter()
      }, 900)
      return () => clearTimeout(exitTimer)
    }
  }, [progress, handleEnter])

  // Keyboard shortcut: ESC to skip intro
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        handleEnter()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleEnter])

  // Telemetry status description based on percentage
  const getStatusMessage = (p) => {
    if (p < 25) return 'Calibrating global navigation & 450+ IATA routes...'
    if (p < 55) return 'Syncing direct airline GDS live fare databases...'
    if (p < 85) return 'Configuring VIP concierge & bespoke holiday suites...'
    return 'Flight clearance approved • Ready for immediate takeoff'
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8 md:p-12 bg-[#050d14] text-white overflow-hidden transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Cinematic Depth & Ambient Aviation Runway Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#0f2233_0%,#06111a_60%,#03080e_100%)] pointer-events-none" />

      {/* Runway Approach Guideline Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-full bg-gradient-to-t from-[#e4c99b] via-cyan-400/30 to-transparent" />
        <div className="absolute left-1/2 -translate-x-36 bottom-0 w-[1px] h-full bg-gradient-to-t from-cyan-500/40 to-transparent transform -skew-x-12" />
        <div className="absolute left-1/2 translate-x-36 bottom-0 w-[1px] h-full bg-gradient-to-t from-cyan-500/40 to-transparent transform skew-x-12" />
      </div>

      {/* Subtle Atmospheric Radar Waves */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-cyan-500/10 pointer-events-none animate-ping duration-[6000ms]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-cyan-400/15 pointer-events-none" />

      {/* TOP BAR: Executive Status, Audio Toggle & Skip Action */}
      <header className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-[#0a1826] text-[#e4c99b] flex items-center justify-center border border-[#e4c99b]/30 shadow-[0_0_15px_rgba(228,201,155,0.25)]">
            <Icon name="plane" size={18} />
          </span>
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#e4c99b] uppercase block">
              AEROPLANE VIP PRIVATE & COMMERCIAL FLEET
            </span>
            <span className="text-[10px] text-white/50 tracking-wider flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>RADAR SYSTEM: OPERATIONAL · 24/7 LIVE</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              playButtonBeep()
              setSoundEnabled(!soundEnabled)
            }}
            className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white/70 hover:text-white transition-all font-mono flex items-center gap-1.5 cursor-pointer"
            title={soundEnabled ? 'Mute audio' : 'Enable audio'}
          >
            <span>{soundEnabled ? '🔊 Sound On' : '🔇 Muted'}</span>
          </button>

          {/* Skip Intro */}
          <button
            onClick={handleEnter}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-[#e4c99b]/50 text-xs text-white/80 hover:text-white transition-all backdrop-blur-md cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(228,201,155,0.3)]"
            aria-label="Skip introduction"
          >
            <span className="font-mono tracking-wider text-[11px]">SKIP INTRO</span>
            <span className="text-[#e4c99b] group-hover:translate-x-0.5 transition-transform font-bold">➔</span>
          </button>
        </div>
      </header>

      {/* CENTER: Professional VIP First-Class Boarding Pass & Telemetry Hub */}
      <main className="relative z-20 w-full max-w-2xl mx-auto my-auto py-6">
        <div className="relative bg-[#091724]/90 backdrop-blur-2xl rounded-3xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.8),_0_0_40px_rgba(14,165,233,0.2)] overflow-hidden">
          {/* Top Boarding Pass Header Ribbon */}
          <div className="px-6 sm:px-8 py-4 bg-gradient-to-r from-[#0b1f30] via-[#102d45] to-[#0b1f30] border-b border-white/15 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-mono tracking-widest text-[#e4c99b] uppercase text-[11px] font-bold">
              <span>✦ PRIORITY VIP BOARDING PASS</span>
              <span>·</span>
              <span className="text-white/80">FIRST CLASS SUITE</span>
            </div>
            <span className="font-mono text-[11px] text-cyan-300 font-bold tracking-wider">
              FLIGHT AA-880
            </span>
          </div>

          <div className="p-6 sm:p-9 space-y-7">
            {/* Passenger & Flight Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-white/10 font-mono text-xs">
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">PASSENGER</span>
                <span className="font-bold text-white tracking-wide">VIP TRAVELER</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">GATE / SEAT</span>
                <span className="font-bold text-[#e4c99b] tracking-wide">01A / SUITE 1A</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">ORIGIN</span>
                <span className="font-bold text-white tracking-wide">NEW YORK (JFK)</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">DESTINATION</span>
                <span className="font-bold text-cyan-300 tracking-wide">WORLDWIDE (GLOBAL)</span>
              </div>
            </div>

            {/* Brand Title & Hero Statement */}
            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-[0.25em] uppercase text-[#e4c99b] bg-[#e4c99b]/10 border border-[#e4c99b]/25">
                ✦ OFFICIAL IATA ACCREDITED AGENCY ✦
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight">
                Aeroplane <span className="italic text-[#e4c99b]">Tours & Travels</span>
              </h1>
              <p className="text-xs sm:text-sm text-white/70 font-light max-w-md mx-auto leading-relaxed pt-1">
                Elevating private aviation, luxury commercial suites & bespoke worldwide expeditions with effortless elegance.
              </p>
            </div>

            {/* Aircraft Cruising Silhouette Animation */}
            <div className="relative py-2 overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#e4c99b] mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e4c99b] animate-ping" />
                  <span>PRE-FLIGHT TELEMETRY</span>
                </span>
                <span className="font-bold text-white">{progress}% INITIALIZED</span>
              </div>

              {/* Progress Track */}
              <div className="relative w-full h-2 rounded-full bg-black/50 p-0.5 border border-white/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-[#e4c99b] to-[#10b981] transition-all duration-150 shadow-[0_0_20px_#e4c99b]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-white/60">
                <span className="truncate pr-2">{getStatusMessage(progress)}</span>
                <span className="font-bold text-cyan-400 flex-shrink-0">
                  {progress === 100 ? 'CLEARANCE READY' : 'CALIBRATING'}
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={handleEnter}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#e4c99b] via-[#f0dcbe] to-[#d8b884] text-[#050d14] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(228,201,155,0.45)] hover:shadow-[0_0_40px_rgba(228,201,155,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Board Flight & Enter Website</span>
                <Icon name="arrowRight" size={17} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER BAR: Security Badge & Copyright */}
      <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/45 w-full max-w-6xl mx-auto pt-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Icon name="shield" size={13} className="text-[#e4c99b]" />
            <span>IATA VERIFIED #96-4028</span>
          </span>
          <span>·</span>
          <span>PCI-DSS ENCRYPTED</span>
          <span>·</span>
          <span>24/7 CONCIERGE HOTLINE</span>
        </div>
        <div>
          <span>PRESS [ESC] TO SKIP DIRECTLY</span>
        </div>
      </footer>
    </div>
  )
}
