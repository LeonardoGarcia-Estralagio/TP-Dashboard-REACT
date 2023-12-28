import PropTypes from 'prop-types';

export const ContentRowItemGenre = ({ title }) => {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {title}
                </div>
            </div>
        </div>
    )
}

ContentRowItemGenre.propTypes = {
    title: PropTypes.string,
}