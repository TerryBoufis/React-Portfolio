import BookReviews from "../assets/BookReviews.jpg";
import list from "../assets/List.jpg";
import recipeBook from "../assets/RecipeBook.jpg";
import website from "../assets/Website.jpg";
import password from "../assets/Password.jpg";
import weather from "../assets/Weather.jpg";

const projects = [
  {
    title: "Review-for-Days",
    image: BookReviews,
    github: "https://github.com/Hayek23/Reviews-For-Days",
    deployed: "https://reviews-for-days.herokuapp.com/",
  },
  {
    title: "Subscription Track",
    image: list,
    github: "https://github.com/TerryBoufis/Subscription-Tracks",
    deployed: "https://subscription-tracks.herokuapp.com/login",
  },
  {
    title: "Dine-and-Wine",
    image: recipeBook,
    github: "https://github.com/TerryBoufis/Dine-and-Wine-App",
    deployed: "https://terryboufis.github.io/Dine-and-Wine-App/",
  },
  {
    title: "Website Example",
    image: website,
    github: "https://github.com/TerryBoufis/HomeWork1",
    deployed: "https://terryboufis.github.io/HomeWork1/",
  },
  {
    title: "Password Generator",
    image: password,
    github: "https://github.com/TerryBoufis/challenge3",
    deployed: "https://terryboufis.github.io/challenge3/",
  },
  {
    title: "Weather Dashboard",
    image: weather,
    github: "https://github.com/TerryBoufis/WeatherDashboard",
    deployed: "https://terryboufis.github.io/WeatherDashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <section id="Work" className="Work">
        <h2>Work</h2>
      </section>
      <section id="container" className="container">
        {projects.map((project) => {
          return (
            <div className="box">
              {project.title}
              <a href={project.deployed} target="_blank"><img src={project.image} alt={project.title} /></a>
              <a href={project.github} target="_blank">Link to GitHub Repo</a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Portfolio;
