import FeatureCard from "./FeatureCard"
import FeatureIcon1 from '../../assets/Feature-icon1.png'
import FeatureIcon2 from '../../assets/Feature-icon2.png'
import FeatureIcon3 from '../../assets/Feature-icon3.png'
import Widget1 from './Widgets/Widget1'
import Widget2 from "./Widgets/Widget2"
import Illustration from "./Widgets/Illustration"


const Features = () => {
  return (
    <div className="flex flex-col gap-y-12 space-y-12 mt-20">
        <div className="row-1 flex justify-between">
            <FeatureCard className="" icon={FeatureIcon1} title='Kickstart an organization with your co-founders' description='It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.'/>
            <Widget1 />
        </div>
        <div className="row-2 flex justify-between">
            <Widget2 />
            <FeatureCard className='' icon={FeatureIcon2} title='Onboard users, investors and advisors as you grow' description='You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.'/>
        </div>
        <div className="row-3 flex justify-between">
            <FeatureCard icon={FeatureIcon3} title='Engage highly commited contributors' description='You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.'/>
            <Illustration />
        </div>
    </div>
  )
}

export default Features
