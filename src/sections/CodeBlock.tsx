import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

type Props = {
    code: string;
    language?: string;
    title?: string;
    collapsible?: boolean;
};

const CodeBlock = ({
    code,
    language = 'javascript',
    title = 'Code example',
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
                            {'</>'}
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
                <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        fontSize: '0.8rem',
                        padding: '1rem',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            )}
        </div>
    );
};

export default CodeBlock;
