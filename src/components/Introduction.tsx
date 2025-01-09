import Image from "../../node_modules/next/image";

export default function Introduction() {
    return (
        <>
            <div className="w-screen h-[500px] bg-slate-800 p-8">
                <div className="flex justify-between items-center">
                    <div>
                    <div>
                        <p className="text-white text-2xl font-bold my-4">Sistem Informasi Konsentrasi 
                        Komputer Akuntansi</p>
                        <h2 className="text-7xl text-white">Hello, I&apos;m</h2>
                        <h2 className="text-7xl text-white">Melania Chairani</h2>
                    </div>
                    <div className="my-8">
                        <p className="text-white max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Natus veniam autem consectetur nobis consequuntur? 
                            Quae deleniti suscipit cum impedit ipsum.
                        </p>
                    </div>
                    </div>
                    <div>
                    {/* Image */}
                    <div className="relative w-56 h-56">
                        <Image src={'/img/3 x 4 1.jpg'} alt="Melania Chairani"
                        fill={true}
                        priority={true}
                        className="rounded-3xl object-cover"
                        />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}