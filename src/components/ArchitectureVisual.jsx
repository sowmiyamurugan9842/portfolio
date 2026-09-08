import React from 'react';
import { Shield, Server, Database, Layers, ArrowUpRight } from './common/Icons';

export default function ArchitectureVisual() {
  return (
    <div className="arch-diagram">
      <div className="arch-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Layers size={16} /> Backend Architecture & Data Flow
        </span>
        <span style={{ fontSize: '0.72rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
          Stateless JWT
        </span>
      </div>

      <div className="arch-layers">
        {/* Layer 1: Client */}
        <div className="arch-node">
          <div>
            <div className="arch-node-name">Client Application</div>
            <div className="arch-node-desc">Web / Mobile Client (HTTP + Authorization: Bearer JWT)</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>HTTP / JSON</span>
        </div>

        <div className="arch-arrow">↓</div>

        {/* Layer 2: Spring Security & JWT Filter */}
        <div className="arch-node highlight">
          <div>
            <div className="arch-node-name" style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Shield size={14} /> Spring Security 6 & JWT Filter
            </div>
            <div className="arch-node-desc">Token Validation • Claims Extraction • Role Authentication</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>Auth Layer</span>
        </div>

        <div className="arch-arrow">↓</div>

        {/* Layer 3: REST Controller */}
        <div className="arch-node">
          <div>
            <div className="arch-node-name">REST Controller Layer</div>
            <div className="arch-node-desc">@RestController • DTO Validation (@Valid) • Swagger Specs</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#818cf8', fontFamily: 'var(--font-mono)' }}>Controller</span>
        </div>

        <div className="arch-arrow">↓</div>

        {/* Layer 4: Service Layer */}
        <div className="arch-node">
          <div>
            <div className="arch-node-name">Service Layer (@Service)</div>
            <div className="arch-node-desc">Business Logic • Role Validation • Appointment State Transition</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#fb923c', fontFamily: 'var(--font-mono)' }}>Core Logic</span>
        </div>

        <div className="arch-arrow">↓</div>

        {/* Layer 5: Repository / ORM */}
        <div className="arch-node">
          <div>
            <div className="arch-node-name">Repository Layer (@Repository)</div>
            <div className="arch-node-desc">Spring Data JPA • Hibernate ORM • Transactional Management</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>JPA / ORM</span>
        </div>

        <div className="arch-arrow">↓</div>

        {/* Layer 6: Database */}
        <div className="arch-node highlight" style={{ background: 'rgba(56, 189, 248, 0.08)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
          <div>
            <div className="arch-node-name" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Database size={14} /> MySQL Relational Database
            </div>
            <div className="arch-node-desc">Normalized Tables: Users, Doctors, Patients, Appointments, Schedules</div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>Persistence</span>
        </div>
      </div>
    </div>
  );
}
