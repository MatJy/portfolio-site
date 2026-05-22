type ProjectStateNoticeProps = {
    title: string;
    message: string;
    tone?: 'loading' | 'error' | 'empty';
};

const toneClasses = {
    loading: 'border-[#5DAEDE]/40 bg-[#101318] text-white/90',
    error: 'border-red-400/50 bg-[#241417] text-red-100',
    empty: 'border-white/10 bg-[#101318] text-white/80',
};

const ProjectStateNotice = ({
    title,
    message,
    tone = 'loading',
}: ProjectStateNoticeProps) => {
    return (
        <div
            className={`mx-3 md:mx-4 my-4 rounded-sm border p-4 ${toneClasses[tone]}`}
        >
            <p className="text-base md:text-lg font-semibold">{title}</p>
            <p className="mt-1 text-sm md:text-base opacity-90">{message}</p>
        </div>
    );
};

export default ProjectStateNotice;
