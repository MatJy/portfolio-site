import '../index.css';

const images: Array<string> = [
    '/angular.png',
    '/css3.png',
    '/django.png',
    '/docker.png',
    '/html5.png',
    '/javascript.png',
    '/mongodb.png',
    '/mysql.png',
    '/php.png',
    '/python.png',
    '/svelte.png',
    '/typescript.png',
];

const Badges = () => {
    return (
        <section className="p-0 text-center ">
            <div className="text-2xl text-white text-left bg-[#1B1820] rounded-sm xxl:w-197 pb-1">
                <p className="bg-[#2B3244] p-2 rounded-t-sm">Badge Collector</p>
                <div className="p-3 flex flex-wrap gap-4 ">
                    {images.map((src: string, index: number) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Logo ${index + 1}`}
                            className="w-11 xxl:w-19"
                        />
                    ))}
                </div>
                <div className="bg-[#101318] p-3 rounded-sm mt-4 mx-4 mb-3 ">
                    <p className="text-3xl xxl:text-5xl">{images.length}</p>
                    <p className="text-xl xxl:text-2xl">Total Badges Earned</p>
                </div>
            </div>
        </section>
    );
};

export default Badges;
