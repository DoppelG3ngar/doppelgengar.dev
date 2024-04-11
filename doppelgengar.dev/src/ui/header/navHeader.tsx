import styles from "./navHeader.module.css";
import { clsx } from "clsx";

export const NavHeader = ({
  isActive,
  children,
  href,
}: {
  isActive: boolean;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div>
      <a
        className={clsx(`${styles.nav} pt-2`, isActive && styles.active)}
        href={href}
      >
        <span className="text-highlight">#</span>
        {children}
      </a>
    </div>
  );
};
