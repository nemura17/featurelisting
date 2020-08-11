import React from 'react'
import '../styles/featureCard.css'

function FeatureCard({feature : {feature, description, image}}) {
    return (
        <div className = 'featureCard'>
            <h2 className = 'featureContent'> {feature} </h2>
            <p className = 'descriptionContent'> {description} </p>
            <img className = 'imageContent' src = {image} alt = '' />
        </div>
    )
}

export default FeatureCard
