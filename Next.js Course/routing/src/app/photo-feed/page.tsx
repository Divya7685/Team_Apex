import Link from "next/link";
import wonders from "./wonders"
import Image from "next/image";

export default function Home (){
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                Different Seasons on the earth
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wonders.map(({id,src,name})=>(
                    <Link key={id} href ={`/photo-feed/${id}`}>
                        <Image
                            alt ={name}
                            src ={src}
                            className="w-full oject-cover aspect-square"
                            />
                    </Link>
               ) )}
            </div>
        </main>
    );
}