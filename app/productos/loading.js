 
import React from 'react';

export default function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h3>Cargando productos...</h3>
      <div className="spinner" style={{ marginTop: '20px' }}>
        <div className="circle"></div>
      </div>
      <style jsx>{`
        .spinner {
          display: inline-block;
          width: 50px;
          height: 50px;
        }
        .circle {
          width: 100%;
          height: 100%;
          border: 5px solid rgba(0, 0, 0, 0.3);
          border-top: 5px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}


export default function Loading() {
  return <p>Cargando catálogo...</p>;
}


export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>Cargando productos...</h2>
    </div>
  );
}
