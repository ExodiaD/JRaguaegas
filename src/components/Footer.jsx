import { Link } from 'react-router-dom'
import { Droplet, Flame, MapPin, Clock, Smartphone, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-blue-dark text-blue-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-yellow transition-transform duration-300 group-hover:scale-110">
                <Droplet className="w-5 h-5 text-brand-blue-dark" strokeWidth={2.5} />
                <Flame className="w-3 h-3 text-red-500 absolute -bottom-0.5 -right-0.5" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-brand-yellow tracking-tight">J.R</span>
                <span className="text-[10px] font-semibold text-blue-300 tracking-widest uppercase">Água & Gás</span>
              </div>
            </Link>
            <p className="text-sm text-blue-300 leading-relaxed max-w-xs">
              Distribuidora de água mineral e gás de cozinha com entrega rápida em Jandira e região.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Início' },
                { to: '/produtos', label: 'Produtos' },
                { to: '/sobre', label: 'Sobre Nós' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-blue-300 hover:text-brand-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                <a
                  href="tel:+551146197268"
                  className="text-sm text-blue-300 hover:text-brand-yellow transition-colors"
                >
                  (11) 4619-7268
                  <span className="block text-[10px] text-blue-400">Fixo (principal)</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/5511958670716?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20pedir%20água/gás."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-300 hover:text-brand-yellow transition-colors"
                >
                  (11) 95867-0716
                  <span className="block text-[10px] text-blue-400">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                <span className="text-sm text-blue-300">
                  Rua Patrícia, 43 — Sagrado Coração
                  <br />
                  Jandira, SP
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Horários</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                <div className="text-sm text-blue-300">
                  <p className="font-medium text-blue-200">Seg - Sáb</p>
                  <p>08:00 às 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow mt-0.5 shrink-0" />
                <div className="text-sm text-blue-300">
                  <p className="font-medium text-blue-200">Dom e Feriados</p>
                  <p>08:00 às 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-blue-400">
              © {currentYear} J.R Água e Gás. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5511958670716?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20pedir%20água/gás."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-400 hover:text-brand-yellow transition-colors"
            >
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
