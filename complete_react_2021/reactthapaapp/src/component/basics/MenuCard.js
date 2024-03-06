import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);

  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem) => {

        const{ id, name, category, image, description} = curElem;

        return(
        <>
        <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                <span className="card-number card-circle subtle"></span>
                <span className="card-author subtle"></span>
                 <h2 className="card-title"></h2>
                 <span className="card-description subtle">
                    I love Maggi realy oo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </span>
                <div className="crad-read">Read</div>
                </div>
                <img src={image}
                 alt="image"
                className="card-media"/>
        <span className='card-tag subtle'>Order Now</span>

            </div>
        </div>
        </>
        );
    })}
    </section>
    
 </>
  );
};

export default MenuCard;