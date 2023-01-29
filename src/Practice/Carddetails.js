import React from 'react';
import "./Carddetails.css"
import Cardsample from './Cardsample';
const Carddetails = [
  {
    title: "Traditional Long Dress",
    image:
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: ["Blue", "Red", "Grey"],
    rate: 4.8,

    coupan: "Monday Happy",
    coupancode: "#MONHPY",
  },
  {
    title: "Traditional Long Dress",
    image:
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: ["Blue", "Red", "Grey"],
    rate: 4.8,

    coupan: "Monday Happy",
    coupancode: "#MONHPY",
  },
  {
    title: "Traditional Long Dress",
    image:
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: ["Blue", "Red", "Grey"],
    rate: 4.8,

    coupan: "Monday Happy",
    coupancode: "#MONHPY",
  },
  {
    title: "Traditional Long Dress",
    image:
      "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: ["Blue", "Red", "Grey"],
    rate: 4.8,

    coupan: "Monday Happy",
    coupancode: "#MONHPY",
  },
];
function Card(){

    return (
      <div className="Card">
        {Carddetails.map((value) => (
          <Cardsample
            title={value.title}
            color={value.color}
            rate={value.rate}
            image={value.image}
            coupan={value.coupan}
            coupancode={value.coupancode}
          />
        ))}
      </div>
    );
}
export default Card;