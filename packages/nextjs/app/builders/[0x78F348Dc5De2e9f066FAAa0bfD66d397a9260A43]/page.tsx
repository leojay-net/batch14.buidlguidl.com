import Image from "next/image";
import { NextPage } from "next";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  { icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/Tejas-Sands", name: "GitHub" },
  { icon: <FaXTwitter className="h-6 w-6" />, url: "https://x.com/11cyth", name: "Twitter" },
];

const SandsPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-20 px-4 dark:from-sky-700">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-40 transition-opacity" />
            <Image
              src="/0x7.jpg"
              alt="Tejas-Sands"
              width={500}
              height={300}
              className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-serif dark:text-blue-300">Tejas Sandwar</h1>
          <p className="text-xl text-gray-600 mb-6 dark:text-blue-300">
            currently learning and experimenting with Hardhat, Ethers.js, and Next.js to create full-stack Web3
            applications.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 dark:bg-cyan-950">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <EnvelopeIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-sm font-semibold text-gray-500 mb-1 dark:text-sky-500">Email</h3>
              <p className="text-gray-700 dark:text-sky-600">tsandwar@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <MapPinIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-sm font-semibold text-gray-500 mb-1 dark:text-sky-500">Location</h3>
              <p className="text-gray-700 dark:text-sky-600">Jharkhand, India</p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="prose prose-lg text-gray-600 mx-auto mb-16  dark:text-blue-400">
          <p className="text-center leading-relaxed">
            I am skilled in Next.js and backend development, now transitioning into Web3 to build decentralized
            applications. Currently, I am learning Solidity, smart contracts, and blockchain integrations to expand my
            expertise. My goal is to combine my existing skills with blockchain technology to create secure and
            innovative Web3 solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-blue-600 transition-all duration-300"
            >
              <span className="sr-only">{link.name}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SandsPage;
