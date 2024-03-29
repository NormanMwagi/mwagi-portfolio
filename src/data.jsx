import { nanoid } from 'nanoid';
import csharp from './assets/csharp.svg';
import python from './assets/python.svg';
import { FaHtml5, FaJs } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML, CSS, and frameworks like Bootstrap and Tailwind. I design user-friendly and responsive websites.'
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications using React, Node JS and Express JS.',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <img src={csharp} alt="C#" className="h-16 w-16 text-emerald-500" />,
    text:  <span>Proficiency in C# building Web Applications using Asp.net Core, Entity Framework, Rest APIs and Authorization Using Jwt Key.</span>
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <img src={python} alt="python" className="h-16 w-16 text-emerald-500" />,
    text:  <span>Good in Python using it's frameworks Django and Flask.</span>
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '#',
    github: 'https://github.com/NormanMwagi/Walks-WebAPI',
    title: 'first project',
    text: 'ASP.Net Web API. Entity framework, repository pattern, pagination, sorting and filtering.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '#',
    github: 'https://github.com/NormanMwagi/https://github.com/NormanMwagi/Note-Keeping-App',
    title: 'second project',
    text: 'A React application that allows you to take notes and also delete.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://tembea-kenya-app.netlify.app/',
    github: 'https://github.com/NormanMwagi/Tembea-Kenya',
    title: 'third project',
    text: 'Responsive UI using React',
  },
];