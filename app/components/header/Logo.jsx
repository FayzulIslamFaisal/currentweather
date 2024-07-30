import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          className="h-9"
          width={108}
          height={36}
          src="/assets/logo.svg"
          alt="Weather App"
        />
      </Link>
    </>
  );
};

export default Logo;
