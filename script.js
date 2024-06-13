$(document).ready(function () {
  const linesToType = ["Hello Everyone,", "I'm Yashwan Kafle"]

  const lineElements = [$(".line1"), $(".line2"), $(".line3")]

  let lineIndex = 0
  let charIndex = 0

  function typeText() {
    if (lineIndex < linesToType.length) {
      if (charIndex < linesToType[lineIndex].length) {
        lineElements[lineIndex].append(linesToType[lineIndex].charAt(charIndex))
        charIndex++
        setTimeout(typeText, 100)
      } else {
        charIndex = 0
        lineIndex++
        setTimeout(typeText, 100)
      }
    }
  }

  typeText()
})
