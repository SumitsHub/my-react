import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImagesRequest, fetchImageSuccess } from '../../actions';

import './styles.css';
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {

    componentDidMount() {
        const { fetchImages, fetchImageSuccess } = this.props;
        fetchImages(key);
        fetch(
            `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`,
        ).then(res => res.json()).then(res => fetchImageSuccess(res))
    }

    render() {
        const { images, loading, error } = this.props;
        return (
            <div className="content">
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <section className="grid">
                        {images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                    </section>
                )}
            </div>
        );
    }
}

export default connect(
    ({ images }) => ({ ...images }),
    dispatch => {
        return {
            fetchImages: (key) => dispatch(fetchImagesRequest(key)),
            fetchImageSuccess: (images)=> dispatch(fetchImageSuccess(images))
        };
    },
)(ImageGrid);
