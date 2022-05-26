<template>
  <div class="container-xxl">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Электронная почта</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Введите почту">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Пароль</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Введите пароль">
        </div>
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">Страна</label>
        <select id="inputState" class="form-control">
          <option selected>Выберите страну</option>
          <option>Россия</option>
          <option>Украина</option>
          <option>Китай</option>
          <option>Казахстан</option>
          <option>Другая страна</option>
        </select>
      </div>
      <div class="form-group">
        <div class="form-group col-md-6">
          <label for="inputCity">Город</label>
          <select id="inputCity" class="form-control">
            <option selected>Выберите город</option>
            <option>Москва</option>
            <option>Киев</option>
            <option>Пекин</option>
            <option>Чита</option>
            <option>Другой город</option>
          </select>
        </div>
        <label for="inputAddress">Место жительства</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Введите адрес">
      </div>
      <div class="form-row">
      </div>
      <div class="form-group">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Запомнить меня
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-dark">Регистрация</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyLogin"
}
</script>

<style scoped>

</style>