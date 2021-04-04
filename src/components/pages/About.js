import React from "react";
import "./About.scss";
import image from "../../images/about-us.png";
import { Container } from "react-bootstrap";

function About(p) {
  let about = "";
  if (p.language === "he") {
    about = (
      <div className="about-page">
        <div className="text">
          <h1>מי אנחנו</h1>
          בית הספר הוקם ב-1882, על ידי מסדר ההוראה הקתולי. בבית ספר זה לומדים
          תלמידים מכיתה א' ועד יב', בנים ובנות, יהודים, מוסלמים, נוצרים ותלמידים
          ללא השתייכות דתית. לתלמידים יש אפשרות לעבור את הבגרות או את מבחן
          הבקלוריה, מה שמאפשר להם גישה ישירה לאוניברסיטאות בישראל או בצרפת
          במסלול בחינת הבקלוריה מאושר על ידי משרד החינוך הצרפתי מכיתה ח' עד יב'
          כולל
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
    );
  } else if (p.language === "fr") {
    about = (
      <div className="about-page">
        <div className="text">
          <h1>Mission</h1>
          Notre établissement a été fondé en 1882 par les Lasalliens venus de
          France. Il fait partie des établissements des Frères des écoles
          chrétiennes. Notre école accueille des élèves , depuis la maternelle
          jusqu'en Terminale, garçons et filles, Juifs , Musulmans,Chrétiens ou
          sans appartenance religieuse. Notre collège est multiculturel et
          plurinlingue . Nos élèves passent le BAC français , ce qui leur permet
          un accès direct aux universités d'Israël et de France La section
          française de notre établissement est homologuée par le{" "}
          <a
            href="https://www.education.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministère français de l’Education nationale
          </a>{" "}
          de la classe de 4ème du collège à la Terminale (séries L et S).
        </div>
        <div className="wiki-link">
          <a
            href="https://en.wikipedia.org/wiki/Coll%C3%A8ge_des_Fr%C3%A8res_de_Jaffa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="read-more">En savoir plus</div>
            <img
              className="girl-on-books-img"
              src={image}
              alt="about-us illustration"
            />
          </a>
        </div>
      </div>
    );
  } else if (p.language === "en") {
    about = (
      <div className="about-page">
        <div className="text">
          <h1>Mission</h1>
          Our establishment was founded in 1882 by Lasallians from France. It is
          part of the establishments of the Brothers of the Christian Schools.
          Our school welcomes students from kindergarten to Terminale, boys and
          girls, Jews, Muslims, Christians or without religious affiliation. Our
          college is multicultural and multilingual. Our students take the
          French BAC, which allows them direct access to universities in Israel
          and France. The French section of our establishment is approved by the{" "}
          <a
            href="https://www.education.gouv.fr/"
            target="_blank"
            rel="noreferrer"
          >
            French Ministry of National Education
          </a>{" "}
          from the 8th to 12th grade(series L and S).
        </div>
        <div className="wiki-link">
          <a
            href="https://en.wikipedia.org/wiki/Coll%C3%A8ge_des_Fr%C3%A8res_de_Jaffa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="read-more">En savoir plus</div>
            <img
              className="girl-on-books-img"
              src={image}
              alt="about-us illustration"
            />
          </a>
        </div>
      </div>
    );
  }

  return <Container className="cont-about">{about}</Container>;
}
export default About;
