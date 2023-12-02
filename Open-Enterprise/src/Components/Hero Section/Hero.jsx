import illustrationImg from '../../assets/Illustration.png'

const Hero = () => {
  return (
    <section className="mt-12 mb-12 flex">
      <div className="hero-heading w-1/3 flex flex-col gap-y-4 my-auto basis-1/2">
        <h1 className="text-[Bely Display] text-5xl text-Black font-bold">A new model for open collaboration</h1>
        <p className='text-Gray'>Run an organization where members get rewarded for their contributions with fractional ownership.</p>
        <button className="px-5 py-3 bg-Green rounded-md text-white w-[219px]">Request Early Access</button>
      </div>
      <div className="hero-img relative">
        <svg className='absolute w-full h-full' xmlns="http://www.w3.org/2000/svg" width="671" height="720" viewBox="0 0 671 720" fill="none">
        <path d="M621.53 86.76C684.673 163.98 680.175 297.18 652.832 428.22C625.308 559.26 575.118 688.32 492.367 714.42C409.796 740.52 294.665 663.84 200.941 597.6C107.037 531.54 34.5401 475.92 9.71486 399.96C-15.1103 324.18 7.91594 227.88 63.8626 152.46C119.629 77.04 208.137 22.32 317.871 5.39998C427.606 -11.34 558.388 9.71997 621.53 86.76Z" fill="#F3F0EA"/>
        </svg>
        <img src={illustrationImg} alt=""  className='relative z-10'/>
      </div>
    </section>
  )
}

export default Hero
