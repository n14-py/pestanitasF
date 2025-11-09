import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link'; // Importamos Link para los enlaces internos

export default function PreguntasFrecuentes() {
  return (
    <Layout>
      <Head>
        {/* SEO tags para esta página (de tu preguntas-frecuentes.html) */}
        <title>Preguntas Frecuentes (FAQ) - Guía de Uso de TuRadio.lat</title>
        <meta name="description" content="Respuestas a las preguntas más comunes sobre cómo escuchar radios de Latinoamérica, qué hacer si un stream no funciona (error HTTP/HTTPS) o cómo solicitar la adición de una nueva estación a TuRadio.lat." />
        
        {/* Metatags OG específicas */}
        <meta property="og:title" content="Preguntas Frecuentes (FAQ) - TuRadio.lat" />
        <meta property="og:url" content="https://turadio.lat/preguntas-frecuentes" />
        <meta property="og:description" content="Respuestas a las preguntas más comunes sobre cómo escuchar radios de Latinoamérica y qué hacer si un stream no funciona." />

        {/* Etiqueta Canónica */}
        <link rel="canonical" href="https://turadio.lat/preguntas-frecuentes" />
      </Head>

      {/* Contenido de tu archivo preguntas-frecuentes.html original */}
      <div className="static-page-container">
          <h1 style={{ color: 'var(--color-primario)', borderBottom: '3px solid var(--color-primario)', paddingBottom: '10px', marginBottom: '1.5rem' }}>Preguntas Frecuentes (FAQ)</h1>
          <p>Aquí respondemos las dudas más comunes sobre el uso de nuestra plataforma para escuchar radios en vivo de Latinoamérica (Argentina, Paraguay, Chile, México, etc.).</p>

          <h2>¿Cómo Funciona TuRadio.lat? (SEO Key: Escuchar radio online LATAM)</h2>
          <p>TuRadio.lat es un agregador de streams de radio. Mantenemos una base de datos actualizada con los enlaces de transmisión pública de miles de emisoras. Cuando haces clic en 'Reproducir', tu dispositivo se conecta directamente al servidor de la estación de radio, y nuestro reproductor persistente te permite seguir navegando sin que la música se detenga.</p>

          <h3>¿Por qué la radio se detiene o no reproduce (Error de Stream)? (SEO Key: Radio no funciona, Error de reproducción HTTP/HTTPS)</h3>
          <p>El problema más común es el <strong>error de Contenido Mixto (HTTP/HTTPS)</strong>. TuRadio.lat es seguro (HTTPS), pero muchos streams de radio todavía usan el protocolo antiguo (HTTP). Nuestro sistema intenta automáticamente convertir el stream a HTTPS, y si no funciona, hace un segundo intento con el HTTP original después de un breve "Cargando..." (delay).</p>
          <p>Si la radio sigue sin sonar, la razón es que el stream está temporalmente caído o ha sido cambiado por la emisora. En ese caso, por favor, repórtalo en nuestra página de <Link href="/contacto">Contacto</Link>.</p>

          <h3>¿Cómo puedo buscar una radio específica? (SEO Key: Buscar frecuencia de radio)</h3>
          <p>Puedes usar la barra de búsqueda en la parte superior. Puedes buscar por:</p>
          <ul>
              <li><strong>Nombre de la radio:</strong> "Radio Corazón", "La 100".</li>
              <li><strong>Frecuencia y País:</strong> "106.5 Paraguay" o "97.0 Argentina".</li>
              <li><strong>País o Género:</strong> "Radios de Cumbia", "Radios de Paraguay".</li>
          </ul>

          <h3>¿Cómo puedo hacer que mi radio aparezca en la lista? (SEO Key: Agregar radio a TuRadio.lat)</h3>
          <p>¡Nos encanta agregar nuevas estaciones de radio de Latinoamérica! Si tienes una emisora con un stream estable y público, envíanos la siguiente información a <a href="mailto:soporte@lfaftech.com">soporte@lfaftech.com</a>:</p>
          <ol>
              <li>Nombre de la Estación.</li>
              <li>País y Ciudad (Opcional).</li>
              <li>URL del Stream (esencial, preferiblemente HTTPS).</li>
              <li>Logo de la estación (opcional, ayuda al SEO visual).</li>
          </ol>
          <p>Nuestro equipo revisará y agregará la radio en el menor tiempo posible.</p>

          <h3>¿Necesito instalar algo o pagar por el servicio?</h3>
          <p>No. TuRadio.lat es <strong>completamente gratuito</strong> y accesible desde cualquier navegador (Chrome, Safari, Firefox). No necesitas descargar ninguna aplicación o plugin para escuchar las radios en tu celular o computadora.</p>

          <h3>¿La radio sigue sonando si navego a otra página?</h3>
          <p>¡Sí! Gracias a nuestra tecnología SPA (Single Page Application) y el reproductor persistente, la radio seguirá sonando aunque explores otras listas, búsquedas o la página de detalle. Si quieres detenerla, simplemente usa el botón 'X' en la barra inferior.</p>
          
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Si tu pregunta no ha sido respondida, por favor visita nuestra página de <Link href="/contacto">Contacto</Link>.</p>
      </div>
    </Layout>
  );
}