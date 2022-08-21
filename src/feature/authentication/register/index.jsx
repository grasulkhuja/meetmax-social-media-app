function Register() {
  return (
    <div className="flex flex-col items-center pt-10 max-w-lg mx-auto  dark:text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Getting started</h2>
        <p className="text-black/70 mt-2 dark:text-white">
          Create an account to continue and connect with the people.
        </p>
        <div className="dark:bg-slate-800/95 p-8 mt-4 dark:rounded-md">
          <div className="flex flex-col sm:flex-row justify-between gap-4  text-gray-600/80">
            <button className="bg-gray-300/20 px-6 py-2 rounded-md text-sm flex items-center gap-4 dark:text-white">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/google-logo--v1.png"
                className="h-4 w-4"
              />
              Log in with Google
            </button>
            <button className="bg-gray-300/20 px-6 py-2 rounded-md flex items-center gap-4 text-sm dark:text-white">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/mac-os--v2.png"
                className="h-4 w-4"
              />
              Log in with Apple
            </button>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 ">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <form className="flex flex-col gap-5">
            <div className="relative flex items-center gap-2 border-[1px] px-4 py-1 rounded-md">
              <img
                src="https://img.icons8.com/external-solid-style-bomsymbols-/65/000000/external-at-business-shop-finance-solid-style-set-2-solid-style-bomsymbols-.png"
                className="h-5 w-5"
              />
              <input
                type="text"
                className="w-full outline-none py-1 bg-inherit"
                placeholder="Your Email"
              />
            </div>
            <div className="relative flex items-center gap-2 border-[1px] px-4 py-1 rounded-md">
              <img
                src="https://img.icons8.com/external-solid-style-bomsymbols-/65/000000/external-at-business-shop-finance-solid-style-set-2-solid-style-bomsymbols-.png"
                className="h-5 w-5"
              />
              <input
                type="text"
                className="w-full outline-none py-1 bg-inherit"
                placeholder="Your Name"
              />
            </div>
            <div className="relative flex items-center gap-2 border-[1px] px-4 py-1 rounded-md">
              <img
                src="https://img.icons8.com/ios/50/000000/lock--v1.png"
                className="h-4 w-4"
              />
              <input
                type="password"
                className="w-full outline-none py-1 bg-inherit"
                placeholder="Create Password"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative flex items-center gap-2 border-[1px] px-4 py-1 rounded-md w-full">
                <img
                  src="https://img.icons8.com/ios/50/000000/lock--v1.png"
                  className="h-4 w-4"
                />
                <input
                  type="date"
                  className="w-full outline-none py-1 bg-inherit"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="relative flex items-center gap-2 border-[1px] px-4 py-1 rounded-md w-full">
                <img
                  src="https://img.icons8.com/ios/50/000000/lock--v1.png"
                  className="h-4 w-4"
                />
                <input
                  type="radio"
                  className="w-full outline-none py-1 bg-inherit"
                  value="Male"
                />

                <input
                  type="radio"
                  className="w-full outline-none py-1 bg-inherit"
                  value="Female"
                />
              </div>
            </div>
            <div className="flex justify-between items-center mx-4 mt-1 text-sm">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2 text-gray-600 dark:text-white">
                  Remember me
                </span>
              </label>
              <button className=" text-gray-600 dark:text-white">
                Forgot password?
              </button>
            </div>
            <button className="bg-blue-700/80 text-white text-sm py-2 rounded-md">
              Sign Up
            </button>
            <p className="text-sm">
              Already have an account?
              <span className="ml-4 text-blue-700/90">Sign In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
