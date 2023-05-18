export default function Work() {
  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
  ];

  return (
    <div className="h-screen snap-center  w-8/12 m-auto">
      <div className="flex flex-row space-between h-screen snap-center">
        <div className="flex flex-1 flex-col justify-center gap-6 ">
          <ul className="list-none flex flex-col gap-8">
            {data.map((item: string) => (
              <li className="text-7xl font-bold cursor-pointer" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">{/* 3D model */}</div>
      </div>
    </div>
  );
}
