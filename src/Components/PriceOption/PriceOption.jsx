import PropTypes from 'prop-types';
import Feature from './Feature/Feature';

const PriceOption = ({member}) => {
    const {name, membership_price, features}= member;
    return (
      
       
         <div className="bg-blue-500  text-white p-4 rounded-lg flex flex-col mt-4" >
            <h2 className='text-center'>
            <span className="text-6xl font-extrabold">{membership_price}</span>
            <span>/mon</span>
            </h2>
            <h2 className="text-2xl font-medium my-2">{name}</h2>
           <div className='flex-grow my-4 '>
           {
                features.map((feature, index)=> <Feature key={index} feature={feature} ></Feature>)
            }
           </div>
            <button className='bg-green-500 w-full hover:bg-green-700 p-1 rounded-lg'>Buy Now</button>
        </div>
      
    );
};
PriceOption.propTypes={
    member:PropTypes.object  
}
export default PriceOption;