import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGetStarted = () => {
    alert('Registering will be available soon')
  }

  return (
    <header className="fixed w-full glass-effect border-b border-pink-200/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">Saki Companion</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/rules" className="text-white hover:text-pink-200 transition-colors">
              Rules
            </Link>
            <button 
              onClick={handleGetStarted}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 glass-effect border-t border-pink-200/20">
            <Link 
              to="/rules" 
              className="block px-3 py-2 text-white hover:text-pink-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Rules
            </Link>
            <button 
              onClick={handleGetStarted}
              className="w-full mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
