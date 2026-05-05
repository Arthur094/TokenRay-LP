import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, Lock, EyeOff, CheckCircle2, ArrowRight, Zap, XOctagon, Loader2 } from 'lucide-react';

export default function Checkout() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    // Simula loading antes do checkout
    setTimeout(() => {
      setIsLoading(false);
      // Aqui entraria o redirecionamento para Stripe/Pagar.me
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-200 selection:bg-purple-500/30 font-sans overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-10">
        
        {/* 1. TOPO (REATIVAR EMOÇÃO) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <p className="text-slate-400 font-medium mb-4 text-sm sm:text-base uppercase tracking-wider">Você quase entrou em um token assim 👇</p>
          <div className="bg-[#0d0d12]/80 backdrop-blur-md border border-red-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)] text-left max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-red-500/20">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-500" />
                <span className="text-white font-bold">Resultado recente</span>
              </div>
              <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-lg text-sm font-bold border border-red-500/20">
                Nota: 3/10 — Alto risco
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-red-200/80 text-sm">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Liquidez <strong>não travada</strong></span>
              </li>
              <li className="flex gap-3 text-red-200/80 text-sm">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Dono ainda controla o contrato</span>
              </li>
              <li className="flex gap-3 text-red-200/80 text-sm">
                <XOctagon className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Alto risco de não conseguir vender</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 2. HEADLINE (FORTE) */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
            Você pode estar comprando um <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">golpe agora</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Evite perder dinheiro antes mesmo de investir.
          </p>
        </header>

        {/* 3. BLOCO PRINCIPAL (OFERTA) & 5. CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-[#0d0d12]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center text-center">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6 uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Acesso Antecipado</span>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">R$ 19,90</span>
                <span className="text-xl text-slate-400 font-medium mt-1">/ mês</span>
              </div>
              <div className="mt-4 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-2 rounded-lg inline-block font-semibold">
                Preço de fundador (vai aumentar após lançamento)
              </div>
            </div>

            <div className="w-full mt-4">
              <button 
                onClick={handleCheckout}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                disabled={isLoading}
                className="w-full py-5 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-2xl font-black text-xl sm:text-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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

            {/* 6. SEGURANÇA PSICOLÓGICA */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8 border-t border-white/5 pt-8 w-full">
              <div className="flex items-center gap-2 text-slate-400">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Pix ou Cartão</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">Sem compromisso longo</span>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 4. URGÊNCIA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-orange-400 bg-orange-400/10 border border-orange-400/20 py-4 px-6 rounded-2xl"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="font-bold text-center sm:text-left">Apenas alguns usuários terão acesso</p>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 bg-orange-400 rounded-full" />
          <p className="font-medium text-orange-400/80 text-center sm:text-left">Liberação em etapas • Vagas limitadas</p>
        </motion.div>

        {/* 8. COMPARAÇÃO */}
        <section className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-red-500/10 transition-colors">
            <div className="bg-red-500/10 p-3 rounded-full shrink-0">
              <EyeOff className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">Sem TokenRay:</p>
              <p className="text-white font-bold text-lg leading-tight mt-0.5">Você compra no escuro</p>
            </div>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-emerald-500/10 transition-colors">
            <div className="bg-emerald-500/10 p-3 rounded-full shrink-0">
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">Com TokenRay:</p>
              <p className="text-white font-bold text-lg leading-tight mt-0.5">Você entende o risco antes</p>
            </div>
          </div>
        </section>

        {/* 9. BLOCO DE DOR (REFORÇADO) */}
        <section className="bg-[#0d0d12]/60 border border-white/5 rounded-2xl p-8 sm:p-10 text-center mt-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 relative z-10">
            Se você não verifica isso, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">você está apostando</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-left relative z-10">
            <div className="flex-1 bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-5 border border-white/5">
              <XOctagon className="w-6 h-6 text-red-500 mb-3" />
              <p className="text-slate-300 font-medium leading-snug">Você pode não conseguir vender depois</p>
            </div>
            <div className="flex-1 bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-5 border border-white/5">
              <XOctagon className="w-6 h-6 text-red-500 mb-3" />
              <p className="text-slate-300 font-medium leading-snug">O criador pode retirar a liquidez e sumir</p>
            </div>
            <div className="flex-1 bg-black/40 hover:bg-black/60 transition-colors rounded-xl p-5 border border-white/5">
              <XOctagon className="w-6 h-6 text-red-500 mb-3" />
              <p className="text-slate-300 font-medium leading-snug">Você pode perder dinheiro sem entender por quê</p>
            </div>
          </div>
        </section>

        {/* 7. TRANSPARÊNCIA */}
        <section className="text-center bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6">
          <p className="text-lg text-white font-medium">
            Você está garantindo acesso antecipado ao TokenRay
          </p>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            O acesso será liberado nas próximas etapas de lançamento.
          </p>
        </section>

        {/* 10. POSICIONAMENTO FINAL */}
        <footer className="text-center pb-12 pt-8">
          <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            A maioria das pessoas perde dinheiro em cripto por um motivo simples:
            <br />
            <strong className="text-white font-bold text-2xl mt-2 block">não entende o que está comprando.</strong>
          </p>
          <div className="inline-block mt-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black text-3xl">
              O TokenRay resolve isso em segundos.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
