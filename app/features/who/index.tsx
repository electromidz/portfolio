import Image from "next/image";

export default function Who() {
  return (
    <div className="h-screen snap-center  w-8/12 m-auto">
      <div className="flex flex-row space-between h-screen snap-center">
        <div className="flex-1">{/* 3D model */}</div>
        <div className="flex flex-1 flex-col justify-center gap-6 ">
          <h1 className="text-4xl font-bold">Think out of square space</h1>
          <div className="flex justify-start gap-5">
            <span className="w-12 bg-red p-1 border-gray-200 dark:bg-gray-900"></span>
            <span className="font-medium text-xl">Who we are</span>
          </div>
          <p className="font-light text-lg">
            A creative person of designing and developing with a passion for the
            arts.
          </p>
          <div className="flex justify-start">
            <button className="font-bold text-lg">See my work</button>
          </div>
        </div>
      </div>
    </div>
  );
}
