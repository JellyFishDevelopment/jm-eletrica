import { Link } from 'react-router-dom'
export default function BannerContato() {
  return (
    <div className="flex flex-col sm:flex-row justify-between  items-center p-16 w-full h-96 bg-third-banner bg-cover bg-no-repeat">
      <p className=" mx-auto font-light text-white text-2xl">
        Entre em contato com a EISEN SOLUTIONS
      </p>
      <button className="w-full sm:w-auto mx-auto text-center bg-[#1e55f4] text-white p-6  rounded-2xl px-12 font-bold text-xl 2xl:text-1xl">
        <Link to="/contact">
          <p>Fale conosco</p>
        </Link>
      </button>
    </div>
  )
}
