import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CertificateCardProps {
  title: string;
  company: string;
  href: string;
  logoUrl: string;
  dates: string;
}

export const CertificateCard: FC<CertificateCardProps> = ({
  title,
  company,
  href,
  logoUrl,
  dates,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-background">
      <div className="flex items-start gap-4 p-4">
        <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-md">
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
          <p className="text-xs text-muted-foreground">{dates}</p>
        </div>
      </div>
      <div className="mt-auto flex justify-start p-4 pt-0">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          View Certificate
        </Link>
      </div>
    </div>
  );
};
