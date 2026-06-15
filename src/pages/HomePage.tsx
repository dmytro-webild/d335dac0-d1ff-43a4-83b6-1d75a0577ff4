import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Your Growth Partner"
      title="Driven Marketing for Scaling Brands"
      description="We specialize in high-impact performance marketing that turns visitors into loyal customers. Let us scale your revenue with precision."
      primaryButton={{
        text: "Book Strategy Call",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Work",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "https://images.pexels.com/photos/28484958/pexels-photo-28484958.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=28484958",
        },
        {
          imageSrc: "https://images.pexels.com/photos/4373997/pexels-photo-4373997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&id=4373997",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trusted By Industry Leaders"
      title="Scaling Brands Across the Globe"
      description="Our strategies fuel consistent revenue growth for market-leading companies."
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "DigitalReach",
        "DataFlow",
        "MarketBoost",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="Success isn't about guesswork. It's about combining deep data analysis with creative storytelling to build lasting brand authority."
      author="Elena Vance"
      role="Founder, GrowthAgency"
      imageSrc="http://img.b2bpic.net/free-photo/portrait-smiling-mature-businessman-looking-away_23-2147955371.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Our Services"
      title="Core Marketing Solutions"
      description="We provide end-to-end solutions that cover the entire funnel."
      items={[
        {
          tag: "Strategy",
          title: "Brand Development",
          description: "Defining your identity and market voice for maximum impact.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/online-strategy-media-marketing-icons_53876-167094.jpg",
        },
        {
          tag: "Execution",
          title: "Yoy yooyaoayoa",
          description: "Data-driven ads that convert across all platforms.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/search-searching-finding-looking-optimisation-concept_53876-16304.jpg",
        },
        {
          tag: "Engagement",
          title: "Content Strategy",
          description: "Let's go ski ",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-analyzing-blank-mockup-display-smartphone_482257-87225.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="The Results"
      title="Measurable Impact"
      description="Our performance speaks for itself, driving meaningful growth for every client partner."
      metrics={[
        {
          value: "150%",
          title: "Average Revenue Growth",
          description: "Delivering consistent scaling results.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialQuoteCards
      tag="Client Success"
      title="Voices of Growth"
      description="See why market leaders partner with us to transform their marketing performance."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "CEO",
          quote: "GrowthAgency completely transformed our customer acquisition strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-aside-smiling-confident-with-arms-crossed-chest_141793-55366.jpg",
        },
        {
          name: "Mark Chen",
          role: "CTO",
          quote: "Reliable, data-driven, and incredibly responsive to our needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-confident-asian-man-with-arms-crossed_1262-884.jpg",
        },
        {
          name: "Emily Rodriguez",
          role: "CMO",
          quote: "The best marketing partners we have ever collaborated with.",
          imageSrc: "http://img.b2bpic.net/free-photo/glad-african-office-worker-with-light-brown-skin-showing-okay-sign-after-conference-with-foreign-partners-portrait-female-black-freelancer-enjoying-successful-project_197531-3864.jpg",
        },
        {
          name: "David Kim",
          role: "Founder",
          quote: "Outstanding results. Our conversion rates have never been higher.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
        {
          name: "Jessica Lee",
          role: "Manager",
          quote: "An invaluable extension of our internal marketing department.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-mid-adult-businessman-young-businesswoman_1262-17977.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Frequently Asked Questions"
      description="Answers to commonly asked questions about our process and services."
      categories={[
        {
          name: "Process",
          items: [
            {
              question: "How do we begin?",
              answer: "Schedule a strategy call.",
            },
            {
              question: "What's the typical timeline?",
              answer: "Usually 3 months.",
            },
          ],
        },
        {
          name: "Pricing",
          items: [
            {
              question: "How do you charge?",
              answer: "Performance-based fees.",
            },
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Let's Scale"
      text="Ready to take your marketing to the next level? Get in touch with our team today."
      primaryButton={{
        text: "Request a Quote",
        href: "#",
      }}
      secondaryButton={{
        text: "Call Us",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
