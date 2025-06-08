import Image from "next/image";
import SocialIcons from "./SocialIcons";
import AnimatedWrapper from "./AnimatedWrapper";

export default function Header() {
  return (
    <header className="flex flex-row items-center gap-4 my-4">
      <div className="w-32 h-32 rounded-md overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Profile Photo"
          width={128}
          height={128}
        />
      </div>

      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Rudransh Shrivastava</h1>
        <p className="text- text-gray-200">Software Engineer</p>
        <div>
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}
