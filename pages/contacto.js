import Layout from '../components/Layout';
import Head from 'next/head';

export default function Contacto() {
  return (
    <Layout>
      <Head>
        {/* SEO tags para esta página (de tu contacto.html) */}
        <title>Contacto - Envíanos tus sugerencias o reporta una estación | TuRadio.lat</title>
        <meta name="description" content="Contáctanos para reportar una radio caída, sugerir una nueva estación de Latinoamérica o consultar sobre publicidad. TuRadio.lat es una plataforma de LFAF Tech." />
        
        {/* Metatags OG específicas */}
        <meta property="og:title" content="Contacto - TuRadio.lat" />
        <meta property="og:url" content="https://turadio.lat/contacto" />
        <meta property="og:description" content="Contáctanos para reportar una radio caída, sugerir una nueva estación de Latinoamérica o consultar sobre publicidad." />

        {/* Etiqueta Canónica */}
        <link rel="canonical" href="https://turadio.lat/contacto" />
      </Head>

      {/* Contenido de tu archivo contacto.html original */}
      <div className="static-page-container">
          <h1 style={{ color: 'var(--color-primario)', borderBottom: '3px solid var(--color-primario)', paddingBottom: '10px', marginBottom: '1.5rem' }}>Contáctanos</h1>
          <p>Estamos aquí para ayudarte. Si tienes alguna pregunta, deseas reportar una estación de radio que no funciona, o quieres que agreguemos tu propia radio, usa la información a continuación. TuRadio.lat es un proyecto operado por LFAF Tech.</p>

          <h2>Formas de Contacto Directo</h2>
          <p>La vía más rápida y eficiente para comunicarte con nuestro equipo de soporte es a través del correo electrónico:</p>
          
          {/* React necesita que 'style' sea un objeto {{...}} */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px' }}>
                  <strong style={{ color: 'var(--color-texto-principal)' }}><i className="fas fa-envelope" style={{ marginRight: '10px' }}></i> Correo Electrónico:</strong> <a href="mailto:soporte@lfaftech.com">soporte@lfaftech.com</a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                  <strong style={{ color: 'var(--color-texto-principal)' }}><i className="fas fa-code-branch" style={{ marginRight: '10px' }}></i> Desarrollador:</strong> <a href="https://lfaftech.com" target="_blank" rel="noopener noreferrer">LFAF Tech Oficial</a>
              </li>
          </ul>

          <h2>Motivos Comunes de Contacto</h2>
          
          <h3>Adición o Sugerencia de una Radio</h3>
          <p>Si tienes una estación de radio legal y operativa en Latinoamérica que deseas ver listada en nuestra plataforma, envíanos un correo con la siguiente información: Nombre de la Estación, País, Géneros y el Enlace de Streaming (preferiblemente HTTPS).</p>

          <h3>Reportar un Problema o Stream Caído</h3>
          <p>Si encuentras que una de nuestras radios en vivo está bloqueada, tiene un error de reproducción o el stream se ha caído permanentemente, por favor, notifícanos. Menciona el nombre exacto de la radio y el país para que podamos corregirlo lo antes posible.</p>

          <h3>Publicidad y Alianzas Comerciales</h3>
          <p>Para consultas sobre oportunidades de publicidad, patrocinios o alianzas estratégicas con TuRadio.lat o la red de LFAF Tech, comunícate con nosotros por correo. Estamos abiertos a expandir la audiencia de tu negocio en toda la región.</p>
          
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Nuestro objetivo es ser el portal de radios más estable y completo de la región. ¡Agradecemos tu colaboración!</p>
      </div>
    </Layout>
  );
}