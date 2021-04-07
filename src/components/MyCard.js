import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink } from "reactstrap";
import baptiste from "../images/baptiste.jpg";

function MyCard(p) {
  let title,
    text,
    link,
    read = "";
  if (p.language === "fr") {
    title = "-Fête de Saint Jean Baptiste-";
    text = (
      <span>
        Saint Jean-Baptiste de La Salle, né le 30 avril 1651 à Reims et mort le
        7 avril 1719 au manoir de Saint-Yon, dans les faubourgs de Rouen, est un
        ecclésiastique français et un innovateur dans le domaine de la
        pédagogie, qui a consacré sa vie à éduquer les enfants pauvres. Il est
        le fondateur de l'institut des Frères des écoles chrétiennes. Canonisé
        en l'an 1900, il est fêté le 7 avril.
      </span>
    );
    link = "https://fr.wikipedia.org/wiki/Jean-Baptiste_de_La_Salle";
    read = "Lisez encore";
  } else if (p.language === "en") {
    title = "-Jean-Baptiste de La Salle-";
    text = (
      <span>
        Jean-Baptiste de La Salle /ləˈsæl/ (French pronunciation: ​[lasal])
        (April 30, 1651 – April 7, 1719) was a French priest, educational
        reformer, and founder of the Institute of the Brothers of the Christian
        Schools. He is a saint of the Catholic Church and the patron saint for
        teachers of youth. He is referred to both as La Salle and as De La
        Salle. La Salle dedicated much of his life to the education of poor
        children in France; in doing so, he started many lasting educational
        practices. He is considered the founder of the first Catholic schools.
      </span>
    );
    link = "https://en.wikipedia.org/wiki/Jean-Baptiste_de_La_Salle";
    read = "Read more";
  } else if (p.language === "he") {
    title = "-ז'אן-בטיסט דה לה סאל-";
    text = (
      <span>
        ז'אן-בטיסט דה לה סאל (צרפתית Jean-Baptiste de La Salle; ‏ 30 באפריל 1651
        - 7 באפריל 1719) היה כומר, uאיש חינוך הקים תנועה חינוכית בינלאומית
        לחינוך ילדי העניים - "מכון אחי בתי הספר הנוצריים" או בקיצור "אחי החינוך
        הנוצרי", "האחים הנוצרים הצרפתים" או "האחים הלסאליים" . הוא איחד את
        המדיניות החינוכית בצרפת כולה ונודע גם בשל חיבוריו מעוררי ההשראה. לדבריו
        "הנס הגדול ביותר שניתן לעשות, הוא לגעת בלב התלמיד". דה לה סאל הוכרז
        לימים כקדוש של הכנסייה הקתולית. דה לה סאל נולד בריימס (Reims) שבצרפת.
        משפחתו הייתה משפחת משפטנים ואביו רצה שיהפוך למשפטן, אך דה לה סאל ביכר את
        הכמורה. בגיל 16 מונה לקאנוניק(אנ') של קתדרלת ריימס. לאחר מות הוריו מונה
        לאחראי על נחלתם, אך המשיך גם בלימודי התאולוגיה. הוא למד בסורבון ובסמינר
        של כנסיית סן-סולפיס בפריז. הוא מונה לכומר בשנת 1678 ושנתיים אחר כך, בגיל
        29, היה דוקטור לתאולוגיה. דה לה סאל מת ברואן.
      </span>
    );
    link =
      "https://he.wikipedia.org/wiki/%D7%96%27%D7%90%D7%9F-%D7%91%D7%98%D7%99%D7%A1%D7%98_%D7%93%D7%94_%D7%9C%D7%94_%D7%A1%D7%90%D7%9C";
    read = "לקריאה נוספת";
  }

  return (
    <div>
      <Card style={{ width: "16rem" }}>
        <CardImg src={baptiste} />
        <CardBody>
          <h3>{title}</h3>
          <CardText>{text}</CardText>
          <CardLink href={link}>{read}</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}
export default MyCard;
