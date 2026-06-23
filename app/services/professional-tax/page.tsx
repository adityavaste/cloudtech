import {
  professionalTaxServiceSchema,
  professionalTaxFAQSchema,
  professionalTaxBreadcrumbSchema,
} from "./schema";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { CheckCircle, Briefcase, FileText, DollarSign } from "lucide-react";

const PROFESSIONAL_TAX_FAQ = [
  {
    question: "What is Professional Tax?",
    answer:
      "Professional Tax is a state tax levied on employers for employing workers. It's a recurring tax paid monthly/quarterly based on the salary paid to employees.",
  },
  {
    question: "Who needs to register for Professional Tax?",
    answer:
      "Employers hiring employees (both full-time and part-time) are required to register for Professional Tax in states where it applies. This includes private companies, shops with employees, and factories.",
  },
  {
    question: "In which states is Professional Tax applicable?",
    answer:
      "Professional Tax is applicable in states like Maharashtra, Karnataka, Andhra Pradesh, Telangana, Gujarat, and Madhya Pradesh. Requirements and rates vary by state.",
  },
  {
    question: "What are the penalties for non-registration?",
    answer:
      "Non-registration can attract penalties up to 50,000 plus interest. We ensure timely registration and compliance to avoid such penalties.",
  },
  {
    question: "How often is Professional Tax paid?",
    answer:
      "Professional Tax is typically paid monthly or quarterly depending on the state regulation and amount of salary paid.",
  },
];
export const metadata = {
  title: "Professional Tax Registration & Return Filing Services | CloudTech",

  description:
    "Get Professional Tax (PT) registration, enrollment, return filing, compliance, and consultancy services online. CloudTech helps businesses and professionals stay compliant across India.",

  keywords: [
    "Professional Tax Registration",
    "Professional Tax Return Filing",
    "PT Registration",
    "Professional Tax Certificate",
    "Professional Tax Compliance",
    "Professional Tax Online",
    "Employer Professional Tax",
    "Professional Tax Consultant",
    "Professional Tax Services India",
    "CloudTech Professional Tax",
  ],
};
export default function ProfessionalTaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalTaxServiceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalTaxFAQSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalTaxBreadcrumbSchema),
        }}
      />
      <MainLayout>
        {/* Hero */}
        <Hero
          title="Professional Tax Registration"
          subtitle="Complete employer registration and compliance for Professional Tax. Expert guidance on state-specific requirements and ongoing filings."
          primaryCta={{
            text: "Register for Professional Tax",
            href: "/contact",
          }}
          secondaryCta={{ text: "Check State Rules", href: "/contact" }}
          backgroundGradient
        />

        {/* What is Professional Tax */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              What is Professional Tax?
            </h2>

            <p className="text-base sm:text-lg text-secondary mb-5 sm:mb-6 leading-7 sm:leading-8">
              Professional Tax is a state-level tax collected by employers from
              their employees' salaries. It is a recurring tax that employers
              must deduct, collect, and remit to the state government monthly or
              quarterly.
            </p>

            <p className="text-base sm:text-lg text-secondary leading-7 sm:leading-8">
              This tax is applicable only in certain states and is levied on the
              wages/salaries paid to employees. The tax amount depends on the
              salary bracket and is usually paid by the employer on behalf of
              employees.
            </p>
          </div>
        </section>

        {/* Employer Responsibilities */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-section-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12">
              Employer Responsibilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {[
                {
                  title: "Registration",
                  items: [
                    "Register with state authority",
                    "Obtain registration certificate",
                    "Maintain registration details",
                  ],
                },
                {
                  title: "Compliance",
                  items: [
                    "Deduct tax from employees",
                    "File monthly/quarterly returns",
                    "Maintain records and documents",
                  ],
                },
                {
                  title: "Payments",
                  items: [
                    "Pay tax to government",
                    "Issue tax certificates",
                    "Maintain audit trail",
                  ],
                },
                {
                  title: "Documentation",
                  items: [
                    "Maintain salary records",
                    "Keep tax payment proofs",
                    "Employee wage statements",
                  ],
                },
              ].map((category, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 sm:p-8 border border-border"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                    {category.title}
                  </h3>

                  <ul className="space-y-3 text-secondary">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* State Requirements */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12">
              Professional Tax by State
            </h2>

            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-[700px] w-full bg-white border border-border overflow-hidden rounded-xl">
                <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                  <tr>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      State
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      Tax Name
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      Rate
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left font-bold">
                      Who Pays
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      state: "Maharashtra",
                      name: "Professional Tax",
                      rate: "0-1% of salary",
                      pays: "Employer",
                    },
                    {
                      state: "Karnataka",
                      name: "Professional Tax",
                      rate: "Up to ₹12/month",
                      pays: "Employee",
                    },
                    {
                      state: "Andhra Pradesh",
                      name: "Professional Tax",
                      rate: "Varies",
                      pays: "Employee",
                    },
                    {
                      state: "Telangana",
                      name: "Professional Tax",
                      rate: "Varies",
                      pays: "Employee",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i !== 3 ? "border-b border-border" : ""}
                    >
                      <td className="px-4 sm:px-6 py-4 font-semibold">
                        {row.state}
                      </td>
                      <td className="px-4 sm:px-6 py-4">{row.name}</td>
                      <td className="px-4 sm:px-6 py-4">{row.rate}</td>
                      <td className="px-4 sm:px-6 py-4">{row.pays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-section-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12">
              Our Professional Tax Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <div className="bg-white rounded-xl p-5 sm:p-8 border border-border">
                <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                  Registration & Setup
                </h3>

                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      State-specific registration
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Obtain registration certificate
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Salary calculation guidance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-8 border border-border">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                  Ongoing Compliance
                </h3>

                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Monthly/quarterly filings
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Timely tax payments
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Record maintenance support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 bg-section-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12">
              Our Professional Tax Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <div className="bg-white rounded-xl p-5 sm:p-8 border border-border">
                <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                  Registration & Setup
                </h3>

                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      State-specific registration
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Obtain registration certificate
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Salary calculation guidance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-8 border border-border">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
                  Ongoing Compliance
                </h3>

                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Monthly/quarterly filings
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Timely tax payments
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">
                      Record maintenance support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CTASection
          title="Register Your Business for Professional Tax"
          subtitle="Ensure compliance with state requirements. Let our experts handle Professional Tax registration and ongoing compliance."
          primaryCta={{ text: "Register Now", href: "/contact" }}
        />
      </MainLayout>
    </>
  );
}
