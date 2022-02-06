const BlogCard: React.FC<{
  thumbnail: string;
  title: string;
  link: string;
}> = ({ thumbnail, title, link }) => {
  return (
    <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
      <div
        className="box"
        style={{
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img
          src={thumbnail}
          alt="landing-img"
          className="logo"
          style={{
            margin: "10px 0",
            borderRadius: "5px",
            width: "100%",
            maxHeight: "190px",
          }}
        />
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
