export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: '#121220',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                color: '#64748b',
                fontFamily: 'system-ui, sans-serif',
                fontSize: '14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    border: '3px solid rgba(255,255,255,0.1)',
                    borderTopColor: '#6366f1',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                Cargando documento…
            </div>
        </div>
    )
}
