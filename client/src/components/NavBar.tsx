import WordMark from "./WordMark";
import ProfileIcon from "../assets/icons/ProfileIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center bg-white max-sm:hidden ">
      <nav className="justify-between items-center flex p-4 max-w-screen-xl w-full">
        <WordMark />
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-4">
            <NotificationIcon />
            <ProfileIcon />
          </div>
          <div>
            <button className="bg-first-primary p-2 text-white rounded-md">
              Lawyer AI
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
