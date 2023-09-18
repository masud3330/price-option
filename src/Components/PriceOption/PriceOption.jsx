import PropTypes from 'prop-types';

const PriceOption = ({member}) => {
    const {name, membership_price, features}= member;
    return (
        <div className="bg-blue-500 text-center text-white p-4 rounded-lg" >
            <span className="text-3xl font-extrabold">{membership_price}</span>
            <span>/mon</span>
            <h2 className="text-2xl font-medium">{name}</h2>
        </div>
    );
};
PriceOption.propTypes={
    member:PropTypes.object  
}
export default PriceOption;