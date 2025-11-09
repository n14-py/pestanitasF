import Layout from '../components/Layout';
import Head from 'next/head';

export default function Terminos() {
  return (
    <Layout>
      <Head>
        {/* SEO tags para esta página (de tu terminos.html) */}
        <title>Términos y Condiciones de Uso | TuRadio.lat</title>
        <meta name="description" content="Lee nuestros Términos y Condiciones de Uso. Información legal sobre el acceso y la utilización del servicio de streaming de radio en vivo de Latinoamérica proporcionado por TuRadio.lat." />
        
        {/* Metatags OG específicas */}
        <meta property="og:title" content="Términos y Condiciones de Uso | TuRadio.lat" />
        <meta property="og:url" content="https://turadio.lat/terminos" />
        <meta property="og:description" content="Información legal sobre el acceso y la utilización del servicio de streaming de radio en vivo de Latinoamérica proporcionado por TuRadio.lat." />

        {/* Etiqueta Canónica */}
        <link rel="canonical" href="https://turadio.lat/terminos" />
      </Head>

      {/* Contenido de tu archivo terminos.html original */}
      <div className="static-page-container">
          <h1 style={{ color: 'var(--color-primario)', borderBottom: '3px solid var(--color-primario)', paddingBottom: '10px', marginBottom: '1.5rem' }}>Términos y Condiciones de Uso</h1>
          <p>Última actualización: Noviembre de 2025</p>

          <p>Bienvenido a TuRadio.lat, operado por LFAF Tech. Al acceder y utilizar este servicio, usted acepta estar legalmente obligado por los siguientes términos y condiciones ("Términos de Uso"). Si no está de acuerdo con estos términos, le rogamos no utilice nuestra plataforma.</p>

          <h2>1. Naturaleza del Servicio y Uso Aceptable</h2>
          <p>TuRadio.lat es un directorio y un reproductor que facilita el acceso a transmisiones de radio públicas a través de Internet ("streams"). Nuestro servicio actúa como un intermediario tecnológico para sintonizar contenido de radiodifusoras de Latinoamérica (Argentina, Paraguay, México, Colombia, etc.) que ya están disponibles públicamente en la web.</p>
          <ul>
              <li>El uso del servicio es gratuito para fines personales y no comerciales.</li>
              <li>Usted no debe utilizar nuestra plataforma para redistribuir, grabar o modificar el contenido de los streams de radio.</li>
              <li>Queda prohibido cualquier intento de ingeniería inversa, hackeo o interrupción del servicio de streaming.</li>
          </ul>

          <h2>2. Derechos de Autor y Propiedad Intelectual</h2>
          <p>La música, programas, noticias y cualquier otro contenido transmitido a través de nuestra plataforma es propiedad de sus respectivas estaciones de radio o de los titulares de derechos de autor originales. TuRadio.lat solo proporciona el enlace para el streaming.</p>
          <p>Si usted es un titular de derechos de autor y cree que su contenido ha sido enlazado de forma indebida o requiere su remoción, por favor, contáctenos inmediatamente a través de <a href="mailto:soporte@lfaftech.com">soporte@lfaftech.com</a>. Actuaremos rápidamente para cumplir con cualquier solicitud legal de remoción.</p>

          <h2>3. Limitación de Responsabilidad</h2>
          <p>TuRadio.lat no garantiza la disponibilidad ininterrumpida, la calidad o la legalidad de los streams de radio. Las interrupciones en el servicio (como el error de stream) son responsabilidad de la emisora o del proveedor de la señal.</p>
          <ul>
              <li>El usuario acepta que utiliza el servicio bajo su propio riesgo.</li>
              <li>LFAF Tech no será responsable por ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de usar el servicio.</li>
              <li>Hacemos un esfuerzo constante por actualizar nuestros enlaces y eliminar radios que ya no funcionan, pero no ofrecemos garantía sobre su precisión.</li>
          </ul>

          <h2>4. Modificaciones a los Términos</h2>
          <p>Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento y sin previo aviso. Es responsabilidad del usuario revisar periódicamente esta página para estar al tanto de los cambios.</p>

          <h2>5. Ley Aplicable</h2>
          <p>Estos Términos de Uso se regirán e interpretarán de conformidad con las leyes de la República de Paraguay, sin dar efecto a ningún principio de conflicto de leyes. Cualquier disputa legal será resuelta en los tribunales competentes de Asunción, Paraguay.</p>
          
          <p style={{ marginTop: '2rem' }}>Al usar TuRadio.lat, usted reconoce que ha leído y entendido estos Términos y Condiciones, y acepta cumplirlos.</p>
      </div>
    </Layout>
  );
}