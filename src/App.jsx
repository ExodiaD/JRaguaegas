import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import WhatsAppFAB from './components/WhatsAppFAB'

const WHATSAPP_URL = 'https://wa.me/5511958670716?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20pedir%20água/gás.'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home whatsappUrl={WHATSAPP_URL} />} />
          <Route path="produtos" element={<Produtos whatsappUrl={WHATSAPP_URL} />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
      <WhatsAppFAB url={WHATSAPP_URL} />
    </>
  )
}
