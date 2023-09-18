import PropTypes from 'prop-types';
import { AiOutlineCaretRight } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div >
            <ul >
            
            <li className='flex items-center '> <AiOutlineCaretRight className='text-xl text-green-700'></AiOutlineCaretRight> {feature}</li>
            
            </ul>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;