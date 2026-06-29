  type SectionHeaderProps = {
    label: string;
    title: string;
    description?: string;
  };

  export default function SectionHeader({
    label,
    title,
    description,
  }: SectionHeaderProps) {
    return (
      <div className="max-w-2xl mb-14">

        <p className="uppercase tracking-[0.35em] text-sm text-blue-400 font-medium">
          {label}
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
          {title}
        </h2>

        {description && (
          <p className="text-gray-400 mt-5 text-lg leading-8">
            {description}
          </p>
        )}

      </div>
    );
  }