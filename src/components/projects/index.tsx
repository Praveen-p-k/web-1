import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import {
  contentSelectors,
  fetchContentState,
} from "../../redux/slice/contentSlice";
import {
  AccountList,
  Dashboard,
  FullStackProject,
  Responsive,
  WidAccount,
} from "../../assets/images";
import { WORKS } from "../../helpers/constants/routes";
import { setValue } from "../../utils";

const Projects = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const contentState = useAppSelector(contentSelectors);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchContentState());
  }, [appDispatch]);

  const handleClick = () => {
    myRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-8 rounded-md">
      <div className="flex justify-between">
        <p className="text-white-45 md:text-2xl text-base md:font-medium font-extrabold" onClick={() => handleClick()}>
          FEATURED PROJECTS
        </p>
        {contentState.currentPage !== WORKS && (
          <details
            className="text-blue-500 text-xl cursor-pointer"
            onClick={() => (setValue(WORKS), navigate(WORKS))}
          >
            <summary className="md:text-base text-xs">Each works</summary>
          </details>
        )}
      </div>
      <div className="mt-10 rounded-md">
        <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-8">
          <div className="flex flex-col md:py-2 border border-solid border-white-5 hover:border-white-15 rounded-lg">
            <img className="works ml-14" src={Dashboard} />
            <div className="flex flex-col md:p-4 p-2">
              <p className="text-wallet-primary md:text-xl text-sm text-center">
                Crypto Wallet - Dashboard
              </p>
              <p className="md:p-4 p-2 text-wallet-secondary md:text-sm text-xs text-center font-light">
                To take the position of the Metamask wallet, a complex program
                was developed. The wallet dashboard looks like this. One Cosmos
                wallet account's information is included in it.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:py-2 border border-solid border-white-5 hover:border-white-15 rounded-lg">
            <img className="works ml-14" src={Responsive} />
            <div className="flex flex-col md:p-4 p-2">
              <p className="text-wallet-primary md:text-xl text-sm text-center">
                {`Responsive Design (extension)`}
              </p>
              <p className="md:p-4 p-2 text-wallet-secondary md:text-sm text-xs text-center font-light">
                Additionally designed for the extended view was the Hedge Hogg
                wallet. As you can see in the image above. The tab view, which
                was also created for the extension view, will show everything.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:py-2 border border-solid border-white-5 hover:border-white-15 rounded-lg">
            <img className="works ml-14" src={AccountList} />
            <div className="flex flex-col md:p-4 p-2">
              <p className="text-wallet-primary md:text-xl text-sm text-center">
                Wallet - Menu
              </p>
              <p className="md:p-4 p-2 text-wallet-secondary md:text-sm text-xs text-center font-light">
                For this wallet, it has a few key features, including the
                ability to import wallets or create accounts. And utilising the
                lock that is included in that, we can secure our wallet.
                Additionally, we can look up an account by name or public key.
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-solid border-white-5 hover:border-white-15 rounded-lg">
            <img className="works ml-14" src={WidAccount} />
            <div className="flex flex-col md:p-4 p-2">
              <p className="text-wallet-primary md:text-xl text-sm text-center">
                Tab Vs Extension
              </p>
              <p className="md:p-4 p-2 text-wallet-secondary md:text-sm text-xs text-center font-light">
                You can see how the wallet rendered the menu item in the
                dashboard. With the use of that option's send function, we may
                also send tokens. The transaction can be sent to any wallet
                account, either inside or outside.
              </p>
            </div>
          </div>
        </div>
        {contentState.currentPage === WORKS && (
          <div ref={myRef} className="">
            <img className="works h-1/2 w-full" src={FullStackProject} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
