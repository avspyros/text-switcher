export function handleUrl(input) {
  return input.toLowerCase().replace(/[^a-z0-9α-ωΑ-ΩίϊΐόάέύϋΰήώΊΪΌΆΈΎΫΉΏ]+/g, "-").replace(/^-+|-+$/g, "")
}

export function handleUpperCase(input) {
  return input.toUpperCase()
}

export function handleLowerCase(input) {
  return input.toLowerCase()
}

export function handleCapitalize(input) {
  if (input) {
    const words = input.split(" ")

    for (let i = 0; i < words.length; i++) {
      if (words[i][0] !== undefined) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
      }
    }
    return words.join(" ")
  }
}

export function handleDash(input) {
  return input.replace(/ +/g, "_")
}