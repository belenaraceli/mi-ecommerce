import React from 'react';

const Contacto = () => {
  return (
    <div className="container mt-5 contacto-page">
      <h1 className="text-center mb-4">Contacto</h1>
      <p className="text-center mb-4">
        ¿Tenés alguna consulta o querés hacernos una sugerencia? Escribinos o completá el formulario y te responderemos a la brevedad.
      </p>

      <div className="row">
        {/* Información de contacto */}
        <div className="col-md-6 mb-4">
          <h5>Datos de contacto</h5>
          <p><strong>Email:</strong> info@mitienda.com</p>
          <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
          <p><strong>Dirección:</strong> Av. Siempre Viva 742, Buenos Aires</p>

          <h6 className="mt-4">Nuestras redes</h6>
          <div className="social-buttons d-flex gap-2">
            <a href="https://www.instagram.com" target="_blank" className="btn btn-outline-dark btn-sm">
              <i className="bi bi-instagram me-1"></i> Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" className="btn btn-outline-dark btn-sm">
              <i className="bi bi-facebook me-1"></i> Facebook
            </a>
            <a href="https://www.whatsapp.com" target="_blank" className="btn btn-outline-dark btn-sm">
              <i className="bi bi-whatsapp me-1"></i> WhatsApp
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="col-md-6">
          <h5>Formulario de consulta</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="tu@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" rows="4" placeholder="Escribí tu mensaje aquí"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
