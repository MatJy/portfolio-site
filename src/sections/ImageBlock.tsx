import { useState } from 'react';

type Props = {
    src: string;
    alt?: string;
    title?: string;
    collapsible?: boolean;
};

const ImageBlock = ({
    src,
    alt = '',
    title = 'Image example',
    collapsible = false,
}: Props) => {
    const [open, setOpen] = useState(!collapsible);

    return (
        <div className="my-2 border border-[#2A3A4A] rounded-lg overflow-hidden">
            {collapsible && (
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        w-full
                        flex items-center justify-between
                        px-4 py-3
                        bg-[#16202D]
                        text-white
                        hover:bg-[#1E2A3A]
                        transition
                    "
                >
                    <div className="flex items-center gap-2">
                        <span className="text-[#5DAEDE] font-mono text-sm">
                            ⧉
                        </span>
                        <span className="font-semibold text-sm">{title}</span>
                    </div>

                    <span
                        className={`text-[#5DAEDE] transition-transform ${
                            open ? 'rotate-90' : ''
                        }`}
                    >
                        ▶
                    </span>
                </button>
            )}

            {open && (
                <div className="bg-[#0f172a] p-4">
                    <img
                        src={src}
                        alt={alt}
                        className="
                            w-full
                            h-auto
                            object-contain
                            rounded-md
                            border border-[#2A3A4A]
                        "
                    />
                </div>
            )}
        </div>
    );
};

export default ImageBlock;
