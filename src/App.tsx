import { useEffect } from 'react'
import '@fontsource/inter'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Rules from './components/Rules.tsx'

function App() {
  useEffect(() => {
    document.body.style.fontFamily = '"Inter", sans-serif'
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen hero-bg">
        <div className="min-h-screen bg-gradient-to-b from-pink-500/30 to-purple-900/30">
          <Header />
          
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>

            {/* Footer */}
            <footer className="glass-effect border-t border-pink-200/20">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-pink-100">
                  © 2025 Saki Companion. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
