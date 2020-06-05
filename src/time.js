const S_IN_MIN = 60
const H_IN_DAY = 24
const D_IN_WEEK = 7
const S_IN_HOUR = S_IN_MIN * S_IN_MIN
const H_IN_WEEK = H_IN_DAY * D_IN_WEEK
const MIN_IN_HOUR = 60

const MS_IN_SEC = 1000
const MS_IN_MIN = S_IN_MIN * MS_IN_SEC
const MS_IN_HOUR = S_IN_MIN * MS_IN_MIN
const MS_IN_DAY = H_IN_DAY * MS_IN_HOUR
const MS_IN_WEEK = 7 * MS_IN_DAY

module.exports = {
  S_IN_MIN,
  H_IN_DAY,
  D_IN_WEEK,
  S_IN_HOUR,
  H_IN_WEEK,
  MIN_IN_HOUR,

  MS_IN_SEC,
  MS_IN_MIN,
  MS_IN_HOUR,
  MS_IN_DAY,
  MS_IN_WEEK
}
