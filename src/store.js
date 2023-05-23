import { createStore } from 'vuex'
import { getGeocode,getTimeZone } from './util.js'

const store = createStore({
    state: {
        msg: '',
        showMsg: false,
        inputMsg: '',
        cities: [],
        currentPageIndex: 1,
        recentSearchCity: {}
    },
    mutations: {
        changeMsgFlag: (state) => {
            state.showMsg = true
        },
        initState: (state) => {
            state.msg = ''
            state.showMsg = false
        },
        setMsg: (state, payload) => {
            state.msg = payload
        },
        setCurrentPageIndex: (state, payload) => {
            state.currentPageIndex = payload
        },
        setCheckedStatus: (state, payload) => {
            state.cities.filter(item => item.id === payload.id)[0].isChecked = payload.isChecked
        },
        deleteCities: (state) => {
            state.cities = state.cities.filter(item => !item.isChecked)
        },
        addCity: (state, payload) => {
            if (payload && payload.trim() !== '') {
                const uuid = state.cities.length === 0 ? 0 : state.cities.map(item => item.id).reduce((max, current) => {
                    return Math.max(max, current);
                }, 0) + 1;
                const newCity = { id: uuid, name: payload, isChecked: false }
                getGeocode(payload)
                    .then(result => {
                        newCity.long = result.longitude
                        newCity.lat = result.latitude
                        newCity.hasGeoCode = true
                        getTimeZone(result.latitude,result.longitude)
                            .then(result => {
                                newCity.timeZoneId = result.timeZoneId
                                newCity.localTime = result.localTime
                                state.cities.push(newCity)
                                state.inputMsg = 'The search city you input was added successfully'
                                state.recentSearchCity=newCity
                            })
                            .catch(error => {
                                newCity.timeZoneId = 'Not Available'
                                newCity.localTime = 'Not Available'
                                state.inputMsg = 'The search city you input was added successfully, but '+ error
                                state.cities.push(newCity)
                                state.recentSearchCity=newCity
                            });
                    })
                    .catch(error => {
                        newCity.long = 'Not Available'
                        newCity.lat = 'Not Available'
                        newCity.timeZoneId = 'Not Available'
                        newCity.localTime = 'Not Available'
                        newCity.hasGeoCode = false
                        state.inputMsg = error
                        state.cities.push(newCity)
                        state.recentSearchCity=newCity
                    });

            } else {
                state.inputMsg = 'The search city you input is empty'
            }

        }
    },
    actions: {
        submitChange: (context, payload) => {
            context.commit('setMsg', payload);
            context.commit('changeMsgFlag');
        },
    },
    getters: {
        cityPagination: (state) => {
            const startIndex = (state.currentPageIndex - 1) * 10
            const endIndex = startIndex + 10
            return state.cities.slice(startIndex, endIndex);
        },
        totalPageCount: state => {
            return Math.ceil(state.cities.length / 10)
        },
        getMarkers:(state)=>{
            const cities = state.cities.filter(item=> item.hasGeoCode).map(item1=> {return {
                position: {
                    lat: item1.lat, 
                    lng: item1.long
                }, 
                label: item1.name.charAt(0).toUpperCase(),
                title: item1.name,
            }})
            return cities
        }

    }
});

export default store;