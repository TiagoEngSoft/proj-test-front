import React from 'react';
import ContentLoader from 'react-content-loader';

const MapLoadingPlaceholder = ({ width = '100%', height = '100%' }) => (
  <ContentLoader 
    speed={2}
    width={width}
    height={height}
    viewBox="0 0 500 350" // Mantenha um viewBox fixo para manter a proporção
    backgroundColor="#b9b7b7"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);

export default MapLoadingPlaceholder;
