function Nav1() {
  return (
    <div className="container">
      <div>
        <nav>
          <img src="/images/logo.png" alt="logo" />
        </nav>
        <div className="Contact">
          <h1>CONTACT US</h1>
          <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
          </div>
          <div className="contact-detail">
            <div className="detail">
              <div className="btn1">
                <button>VIA SUPPORT CHAT</button>
                <button>VIA CALL</button>
              </div>
              <div className="btn2">
                <button>VIA EMAIL FORM</button>
              </div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="text-message" id="msg" />
            </div>
            <div className="contact-img">
              <img src="/images/contact.svg" alt="logo" />
            </div>
          </div>
      
      </div>
    </div>
  );
}
export default Nav1;
