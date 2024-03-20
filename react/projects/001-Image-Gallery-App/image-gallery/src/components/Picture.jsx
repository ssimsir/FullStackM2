import data from "../helper/data";

export default function Picture() {
    return (
      <div class="picture-main">
        {data.map((item, index) => (
          <div key={index} class = "picture">
            <img src={item.src.large} alt={item.photographer} />
            <h1>{item.photographer}</h1>
          </div>
        ))}
      </div>
    );

  }