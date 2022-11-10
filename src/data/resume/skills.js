const skills = [
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Prismic',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Smarty',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'BrowserStack',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Netfly',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'PostMan',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQLWorkBench',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'PHP',
    competency: 1,
    category: ['Web Development', 'PHP'],
  },
  {
    title: 'Brew',
    competency: 2,
    category: ['Web Development', 'Brew'],
  },
  {
    title: 'Gulp',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Webpack',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'WHM',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Putty SSH',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
