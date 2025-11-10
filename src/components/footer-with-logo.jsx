import React from "react";

/*}
import logo from "../images/KWB_Raak_simpel_rood.png";
import { ReactComponent as FacebookIcon } from "../images/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "../images/social/instagram.svg";
import { ReactComponent as EnvelopeIcon } from "../images/social/envelope.svg";
*/

import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useCurrentBuildDate } from "../hooks/use-current-build-date";

const FooterWithLogo = () => {
  const  currentDate = useCurrentBuildDate();

  const date = new Date(currentDate).toLocaleString("nl-BE", {
    dateStyle: "full",
    timeStyle: "short",
  });


  return (
    <footer className="w-full footer py-12 pt-24  px-8 bg-theme-contrast-bg text-theme-contrast-text">
        
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <Typography variant="h5" className="mb-2">
            KWB Merchtem
          </Typography>
          <Typography className="text-sm">
            Samen beleven, verbinden en groeien. Ontdek onze activiteiten en nieuws.
          </Typography>
        </div>

        <div>
          <Typography variant="h6" className="mb-4">
            Navigatie
          </Typography>
          <ul className="space-y-2 text-sm text-theme-contrast-link hover:text-theme-contrast-link-hover">
            <li><a href="activiteiten" className="hover:text-theme-contrast-link-hover" >Activiteiten</a></li>
            <li><a href="/corrida" className="hover:text-white">Corrida</a></li>
            <li><a href="/nieuws" className="hover:text-white">Nieuws</a></li>
            <li><a href="/kleine-raken" className="hover:text-white">Kleine Raak</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <Typography variant="h6" className="mb-4 text-white">
            Volg ons
          </Typography>
          <div className="flex flex-col items-start gap-6 space-y-3 ">
            <IconButton variant="text" color="white" ripple={false}>
              <a href="https://www.facebook.com/kwbmerchtem" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Facebook icon</title>
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/>
                </svg>
              </a>
            </IconButton>
            <IconButton variant="text" color="white" ripple={false}>
              <a href="https://www.instagram.com/kwbmerchtem" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </IconButton>
            <IconButton variant="text" color="white" ripple={false}>
              <a href="mailto:info@kwbmerchtem.be">
                <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </IconButton>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-gray-700 pt-6 text-center text-sm text-blue-gray-400">
        © 2025 KWB Merchtem. Alle rechten voorbehouden.
        <p>
          Laatste update: {date || 'onbekend'}
        </p>
      </div>
      
    </footer>
  );
}

export default FooterWithLogo;
