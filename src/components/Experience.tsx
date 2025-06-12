export default function Experience() {
  const experience = [
    {
      id: 1,
      position: "Full Stack Developer Intern",
      company: "hjkl Corporation",
      from: "June 2025",
      to: "Present",
    },
    {
      id: 2,
      position: "Backend Developer Intern",
      company: "ABC Technologies",
      from: "May 2025",
      to: "May 2025",
    },
    {
      id: 3,
      position: "Full Stack Developer (Contract)",
      company: "Professional Vimmer",
      from: "March 2024",
      to: "Sept 2024",
    },
  ];

  return (
    <section className="relative">
      <h2 className="text-xl font-bold my-2">Experience</h2>

      <div className="ml-10">
        {experience.map(({ id, position, company, from, to }, index) => (
          <div
            key={id}
            className="relative rounded-md border-mainWhite border-2 p-2 my-4 mr-2"
          >
            {/* dot */}
            <div className="absolute -left-[38px] top-1/2 transform -translate-y-1/2 h-4 w-4 rounded-full bg-mainWhite"></div>

            <div className="text-lg font-bold">{position}</div>
            <div className="font-bold">{company}</div>
            <div>
              {from} - {to}
            </div>

            {/* line */}
            {index !== experience.length - 1 && (
              <div className="absolute -left-[30px] h-full top-1/2 w-0.5 bg-mainWhite"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
