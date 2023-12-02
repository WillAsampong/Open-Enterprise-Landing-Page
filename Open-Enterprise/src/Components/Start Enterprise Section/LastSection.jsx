import pabloSignImg from '../../assets/pablo-sign-in.png'
 
const LastSection = () => {
  return (
    <div>
      <section className="mt-12 mb-12 flex">
      <div className="w-1/3 flex flex-col gap-y-4 my-auto basis-1/2">
        <h1 className="text-[Bely Display] text-3xl text-Black font-bold">Start an Open Enterprise</h1>
        <p className='text-Gray text-md'>If you can’t wait to run a new or existing organization on Open Enterprise and are willing to explore and navigate the beta, we’d love to get you started.</p>
        <button className="px-5 py-3 bg-Green rounded-md text-white w-[219px]">Request Early Access</button>
      </div>
      <div className="">
        <img src={pabloSignImg} alt=""  className=''/>
      </div>
    </section>
    </div>
  )
}

export default LastSection
