import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/config/store";
import {
  contentSelectors,
  updateContent,
} from "../../redux/slice/contentSlice";
import { CONTACTS } from "../../helpers/constants/routes";
import { DARK_MODE } from "../../helpers/constants";

const ContactMe = () => {
  const appDispatch = useAppDispatch();
  const contentState = useAppSelector(contentSelectors);

  useEffect(() => {
    appDispatch(updateContent(CONTACTS));
    document.title = `${CONTACTS.slice(
      1,
      CONTACTS.length
    )} | Programmer from Mech`;
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
                  <div className="title-header">ContactMe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
