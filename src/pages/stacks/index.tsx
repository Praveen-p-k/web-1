import { useEffect } from "react";
import {
  C,
  Chain,
  Github,
  Java,
  Js,
  Mongo,
  MySql,
  Node,
  ReactJs,
  Sol,
  Ts,
} from "../../assets/images";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import {
  contentSelectors,
  updateContent,
} from "../../redux/slice/contentSlice";
import { STACKS } from "../../helpers/constants/routes";
import { DARK_MODE } from "../../helpers/constants";

const Stacks = () => {
  const appDispatch = useAppDispatch();
  const contentState = useAppSelector(contentSelectors);

  useEffect(() => {
    appDispatch(updateContent(STACKS));
    document.title = `${STACKS.slice(1, STACKS.length)} | Programmer from Mech`;
  }, []);
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
                  <div className="title-header">Tech Stacks</div>
                  <div className="md:p-10">
                    <div className="ml-10 md:grid md:grid-cols-3 grid grid-cols-3 md:p-4 p-2 md:gap-10 gap-5">
                      <div className="stacks" title="C-Programming">
                        <img className="mt-3 md:ml-3 md:h-16 md:w-16 h-10 w-10" src={C} />
                      </div>
                      <div className="stacks" title="Javascript">
                        <img className="md:ml-3 md:mt mt-2 md:h-20 md:w-16 h-10 w-10" src={Js} />
                      </div>
                      <div className="stacks" title="Typescript">
                        <img className="mt-4 ml-4 md:h-14 md:w-14 h-8 w-8" src={Ts} />
                      </div>
                      <div className="stacks" title="Node.js">
                        <img className="mt-3 ml-3 h-16 w-16" src={Node} />
                      </div>
                      <div className="stacks" title="React.js">
                        <img className="mt-3.5 ml-3 h-16 w-16" src={ReactJs} />
                      </div>
                      <div className="stacks" title="Solidity">
                        <img className="mt-1 ml-1 h-20 w-20" src={Sol} />
                      </div>
                      <div className="stacks" title="Blockchain">
                        <img className="mt-3 ml-3 h-16 w-16" src={Chain} />
                      </div>
                      <div className="stacks" title="MongoDB">
                        <img className="mt-1 ml-1 h-20 w-20" src={Mongo} />
                      </div>
                      <div className="stacks" title="MySQL">
                        <img className="mt-3 ml-3 h-16 w-16" src={MySql} />
                      </div>
                      <div className="stacks" title="Java">
                        <img className="mt-3 ml-2 h-16 w-16" src={Java} />
                      </div>
                      <div className="stacks" title="Github">
                        <img className="mt-3 ml-3 h-16 w-16" src={Github} />
                      </div>
                    </div>
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
export default Stacks;
