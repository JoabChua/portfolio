import { ReactComponent as AppleSVG } from "../assets/img/a2.svg";

const Buttons: React.FC<{ links: { ios: string; android: string } }> = ({
  links,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a href={links.android} target="_blank" rel="noopener noreferrer">
        <img
          src={require("../assets/img/playstore.png")}
          alt={"playstore"}
          style={{ maxWidth: 140 }}
        />
      </a>
      <a
        href={links.ios}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex" }}
      >
        <AppleSVG style={{ height: 37 }} />
      </a>
    </div>
  );
};

export default Buttons;
