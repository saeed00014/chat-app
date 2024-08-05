import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center w-fit font-primary md:text-5xl text-4xl md:gap-3 gap-2"
    >
      <Image
        width={50}
        height={50}
        alt="profile"
        src="/profile.png"
        className="rounded-full md:w-[50px] md:h-[50px] w-[43px] h-[43px]"
      />
      <span>Saeed</span>
    </Link>
  );
};

export default Logo;
