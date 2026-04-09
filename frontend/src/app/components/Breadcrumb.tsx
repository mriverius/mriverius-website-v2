import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm self-start flex-wrap">
      <Link href="/" className="text-cyan/60 hover:text-cyan transition-colors">
        Inicio
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-foreground/30">/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="text-cyan/60 hover:text-cyan transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground/70">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
