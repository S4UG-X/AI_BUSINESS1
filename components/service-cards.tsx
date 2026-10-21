import type { Service } from "@/lib/site-config";
import { ServiceCard } from "@/components/service-card";
import "./service-cards.css";

export function ServiceCards({
  title,
  subtitle,
  services,
}: {
  title: string;
  subtitle: string;
  services: Service[];
}) {
  return (
    <div className="service-category">
      <div className="service-category-heading">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <ul className="service-card-grid">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </ul>
    </div>
  );
}
