
import { Link } from 'react-router-dom'
import tobiShopImg from "../../../public/ProjectImages/TobiShop.png"
import hikesTravelImg from "../../../public/ProjectImages/HikesTravel.png"
import weatherAppImg from "../../../public/ProjectImages/Small Projects/weacther-app.png"
import todolistImg from "../../../public/ProjectImages/Small Projects/to-do-list.png"
import taskManagerImg from "../../../public/ProjectImages/Small Projects/taskManager.png"
import ticTacToeImg from "../../../public/ProjectImages/Small Projects/ticTacToe.png"

const Projects = () => {
  return (
    <div>
       <p className="text-center text-3xl pt-5">My Projects</p>
      <div className="md:w-11/12 w-full mx-auto">
      <div className="w-full h-1/2 lg:flex mt-4 items-center gap-x-3 justify-around">
      <div className="lg:w-2/5 w-ull h-full mb-6 lg:mb-0">
      <Link to={"https://tobishop.netlify.app/"} target="_blank" rel="noopener noreferrer"><img src={tobiShopImg} alt="" className="w-full h-full cursor-pointer hover:opacity-80 duration-300 ease-in-out" />
      <p className='text-center mt-3'>TobiShop E Commerce Website </p>
      </Link>
      </div>
      <div className="lg:w-2/5 w-full h-full">
      <Link to={"https://hikestravels.netlify.app/"} target="_blank" rel="noopener noreferrer"><img src={hikesTravelImg} alt="" className="w-full h-full cursor-pointer hover:opacity-80 duration-300 ease-in-out" />
      <p className='text-center mt-3'>HikeTravels Travel Booking Website </p>
      </Link>
      </div>
      </div>
      <div className="w-full h-1/3 mt-7">
        <p className="text-center text-3xl">Other Basic Projects</p>
        <div className="w-full flex items-center justify-around mt-5 flex-wrap gap-y-4">
          <Link to={'https://taskmanager-1.s3.ap-southeast-2.amazonaws.com/index.html'} target="_blank" rel="noopener noreferrer"><img src={taskManagerImg} alt="" className="md:h-44 w-40 md:w-fit h-28 hover:opacity-80 cursor-pointer duration-300 ease-in-out" /><p className='text-center mt-3'>Task Manager App</p></Link>
          <Link to={'https://tictactoe2.s3.ap-southeast-2.amazonaws.com/index.html'} target="_blank" rel="noopener noreferrer"><img src={ticTacToeImg} alt="" className="md:h-44 w-40 md:w-fit h-28 md:mr-0 hover:opacity-80 cursor-pointer duration-300 ease-in-out" /><p className='text-center mt-3'>Tic Tac Toe Game </p></Link>
          <Link to={'https://weather-forecast-app.s3.ap-southeast-2.amazonaws.com/index.html'} target="_blank" rel="noopener noreferrer"><img src={weatherAppImg} alt="" className="md:h-44 w-40 md:w-fit h-28 hover:opacity-80 cursor-pointer duration-300 ease-in-out bg-center" /><p className='text-center mt-3'>Weather App </p></Link>
          <Link to={'https://to-do-list-webpage.s3.ap-southeast-2.amazonaws.com/index.html'} target="_blank" rel="noopener noreferrer"><img src={todolistImg} alt="" className="md:h-44 w-40 h-28 md:w-fit hover:opacity-80 cursor-pointer duration-300 ease-in-out" /><p className='text-center mt-3'>To-Do List</p></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
