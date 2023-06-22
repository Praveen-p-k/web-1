import { useEffect } from "react";
import { Praveen } from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import Projects from "../../components/projects";
import { contentSelectors } from "../../redux/slice/contentSlice";
import { DARK_MODE } from "../../helpers/constants";

const HomePage = () => {
  const appDispatch = useAppDispatch();
  const contentState = useAppSelector(contentSelectors);

  useEffect(() => {
    document.title = `Programmer from Mech`;
  }, [appDispatch]);

  return (
    <div
      className={`${
        contentState.theme ? "bg-secondary" : "light"
      }`}
    >
      <div className="py-1">
        <div className="send-container">
          <div className="send-body">
            <div className="send-inner-container">
              <div className="card">
                <div className="send-header">
                  <div className="flex gap-4">
                    <img
                      className="md:h-28 w-28 md:border-4 h-24 border-2 border-primary rounded-full"
                      src={Praveen}
                    />
                    <div className="flex flex-col justify-start md:p-5 p-2">
                      <p className="text-primary md:text-4xl text-xl font-extrabold">
                        Praveen Kumar R
                      </p>
                      <p className="md:mt-2 text-white-45 md:text-xl text-xs">
                        Blockchain, MERN, and software developer
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 justify-start">
                    <p className="text-white-85 md:text-xl text-sm">
                      A Dedicated Full-STACK programmer with the ability to
                      produce solid applications. When I'm not in front of my
                      computer, you can find me playing chess. My time was
                      mostly spent researching, challenging myself, and
                      developing new apps.
                    </p>
                  </div>
                  <div className="mt-6 md:h-14 md:w-32 border border-solid border-primary rounded-xl hover:border-blue-500 cursor-pointer">
                    <p
                      className="md:px-6 md:py-3 py-2 text-primary md:text-xl text-sm text-center hover:text-blue-500 font-semibold"
                      onClick={() =>
                        window.open(
                          `https://docs.google.com/document/d/1JVrzfu5JR3Jj5wRYChkr-dKzxJee8HZp/edit?usp=sharing&ouid=107441799184576075208&rtpof=true&sd=true`
                        )
                      }
                    >
                      Resume
                    </p>
                  </div>
                  <div>
                    <Projects />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
