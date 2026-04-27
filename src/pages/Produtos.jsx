import { Droplet, Flame, Truck, Store } from 'lucide-react'

const waterProducts = [
  {
    id: 'klarina',
    name: 'Klarina',
    type: 'Água Mineral',
    volume: 'Galão 20L',
    pricePickup: 17.0,
    priceDelivery: 19.0,
    badge: null,
    image: '/images/klarinaboa.jpeg',
  },
  {
    id: 'crystal',
    name: 'Crystal',
    type: 'Água Mineral',
    volume: 'Galão 20L',
    pricePickup: 12.0,
    priceDelivery: 15.0,
    badge: 'Mais Vendido',
    image: '/images/Crystal.jpeg',
  },
]

const gasProducts = [
  {
    id: 'supergasbras',
    name: 'Supergasbras',
    type: 'Gás de Cozinha',
    weight: 'Botijão 13kg',
    price: 125.0,
    badge: 'Melhor Preço',
    imagePlaceholder: 'supergasbras-botijao',
  },
  {
    id: 'liquigas',
    name: 'Liquigás',
    type: 'Gás de Cozinha',
    weight: 'Botijão 13kg',
    price: 130.0,
    badge: null,
    imagePlaceholder: 'liquigas-botijao',
  },
  {
    id: 'ultragaz',
    name: 'Ultragaz',
    type: 'Gás de Cozinha',
    weight: 'Botijão 13kg',
    price: 140.0,
    badge: null,
    imagePlaceholder: 'ultragaz-botijao',
  },
]

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Produtos({ whatsappUrl }) {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <section className="bg-brand-blue-dark py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Nosso <span className="text-brand-yellow">Catálogo</span>
          </h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto">
            Confira nossas marcas, preços e opções de retirada ou entrega. 
            Peça pelo WhatsApp em poucos segundos.
          </p>
        </div>
      </section>

      {/* ======== ÁGUA MINERAL ======== */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Água Mineral</h2>
              <p className="text-sm text-gray-500">Galão 20 litros — Ideal para casa e escritório</p>
            </div>
          </div>

          {/* Price legend */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2 text-sm">
              <Store className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-gray-700">Retirada</span>
              <span className="text-gray-400">— Você busca no local</span>
            </div>
            <div className="w-px h-5 bg-blue-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-gray-700">Entrega</span>
              <span className="text-gray-400">— Levamos até você</span>
            </div>
          </div>

          {/* Water products grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {waterProducts.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100"
              >
                {/* Product image */}
                <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden flex items-center justify-center h-52 sm:h-64">
                  {product.badge && (
                    <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand-yellow text-brand-blue-dark text-xs font-bold rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={`Galão de água ${product.name} 20 litros`}
                    className="product-image w-auto h-full object-contain scale-105 drop-shadow-lg"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.querySelector('.placeholder-icon').style.display = 'flex'
                    }}
                  />
                  <div
                    className="placeholder-icon hidden w-32 h-40 sm:w-40 sm:h-48 rounded-2xl bg-blue-100/50 items-center justify-center"
                  >
                    <Droplet className="w-16 h-16 text-blue-300" />
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.type} — {product.volume}</p>
                  </div>

                  {/* Pricing grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                      <div className="flex items-center justify-center gap-1.5 mb-2">
                        <Store className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Retirada</span>
                      </div>
                      <span className="text-2xl font-black text-brand-blue-light">{formatPrice(product.pricePickup)}</span>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                      <div className="flex items-center justify-center gap-1.5 mb-2">
                        <Truck className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Entrega</span>
                      </div>
                      <span className="text-2xl font-black text-blue-700">{formatPrice(product.priceDelivery)}</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-blue text-white font-bold text-sm rounded-xl hover:bg-brand-blue-dark transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pedir {product.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== GÁS DE COZINHA ======== */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Gás de Cozinha</h2>
              <p className="text-sm text-gray-500">Botijão 13kg — Entrega inclusa no preço</p>
            </div>
          </div>

          {/* Gas products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gasProducts.map((product) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100"
              >
                {/* Product image placeholder */}
                <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 p-6 sm:p-8 flex items-center justify-center">
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={`/images/${product.imagePlaceholder}.png`}
                    alt={`Botijão de gás ${product.name} 13kg`}
                    className="w-28 h-36 sm:w-36 sm:h-44 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.querySelector('.placeholder-icon').style.display = 'flex'
                    }}
                  />
                  <div
                    className="placeholder-icon hidden w-28 h-36 sm:w-36 sm:h-44 rounded-2xl bg-orange-100/50 items-center justify-center"
                  >
                    <Flame className="w-14 h-14 text-orange-300" />
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.type} — {product.weight}</p>
                  </div>

                  {/* Single price */}
                  <div className="bg-orange-50 rounded-xl p-4 text-center border border-orange-100 mb-6">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Truck className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Entrega inclusa</span>
                    </div>
                    <span className="text-3xl font-black text-orange-600">{formatPrice(product.price)}</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-orange-500 text-white font-bold text-sm rounded-xl hover:bg-orange-600 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pedir {product.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA SECTION ======== */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue-dark rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Não encontrou o que procura?
            </h2>
            <p className="text-blue-200 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Fale com a gente pelo WhatsApp! Podemos ajudar com quantidades especiais, 
              pedidos recorrentes e muito mais.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="products-cta-whatsapp"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-blue-dark font-bold text-base rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com a J.R Água e Gás
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
