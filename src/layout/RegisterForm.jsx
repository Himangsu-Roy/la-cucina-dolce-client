import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../contexts/AuthProvider";

const RegisterForm = () => {
  const { createUser, userProfile } = useContext(AuthContex);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (password.length < 7) {
          return
      }
      
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        userProfile(createdUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            navigate("/");
            console.log("User Profile Updated");
          })
          .catch((error) => {
            console.log("Error updating profile: ", error);
          });
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setPassword("");
    setPhotoUrl("");
  };

  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4  sm:px-6  lg:px-8 ">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                Sign Up
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  title=""
                  className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                >
                  Sign In
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900 dark:text-gray-500"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter You Full Name"
                        id="name"
                        value={name}
                        name="name"
                        required
                        onChange={handleNameChange}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900 dark:text-gray-500"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="email"
                        placeholder="Enter Your Email"
                        id="email"
                        value={email}
                        name="email"
                        required
                        onChange={handleEmailChange}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900 dark:text-gray-500"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="password"
                        placeholder="Enter Your Password"
                        id="password"
                        value={password}
                        name="password"
                        required
                        onChange={handlePasswordChange}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900 dark:text-gray-500"
                    >
                      {" "}
                      Photo URL{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-500 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        placeholder="Enter Your Photo URL"
                        id="photoUrl"
                        value={photoUrl}
                        name="photoUrl"
                        onChange={handlePhotoUrlChange}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                    >
                      Register
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                {/* <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="h-6 w-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign up with Google
                </button> */}

                {/* <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-500 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none dark:text-gray-400"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  Sign up with Github
                </button> */}
                <p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Read our{" "}
                    <span className="capitalize text-indigo-600">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="capitalize text-indigo-600">
                      terms of service
                    </span>{" "}
                    to learn more
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-full w-full">
            <img
              className="mx-auto h-screen w-full object-cover"
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
