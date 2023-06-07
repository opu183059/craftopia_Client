import { useContext } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/Authprovider";

const Login = () => {
  const { signinwithGoogle } = useContext(Authcontext);
  // console.log(import.meta.env.VITE_TEST);

  const googleLogin = () => {
    signinwithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Clicked");
  };

  return (
    <div className="pt-24 bg-slate-50 dark:bg-gray-800">
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-5 py-6">
        <Slide className="w-full md:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </Slide>
        <Fade delay={500} className="w-full md:w-6/12">
          <div className="md:w-10/12 mx-auto w-full p-8 space-y-3 rounded-xl bg-blue-950 dark:bg-blue-950 text-gray-100 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleLogin}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="space-y-1 text-sm">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
              </div>
              <button className="block w-auto rounded-md px-4 py-2 text-center text-slate-100 hover:scale-105 transition-all bg-blue-600 hover:border-blue-600 border border-blue-950 ">
                Log in
              </button>
              <div className="errorMessage">
                <p className="text-rose-600">error</p>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={googleLogin}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-60 p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 dark:border-gray-400 hover:bg-blue-600 hover:text-white hover:border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Dont have an account?
              <Link
                to={"/register"}
                className="text-sm ml-1 hover:text-slate-50 font-semibold underline dark:text-gray-100"
              >
                Register here
              </Link>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Login;
