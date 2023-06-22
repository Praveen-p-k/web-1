import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkedIn, Github, Sun, Moon, Twitter } from "../../assets/images";
import {
  HOME_PAGE,
  CONTACTS,
  STACKS,
  WORKS,
} from "../../helpers/constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import {
  changeMode,
  contentSelectors,
  fetchContentState,
  updateContent,
} from "../../redux/slice/contentSlice";
import { getTheme, getValue } from "../../utils";

const Header = () => {
  const contentState = useAppSelector(contentSelectors);
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    appDispatch(fetchContentState());

    console.log("state: ", contentState);
    if (!getValue()) {
      appDispatch(changeMode(getTheme()));
      appDispatch(updateContent(HOME_PAGE));
      navigate(HOME_PAGE);
    } else {
      appDispatch(updateContent(contentState.currentPage));
      navigate(contentState.currentPage);
    }
  }, [appDispatch, navigate]);

  const navigateTo = (nextRoute: string) => {
    appDispatch(updateContent(nextRoute));

    switch (nextRoute) {
      case HOME_PAGE:
        navigate(HOME_PAGE);
        break;
      case WORKS:
        navigate(WORKS);
        break;
      case STACKS:
        navigate(STACKS);
        break;
      case CONTACTS:
        navigate(CONTACTS);
        break;
      default:
        navigate(HOME_PAGE);
        break;
    }
  };

  return (
    <div
      className={`flex ${
        contentState.theme ? "bg-secondary" : "light"
      }`}
    >
      <div className="header-container mt-1.5">
        <div className="header-body">
          <div className="header-inner-container">
            <div className="card">
              <div className="header-pointer py-2">
                <div className="flex justify-between rounded-xl">
                  <div className="flex gap-5 text-primary md:text-xl text-sm p-4">
                    <p
                      className={`navbar ${
                        contentState.currentPage === HOME_PAGE &&
                        "bottom-border"
                      }`}
                      onClick={() => navigateTo(HOME_PAGE)}
                    >
                      home
                    </p>
                    <p
                      className={`navbar ${
                        contentState.currentPage === WORKS && "bottom-border"
                      }`}
                      onClick={() => navigateTo(WORKS)}
                    >
                      works
                    </p>
                    <p
                      className={`navbar ${
                        contentState.currentPage === STACKS && "bottom-border"
                      }`}
                      onClick={() => navigateTo(STACKS)}
                    >
                      stacks
                    </p>
                    <p
                      className={`navbar ${
                        contentState.currentPage === CONTACTS && "bottom-border"
                      }`}
                      onClick={() => navigateTo(CONTACTS)}
                    >
                      contact
                    </p>
                  </div>
                  <div className="flex md:p-5 md:gap-5 p-5 gap-3">
                    <img
                      className="social-icons"
                      src={LinkedIn}
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/in/praveen-kumar-278944249/`
                        )
                      }
                    />
                    <img
                      className="md:-mt-1 social-icons md:h-7 md:w-6 h-4 w-5"
                      src={Github}
                      onClick={() =>
                        window.open(`https://github.com/praveen-p-k`)
                      }
                    />
                    <img
                      className="social-icons"
                      src={Twitter}
                      onClick={() =>
                        window.open("https://www.instagram.com/praveen._.mech/")
                      }
                    />
                    <p className="-mt-1 text-white-75 md:text-xl font-extralight">
                      |
                    </p>
                    <img
                      className={`social-icons md:h-6 md:w-6 h-4 w-4`}
                      src={contentState.theme ? Sun : Moon}
                      onClick={() => appDispatch(changeMode(!contentState.theme))}
                    />
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

export default Header;
