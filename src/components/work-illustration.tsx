import Image from "next/image";

export function WorkIllustration({ name, alt }: { name: string; alt: string }) {
  return (
    <Image
      className="work-illustration"
      src={`/research-art/${name}.webp`}
      width={640}
      height={427}
      alt={`Conceptual illustration: ${alt}`}
      unoptimized
    />
  );
}
