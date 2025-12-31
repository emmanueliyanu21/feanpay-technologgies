"use client";

import React from 'react';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        :root {
          --primary: #2563eb;
          --primary-dark: #1e40af;
          --accent: #0ea5e9;
          --text-dark: #0f172a;
          --text-gray: #475569;
          --text-light: #64748b;
          --border: #e2e8f0;
          --bg-light: #f8fafc;
          --bg-white: #ffffff;
          --success: #10b981;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg-white);
          color: var(--text-dark);
          line-height: 1.7;
          overflow-x: hidden;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          padding: 1.2rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .logo {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-gray);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          padding: 0.7rem 1.5rem;
          background: var(--primary);
          color: white;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        /* Section Spacing */
        section {
          padding: 6rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          padding-top: 8rem;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          animation: fadeInLeft 0.8s ease;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-tag {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: var(--bg-light);
          color: var(--primary);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border);
        }

        .hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          letter-spacing: -1px;
        }

        .hero h1 .highlight {
          color: var(--primary);
        }

        .hero p {
          font-size: 1.15rem;
          color: var(--text-gray);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-dark);
          border: 2px solid var(--border);
        }

        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .hero-image {
          flex: 1;
          position: relative;
          animation: fadeInRight 0.8s ease;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-visual {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, var(--bg-light) 0%, #e0f2fe 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .hero-visual::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1), transparent);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .hero-icon {
          font-size: 8rem;
          position: relative;
          z-index: 2;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.6s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-tag {
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          margin-bottom: 1rem;
        }

        .section-header h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }

        .section-header p {
          color: var(--text-gray);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Services Section */
        .services {
          background: var(--bg-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease both;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          border-color: var(--primary);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: var(--bg-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .service-card p {
          color: var(--text-gray);
          line-height: 1.7;
        }

        /* Products Section */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .product-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease both;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          height: 250px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: white;
        }

        .product-content {
          padding: 2rem;
        }

        .product-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: var(--bg-light);
          color: var(--primary);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .product-card h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .product-card p {
          color: var(--text-gray);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .product-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .product-features li {
          padding: 0.5rem 0;
          color: var(--text-gray);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .product-features li::before {
          content: '✓';
          color: var(--success);
          font-weight: bold;
        }

        /* Technology Stack */
        .tech-stack {
          background: var(--bg-light);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .tech-item {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease both;
        }

        .tech-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .tech-item h4 {
          font-family: 'Sora', sans-serif;
          margin-top: 1rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .tech-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        /* Process Section */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .step {
          position: relative;
          padding: 2rem;
          animation: fadeInUp 0.6s ease both;
        }

        .step:nth-child(1) { animation-delay: 0.1s; }
        .step:nth-child(2) { animation-delay: 0.2s; }
        .step:nth-child(3) { animation-delay: 0.3s; }
        .step:nth-child(4) { animation-delay: 0.4s; }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-family: 'Sora', sans-serif;
        }

        .step h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .step p {
          color: var(--text-gray);
          line-height: 1.7;
        }

        /* Stats Section */
        .stats {
          background: var(--primary);
          color: white;
        }

        .stats .section-header h2,
        .stats .section-tag {
          color: white;
        }

        .stats .section-header p {
          color: rgba(255, 255, 255, 0.9);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
          animation: fadeInUp 0.6s ease both;
        }

        .stat-number {
          font-family: 'Sora', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* Why Choose Us */
        .why-choose {
          background: var(--bg-light);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease both;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .feature-card h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .feature-card h3::before {
          content: '→';
          color: var(--primary);
          font-weight: bold;
          font-size: 1.5rem;
        }

        /* Team Section */
        .team-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          padding: 3rem;
          background: var(--bg-light);
          border-radius: 16px;
          animation: fadeInUp 0.6s ease;
        }

        .team-intro h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .team-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .team-stat {
          text-align: center;
        }

        .team-stat-number {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          display: block;
        }

        .team-stat-label {
          color: var(--text-gray);
          margin-top: 0.5rem;
        }

        /* Testimonials */
        .testimonials {
          background: var(--bg-light);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          animation: fadeInUp 0.6s ease both;
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-gray);
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: var(--bg-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .author-info h4 {
          font-family: 'Sora', sans-serif;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .author-info p {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-align: center;
          border-radius: 24px;
          padding: 5rem 3rem;
          margin: 6rem 5%;
          animation: fadeInUp 0.8s ease;
        }

        .cta-section h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }

        .cta-section .btn {
          background: white;
          color: var(--primary);
          font-weight: 700;
        }

        .cta-section .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Contact Section */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .contact-info {
          animation: fadeInLeft 0.6s ease;
        }

        .contact-info h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .contact-methods {
          margin-top: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
        }

        .contact-method:last-child {
          border-bottom: none;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--bg-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .contact-details h4 {
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .contact-details p {
          color: var(--text-gray);
        }

        .contact-form {
          background: var(--bg-light);
          padding: 3rem;
          border-radius: 16px;
          animation: fadeInRight 0.6s ease;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        /* Footer */
        footer {
          background: var(--text-dark);
          color: white;
          padding: 4rem 5% 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h3 {
          font-family: 'Sora', sans-serif;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .footer-section p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.8rem;
        }

        .footer-section a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
        }

        /* Mobile Menu Toggle */
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .menu-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-dark);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 4rem 5%;
          }

          .hero {
            flex-direction: column;
            padding-top: 6rem;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-buttons {
            justify-content: center;
          }

          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .services-grid,
          .products-grid,
          .tech-grid,
          .process-steps,
          .features-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 3rem 2rem;
            margin: 4rem 5%;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <nav>
        <div className="logo">FeanPay Technologies</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">Digital Solutions Provider</div>
          <h1>Building <span className="highlight">Innovative Products</span> for People</h1>
          <p>We&apos;re a service-based technology company specializing in creating cutting-edge digital solutions that solve real-world problems and empower businesses to thrive in the digital age.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
            <a href="#products" className="btn btn-secondary">View Our Products</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="hero-icon">🚀</div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="services" id="services">
        <div className="section-header">
          <div className="section-tag">What We Offer</div>
          <h2>Our Services</h2>
          <p>Comprehensive technology services designed to bring your vision to life</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Custom Software Development</h3>
            <p>Tailored software solutions built with modern technologies like React, Angular, and TypeScript to meet your unique business requirements.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile & Web Applications</h3>
            <p>Responsive, user-friendly applications that work seamlessly across all devices and platforms.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI Integration Services</h3>
            <p>Leverage artificial intelligence to automate processes, enhance user experiences, and drive business growth.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💳</div>
            <h3>Fintech Solutions</h3>
            <p>Secure, scalable financial technology solutions including payment systems and digital banking platforms.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Technical Consulting</h3>
            <p>Expert guidance on technology strategy, architecture design, and implementation best practices.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Modern cloud infrastructure setup, deployment strategies, and DevOps implementation.</p>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="products" id="products">
        <div className="section-header">
          <div className="section-tag">Our Products</div>
          <h2>Featured Products</h2>
          <p>Innovative solutions we&apos;ve built to solve real-world challenges</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">💰</div>
            <div className="product-content">
              <div className="product-badge">Flagship Product</div>
              <h3>FeanPay</h3>
              <p>Revolutionary AI-powered WhatsApp-based financial platform enabling seamless money transfers without requiring app downloads.</p>
              <ul className="product-features">
                <li>WhatsApp-based transactions</li>
                <li>AI-powered natural language processing</li>
                <li>Voice message support</li>
                <li>No app installation required</li>
                <li>Secure & instant transfers</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">☀️</div>
            <div className="product-content">
              <div className="product-badge">Innovation</div>
              <h3>FeanSolar</h3>
              <p>Sustainable energy solution bringing solar power accessibility to communities and businesses.</p>
              <ul className="product-features">
                <li>Renewable energy platform</li>
                <li>Cost-effective solutions</li>
                <li>Easy installation & maintenance</li>
                <li>Environmental impact tracking</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section className="tech-stack" id="technology">
        <div className="section-header">
          <div className="section-tag">Technology</div>
          <h2>Our Tech Stack</h2>
          <p>We use cutting-edge technologies to build robust, scalable solutions</p>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">⚛️</div>
            <h4>React</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🅰️</div>
            <h4>Angular</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">📘</div>
            <h4>TypeScript</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🟢</div>
            <h4>Node.js</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🔷</div>
            <h4>NestJS</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🐳</div>
            <h4>Docker</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">☁️</div>
            <h4>Cloud Services</h4>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🤖</div>
            <h4>AI/ML</h4>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="process" id="process">
        <div className="section-header">
          <div className="section-tag">How We Work</div>
          <h2>Our Development Process</h2>
          <p>A proven methodology for delivering exceptional results</p>
        </div>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery & Planning</h3>
            <p>We start by understanding your business needs, goals, and challenges to create a comprehensive project roadmap.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Design & Architecture</h3>
            <p>Our team designs intuitive user experiences and robust technical architectures tailored to your requirements.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Development & Testing</h3>
            <p>We build your solution using agile methodology with continuous testing to ensure quality at every stage.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Launch & Support</h3>
            <p>After thorough testing, we deploy your solution and provide ongoing support and maintenance.</p>
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <section className="stats">
        <div className="section-header">
          <div className="section-tag">Our Impact</div>
          <h2>Delivering Results That Matter</h2>
          <p>Numbers that showcase our commitment to excellence</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="why-choose">
        <div className="section-header">
          <div className="section-tag">Why Choose Us</div>
          <h2>What Sets Us Apart</h2>
          <p>The FeanPay Technologies advantage</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Expert Team</h3>
            <p>Our team consists of senior engineers with deep expertise in modern web technologies and proven track records in fintech.</p>
          </div>
          <div className="feature-card">
            <h3>Agile Methodology</h3>
            <p>We use agile development practices to ensure flexibility, transparency, and rapid delivery of value.</p>
          </div>
          <div className="feature-card">
            <h3>Quality Focused</h3>
            <p>Comprehensive testing strategies including unit tests, integration tests, and end-to-end testing ensure rock-solid solutions.</p>
          </div>
          <div className="feature-card">
            <h3>Scalable Solutions</h3>
            <p>We build with growth in mind, creating architectures that scale seamlessly as your business expands.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Stack</h3>
            <p>Leveraging the latest technologies like React, TypeScript, and cloud services to build future-proof applications.</p>
          </div>
          <div className="feature-card">
            <h3>Continuous Support</h3>
            <p>Our commitment doesn&apos;t end at launch. We provide ongoing maintenance, updates, and technical support.</p>
          </div>
        </div>
      </section>

      {/* 8. Team Section */}
      <section className="team">
        <div className="section-header">
          <div className="section-tag">Our Team</div>
          <h2>Meet the Experts</h2>
          <p>Talented professionals dedicated to your success</p>
        </div>
        <div className="team-intro">
          <h3>Building the Future Together</h3>
          <p>Our diverse team of developers, designers, and strategists brings together decades of combined experience in software development, fintech, and digital innovation. We&apos;re passionate about creating solutions that make a real difference.</p>
          <div className="team-stats">
            <div className="team-stat">
              <span className="team-stat-number">15+</span>
              <span className="team-stat-label">Team Members</span>
            </div>
            <div className="team-stat">
              <span className="team-stat-number">10+</span>
              <span className="team-stat-label">Technologies</span>
            </div>
            <div className="team-stat">
              <span className="team-stat-number">100%</span>
              <span className="team-stat-label">Dedicated</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <div className="section-tag">Testimonials</div>
          <h2>What Our Clients Say</h2>
          <p>Real feedback from real clients</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">&quot;FeanPay Technologies transformed our vision into reality. Their expertise in fintech and attention to detail resulted in a product that exceeded our expectations.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>CEO, TechStart Inc</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">&quot;Working with FeanPay Technologies was a game-changer. Their agile approach and constant communication made the entire development process smooth and efficient.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <p>CTO, FinanceFlow</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">&quot;The team&apos;s technical expertise and innovative solutions helped us launch our platform ahead of schedule. Highly recommended for any serious tech project.&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar">👤</div>
              <div className="author-info">
                <h4>Emma Williams</h4>
                <p>Founder, PayStream</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section className="contact" id="contact">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2>Let&apos;s Build Something Great Together</h2>
          <p>Ready to start your project? We&apos;d love to hear from you</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in touch with us</h3>
            <p>Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>contact@feanpaytech.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+234 (0) 800 000 0000</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let&apos;s turn your ideas into innovative digital solutions</p>
        <a href="#contact" className="btn">Schedule a Consultation</a>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>FeanPay Technologies</h3>
            <p>We&apos;re a service-based technology company dedicated to building innovative products that solve real-world problems and empower businesses in the digital age.</p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Custom Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">AI Integration</a></li>
              <li><a href="#services">Fintech Solutions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 FeanPay Technologies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}