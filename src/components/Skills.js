import React from 'react';
import { FaStar } from 'react-icons/fa';


const skillsData = [
  {
    category: 'Base de datos, ETL y programación',
    skills: [
      { name: 'Python', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 2 },
      { name: 'SQL', imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 1 },
      { name: 'Pandas', imgUrl: 'https://pandas.pydata.org/static/img/pandas_mark.svg', level: 1 },
    ],
  },
  {
    category: 'Herramientas de análisis y visualización',
    skills: [
      { name: 'Excel/Google Sheet', imgUrl: 'https://veryutils.com/image/cache/mpseller/customer-13/excel-500x500.png', level: 3 },
      { name: 'Tableau', imgUrl: 'https://bootflare.com/wp-content/uploads/2023/04/Tableau-Logo2-1536x864.png', level: 2 },
      { name: 'Looker Studio', imgUrl: 'https://funnel.io/hubfs/google-looker-logo.png', level: 2 },
      { name: 'Power Bi', imgUrl: 'https://logosmarken.com/wp-content/uploads/2022/02/Microsoft-Power-BI-Logo-2016-2020-650x366.png', level: 3 },
    ],
  },
  {
    category: 'Automatización / Aplicaciones Low Code',
    skills: [
      { name: 'Power Automate', imgUrl: 'https://images.icon-icons.com/3914/PNG/512/powerautomate_logo_icon_248796.png', level: 2 },
      { name: 'UiPath', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/80/UiPath_2019_Corporate_Logo.png', level: 2 },
      { name: 'Power Apps', imgUrl: 'https://logotic.me/system/assets/uploads/vector-files/power-apps-1669116905-logotic-tmpl.svg', level: 2 },
      { name: 'AppSheet', imgUrl: 'https://play-lh.googleusercontent.com/rW4cFCs9COZhpTYlW9x9OL2lKAy9kkPCTEfEUliybKOiXLsfi2BlOWyvZolbCiszcj4', level: 2 },
    ],
  },
];

export default function Skills() {
  const renderStars = (level) => {
    return [1, 2, 3].map((i) => (
      <FaStar key={i} className={`text-rojoletra ${i <= level ? 'opacity-100' : 'opacity-30'}`} />
    ));
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center py-20 gap-12 px-4 md:px-6"
    >
      <h2 className="text-6xl font-bold mb-4 text-rojoletra text-center">SKILLS</h2>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillsData.map((category, index) => (
          <div key={index} className="flex flex-col border-gray-700 md:border-l md:border-r px-4 items-center">
            <h3 className="text-2xl font-semibold mb-6 text-center">{category.category}</h3>
            <div className="flex flex-col gap-4 w-full">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 justify-between w-full">
                  <div className="flex items-center gap-4 ">
                    <img
                    src={skill.imgUrl}
                    alt={skill.name}
                    className="w-16 h-16 object-contain img-white"
                    />
                    <p className="text-2xl text-gray-200 font-light">{skill.name}</p>
                  </div>
                  <div className="flex gap-1">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
