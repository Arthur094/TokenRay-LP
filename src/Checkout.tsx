import React from 'react';
import { Shield, Zap, AlertTriangle, Lock, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
        
        {/* 1. HERO */}
        <header className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Você pode evitar o próximo golpe — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">antes de investir</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            O TokenRay analisa tokens e mostra riscos ocultos que podem fazer você perder dinheiro.
          </p>
        </header>

        {/* 2. BLOCO PRINCIPAL (OFERTA) */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Acesso antecipado ao TokenRay</span>
            </div>

            <div className="mb-8">
              <span className="text-6xl font-black text-white tracking-tighter">R$ 19,90</span>
              <span className="text-xl text-slate-400 font-medium"> / mês</span>
              <p className="text-sm text-purple-400 mt-2 font-medium">preço de fundador</p>
            </div>

            <div className="w-full max-w-md space-y-4 text-left">
              {[
                { icon: Zap, text: 'Análise de tokens em segundos' },
                { icon: Shield, text: 'Nota de segurança (0 a 10)' },
                { icon: EyeOff, text: 'Identificação de riscos ocultos' },
                { icon: CheckCircle2, text: 'Explicação em linguagem simples' },
                { icon: Zap, text: 'Acesso antes do público geral' },
                { icon: Lock, text: 'Preço congelado para sempre' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* 6. BOTÃO PRINCIPAL CTA (Dentro do card) */}
            <div className="w-full mt-10">
              <button className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] group/btn">
                Quero acesso antecipado agora
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 flex flex-col items-center gap-2 text-sm text-slate-400">
                <p>Você será um dos primeiros usuários</p>
                <p>Acesso liberado em etapas</p>
                <p>Sem compromisso de longo prazo</p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. URGÊNCIA */}
        <div className="flex items-center justify-center gap-2 text-orange-400 bg-orange-400/10 border border-orange-400/20 py-3 px-4 rounded-xl">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="font-semibold text-sm md:text-base">Estamos liberando acesso para um número limitado de usuários</p>
        </div>

        {/* 3. BLOCO DE DOR (emocional) */}
        <section className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Se você compra tokens sem verificar isso:
          </h3>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3 text-slate-300">
              <span className="text-red-500 mt-1">✗</span>
              <p>Você pode não conseguir vender depois</p>
            </li>
            <li className="flex gap-3 text-slate-300">
              <span className="text-red-500 mt-1">✗</span>
              <p>O criador pode retirar toda a liquidez</p>
            </li>
            <li className="flex gap-3 text-slate-300">
              <span className="text-red-500 mt-1">✗</span>
              <p>Você pode estar entrando em um golpe sem saber</p>
            </li>
          </ul>
          <div className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-medium text-sm">
            👉 Isso acontece todos os dias
          </div>
        </section>

        {/* 4. BLOCO DE SEGURANÇA */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-8 border-y border-white/5">
          <div className="flex items-center gap-3 text-slate-300">
            <Lock className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">Pagamento 100% seguro</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium">Pix ou Cartão</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium">Liberação progressiva</span>
          </div>
        </section>

        {/* 5. BLOCO DE TRANSPARÊNCIA */}
        <section className="text-center bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-lg text-white font-medium">
            O TokenRay está em fase inicial.
          </p>
          <p className="text-slate-400 mt-1">
            Você está garantindo acesso antecipado e prioridade na liberação.
          </p>
        </section>

        {/* 8. BLOCO FINAL (posicionamento) */}
        <footer className="text-center pb-12 pt-8">
          <p className="text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
            A maioria das pessoas perde dinheiro em cripto por um motivo simples:
            <br />
            <strong className="text-white font-bold">não entende o que está comprando.</strong>
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-2xl mt-6">
            O TokenRay resolve isso em segundos.
          </p>
        </footer>

      </div>
    </div>
  );
}
