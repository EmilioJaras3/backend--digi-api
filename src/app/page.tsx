export default function Home() {
    return (
        <main style={{ padding: '2rem', fontFamily: 'monospace' }}>
            <h1>Digi API Backend</h1>
            <p>Este es el servidor proxy para la Digimon API.</p>
            <h2>Endpoints disponibles:</h2>
            <ul>
                <li><a href="/api/coins">/api/coins</a> - Lista de Digimons</li>
                <li><a href="/api/coins/Agumon">/api/coins/:name</a> - Digimon por nombre</li>
                <li><a href="/api/trending">/api/trending</a> - Digimons nivel Mega</li>
                <li><a href="/api/health">/api/health</a> - Estado del servidor</li>
            </ul>
        </main>
    );
}
