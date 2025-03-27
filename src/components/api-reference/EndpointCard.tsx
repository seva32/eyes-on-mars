import * as React from 'react'

interface EndpointCardProps {
  method: string
  endpoint: string
  description: string
  response?: string
  children?: React.ReactNode
  onCopy: (text: string) => void
}

export function EndpointCard({
  method,
  endpoint,
  description,
  response,
  children,
  onCopy,
}: EndpointCardProps) {
  return (
    <div className="bg-[#1A1A1F] rounded-[12px] p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#FF4D4D] text-white px-3 py-1 rounded-[4px] text-[12px] font-medium">
          {method}
        </span>
        <code className="text-[#E5E5E7] font-mono text-[14px]">{endpoint}</code>
        <button
          className="ml-auto px-3 py-1 bg-[#333] rounded-[4px] text-[12px] text-[#E5E5E7]"
          onClick={() => onCopy(endpoint)}
        >
          Copy
        </button>
      </div>
      <p className="text-[#9CA3AF] text-[14px] mb-6">{description}</p>
      {response && (
        <>
          <h3 className="text-[#E5E5E7] text-[16px] font-semibold mb-4">
            Response
          </h3>
          <div className="bg-[#0A0A0F] rounded-[8px] p-4">
            <pre className="text-[#E5E5E7] font-mono text-[14px]">
              {response}
            </pre>
          </div>
        </>
      )}
      {children}
    </div>
  )
}
