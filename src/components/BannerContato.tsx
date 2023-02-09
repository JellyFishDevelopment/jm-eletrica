import { Link } from 'react-router-dom'
export default function BannerContato() {
  return (
    <div className="flex flex-col sm:flex-row justify-between  items-center p-16 w-full h-96 bg-third-banner bg-cover bg-no-repeat">
      <p className=" mx-auto font-light text-white text-4xl">
        Entre em contato com a JM Elétrica
      </p>
      <button className="w-full sm:w-auto mx-auto text-center bg-[#969696] text-white p-6  rounded-2xl px-12 font-bold text-2xl sm:text-4xl">
        <Link to="/contact">
          <p>Fale conosco</p>
        </Link>
      </button>
    </div>
  )
}
