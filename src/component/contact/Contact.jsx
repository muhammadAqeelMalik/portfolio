import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhiqaw7",
        "template_ztp060b",
        form.current,
        "glC34X-Y9RqHJAN2S"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact_option_icon" />

            <h4>Email</h4>
            <h5>aqeel3897450@gmail.com</h5>
            <a href="mailto:aqeel3897450@gmail.com" target="_blank">
              Send a messages
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>aqeel3897450@gmail.com</h5>
            <a href="mailto:aqeel3897450@gmail.com" target="_blank">
              Send a messages
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact_option_icon" />
            <h4>WhatsApps</h4>
            <h5>aqeel3897450@gmail.com</h5>
            <a href="mailto:aqeel3897450@gmail.com" target="_blank">
              Send a messages
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="text" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your messages"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
