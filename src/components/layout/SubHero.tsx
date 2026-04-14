import { SectionLabel, Section } from "./LandingLayout";

interface SubHeroProps {
  label: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export function SubHero({ label, title, subtitle, breadcrumb }: SubHeroProps) {
  return (
    <section className="bg-white dark:bg-[#040D0B] pt-32 pb-16 sm:pb-24 text-center transition-colors duration-300">
      <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="font-syne mb-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {subtitle}
          </p>
          {breadcrumb && (
            <p className="mt-8 text-sm font-medium text-gray-500 dark:text-gray-600 tracking-wide">
              {breadcrumb}
            </p>
          )}
        </div>
      </Section>
    </section>
  );
}
