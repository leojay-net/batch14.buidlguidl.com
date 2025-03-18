import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";

export default function BuilderProfile() {
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

            <h1 className="text-4xl font-bold">Huilén</h1>

            <Address address="0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7" />

            <p className="text-center text-lg break-words break-all">
              I&apos;m 23 years old, I&apos;m from Argentina and I&apos;m currently working as a Frontend Developer for
              a startup, as well as studying Publishing and Computer Engineering. I got into Web3 not long ago but
              I&apos;m loving this journey!
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/huilenc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="https://api.iconify.design/tabler:brand-github.svg"
                  alt="Github"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://x.com/huicanu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="https://api.iconify.design/tabler:brand-x.svg"
                  alt="x"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://linkedin.com/in/huilenc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="https://api.iconify.design/tabler:brand-linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
