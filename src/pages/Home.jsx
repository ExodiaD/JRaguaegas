import { Link } from 'react-router-dom'
import { Droplet, Flame, Clock, MapPin, Smartphone, Truck, Shield, Zap, Gift } from 'lucide-react'
import LoyaltyCard from '../components/LoyaltyCard'
import WaterEffects from '../components/WaterEffects'

export default function Home({ whatsappUrl }) {
  return (
    <>
      {/* ======== HERO SECTION ======== */}
      <section className="hero-gradient relative overflow-hidden pt-20 sm:pt-24">
        {/* Water effects — bubbles, droplets, shimmer */}
        <WaterEffects />

        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="animate-slide-up">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-200 text-xs font-semibold tracking-wide uppercase mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  Jandira, SP e Região
                </span>
              </div>

              <h1 className="animate-slide-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Água e Gás{' '}
                <span className="text-brand-yellow">na sua porta</span>{' '}
                em minutos
              </h1>

              <p className="animate-slide-up-delay-2 text-lg sm:text-xl text-blue-200 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Entrega rápida de galões de água mineral e botijões de gás de cozinha. 
                Peça pelo WhatsApp e receba sem complicação.
              </p>

              <div className="animate-slide-up-delay-3 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-whatsapp"
                  className="group flex items-center gap-3 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-base rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pedir Agora
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <Link
                  to="/produtos"
                  id="hero-cta-products"
                  className="flex items-center gap-2 px-6 py-4 text-white/90 hover:text-white font-semibold text-base border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
                >
                  Ver Produtos
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Glow circle */}
                <div className="absolute inset-0 bg-brand-yellow/10 rounded-full blur-3xl scale-110" />
                
                {/* Main card */}
                <div className="relative glass rounded-3xl p-8 sm:p-10">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Water card */}
                    <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                        <Droplet className="w-8 h-8 text-blue-300" />
                      </div>
                      <span className="text-white font-bold text-sm mb-1">Água Mineral</span>
                      <span className="text-blue-300 text-xs">Galão 20L</span>
                      <span className="text-brand-yellow font-black text-lg mt-2">R$ 15</span>
                      <span className="text-blue-400 text-[10px]">entrega</span>
                    </div>

                    {/* Gas card */}
                    <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">
                        <Flame className="w-8 h-8 text-orange-300" />
                      </div>
                      <span className="text-white font-bold text-sm mb-1">Gás de Cozinha</span>
                      <span className="text-blue-300 text-xs">Botijão 13kg</span>
                      <span className="text-brand-yellow font-black text-lg mt-2">R$ 125</span>
                      <span className="text-blue-400 text-[10px]">a partir de</span>
                    </div>
                  </div>

                  {/* Quick info */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                      <Zap className="w-3.5 h-3.5 text-brand-yellow" />
                      Entrega Rápida
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="flex items-center gap-1.5 text-blue-300 text-xs">
                      <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                      Todos os dias
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated wave separator */}
        <div className="relative -mb-1 wave-separator overflow-hidden">
          <svg viewBox="0 0 2880 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-16 sm:h-20">
            <path d="M0 40C120 60 240 80 360 60C480 40 600 0 720 10C840 20 960 60 1080 70C1200 80 1320 40 1440 30C1560 20 1680 60 1800 50C1920 40 2040 10 2160 20C2280 30 2400 60 2520 50C2640 40 2760 20 2880 40V80H0V40Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* ======== PROMO BANNER ======== */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-blue-dark via-brand-blue to-brand-blue-light p-[2px]">
            <div className="shimmer-border absolute inset-0 rounded-2xl sm:rounded-3xl" />
            <div className="relative bg-brand-blue-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-yellow/10 shrink-0">
                  <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-brand-yellow" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2">
                    Entrega Rápida em <span className="text-brand-yellow">Jandira e Região</span>
                  </h2>
                  <p className="text-blue-300 text-sm sm:text-base max-w-2xl">
                    Peça pelo WhatsApp e receba água mineral ou gás de cozinha direto na sua casa. 
                    Atendimento ágil de segunda a domingo!
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="promo-cta-whatsapp"
                  className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
                >
                  <Smartphone className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FEATURES ======== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Por que escolher a <span className="text-brand-blue-light">J.R Água e Gás</span>?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
              Tradição, agilidade e preço justo para sua casa ou comércio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                iconBg: 'bg-yellow-50',
                iconColor: 'text-brand-yellow-dark',
                title: 'Entrega Rápida',
                description: 'Receba seu pedido em minutos. Somos conhecidos pela agilidade na entrega em toda a região de Jandira.',
              },
              {
                icon: Clock,
                iconBg: 'bg-blue-50',
                iconColor: 'text-brand-blue-light',
                title: 'Aberto Todos os Dias',
                description: 'Funcionamos de segunda a sábado (08h–19h) e domingos/feriados (08h–14h). Sempre prontos pra você.',
              },
              {
                icon: Shield,
                iconBg: 'bg-green-50',
                iconColor: 'text-green-600',
                title: 'Marcas de Confiança',
                description: 'Trabalhamos com as melhores marcas: Klarina, Crystal, Supergasbras, Liquigás e Ultragaz.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card-hover bg-white rounded-2xl p-6 sm:p-8 border border-gray-100"
                id={`feature-card-${idx}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-5`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CARTÃO FIDELIDADE ======== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow-dark text-xs font-semibold uppercase tracking-wider mb-5">
                <Gift className="w-3.5 h-3.5" />
                Programa de Fidelidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
                Comprou 10 águas?{' '}
                <span className="text-brand-blue-light">A 11ª é por nossa conta!</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
                Com o nosso cartão fidelidade, a cada <strong className="text-gray-700">10 galões de água</strong> comprados, 
                você ganha <strong className="text-gray-700">1 galão totalmente grátis</strong>. 
                É a nossa forma de agradecer sua confiança!
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { text: 'O motoboy carimba o cartão na hora da entrega', icon: Truck },
                  { text: 'Válido para qualquer marca de água mineral', icon: Droplet },
                  { text: 'Sem prazo de validade — complete no seu ritmo', icon: Clock },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-brand-blue-light" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="loyalty-cta-whatsapp"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-sm rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero meu cartão fidelidade
              </a>
            </div>

            {/* Visual Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <LoyaltyCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== QUICK PRODUCTS ======== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Água mineral e gás de cozinha das melhores marcas com os melhores preços.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Água */}
            <div className="card-hover bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Água Mineral</h3>
                  <p className="text-sm text-blue-600 font-medium">Galão 20 litros</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="font-semibold text-gray-700">Crystal</span>
                  <span className="text-brand-blue-light font-black text-lg">R$ 12,00<span className="text-xs font-normal text-gray-400 ml-1">ret.</span></span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="font-semibold text-gray-700">Klarina</span>
                  <span className="text-brand-blue-light font-black text-lg">R$ 17,00<span className="text-xs font-normal text-gray-400 ml-1">ret.</span></span>
                </div>
              </div>
              <Link
                to="/produtos"
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Ver Detalhes
              </Link>
            </div>

            {/* Gás */}
            <div className="card-hover bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Gás de Cozinha</h3>
                  <p className="text-sm text-orange-600 font-medium">Botijão 13kg</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="font-semibold text-gray-700">Supergasbras</span>
                  <span className="text-orange-600 font-black text-lg">R$ 125,00</span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="font-semibold text-gray-700">Liquigás</span>
                  <span className="text-orange-600 font-black text-lg">R$ 130,00</span>
                </div>
                <div className="flex items-center justify-between bg-white/80 rounded-xl p-4">
                  <span className="font-semibold text-gray-700">Ultragaz</span>
                  <span className="text-orange-600 font-black text-lg">R$ 140,00</span>
                </div>
              </div>
              <Link
                to="/produtos"
                className="flex items-center justify-center gap-2 w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA FINAL ======== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-brand-blue-dark p-8 sm:p-12 lg:p-16 text-center">
            {/* BG decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Pronto para pedir?
              </h2>
              <p className="text-blue-200 text-base sm:text-lg max-w-xl mx-auto mb-8">
                É simples e rápido. Clique no botão abaixo, fale com a gente pelo WhatsApp e receba na sua porta.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-final-whatsapp"
                className="inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
