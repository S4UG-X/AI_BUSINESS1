import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  Clock3,
  FileCheck2,
  Globe2,
  Handshake,
  MessageCircle,
  MessageSquareText,
  Users,
  Workflow,
  Repeat2,
  Plus,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { DemoLab } from "@/components/demo-lab";
import {
  automationServices,
  faqs,
  marketingServices,
  processSteps,
  siteConfig,
  trialPolicy,
} from "@/lib/site-config";
import { getSiteUrl } from "@/lib/site-url";
import { BrandMark } from "@/components/brand-mark";
import { ServiceCards } from "@/components/service-cards";
import { Testimonials } from "@/components/testimonials";
import { ProcessJourney } from "@/components/process-journey";

export const metadata: Metadata = {
  ...(getSiteUrl() ? { alternates: { canonical: "/" } } : {}),
};

export default function Home() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    ...(siteUrl ? { url: siteUrl.href } : {}),
    areaServed: { "@type": "Country", name: "United States" },
    ...(!siteConfig.phone.isPlaceholder
      ? { telephone: siteConfig.phone.href.replace("tel:", "") }
      : {}),
    ...(siteConfig.socials.length
      ? { sameAs: siteConfig.socials.map((social) => social.href) }
      : {}),
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-background" aria-hidden="true">
            <Image
              src={siteConfig.images.hero}
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-dot" /> BUILT FOR LOCAL BUSINESSES
              </p>
              <h1 id="hero-heading">
                AI that keeps your Business <em>moving.</em>
              </h1>
              <p className="hero-description">
                Less busywork. Better follow-through. Practical AI automation
                and marketing, built around your business.
              </p>
              <div className="hero-actions">
                <a className="button" href="#contact">
                  Request a consultation{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="text-link" href="#demos">
                  Explore the demos <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="container foundation-bar">
            <span>
              <Workflow size={17} aria-hidden="true" /> Built around your
              workflow
            </span>
            <span>
              <Handshake size={17} aria-hidden="true" /> Practical pricing.
              Personal support.
            </span>
            <span>
              <Globe2 size={17} aria-hidden="true" /> {siteConfig.serviceArea}
            </span>
          </div>
        </section>

        <section
          className="section problem-section"
          aria-labelledby="problem-heading"
        >
          <div className="container problem-layout">
            <div className="problem-copy">
              <p className="eyebrow">YOUR EXPERTISE. LESS REPETITION.</p>
              <h2 id="problem-heading">
                You handle the comfort.
                <br />
                <em>We’ll handle the busywork.</em>
              </h2>
              <p>
                AI handles missed calls, paperwork, and follow-ups. Your team
                focuses on skilled work and critical decisions.
              </p>
              <a className="text-link" href="#services">
                Find your starting point{" "}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="workflow-panel">
              <div className="workflow-panel-top">
                <span className="eyebrow">A BETTER EVERYDAY FLOW</span>
                <span className="workflow-live">
                  <span className="status-dot" /> One flow
                </span>
              </div>
              <ol className="workflow-steps">
                {[
                  {
                    icon: MessageCircle,
                    name: "Inquiry",
                    detail: "Catch the request",
                  },
                  {
                    icon: CalendarCheck2,
                    name: "Booking",
                    detail: "Make a plan",
                  },
                  {
                    icon: FileCheck2,
                    name: "Service",
                    detail: "Do your best work",
                  },
                  { icon: Repeat2, name: "Follow-up", detail: "Keep in touch" },
                ].map((step, i) => (
                  <li key={step.name}>
                    <span className="workflow-node">
                      <step.icon
                        size={22}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <strong>{step.name}</strong>
                    <span>{step.detail}</span>
                    {i < 3 && (
                      <ArrowRight
                        className="workflow-arrow"
                        size={16}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
              <div className="workflow-panel-bottom">
                <Check size={14} aria-hidden="true" /> Fewer loose ends, from
                the first hello to the next visit.
              </div>
            </div>
          </div>
        </section>

        <section
          className="section services-section"
          id="services"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SMALL CHANGES. USEFUL POSSIBILITIES.</p>
                <h2 id="services-heading">
                  Less on your plate.
                  <br />
                  <em>More behind your business.</em>
                </h2>
              </div>
              <p>
                From the first call to the next season.{" "}
                <br />
                Choose the support that fits your team.
              </p>
            </div>
            <p className="services-pricing-note">
              Starting prices shown below. Final pricing depends on scope and usage.
            </p>
            <div className="service-categories">
              <ServiceCards
                title="AI automation"
                subtitle="The everyday work, working smarter."
                services={automationServices}
              />
              <ServiceCards
                title="Marketing & growth"
                subtitle="Stay visible. Stay in touch."
                services={marketingServices}
              />
            </div>
            <div className="services-footnote">
              <span>
                <Check size={15} aria-hidden="true" /> No one-size-fits-all
                packages. We start with your business.
              </span>
              <a className="text-link" href="#contact">
                Let’s find the right fit{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="benefits-section"
          aria-labelledby="benefits-heading"
        >
          <div className="container benefits-inner">
            <div className="benefits-intro">
              <p className="eyebrow">BUILT TO MAKE ROOM</p>
              <h2 id="benefits-heading">
                Good for your day.
                <br />
                <em>Good for your business.</em>
              </h2>
            </div>
            <div className="benefits-grid">
              {[
                {
                  icon: Clock3,
                  title: "Time back",
                  text: "Spend less of your day on repeat.",
                },
                {
                  icon: MessageSquareText,
                  title: "Faster replies",
                  text: "Be there when customers reach out.",
                },
                {
                  icon: Workflow,
                  title: "Less manual work",
                  text: "Give the routine a reliable system.",
                },
                {
                  icon: Users,
                  title: "More repeat business",
                  text: "Give customers a reason to return.",
                },
              ].map((benefit) => (
                <div className="benefit" key={benefit.title}>
                  <benefit.icon
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section process-section"
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">HOW WE WORK TOGETHER</p>
                <h2 id="process-heading">
                  A conversation first.
                  <br />
                  <em>A clear path forward.</em>
                </h2>
              </div>
              <p>
                No need to have it all figured out.{" "}
                <br />
                That’s what we’re here for.
              </p>
            </div>
            <ProcessJourney>
              {processSteps.map((step, i) => (
                <li
                  key={step.number}
                  data-process-step
                  className={`process-step${step.emphasized ? " process-step--trial" : ""}`}
                >
                  <div className="process-step-top">
                    <span>{step.number}</span>
                    {i < processSteps.length - 1 && (
                      <ArrowRight size={21} aria-hidden="true" />
                    )}
                  </div>
                  <div className="process-step-content">
                    <h3>{step.title}</h3>
                    {step.highlight && (
                      <p className="process-highlight">
                        <strong>{step.highlight}</strong>
                      </p>
                    )}
                    <p>{step.description}</p>
                    {step.emphasized && (
                      <p className="process-scope">{trialPolicy.scope}</p>
                    )}
                  </div>
                </li>
              ))}
            </ProcessJourney>
          </div>
        </section>

        <section
          className="section demos-section"
          id="demos"
          aria-labelledby="demos-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">TRY IT FOR YOURSELF</p>
                <h2 id="demos-heading">
                  See how <em>it works.</em>
                </h2>
              </div>
              <p>
                Try a sample appointment booking, then preview the follow-up
                messages your customers could receive.
              </p>
            </div>
            <DemoLab />
          </div>
        </section>

        <Testimonials />

        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="container about-layout">
            <div className="about-image-wrap">
              <div className="about-image">
                <Image
                  src={siteConfig.images.founder}
                  alt="ANZO AI’s founder wearing a light suit with arms folded"
                  fill
                  sizes="(max-width: 460px) calc(100vw - 40px), (max-width: 760px) 420px, (max-width: 1100px) 44vw, 420px"
                />
              </div>
              <span className="about-image-label">
                <BadgeCheck size={18} aria-hidden="true" /> FOUNDER, ANZO AI
              </span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">THE FOUNDER BEHIND ANZO AI</p>
              <h2 id="about-heading">
                Big on curiosity.
                <br />
                <em>Grounded in your business.</em>
              </h2>
              <p>
                I started ANZO AI with a simple goal: help hardworking
                business owners spend less time on busywork and more time doing
                what they do best.
              </p>
              <p>
                I bring curiosity, hands-on care, and a personal approach to
                building AI automation and marketing solutions around what
                your business actually needs.
              </p>
              <div className="about-values">
                <span>
                  <BadgeCheck size={17} aria-hidden="true" /> Founder-led support
                </span>
                <span>
                  <Handshake size={17} aria-hidden="true" /> A personal approach
                </span>
              </div>
              <a className="text-link" href="#contact">
                Let’s meet <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-heading">
          <div className="container faq-layout">
            <div className="faq-intro">
              <p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p>
              <h2 id="faq-heading">
                Good questions.
                <br />
                <em>Clear answers.</em>
              </h2>
              <p>
                Have something else in mind?
                <br />
                We’re happy to talk it through.
              </p>
              <a className="text-link" href="#contact">
                Ask us directly <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <Plus size={18} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <p className="eyebrow">
                  <span className="status-dot" /> LET’S START WITH A
                  CONVERSATION
                </p>
                <h2 id="contact-heading">
                  Your next chapter.
                  <br />
                  <em>A little more automated.</em>
                </h2>
                <p>
                  Tell us what’s keeping you busy.
                  <br />
                  We’ll help you find a better way.
                </p>
              </div>
              <div className="contact-details">
                <span className="contact-label">GIVE US A CALL</span>
                <a className="contact-phone" href={siteConfig.phone.href}>
                  {siteConfig.phone.display}
                  <ArrowUpRight size={26} aria-hidden="true" />
                </a>
                <span className="contact-area">
                  <Globe2 size={15} aria-hidden="true" />{" "}
                  {siteConfig.serviceArea}
                </span>
                {siteConfig.email && (
                  <a
                    className="contact-email"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <Link
              className="wordmark"
              href="/"
              aria-label={`${siteConfig.name} home`}
            >
              <BrandMark />
            </Link>
            <p>Less busywork. More room to grow.</p>
            <a className="text-link" href="#main">
              Back to top <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-content">
            <div className="footer-intro">
              <p>{siteConfig.description}</p>
              <p className="footer-service-area">
                <Globe2 size={17} aria-hidden="true" />
                <span>{siteConfig.serviceArea}</span>
              </p>
            </div>
            {[
              { title: "AI automation", services: automationServices },
              { title: "Marketing & growth", services: marketingServices },
            ].map((group) => (
              <nav
                className="footer-link-group"
                aria-label={`Footer ${group.title} services`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.services.map((service) => (
                    <li key={service.id}>
                      <a href={`#${service.id}`}>{service.title}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav className="footer-link-group" aria-label="Footer page navigation">
              <h3>Explore</h3>
              <ul>
                {[
                  { href: "#services", label: "Services" },
                  { href: "#process-heading", label: "Our process" },
                  { href: "#demos", label: "Interactive demos" },
                  { href: "#about", label: "About us" },
                  { href: "#faq-heading", label: "FAQs" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getUTCFullYear()} {siteConfig.name}. All rights
              reserved.
            </span>
            <nav aria-label="Legal navigation">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              {siteConfig.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </nav>
            <span>Thoughtfully built. Human supported.</span>
          </div>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
