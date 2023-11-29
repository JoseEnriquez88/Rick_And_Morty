import style from "./About.module.css";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import redux from "../../assets/redux.png";

const About = () => {
  const techSkills = [
    { tech: "Html", image: htmlImg },
    // { tech: "Css", image: cssImg },
    { tech: "JavaScript", image: javascriptImg },
    { tech: "React", image: reactImg },
    { tech: "Redux", image: redux },
  ];

  return (
    <div className={style.container}>
      <h1 className={style.bienvenido}>BIENVENIDO/A!</h1>
      <p className={style.texto}>
        ¡Hola! Mi nombre es José Enriquez,soy un estudiante de desarrollo web
        Full Stack en el prestigioso bootcamp de{" "}
        <a href="https://www.soyhenry.com/" className={style.henry}>
          Henry
        </a>
        🚀. Durante mi formación, he tenido la oportunidad de poner en práctica
        mis habilidades en el desarrollo de una Single Page Application (SPA)
        fascinante. En mi proyecto, construí una SPA que muestra personajes de
        la reconocida serie animada "Rick and Morty". Utilicé una amplia gama de
        tecnologías y herramientas para llevar a cabo esta emocionante tarea.
        Entre ellas se encuentran:
      </p>
      <ul className={style.imagesList}>
        {techSkills.map((skill, index) => (
          <li className={style.images} key={index}>
            <img src={skill.image} alt={skill.tech} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
