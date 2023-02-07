import { Link } from 'react-router-dom'

interface ServicosProps {
  image: React.ReactNode
  title: string
  description: string
}

export default function CartaoServico(props: ServicosProps) {
  return (
    <div className="bg-[#969696] sm:w-1/2 rounded-2xl text-center p-8">
      <div className="m-auto w-20">{props.image}</div>
      <p className="text-white mt-2 font-regular text-4xl">{props.title}</p>
      <p className="text-white mt-4 font-light text-2xl">{props.description}</p>
      <button
        type="button"
        className="px-4 py-6 mt-4 font-regular text-base bg-white text-black rounded-full"
      >
        <Link to="/laudos">Saiba mais sobre os nossos serviços</Link>
      </button>
    </div>
  )
}
