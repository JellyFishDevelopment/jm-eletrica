import React from 'react'

interface ServiceCardProps {
  image: React.ReactNode
  text: string
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="bg-[#969696] w-full sm:w-80 rounded-2xl mt-4 text-center p-8">
      <div className=" m-auto w-20">{props.image}</div>
      <p className="text-white mt-8 text-regular text-xl">{props.text}</p>
    </div>
  )
}
