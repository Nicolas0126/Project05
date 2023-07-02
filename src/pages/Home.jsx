import { useDispatch } from "react-redux"
import FooterHome from "../components/home/FooterHome"
import { setNameTrainer } from "../store/slices/nameTrainer.slice"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate() 

    const handleSubmit = (e) => {
        e.preventDefault()

        const nameTrainer = e.target.nameTrainer.value
        dispatch(setNameTrainer(nameTrainer))
        navigate("/pokedex")
    }

  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen">
        {/* Sección superior */}
        <section className="grid m-auto text-center gap-4">
            <div className="">
                <img className="p-4" src="/images/logo.png" alt="" />
            </div>
            <div className="grid gap-2">
             <h3 className="text-3xl font-bold text-red-500">Hello Trainer!</h3>
            <p className=""> Before we begin, I'd like to know your name...</p>   
            </div>

            <form className="grid place-content-center gap-4 " onSubmit={handleSubmit} action="">
                <input className="shadow-sm shadow-black mx-3 rounded-md" required id="nameTrainer" type="text" />
                <button className="bg-red-500 m-auto px-3 py-1 text-white rounded-sm">Start</button>
            </form>
        </section>

        {/* Sección inferior */}
        <section>
            <FooterHome />
        </section>
    </main>
  )
}
export default Home