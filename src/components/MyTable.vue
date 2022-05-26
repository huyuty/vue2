<template>
  <main>
    <table class="table table-striped">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Отчетсво</th>
        <th scope="col">Телефон</th>
        <th scope="col">Электронный адрес</th>
        <th scope="col">Номер договора</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Иван</td>
        <td>Абрамов</td>
        <td>Сергеевич</td>
        <td>+0-000-000-00-00</td>
        <td>rabriroifaca-4466@yopmail.com</td>
        <td>А34234МС</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Алексей</td>
        <td>Туринский</td>
        <td>Олегович</td>
        <td>+1-111-111-11-11</td>
        <td>groquallucuye-7752@yopmail.com</td>
        <td>А67534ГД</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Марина</td>
        <td>Тюменская</td>
        <td>Викторовна</td>
        <td>+2-222-222-22-22</td>
        <td>yemmafrazussoi-7017@yopmail.com</td>
        <td>И6445ТЙ</td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<script>

export default {
  computed: {
    cols() {
      return this.$store.state.cols
    },
    rows() {
      return this.$store.state.rows
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.$store.commit('addRow', {surname: e.target.elements.surname.value,
                                    name: e.target.elements.name.value,
                                    dad_name: e.target.elements.dad_name.value,
                                    mail: e.target.elements.mail.value,
                                    phone: e.target.elements.phone.value,
                                    born: e.target.elements.born.value,
                                    for_action: e.target.elements.for_action,
                                    })
    },
    removeCard(id) {
      this.$store.dispatch('removeRow', id)
    }
  }
}

</script>

<style scoped>

</style>