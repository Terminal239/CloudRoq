import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./Reusable/Container";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-violet-500 py-4">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-[32px] rounded-full bg-gradient-to-t from-cyan-500 to-blue-500"></div>
          <h2 className="text-lg font-bold text-white">FinTech</h2>
        </div>
        <div className="flex items-center justify-between gap-8">
          <FontAwesomeIcon icon={faBell} />
          <div className="flex size-[32px] items-center justify-center rounded-full bg-white">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
