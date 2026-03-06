export const metadata = {
    title: 'Digi API Backend',
    description: 'Proxy server for Digimon API',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
