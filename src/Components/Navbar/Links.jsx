import PropTypes from 'prop-types';

const Links = ({route}) => {
    const {name, path}= route
    return (
        
            <li className="mr-10 p-2">
                <a href={path}>{name}</a>
                </li>
       
    );
};
Links.propTypes={
    route: PropTypes.object
}
export default Links;