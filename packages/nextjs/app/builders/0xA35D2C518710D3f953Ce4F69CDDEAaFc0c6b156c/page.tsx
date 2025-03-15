"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

const Web3Profile = () => {
  const name = "Joseph Aleonomoh";
  const nickname = "LEO";
  const description =
    "Hello! I’m a dedicated blockchain and AI enthusiast with a strong interest in decentralized technologies and their applications. My experience includes working on DeFi projects, developing smart contracts, and exploring AI-driven solutions. I’m passionate about continuous learning and collaboration, and I’m always excited to connect with others who share my interests. If you’d like to discuss ideas, collaborate on projects, or simply exchange knowledge, I’d love to hear from you!";
  const walletAddress = "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c";
  const avatarUrl =
    "https://static.vecteezy.com/system/resources/previews/002/469/825/non_2x/black-and-white-line-art-of-the-front-of-the-lion-head-it-is-sign-of-leo-zodiac-good-use-for-symbol-mascot-icon-avatar-tattoo-t-shirt-design-logo-or-any-design-free-vector.jpg";

  const socialLinks = [
    {
      platform: "twitter",
      url: "https://x.com/easybrane",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1024px-X_icon_2.svg.png",
    },
    {
      platform: "github",
      url: "https://github.com/leojay-net",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/joseph-aleonomoh/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      platform: "BuidlGuidl",
      url: "https://app.buidlguidl.com/builders/0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c",
      icon: "https://pbs.twimg.com/profile_images/1742235046038114304/xKk0nNN0_400x400.jpg",
    },
  ];
  const [copied, setCopied] = useState(false);

  const truncateAddress = (address: string) => address.slice(0, 6) + "..." + address.slice(-4);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Avatar and Name Section */}
      <div className="px-6 md:px-10 py-8">
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg overflow-hidden">
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Name and Wallet Address */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-2xl font-bold">
              {name} <span className="text-gray-500 text-lg">{nickname}</span>
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-blue-600 flex items-center">
                <span>{truncateAddress(walletAddress)}</span>
                <button
                  onClick={() => copyToClipboard(walletAddress)}
                  className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Copy wallet address"
                >
                  {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
                </button>
              </div>
              <a
                href={`https://etherscan.io/address/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="px-6 md:px-10 pb-6">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold mb-3 text-blue-600 ">About</h2>
          <p className="text-gray-700 leading-relaxed mx-auto max-w-2xl text-justify">{description}</p>
        </div>
      </div>

      {/* Socials Section */}
      <div className="px-6 md:px-10 pb-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-blue-600 text-center">Connect</h2>
          <div className="flex gap-3 mx-auto max-w-xs justify-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="w-10 h-10 bg-white-200 rounded-lg flex items-center justify-center text-gray-700 hover:scale-150 transition-transform duration-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.platform} profile`}
              >
                <img src={link.icon} alt={link.platform} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Profile;
