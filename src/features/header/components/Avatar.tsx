import Image from "next/image";

const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="w-8 h-8 aspect-square rounded-full overflow-hidden ring-1 bg-gray-100 ring-gray-300">
      <Image alt="Avatar" width={80} height={80} src={image} />
    </div>
  );
};

export default Avatar;
