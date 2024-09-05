const Tabs = () => {
  return (
    <div className="my-10 xl:my-20">
      <div className="grid md:grid-cols-5 text-center rounded bg-stech overflow-hidden shadow-md">
        {[
          "Description",
          "Additional info",
          "Qestions",
          "Reviews",
          "More from seller",
        ].map((info, index) => (
          <button
            className={`p-6 w-full hover:bg-white hover:text-stech text-white duration-500 uppercase font-medium md:text-sm h-full ${index==0&& "bg-white text-stech"}`}
            key={info}
          >
            {info}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
