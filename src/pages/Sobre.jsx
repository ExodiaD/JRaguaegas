import { MapPin, Clock, Smartphone, Phone, Droplet, Flame, Users, Heart, Truck } from 'lucide-react'

const schedule = [
  { day: 'Segunda-feira', hours: '08:00 — 19:00', open: true },
  { day: 'Terça-feira', hours: '08:00 — 19:00', open: true },
  { day: 'Quarta-feira', hours: '08:00 — 19:00', open: true },
  { day: 'Quinta-feira', hours: '08:00 — 19:00', open: true },
  { day: 'Sexta-feira', hours: '08:00 — 19:00', open: true },
  { day: 'Sábado', hours: '08:00 — 19:00', open: true },
  { day: 'Domingo', hours: '08:00 — 14:00', open: true },
  { day: 'Feriados', hours: '08:00 — 14:00', open: true },
]

function isOpenNow() {
  const now = new Date()
  const hour = now.getHours()
  const day = now.getDay() // 0 = Sunday
  
  if (day === 0) return hour >= 8 && hour < 14
  return hour >= 8 && hour < 19
}

export default function Sobre() {
  const openNow = isOpenNow()

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <section className="bg-brand-blue-dark py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Sobre a <span className="text-brand-yellow">J.R Água e Gás</span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto">
            Conheça nossa história, área de cobertura e horários de funcionamento.
          </p>
        </div>
      </section>

      {/* ======== HISTÓRIA ======== */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <Heart className="w-3.5 h-3.5" />
                Nossa História
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Compromisso com a{' '}
                <span className="text-brand-blue-light">comunidade de Jandira</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A <strong className="text-gray-900">J.R Água e Gás</strong> nasceu da vontade de 
                  oferecer um serviço essencial com qualidade, agilidade e preço justo para as famílias 
                  e comércios de Jandira e região.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida baseada na confiança de nossos 
                  clientes. Sabemos que água e gás são itens de primeira necessidade — por isso, 
                  garantimos entrega rápida e atendimento humanizado, todos os dias da semana.
                </p>
                <p>
                  Trabalhamos com as marcas mais reconhecidas do mercado, como <strong>Crystal</strong>, 
                  <strong> Klarina</strong>, <strong>Supergasbras</strong>, <strong>Liquigás</strong> e 
                  <strong> Ultragaz</strong>, para que você tenha sempre o melhor produto na sua casa.
                </p>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Truck,
                  value: 'Rápida',
                  label: 'Entrega na região',
                  color: 'bg-blue-50 text-blue-600',
                  iconBg: 'bg-blue-100',
                },
                {
                  icon: Users,
                  value: 'Local',
                  label: 'Negócio da comunidade',
                  color: 'bg-yellow-50 text-yellow-700',
                  iconBg: 'bg-yellow-100',
                },
                {
                  icon: Droplet,
                  value: '2+',
                  label: 'Marcas de água',
                  color: 'bg-cyan-50 text-cyan-700',
                  iconBg: 'bg-cyan-100',
                },
                {
                  icon: Flame,
                  value: '3+',
                  label: 'Marcas de gás',
                  color: 'bg-orange-50 text-orange-600',
                  iconBg: 'bg-orange-100',
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`card-hover ${stat.color} rounded-2xl p-5 sm:p-6 border border-current/10`}
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center mb-3`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm opacity-70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== ÁREA DE COBERTURA ======== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Área de Cobertura
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Onde entregamos
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Atendemos toda a região de Jandira e bairros próximos de Itapevi e Barueri.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-blue-dark to-brand-blue rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map area */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <MapPin className="w-10 h-10 text-brand-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Jandira, SP e Região</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-4 max-w-sm">
                  Atendemos toda Jandira e bairros próximos de Itapevi e Barueri.
                  Entrega rápida na sua porta — peça pelo WhatsApp!
                </p>

                {/* Store address */}
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 mb-6 w-full max-w-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">Nossa Loja</p>
                    <p className="text-blue-200 text-xs leading-relaxed">
                      Rua Patrícia, 43 — Sagrado Coração<br />Jandira, SP
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5511958670716?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20saber%20se%20vocês%20entregam%20no%20meu%20endereço."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="coverage-cta-whatsapp"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Smartphone className="w-4 h-4" />
                  Consultar meu endereço
                </a>
              </div>

              {/* Covered areas */}
              <div className="glass rounded-2xl p-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Regiões Atendidas</h4>
                <div className="grid gap-3">
                  {[
                    { area: 'Toda Jandira', highlight: true },
                    { area: 'Bairros próximos de Itapevi', highlight: false },
                    { area: 'Bairros próximos de Barueri', highlight: false },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${
                        item.highlight
                          ? 'bg-brand-yellow/10 border-brand-yellow/20'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full shrink-0 ${item.highlight ? 'bg-brand-yellow' : 'bg-green-400'}`} />
                      <span className={`text-sm font-medium ${item.highlight ? 'text-brand-yellow' : 'text-blue-100'}`}>{item.area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-blue-300 text-xs mt-4 italic">
                  * Consulte disponibilidade para outros bairros via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== HORÁRIOS ======== */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5" />
              Horários de Funcionamento
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Quando estamos abertos
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${openNow ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className={`text-sm font-semibold ${openNow ? 'text-green-700' : 'text-red-600'}`}>
                {openNow ? 'Estamos abertos agora!' : 'Estamos fechados agora'}
              </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-2 bg-brand-blue-dark text-white px-6 py-4">
                <span className="text-sm font-bold uppercase tracking-wider">Dia</span>
                <span className="text-sm font-bold uppercase tracking-wider text-right">Horário</span>
              </div>

              {/* Table rows */}
              <div className="divide-y divide-gray-100">
                {schedule.map((item, idx) => {
                  const isWeekend = item.day === 'Domingo' || item.day === 'Feriados' || item.day === 'Sábado'
                  const isSpecial = item.day === 'Domingo' || item.day === 'Feriados'
                  return (
                    <div
                      key={idx}
                      className={`grid grid-cols-2 px-6 py-4 items-center transition-colors hover:bg-gray-50 ${
                        isSpecial ? 'bg-yellow-50/50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.open ? 'bg-green-400' : 'bg-red-400'}`} />
                        <span className={`text-sm font-semibold ${isWeekend ? 'text-brand-blue-light' : 'text-gray-700'}`}>
                          {item.day}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-mono font-semibold ${
                          isSpecial ? 'text-orange-600' : 'text-gray-600'
                        }`}>
                          {item.hours}
                        </span>
                        {isSpecial && (
                          <span className="ml-2 text-[10px] font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                            Reduzido
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Contact note */}
            <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100 text-center">
              <p className="text-sm text-blue-800 mb-3">
                <strong>Precisa falar conosco?</strong> Estamos sempre prontos para atender por telefone ou WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:+551146197268"
                  id="schedule-cta-phone"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue-dark hover:bg-gray-900 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  (11) 4619-7268
                </a>
                <a
                  href="https://wa.me/5511958670716?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20pedir%20água/gás."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="schedule-cta-whatsapp"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Smartphone className="w-4 h-4" />
                  (11) 95867-0716
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
