import Image from "next/image"
import ImplementationImage from "@/assets/implementation.jpg"
import IntegrationImage from "@/assets/integration.jpg"
import ConsultingImage from "@/assets/consulting.jpg"
import ApplicationImage from "@/assets/Application.jpg"
import SupportImage from "@/assets/Support.jpg"
import SalesforceImage from "@/assets/Salesforce.jpg"

const ConsultingCards = () => {
  return (
    <section id="services" className="py-14">
      <div className="container">
        <h2 className="md:text-5xl font-semibold text-center font-primary">"Where Expertise Meets Execution—Your NetSuite Consulting Arm"</h2>
        <h5 className="text-center mt-3 font-medium font-secondary ">
          It&apos;s What We Do.&nbsp;It&apos;s What We&apos;ve Always Done
          <div>Let&apos;s See
            What We Can Do for&nbsp;You.</div>
        </h5>
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-10 mt-7 max-w-5xl mx-auto">
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={ImplementationImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                NetSuite Implementation
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
               Flemingo Services NetSuite consultants are seasoned business and technology experts who can step in at any stage of your NetSuite journey.
We collaborate closely with your internal teams, applying our proven NetSuite implementation methodology to deliver a smooth, on-time, and on-budget deployment — with zero disruption and maximum value.
              </p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={IntegrationImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                NetSuite Integration
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                While NetSuite can handle virtually all of your corporate job functions, we
                understand that you may have preferred systems you want to continue using in tandem.
                Cool with us. We&apos;re happy to offer specific integrations with systems that are
                of strategic importance to our customers. We&apos;ll make it work.
              </p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={ConsultingImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                ERP Consulting
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                At Flemingo Services, our certified consultant are committed to delivery solutions that not only meet but also surpass your business needs.
              </p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={ApplicationImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
               Application Customization
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                Adaptable NetSuite Customization for Every Industry. Achieve Seamless Business Workflows with NetSuite Customization.
              </p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={SupportImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                ERP Support
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                NetSuite support provides comprehensive assistance to ensure your NetSuite ERP system runs smoothly and efficiently. We offer 24/5 NetSuite support.
              </p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden pb-7 bg-card text-card-foreground shadow-sm">
            <div className="relative h-72">
              <Image alt="Image" src={SalesforceImage} fill className="object-cover" />
            </div>
            <div className="px-4 pt-3">
              <h3 className="font-primary text-2xl font-semibold leading-none tracking-tight mt-3">
                Salesforce
              </h3>
              <p className="font-secondary mt-3 text-gray-600 text-muted-foreground">
                Flemingo Services offers end-to-end Salesforce consulting, implementation, customization, and integration services—empowering businesses to optimize customer relationships, streamline workflows, and unlock the full potential of the Salesforce platform.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ConsultingCards