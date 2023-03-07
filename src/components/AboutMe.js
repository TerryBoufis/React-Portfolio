import profilePicture from "../assets/ProfilePicture.jpg"

function AboutMe() {
  return (
    <div id="aboutMe">
      <img src={profilePicture}/>
      <h2>Hi, I'm Terry!</h2>
      <p>
        I have recently completed Butler University's Full Stack Developer
        program. I previously completed my ungraduate degree through Purdue
        University.</p> 
      <p>I currently work in the commercial banking sector. I am
        looking to use the new skills that I have learned, to be able to apply
        for new career opportunities. I have extensive experience in using a
        variety of different analytic and data software such as Microsoft
        Office, SPSS, SAS, Visio, and Tableau. I am currently learning how to
        utilize JavaScript, SQL, AWS, Express, and React. With my background in
        these fields, I would be able to effectively collect, organize, and
        manage any data that would be needed in current and future projects. I
        consider myself to be a very determined and reliable person, who can
        work and communicate well with others. I also have banking experience
        interacting directly with customers and actively engaging with the
        community to identify and bring in potential clients. I am familiar with
        general banking and financial terms and procedures. I have first-hand
        experience collecting and detailing customer feedback regarding bank app
        and website functionality, as well as, instructing customers on how to
        use and familiarize themselves with them.
      </p>
    </div>
  );
}

export default AboutMe;
