interface TrabalhoCardProps {
  image: React.ReactNode
  title: string
  description: string
  serviceType: string
}

export default function TrabalhoCard(props: TrabalhoCardProps) {
  return (
    <div className="flex w-full h-[500px] pointer-events-none">
      <div className="bg-[#D9D9D9] w-[1000px] h-[450px] mr-8  p-10 text-center rounded-2xl">
        <h4 className="font-bold text-4xl">{props.title}</h4>
        <p className="font-light text-2xl my-16">{props.description}</p>
        <p className="font-light text-2xl">
          Tipo de serviço: {props.serviceType}
        </p>
      </div>
      <img
        className="w-[450px] h-[450px]"
        src={`${props.image}`}
        alt="Imagem componente"
      />
    </div>
  )
}
