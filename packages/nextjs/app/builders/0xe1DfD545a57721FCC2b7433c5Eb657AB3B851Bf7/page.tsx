import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const HuilenProfile: NextPage = () => {
  const size = { width: 32, height: 32 };

  const iconStyle = "w-8 h-8";

  const anchorStyle = "text-2xl hover:scale-110 transition-all duration-300";

  const icons = [
    {
      anchorUrl: "https://github.com/huilenc",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-github.svg",
      iconAlt: "Github",
      iconStyle,
    },
    {
      anchorUrl: "https://x.com/huicanu",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-x.svg",
      iconAlt: "x",
      iconStyle,
    },
    {
      anchorUrl: "https://linkedin.com/in/huilenc",
      anchorStyle,
      iconUrl: "https://api.iconify.design/tabler:brand-linkedin.svg",
      iconAlt: "linkedin",
      iconStyle,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-base-100 rounded-lg shadow-xl p-8">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="https://avatars.githubusercontent.com/u/31843278?s=400&u=e11dfd17649cf868c737ff5fc526d88a55d5eb1d&v=4"
              alt="Huilen's Avatar"
              className="w-32 h-32 rounded-full"
              width={128}
              height={128}
            />

            <h1 className="text-4xl font-bold">Huilén Canullán</h1>

            <Address address="0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7" />

            <p className="text-center text-lg break-words break-all">
              I&apos;m 23 years old, I&apos;m from Argentina and I&apos;m currently working as a Frontend Developer for
              a startup, as well as studying Publishing and Computer Engineering. I got into Web3 not long ago but
              I&apos;m loving this journey!
            </p>

            <div className="flex space-x-4">
              {icons.map(icon => {
                return (
                  <a
                    href={icon.anchorUrl}
                    key={icon.iconAlt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={icon.anchorStyle}
                  >
                    <Image
                      src={icon.iconUrl}
                      alt={icon.iconAlt}
                      width={size.width}
                      height={size.height}
                      className={icon.iconStyle}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuilenProfile;
