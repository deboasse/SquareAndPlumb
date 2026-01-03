import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import missionImage from "figma:asset/2537d0dbb3600a03bbb6f4aee2ace4777d30e32f.png";
import valuesImage from "figma:asset/5570eb25b3183f1244543f408f8faf29501147e0.png";
import heroImage from "../../storage/porch-columns.jpg";
import processImage from "../../storage/process-kitchen.jpg";

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[350px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-4">About Us</h1>
            <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="w-16 h-0.5 bg-[#C9A961] mb-8"></div>
              <h2 className="text-4xl mb-6 text-[#1a1a1a]">
                Our Mission
              </h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-6">
                With a mission to build with integrity and a commitment to preserving our beautiful New England Architecture, we are stewards of homes, craftsmen and problem solvers. We are thrilled that you found us along the way to build a safe, healthy and durable project.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                We are full service residential builders in the North Shore, providing contracting services ranging from a High Performance Build to a kitchen renovation, all taken with the same level of relevance, craftsmanship and exquisite attention to detail.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={missionImage}
                alt="Our Mission - Modern architectural interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <ProcessSection />
      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <ImageWithFallback
                src={valuesImage}
                alt="Craftsmanship detail"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-0.5 bg-[#C9A961] mb-8"></div>
              <h2 className="text-4xl mb-6 text-[#1a1a1a]">Our Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">Remodels and Additions</h3>
                  <p className="text-[#5a5a5a]">
                    Remodels and additions are a fast and great way to customize your home. We can accommodate the needs of your family by finishing your basement and attic, redesigning your kitchen, bathrooms or simply by adding square-footage.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">New Construction</h3>
                  <p className="text-[#5a5a5a]">
                    We work with clients to understand their family needs and lifestyle. We create a vision for their home from the ground up and deliver the house of their dreams ensuring that it serves their current and future needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">ADUs</h3>
                  <p className="text-[#5a5a5a]">
                    To help with the demand for Accessory Dwelling Units (small residential living space located in the same lot as another home) we provide homeowners with valuable expertise, guiding them with site eligibility, local regulations, design process and price range.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">High Performance Building</h3>
                  <p className="text-[#5a5a5a]">
                    High Performance techniques ensure the highest level of energy efficiency, comfort, indoor air quality and minimal environmental impact. High performance homes are less expensive to operate and are built though the use of sustainable construction practices and design.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">Energy Retrofits</h3>
                  <p className="text-[#5a5a5a]">
                    All homes can be more energy efficient. Upgrades to the insulation, air sealing and mechanical systems are phenomenal ways to improve indoor air quality, lower carbon emissions, reduce energy demand and lower utility bills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#f5f5f5]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-0.5 bg-[#ED1C24] mx-auto mb-8"></div>
          <h2 className="text-4xl mb-6 text-[#1a1a1a]">Let's Build Together</h2>
          <p className="text-[#5a5a5a] leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to start your project? Contact us today to discuss how we can
            bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#ED1C24] text-white hover:bg-[#d01920] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

// Process Section Component with Accordion
function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const steps = [
    {
      title: "Discovery",
      content: "Begins with meeting our executive team through an introductory meeting. Project goals are established. Then, budget alignment is tested through a feasibility study or high-level estimate before moving into a formal agreement."
    },
    {
      title: "Pre-Construction",
      content: "We will conduct an evaluation of the site, measure the space, capture photos and videos, make lots of notes, answer questions, talk about realistic expectations and price range. Finally, we will discuss pre-construction to cover all the necessary planning leading up to the construction."
    },
    {
      title: "Construction",
      content: "Following pre-construction/design completion and the estimate is accepted, we will focus on execution, managing the entire construction process from permitting to coordinating timeline and trade partners."
    },
    {
      title: "Post-Construction",
      content: "We will provide warranty, review your home systems, talk about ongoing maintenance and repair support. Homes last when they are maintained regularly."
    }
  ];

  return (
    <section className="py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src={processImage}
              alt="Our Process - Modern kitchen renovation"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Right Column - Content & Accordion */}
          <div className="flex flex-col justify-center">
            <div className="w-16 h-0.5 bg-[#C9A961] mb-8"></div>
            <h2 className="text-4xl mb-6 text-[#1a1a1a]">Our Process</h2>
            <p className="text-[#5a5a5a] leading-relaxed mb-8">
              Square & Plumb Builders believes in an integrated approach to building your project. Here is what our process looks like:
            </p>

            {/* Accordion */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index}>
                  <div
                    style={{ borderTop: '1px solid #C9A961' }}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                      className="w-full py-4 flex justify-between items-center text-left"
                      style={{ color: '#5a5a5a' }}
                    >
                      <span className="text-lg font-medium" style={{ color: openIndex === index ? '#1a1a1a' : '#5a5a5a' }}>
                        {step.title}
                      </span>
                      <span className="text-2xl" style={{ color: '#5a5a5a' }}>
                        {openIndex === index ? '−' : '+'}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="pb-6">
                        <p className="text-[#5a5a5a] leading-relaxed">
                          {step.content}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Bottom border */}
              <div style={{ borderTop: '1px solid #C9A961' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}