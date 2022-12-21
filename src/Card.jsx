import React, { useState } from 'react'

const StyleCard = {
    cardHeader: "card-header",
    cardBody: "card-body",
    cardTitle: "card-title",
    cardText: "card-text",
}
const innerCard = [
    {
        Header: "Header",
        cardTitle: "Primary card title",
        cardText: "Some quick example text to build on the card title and make up the bulk of the card's content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quam autem cumque minus nisi ipsum odit, dolor dolore quae id modi iusto blanditiis recusandae reiciendis qui necessitatibus inventore sit.."
    },
    {
        Header: "Header",
        cardTitle: "Dark card title",
        cardText: "Some quick example text to build on the card title and make up the bulk of the card's content Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum quam autem cumque minus nisi ipsum odit, dolor dolore quae id modi iusto blanditiis recusandae reiciendis qui necessitatibus inventore sit.."
    }
]


const Card = () => {
    const [Sdata, setDatas] = useState(innerCard)
    return (
        <>
            {
                innerCard.map((item) =>
                    <div className="card text-bg-primary mb-3 p-1 m-1 justify-align-content-lg-between" style={{ maxWidth: "23rem" }}>
                        <div className={StyleCard.cardHeader}>{item.Header}</div>
                        <div className={StyleCard.cardBody}>
                            <h5 className={StyleCard.cardTitle}>{item.cardTitle}</h5>
                            <p className={StyleCard.cardText}>{item.cardText}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Card

{/* <div className="card text-bg-primary mb-3 p-1 m-1" style={{ maxWidth: "18rem;" }}>
    <div className={StyleCard.cardHeader}>{innerCard.Header}</div>
    <div className={StyleCard.cardBody}>
        <h5 className={StyleCard.cardTitle}>{innerCard.cardTitle}</h5>
        <p className={StyleCard.cardText}>{innerCard.cardText}</p>
    </div>
</div>*/}