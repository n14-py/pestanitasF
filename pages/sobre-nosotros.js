import Layout from '../components/Layout';
import Head from 'next/head';

export default function SobreNosotros() {
  return (
    <Layout>
      <Head>
        {/* Esto sobreescribe el título y descripción por defecto del Layout.js */}
        <title>Sobre Nosotros - La Misión de TuRadio.lat y LFAF Tech en Latinoamérica</title>
        <meta name="description" content="Descubre quiénes somos, nuestra visión de la radio digital y cómo estamos construyendo el portal más completo para escuchar estaciones en vivo de Argentina, México, Paraguay, Chile y toda la región LATAM." />
        
        {/* Metatags OG específicas para esta página */}
        <meta property="og:title" content="Sobre Nosotros - TuRadio.lat" />
        <meta property="og:url" content="https://turadio.lat/sobre-nosotros" />
        <meta property="og:description" content="Descubre quiénes somos y nuestra visión de la radio digital en Latinoamérica." />

        {/* ¡Etiqueta Canónica! */}
        <link rel="canonical" href="https://turadio.lat/sobre-nosotros" />
      </Head>

      {/* Este es el contenido de tu archivo sobre-nosotros.html original */}
      <div className="static-page-container">
          <h1 style={{ color: 'var(--color-primario)', borderBottom: '3px solid var(--color-primario)', paddingBottom: '10px', marginBottom: '1.5rem' }}>Nuestra Misión: Conectar Latinoamérica con la Radio Digital</h1>
          <p>TuRadio.lat nació de una visión simple pero poderosa de <strong>LFAF Tech</strong>: crear el portal más rápido, estable y completo para escuchar <strong>radios en vivo de Latinoamérica</strong>. En un mundo donde el contenido se dispersa, la radio sigue siendo un punto de conexión vital, y nuestro objetivo es centralizar miles de estaciones en una sola plataforma de fácil acceso, optimizada para dispositivos móviles.</p>

          <h2>¿Quiénes Somos y Qué Hacemos?</h2>
          <p>Somos un proyecto desarrollado y mantenido por <strong>LFAF Tech</strong>, una empresa de tecnología enfocada en la creación de soluciones digitales escalables para la región de habla hispana y portuguesa. Utilizamos tecnología de punta, incluyendo una API centralizada con MongoDB, para garantizar que nuestra base de datos esté siempre actualizada y que el rendimiento sea excelente en cualquier país, desde Paraguay hasta México.</p>

          <h3>Nuestra Propuesta de Valor y Filosofía</h3>
          <p>Nos diferenciamos por nuestro enfoque en la experiencia del usuario y la calidad del servicio:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li><strong>Estabilidad y Velocidad:</strong> Priorizamos un código ligero y servidores optimizados para ofrecer <strong>streaming de radio instantáneo</strong> y minimizar los cortes o el *buffering*.</li>
              <li><strong>Enfoque Regional:</strong> A diferencia de otros portales globales, nuestra curación y enfoque están 100% en la cultura, géneros y países de Latinoamérica (Argentina, Chile, Perú, Paraguay, Colombia, etc.), incluyendo una amplia selección de géneros como la Cumbia, Reggaetón y Música Regional.</li>
              <li><strong>Experiencia Móvil Perfecta:</strong> Entendemos que la mayoría de nuestros usuarios nos sintonizan desde su celular. Por ello, el diseño es <strong>totalmente responsive</strong>, asegurando que el reproductor persistente y la navegación sean intuitivos y fluidos en cualquier smartphone.</li>
          </ul>
          <p>Más que un simple directorio, somos una herramienta de descubrimiento. Te permitimos filtrar por país (ej. solo radios de Paraguay), buscar por género o encontrar frecuencias específicas. Nuestro sistema de reproducción persistente garantiza que puedas navegar por el sitio, consultar información o buscar otra radio sin que tu música se detenga.</p>

          <h2>Compromiso con las Emisoras y Transparencia</h2>
          <p>Respetamos profundamente la labor de las emisoras. Nuestra plataforma es una forma de <strong>expandir su audiencia</strong> digital sin costo. Si usted es dueño de una estación de radio y:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>Desea que su información o logo se actualice.</li>
              <li>Requiere la remoción inmediata de su stream.</li>
              <li>Busca oportunidades de publicidad o alianzas.</li>
          </ul>
          <p>Le invitamos a contactarnos directamente. Nuestro código está diseñado para ser respetuoso con el uso de recursos y dar visibilidad a la <strong>radio tradicional</strong> en el entorno digital moderno.</p>
          
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Gracias por sintonizar con nosotros. Nuestro compromiso es brindarte la mejor experiencia de radio en vivo de Latinoamérica.</p>
      </div>
    </Layout>
  );
}