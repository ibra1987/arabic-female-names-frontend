import Link from "next/link";
import { useRouter } from "next/router";

const femaleNamesList = ({ names }) => {
  const router = useRouter();
  const { startswith } = router.query;

  const filter = (arr, letter) => {
    if (!arr) return [];
    const newarr = arr.filter((each) => each.Name.charAt(0) === letter);
    if (!newarr.length) return [];

    return newarr;
  };

  const checkLetters = () => {
    let ExistingLetters = [];
    alphabet.filter((letter) => {
      return names.map((each) => {
        if (each.Name.charAt(0) === letter) {
          if (ExistingLetters.indexOf(letter) === -1) {
            ExistingLetters.push(letter);
          }
        }
      });
    });

    return ExistingLetters;
  };
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <section
      role="table"
      className="w-full flex flex-col justify-start items-center my-4 bg-white border"
    >
      <div className="w-11/12 p-2 my-2 flex justify-center items-center   text-pink-500 ">
        <span className="w-1/3 text-center mr-2 border-b-2 p-4 border-pink-500 bg-pink-50 tracking-widest text-lg font-semibold">
          Name
        </span>
        <span className="w-1/3 text-center mr-2 border-b-2 p-4 border-pink-500 bg-pink-50  tracking-widest text-lg font-semibold">
          Meaning
        </span>
        <span className="w-1/3 text-center border-b-2 p-4 border-pink-500  bg-pink-50  tracking-widest text-lg font-semibold">
          Pronounciation
        </span>
      </div>
      {checkLetters().map((letter, index) => {
        return (
          <div
            key={index}
            className="w-full  flex flex-col justify-start items-center p-2"
          >
            <h1
              role="tree"
              className="text-2xl w-11/12 my-2 p-2 bg-pinky font-bold text-gray-900 "
            >
              {letter}
            </h1>

            {filter(names, letter).map((each) => (
              <div
                className="w-11/12 p-2 my-2 flex justify-start items-center border shadow-md "
                key={each._id}
              >
                <span className="pinkyText w-1/3"> {each.Name}:</span>{" "}
                <span className="w-1/3 text-xs md:text-sm">{each.Meaning}</span>
                <span className="w-1/3  ">
                  <audio
                    controls
                    src={`/audio/femaleNames/${each.Name}.mp3`}
                    className="w-11/12 float-right"
                  >
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default femaleNamesList;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/female-names`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      names: data,
    }, // will be passed to the page component as props
  };
}
