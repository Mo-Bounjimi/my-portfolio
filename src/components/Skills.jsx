import React from 'react'

const skills = [
  { name: 'HTML', imgSrc: '/html.png' },
  { name: 'CSS', imgSrc: '/css.png' },
  { name: 'JavaScript', imgSrc: '/javascript.png' },
  { name: 'PHP', imgSrc: '/php.png' },
  { name: 'Python', imgSrc: '/python.png' },
  { name: 'MySQL', imgSrc: '/mysql.png' }
];

const Skills = () => {
  return (
    <div id="Skills" className="w-full flex flex-col items-center justify-center gap-20 p-6 md:p-14 lg:p-20">
      <section className="container mx-auto p-6">
        <h2 className="text-center text-5xl font-light mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50">
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills