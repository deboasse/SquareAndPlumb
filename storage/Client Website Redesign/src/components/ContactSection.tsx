import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectAddress: "",
    idealTimeline: "",
    hearAboutUs: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative">
      {/* Form Section */}
      <div className="bg-[#f5f5f5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24">
            {/* Left Column - Info */}
            <div className="flex flex-col justify-center">
              <div className="w-16 h-0.5 bg-[#ED1C24] mb-8"></div>
              <h2 className="text-5xl mb-8 text-[#1a1a1a]">Build With Us</h2>
              <p className="text-[#5a5a5a] leading-relaxed mb-12">
                Please fill out our contact form. We take on new projects based on the scope, location and your timeline as well as ours. We aim to respond within 1-3 business days. Thank you for reaching out and exploring the process of building with us. We look forward to learning more about your project.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">Email</h3>
                  <p className="text-[#5a5a5a]">info@squareandplumb.com</p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">Phone</h3>
                  <p className="text-[#5a5a5a]">978-855-8208</p>
                </div>
                <div>
                  <h3 className="text-[#1a1a1a] mb-2">Location</h3>
                  <p className="text-[#5a5a5a]">
                    Gloucester MA, 01930
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Name <span className="text-[#ED1C24]">*</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Email <span className="text-[#ED1C24]">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Project Type
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, projectType: value })
                    }
                  >
                    <SelectTrigger className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus:ring-0 focus:border-[#ED1C24]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remodel-addition">
                        Remodel/Addition
                      </SelectItem>
                      <SelectItem value="new-construction">
                        New Construction
                      </SelectItem>
                      <SelectItem value="high-performance-build">
                        High Performance Build
                      </SelectItem>
                      <SelectItem value="energy-retrofit">
                        Energy Retrofit
                      </SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Project Address
                  </label>
                  <Input
                    value={formData.projectAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, projectAddress: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Ideal Timeline
                  </label>
                  <Input
                    value={formData.idealTimeline}
                    onChange={(e) =>
                      setFormData({ ...formData, idealTimeline: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    How Did You Hear About Us?
                  </label>
                  <Input
                    value={formData.hearAboutUs}
                    onChange={(e) =>
                      setFormData({ ...formData, hearAboutUs: e.target.value })
                    }
                    className="border-b border-t-0 border-l-0 border-r-0 border-[#cccccc] rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#ED1C24]"
                  />
                </div>

                <div>
                  <label className="block text-[#5a5a5a] mb-2 text-sm">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project..."
                    className="border border-[#cccccc] rounded-none min-h-[150px] focus-visible:ring-0 focus-visible:border-[#ED1C24] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white border-2 border-[#ED1C24] text-[#ED1C24] py-4 px-8 hover:bg-[#ED1C24] hover:text-white transition-all duration-300 mt-8"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-16 h-0.5 bg-[#C9A961] mx-auto mb-8"></div>
          <h2 className="text-4xl mb-6 text-[#1a1a1a]">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#5a5a5a] leading-relaxed max-w-2xl mx-auto">
            We're committed to delivering exceptional craftsmanship and bringing
            your vision to life. Our team is ready to guide you through every
            step of the process, from initial consultation to final walkthrough.
          </p>
        </div>
      </div>
    </section>
  );
}