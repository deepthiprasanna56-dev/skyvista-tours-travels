import { useState, useEffect, useCallback } from 'react'
import { Icon } from './Icons'

export function IntroScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const handleEnter = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onFinish()
    }, 600)
  }, [onFinish])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  // Auto exit when progress completes
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        handleEnter()
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [progress, handleEnter])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0d1c18] text-white overflow-hidden transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 3D Atmospheric Radar & Flight Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d3f35] via-[#0e211c] to-[#08120f] pointer-events-none" />

      {/* Animated Radar Rings */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-emerald-500/15 animate-ping duration-[4000ms] pointer-events-none" />
      <div className="absolute w-[440px] h-[440px] rounded-full border border-emerald-400/20 pointer-events-none animate-pulse" />
      <div className="absolute w-[280px] h-[280px] rounded-full border border-emerald-300/25 pointer-events-none" />

      {/* Star Particles / Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#e4c99b] rounded-full animate-pulse"
            style={{
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 95}%`,
              animationDelay: `${(i * 0.2)}s`,
              opacity: (i % 3 === 0) ? 0.8 : 0.4,
            }}
          />
        ))}
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-lg w-full mx-6 p-8 sm:p-10 text-center rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_0_80px_rgba(20,50,40,0.8)] space-y-6 transform hover:scale-[1.01] transition-transform">
        {/* Animated Flying Airplane Badge with 3D Float & Glow */}
        <div className="relative inline-block mx-auto">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1b3b32] to-[#36685a] p-1 shadow-[0_0_35px_rgba(49,150,120,0.6)] animate-float">
            <div className="w-full h-full rounded-full bg-[#122722] flex items-center justify-center border border-emerald-400/30">
              <span className="text-[#e4c99b] transform -rotate-45 scale-125 inline-block animate-pulse">
                <Icon name="plane" size={42} />
              </span>
            </div>
          </div>
          {/* Glowing orbital dot */}
          <div className="absolute top-0 right-1 w-3.5 h-3.5 rounded-full bg-[#e4c99b] shadow-[0_0_12px_#e4c99b] animate-ping" />
        </div>

        {/* Brand Title with Glowing 3D Text */}
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.25em] font-extrabold uppercase bg-emerald-500/10 text-[#e4c99b] border border-[#e4c99b]/25">
            ✦ FLIGHT CLEARANCE APPROVED ✦
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Aeroplane <span className="text-[#e4c99b] italic">Tours & Travels</span>
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/70 font-light max-w-xs mx-auto">
            Preparing your luxury aviation & global travel experience...
          </p>
        </div>

        {/* Progress Bar & Telemetry Status */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center text-xs font-mono text-[#e4c99b]/90">
            <span>RADAR: LIVE 24/7</span>
            <span>{progress}% READY</span>
          </div>

          <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2a6858] via-[#e4c99b] to-[#45b08e] transition-all duration-150 shadow-[0_0_15px_#e4c99b]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/50 font-mono">
            <span>ROUTE: WORLDWIDE</span>
            <span>CABIN: FIRST CLASS</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleEnter}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#e4c99b] to-[#d6b782] text-[#0e211c] font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(228,201,155,0.4)] hover:shadow-[0_0_40px_rgba(228,201,155,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Take Flight Now</span>
            <Icon name="planeTakeoff" size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
