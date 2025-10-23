import { Menu } from 'lucide-react';
import { type FC, useState, useEffect } from 'react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre Nós', href: '#sobre-nos' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Seguradoras', href: '#seguradoras' },
  { name: 'Contato', href: '#contato' },
];

const Sandbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavLinkClasses = (scrolled: boolean) => `
    text-sm font-medium transition-colors duration-200 block py-2 
    ${scrolled 
        ? 'text-gray-700 hover:text-orange-500' 
        : 'text-white lg:text-gray-900 hover:text-orange-500' 
    }
  `;

  const sandbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
    py-4
    ${isScrolled 
      ? 'bg-white shadow-md'
      : 'bg-transparent' 
    }
  `;

  return (
    <header className={sandbarClasses}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio" className="text-xl font-bold tracking-wider z-50">
          <span className={`${isScrolled ? 'text-blue-800' : 'text-white lg:text-blue-800'}`}>CORRETORA</span>
          <span className={`${isScrolled ? 'text-orange-500' : 'text-white lg:text-orange-500'}`}>.logo</span>
        </a>
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={getNavLinkClasses(isScrolled)}>
              {item.name}
            </a>
          ))}
        </div>

        

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden text-2xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}
          aria-label="Abrir Menu"
        >
          <Menu className='w-7 h-7' />
        </button>
      </nav>

      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-xl absolute w-full top-full left-0 transition-all duration-300`}>
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 border-b border-gray-100 last:border-b-0"
            >
              {item.name}
            </a>
          ))}
           <a 
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block text-center mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition-colors"
          >
            Solicitar Cotação
          </a>
        </div>
      </div>
    </header>
  );
};

export default Sandbar;