import Image from "next/image";

export interface TechItemProps {
  altName?: string | undefined;
  logoPath?: string | undefined;
}

export default function TechItem({ altName, logoPath }: TechItemProps) {
  return (
    <div className="hover:scale-125 transition-all hover:-translate-y-6">
      <Image
        className="w-50 h-50  rounded-full"
        src={logoPath ? logoPath : "/icons/default_tech.png"}
        alt={altName ? altName : "service"}
        width={50}
        height={50}
      />
    </div>
  );
}
