import Link from "next/link";

const SearchForm = () => {
  return (
    <section className="w-full my-6 p-4 bg-white border border-gray-200 rounded flex flex-col justify-start items-center">
      <h1 className="block w-full text-center text-indigo-700 text-3xl font-bold">
        Search Names
      </h1>
      <form className="w-full p-2 flex flex-col justify-start items-center ">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-indigo-700 ">
          <div className="flex flex-col justify-start items-center   ">
            <label className=" w-4/5" htmlFor="meaning">
              Meaning:
            </label>
            <input
              type="text"
              placeholder="Ex: Beautiful, Honest....."
              name="meaning"
              className="outline-none text-gray-700 my-2 px-2 w-4/5 py-1 text-sm border-2"
            />
          </div>
          <div className="flex flex-col justify-start items-center  ">
            <label className=" w-4/5" htmlFor="Contains">
              Contains:
            </label>
            <input
              type="text"
              placeholder="Enter letters"
              name="Contains"
              className="outline-none text-gray-700 my-2 border-2 px-2 w-4/5 py-1 text-sm"
            />
          </div>
          <div className="flex   flex-col justify-start items-center  ">
            <label className=" w-4/5" htmlFor="startsWith">
              Starts with:
            </label>
            <input
              type="text"
              placeholder="One or more letters"
              name="startsWith"
              className="outline-none text-gray-700 my-2 px-2 w-4/5 py-1 text-sm border-2"
            />
          </div>
          <div className="flex  flex-col justify-start items-center ">
            <label className=" w-4/5" htmlFor="endsWith">
              Ends with:
            </label>
            <input
              type="text"
              placeholder="One or more letters"
              name="endsWith"
              className="outline-none text-gray-700 my-2 px-2 w-4/5 py-1 text-sm border-2"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <input
            type="submit"
            value="Search"
            className="text-center  block py-2 px-4 md:px-6 bg-pinky rounded bg-pinkyHovered tracking-wide cursor-pointer "
          />
          <h3 className="block mx-6 text-center text-gray-700 font-semibold text-xl my-2">
            Or
          </h3>
          <Link href="/arabic-female-names-list">
            <a
              className=" text-center block py-2 px-6 bg-whitePinkBorder rounded bg-whiteHovered tracking-wide "
              role="button"
            >
              Explore full list
            </a>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
