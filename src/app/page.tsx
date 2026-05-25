'use client';

import React, { useState } from 'react';

export default function Home() {
  const [vehicles, setVehicles] = useState<number>(5);
  const [fuelCost, setFuelCost] = useState<number>(15000);
  const [maintCost, setMaintCost] = useState<number>(30000);

  // ROI Math
  const dailyTotal = vehicles * fuelCost;
  const annualFuel = dailyTotal * 300; // 300 working days
  const annualMaint = vehicles * maintCost * 12;
  const totalAnnualPetrolCost = annualFuel + annualMaint;
  
  // Assume EV costs 90% less to run
  const evAnnualCost = totalAnnualPetrolCost * 0.1;
  const savings = totalAnnualPetrolCost - evAnnualCost;

  return (
    <main>
      {/* Navigation */}
      <nav style={{ padding: '24px 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Olitim EV Solutions Logo" style={{ height: '48px', objectFit: 'contain' }} />
          </div>
          <div>
            <a href="#calculator" className="btn btn-secondary" style={{ marginRight: '16px' }}>ROI Calculator</a>
            <a href="#contact" className="btn btn-primary">Request Proposal</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <div style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', marginBottom: '16px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              B2B Logistics, Electrified.
            </div>
            <h1>Revolutionize Your Logistics.<br/>Zero Petrol. Maximum Payload.</h1>
            <p>Empowering Nigerian FMCG and logistics businesses with premium electric cargo bikes built for heavy-duty performance and unparalleled cost savings.</p>
            <div className="hero-actions">
              <a href="#calculator" className="btn btn-primary">Calculate Your Savings</a>
              <a href="#contact" className="btn btn-secondary">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>The Future of Heavy-Duty Logistics is Electric</h2>
            <p>Traditional delivery vehicles are no longer a sustainable choice. Every liter of fuel burned is profit lost.</p>
          </div>
          
          <div className="grid-3">
            <div className="glass-card">
              <div className="feature-icon">⚡</div>
              <h3 style={{ marginBottom: '12px' }}>Zero Petrol & Emissions</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Completely eliminate your daily fuel expenses. Charge overnight and deliver all day, immune to pump price hikes.</p>
            </div>
            
            <div className="glass-card">
              <div className="feature-icon">⚖️</div>
              <h3 style={{ marginBottom: '12px' }}>High Payload Capacity</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Engineered to haul heavy goods—from bags of cement to bulk pure water—without compromising speed or stability.</p>
            </div>

            <div className="glass-card">
              <div className="feature-icon">🛠️</div>
              <h3 style={{ marginBottom: '12px' }}>Reduced Maintenance</h3>
              <p style={{ color: 'var(--text-secondary)' }}>No engine oil, no spark plugs, no exhaust systems. Electric motors mean fewer moving parts and massive reductions in downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>See How Much You Can Save</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem' }}>
                Use our interactive calculator to compare your current petrol delivery costs against an Olitim Electric Cargo Bike fleet. Watch your operational expenses vanish.
              </p>
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Current Fleet Size</label>
                  <input type="range" min="1" max="50" value={vehicles} onChange={(e) => setVehicles(Number(e.target.value))} style={{ width: '100%', cursor: 'pointer' }} />
                  <div style={{ marginTop: '8px', fontWeight: 600 }}>{vehicles} Vehicles</div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Daily Fuel Cost Per Vehicle (₦)</label>
                  <input type="number" className="form-control" value={fuelCost} onChange={(e) => setFuelCost(Number(e.target.value))} />
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Monthly Maintenance Per Vehicle (₦)</label>
                  <input type="number" className="form-control" value={maintCost} onChange={(e) => setMaintCost(Number(e.target.value))} />
                </div>
              </div>
            </div>
            
            <div className="glass-card" style={{ background: 'linear-gradient(145deg, rgba(37,99,235,0.2) 0%, rgba(15,23,42,0.8) 100%)', border: '1px solid rgba(37,99,235,0.4)', textAlign: 'center', padding: '60px 40px' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.2rem' }}>Your Estimated Annual Savings</h3>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--success)', marginBottom: '24px', letterSpacing: '-2px' }}>
                ₦{savings.toLocaleString()}
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                By switching {vehicles} vehicles to the Olitim EV platform, you immediately recover this capital back into your business.
              </p>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>Get a Custom Fleet Proposal</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="section-header">
            <h2>Ready to Electrify Your Fleet?</h2>
            <p>Speak with our B2B logistics experts today to discuss your payload requirements and secure bulk pricing.</p>
          </div>
          
          <div className="glass-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" className="form-control" placeholder="Acme Logistics Ltd" required />
              </div>
              
              <div className="grid-2" style={{ gap: '20px' }}>
                <div className="form-group">
                  <label>Business Email</label>
                  <input type="email" className="form-control" placeholder="john@company.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="+234..." required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Industry</label>
                <select className="form-control" required defaultValue="">
                  <option value="" disabled>Select your industry</option>
                  <option>Pure Water Manufacturing</option>
                  <option>Cement / Hardware</option>
                  <option>FMCG Distribution</option>
                  <option>Last-Mile Courier</option>
                  <option>Other</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>Request Consultation</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-light)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© 2026 Olitim EV Solutions. Powered by Olitim Concept. All rights reserved.</p>
          <div style={{ marginTop: '16px', fontSize: '0.9rem' }}>
            <a href="#" style={{ color: 'var(--text-secondary)', marginRight: '16px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
