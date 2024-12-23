import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "../../../store/main/features/user/userSlice";
import { auth } from "../../../firebase/firebase.config";
import Input from "../../Common/Input";
import SubmitButton from "../../Common/SubmitButton";
import Button from "../../Common/Button";
import CommonModal from "../../Modals/CommonModal";
import ForgetPassword from "./ForgetPassword";
import { useCreateJwtMutation, useLazyGetUserQuery } from "../../../store/main/service/user/auth_api_service";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const disptach = useDispatch();
  const [getUser] = useLazyGetUserQuery();
  const [createJwt,{isLoading:jwtLoading}]=useCreateJwtMutation()

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result?.user?.accessToken && result.user.email) {
        if (!result?.user?.emailVerified) {
          try {
            await sendEmailVerification(result?.user);
            toast.success(`Please check email and verify`, {
              id: "verify_email",
            });
            setIsLoading(false);
          } catch (error) {
            toast.error("Something went wrong 😓", { id: error });
            setIsLoading(false);
          }
          return;
        }
        await createJwt({ email: result.user.email });
        const res = await getUser(result.user.email);
        if (res?.data?.email) {
          disptach(addUser({ ...res?.data }));
          setIsLoading(false);
          navigate(from, { replace: true });
        } else {
          toast.error("Something went wrong 😓", { id: "error" });
          setIsLoading(false);
        }
      }
    } catch (error) {
      if (error.message == "Firebase: Error (auth/invalid-credential).") {
        toast.error("Invalid credential", { id: "invalid" });
        setIsLoading(false);
      } else {
        toast.error("Something went wrong 😓", { id: "error" });
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full my_container">
      <div className="md:w-4/5 lg:w-4/6 xl:w-7/12 bg-white border shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-2/5 lg:h-[420px] xl:h-4/6">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col items-center justify-center gap-5 w-full p-7"
        >
          <h1 className="font-bold text-3xl capitalize">Sign In</h1>
          <div className="w-full flex flex-col gap-5">
            <Input
              {...register("email")}
              placeholder="Email *"
              type="email"
              required
            />
            <Input
              {...register("password")}
              placeholder="*******"
              type="password"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <span
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="text-sm cursor-pointer"
            >
              Forget Your Password?
            </span>
            <SubmitButton isLoading={isLoading || jwtLoading} className="w-40">
              Sign In
            </SubmitButton>
          </div>
        </form>
        <div className="bg-[#047857] md:rounded-l-[30%] flex flex-col gap-5 items-center justify-center p-7 text-center text-white order-first md:order-none rtl-animation relative">
          <Link to="/" title="Return main website">
            <FaHome className="text-5xl border p-2 rounded-full" />
          </Link>
          <h2 className="font-bold text-3xl capitalize">Hello, Friend</h2>
          <span>
            Register with your personal details to use all of the site features
          </span>
          <Link to="/sign-up">
            <Button className="w-40 bg-transparent border">Sign Up</Button>
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <CommonModal
          isOpen={isModalOpen}
          onClose={setIsModalOpen}
          className="w-[350px]"
          title="Forget Password"
        >
          <ForgetPassword />
        </CommonModal>
      )}
    </div>
  );
};

export default Login;
