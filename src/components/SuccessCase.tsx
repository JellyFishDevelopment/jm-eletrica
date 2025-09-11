interface SuccessCaseProps {
  CompanyImage?: string
  CompanyText?: string
}

export default function SuccessCase(props: SuccessCaseProps) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      {props.CompanyImage ? (
        <img src={`${props.CompanyImage}`} alt="Imagem empresa" className="w-40 sm:w-64 h-40 sm:h-64" />
      ) : (
        <div className="mx-auto w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-[#201E1E]"></div>
      )}
      <p className="text-black mt-4 font-light text-2xl text-center">
        {props.CompanyText || ''}
      </p>
    </div>
  )
}
