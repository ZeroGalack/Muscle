import React, { useState } from 'react';

const InfoIcon = ({ children, style }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        style={{ cursor: 'pointer', fontSize: '25px' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ❓
      </span>
      {showTooltip && (
        <div
          className='tooltip'
          style={{
            maxWidth: '25%',
            position: 'fixed',
            right: '15%',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '6px',
            zIndex: '1',
            fontSize: '12px',
            textAlign: 'justify',
            whiteSpace: 'normal',
            overflow: 'hidden',
            backgroundColor: '#333',
            ...style // Aplica os estilos adicionais passados como prop
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoIcon;
