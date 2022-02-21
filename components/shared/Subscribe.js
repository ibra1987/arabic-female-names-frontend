const Subscribe = () => {
  return (
    <section className="w-full bg-pinky flex flex-col md:flex-row justify-around items-start md:items-center my-4  px-4 py-6">
      <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end items-center">
        <h3 className="text-white tracking-wide text-center md:text-left text-2xl font-semibold ">
          Subscribe To Our NewSLETTER
        </h3>
      </div>
      <form className="w-full md:w-1/2 bg-white flex flex-col lg:flex-row justify-between items-center py-1 rounded px-4">
        <input
          type="email"
          placeholder="Your main email adress"
          className="border-b border-gray-400 my-4 md:my-0  text-gray-800 py-1 pinkText flex-grow outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-pinky bg-pinkyHovered cursor-pointer my-4 lg:my-0  px-6 py-1 rounded"
        />
      </form>
    </section>
  );
};

export default Subscribe;
