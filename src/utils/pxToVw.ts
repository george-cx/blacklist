// 1440 is the width of the desktop screen based on the design
export const pxToVw = (px: number): string => {
  return `${(px / 1440) * 100}vw`
}

// 375 is the width of the mobile screen based on the design
export const pxToVwMob = (px: number): string => {
  return `${(px / 375) * 100}vw`
}
