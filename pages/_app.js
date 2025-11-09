import { useRef } from 'react';

// --- 1. IMPORTACIONES ---
// Importamos el "Cerebro"
import { PlayerProvider, usePlayer } from '../context/PlayerContext';
// Importamos el "Cuerpo" (la barra visual)
import PlayerBar from '../components/PlayerBar';

// Importamos los estilos globales y los íconos (como antes)
import '../styles/style.css';
import Head from 'next/head';

// --- 2. EL COMPONENTE PRINCIPAL DE LA APP ---
function MyApp({ Component, pageProps }) {
    
    // 3. Creamos una referencia para el tag <audio>
    const audioRef = useRef(null);
    
    return (
        // 4. Envolvemos TODO en el "Cerebro" (PlayerProvider)
        <PlayerProvider>
            <Head>
                {/* Esto carga los íconos (fas fa-bars, fas fa-play, etc.) */}
                <link 
                  rel="stylesheet" 
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
                />
            </Head>
            
            {/* 5. Renderizamos la página actual (index.js, contacto.js, etc.) */}
            <Component {...pageProps} />
            
            {/* 6. Renderizamos el "Cuerpo" (la barra visual) */}
            <PlayerBar />
            
            {/* 7. Renderizamos el <audio> tag real. Estará oculto.
                 Usamos un componente "AudioInjector" para pasar el 'ref'
                 del audio tag al "cerebro" (PlayerContext).
            */}
            <AudioInjector setAudioElement={(el) => audioRef.current = el} />
        </PlayerProvider>
    );
}

// Este pequeño componente es un truco para conectar
// el <audio> tag (que está aquí) con el "cerebro" (Context).
function AudioInjector({ setAudioElement }) {
    const { setAudioElement: setAudioInContext } = usePlayer();
    
    // Creamos el ref y nos aseguramos de que el contexto lo reciba
    const audioRef = (node) => {
        if (node) {
            setAudioElement(node); // Pasa el elemento <audio> a MyApp
            setAudioInContext(node); // Pasa el elemento <audio> al Context (cerebro)
        }
    };
    
    return (
        <audio 
          ref={audioRef} 
          id="audio-player" 
          preload="none" // No precargar
        />
    );
}

export default MyApp;