import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiWebpack,
  SiHandlebarsdotjs,
  SiMysql,
  SiExpress,
} from 'react-icons/si';

const Technologies = [
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
  },
  {
    id: 2,
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    id: 3,
    name: 'Handlebars',
    icon: <SiHandlebarsdotjs />,
  },
  {
    id: 4,
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    id: 5,
    name: 'MySQL',
    icon: <SiMysql />,
  },
  {
    id: 6,
    name: 'NodeJS',
    icon: <FaNodeJs />,
  },
  {
    id: 7,
    name: 'Webpack',
    icon: <SiWebpack />,
  },
  {
    id: 8,
    name: 'Express',
    icon: <SiExpress />,
  },
];

export default Technologies;
