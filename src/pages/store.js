import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            cols: [
                {title: 'ID', name: 'id'},
                {title: 'Фамилия', name: 'surname'},
                {title: 'Имя', name: 'name'},
                {title: 'Отчество', name: 'dad_name'},
                {title: 'Email', name: 'mail'},
                {title: 'Телефон', name: 'phone'},
                {title: 'Дата рождения', name: 'born'},
                {title: 'Действия', name: 'for_action'}
            ],
            rows: JSON.parse(window.localStorage.getItem('rows')) || []
        }
    },
    mutations: {
        addRow(state, row) {
            state.rows.push({
                surname: row.surname,
                name: row.name,
                dad_name: row.dad_name,
                mail: row.mail,
                phone: row.phone,
                born: row.born,
                for_action: row.for_action,
                id: (Math.max.apply(null, [0, ...state.rows.map(({id}) => id)])) + 1
            })
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        },
        removeRow(state, id) {
            state.rows.splice(state.rows.findIndex(({id: prodId}) => id === prodId), 1)
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        }
    },
    actions: {
        removeRow({commit}, id) {
            commit('removeRow', id)
        }
    }
})

export default store