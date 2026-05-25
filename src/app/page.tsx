'use client';
import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [vehicles, setVehicles] = useState<number>(5);
  const [fuelCost, setFuelCost] = useState<number>(15000);
  
  // ROI Math
  const annualFuel = vehicles * fuelCost * 300; 
  const annualMaint = vehicles * 30000 * 12; // Flat 30k maint assumption
  const totalAnnualPetrolCost = annualFuel + annualMaint;
  const evAnnualCost = totalAnnualPetrolCost * 0.15; // EV is 85% cheaper
  const savings = totalAnnualPetrolCost - evAnnualCost;

  return (
    <>
      <Head>
        <title>Olitim EV Solutions | Zero Petrol Heavy-Duty Cargo</title>
        <meta name="description" content="Stop burning fuel in Lagos traffic. Olitim EV Solutions provides heavy-duty electric cargo tricycles for pure water and cement logistics in Nigeria." />
      </Head>

      <main>
        {/* Navigation */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-light)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="Olitim EV Solutions Logo" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '24px' }}>
              <a href="#gallery" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Our Fleet</a>
              <a href="#calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>ROI Calculator</a>
              <a href="#blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Blog</a>
              <a href="#contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Get a Quote</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg-gradient"></div>
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content animate-slide-up">
                <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent)', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '24px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  🇳🇬 Built for Nigerian Logistics
                </div>
                <h1>Haul 50 Bags of Cement on <span style={{ color: 'var(--accent)' }}>Zero Petrol.</span></h1>
                <p>Stop burning your profit in Lagos traffic. Olitim EV provides high-payload electric cargo tricycles built specifically for pure water distributors and heavy-duty supply chains.</p>
                <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="#calculator" className="btn btn-primary">Calculate Your Savings</a>
                  <a href="#gallery" className="btn btn-secondary">See Actual Fleet</a>
                </div>
              </div>
              <div className="hero-image-wrapper animate-slide-up delay-200">
                <img src="/images/bike1.jpg" alt="Olitim Electric Cargo Tricycle in Lagos" />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.2rem' }}>1,000kg+ Payload</div>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Heavy-Duty Frame</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Fleet Gallery */}
        <section id="gallery" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header animate-slide-up">
              <h2>On Ground. Ready to Work.</h2>
              <p>We don't sell stock photos. These are our actual heavy-duty electric cargo tricycles currently operating in Apapa, Lagos. Built rugged for Nigerian roads.</p>
            </div>
            <div className="grid-3">
              <div className="gallery-card animate-slide-up delay-100">
                <img src="/images/bike1.jpg" alt="Fleet Vehicle 1" className="gallery-image" />
              </div>
              <div className="gallery-card animate-slide-up delay-200">
                <img src="/images/bike2.jpg" alt="Fleet Vehicle 2" className="gallery-image" />
              </div>
              <div className="gallery-card animate-slide-up delay-300">
                <img src="/images/bike3.jpg" alt="Fleet Vehicle 3" className="gallery-image" />
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="calculator">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div className="animate-slide-up">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>Stop Paying For Lagos Traffic.</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '32px' }}>
                  If your delivery bikes are stuck in traffic, you are burning petrol and losing money. Use our calculator to see the exact capital you recover by switching to electric.
                </p>
                <div className="glass-card">
                  <div className="form-group">
                    <label>Current Delivery Vehicles</label>
                    <input type="range" min="1" max="50" value={vehicles} onChange={(e) => setVehicles(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent)' }} />
                    <div style={{ marginTop: '12px', fontSize: '1.2rem', fontWeight: 700 }}>{vehicles} {vehicles === 1 ? 'Vehicle' : 'Vehicles'}</div>
                  </div>
                  <div className="form-group">
                    <label>Average Daily Fuel Cost per Vehicle (₦)</label>
                    <input type="number" className="form-control" value={fuelCost} onChange={(e) => setFuelCost(Number(e.target.value))} />
                  </div>
                </div>
              </div>
              
              <div className="glass-card animate-slide-up delay-200" style={{ background: 'linear-gradient(145deg, rgba(16,185,129,0.15) 0%, rgba(15,23,42,0.9) 100%)', border: '1px solid rgba(16,185,129,0.4)', textAlign: 'center', padding: '60px 40px' }}>
                <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 500 }}>Your Estimated Annual Savings</h3>
                <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, color: 'var(--accent)', marginBottom: '24px', letterSpacing: '-2px' }}>
                  ₦{savings.toLocaleString()}
                </div>
                <p style={{ color: '#cbd5e1', marginBottom: '40px', fontSize: '1.1rem' }}>
                  This is capital immediately injected back into your business instead of being burned at the petrol pump.
                </p>
                <a href="#contact" className="btn btn-orange" style={{ width: '100%' }}>Book a Test Drive</a>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Blog Section */}
        <section id="blog" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header animate-slide-up">
              <h2>Logistics Insights & News</h2>
              <p>Expert B2B advice on scaling your delivery fleet, cutting transport costs, and navigating the Nigerian logistics landscape.</p>
            </div>
            <div className="grid-3">
              <div className="glass-card animate-slide-up delay-100" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>Industry Analysis</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>How Pure Water Factories Are Slashing Delivery Costs by 85%</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Discover the exact financial model local water distributors are using to eliminate diesel costs entirely using heavy-duty EV tricycles.</p>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Read Article →</a>
              </div>
              <div className="glass-card animate-slide-up delay-200" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>Product Spotlight</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>The 1,000kg Payload: Why Traditional Bikes Fail at Cement Logistics</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Standard delivery bikes break under the weight of construction materials. See why our reinforced EV frames are dominating the sector.</p>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Read Article →</a>
              </div>
              <div className="glass-card animate-slide-up delay-300" style={{ padding: '30px' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>Company News</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Olitim EV Solutions Secures Direct Partnership with Huaihai</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>We are proud to announce our official reseller status, guaranteeing our B2B clients Tier 1 wholesale pricing and instant warranty replacements.</p>
                <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Read Article →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <div className="container" style={{ maxWidth: '700px' }}>
            <div className="glass-card animate-slide-up">
              <div className="section-header" style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Electrify Your Fleet Today</h2>
                <p>Speak with our B2B logistics experts in Lagos to secure your bulk pricing.</p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid-2" style={{ gap: '24px', marginBottom: '24px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Company Name</label>
                    <input type="text" className="form-control" placeholder="Acme Logistics Ltd" required />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: '24px', marginBottom: '24px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Business Email</label>
                    <input type="email" className="form-control" placeholder="john@company.com" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="+234..." required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Industry Focus</label>
                  <select className="form-control" required defaultValue="">
                    <option value="" disabled>Select your core industry</option>
                    <option>Pure Water Manufacturing</option>
                    <option>Cement / Construction</option>
                    <option>FMCG Distribution</option>
                    <option>Last-Mile Courier</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px', fontSize: '1.2rem', padding: '20px' }}>Request B2B Consultation</button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: '#080f1e', padding: '60px 0', borderTop: '1px solid var(--border-light)', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <div className="container">
            <img src="/logo.png" alt="Olitim EV" style={{ height: '40px', opacity: 0.5, marginBottom: '24px' }} />
            <p style={{ marginBottom: '24px' }}>© 2026 Olitim EV Solutions. Powered by Olitim Concept. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '0.95rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Logistics Blog</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
