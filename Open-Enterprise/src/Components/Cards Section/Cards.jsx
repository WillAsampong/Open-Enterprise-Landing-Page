import Card from "./Card";
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Cards = () => {
  return (
    <div className="mt-20">
      <div className="mb-12 w-2/3 mx-auto">
        <h2 className="text-3xl text-Black font-bold text-center">Reimagining what it means to work</h2>
        <p className="text-center">Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization</p>
      </div>
      <div className="cards flex gap-x-4 justify-evenly mb-20">
        <Card icon={icon1} title='Mordern Workforce' description='Multistakeholder governance aligns employees with the organization’s wider community.'/>
        <Card icon={icon2} title='Meritocratic by design' description='Tokenized ownership aligns deeply commited individuals with the organization’s success'/>
        <Card icon={icon3} title='Engineered for resilience' description='Open Enterprise support best practices in sociocratic management'/>
      </div>
    </div>
  )
}

export default Cards
