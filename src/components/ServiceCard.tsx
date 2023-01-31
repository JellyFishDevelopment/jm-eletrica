import React from 'react'

interface ServiceCardProps {
  image: React.ReactNode
  text: string
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="bg-[#969696] w-80 rounded-2xl text-center p-8">
      <div className=" m-auto w-20">{props.image}</div>
      <p className="text-white mt-8 text-regular text-xl">{props.text}</p>
    </div>
  )
}
