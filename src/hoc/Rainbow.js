import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'oreange', 'blue', 'green', 'yellow']
  const ramdomColor = colors[Math.floor(Math.random() * 5)]
  const className = ramdomColor + '-text'

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow
