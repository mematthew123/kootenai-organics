import Section from "@/animations/section";
import SectionRight from "@/animations/sectionRight";
import SectionUp from "@/animations/sectionUp";
import { CameraIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { Fraunces, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
  weight: "200",
});

const inter = Fraunces({
  subsets: ["latin"],
  style: "normal",
  variable: "--font-fraunces",
  weight: "900",
});

interface ContentProps {
  title: string;
  description: any;
}

export default function Content() {
  const [contentData, setContentData] = useState<ContentProps | null>(null);

  useEffect(() => {
    const query = `*[_type == "content"]{
      title,
      description
    }`;
    client.fetch(query).then((contentData) => setContentData(contentData[0]));
  }, []);

  if (!contentData) return <div>Loading...</div>;

  return (
    <div className="bg-[#E9EDC9] mt-20 lg:mt-40 flex flex-col lg:flex-row items-center p-4 lg:p-10 space-y-4 lg:space-y-0 lg:space-x-4 lg:w-[1100px] max-w-full mx-auto mb-20 rounded-md overflow-hidden shadow-lg border border-gray-200">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h3
              className={`${inter.className} mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl`}
            >
              {contentData.title}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://cdn.sanity.io/images/e8eui0th/production/43ebcc1916e9fcbc992f9ba0ccb90ad287e00bc7-3257x2171.jpg?w=2000&fit=max&auto=format&dpr=2"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-600">
                  <CameraIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <SectionUp>

                <p className=" font-poppins mx-auto max-w-prose text-gray-600 text-large font-light lg:max-w-none"
                >
                  <PortableText value={contentData.description} />
                </p>
              {/* </div> */}
            </SectionUp>
          </div>
        </div>
      </div>
    </div>
  );
}
