interface SuccessCaseProps {
  CompanyImage?: string
  CompanyText: string
}

export default function SuccessCase(props: SuccessCaseProps) {
  return (
    <div>
      {props.CompanyImage ? (
        <img src={`${props.CompanyImage}`} alt="Imagem empresa" />
      ) : (
        <div className="w-64 h-64 rounded-full bg-[#201E1E]"></div>
      )}
      <p className="text-black mt-4 font-light text-4xl text-center">
        {props.CompanyText}
      </p>
    </div>
  )
}
