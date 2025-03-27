import * as React from 'react'

interface Parameter {
  name: string
  type: string
  description: string
}

interface ParameterTableProps {
  parameters: Parameter[]
}

export function ParameterTable({ parameters }: ParameterTableProps) {
  return (
    <div className="space-y-0">
      {parameters.map((param) => (
        <div key={param.name} className="border-t border-[#333] py-4">
          <div className="grid grid-cols-3 text-[14px]">
            <div className="text-[#E5E5E7]">{param.name}</div>
            <div className="text-[#FF4D4D]">{param.type}</div>
            <div className="text-[#9CA3AF]">{param.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
