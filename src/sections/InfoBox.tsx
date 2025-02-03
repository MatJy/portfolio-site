import '../index.css';

const InfoBox = () => {
    return (
        <section className="bg-[#1B1820] xxl:w-190 pb-1 rounded-sm text-white w-full">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-2xl">About</p>

            <div className="bg-[#101318] mt-6 mx-4 mb-3 rounded-sm">
                <p className="p-2 text-lg">
                    I'm a second-year{' '}
                    <b className="text-[#5DAEDE]">
                        Business Information Technology student at JAMK
                        University of Applied Sciences
                    </b>
                    , specializing in{' '}
                    <b className="text-[#5DAEDE]">full-stack development</b>.
                    I'm currently{' '}
                    <b className="text-[#5DAEDE]">
                        seeking opportunities in IT
                    </b>{' '}
                    and have experience with various technologies. I adapt{' '}
                    <b className="text-[#5DAEDE]">quickly</b> to new tools and
                    frameworks, continuously expanding my skill set.
                    <br />
                    <br />
                    While coding is my main passion, I'm also interested in
                    exploring other areas of IT, such as sales and IT support.
                    <b className="text-[#5DAEDE]">
                        {' '}
                        Problem-solving is my strongest skill
                    </b>
                    , and I{' '}
                    <b className="text-[#5DAEDE]">
                        enjoy challenging myself
                    </b>{' '}
                    as much as possible to grow both personally and
                    professionally.
                </p>
                <br />
                <h3 className="p-2 text-2xl">
                    <b>Extra:</b>
                </h3>
                <br />
                <p className="p-2 text-lg">
                    In my free time, I like to stay{' '}
                    <b className="text-[#5DAEDE]">active</b> by going for walks
                    and hitting the gym. I also enjoy playing{' '}
                    <b className="text-[#5DAEDE]">video games</b>, as you might
                    have noticed. One of my interests is also all kinds of{' '}
                    <b className="text-[#5DAEDE]">electronic devices</b>, and I
                    like to repair things myself if possible.
                    <br />
                    <br />
                    When it comes to my personality, I'm a{' '}
                    <b className="text-[#5DAEDE]">positive</b>,{' '}
                    <b className="text-[#5DAEDE]">energetic</b>, and{' '}
                    <b className="text-[#5DAEDE]">approachable</b> person. I
                    might not always have the best advice, but I'm always{' '}
                    <b className="text-[#5DAEDE]">willing to listen</b>—because,
                    in the end, that's what matters most. At work, I'm{' '}
                    <b className="text-[#5DAEDE]">efficient</b>, a great{' '}
                    <b className="text-[#5DAEDE]">team player</b>, and somewhat{' '}
                    <b className="text-[#5DAEDE]">creative</b>. Most
                    importantly, I put <b className="text-[#5DAEDE]">passion</b>{' '}
                    into everything I do.
                    <br />
                    <br />I created this site to give you a better idea of who I
                    am—whether you're a random visitor, a potential employer, or
                    someone I already know. My goal was to keep it{' '}
                    <b className="text-[#5DAEDE]">professional yet relaxed</b>,
                    avoiding anything too serious or cliché. Hopefully, this
                    site{' '}
                    <b className="text-[#5DAEDE]">reflects my personality</b>{' '}
                    and leaves a{' '}
                    <b className="text-[#5DAEDE]">good impression</b>!
                </p>
            </div>
        </section>
    );
};

export default InfoBox;
