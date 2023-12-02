import jImg from '../../../assets/Jassir Jonis 1.png'

const Widget2 = () => {
  return (
    <div className="proposal-widget flex flex-col p-4 gap-y-4 border-4 border-Black rounded-2xl w-1/3">
    <div className="flex gap-x-4">
        <div className="j-img">
            <img className='rounded-full' src={jImg} alt="" />
        </div>
        <div className="name-title">
            <div className="name">
                <h4 className='font-bold text-xl'>Jassir Jonis</h4>
            </div>
            <div className="title">
                <p>Pre-seed angel investor</p>
            </div>
        </div>
    </div>
    <p>Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.</p>
    <div className="flex justify-between">
        <div className="commit">
            <p>COMMIT</p>
            <p>10,000 DAI</p>
        </div>
        <div className="shares">
            <p>SHARES</p>
            <p>20</p>
        </div>
    </div>    
    <button className="bg-Black text-White px-12 rounded-md py-2">Go to vote</button>
    </div>
  )
}

export default Widget2
