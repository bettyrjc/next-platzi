import React, { Component } from 'react'

 class About extends Component {
  render() {
    return (
      <div>
        <h2>Soy desarrolladora frontend</h2>
        <p>Aprendiendo next por primera vez</p>
        <a>bettyjimenez.com</a>

        <img src="../static/credit-card.png"/>
      <style jsx>
        {`
        img{
          width: 32px;
          height:32px;
        }
          h2{
            color: purple;
          }
          p{
            color: gray;
          }
          a{
            color:white
          }
        `}
      </style>
      <style jsx global>{`
        body {
          background: red;
        }
      `}</style>
      </div>
    )
  }
}
export default About;