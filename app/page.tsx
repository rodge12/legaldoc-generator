import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ChevronRight,
  Star,
  FileText,
  Users,
  Shield,
  Download,
  Bot,
  Edit3,
  Globe,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAFA]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-[#1E40AF] flex items-center justify-center shadow-sm">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[#1F2937]">LegalDoc AI</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-[#1F2937] hover:text-[#1E40AF] transition-colors">
              Home
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-[#1F2937] hover:text-[#1E40AF] transition-colors"
            >
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-[#1F2937] hover:text-[#1E40AF] transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-[#1F2937] hover:text-[#1E40AF] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden md:flex bg-[#1E40AF] hover:bg-[#1F2937] text-white">Sign In</Button>
            <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white font-medium px-6">Start for Free</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#1E40AF]/10 text-[#1E40AF] border-[#1E40AF]/20 font-medium">
                    🇦🇪 UAE-Compliant
                  </Badge>
                  <Badge className="bg-[#1F2937]/10 text-[#1F2937] border-[#1F2937]/20 font-medium">AI-Powered</Badge>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#1F2937]">
                  UAE Legal Contracts.
                  <span className="text-[#1E40AF] block">Powered by AI.</span>
                </h1>
                <p className="max-w-[600px] text-lg md:text-xl text-gray-600 leading-relaxed">
                  Generate instant, lawyer-grade documents in Arabic and English.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white px-8 py-6 text-lg font-medium shadow-lg">
                    Create My UAE Contract
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white px-8 py-6 text-lg">Watch Demo</Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#1E40AF] to-[#1F2937]"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    Trusted by <span className="font-semibold text-[#1F2937]">1,000+</span> UAE professionals
                  </div>
                </div>
              </div>
              <div className="relative lg:pl-8">
                <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="LegalDoc AI Platform Interface"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/10 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 shadow-lg border">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-sm font-medium text-[#1F2937]">Live Generation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Diagram Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">HOW IT WORKS</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                Three Simple Steps
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">From form to final document in under 3 minutes</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-lg">
                  <Edit3 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1F2937]">Step 1: Fill Form</h3>
                  <p className="text-gray-600">Answer simple questions about your contract requirements</p>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#1E40AF] to-[#1F2937] -translate-x-1/2" />
              </div>
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1F2937] text-white shadow-lg">
                  <Bot className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1F2937]">Step 2: AI Generates Contract</h3>
                  <p className="text-gray-600">Our AI creates a UAE-compliant document tailored to your needs</p>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#1F2937] to-[#1E40AF] -translate-x-1/2" />
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-lg">
                  <Download className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1F2937]">Step 3: Download PDF</h3>
                  <p className="text-gray-600">Instantly receive your bilingual document ready for signing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section id="features" className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">KEY BENEFITS</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                Why Legal Professionals Choose Us
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white shadow-sm border">
                <div className="rounded-full bg-[#1E40AF]/10 p-4">
                  <Check className="h-8 w-8 text-[#1E40AF]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937]">Instant Document Delivery</h3>
                <p className="text-gray-600">Generate professional contracts in under 3 minutes, not 3 days</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white shadow-sm border">
                <div className="rounded-full bg-[#1F2937]/10 p-4">
                  <Globe className="h-8 w-8 text-[#1F2937]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937]">Bilingual (English + Arabic)</h3>
                <p className="text-gray-600">Perfect translations that maintain legal accuracy in both languages</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-white shadow-sm border">
                <div className="rounded-full bg-[#1E40AF]/10 p-4">
                  <Shield className="h-8 w-8 text-[#1E40AF]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937]">UAE Law Compliant</h3>
                <p className="text-gray-600">Every document follows current UAE legal standards and regulations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Preview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">LIVE PREVIEW</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#1F2937]">
                  See Your Contract Come to Life
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Watch as our AI transforms your requirements into a professional, legally-compliant document.
                  Real-time generation with instant preview in both English and Arabic.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white px-6 py-3">Try Live Demo</Button>
                  <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white px-6 py-3">
                    View Sample Contracts
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[#1F2937]">Employment Offer Letter</h3>
                      <Badge className="bg-[#1E40AF]/10 text-[#1E40AF]">Generating...</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-[#1E40AF] hover:bg-[#1F2937] text-white">
                        English
                      </Button>
                      <Button size="sm" className="bg-[#1E40AF] text-white hover:bg-[#1F2937]">
                        العربية
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Library Section */}
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">DOCUMENT LIBRARY</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                UAE-Compliant Templates
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Comprehensive collection of legal documents for every business need
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {[
                { name: "NDAs", icon: Shield, desc: "Non-disclosure agreements" },
                { name: "Freelance Agreements", icon: Users, desc: "Independent contractor contracts" },
                { name: "Tenancy Addendums", icon: FileText, desc: "Rental agreement modifications" },
                { name: "Offer Letters", icon: Edit3, desc: "Employment offer documents" },
                { name: "Service Contracts", icon: Globe, desc: "Professional service agreements" },
                { name: "Partnership Agreements", icon: Users, desc: "Business partnership contracts" },
                { name: "Terms & Conditions", icon: Shield, desc: "Website and app terms" },
                { name: "Privacy Policies", icon: FileText, desc: "Data protection documents" },
              ].map((doc, i) => (
                <Card
                  key={i}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="rounded-full bg-[#1E40AF]/10 group-hover:bg-[#1E40AF] p-4 mx-auto w-fit transition-colors">
                      <doc.icon className="h-6 w-6 text-[#1E40AF] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1F2937] mb-1">{doc.name}</h3>
                      <p className="text-sm text-gray-600">{doc.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">PRICING PLANS</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                Transparent, Fair Pricing
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Choose the plan that fits your legal document needs
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
              <Card className="relative border-2 border-gray-200 shadow-lg">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-[#1F2937]">Single Document</CardTitle>
                  <CardDescription className="text-gray-600">Perfect for one-time needs</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-[#1F2937]">AED 49</span>
                    <span className="text-gray-600 ml-2">per document</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "One legal document",
                      "English & Arabic versions",
                      "PDF download",
                      "UAE law compliant",
                      "Email support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#1E40AF]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#1E40AF] hover:bg-[#1F2937] text-white py-6">Get Started</Button>
                </CardFooter>
              </Card>

              <Card className="relative border-2 border-[#1E40AF]/20 shadow-xl bg-gradient-to-b from-white to-blue-50/30">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#1E40AF] text-white px-4 py-1 font-semibold">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-[#1F2937]">Unlimited</CardTitle>
                  <CardDescription className="text-gray-600">For professionals & firms</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-[#1F2937]">AED 399</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Unlimited documents",
                      "All document types",
                      "English & Arabic versions",
                      "PDF & Word downloads",
                      "Document editing & revisions",
                      "Client management dashboard",
                      "Priority support",
                      "Custom branding",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#1E40AF]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#1E40AF] hover:bg-[#1F2937] text-white py-6">Start Free Trial</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-[#FAFAFA]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">TESTIMONIALS</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                Trusted by UAE Professionals
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  name: "Ahmed Al Mansoori",
                  role: "Real Estate Agent, Dubai",
                  content:
                    "LegalDoc AI has revolutionized my tenancy agreement process. What used to take days now takes minutes, and my clients are impressed with the professional bilingual documents.",
                  rating: 5,
                },
                {
                  name: "Sarah Johnson",
                  role: "Freelance Consultant",
                  content:
                    "As a freelancer, I needed solid contracts but couldn't afford expensive legal fees. LegalDoc AI gives me peace of mind with UAE-compliant agreements at a fraction of the cost.",
                  rating: 5,
                },
                {
                  name: "Mohammed Al Hashimi",
                  role: "Law Firm Partner",
                  content:
                    "We use LegalDoc AI for standard contracts, freeing our attorneys to focus on complex legal matters. The quality and compliance are exceptional.",
                  rating: 5,
                },
                {
                  name: "Fatima Al Zaabi",
                  role: "HR Director",
                  content:
                    "The employment offer letters are perfect. Having both English and Arabic versions has streamlined our hiring process significantly.",
                  rating: 5,
                },
                {
                  name: "John Williams",
                  role: "Business Owner",
                  content:
                    "The unlimited plan has been invaluable for our growing business. We generate dozens of contracts monthly with consistent quality.",
                  rating: 5,
                },
                {
                  name: "Layla Al Qasimi",
                  role: "Property Manager",
                  content:
                    "The Arabic translations are flawless, and the legal terminology is accurate. Our Arabic-speaking clients appreciate the attention to detail.",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-white shadow-sm border-0">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-5 w-5 fill-[#1E40AF] text-[#1E40AF]" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#1F2937]" />
                      <div>
                        <p className="font-semibold text-[#1F2937]">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">FREQUENTLY ASKED</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#1F2937]">
                Common Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Are the documents legally binding in the UAE?",
                  a: "Yes, all our documents are designed to comply with current UAE laws and regulations. However, for complex legal matters, we recommend consulting with a licensed UAE lawyer.",
                },
                {
                  q: "How accurate are the Arabic translations?",
                  a: "Our AI uses specialized legal terminology databases to ensure accurate Arabic translations that maintain the legal meaning and context of the original English text.",
                },
                {
                  q: "Can I customize the generated documents?",
                  a: "Yes, with our Unlimited plan, you can edit and customize documents after generation. The Single Document plan provides the final PDF only.",
                },
                {
                  q: "What types of businesses use LegalDoc AI?",
                  a: "Our platform is used by real estate agents, freelancers, law firms, HR departments, small businesses, and property management companies across the UAE.",
                },
              ].map((faq, i) => (
                <Card key={i} className="border-0 shadow-sm bg-[#FAFAFA]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1F2937] mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E40AF] to-[#1F2937]">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Generate Your UAE Contract?
              </h2>
              <p className="max-w-2xl mx-auto text-lg opacity-90">
                Join thousands of UAE professionals who trust LegalDoc AI for their legal document needs
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button className="bg-white text-[#1E40AF] hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                  Create My UAE Contract
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="bg-[#1E40AF] hover:bg-[#1F2937] text-white px-8 py-6 text-lg">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-white">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-[#1F2937]">LegalDoc AI</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI-powered legal document generator for the UAE market. Generate compliant contracts instantly in
                English and Arabic.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "facebook", href: "#" },
                  { icon: "twitter", href: "#" },
                  { icon: "linkedin", href: "#" },
                ].map((social, i) => (
                  <Link key={i} href={social.href} className="text-gray-400 hover:text-[#1E40AF] transition-colors">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-xs font-medium">{social.icon[0].toUpperCase()}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#1F2937] uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About", "Blog", "Careers", "Press"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-600 hover:text-[#1E40AF] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#1F2937] uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm">
                {["Terms", "Privacy", "Contact", "Support"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-600 hover:text-[#1E40AF] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-[#1F2937] uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-[#1E40AF] mt-0.5" />
                  <span className="text-gray-600">+971 4 123 4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-[#1E40AF] mt-0.5" />
                  <span className="text-gray-600">info@legaldocai.ae</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-[#1E40AF] mt-0.5" />
                  <span className="text-gray-600">Downtown Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">© 2025 LegalDoc AI. All rights reserved.</p>
              <p className="text-xs text-gray-500 max-w-md text-center md:text-right">
                <strong>Legal Disclaimer:</strong> This platform does not provide legal advice. For complex matters,
                consult a licensed UAE lawyer.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
