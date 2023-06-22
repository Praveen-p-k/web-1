import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import {
  contentSelectors,
  updateContent,
} from "../../redux/slice/contentSlice";
import { WORKS } from "../../helpers/constants/routes";
import Projects from "../../components/projects";
import { DARK_MODE } from "../../helpers/constants";

const Works = () => {
  const appDispatch = useAppDispatch();
  const contentState = useAppSelector(contentSelectors);

  useEffect(() => {
    appDispatch(updateContent(WORKS));
    document.title = `${WORKS.slice(1, WORKS.length)} | Programmer from Mech`;
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
                  <div className="title-header">Works</div>
                  <div className="mt-5">
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
export default Works;
