import React from 'react'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about') // Redirecionamento programado
  }, 2000)
  
  return (
    <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis doloribus architecto porro quos. Tempora eum quia dolores blanditiis incidunt magni neque quas ipsam nesciunt consequuntur, ipsa est in nobis.</p>
    </div>
  )
}

export default Contact



