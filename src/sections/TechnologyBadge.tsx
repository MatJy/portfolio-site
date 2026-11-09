const logos = import.meta.glob<{ default: string }>(
    '../assets/logos/*.png',
    { eager: true },
);

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

export default function TechnologyBadge({ technology }: { technology: string }) {
    const logo = Object.entries(logos).find(([path]) => {
        const filename = path.split('/').pop()?.replace(/\.png$/, '') ?? '';
        return normalize(filename) === normalize(technology);
    })?.[1].default;

    return logo ? (
        <img
            src={logo}
            alt={`${technology} logo`}
            title={technology}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
    ) : (
        <span className="rounded bg-[#24374a] px-2 py-1 text-xs">{technology}</span>
    );
}
