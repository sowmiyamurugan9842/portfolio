import React from 'react';
import { Terminal, X } from './Icons';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="toast-container" aria-live="polite">
      <div className="toast">
        <Terminal size={18} color="#38bdf8" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{toast.title}</div>
          <div style={{ fontSize: '0.775rem', color: '#94a3b8' }}>{toast.message}</div>
        </div>
        <button
          onClick={onClose}
          style={{ marginLeft: '0.5rem', color: '#64748b', cursor: 'pointer' }}
          aria-label="Close notification"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
