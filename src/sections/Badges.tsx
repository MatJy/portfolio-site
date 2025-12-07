import { useState } from 'react';
import '../index.css';

const logos = import.meta.glob('../assets/logos/*.png', {
    eager: true,
}) as Record<string, { default: string }>;

const images = Object.entries(logos).map(([path, module]) => {
    const filename = path.split('/').pop()?.toLowerCase() || '';
    return { src: module.default, filename };
});

const favorites: string[] = [
    'nodejs',
    'tailwindcss',
    'angular',
    'css',
    'docker',
    'github',
    'html',
    'javascript',
    'mysql',
    'python',
    'react',
    'typescript',
    'supabase',
    'nextjs',
    'express',
    'aws',
];

const formatTechName = (filename: string) => {
    return filename
        .replace('.png', '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Badges = () => {
    const [showNames, setShowNames] = useState(false);

    return (
        <section className="p-0 text-center">
            <div className="text-2xl text-white text-left bg-[#1B1820] rounded-sm xxl:w-197 pb-1">
                <div className="md:flex items-center justify-between bg-[#2B3244] p-2 rounded-t-sm">
                    <div>
                        <p>Badge Collector</p>
                        <p className="text-xs text-[#5DAEDE] italic">
                            Favorites and/or most used are highlighted with a
                            blue border
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white">
                        <span>Show names</span>

                        <button
                            onClick={() => setShowNames((prev) => !prev)}
                            className={`w-12 h-6 rounded-full relative transition ${
                                showNames ? 'bg-[#5DAEDE]' : 'bg-gray-500'
                            }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition transform ${
                                    showNames ? 'translate-x-6' : ''
                                }`}
                            />
                        </button>
                    </div>
                </div>

                <div className="p-3 flex flex-wrap gap-4">
                    {images.map(({ src, filename }, index) => {
                        const isFavorite = favorites.some((fav) =>
                            filename.includes(fav)
                        );

                        const techName = formatTechName(filename);

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-1"
                            >
                                <img
                                    src={src}
                                    alt={techName}
                                    title={techName}
                                    className={
                                        isFavorite
                                            ? 'w-12 xxl:w-19 h-12 xxl:h-19 border-2 border-[#5DAEDE] p-1'
                                            : 'w-12 xxl:w-19 h-12 xxl:h-19'
                                    }
                                />

                                {showNames && (
                                    <span className="text-xs text-white opacity-80">
                                        {techName}
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="bg-[#101318] p-3 rounded-sm mt-2 mx-4 mb-3">
                    <p className="text-3xl xxl:text-5xl">{images.length}</p>
                    <p className="text-xl xxl:text-2xl">Total Badges Earned</p>
                </div>
            </div>
        </section>
    );
};

export default Badges;
