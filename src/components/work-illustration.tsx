import Image from "next/image";

export function WorkIllustration({ name, alt }: { name: string; alt: string }) {
  return (
    <Image
      className="work-illustration"
      src={`/research-sketches/${name}.svg?v=2`}
      width={600}
      height={440}
      alt={`Conceptual illustration: ${alt}`}
      unoptimized
    />
  );
}
