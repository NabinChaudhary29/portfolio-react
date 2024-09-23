import React from 'react'

export const Card = ({image,github,url,title,description,date}) => {
  return (
    <div className="project-card">
                    <div className="top">
                         <img src={image} alt="" width="100%"/>
                    </div>
                    <div className="bottom container">
                        <div className="links">
                            <a href={github}><i className="fa-brands fa-github"></i></a>
                            <a href={url}><i className="fa-brands fa-chrome"></i></a>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{date}</p>
                    </div>
                </div>
  )
}
