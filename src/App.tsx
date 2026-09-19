import Hero from './components/HeroSection';
import Experience from './components/ExperienceSection';
import SkillsEducation from './components/SkillsSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0B101E] text-[#F3F4F6] font-sans selection:bg-[#06B6D4] selection:text-white">
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
        <Hero />
        <Experience />
        <SkillsEducation />
      </main>
    </div>
  );
}

export default App;
