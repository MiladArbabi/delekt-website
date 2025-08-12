"use client";

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  event?: string;
  eventProps?: Record<string, string | number | boolean | null>;
}>;

export default function TrackLink({
  href,
  className,
  target,
  rel,
  ariaLabel,
  event,
  eventProps,
  children,
}: Props) {
  const handleClick = () => {
    window.plausible?.(event ?? "Click", { props: eventProps });
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}