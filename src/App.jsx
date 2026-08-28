import { useState } from 'react';
import Placar from './components/Placar';
import AcoesJogo from './components/AcoesJogo';
import Historico from './components/Historico';
import ControlesGerais from './components/ControlesGerais';

export default function App() {
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);
  const [posseTimeA, setPosseTimeA] = useState(true);
  const [historico, setHistorico] = useState([]);

  // Condição de vitória aos 21 pontos
  const vencedor = pontosA >= 21 ? 'Time A' : pontosB >= 21 ? 'Time B' : null;

  function registrarPontos(pontos) {
    if (vencedor) return;

    const timeAtual = posseTimeA ? 'Time A' : 'Time B';

    if (posseTimeA) {
      setPontosA(prev => prev + pontos);
    } else {
      setPontosB(prev => prev + pontos);
    }

    const novaJogada = {
      time: posseTimeA ? 'A' : 'B',
      pontos: pontos,
      texto: `${timeAtual} marcou +${pontos} ponto(s)`
    };

    setHistorico(prev => [...prev, novaJogada]);
    setPosseTimeA(!posseTimeA);
  }

  function passarBola() {
    if (vencedor) return;
    setPosseTimeA(!posseTimeA);
  }

  // Desfazer última jogada
  function desfazerJogada() {
    if (historico.length === 0) return;

    const ultimaJogada = historico[historico.length - 1];

    if (ultimaJogada.time === 'A') {
      setPontosA(prev => prev - ultimaJogada.pontos);
      setPosseTimeA(true);
    } else {
      setPontosB(prev => prev - ultimaJogada.pontos);
      setPosseTimeA(false);
    }

    setHistorico(prev => prev.slice(0, -1));
  }

  // Reiniciar partida
  function reiniciarPartida() {
    setPontosA(0);
    setPontosB(0);
    setPosseTimeA(true);
    setHistorico([]);
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Placar do Jogo</h1>

      {/* Banner de Vitória */}
      {vencedor && (
        <div style={{ padding: '15px', backgroundColor: '#22c55e', color: '#fff', fontSize: '20px', fontWeight: 'bold', borderRadius: '8px', marginBottom: '20px' }}>
          🏆 {vencedor} VENCEU A PARTIDA! 🏆
        </div>
      )}

      <Placar pontosA={pontosA} pontosB={pontosB} posseTimeA={posseTimeA} />

      <AcoesJogo onPontuar={registrarPontos} onPassarBola={passarBola} desabilitado={!!vencedor} />

      <ControlesGerais onReiniciar={reiniciarPartida} onDesfazer={desfazerJogada} podeDesfazer={historico.length > 0} />

      <Historico historico={historico} />
    </div>
  );
}