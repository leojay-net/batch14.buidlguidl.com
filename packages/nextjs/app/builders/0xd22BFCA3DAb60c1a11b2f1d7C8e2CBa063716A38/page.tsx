import Image from "next/image";
import { Address } from "../../../components/scaffold-eth/Address/Address";
import { NextPage } from "next";
import { FaGithub } from "react-icons/fa";

const address = "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38";
const githubUrl = "https://github.com/0xSl0th";

const EnriqueProfile: NextPage = () => {
  return (
    <div className="max-w-[600px] mx-auto p-5 font-sans text-center dark:text-white text-gray-800">
      <h1 className="mb-5 text-3xl dark:text-white text-gray-800">My BuidlGuidl Profile: 0xsl0th</h1>

      <div className="flex justify-center mb-5">
        <Image
          src="/builders/0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38/avatar.jpg"
          alt="Profile Avatar"
          width={100}
          height={100}
          className="rounded-full border-2 dark:border-white border-gray-400"
        />
      </div>

      <div className="mb-5 flex justify-center">
        <Address address={address} size="base" />
      </div>

      <div className="mb-14">
        <h2 className="text-2xl mb-4 dark:text-gray-300 text-gray-600">About Me</h2>
        <div className="whitespace-pre-wrap break-words leading-7 text-base text-center dark:text-white text-gray-800">
          <div className="mb-5">
            I come from a business background in tech and currently doing a masters in finance. My main interests
            revolve around DeFi protocols and exploring self-sovereignty concepts.
          </div>
          <div className="mb-5">
            I have some foundational knowledge in IT security (around OSCP level) and algorithmic trading experience and
            am currently working through the Cyfrin Updraft courses and taking my first steps into security auditing on
            CodeHawks.
          </div>
          <div>
            My ultimate goal is to establish myself as a security auditor in the blockchain space. Looking forward to
            building and learning alongside all of you!
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 no-underline flex items-center hover:underline"
        >
          <FaGithub size={24} className="dark:text-white text-gray-800" />
        </a>
      </div>
    </div>
  );
};

export default EnriqueProfile;
