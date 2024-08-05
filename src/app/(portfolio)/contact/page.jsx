import HocWraper from "../_components/hoc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import Links from "./links";
import Email from "./email";
import Number1 from "./number";

const ContactPage = () => {
  return (
    <HocWraper>
      <section className="flex flex-col w-full max-w-[1400px] h-fit md:pl-6 m-auto gap-6 ">
        <Links
          icon={<FaLinkedin />}
          name="linkdin"
          linkName="/in/hosein-saeed-b21077275/"
          link="https://www.linkedin.com/in/hosein-saeed-b21077275/"
        />
        <Links
          icon={<FaGithub />}
          name="github"
          linkName="/saeed00014"
          link="https://github.com/saeed00014"
        />
        <Email
          icon={<MdOutlineMail />}
          name="email"
          linkName="saeedm00014@gmail.com"
          link="saeedm00014@gmail.com"
        />
        <Number1
          icon={<FaSquarePhone />}
          name="number"
          linkName="0901 027 6284"
          link=""
        />
      </section>
    </HocWraper>
  );
};

export default ContactPage;
