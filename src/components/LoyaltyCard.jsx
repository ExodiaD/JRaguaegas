import { Droplet, Gift, Star } from 'lucide-react'

const stamps = Array.from({ length: 10 }, (_, i) => i)

export default function LoyaltyCard() {
  return (
    <div className="loyalty-card relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light p-[2px]">
      <div className="relative bg-gradient-to-br from-brand-blue-dark via-[#1a2e6e] to-brand-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-4 right-4 opacity-[0.03]">
          <Droplet className="w-32 h-32 text-white" />
        </div>

        {/* Header */}
        <div className="relative flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center">
            <Star className="w-5 h-5 text-brand-yellow" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base">Cartão Fidelidade</h3>
            <p className="text-blue-300 text-[10px] sm:text-xs font-medium">J.R Água e Gás</p>
          </div>
        </div>

        {/* Stamps grid */}
        <div className="relative grid grid-cols-5 gap-2.5 sm:gap-3 mb-6">
          {stamps.map((i) => (
            <div
              key={i}
              className="stamp-slot aspect-square rounded-xl sm:rounded-2xl bg-white/5 border-2 border-dashed border-white/15 flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/25 group"
            >
              <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400/30 group-hover:text-blue-300/50 transition-colors" />
              <span className="absolute text-[9px] font-bold text-white/20 bottom-1">{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Reward indicator */}
        <div className="relative flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-yellow flex items-center justify-center shrink-0">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue-dark" />
          </div>
          <div>
            <p className="text-brand-yellow font-bold text-sm sm:text-base">
              Completou 10? Ganhe 1 grátis!
            </p>
            <p className="text-blue-300 text-[10px] sm:text-xs">
              O motoboy carimba na entrega. Simples assim!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
