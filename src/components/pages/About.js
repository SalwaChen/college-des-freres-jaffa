import React from "react";
import "./About.scss";
import image from "../../images/about-us.png";
import { Container } from "react-bootstrap";
// import image2 from "../../images/home.png";

function About() {
  const SIZE = {
    width: 600,
    height: 400,
  };
  return (
    <Container className="cont-about">
      <div className="about-page">
        <div className="text">
          בית הספר הוקם ב-1882, על ידי מסדר ההוראה הקתולי. בבית ספר זה לומדים
          תלמידים מכיתה א' ועד יב', בנים ובנות, יהודים, מוסלמים, נוצרים ותלמידים
          ללא השתייכות דתית. לתלמידים יש אפשרות לעבור את הבגרות או את מבחן
          הבקלוריה, מה שמאפשר להם גישה ישירה לאוניברסיטאות בישראל או בצרפת
          במסלול בחינת הבקלוריה מאושר על ידי משרד החינוך הצרפתי מכיתה ח' עד יב'
        </div>
        <div className="wiki-link">
          <a
            href="https://he.wikipedia.org/wiki/%D7%A7%D7%95%D7%9C%D7%92%27_%D7%93%D7%94_%D7%A4%D7%A8%D7%A8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="read-more">לקריאה נוספת</div>
            <img
              className="girl-on-books-img"
              src={image}
              alt="about-us illustration"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
export default About;
