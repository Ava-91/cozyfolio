import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    label: "Specific problems",
    text: "I like problems that are small enough to explain in one sentence but annoying enough that a real tool should exist.",
  },
  {
    label: "Useful details",
    text: "I care about the boring parts too: safe file operations, sensible defaults, clear feedback, and software that does not surprise its users.",
  },
  {
    label: "Good interfaces",
    text: "Even a technical utility deserves a calm interface, readable output, and a little personality when it helps.",
  },
];

export default function WhyIBuild() {
  return (
    <section className="px-4 py-20" aria-labelledby="why-i-build-title">
      <div className="container max-w-5xl">
        <SectionTitle align="center" subtitle="The common thread behind the projects.">
          Why I <span className="text-primary">Build</span>
        </SectionTitle>

        <Card>
          <div className="grid gap-8 md:grid-cols-[1.1fr_2fr] md:items-center">
            <div>
              <p className="text-2xl font-semibold leading-tight text-text md:text-3xl">
                I like solving problems that are just annoying enough to deserve software.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.label}>
                  <h3 className="mb-2 text-sm font-semibold text-primary">{reason.label}</h3>
                  <p className="text-sm leading-6 text-muted">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
