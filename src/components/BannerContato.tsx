import { Link } from 'react-router-dom'
export default function BannerContato() {
  return (
    <div className="flex flex-col sm:flex-row justify-between  items-center p-16 w-full h-96 bg-third-banner bg-cover bg-no-repeat">
      <p className=" mx-auto font-light text-white text-3xl">
        Entre em contato com a JM Elétrica
      </p>
      <button className="w-full sm:w-auto mx-auto text-center bg-[#FAD40F] text-white p-6  rounded-2xl px-12 font-bold text-xl 2xl:text-2xl">
        <Link to="/contact">
          <p>Fale conosco</p>
        </Link>
      </button>
    </div>
  )
}
