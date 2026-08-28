export default function ControlesGerais({ onReiniciar, onDesfazer, podeDesfazer }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '15px 0' }}>
            <button onClick={onDesfazer} disabled={!podeDesfazer}>
                Desfazer Última Jogada
            </button>
            <button
                onClick={onReiniciar}
                style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
            >
                Reiniciar Partida
            </button>
        </div>
    );
}