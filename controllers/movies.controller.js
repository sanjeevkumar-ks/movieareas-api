export const MovieIndex = (req, res) => {
    res.send('Get all movies');

}

export const MovieCreate = (req, res) => {
    res.send('Create a new movie');
}

export const MovieUpdate = (req, res) => {
    res.send('Update a movie with id: ' + req.params.id);
}

export const MovieDelete = (req, res) => {
    res.send('Delete a movie with id: ' + req.params.id);
}   