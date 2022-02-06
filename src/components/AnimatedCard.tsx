import "../stylesheets/animatedcard.css";

const AnimatedCard: React.FC<{
  image: string;
  title: string;
  link: string;
}> = ({ image, title, link }) => {
  return (
    <div className="column is-12-mobile is-half-tablet is-one-third-desktop column-centered">
      <figure className="fig image">
        <img src={image} alt="landing-img" className="project-thumb" />
        <figcaption>
          <h1 className="title is-size-5 is-size-4-widescreen">{title}</h1>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button is-primary is-outlined is-rounded"
          >
            <span>Visit Website</span>
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default AnimatedCard;
