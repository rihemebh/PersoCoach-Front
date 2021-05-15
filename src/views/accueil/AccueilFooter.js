import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function AccueilFooter() {
  return (
    <footer className="footer footer-black footer-white" style={{backgroundColor:'#51BCDA'}}>
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Terms and privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by PersoCoach Team.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default AccueilFooter;