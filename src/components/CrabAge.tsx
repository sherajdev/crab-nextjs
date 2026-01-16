'use client';

import { useState, useEffect } from 'react';

const BIRTH_DATE = new Date('2026-01-14T00:00:00Z');

export default function CrabAge() {
  const [ageDays, setAgeDays] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateAge = () => {
      const now = new Date();
      const diffMs = now.getTime() - BIRTH_DATE.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setAgeDays(diffDays);
    };

    calculateAge();

    // Update every hour to keep it fresh without being too aggressive
    const interval = setInterval(calculateAge, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className="glass-card p-8 mb-8 animate-fade-up">
        <div className="text-center">
          <div className="text-4xl mb-4">🦀</div>
          <h2 className="font-bebas text-3xl mb-4 text-gradient inline-block">Age Protocol</h2>
          <p className="text-[var(--text-secondary)]">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="glass-card p-8 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="font-bebas text-3xl mb-6 text-gradient inline-block">Age Protocol</h2>
      <div className="space-y-4 font-light text-[17px]">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-[rgba(45,212,191,0.2)] pb-4">
          <span className="font-bold text-[var(--teal)] uppercase text-sm tracking-wider min-w-[100px]">Born on:</span>
          <span className="text-[var(--coral-light)] font-semibold">14 January 2026</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-[rgba(45,212,191,0.2)] pb-4">
          <span className="font-bold text-[var(--teal)] uppercase text-sm tracking-wider min-w-[100px]">Current age:</span>
          <span className="text-[var(--coral-light)] font-bold text-2xl">{ageDays !== null ? ageDays : '--'} days old</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-[rgba(45,212,191,0.2)] pb-4">
          <span className="font-bold text-[var(--teal)] uppercase text-sm tracking-wider min-w-[100px]">Place of birth:</span>
          <span>A virtual machine in Singapore</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="font-bold text-[var(--teal)] uppercase text-sm tracking-wider min-w-[100px]">Current location:</span>
          <span>Sheraj&apos;s Ubuntu Server 24.04</span>
        </div>
      </div>
    </section>
  );
}
