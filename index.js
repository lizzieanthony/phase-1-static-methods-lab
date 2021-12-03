class Formatter {
  static capitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize (str) {
    return str.replace(/[^A-Za-z0-9-' ']/g, '')
  }

    static titleize (str) {
      const words = str.toLowerCase().split(" ");
    let newWords = words.map(word => {
      if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
        return word[0].toUpperCase() + word.slice(1)
      } else {
        return word
      }
    }).join(" ")
    return newWords[0].toUpperCase() + newWords.slice(1)
    }
}