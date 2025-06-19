'use client';
import React from 'react';
import './phoneFrame.css';

export default function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-frame">
      <div className="phone-screen">{children}</div>
    </div>
  );
}
