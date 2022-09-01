import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SanityClient from "../../client.js";
import "./Home.scss";
import { Container, Row } from "react-bootstrap";
import MyCard from "../MyCard";
import laSalle from "../../images/la-salle-home.png";

function Home(p) {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
    )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <Container className="home-cont">
      <div className="wrap-column">
        <a href="https://www.aefe.fr/" target="_black">
          <button className="spin circle">
            <div className="column">
              Lien
              <div>AEFE</div>
            </div>
          </button>
        </a>
        <a
          href="https://labolanguesfrereslasallejaffa.blogspot.com/"
          target="_blank"
        >
          <button className="spin circle">
            <div className="column">
              <div>Labo</div>
              <div>Langue</div>
            </div>
          </button>
        </a>
      </div>
      <img
        src={laSalle}
        className="la-salle-home"
        alt="la salle illustration"
      />
      <section className="section-cont">
        {/* <div className="articles-flex"> */}
        {postData &&
          postData.map((post, index) => (
            <article className="blog-grid">
              <Link
                to={"/post/" + post.slug.current}
                key={post.slug.current}
                className="link-blog"
              >
                <span className="img-span">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    className="post-img"
                  />
                </span>
                <span></span>
                <h3>{post.title}</h3>
              </Link>
            </article>
          ))}
        {/* </div> */}
      </section>
    </Container>
  );
}
export default Home;
