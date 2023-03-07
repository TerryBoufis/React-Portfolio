import resumePdf from "../assets/TerryBoufis_Resume.pdf";

function Resume (){
    return (<div id="resume-container" >
        <iframe src= {resumePdf} width={"100%"} height={"100%"}></iframe>
        {/* <a id="resumeBtn"
        href={process.env.PUBLIC_URL + "/TerryBoufis_Resume.pdf"}
        download={"TerryBoufis_Resume.pdf"}
      >
          <button>Download file</button>
      </a> */}
      </div>)
   }
   


   export default Resume;