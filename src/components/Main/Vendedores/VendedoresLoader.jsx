import React from 'react';
import ContentLoader from 'react-content-loader';

const CardVendedorLoader = () => (
  <div style={{
    width: '340px',
    height: '100px',
    borderRadius: '20px',
    overflow: 'hidden', // Isso garante que o SVG não ultrapasse a borda arredondada
  }}>
    <ContentLoader 
      speed={2}
      width={340}
      height={100}
      viewBox="0 0 340 100"
      backgroundColor="#9e9b9b"
      foregroundColor="#ecebeb"
    >
      {/* Ícone */}
      <circle cx="50" cy="50" r="30" /> 
      {/* Texto Principal */}
      <rect x="100" y="30" rx="5" ry="5" width="140" height="20" />
      {/* Texto Secundário */}
      <rect x="100" y="60" rx="5" ry="5" width="90" height="15" />
    </ContentLoader>
  </div>
)

export default CardVendedorLoader;
