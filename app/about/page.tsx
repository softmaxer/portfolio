import TechItem from "@/components/tech-item";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-between gap-20">
          <h1 className="text-orange-300 text-7xl text-center">About me</h1>
          <p className="text-xl lg:text-left text-center">
            I am an AI engineer / developper and I believe that good software
            should be simple and intuitive, both to develop and to use. I am
            here to help you with your next tech adventure, anything ranging
            from a portfolio to a SaaS application. My primary experience is in
            Natural language processing, backend services and cloud
            architectures. However, I am also pretty comfortable diving deep
            into the world of Javascript/Typescript and building websites (For
            example, this website was built using NextJS and Tailwind CSS). Feel
            free to{" "}
            <a
              className="underline decoration-orange-300 hover:translate-y-1"
              href="mailto:sriram.vadlamani@proton.me"
            >
              shoot me an email
            </a>{" "}
            if you want me on board!
          </p>
          <div className="flex flex-row items-center justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-orange-300 text-3xl">Languages I speak</h3>
              <div className="flex -space-x-0.5 rtl:space-x-reverse">
                <TechItem altName="Go" logoPath="/icons/go.png" />
                <TechItem altName="Python" logoPath="/icons/python.png" />
                <TechItem altName="C" logoPath="/icons/c.png" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-orange-300 text-3xl">Frameworks I use</h3>
              <div className="flex -space-x-0.5 rtl:space-x-reverse">
                <TechItem name="NextJS" logoPath="/icons/nextjs.png" />
                <TechItem name="React" logoPath="/icons/react.png" />
                <TechItem name="Pytorch" logoPath="/icons/pytorch.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
