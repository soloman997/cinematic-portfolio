export default function Experience() {
  const jobs = [
    {
      role: "AI Product Manager",
      company: "Connectivity Solutions",
      date: "Sept 2026 - Present",
      points: [
        "Spearheading the integration of Gen-AI capabilities into core connectivity products to enhance operational workflows and user engagement.",
        "Defining product strategy, building roadmaps, and establishing KPIs to measure AI model performance and user adoption."
      ]
    },
    {
      role: "Senior Representative, Customer Care",
      company: "Paypal",
      date: "2024 - 2026",
      points: [
        "Analyzed 500+ weekly cases using advanced Excel metrics to optimize accuracy and identify core transaction trends.",
        "Automated ticket workflows, reducing manual effort by up to 30% and accelerating turnaround times."
      ]
    },
    {
      role: "Catalog Lead",
      company: "Amazon",
      date: "2021 - 2023",
      points: [
        "Constructed real-time KPI dashboards and automated reports, driving a 15% increase in operational efficiency.",
        "Directed a team of associates to consistently achieve 98%+ quality metrics through strategic workflow adjustments."
      ]
    },
    {
      role: "Resolution Specialist & CSA",
      company: "Amazon",
      date: "2019 - 2021",
      points: [
        "Tracked case trajectories and performed Root Cause Analysis (RCA) to surface systemic issues for continuous improvement.",
        "Managed complex account escalations while adhering strictly to high-bar SLAs."
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <h3 className="text-3xl font-bold text-[#F3F4F6] border-b border-[#161D2F] pb-4">
        Professional <span className="text-[#06B6D4]">Experience</span>
      </h3>
      <div className="space-y-12 ml-2">
        {jobs.map((job, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-[#161D2F] hover:border-[#06B6D4] transition-colors duration-300">
            <div className="absolute w-4 h-4 bg-[#0B101E] border-2 border-[#06B6D4] rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_#06B6D4]"></div>
            <h4 className="text-xl font-semibold">{job.role} <span className="text-[#3B82F6]">@ {job.company}</span></h4>
            <span className="text-sm text-[#9CA3AF] mb-4 block font-medium mt-1">{job.date}</span>
            <ul className="space-y-2 text-[#9CA3AF] list-disc list-outside ml-4">
              {job.points.map((point, i) => (
                <li key={i} className="pl-2">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
