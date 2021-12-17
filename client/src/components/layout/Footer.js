import React from 'react';

export default function Footer() {
  return (
    <footer >
      <div className="container">
        <span className="text-muted"> Copyright &copy; {new Date().getFullYear()} Instashare</span>
      </div>
    </footer>
  )
}
