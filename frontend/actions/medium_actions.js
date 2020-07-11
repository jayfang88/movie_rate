import * as MediumApiUtil from '../util/medium_api_util';

export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
export const RECEIVE_MEDIUM = 'RECEIVE_MEDIUM';
export const REMOVE_MEDIUM = 'REMOVE_MEDIUM';
export const RECEIVE_MEDIUM_ERRORS = 'RECEIVE_MEDIUM_ERRORS';

const receiveMedia = media => ({
    type: RECEIVE_MEDIA,
    media
});

const receiveMedium = medium => ({
    type: RECEIVE_MEDIUM,
    medium
});

const removeMedium = mediumId => ({
    type: REMOVE_MEDIUM,
    mediumId
});

const receiveErrors = errors => ({
    type: RECEIVE_MEDIUM_ERRORS,
    errors
});

export const fetchMedia = () => dispatch => (
    MediumApiUtil.fetchMedia()
        .then(media => dispatch(receiveMedia(media)))
);

export const fetchMedium = mediumId => dispatch => (
    MediumApiUtil.fetchMedium(mediumId)
        .then(medium => dispatch(receiveMedium(medium)))
);

export const createMedium = medium => dispatch => (
    MediumApiUtil.createMedium(medium)
        .then(medium => (
            dispatch(receiveMedium(medium))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const updateMedium = medium => dispatch => (
    MediumApiUtil.updateMedium(medium)
        .then(medium => (
            dispatch(receiveMedium(medium))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const deleteMedium = mediumId => dispatch => (
    MediumApiUtil.deleteMedium(mediumId)
        .then(() => dispatch(removeMedium(mediumId)))
);