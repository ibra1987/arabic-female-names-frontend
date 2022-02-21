import useSWR from "swr";
import { useState, useEffect } from "react";

const TodaysChoice = ({ names }) => {
  /*useSWR(fetching ? process.env.NEXT_PUBLIC_API_URL : null, () => fetchData(), {
    onSuccess: (data, key, config) => {
      setNames(data);
      console.log(names);
    },
    onError: (error, key, config) => {
      console.log(error.message);
    },
  });
*/
  const play = (id) => {
    const audio = new Audio(`/audio/femaleNames/${id}.mp3`);
    audio.play();
  };

  return (
    <section className="w-full border bg-white p-4 flex flex-col justify-start items-center">
      <h2 className="block w-full text-center text-3xl p-4 text-indigo-700 font-bold tracking-wide">
        Today's Choice
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
        {names.map((name) => {
          return (
            <div
              key={name._id}
              className="border p-2 flex flex-col justify-start items-start py-4"
            >
              <div direction="rtl" className=" my-2 ">
                <div>
                  <span className="text-indigo-700 mx-2 font-semibold">
                    Name:
                  </span>
                  {name.Name}
                </div>

                <div
                  direction="rtl"
                  className="flex justify-center items-center  my-2 "
                >
                  <span className="text-indigo-700 mx-2 font-semibold">
                    Pronounciation:
                  </span>
                  <audio
                    controls
                    className="w-32 h-6"
                    src={`/audio/femaleNames/${name.Name}.mp3`}
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </div>
              </div>
              <div direction="rtl" className=" my-2 p-2 text-sm">
                <span className="text-indigo-700 mx-2 font-semibold">
                  Meaning:
                </span>
                {name.Meaning}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodaysChoice;
