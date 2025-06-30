import { useParams } from 'react-router-dom';

const TrailerPage = () => {
    const { projectName } = useParams();

    return (
        <div className="xxl:pt-10 flex flex-col items-center min-h-screen bg-[#1B2838] ">
            <div className="xxl:w-3/5 w-screen">
                <h2 className="text-white text-4xl pb-2 hidden xxl:block">
                    {projectName}
                </h2>
                <div className="xxl:bg-[#141B23] xxl:flex ">
                    <video
                        controls
                        autoPlay
                        className="flex-1 xxl:max-w-[60%] h-full"
                    >
                        <source
                            src={`/projekti_trailerit/${projectName}.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <h2 className="text-white text-4xl pb-2 pl-4 xxl:hidden">
                        {projectName}
                    </h2>
                    <div className="flex flex-col items-end w-2/5 pl-4 pt-4 pb-4">
                        <p className="text-white">
                            This is a description of the project. It showcases
                            the features and highlights of the work done in this
                            project. More details will be added here later.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerPage;
