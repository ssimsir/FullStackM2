import data from "../helper/data";

export default function Picture() {
    return (
      <div className="pictureContainer">
        {data.map((item, index) => (
          <div key={index} className = "pictureMain">
            <div className="picture"><img src={item.src.large} alt={item.photographer} /></div>
            
            <h1>{item.photographer}</h1>
          </div>
        ))}
      </div>
    );

  }