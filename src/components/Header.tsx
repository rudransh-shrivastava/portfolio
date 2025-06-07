import Image from "next/image";

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
        <h1 className="text-xl font-bold">Rudransh Shrivastava</h1>
        <p className="text-l text-gray-200">Software Engineer</p>
      </div>
    </header>
  );
}
