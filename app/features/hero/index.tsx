import Navbar from "../navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen snap-center  w-8/12 m-auto">
      <Navbar />
      <div className="flex flex-row space-between h-screen snap-center">
        <div className="flex flex-1 flex-col justify-center gap-6 ">
          <h1 className="text-4xl font-bold">Think. Make. Solve</h1>
          <div className="flex justify-start gap-5">
            <span className="w-12 bg-red p-1 border-gray-200 dark:bg-gray-900"></span>
            <span className="font-medium text-xl">What we do</span>
          </div>
          <p className="font-light text-lg">
            we enjoy to creating default, human center digital experience
          </p>
          <div className="flex justify-start">
            <button className="font-bold text-lg">learn more</button>
          </div>
        </div>
        <div className="flex-1">
          {/* 3D model */}
          <Image
            className="animate-[animate_2s_infinite_ease_alternate]"
            src="/img/astronaut.png"
            width={800}
            height={600}
            alt="astronomer"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
