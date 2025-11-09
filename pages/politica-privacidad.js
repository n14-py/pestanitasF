import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link'; // Importamos Link para el enlace interno

export default function PoliticaPrivacidad() {
  return (
    <Layout>
      <Head>
        {/* SEO tags para esta página (de tu politica-privacidad.html) */}
        <title>Política de Privacidad - Datos y Seguridad en TuRadio.lat</title>
        <meta name="description" content="Lea cómo TuRadio.lat y LFAF Tech recopilan y protegen su información. Nos enfocamos en la privacidad, no almacenamos datos personales ni contenido de los streams de radio en vivo." />
        
        {/* Metatags OG específicas */}
        <meta property="og:title" content="Política de Privacidad - TuRadio.lat" />
        <meta property="og:url" content="https://turadio.lat/politica-privacidad" />
        <meta property="og:description" content="Lea cómo TuRadio.lat y LFAF Tech recopilan y protegen su información." />

        {/* Etiqueta Canónica */}
        <link rel="canonical" href="https://turadio.lat/politica-privacidad" />
      </Head>

      {/* Contenido de tu archivo politica-privacidad.html original */}
      <div className="static-page-container">
          <h1 style={{ color: 'var(--color-primario)', borderBottom: '3px solid var(--color-primario)', paddingBottom: '10px', marginBottom: '1.5rem' }}>Política de Privacidad</h1>
          <p>Última actualización: Noviembre de 2025</p>

          <p>En TuRadio.lat, operado por LFAF Tech, valoramos enormemente su privacidad. Nuestra política es simple: <strong>minimizamos la recopilación de datos personales</strong> y nos enfocamos en ofrecer un servicio de streaming de radio rápido y seguro.</p>

          <h2>1. Información que NO Recopilamos</h2>
          <p>Cuando usted utiliza TuRadio.lat para escuchar estaciones de radio en vivo de Latinoamérica (Paraguay, Argentina, Chile, etc.), nosotros <strong>no</strong> recopilamos, almacenamos ni procesamos la siguiente información personal identificable:</p>
          <ul>
              <li>Nombres, direcciones de correo electrónico o números de teléfono.</li>
              <li>Ubicación GPS precisa o datos de contacto.</li>
              <li>Información de pago o credenciales de inicio de sesión, ya que el servicio es gratuito y no requiere registro.</li>
          </ul>

          <h2>2. Información Recopilada (Datos de Uso Anónimos)</h2>
          <p>Para mantener la calidad del servicio, garantizar la estabilidad y comprender las tendencias de uso, podemos recopilar la siguiente información de forma <strong>anónima y agregada</strong>:</p>
          <ul>
              <li><strong>Dirección IP:</strong> Se utiliza únicamente para determinar la región geográfica aproximada (país) del usuario para fines estadísticos y legales. No se vincula a su identidad.</li>
              <li><strong>Cookies y Tecnologías Similares:</strong> Utilizamos cookies para almacenar preferencias básicas (como el estado de reproducción de la última radio) y para el funcionamiento de herramientas de análisis de terceros (como Google Analytics, si se implementa).</li>
              <li><strong>Datos de Uso del Servicio:</strong> Registramos qué estaciones de radio se sintonizan, el tiempo de escucha y los errores de reproducción, para diagnosticar problemas y mejorar la estabilidad del servicio.</li>
          </ul>

          <h2>3. El Contenido de la Radio</h2>
          <p>TuRadio.lat es solo un directorio. Al hacer clic en una radio, usted establece una conexión directa entre su navegador y el servidor de streaming de la radiodifusora externa. <strong>Nosotros no almacenamos ni interceptamos el contenido de audio</strong>. La recopilación de datos de esa conexión externa está sujeta a las políticas de privacidad de la estación de radio original.</p>
          <p>Nuestra API (operada por LFAF Tech) solo almacena metadatos de las estaciones (nombre, UUID, URL del stream) para la funcionalidad de búsqueda.</p>

          <h2>4. Servicios de Terceros (Análisis y Publicidad)</h2>
          <p>Para la monetización y el análisis de tráfico, podemos integrarnos con servicios de terceros. Estos proveedores pueden utilizar sus propias cookies para rastrear patrones de uso en nuestro sitio y otros sitios web con el fin de mostrar publicidad contextual. LFAF Tech no tiene control sobre estas cookies.</p>

          <h2>5. Sus Derechos</h2>
          <p>Dado que no almacenamos información personal identificable, la solicitud de acceso, rectificación o eliminación de datos personales no aplica para la mayoría de los usuarios. Si tiene alguna preocupación sobre los datos de uso anónimos recopilados, puede:</p>
          <ul>
              <li>Desactivar las cookies en la configuración de su navegador.</li>
              <li>Utilizar herramientas de exclusión voluntaria ofrecidas por los proveedores de publicidad.</li>
          </ul>

          <h2>6. Cambios a esta Política</h2>
          <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio significativo será notificado a través de una actualización de la fecha en la parte superior de esta página.</p>
          
          <p style={{ marginTop: '2rem' }}>Si tiene preguntas sobre esta política, por favor, contáctenos a través de <a href="mailto:soporte@lfaftech.com">soporte@lfaftech.com</a>.</p>
      </div>
    </Layout>
  );
}