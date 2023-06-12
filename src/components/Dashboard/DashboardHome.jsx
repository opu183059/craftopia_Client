import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Fade } from "react-awesome-reveal";

const DashboardHome = () => {
  const { user, role } = useContext(Authcontext);
  return (
    <div className="min-h-screen flex items-center justify-center gap-5 md:gap-20">
      <Fade delay={100} className="">
        <img
          src="https://i.ibb.co/wcmJHr4/2782066.png"
          className="w-52 md:w-60"
          alt=""
        />
      </Fade>
      <div>
        <Fade delay={600} className="mt-10 text-center sm:text-left ">
          <p>Wellcome to Dashboard</p>
        </Fade>
        {role ? (
          <>
            <Fade
              delay={1200}
              className="text-center dark:text-blue-500 text-blue-700 font-bold sm:text-left font-akaya md:text-5xl text-3xl"
            >
              <h1>{user?.displayName}</h1>
            </Fade>
            <Fade delay={1500} className="mt-3 text-center sm:text-left ">
              <p>Respectfull {role} of our website</p>
            </Fade>
          </>
        ) : (
          <p>
            You have loged in with for the first time, <br /> Please
            registration with google to use dashboard.
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
