const FooterHome = () => {
  return (
    <section className="relative">
      {/* Sección roja */}
      <div className="bg-red-600 h-20"></div>

      {/* Sección negra */}
      <div className="bg-black h-16"></div>

      {/* botton pokeball */}
      <div className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute bottom-0 left-[50%] -translate-x-1/2 after:content-[''] after:h-12 after:aspect-square after:bg-black after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-black"></div>
    </section>
  )
}
export default FooterHome