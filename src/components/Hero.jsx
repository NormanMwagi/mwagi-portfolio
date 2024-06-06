import heroImg from '../assets/html.avif';

import cv from '../assets/DOTNET.pdf';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';


const Hero = () =>
{
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Norman</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Software Engineer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/NormanMwagi'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/normanmwagi/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://twitter.com/normanmwagi'>
              <span className='text-3xl font-bold text-slate-500 hover:text-black duration-300'>X</span>
            </a>
          </div>
          <div className="flex mt-4">
            <a href={cv} download="DOTNET.pdf" className='px-2 bg-slate-500 hover:bg-black text-white rounded-sm'>Download CV</a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
export default Hero;