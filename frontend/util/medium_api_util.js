export const fetchMedia = () => (
    $.ajax({
        method: 'GET',
        url: '/api/media',
        error: (err) => console.log(err)
    })
);

export const fetchMedium = mediumId => (
    $.ajax({
        method: 'GET',
        url: `/api/media/${mediumId}`
    })
);

export const createMedium = medium => (
    $.ajax({
        method: 'POST',
        url: '/api/media',
        data: medium,
        contentType: false,
        processData: false
    })
);

export const updateMedium = medium => (
    $.ajax({
        method: 'PATCH',
        url: `/api/media/${medium.id}`,
        data: medium,
        contentType: false,
        processData: false
    })
);

export const deleteMedium = mediumId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/media/${mediumId}`
    })
);