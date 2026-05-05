import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  XOctagon, 
  Loader2, 
  ShieldCheck, 
  CreditCard, 
  AlertCircle,
  Flame
} from 'lucide-react';

export default function Checkout() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden relative pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-10">
        
        {/* 1. TOPO (REFORÇO EMOCIONAL MAIS FORTE) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-5 py-3 rounded-full mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="text-red-400 font-black text-sm sm:text-base uppercase tracking-wider">Você quase comprou um token com alto risco</span>
          </div>

          <div className="bg-[#0d0d12]/80 backdrop-blur-md border border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)] text-left w-full mx-auto relative overflow-hidden transform hover:scale-[1.01] transition-transform">
            <div className="absolute top-0 right-0 p-24 bg-red-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 pb-5 border-b border-red-500/20 relative z-10">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-7 h-7 text-red-500" />
                <span className="text-white font-extrabold text-xl">Resultado da análise</span>
              </div>
              <div className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm sm:text-base font-black shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                Nota: 3/10 — Alto risco
              </div>
            </div>
            
            <ul className="space-y-5 relative z-10">
              <li className="flex gap-4 text-red-200/90 text-base sm:text-lg">
                <XOctagon className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>Liquidez <strong>não travada</strong></span>
              </li>
              <li className="flex gap-4 text-red-200/90 text-base sm:text-lg">
                <XOctagon className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span>Dono ainda controla o contrato</span>
              </li>
              <li className="flex gap-4 text-red-200/90 text-base sm:text-lg">
                <XOctagon className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Alto risco de não conseguir vender</strong></span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 6. PROVA SIMPLES (CREDIBILIDADE) */}
        <div className="text-center bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 shadow-inner">
          <p className="text-slate-300 font-medium leading-relaxed text-base sm:text-lg">
            <strong className="text-white font-bold">Golpes em tokens acontecem todos os dias.</strong><br/>
            Muitos investidores só descobrem depois que não conseguem vender.
          </p>
        </div>

        {/* 2. PREÇO COM URGÊNCIA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center">
            
            <div className="mb-6">
              <div className="flex flex-col items-center justify-center">
                <span className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  R$ 19,90
                </span>
                <span className="text-2xl text-slate-400 font-bold mt-2">/ mês</span>
              </div>
            </div>

            {/* 5. JUSTIFICATIVA DE PREÇO */}
            <div className="mb-8">
              <p className="text-emerald-400 font-bold text-sm sm:text-base bg-emerald-400/10 px-5 py-3 rounded-xl border border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                Menos do que o valor que você pode perder em um único token errado
              </p>
            </div>

            <div className="w-full flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-5 py-4 rounded-xl text-sm sm:text-base text-left shadow-inner">
                <Flame className="w-6 h-6 shrink-0" />
                <span className="font-bold">Preço de fundador (válido para os primeiros usuários)</span>
              </div>
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-4 rounded-xl text-sm sm:text-base text-left shadow-inner">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <span className="font-bold">Esse valor será reajustado após o lançamento</span>
              </div>
            </div>

            {/* 3. CTA */}
            <div className="w-full relative">
              <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-40 rounded-full pointer-events-none"></div>
              <button 
                onClick={handleCheckout}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                disabled={isLoading}
                className="relative w-full py-6 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-[position:100%_0] text-white rounded-2xl font-black text-xl sm:text-2xl shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none duration-300"
              >
                {isLoading ? (
                  <Loader2 className="w-8 h-8 animate-spin" />
                ) : (
                  <>
                    Quero evitar o próximo golpe
                    <ArrowRight className={`w-7 h-7 transition-transform ${isHovering ? 'translate-x-2' : ''}`} />
                  </>
                )}
              </button>
            </div>

            {/* 7. VELOCIDADE / FACILIDADE */}
            <p className="mt-6 text-slate-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Leva menos de 1 minuto para garantir acesso
            </p>

            {/* 4. SEGURANÇA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center border-t border-white/5 pt-8 w-full">
              <div className="flex items-center gap-2 text-slate-300 justify-center bg-white/5 px-4 py-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold">Pagamento seguro via plataforma confiável</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
              <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-lg">
                <CreditCard className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold">Pix e cartão disponíveis</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold">Cancelamento simples</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 8. BENEFÍCIO DE SER EARLY USER */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-inner">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-slate-200 font-bold text-base sm:text-lg">Você será um dos primeiros usuários</p>
            </div>
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-slate-200 font-bold text-base sm:text-lg">Terá acesso antes do público geral</p>
            </div>
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-slate-200 font-bold text-base sm:text-lg">Poderá influenciar o produto</p>
            </div>
          </div>
          
          {/* 9. REFORÇO DE URGÊNCIA */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mt-4 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
            <p className="text-orange-400 font-black text-center text-sm sm:text-base">
              ⚠️ Vagas limitadas para acesso antecipado (Liberação em etapas)
            </p>
          </div>
        </section>

        {/* 10. REFORÇO FINAL DE VALOR */}
        <footer className="text-center pt-10 pb-8">
          <p className="text-xl sm:text-2xl text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
            A maioria das pessoas perde dinheiro em cripto por um motivo simples:
            <br />
            <strong className="text-white font-black mt-3 block text-2xl sm:text-3xl">não entende o que está comprando.</strong>
          </p>
          <div className="mt-10 bg-blue-500/10 border border-blue-500/20 py-5 px-8 rounded-2xl inline-block shadow-[0_0_40px_rgba(59,130,246,0.15)] transform hover:scale-[1.02] transition-transform">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black text-2xl sm:text-4xl">
              O TokenRay resolve isso em segundos.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
