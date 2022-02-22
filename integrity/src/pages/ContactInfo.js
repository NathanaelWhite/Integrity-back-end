import React from "react";
import {
  WrapperCompanyInfo,
  CompanyName,
  WrapperList,
} from "../styles/Contact.styled";

const ContactInfo = () => (
  <WrapperCompanyInfo>
    <CompanyName>Contact Info</CompanyName>
    <WrapperList>
      <li>1501 Hogan Ln Waco, TX 76705</li>
      <li>test@gmail.com</li>
      <li>website link</li>
    </WrapperList>
    <WrapperList>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.3918381964754!2d-97.11345978484755!3d31.59572128134484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864f82bed3199003%3A0x7af553e731dc5deb!2s1501%20Hogan%20Ln%2C%20Waco%2C%20TX%2076705!5e0!3m2!1sen!2sus!4v1645490767559!5m2!1sen!2sus"
        width="400"
        height="400"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        title="integrity-gym"
      ></iframe>
    </WrapperList>
  </WrapperCompanyInfo>
);

export default ContactInfo;
