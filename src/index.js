/**
 * Copyright (c) 2019 zewail
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

module.exports = function (target) {
  if (typeof target === 'function') {
    const keys = Reflect.ownKeys(target)
    if (!keys.includes('arguments') && !keys.includes('caller')) {
      return true
    }
    return false
  }
  return false
}