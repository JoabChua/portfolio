import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    getMediumPosts();
  }, []);

  const getMediumPosts = async () => {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40devjo",
    );
    const data = await response.json();
    if (data.status === "ok") {
      setPosts(data);
    }
    console.log(data);
  };
  return (
    <div>
      <section className="hero-body is-medium">
        <div className="container">
          {
            <React.Fragment>
              <div>
                <div>
                  <h1 style={{ fontSize: "30px", fontWeight: "700" }}>
                    Stories on Medium
                  </h1>
                </div>
                <section className="section has-text-centered">
                  <div className="container is-narrow">
                    <div className="startup-grid">
                      <div className="columns is-multiline level">
                        {posts?.items?.map((post) => {
                          return (
                            <BlogCard
                              key={post.guid}
                              link={post.link}
                              thumbnail={post.thumbnail}
                              title={post.title}
                            />
                          );
                        })}
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item no-pad"></div>
                        <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item no-pad"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </React.Fragment>
          }
        </div>
      </section>
    </div>
  );
};

export default Blog;
