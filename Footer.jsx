import React from 'react';

export default function Footer(){
  return (
    <footer id="contact" className="footer container fade-in-up delay-4">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} ChutNee — Built for Neurofactor</div>
        <div>Made with ❤️ — <a href="mailto:rahul@neurofactor.io">Contact</a></div>
      </div>
    </footer>
  );
}
