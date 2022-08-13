import React from "react";
import phone from '../images/bxs_phone.svg'
import email from '../images/entypo_email.svg'
import website from '../images/dashicons_email.svg'
import IconWithSubtitle from "../components/IconWithSubtitle";

function Contact() {
  const items = [
    { text: "+91 - 9575900594", icon: `${phone}` },
    { text: "pranshunayak566@gmail.com", icon: `${email}` },
    { text: "http://portfolio-pranshunayak.herokuapp.com/", icon: `${website}` },
  ];
  const style = {
    backgroundColor: "#DDA7A7",
    borderRadius: "20px",
    padding: "10px",
  };
  return (
    <div className="col-12 my-5 " id="contact">
      <div className="row justify-content-center align-items-center">
        <div className="col-7 text-center h3">
            Contact
        </div>
        <p className="col-7 text-center">
            For any assistance contact us at these endpoints. Queries are usually resolved
            within 7 working days but due to heavy occupany it may be delayed . We request your
            patience for the same. Trying our best ❤️❤️
        </p>
        <div className="col-7">
          <div className="row justify-content-center align-items-center">
            {
              items.map((item)=>(
                <div className="col-4">
                  <IconWithSubtitle item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
