class ValidationError extends Error {}

const handleError = (err, req, res, next) => {

    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Sorry. Try again in few minutes.'
        })
}

module.exports = {
    handleError,
    ValidationError,
}