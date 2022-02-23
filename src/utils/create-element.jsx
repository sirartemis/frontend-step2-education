const createElement = (tagName, attrs = {}, ...children) => {
  if (tagName === 'fragment') return children;
  const elem = Object.assign(document.createElement(tagName), attrs)
  children.map(child => {
    if (Array.isArray(child)) {
      elem.append(...child)
    } else {
      elem.append(child)
    }
  return child;
  })
  return elem;
}

export default createElement;
