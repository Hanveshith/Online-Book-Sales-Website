const Logout = (request,response) => {
    response.cookie('token','').json('ok')
}

module.exports = {Logout};