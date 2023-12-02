import Task from "./Task"


const Tasks = () => {
  return ( 
    <section className="mt-20 flex flex-col gap-y-12 mb-20">
        <div className="section-heading mb-10 text-center flex flex-col gap-y-4 w-2/3 mx-auto">
            <h2 className="text-3xl font-bold">Help us improve Open Enterprise</h2>
            <p>As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.</p>
        </div>
        <div className="tasks flex gap-x-4 mb-10">
            <Task title='Ideate a list of features based on the Sociocracy model' description='We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s...' bounty="5 AUT" deadline="Apply by May 15"/>
            <Task title='Update documentation with FAQs' description='Review our community chat for the most frequently asked questions and document answers for our product docs.' bounty="10 AUT" deadline="Apply by May 18"/>
            <Task title='Tutorial video series' description='Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.' bounty="40 AUT" deadline="Apply by May 20"/>
        </div>
        <div className="flex justify-center">
            <button className="button bg-Black px-12 py-2 text-White rounded-md ">View More</button>
        </div>
    </section>
  )
}

export default Tasks
