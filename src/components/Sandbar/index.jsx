import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre Nós', href: '#sobre-nos' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Seguradoras', href: '#seguradoras' },
  { name: 'Contato', href: '#contato' },
];

const Sandbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sandbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
    py-4
    ${isScrolled 
      ? 'bg-white shadow-md'
      : 'bg-transparent text-white lg:text-gray-900'
    }
  `;

  const navLinkClasses = (isScrolledState) => `
    text-sm font-medium transition-colors duration-200 
    ${isScrolledState 
        ? 'text-gray-700 hover:text-orange-500' 
        : 'text-white lg:text-gray-900 hover:text-orange-500'
    }
  `;

  return (
    <header className={sandbarClasses}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio" className="text-xl font-bold tracking-wider">
                      <span className={`${isScrolled ? 'text-blue-800' : 'text-white lg:text-blue-800'}`}>CORRETORA</span>
        </a>

        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={navLinkClasses(isScrolled)}>
              {item.name}
            </a>
          ))}
        </div>

        <a 
          href="#contato"
          className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-md transition-colors"
        >
          Solicitar Cotação
        </a>

        <button className={`lg:hidden text-2xl ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Sandbar;