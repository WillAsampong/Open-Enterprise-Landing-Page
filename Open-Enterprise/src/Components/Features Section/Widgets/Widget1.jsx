import memberImg1 from '../../../assets/Dillion.png'
import memberImg2 from '../../../assets/Anna Olsen 1.png'
import memberImg3 from '../../../assets/Kas Moss 1.png'

const Widget1 = () => {
  return (
    <div className="members-widget w-1/3 rounded-2xl border-4 border-Black p-4 flex flex-col gap-y-6">
      <h2 className='font-medium text-2xl'>Memebers</h2>
      <div className="member flex gap-x-4">
        <div className="member-img">
          <div className="mask"></div>
          <img className='rounded-full' src={memberImg1} alt="" />
        </div>
        <div className="name-shares">
          <div className="name font-medium">
            <h4>Dillion Kydd</h4>
          </div>
          <div className="shares">
            <p>100 shares</p>
          </div>
        </div>
      </div>
      <div className="member flex gap-x-4">
        <div className="member-img">
          <img className='rounded-full' src={memberImg2} alt="" />
        </div>
        <div className="name-shares">
          <div className="name font-medium">
            <h4>Anna Olsen</h4>
          </div>
          <div className="shares">
            <p>100 shares</p>
          </div>
        </div>
      </div>
      <div className="member flex gap-x-4">
        <div className="member-img">
          <img className='rounded-full' src={memberImg3} alt="" />
        </div>
        <div className="name-shares">
          <div className="name font-medium">
            <h4>Kas Moss</h4>
          </div>
          <div className="shares">
            <p>100 shares</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget1
