import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
          <Image
            src="/profile-picture.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
        <p className="text-lg mb-6">
          Hello! My name is Suryansh Soni, and I'm passionate about coding and
          technology. I have been practicing web developement and have a strong
          background in frontend development. I love to explore new
          technologies, solve problems, and share my knowledge with others.
        </p>
        <p className="text-lg mb-6">
          In addition to my work, I am an avid learner and constantly strive to
          expand my skill set. I regularly participate in coding communities,
          attend tech conferences, and engage in online courses to stay
          up-to-date with the latest industry trends and technologies.
        </p>
        <p className="text-lg mb-6">
          This blog is to share my insights and tips about the common Javascript
          topics that people face difficulty in understanding. I believe in the
          power of knowledge sharing and hope that my articles will inspire and
          help others on their coding journey. Thank you for visiting my blog.
          If you have any questions or suggestions, feel free to reach out to me
          through the contact page.
        </p>
        <p className="text-lg">Happy coding!</p>
      </div>
    </>
  );
};

export default About;
