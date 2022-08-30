const ConvertStringToHTML = str => {
  let parser = new DOMParser()
  let doc = parser.parseFromString(str, 'text/html')
  return doc.body
}

export default ConvertStringToHTML
