import applicantImg1 from '../../../assets/Cover.png'
import applicantImg2 from '../../../assets/Cover1.png'
import applicantImg3 from '../../../assets/Cover2.png'
import profileImg from '../../../assets/Cover3.png'

const Illustration = () => {
  return (
    <div className="illustration w-[504px] relative p-6 flex flex-col gap-y-2">
        <div className="task flex flex-col gap-y-2 border-2 rounded-2xl border-Black p-2 w-11/12 mx-auto">
            <div className="flex justify-between">
                <h4 className="font-bold">Write a how-to on Open Enterprise</h4>
                <div className="bounty bg-Green rounded-3xl px-2">
                    <p className='text-sm text-White'>1 SHARE</p>
                </div>
            </div>
            <div className="body">
                <p className='text-sm'>Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.</p>
            </div>
        </div>
        <div className="flex justify-between relative">
            <div className="application-widget w-1/2 bg-LightGold flex flex-col gap-y-4 border-2 rounded-2xl border-Black p-2 px-4">
                <h4 className='font-medium'>3 applicants</h4>
                <div className="applicants flex flex-col gap-y-4">
                    <div className="applicant1 flex items-center justify-between">
                        <div className="user flex items-center gap-x-2">
                            <div className="applicant-img">
                                <img className='rounded-full' src={applicantImg1} alt="" />
                            </div>
                            <div className="name">
                                <p className='text-sm'>Jason Kwon</p>
                            </div>
                        </div>
                        <div className="rating flex">
                            <div className="star-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F5C64F"/>
                                </svg>
                            </div>
                            <p>4.8</p>
                        </div>
                    </div>
                    <div className="applicant2 flex justify-between">
                        <div className="user flex items-center gap-x-2">
                            <div className="applicant-img">
                                <img className='rounded-full' src={applicantImg2} alt="" />
                            </div>
                            <div className="name">
                                <p className='text-sm'>Alex Rose</p>
                            </div>
                        </div>
                        <div className="rating flex">
                            <div className="star-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F5C64F"/>
                                </svg>
                            </div>
                            <p>4.5</p>
                        </div>
                    </div>
                    <div className="applicant3 flex justify-between">
                        <div className="user flex items-center gap-x-2">
                            <div className="applicant-img">
                                <img className='rounded-full' src={applicantImg3} alt="" />
                            </div>
                            <div className="name">
                                <p className='text-sm'>Lizzie Ulrich</p>
                            </div>
                        </div>
                        <div className="rating flex">
                            <div className="star-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F5C64F"/>
                                </svg>
                            </div>
                            <p>4.2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-widget border-2 border-Green rounded-2xl p-2 flex flex-col items-center gap-y-2 absolute right-0 top-4">
                <div className="profile-img">
                    <img className='rounded-full' src={profileImg} alt="" />
                </div>
                <div>
                    <h4 className='font-bold'>Alex Rose</h4>
                    <p className='text-xs text-center text-Gray'>UX Writer</p>
                </div>
                <div className="commit-rating flex gap-x-4 justify-between">
                    <div className="commit">
                        <p className='text-sm'>4 commit</p>
                    </div>
                    <div className="rating flex">
                        <div className="star-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                            <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#F5C64F"/>
                            </svg>
                        </div>
                        <p className='text-sm'>4.5</p>
                    </div>
                </div>
                <div className="profile-button bg-Black px-12 py-1 rounded-lg">
                    <button className='text-White'>View Profile</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Illustration
