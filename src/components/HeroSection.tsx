export default function Hero() {
  return (
    <section className="space-y-6">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Solomon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">Joseph</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-[#9CA3AF]">
        AI Product Manager <span className="text-[#3B82F6]">|</span> Connectivity Solutions
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-[#9CA3AF] max-w-3xl mt-6">
        I build intelligent, scalable solutions at the intersection of business operations and AI. Leveraging over six years of data analytics and process optimization experience in fintech and e-commerce, I lead product strategy to transform complex data into actionable, automated product features.
      </p>
      <div className="flex flex-wrap gap-4 pt-6 text-[#9CA3AF] text-sm md:text-base">
        <a href="mailto:solomanj7@hotmail.com" className="px-6 py-3 bg-[#161D2F] hover:bg-[#3B82F6] hover:text-white transition-all duration-300 rounded-lg border border-[#3B82F6]/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          solomanj7@hotmail.com
        </a>
        <span className="px-6 py-3 bg-[#161D2F] rounded-lg border border-slate-800 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
          Bangalore & Coimbatore
        </span>
        <span className="px-6 py-3 bg-[#161D2F] rounded-lg border border-slate-800 flex items-center gap-2">
          <svg className="w-4 h-4 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          +91-96004-04327
        </span>
      </div>
    </section>
  );
}
