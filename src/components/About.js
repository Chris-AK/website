import pic from "../pic.jpg"

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

            <p className="mb-8 leading-relaxed">
            I'm an Embedded Systems Engineer, currently looking for full time opportunities to develop my skill set in my related field.
            I take pride in my commitment to solving every problem from the first principles of physics. I'm well versed in Firmware Development, Robotics and Control Algorithms. I'm also an Enthusiast in Custom SOC Design. 
            Lastly, I'm passionately interested in the empowerment of sub saharan Africa and other third world countries.
            </p>
            <div className="flex justify-center">
          
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Pic"
              src={pic}
            />
          </div>
        </div>
      </section>
    );
  }