'use client'
import * as React from 'react'
import { PhotoCard } from './PhotoCard'

export function PhotoGrid() {
  const photos = [
    {
      id: 0,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5d5202a15922d3853bf4463883077a399b81269f',
      camera: 'MAST',
    },
    {
      id: 1,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/423ccce045af1e4d450e84157779a6db43a519d5',
      camera: 'MARDI',
    },
    {
      id: 2,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8fcddcf913459e62bdfa67775cb61709f9c2f28a',
      camera: 'MAST',
    },
    {
      id: 3,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/0b019eb2e0c6e7fcc0b607aad15a091a3264698a',
      camera: 'NAVCAM',
    },
    {
      id: 4,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/60dcfa03f9e44cef14e60f9a59f56365b238de2d',
      camera: 'RHAZ',
    },
    {
      id: 5,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/8c72471c5611d5bbd079c1d4a1dc536243703de6',
      camera: 'MAHLI',
    },
    {
      id: 6,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/c07aaf7629812cc55f472638dd91ecc57d05f540',
      camera: 'NAVCAM',
    },
    {
      id: 7,
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b172f06b93912b55ebdb5a9b5b65b5f87cd21ed8',
      camera: 'NAVCAM',
    },
  ]

  return (
    <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          image={photo.image}
          camera={photo.camera}
        />
      ))}
    </section>
  )
}
