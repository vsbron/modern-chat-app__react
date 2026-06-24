import { SITE_NAME } from "../../utils/constants";
import "./closedChat.css";

function ClosedChat() {
  return (
    <>
      <div className="closed-chat">
        <div className="closed-chat__message">
          <h2>Welcome to the {SITE_NAME}</h2>
          <p>
            We&apos;re thrilled to have you here! The {SITE_NAME} is your
            go-to platform for connecting with friends, family, and colleagues.
            Whether you&apos;re catching up with old friends or meeting new
            ones, this app is designed to make your conversations seamless, fun,
            and secure.
          </p>
          <p>
            Our chat platform allows you to exchange messages, share your
            favorite images, and send other files with ease. The intuitive
            design ensures that you can focus on the conversation while the app
            takes care of the rest.
          </p>
          <p>
            To get started, simply select an existing chat from the list or
            search for a new user using their Username or Email address and
            start chatting!
          </p>
        </div>
        <div className="closed-chat__copyright">
          <img src="/mca-logo.svg" alt="MCA Logo" title={SITE_NAME} />
          <span>
            Built by VSBroN as a portfolio project
            <br />
            This project is available on{" "}
            <a
              href="https://github.com/vsbron/react2024-modern-chat-app"
              target="_blank"
            >
              GitHub
            </a>
            <br />© 2024. All rights reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default ClosedChat;
