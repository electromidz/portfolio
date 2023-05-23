export default function Contact() {
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
          <section className="mb-32 text-center text-gray-800">
            <div className="max-w-[700px] mx-auto px-3 lg:px-6">
              <h2 className="text-3xl  mb-12 text-white">Contact us</h2>
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
                    id="exampleFormControlTextarea13"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="
          w-full
          px-6
          py-2.5
          bg-pink-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </section>
        </div>

        <div className="flex-1">{/* 3D model */}</div>
      </div>
    </div>
  );
}
