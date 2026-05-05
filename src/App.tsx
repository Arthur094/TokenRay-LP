import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShieldAlert, 
  AlertTriangle, 
  Lock, 
  Ghost, 
  CheckCircle2, 
  XOctagon, 
  Zap,
  Activity,
  Code,
  ShieldCheck,
  ArrowRight,
  EyeOff,
  Flame,
  LineChart,
  Unlock
} from 'lucide-react';

const TokenRayLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center relative overflow-hidden`}>
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neonGlowLogo" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Crosshair */}
      <circle cx="50" cy="50" r="38" stroke="#FF4D00" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M 50 2 V 18 M 50 82 V 98 M 2 50 H 18 M 82 50 H 98" stroke="#FF4D00" strokeWidth="2.5" opacity="0.8"/>
      
      {/* Glitch Lines (Cyber Violet & Deep Purple) */}
      <path d="M 35 30 H 65 M 32 35 H 72 M 38 45 H 60 M 35 60 H 65 M 30 70 H 70 M 36 75 H 62" stroke="#4A00E0" strokeWidth="2" opacity="0.8" strokeDasharray="8 4 2 4 10 2"/>
      <path d="M 33 32 H 68 M 38 40 H 62 M 36 65 H 68" stroke="#2A0066" strokeWidth="1.5" opacity="0.9" strokeDasharray="5 2 8 2"/>

      {/* Aggressive R */}
      <path d="M 32 25 L 68 25 L 82 42 L 58 55 L 75 80 L 60 80 L 46 55 L 42 55 L 35 80 L 22 80 L 32 25 Z" stroke="#FF4D00" strokeWidth="3" fill="none" filter="url(#neonGlowLogo)"/>
      
      {/* Inner R cutout */}
      <path d="M 44 36 L 58 36 L 66 45 L 52 48 L 40 48 Z" stroke="#FF4D00" strokeWidth="2" fill="none" />
      
      {/* Center dot/cross */}
      <path d="M 50 47 V 53 M 47 50 H 53" stroke="#FF4D00" strokeWidth="1.5" />
      
      {/* Glitch Highlights */}
      <path d="M 32 25 L 45 25" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9"/>
      <path d="M 26 25 L 29 25" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9"/>
      <path d="M 72 80 L 75 80" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9"/>
    </svg>
  </div>
);

export default function App() {
  useEffect(() => {
    if (!document.getElementById('brand-fonts')) {
      const link = document.createElement('link');
      link.id = 'brand-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Space+Grotesk:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const [contract, setContract] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomJoined, setBottomJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contract.trim()) return;
    
    setIsAnalyzing(true);
    setAnalysisStep(0);
    setShowResult(false);

    // Realistic Fake Analysis Delay
    setTimeout(() => setAnalysisStep(1), 1000); // Verificando liquidez
    setTimeout(() => setAnalysisStep(2), 2200); // Detectando riscos
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 3500);
  };

  const handleWaitlist = async (e: React.FormEvent, isBottom = false) => {
    e.preventDefault();
    const email = isBottom ? bottomEmail : waitlistEmail;
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_URL;
    
    if (scriptURL) {
      try {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
      } catch (error) {
        console.error('Error submitting email:', error);
      }
    }

    if (isBottom) {
      setBottomJoined(true);
    } else {
      setWaitlistJoined(true);
    }
    setIsSubmitting(false);
  };


  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-200 selection:bg-[#FF4D00]/30 font-sans overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4A00E0]/10 blur-[150px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#FF4D00]/5 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TokenRayLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            <span 
              className="text-[#FF4D00] text-2xl sm:text-3xl mt-1" 
              style={{ 
                fontFamily: '"Orbitron", "Space Grotesk", sans-serif', 
                letterSpacing: '0.1em', 
                fontWeight: 800, 
                textTransform: 'uppercase',
                textShadow: '2px 0 0 rgba(74, 0, 224, 0.5), -1px 0 0 rgba(255, 77, 0, 0.5)'
              }}
            >
              TokenRay
            </span>
          </div>
          <a href="#early-access" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors">
            Acesso Antecipado
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-6 pb-20 sm:pt-10 sm:pb-28 overflow-hidden relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: CTA & Form */}
              <div className="text-center lg:text-left z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center rounded-full border border-[rgba(255,50,50,0.3)] bg-[rgba(255,50,50,0.1)] backdrop-blur-md px-3 py-1.5 text-xs font-bold text-[#ff4444] mb-6 shadow-[0_0_15px_rgba(255,50,50,0.1)] uppercase tracking-wide"
                >
                  <AlertTriangle className="mr-2 h-3.5 w-3.5 text-[#ff4444]" />
                  <span>Seu próximo investimento pode ser um scam</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl font-extrabold tracking-tight text-white mb-6 sm:text-6xl lg:text-7xl leading-[1.1]"
                >
                  Você pode estar comprando um <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">golpe agora</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg tracking-tight text-slate-400 mb-8 sm:text-xl max-w-xl mx-auto lg:mx-0"
                >
                  Descubra em segundos se um token pode ser golpe — <strong className="text-white">antes de investir.</strong> Cortamos o jargão técnico para você não perder dinheiro.
                </motion.p>

                {/* Interactive Area */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-xl mx-auto lg:mx-0 relative"
                >
                  <AnimatePresence mode="wait">
                    {!isAnalyzing && !showResult && (
                      <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}>
                        <form onSubmit={handleAnalyze} className="relative group">
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-40 blur-lg transition duration-500 group-hover:opacity-75" />
                          <div className="relative flex flex-col sm:flex-row items-center bg-[#0d0d12] border border-white/10 rounded-2xl p-2 gap-2 shadow-2xl backdrop-blur-xl">
                            <div className="relative flex-1 w-full">
                              <Code className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                              <input
                                type="text"
                                value={contract}
                                onChange={(e) => setContract(e.target.value)}
                                placeholder="Cole o contrato do token (ex: 0x...)"
                                className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-0"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-slate-200 text-black rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                              <Search className="w-4 h-4" />
                              Analisar Token
                            </button>
                          </div>
                        </form>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 mt-5 text-xs sm:text-sm font-medium text-slate-400">
                          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-green-400"/> Nenhuma conexão com carteira</span>
                          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-blue-400"/> Análise em segundos</span>
                        </div>
                      </motion.div>
                    )}

                    {isAnalyzing && (
                      <motion.div 
                        key="analyzing" 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0 }}
                        className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-blue-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)] text-center w-full"
                      >
                        <div className="mb-6 relative w-16 h-16 mx-auto">
                          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                          <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Activity className="w-6 h-6 text-blue-400 animate-pulse" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Analisando Contrato Inteligente...</h3>
                        
                        <div className="space-y-3 text-sm text-left max-w-xs mx-auto">
                          <motion.div 
                            className={`flex items-center gap-3 ${analysisStep >= 0 ? 'text-white' : 'text-slate-600 opacity-50'}`}
                            animate={{ opacity: analysisStep >= 0 ? 1 : 0.5 }}
                          >
                            {analysisStep > 0 ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Activity className="w-4 h-4 text-blue-400 animate-pulse" />}
                            <span>Lendo bytecode na blockchain...</span>
                          </motion.div>
                          <motion.div 
                            className={`flex items-center gap-3 ${analysisStep >= 1 ? 'text-white' : 'text-slate-600 opacity-50'}`}
                            animate={{ opacity: analysisStep >= 1 ? 1 : 0.5 }}
                          >
                            {analysisStep > 1 ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Lock className="w-4 h-4 text-blue-400 animate-pulse" />}
                            <span>Verificando bloqueio de liquidez...</span>
                          </motion.div>
                          <motion.div 
                            className={`flex items-center gap-3 ${analysisStep >= 2 ? 'text-white' : 'text-slate-600 opacity-50'}`}
                            animate={{ opacity: analysisStep >= 2 ? 1 : 0.5 }}
                          >
                            {analysisStep > 2 ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Ghost className="w-4 h-4 text-purple-400 animate-pulse" />}
                            <span>Detectando padrões de código malicioso...</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {showResult && (
                      <motion.div 
                        key="result" 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full text-left"
                      >
                        {/* Fake Result Alert */}
                        <div className="bg-[#110505]/90 backdrop-blur-xl border border-red-500/40 rounded-t-2xl p-6 relative overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 animate-pulse" />
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <XOctagon className="w-6 h-6 text-red-500 animate-pulse" />
                              <h3 className="text-xl font-bold text-white">Alto Risco Detectado</h3>
                            </div>
                            <div className="flex items-baseline gap-1 bg-red-500/10 px-3 py-1 rounded-lg border border-red-500/20">
                              <span className="text-2xl font-black text-red-500">2</span>
                              <span className="text-sm font-bold text-red-400/70">/10</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2 mt-4 text-sm font-medium">
                            <p className="flex items-center gap-2 text-red-200"><Unlock className="w-4 h-4 text-red-400"/> Liquidez NÃO está travada</p>
                            <p className="flex items-center gap-2 text-red-200"><ShieldAlert className="w-4 h-4 text-red-400"/> Dono pode bloquear vendas (Honeypot)</p>
                          </div>
                        </div>

                        {/* Paywall Fake Door */}
                        <div className="bg-[#0a0a0f] border border-white/10 border-t-0 p-6 sm:p-8 rounded-b-2xl relative shadow-2xl">
                          <div className="absolute inset-0 bg-gradient-to-b from-[#110505]/50 to-transparent opacity-50" />
                          <div className="relative text-center">
                            <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-xl mb-4 border border-purple-500/20">
                              <Lock className="w-5 h-5 text-purple-400" />
                            </div>
                            <h4 className="text-xl font-extrabold text-white mb-2 uppercase tracking-wide">🚧 Acesso Restrito</h4>
                            <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
                              Estamos liberando o relatório completo e o acesso à ferramenta aos poucos. Apenas alguns usuários terão acesso antecipado.
                            </p>
                            
                            {!waitlistJoined ? (
                              <form onSubmit={handleWaitlist} className="flex flex-col gap-3">
                                <input
                                  type="email"
                                  value={waitlistEmail}
                                  onChange={(e) => setWaitlistEmail(e.target.value)}
                                  placeholder="Seu melhor email"
                                  className="w-full bg-[#15151f] border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                                  required
                                />
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className={`w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                  {isSubmitting ? 'Enviando...' : 'Quero evitar o próximo golpe'}
                                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                </button>
                              </form>
                            ) : (
                              <div className="animate-in fade-in zoom-in duration-300">
                                <Link
                                  to="/checkout"
                                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                                >
                                  Garanta seu acesso antecipado aqui
                                  <ArrowRight className="w-5 h-5" />
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Right Column: Visual Simulation Card */}
              <div className="hidden lg:block relative z-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full" />
                
                <motion.div 
                  initial={{ opacity: 0, x: 20, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  className="relative bg-[#0d0d12]/80 backdrop-blur-2xl border border-red-500/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.15)] overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <h3 className="text-slate-400 text-xs font-bold tracking-wider uppercase">Simulação de Risco</h3>
                      </div>
                      <p className="text-white text-xl font-mono font-bold flex items-center gap-2">
                        PEPE2.0 <span className="bg-white/10 text-slate-300 text-xs px-2 py-0.5 rounded border border-white/5">0x7a2...9c4</span>
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end justify-center pt-2">
                      <p className="text-[#888888] text-[10px] font-bold uppercase tracking-widest mb-[-4px]">Nota Final</p>
                      <div className="flex items-baseline justify-end gap-1">
                        <span className="text-[#ff4444] text-[3.5rem] leading-none font-black drop-shadow-[0_0_15px_rgba(255,68,68,0.6)]">2</span>
                        <span className="text-lg text-[#ff4444]/40 font-bold tracking-tighter">/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="bg-[#15151f] border border-red-500/20 rounded-xl p-4 flex gap-4 items-start group hover:border-red-500/40 transition-colors">
                      <div className="bg-red-500/10 p-2 rounded-lg text-red-400 mt-0.5">
                        <Unlock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-red-200 font-bold mb-1">Liquidez não travada</h4>
                        <p className="text-slate-400 text-sm">O código permite que o criador saque todo o dinheiro dos investidores a qualquer momento (Rug Pull).</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#15151f] border border-red-500/20 rounded-xl p-4 flex gap-4 items-start group hover:border-red-500/40 transition-colors">
                      <div className="bg-red-500/10 p-2 rounded-lg text-red-400 mt-0.5">
                        <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-red-200 font-bold mb-1">Dono pode bloquear vendas</h4>
                        <p className="text-slate-400 text-sm">Contrato possui função maliciosa que impede carteiras comuns de vender o token (Honeypot).</p>
                      </div>
                    </div>

                    <div className="bg-[#15151f] border border-orange-500/20 rounded-xl p-4 flex gap-4 items-start group hover:border-orange-500/40 transition-colors">
                      <div className="bg-orange-500/10 p-2 rounded-lg text-orange-400 mt-0.5">
                        <Ghost className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-orange-200 font-bold mb-1">Concentração agressiva</h4>
                        <p className="text-slate-400 text-sm">Apenas 3 carteiras occultas controlam 85% de todo o fornecimento do token.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* PAIN POINTS SECTION (DORES) */}
        <section className="py-20 bg-[#060609] border-y border-white/5 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 tracking-tight">
                Se você não verifica isso, você está apostando no escuro
              </h2>
              <div className="mx-auto max-w-lg bg-[#0a0a0a] border-l-4 border-l-[#ff4444] text-slate-300 px-6 py-4 font-medium text-sm sm:text-base leading-relaxed text-left flex items-start gap-3 shadow-2xl">
                <span className="text-xl mt-0.5">⚠️</span>
                <p>
                  A maioria das pessoas perde dinheiro aqui — não porque o mercado caiu, mas porque comprou o token errado.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Ghost, title: "Dono oculto", desc: "Você não sabe quem realmente controla o contrato do token, e o poder é centralizado." },
                { icon: ShieldAlert, title: "Honeypots", desc: "O contrato permite compras, mas bloqueia silenciosamente a sua capacidade de venda." },
                { icon: AlertTriangle, title: "Rug Pulls", desc: "A liquidez é falsa. O criador remove tudo de uma vez e você fica com zero." },
                { icon: XOctagon, title: "Golpes diários", desc: "Milhares de tokens são criados diariamente apenas para drenar dinheiro de iniciantes." }
              ].map((item, i) => (
                <div key={i} className="bg-[#0b0b10] border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />
                  <div className="w-12 h-12 rounded-xl bg:-red-500/5 bg-[#15151f] flex items-center justify-center mb-6 border border-white/5 group-hover:border-red-500/20 transition-colors relative z-10">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (NOVA SEÇÃO) */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-16 tracking-tight">Como funciona</h2>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              
              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-[#0d0d12] border border-white/10 flex items-center justify-center z-10 mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <Code className="w-10 h-10 text-blue-400 relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-4 border-[#030305]">1</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cole o contrato</h3>
                <p className="text-slate-400 text-sm max-w-xs">Basta copiar o endereço do token que você quer investir.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-[#0d0d12] border border-white/10 flex items-center justify-center z-10 mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <Activity className="w-10 h-10 text-purple-400 relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm border-4 border-[#030305]">2</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TokenRay analisa</h3>
                <p className="text-slate-400 text-sm max-w-xs">Nossa tecnologia varre o código fonte em busca de armadilhas na blockchain.</p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl bg-[#0d0d12] border border-white/10 flex items-center justify-center z-10 mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <ShieldCheck className="w-10 h-10 text-green-400 relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm border-4 border-[#030305]">3</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Você decide seguro</h3>
                <p className="text-slate-400 text-sm max-w-xs">Receba uma nota clara e uma lista de riscos que qualquer um consegue ler.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SCENARIOS (RESULTADOS) */}
        <section className="py-20 bg-[#060609] border-y border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-16 tracking-tight">O que o TokenRay detecta em segundos</h2>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Bad Token */}
              <div className="bg-[#0b0b10] border border-red-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                {/* Radial Gradient Top Right */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,68,68,0.15),transparent_50%)] pointer-events-none" />
                
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5 relative z-10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <XOctagon className="w-5 h-5 text-red-500" />
                    Token Manipulado
                  </h3>
                  <span className="bg-[#ff4444] text-white font-bold px-3 py-1 rounded border border-[#ff4444]/50 shadow-[0_0_10px_rgba(255,68,68,0.5)]">2/10</span>
                </div>
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-start gap-3">
                    <XOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5 opacity-80" />
                    <div>
                      <strong className="text-white font-bold block mb-1">Taxa absurda escondida</strong>
                      <span className="text-slate-500 text-sm leading-relaxed">O contrato afirma 2% de taxa, mas o dono pode alterar para 99% a qualquer hora.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5 opacity-80" />
                    <div>
                      <strong className="text-white font-bold block mb-1">Fake Renounce</strong>
                      <span className="text-slate-500 text-sm leading-relaxed">Parece renunciado, mas há uma função oculta que devolve o controle ao criador.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Good Token */}
              <div className="bg-[#0b0b10] border border-green-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                {/* Radial Gradient Top Right */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)] pointer-events-none" />
                
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5 relative z-10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    Token Seguro
                  </h3>
                  <span className="bg-green-500 text-black font-bold px-3 py-1 rounded border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]">9/10</span>
                </div>
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 opacity-80" />
                    <div>
                      <strong className="text-white font-bold block mb-1">Controle Nulo (Renounced)</strong>
                      <span className="text-slate-500 text-sm leading-relaxed">Ninguém possui as chaves para modificar o contrato. Segurança máxima no código.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 opacity-80" />
                    <div>
                      <strong className="text-white font-bold block mb-1">Liquidez Protegida</strong>
                      <span className="text-slate-500 text-sm leading-relaxed">A liquidez foi queimada de forma permanente. Impossibilitado de sofrer Rug Pull.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-24 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-16 tracking-tight">Você está jogando ou investindo?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#0b0b10] border border-white/5 rounded-2xl p-8 hover:border-red-500/20 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-slate-300">Jogando (Sem TokenRay)</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Comprar projetos no escuro pela emoção",
                    "Acreditar cegamente no que influenciadores dizem",
                    "Risco altíssimo de perder todo o capital",
                    "Descobrir que era golpe depois de não conseguir vender"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <XOctagon className="w-5 h-5 text-slate-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full" />
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/20 relative z-10">
                  <LineChart className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Investindo (Com TokenRay)</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Análise preditiva concluída em 3 segundos",
                    "Linguagem simples, sem jargões complexos",
                    "Decisão racional baseada em código e dados",
                    "Exposição clara de riscos antes de clicar em \"Comprar\""
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="early-access" className="py-24 sm:py-32 relative overflow-hidden bg-[#0a0a0f] border-t border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-purple-900/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
              Não invista no <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">próximo golpe</span>
            </h2>
            
            <div className="max-w-md mx-auto backdrop-blur-xl bg-black/40 p-2 rounded-2xl border border-white/10 shadow-2xl mt-10">
              {!bottomJoined ? (
                <form onSubmit={(e) => handleWaitlist(e, true)} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={bottomEmail}
                    onChange={(e) => setBottomEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    className="flex-1 bg-transparent border-none py-4 px-5 text-white placeholder-slate-500 focus:outline-none focus:ring-0 font-medium"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all whitespace-nowrap hover:scale-[1.02] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Quero analisar antes de investir'}
                  </button>
                </form>
              ) : (
                <div className="animate-in fade-in zoom-in duration-300">
                  <Link
                    to="/checkout"
                    className="w-full block py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] text-center"
                  >
                    Garanta seu acesso antecipado aqui
                  </Link>
                </div>
              )}
            </div>
            <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Seus dados estão seguros. Zero spam.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0B0B0B] py-12 text-center relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <TokenRayLogo className="w-12 h-12 sm:w-16 sm:h-16" />
            <span 
              className="text-[#FF4D00] text-3xl sm:text-4xl mt-1" 
              style={{ 
                fontFamily: '"Orbitron", "Space Grotesk", sans-serif', 
                letterSpacing: '0.1em', 
                fontWeight: 800, 
                textTransform: 'uppercase',
                textShadow: '2px 0 0 rgba(74, 0, 224, 0.5), -1px 0 0 rgba(255, 77, 0, 0.5)'
              }}
            >
              TokenRay
            </span>
          </div>
          <p className="text-slate-600 text-sm mb-4">© {new Date().getFullYear()} TokenRay. Todos os direitos reservados.</p>
          <p className="text-slate-700 text-xs max-w-xl mx-auto leading-relaxed">
            Aviso legal: O TokenRay é uma ferramenta de análise técnica de contratos inteligentes na blockchain. 
            A nota de segurança não deve ser interpretada como conselho financeiro. Nós não fazemos recomendações de compra ou venda. Todo investimento em criptomoedas envolve altíssimo risco. DYOR.
          </p>
        </div>
      </footer>
    </div>
  );
}
