import PropTypes from 'prop-types';
function Nome({setNome}) {
    return <>
    <input type="text" onChange={(e) => setNome(e.target.value)} />
    </>
}
export default Nome

Nome.propTypes = {
    setNome: PropTypes.func
}
