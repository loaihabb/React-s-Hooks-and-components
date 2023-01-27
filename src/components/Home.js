import React from 'react'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import Cards from "./Cards";
import NotFound from "./NotFound";
const data = [
    { title: "title1", description: "Description1", img: img1 },
    { title: "title2", description: "Description2", img: img2 },
    { title: "title3", description: "Description3", img: img3 },
    { title: "title4", description: "Description4", img: img4 }]


const printTitle = (message) => {
    alert("you,ve clicked " + message)
}

const Home = () => {
    return (
        <div>
            {
                data.length ? (data.map((Item, index) => {
                    return (
                        <Cards key={index} title={Item.title} description={Item.description} img={Item.img} clickMe={printTitle} />
                    )
                })) : (<NotFound message="No Data Cards Found ! " color="danger" />)
            }
        </div>
    )
}

export default Home
