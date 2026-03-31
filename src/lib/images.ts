// All image paths — single source of truth
// Files live in public/images/Surrey Fly Screens/

const base = '/images/Surrey%20Fly%20Screens'

export const img = {
  heroExterior:        `${base}/NEOSCENICA%20EXTERNAL%20VIEW.jpg`,
  exteriorWindows:     `${base}/NEOSCENICA%20EXTERNAL%20VIEW%202.jpg`,
  bedroomBalcony1:     `${base}/NEOSCENICA%20BEDROOM%20BALCONY%20INTERNAL%20VIEW.jpg`,
  bedroomBalcony2:     `${base}/NEOSCENICA%20BEDROOM%20BALCONY%20VIEW.jpg`,
  bedroomBalcony3:     `${base}/NEOSCENICA%20BEDROOM%20BALCONY%202.jpg`,
  screenMesh1:         `${base}/NEOSCENICA%20MESH%20CLOSE%20UP.jpg`,
  screenMesh2:         `${base}/NEOSCENICA%20BEDROOM%20BALCONY%20PART%20OPEN.jpg`,
  doorDetail:          `${base}/NEOSCENICA%20ON%20CARPET%20NO%20FLOOR%20TRACK.jpg`,
  farmhousePatio:      `${base}/Estetika%201.jpg`,
  farmhouseGarden:     `${base}/Estetika%202.jpg`,
} as const
