import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  juiceObj: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string.isRequired,
};

function ProductCard({ juiceObj, className }) {
  const { title, price, nicotine_strengths, image_url } = juiceObj;

  const renderNicOptions = () =>
  nicotine_strengths.map(strength => (
    <li
      key={`card-${strength}`}
      className={`homepage-juices-grid-card-desc-nicotine-options-${strength}`}
    >{strength}</li>
  ));


  return (
    <div className={`${className}-parent`}>
      <img
        src={image_url}
        alt="Juice Card"
        className={`${className}-image`}
      />
      <div className={`${className}-desc-parent`}>
        <a href='#' ><h4 className={`${className}-desc-title`}>
          {title}
        </h4></a>
        <div className={`${className}-desc-price`}>
          <a href='#'>  <h2 className={`${className}-desc-price-title`}>
            <FontAwesome name="facebook-square" />
            {`${price}` || ' 30.00'}
          </h2></a>
          <p className={`${className}-desc-price-tax`}></p>
        </div>
        <div className={`${className}-desc-shipping`}>
          <p>Biggest Song</p>
        </div>
        <div className={`${className}-desc-nicotine-title`}>


          Lie to me
        </div>
        <div className={`${className}-desc-nicotine-options`}>
          <ul className={`${className}-desc-nicotine-options-list`}>
            {renderNicOptions()}
          </ul>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = propTypes;
export default ProductCard;
