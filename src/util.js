const setLocation = (lat, long, state) => {
    state.msg.lat = lat
    state.msg.long = long
}
const setShowElement = (state) => {
    state.showElement = true
}
const setError = (err, state) => {
    state.showError = true
    state.msg.err = "Get location failure: " + err.message
}
const initState =(state) =>{
    state.msg={}
    state.showError = false
    state.showElement = false
}

export { setLocation, setShowElement, setError, initState };