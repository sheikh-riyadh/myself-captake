import Button from "../../Common/Button";

const SignInOption = () => {
  return (
    <div className="mb-10 xl:mb-20">
      <div className="p-10 bg-stech rounded-xl">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <div className="flex flex-wrap items-center gap-5 text-white">
            <div>
              <h2 className="font-medium text-3xl leading-normal">
                {`Let's part of with startech today`}
              </h2>
              <span className="text-xl">Signing up takes only 2 mins</span>
            </div>
          </div>
          <div>
            <Button className="border px-10 py-4 rounded-xl text-white">
              Sign up now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOption;
