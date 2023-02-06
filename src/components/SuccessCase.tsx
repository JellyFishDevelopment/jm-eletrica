interface SuccessCaseProps {
  CompanyImage?: string
  CompanyText: string
}

export default function SuccessCase(props: SuccessCaseProps) {
  return (
    <div className="mt-8">
      {props.CompanyImage ? (
        <img src={`${props.CompanyImage}`} alt="Imagem empresa" />
      ) : (
        <div className="mx-auto w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-[#201E1E]"></div>
      )}
      <p className="text-black mt-4 font-light text-4xl text-center">
        {props.CompanyText}
      </p>
    </div>
  )
}
