import PropTypes from 'prop-types'

export const TableItemMovies = ({movie, handleEditMovie, handleDelteMovie}) => {
    const { id, title, rating, length, genre = "Sin Género", awards } = movie || {};
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>{genre?.name}</td>
            <td>{awards}</td>
            <td>
                <div className="d-flex gap-2 justify-content-around">
                <button className='btn btn-sm btn-primary'>
                        <i className='fas fa-eye'></i>
                    </button>
                    <button className='btn btn-sm btn-success' onClick={() => handleEditMovie(id)}>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-sm btn-danger' onClick={() => handleDelteMovie(id)}>
                        <i className='fas fa-trash'></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItemMovies.propTypes = {
    movie : PropTypes.object,
    handleEditMovie : PropTypes.func,
    handleDelteMovie: PropTypes.func
}