import * as React from 'react'

interface Camera {
  code: string
  name: string
}

interface CameraListProps {
  cameras: Camera[]
}

export function CameraList({ cameras }: CameraListProps) {
  return (
    <div className="space-y-4">
      {cameras.map((camera) => (
        <div key={camera.code} className="border-t border-[#333] py-4">
          <div className="grid grid-cols-2 text-[14px]">
            <div className="text-[#E5E5E7] font-medium">{camera.code}</div>
            <div className="text-[#9CA3AF]">{camera.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
