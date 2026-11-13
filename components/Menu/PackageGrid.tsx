import { MenuPackage } from "@/lib/content";
import PackageCard from "./PackageCard";
import styles from "./PackageGrid.module.scss";

export default function PackageGrid({ items }: { items: MenuPackage[] }) {
  return (
    <div className={styles.grid}>
      {items.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </div>
  );
}
