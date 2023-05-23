import { createStore } from 'vuex';


const store = createStore({
    state: {
        msg: '',
        showMsg: false,
        inputMsg: '',
        // cities: [
        //     { id: 1, name: 'Barrie', isChecked: false },
        //     { id: 2, name: 'Belleville', isChecked: true },
        //     { id: 3, name: 'Brampton', isChecked: true },
        //     { id: 4, name: 'Brant', isChecked: true },
        //     { id: 5, name: 'Brantford', isChecked: true },
        //     { id: 6, name: 'Brockville', isChecked: true },
        //     { id: 7, name: 'Burlington', isChecked: true },
        //     { id: 8, name: 'Cambridge', isChecked: true },
        //     { id: 9, name: 'Clarence-Rockland', isChecked: true },
        //     { id: 10, name: 'Cornwall', isChecked: true },
        //     { id: 11, name: 'Dryden', isChecked: true },
        //     { id: 12, name: 'Elliot Lake', isChecked: true },
        //     { id: 13, name: 'Greater Sudbury', isChecked: true },
        //     { id: 14, name: 'Guelph', isChecked: true },
        //     { id: 15, name: 'Haldimand County', isChecked: true },
        //     { id: 16, name: 'Hamilton', isChecked: true },
        //     { id: 17, name: 'Kawartha Lakes', isChecked: true },
        //     { id: 18, name: 'Kenora', isChecked: true },
        //     { id: 19, name: 'Kingston', isChecked: true },
        //     { id: 20, name: 'Kitchener', isChecked: true },
        //     { id: 21, name: 'London', isChecked: true },
        //     { id: 22, name: 'Markham', isChecked: true },
        //     { id: 23, name: 'Mississauga', isChecked: true },
        //     { id: 24, name: 'Niagara Falls', isChecked: true },
        //     { id: 25, name: 'Norfolk County', isChecked: true },
        //     { id: 26, name: 'North Bay', isChecked: true },
        //     { id: 27, name: 'Orillia', isChecked: true },
        //     { id: 28, name: 'Oshawa', isChecked: true },
        //     { id: 29, name: 'Ottawa', isChecked: true },
        //     { id: 30, name: 'Owen Sound', isChecked: true },
        //     { id: 31, name: 'Pembroke', isChecked: true },
        //     { id: 32, name: 'Peterborough', isChecked: true },
        //     { id: 33, name: 'Pickering', isChecked: true },
        //     { id: 34, name: 'Port Colborne', isChecked: true },
        //     { id: 35, name: 'Prince Edward County', isChecked: true },
        //     { id: 36, name: 'Quinte West', isChecked: true },
        //     { id: 37, name: 'Richmond Hill', isChecked: true },
        //     { id: 38, name: 'Sarnia', isChecked: true },
        //     { id: 39, name: 'Sault Ste. Marie', isChecked: true },
        //     { id: 40, name: 'St. Catharines', isChecked: true },
        //     { id: 41, name: 'St. Thomas', isChecked: true },
        //     { id: 42, name: 'Stratford', isChecked: true },
        //     { id: 43, name: 'Temiskaming Shores', isChecked: true },
        //     { id: 44, name: 'Thorold', isChecked: true },
        //     { id: 45, name: 'Thunder Bay', isChecked: true },
        //     { id: 46, name: 'Timmins', isChecked: true },
        //     { id: 47, name: 'Toronto', isChecked: true },
        //     { id: 48, name: 'Vaughan', isChecked: true },
        //     { id: 49, name: 'Waterloo', isChecked: true },
        //     { id: 50, name: 'Welland', isChecked: true },
        //     { id: 51, name: 'Windsor', isChecked: true },
        //     { id: 52, name: 'Woodstock', isChecked: true },

        // ],
        cities: [],
        currentPageIndex: 1,
        recentSearchCity:{}
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
                console.log(newCity)
                state.cities.push(newCity)
                state.inputMsg = 'The search city you input was added successfully'
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
        }

    }
});

export default store;