import React from 'react';
import Sandbar from './components/Sandbar';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Sandbar /> 

      <div id="inicio" className="pt-20 lg:pt-24"> 
        
        <main>
            <div className="h-[200vh] bg-gray-100 p-8 text-center text-gray-500">
                <h1>Corretor Digital Pro - Modelo G1</h1>
                <p>Sandbar implementado e testando o efeito de rolagem.</p>
                <div className="mt-80">Role para baixo para ver o Sandbar mudar de cor.</div>
            </div>
        </main>
      </div>

    </div>
  );
}

export default App;