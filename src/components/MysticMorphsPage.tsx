import { Button } from '@/components/ui/button';
import SpellCard from '@/components/SpellCard';
import spellWheel from '@/assets/spell-wheel.png';
import qrScannerImg from '../../assets/qr scanner.png';

const MysticMorphsPage = () => {
  const rules = [
    "Each team must consist of 2 members only – no solo entries allowed.",
    "Laptop is mandatory for participation; ensure it's fully charged.",
    "Participants must report by 8:45 A.M sharp for briefing.",
    "Time constraints must be strictly followed – as they are used for evaluating th results.",
    "All rounds will be conducted exclusively on the provided event website.",
    "No use of mobile phones or external assistance during the event.",
    "Internet access should only be through the provided tools – no external browsing.",
    "Participants must not switch tabs or use unauthorized applications during the event.",
    "The decision of the coordinators/judges is final and binding in all matters."
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-radial from-magical-purple/20 via-transparent to-magical-deep/40"></div>
        
        {/* Floating magical elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-magical-glow/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-magical-light/15 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="text-center z-10 max-w-6xl">
          {/* Magical runes circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-magical-glow rounded-full animate-magical-pulse"></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-magical-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-magical-light rounded-full animate-magical-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-magical-glow rounded-full animate-magical-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center relative z-20 gap-4 md:gap-8">
            <img src="/logo.png" alt="Mystic Morphs Logo"
              className="h-20 md:h-28 mb-4 md:mb-0" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-magical text-primary mb-4 md:mb-6 magical-glow animate-fade-in-up tracking-wider text-center md:text-left">
              Mystic Morphs
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-3xl text-foreground/90 mb-6 md:mb-8 animate-fade-in-up leading-relaxed max-w-xl md:max-w-4xl mx-auto text-center">
            Unravel the Mystery. Decode the Glitch. <br />
            <span className="text-primary font-magical">Morph into the Ultimate Tech Wizards.</span>
          </p>
          <Button
            variant="hero"
            size="hero"
            className="group w-full max-w-xs mx-auto"
            onClick={() => {
              const audio = new Audio('/mixkit-sci-fi-futuristic-door-open-2527.wav');
              audio.volume = 0.7;
              audio.play();
              const el = document.getElementById('quest-begin-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="relative z-10">Begin Your Quest</span>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Description Section */}
      <section id="quest-begin-section" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SpellCard variant="parchment" delay={200}>
            <h2 className="text-4xl font-magical text-primary mb-8 text-center magical-glow">
              The Quest Begins
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
              <p className="text-xl mb-6">
                Mystic Morphs is a thrilling tech event where logic meets language and code meets chaos. 
                Teams tackle domain-based puzzles and debug algorithms under pressure. It's a fusion of 
                technical knowledge, quick thinking, and team synergy.
              </p>
              <p className="text-xl text-primary font-semibold text-center">
                Only the sharpest minds will emerge as true tech morphers!
              </p>
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magical-purple/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <SpellCard variant="scroll" delay={400}>
            <h2 className="text-4xl font-magical text-primary mb-12 text-center magical-glow">
              Rules of the Realm
            </h2>
            <div className="grid gap-4">
              {rules.map((rule, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-magical flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Registration Button */}
      <section id="registration-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <SpellCard variant="floating" delay={600}>
            <div className="flex flex-col items-center justify-center mt-8 gap-4">
              <a href="https://forms.gle/W15XosJ5qzrWvwKG8" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                <Button variant="magical" size="hero" className="text-lg sm:text-xl w-full">
                  🎭 Register Now for Glory
                </Button>
              </a>
              <img
                src={qrScannerImg}
                alt="QR Scanner for Registration"
                className="max-w-xs w-full h-auto rounded-xl shadow-lg"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
              />
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Round 1 Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <SpellCard variant="floating" delay={800}>
            <div className="relative">
              {/* Animated spell wheel */}
              <div className="absolute -top-16 -right-16 w-32 h-32 opacity-30 animate-spin" style={{ animationDuration: '15s' }}>
                <img src={spellWheel} alt="Spell Wheel" className="w-full h-full object-contain" />
              </div>
              
              <h2 className="text-4xl font-magical text-primary mb-8 magical-glow">
                Round 1: Spin & Solve
              </h2>
              <div className="space-y-6">
                <p className="text-2xl text-magical-glow font-semibold">💡 Step into the Circle of Logic!</p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Each team spins the Wheel of Domains
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <h4 className="text-primary font-semibold text-lg mb-2">Objective</h4>
                    <p className="text-foreground/80">Solve as many correctly within the countdown</p>
                  </div>
                  <div className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <h4 className="text-primary font-semibold text-lg mb-2">Scoring</h4>
                    <p className="text-foreground/80">+1 per correct answer</p>
                  </div>
                  <div className="p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <h4 className="text-primary font-semibold text-lg mb-2">Advancement</h4>
                    <p className="text-foreground/80">Accuracy & speed decide your fate</p>
                  </div>
                </div>
              </div>
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Round 2 Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magical-deep/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <SpellCard variant="glitch" delay={1000}>
            <div className="relative">
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magical-glow/10 to-transparent animate-shimmer"></div>
              
              <h2 className="text-4xl font-magical text-primary mb-8 magical-glow">
                Round 2: Debug the Glitch
              </h2>
              <div className="space-y-6">
                <p className="text-2xl text-magical-glow font-semibold">🧠 Prove your wizardry in the chamber of code.</p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Face 2 cursed Python algorithms packed with hidden logic traps. Analyze and purify them with your debugging spells.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                   
                  </div>
                  <div className="p-6 bg-gradient-to-br from-magical-purple/20 to-magical-deep/20 rounded-lg border border-magical-glow/30">
                    <h4 className="text-magical-glow font-semibold text-xl mb-4">Victory Path</h4>
                    <p className="text-foreground/90 leading-relaxed">
                      Accuracy, correction count, and time taken determine the ultimate champion.
                    </p>
                    <p className="text-primary font-magical text-lg mt-4">
                      Only the most precise team claims the Mystic Morphs crown!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SpellCard variant="parchment" delay={1200}>
            <h2 className="text-4xl font-magical text-primary mb-12 text-center magical-glow">
              Summon the Scribes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Faculty Coordinators (left) */}
              <div className="space-y-6">
                <h4 className="text-primary font-semibold text-xl mb-4">🧑‍🏫 Faculty Coordinators</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Dr. G. Manikandan</p>
                    <p className="text-foreground/80">[manikandang@stjosephs.ac.in]</p>
                  </div>
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Ms. Thiraviaselvi</p>
                    <p className="text-foreground/80">[thiraviyaselvig@stjosephs.ac.in]</p>
                  </div>
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Ms. Shaafia Tasneem</p>
                    <p className="text-foreground/80">[shaafia28@stjosephs.ac.in]</p>
                  </div>
                </div>
              </div>
              {/* When/Where (center) */}
              <div className="space-y-6">
                <div className="p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-primary/30">
                  <h4 className="text-primary font-semibold text-xl mb-2">⏰ When</h4>
                  <p className="text-foreground/90">Date: [30.08.2025]</p>
                  <p className="text-foreground/90">Time: Reporting by 8:00 A.M</p>
                </div>
                <div className="p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-primary/30">
                  <h4 className="text-primary font-semibold text-xl mb-2">📍 Where</h4>
                  <p className="text-foreground/90">Venue: [St. Josephs's Collge of Engineering]</p>
                </div>
              </div>
              {/* Event Coordinators (right) */}
              <div className="space-y-6">
                <h4 className="text-primary font-semibold text-xl mb-4">🧙‍♂️ Event Coordinators</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Manoj D</p>
                    <p className="text-foreground/80">[22am231@stjosephs.ac.in]</p>
                  </div>
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Maha Sri S</p>
                    <p className="text-foreground/80">[22am222@stjosephs.ac.in]</p>
                  </div>
                  <div className="p-4 bg-gradient-magical/20 rounded-lg border border-primary/30">
                    <p className="font-semibold text-foreground">Lithika shri A</p>
                    <p className="text-foreground/80">[22am151@stjosephs.ac.in]</p>
                  </div>
                </div>
              </div>
            </div>
          </SpellCard>
        </div>
      </section>

      {/* Footer magical divider */}
      <div className="h-32 bg-gradient-to-t from-magical-deep to-transparent"></div>
    </div>
  );
};

export default MysticMorphsPage;