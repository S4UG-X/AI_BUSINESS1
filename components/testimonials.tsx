import Image from "next/image";
import { trustedCompanies } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section
      className="section trusted-by-section"
      id="testimonials"
      aria-labelledby="trusted-by-heading"
    >
      <div className="container">
        <h2 className="trusted-by-heading" id="trusted-by-heading">
          Trusted <em>by</em>
        </h2>
        <ul className="trusted-company-grid">
          {trustedCompanies.map((company) => (
            <li className="trusted-company" key={company.id}>
              <Image
                src={company.logo}
                alt={`${company.companyName} logo`}
                sizes="(max-width: 760px) 280px, (max-width: 1100px) 25vw, 280px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
