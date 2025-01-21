import Image from "next/image";

interface PromoBannerProps {
  source: string;
  alt: string;
}

const PromoBanner = ({ source, alt }: PromoBannerProps) => {
  return (
    <Image
      src={source}
      alt={alt}
      width={0}
      height={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
    />
  );
};

export default PromoBanner;
