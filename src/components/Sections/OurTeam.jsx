import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import hp from "../../assets/img/Hall Council/current/Divakar Chauhan.jpg";
import ssm from "../../assets/img/Hall Council/current/Dhruv Singhal.jpg";
import tech2122 from "../../assets/img/Hall Council/current/Aditya Verma.jpg";
import socult2122 from "../../assets/img/Hall Council/current/Nishant gahlaut.jpg";
import sports2122 from "../../assets/img/Hall Council/current/Nitin Baghel.jpg";
import alumni2122 from "../../assets/img/Hall Council/current/Aditya Agrawal.jpg";
import nithin from "../../assets/img/Hall Council/websecs/nithin.jpg";
import chaitanya from "../../assets/img/Hall Council/websecs/chaitanya.jpg";
import ayashkanta from "../../assets/img/Hall Council/websecs/ayashkanta.jpg";
import praneeth from "../../assets/img/Hall Council/praneeth.jpg";
import kaushik from "../../assets/img/Hall Council/kaushik.jpg";
import "../../style/Card.css";
import "../../style/index.css";

const OurTeam = () => {
  return (
    <>
      <div className="head">
        <h2 className="text">Our Team</h2>
      </div>
      {/* <div className=" row justify-content-center">


                <Card2
                  img={kaushik}
                  name="Raghavendra Kaushik"
                  position="Advisor"
                  fb="https://www.facebook.com/raghavendra.kaushik.3"
                  linkedin="https://www.linkedin.com/in/raghavendra-kaushik13/"
                />
              </div> */}

      <div
        className=" row justify-content-center"
        style={{ textAlign: "left" }}
      >
        <Card2
          img={alumni2122}
          name="Aditya Agrawal"
          position="Coodinator"
          fb="https://www.facebook.com/adityaagrawal.99/"
          linkedin="https://www.linkedin.com/in/adityaagrawal99/"
        />
        <Card2
          img={tech2122}
          name="Aditya Verma"
          position="Coordinator"
          fb="https://www.facebook.com/profile.php?id=100005749835976"
          linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
        />

        <Card2
          img={praneeth}
          name="Praneeth Reddy"
          position="Coordinator"
          fb="https://www.facebook.com/praneeth.reddy.3557440/about_contact_and_basic_info"
          linkedin="https://www.linkedin.com/in/praneethrdy/"
        />
      </div>

      <div className="row justify-content-center">
        <Card2
          img={nithin}
          name="Nithin Siriguppa"
          position="Web Secretary"
          fb="https://www.facebook.com/nithin.siriguppa"
          linkedin="https://www.linkedin.com/in/siriguppa-naga-nithin-3a9bba211/"
        />
        <Card2
          img={chaitanya}
          name="Chaitanya Dhuware"
          position="Web Secretary"
          fb="https://www.facebook.com/profile.php?id=100058376985398"
          linkedin="https://www.linkedin.com/in/chaitanya-dhuware/"
        />
        <Card2
          img={ayashkanta}
          name="Ayashkanta Mishra"
          position="Web Secretary"
          fb="https://www.facebook.com/ayashkanta.mishra.7"
          linkedin="https://www.linkedin.com/in/ayashkanta-mishra-15a368220/"
        />
      </div>
    </>
  );
};

export default OurTeam;
