import Contact from "./Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Chris M. - Web Developer",
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
