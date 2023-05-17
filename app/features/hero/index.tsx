import Navbar from "../navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen snap-center">
      <Navbar />
      <div className="flex flex-row space-between h-screen snap-center">
        <div>
          <h1 className="text-4xl font-bold">Think. Make. Solve</h1>
          <span className=""></span>
          <span className="font-medium text-xl">What we do</span>
          <p className="font-light text-lg">
            we enjoy to creating default, human center digital experience
          </p>
          <button className="font-bold text-lg">learn more</button>
        </div>
        <div>
          {/* 3D model */}
          <Image
            src="/img/astronaut.png"
            width={200}
            height={200}
            alt="astronomer"
          />
        </div>
      </div>
    </div>
  );
}
