import './index.css';


const skilllist = [
  {
    id:1,
    skill1: "HTML",
    years: '2 years of experince'

  },
  {
    id: 2,
    skill1: "css",
    years: '2 years of experince'
  },
  {
    id: 3,
    skill1: "javascript",
    years: '1 year of experince'
  },
  {
    id: 4,
    skill1: "react",
    years: '1 years of experince'
  },
  {
    id: 5,
    skill1: "sass",
    years: '2 years of experince'
  },
]

const carddata =[
  {
    id: 1,
    text: "design portfolio",
    img: "img/desgn.webp",
    tools: "html css javascript"
  },
  {
    id: 2,
    text: "landing page",
    img: "img/landing.png",
    tools: "html css javascript"
  },
  {
    id: 3,
    text: "movie app",
    img: "img/movieapp.jpg",
    tools: "html css javascript"
  },
  {
    id: 4,
    text: "todo app",
    img: "img/todo.png",
    tools: "html css javascript"
  }
]

export default  function App() {
 
      return (
        <main>
          <Navbar />
    <div> <Hero /></div>
      <div>
        <Experince />
        <Skills /></div>
        <section className=' max-w-[75%] mx-auto  '> 
          <Headingtwo />
          <Projects />
          <Procard />
        </section>
        <Form />
        </main>
        
      
      );
  
}
function Hero(){
return(
  <section  className='grid grid-cols-1 items-center justify-center md:grid-cols-2 mx-auto w-[76%] p-[2rem] border-b-2 border-[#f3f3f375]'>
    <div className=''>
     <h1 className='text-[2rem] font-bold m-2'>
      nice to meet you! <br/> <span className='border-b-4 border-y-emerald-400'> i'm john mark</span>
     </h1>
     <p className='m-2 font-semibold'>based in the uk, i'm a front-end developer passionate about building accesible web apps that users love
     </p> 
     <a className='border-b-2 border-y-emerald-400 m-2 uppercase font-bold delay-500 ease-out hover:text-cyan-500' href='#'>contact me</a>
    </div>
    <div>
      <img src='/img/christian-buehner-ditylc26zvi-unsplash-removebg-preview.png' alt='john mark'/>
    </div>
  </section>
)
}

function Skills (){
return (

  <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center p-8 items-center w-[65%] mx-auto'>
    {skilllist.map((skill) => (
  <List key={skill.id} skillName={skill.skill1} year={skill.years} />
    ))
    }
  </ul>
)
}
function List({skillName, year}){
return(
  <li>
    <p className='text-[1.7rem] font-bold'> {skillName}</p>
    <p className='capitlize'> {year}</p>
  </li>
)
}
function Experince (){
return <h1 className='text-center uppercase  text-[2rem]'>skilss</h1>
}
function Headingtwo (){
  return (
    <div className='flex justify-between items-center '>
      <h1 className='capitlize text-[2rem] font-bold'>projects </h1>
      <a className='border-b-2 border-y-emerald-400 m-2 uppercase font-bold delay-500 ease-out hover:text-cyan-500' href='#'>contact me</a>
    </div>
  )
}
function Projects(){
return (
  <ul className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] justify-center p-8 items-center  mx-auto'>
    { carddata.map((card)  =>(
      <Procard id={card.id} img={card.img} text={card.text}  tool={card.tools} />
    ) ) }
  </ul>
)
}
function Procard({img, text, tool}){
return (
  <li>
    < img src={img} className='block object-cover w-full'/>
    <p className='text-[1.4rem] capitalize font-bold'>{text} </p>
    <p className='capitalize text-[1rem]'>{tool}</p>
  </li>
)
}
function Form(){
  return (
    <section className='bg-[#23241ff1] p-6'>
    <section className=' grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  justify-center gap-8 items-center w-[75%]  mx-[auto]'>
      <div className=''>
        <h2 className='capitalize text-[1.9rem] font-bold p-4'>Contact Us</h2>
        <p className='capitalize text-[1rem] font-[500]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo, tempore necessitat ibus odit quaerat voluptatum, 
  dicta consequatur nostrum deserunt delectus aspernatur facere ut labore voluptatem, doloribus mollitia officia!</p>
      </div>
      <form  >
        <div className='flex flex-col '>
          <label htmlFor='name' className='capitalize'>name</label>
          <input type='text' id='name' name='name' placeholder='enter your name' className='w-full bg-[transparent] border-b-[1px] outline-none m-2 p-2 border-[#fff] '/>
        </div>
        <div>
          <label htmlFor='email' className='capitalize' >email</label>
          <input type='text' id='email' name='email' placeholder='enter your email'  className='w-full bg-[transparent] border-b-[1px] outline-none m-2 p-2 border-[#fff]' />
        </div>
        <div>
          <label htmlFor='message' className='capitalize'>message</label>
       <textarea id='message' name='message' placeholder=' enter your message'  className='w-full bg-[transparent] border-b-[1px] outline-none m-2 p-2 border-[#fff]'/>
        </div>
      </form>
    </section>
    </section>
  )
}
function Navbar(){
  return (
    <header className='flex justify-between items-center p-[1rem]'>
      <div className='uppercase text-emerald-400 text-[2rem] '>adm</div>
      <nav>
        <ul className='flex justify-center items-center gap-[1rem]'>
          <li className='text-[2rem] text-emerald-400 font-medium'>about</li>
          <li  className='text-[2rem] text-emerald-400 font-medium' >projects</li>
          <li  className='text-[2rem] text-emerald-400 font-medium' >projects</li>
        </ul>
      </nav>
    </header>
  )
}