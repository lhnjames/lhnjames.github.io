import Image from "next/image";

export function WorkIllustration({ name, alt }: { name: string; alt: string }) {
  return (
    <Image
      className="work-illustration"
      src={`/research-sketches/${name}.svg`}
      width={640}
      height={427}
      alt={`Conceptual illustration: ${alt}`}
      unoptimized
    />
  );
}
