import { getGradesFromAscentList } from '../utilities/utilities'
import { getStyleColor } from '../utilities/colors'

export default (ascentList) => {
  const x = getGradesFromAscentList(ascentList)
  const firstGo = x.map(
    (grade) =>
      ascentList.filter(
        (ascent) => ascent.topoGrade === grade && ascent.numberOfTries === 1
      ).length
  )
  // const flash = x.map((grade) => ({
  //   grade,
  //   count: ascentList.filter(
  //     (ascent) => ascent.topoGrade === grade && ascent.flash === true
  //   ).length,
  // }))
  const twoAndMoreTries = x.map(
    (grade) =>
      ascentList.filter(
        (ascent) => ascent.topoGrade === grade && ascent.numberOfTries >= 2
      ).length
  )
  return {
    x,
    y: [
      {
        data: twoAndMoreTries,
        name: 'Second Go and +',
        color: getStyleColor('twoAndMore'),
        type: 'column',
      },
      {
        data: firstGo,
        name: 'First Go',
        color: getStyleColor('one'),
        type: 'column',
      },
    ],
    title: 'Number of Ascents by Grade by Style',
    stacking: 'normal',
  }
}
