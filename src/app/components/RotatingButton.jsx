import Link from "next/link";

const RotatingButton = () => {
  const word = "Download  Adeego  app  Today";
  const circ_word = Array.from(word).map((char, i) => (
    <div
      key={i}
      style={{
        transform: `rotate(${i * 12}deg) translateX(-50%)`,
        transformOrigin: "bottom center",
      }}
      className={`absolute font-mono uppercase font-semibold text-sm h-[80%] max-w-fit bottom-2/4`}
    >
      {char}
    </div>
  ));
  return (
    <a href="#cta">
      <div className="size-[4.5rem] rounded-full bg-LightGreen relative">
        <div className="absolute w-full h-full rounded-full flex flex-col items-center justify-center text-white font-semibold tracking-tighter uppercase text-sm">
          <img className=" w-48 h-48" src="https://firebasestorage.googleapis.com/v0/b/adeego-6d3be.appspot.com/o/Brand%20Assets%2Fadaptive-icon.png?alt=media&token=8ef5eb02-5a9c-4429-ae4a-94a32d7e1574" alt="" />
        </div>
        <div className="relative text-DeepGreen w-full h-full grid place-items-center animate-spin transition-all !duration-[3000ms]">
          {circ_word}
        </div>
      </div>
    </a>
  );
};

export default RotatingButton;
