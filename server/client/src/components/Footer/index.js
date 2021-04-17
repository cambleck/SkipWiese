import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer white">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="black-text">Skip Wiese</h5>
            <p class="black-text text-lighten-4">Waukegan, Illinois</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="black-text text-lighten-3"
                  href="https://deerpathartleague.org/"
                >
                  Deer Path Art League
                </a>
              </li>
              <li>
                <a
                  class="black-text text-lighten-3"
                  href="https://www.dandeliongallery.org/"
                >
                  Dandelion Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container black-text">
          © 2021 Skip Wiese Studio LLC
          <a
            class="black-text text-lighten-4 right"
            href="mailto:info@skipwiese.com"
          >
            info@skipwiese.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
