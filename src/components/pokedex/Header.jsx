import { useDispatch } from "react-redux"
import { setNameTrainer } from "../../store/slices/nameTrainer.slice"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogOut = () => {
    dispatch(setNameTrainer(""))
  }

  return (
    <section className="relative">
      {/* Sección roja */}
      <div className="bg-red-600 h-20 relative">
        <div className="absolute left-0 bottom-0 w-[220px] xs:w-[290px] sm:w-[400px]">
            <img src="/images/logo.png" alt="" />
        </div>
      </div>

      {/* Sección negra */}
      <div className="bg-black h-12"></div>

      {/* botton pokeball */}
      <div className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute -bottom-4 right-0 -translate-x-3 after:content-[''] after:h-12 after:aspect-square after:bg-black after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black">
      <span onClick={handleClickLogOut} className="text-white text-2xl absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><i className='bx bx-log-out'></i></span>

      </div>
    </section>
  )
}
export default Header