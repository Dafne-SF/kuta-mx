/* eslint-disable @next/next/no-sync-scripts */
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import Image from "next/image";
import { DynamicTitle } from "../DynamicTitle/dynamicTitle";

export default function SocialMedia() {
  return (
    <section className="px-5 py-10 sm:px-7 sm:py-7 md:px-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between mb-3 md:mb-6">
          <div>
            <DynamicTitle namespace={"SocialMedia"} translationKey={"title"}/>
          </div>
          <div className="flex flex-row gap-x-3 invisible md:visible">
            <a
              href="https://www.facebook.com/people/Kuta-Mx/61556841081748/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                alt="Facebook"
                style={{ width: "52px", height: "52px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/kutamx?igsh=MXNvb2V5ZGF1N3lpaQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt={"Instagram"}
                style={{ width: "52px", height: "52px" }}
              />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="//lightwidget.com/widgets/f84cca06d4fa57ca880793933996c1a5.html"
            scrolling="no"
            allowTransparency
            className="lightwidget-widget"
            style={{width:"100%",border:0,overflow:"hidden", outline: "none"}}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
