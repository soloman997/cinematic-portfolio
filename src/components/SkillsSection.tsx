export default function SkillsEducation() {
  const skills = [
    "AI Product Strategy", "Gen-AI & Data Analytics", "Workflow Optimization", 
    "Process Automation", "Advanced Excel & SQL", "Root Cause Analysis (RCA)", 
    "Cross-functional Leadership", "KPI Reporting & Dashboards"
  ];

  return (
    <section className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#F3F4F6] border-b border-[#161D2F] pb-4">
          Core <span className="text-[#06B6D4]">Competencies</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-[#161D2F] text-[#3B82F6] rounded-md text-sm font-medium border border-[#3B82F6]/20">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#F3F4F6] border-b border-[#161D2F] pb-4">
          Education & <span className="text-[#06B6D4]">Certifications</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-[#161D2F] p-4 rounded-lg border border-slate-800 border-l-4 border-l-[#06B6D4]">
            <h4 className="font-semibold text-lg">B.E. Computer Science and Engineering</h4>
            <p className="text-[#9CA3AF] text-sm">Karpagam Institute of Technology | 2014 - 2018</p>
          </div>
          <ul className="space-y-3 text-[#9CA3AF]">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
              <strong>Pursuing:</strong> Certification in Data Analytics with Gen AI
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
              <strong>Certified:</strong> AWS Cloud Practitioner Essentials
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
              <strong>Certified:</strong> ChatGPT (Guvi)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
