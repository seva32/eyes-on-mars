export const rovers = [
  {
    name: 'Curiosity',
    landingDate: 'Aug 6, 2012',
    start: '2012-08-06',
    end: undefined,
    maxSol: undefined,
    image:
      'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/dgotkevm1ecxmzvgeqtb.png',
    image_fallback: 'https://placehold.co/400x300?text=Curiosity',
  },
  {
    name: 'Opportunity',
    landingDate: 'Jan 25, 2004',
    start: '2004-01-25',
    end: '2018-06-10',
    maxSol: 5111,
    image:
      'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/zdgiw32renqj3vknpypu.png',
    image_fallback: 'https://placehold.co/400x300?text=Opportunity',
  },
  {
    name: 'Spirit',
    landingDate: 'Jan 4, 2004',
    start: '2004-01-04',
    end: '2010-03-21',
    maxSol: 2208,
    image:
      'https://res.cloudinary.com/seva32/image/upload/v1742855141/uploads-eom/akgb6pu9l1irwqzhycys.png',
    image_fallback: 'https://placehold.co/400x300?text=Spirit',
  },
]

export const cameras = [
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
]

export const cameraLabels: { [key: string]: string } = {
  FHAZ: 'Front Hazard Avoidance Camera',
  RHAZ: 'Rear Hazard Avoidance Camera',
  MAST: 'Mast Camera',
  CHEMCAM: 'Chemistry and Camera Complex',
  MAHLI: 'Mars Hand Lens Imager',
  MARDI: 'Mars Descent Imager',
  NAVCAM: 'Navigation Camera',
}

export interface Photo {
  id: number
  img_src: string
  sol: number
  earth_date: string
  camera: {
    name: string
    id: number
    rover_id: number
    full_name: string
  }
  rover: {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
  }
}
