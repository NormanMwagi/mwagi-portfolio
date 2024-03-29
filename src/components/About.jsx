import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='about me' />
          <p className='text-slate-600 mt-8 leading-loose'>
           I'm a really driven person with a strong work ethic. 
           I have over one year experience as a software developer.
           Additionally,  I graduated from Chuka University with a bachelors degree in Computer Science.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;