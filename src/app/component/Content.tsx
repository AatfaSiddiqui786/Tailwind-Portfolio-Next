import Image from 'next/image';
import Link from 'next/link';

interface Project {
  name: string;
  image: string;
}

const Content: React.FC = () => {
  const projects: Project[] = [
    { 
      name: 'TIC TAC TOE', 
      image: '/TIC TAC.png', 
    },
    { 
      name: 'Periodic Table ', 
      image: '/PERIODIC TABLE.png', 
    },
    { 
      name: 'Calculator', 
      image: '/calculator.png',  },
  ];

  return (
    <div className="animate-slide-left">
    <section id="projects" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-30" style={{ backgroundImage: 'url(/images/newbg.jpg)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-10 font-bold text-white animate-fadeIn">My Projects</h2>
        <div className="w-60 h-1 mx-auto bg-teal-300 mb-9"></div> 
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 border-2 border-teal-600 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-zoomIn"
            >
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-500">{project.name}</h3>
                <div className="flex mt-4 space-x-4">
                  
                  
  
                </div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="flex justify-center mt-10">
          <Link
            href="/project"  
            className="text-white font-semibold text-2xl animate-pulse transform hover:scale-110 transition-all duration-300 hover:bg-teal-700 py-3 px-6 rounded-full border-2 border-teal-500"
          >
            See More Projects
          </Link>
        </div>
      </div> <br />
   </section> 
   </div>

   
  );
};

export default Content;
