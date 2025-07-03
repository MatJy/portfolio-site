import '../index.css';

const logos: Record<string, { default: string }> = import.meta.glob(
    '../assets/logos/*.png',
    { eager: true }
);

const images = Object.values(logos).map((module) => module.default);

const favorites: string[] = [
    'angular',
    'css',
    'docker',
    'github',
    'html',
    'javascript',
    'mysql',
    'nodejs',
    'python',
    'react',
    'svelte',
    'tailwindcss',
    'typescript',
];

const Badges = () => {
    return (
        <section className="p-0 text-center ">
            <div className="text-2xl text-white text-left bg-[#1B1820] rounded-sm xxl:w-197 pb-1">
                <div className="md:flex items-center justify-between bg-[#2B3244] p-2 rounded-t-sm">
                    <p>Badge Collector</p>
                    <p className="text-xs text-[#5DAEDE] italic">
                        Favorites and/or most used are highlighted with a blue
                        border
                    </p>
                </div>
                <div className="p-3 flex flex-wrap gap-4 ">
                    {images.map((src: string, index: number) => {
                        const isFavorite = favorites.some((fav) =>
                            src.toLowerCase().includes(fav.toLowerCase())
                        );
                        return (
                            <img
                                key={index}
                                src={src}
                                alt={`Logo ${index + 1}`}
                                className={
                                    isFavorite
                                        ? 'w-12 xxl:w-19 h-12 xxl:h-19 border-2 border-[#5DAEDE] p-1'
                                        : 'w-12 xxl:w-19 h-12 xxl:h-19'
                                }
                            />
                        );
                    })}
                </div>
                <div className="bg-[#101318] p-3 rounded-sm mt-2 mx-4 mb-3 ">
                    <p className="text-3xl xxl:text-5xl">{images.length}</p>
                    <p className="text-xl xxl:text-2xl">Total Badges Earned</p>
                </div>
            </div>
        </section>
    );
};

export default Badges;
