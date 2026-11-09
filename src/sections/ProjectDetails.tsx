import { useId, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type Props = {
    projectName: string;
    sections: { id: string; title: string; paragraphs: ReactNode[] }[];
    reflection?: Partial<Record<'fi' | 'en', JSX.Element>>;
};

export default function ProjectDetails({ projectName, sections, reflection }: Props) {
    const tabs = reflection
        ? [...sections, { id: 'ticorporate', title: 'Ticorporate portfolio', paragraphs: [] }]
        : sections;
    const [activeIndex, setActiveIndex] = useState(0);
    const [language, setLanguage] = useState<'fi' | 'en'>('fi');
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const id = useId();

    return (
        <div className="mt-5">
            <div
                role="tablist"
                aria-label={`${projectName} project details`}
                className="flex flex-wrap gap-2 border-b border-[#2D81B2]/50 pb-3"
            >
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={(element) => { tabRefs.current[index] = element; }}
                        type="button"
                        role="tab"
                        id={`${id}-tab-${tab.id}`}
                        aria-controls={`${id}-panel-${tab.id}`}
                        aria-selected={activeIndex === index}
                        tabIndex={activeIndex === index ? 0 : -1}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(event) => {
                            let nextIndex: number;
                            switch (event.key) {
                                case 'ArrowRight': nextIndex = (index + 1) % tabs.length; break;
                                case 'ArrowLeft': nextIndex = (index - 1 + tabs.length) % tabs.length; break;
                                case 'Home': nextIndex = 0; break;
                                case 'End': nextIndex = tabs.length - 1; break;
                                default: return;
                            }
                            event.preventDefault();
                            setActiveIndex(nextIndex);
                            tabRefs.current[nextIndex]?.focus();
                        }}
                        className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DAEDE] ${activeIndex === index ? 'bg-[#2D81B2] text-white' : 'bg-[#141B23] text-gray-300 hover:bg-[#24374a] hover:text-white'}`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {tabs.map((tab, index) => (
                <div
                    key={tab.id}
                    role="tabpanel"
                    id={`${id}-panel-${tab.id}`}
                    aria-labelledby={`${id}-tab-${tab.id}`}
                    hidden={activeIndex !== index}
                    tabIndex={0}
                    className="pt-5 pb-3 leading-relaxed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5DAEDE]"
                >
                    {tab.id === 'ticorporate' && reflection ? (
                        <>
                            <div className="flex gap-2 mb-4" role="group" aria-label="Ticorporate portfolio language">
                                {(['fi', 'en'] as const).map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        aria-pressed={language === option}
                                        onClick={() => setLanguage(option)}
                                        className={`rounded px-3 py-1 text-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5DAEDE] ${language === option ? 'bg-[#2D81B2] text-white' : 'bg-[#141B23] text-gray-300 hover:text-white'}`}
                                    >
                                        {option === 'fi' ? 'Suomi' : 'English'}
                                    </button>
                                ))}
                            </div>
                            <div lang={language}>{reflection[language]}</div>
                        </>
                    ) : (
                        <section lang="en">
                            <h2 className="text-lg font-semibold text-[#5DAEDE] mb-4">{tab.title}</h2>
                            <div className="space-y-4">
                                {tab.paragraphs.map((paragraph, paragraphIndex) => (
                                    <div key={paragraphIndex}>
                                        {typeof paragraph === 'string' ? <p>{paragraph}</p> : paragraph}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            ))}
        </div>
    );
}
