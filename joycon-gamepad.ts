const options: Options = {
  wallThickness: 4,
  wallShrouding: 0,
  webThickness: 0,
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwType: 'screw insert',
  screwSize: 'M3',
  screwCountersink: true,
  rounded: {},
  connector: 'trrs',
  connectorSizeUSB: 'average',
  connectorIndex: -1,
  microcontroller: 'kb2040-adafruit',
  fastenMicrocontroller: true,
  verticalClearance: 0.1,
  clearScrews: true,
  shell: { type: 'basic', lip: false },
}
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// screwIndices: [13.5, 3.5, 23.5, 28.5, 18.5, 8.5, 39.5]
// connectorIndex: 36.2

const curvature = {
  curvatureOfColumn: 15,
  curvatureOfRow: 5,
  spacingOfRows: 20.5,
  spacingOfColumns: 21.5,
}

/**
 * Useful for setting a different curvature
 * for the pinky keys.
 */
const pinkyCurvature = {
  ...curvature,
  curvatureOfColumn: 15,
}

/**
 * The plane used to position the upper keys.
 * It's rotated by the tenting and x rotation
 * then translated by the z offset.
 */
const upperKeysPlane = new Trsf()
  .rotate(12, [0, 0, 0], [0, 1, 0], false)
  .rotate(1, [0, 0, 0], [1, 0, 0], false)
  .translate(0, 0, 0, false)

/** Definitions for the upper keys. */
const fingers: Key[] = [
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 1,
      letter: '6',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: -2,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 2,
      letter: 'y',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      letter: 'h',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: 'n',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 1,
      letter: '7',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: -2,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 2,
      letter: 'u',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      home: 'index',
      letter: 'j',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: 'm',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 1,
      letter: '8',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: -2,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 2,
      letter: 'i',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: -1,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      home: 'middle',
      letter: 'k',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 0,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: ',',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 1,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: '>',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 2,
      })
      .translate(0, 2.8, -6.5)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 1,
      letter: '9',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: -2,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 2,
      letter: 'o',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: -1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      home: 'ring',
      letter: 'l',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 0,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: '.',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 1,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: '<',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 2,
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 1,
      letter: '0',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: -2,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 2,
      letter: 'p',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: -1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      home: 'pinky',
      letter: ';',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: 0,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 4,
      letter: '/',
    },
    aspect: 1,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 1,
        row: 1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: { profile: 'xda', row: 1 },
    aspect: 1.5,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2.25,
        row: -2,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: { profile: 'xda', row: 2 },
    aspect: 1.5,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2.25,
        row: -1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: {
      profile: 'xda',
      row: 3,
      letter: "'",
    },
    aspect: 1.5,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2.25,
        row: 0,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
  {
    type: 'mx-better',
    keycap: { profile: 'xda', row: 4 },
    aspect: 1.5,
    cluster: 'fingers',
    position: new Trsf()
      .placeOnMatrix({
        ...pinkyCurvature,
        column: 2.25,
        row: 1,
      })
      .translate(0, -13, 6)
      .transformBy(upperKeysPlane),
  },
]

/**
 * The plane used to position the thumbs.
 * It's defined using a nearby key position,
 * then offset by some amount.
 */
const thumbOrigin = new Trsf()
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .rotate(-11.890346750358203, [0, 0, 0], [1, 0, 0])
  .rotate(-24.800771474656102, [0, 0, 0], [0, 1, 0])
  .rotate(34.450218909733955, [0, 0, 0], [0, 0, 1])
  .translate(-35.78333333333333, -25.666666666666668, -7.083333333333333)
  .translateBy(
    new Trsf()
      .placeOnMatrix({
        ...curvature,
        row: 1,
        column: -2,
      })
      .transformBy(upperKeysPlane)
      .translate(8.75, -8.75, 0),
  )
  .translate(4, -5, 4)

/** The curvature of the thumb cluster. */
const thumbCurvature = {
  curvatureOfRow: 0,
  curvatureOfColumn: 0,
  spacingOfColumns: 20,
  spacingOfRows: 20,
}

const thumbs: Key[] = [
  {
    type: 'joycon',
    cluster: 'thumbs',
    aspect: 1,
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(3.3, [0, 0, 0], [0, 1, 0])
      .rotate(-8.2, [0, 0, 0], [0, 0, 1])
      .placeOnMatrix({
        ...thumbCurvature,
        column: 0.4,
        row: -0.34,
      })
      .translate(-5, 0, 12)
      .transformBy(thumbOrigin),
  },
  {
    type: 'mx-better',
    keycap: { profile: 'xda', row: 5 },
    cluster: 'thumbs',
    aspect: 1,
    position: new Trsf()
      .rotate(15.1, [0, 0, 0], [1, 0, 0])
      .rotate(16, [0, 0, 0], [0, 1, 0])
      .rotate(-21.8, [0, 0, 0], [0, 0, 1])
      .placeOnMatrix({
        ...thumbCurvature,
        column: 1.43,
        row: -0.06,
      })
      .translate(0, 0, 0.3)
      .transformBy(thumbOrigin),
  },
  {
    type: 'evqwgd001',
    cluster: 'thumbs',
    aspect: 1,
    position: new Trsf()
      .rotate(20, [0, 0, 0], [1, 0, 0])
      .rotate(20, [0, 0, 0], [0, 1, 0])
      .rotate(2.6, [0, 0, 0], [0, 0, 1])
      .placeOnMatrix({
        ...thumbCurvature,
        column: -0.72,
        row: -0.42,
      })
      .translate(-7, 0, 15)
      .transformBy(thumbOrigin),
  },
]

const wristRestOrigin = new Trsf()
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .translateBy(
    new Trsf()
      .placeOnMatrix({
        ...curvature,
        row: 1,
        column: -2,
      })
      .transformBy(upperKeysPlane)
      .translate(8.75, -8.75, 0),
  )
  .translate(4, -5, 4)

export default {
  ...options,
  wristRestOrigin,
  keys: [...fingers, ...thumbs],
}
