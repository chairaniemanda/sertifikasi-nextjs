import TechCard from "./TechCard";

export default function Tech() {
    return (
        <>
            <div className="bg-slate-800 w-screen min-h-[300px] p-8">
                <h1 className="text-4xl text-white font-bold mb-4">Techs</h1>
                <div className="w-32 border-2 mb-8" />
                <div className="flex justify-center items-center w-full flex-wrap">
                    {/* Daftar Tech Card*/}
                    <TechCard imageURL="/img/2.jpg" techStack="HTML" />
                    <TechCard imageURL="/img/th (1).jpg" techStack="Java" />
                    <TechCard imageURL="/img/th.jpg" techStack="php" />
                </div>
            </div>
        </>
    );
}