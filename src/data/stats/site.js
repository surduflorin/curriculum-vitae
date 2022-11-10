import dayjs from 'dayjs';

const data = [
  {
    label: 'github',
    key: 'github_count',
    link: 'https://github.com/surduflorin',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/surduflorin/curriculumvitae/commits/',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of Javascript powering this website',
    value: '2115',
    link: 'https://github.com/surduflorin/curriculumvitae/graphs/contributors',
  },
];

export default data;
