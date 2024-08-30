import Marquee from "react-fast-marquee";
const Notice = () => {
  return (
    <div className="bg-white p-4 rounded-full my-10">
      <Marquee>
        <span className="font-semibold">
          5th June Wednesday, our all outlets are open. Additionally, our online
          activities are open and operational.
        </span>
      </Marquee>
    </div>
  );
};

export default Notice;
