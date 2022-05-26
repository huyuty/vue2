<template>
  <header class="p-3 bg-danger text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-md-auto me-lg-auto  justify-content-center mb-md-0">
          <li><a href="/" type="button" class="btn btn-dark">Главный</a></li>
          <li><a href="/table_phys" type="button" class="btn btn-dark">Данные страхователей</a></li>
          <li><a  type="button" class="btn btn-dark">Заказы</a></li>
          <li><a  type="button" class="btn btn-dark"> Договора</a></li>
          <li><a  type="button" class="btn btn-dark">О компании</a></li>
        </ul>

        <div class="text-end" >
          <a href="/login" type="button" class="btn btn-dark"><ya-tr-span data-index="23-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="LoginSign-up" data-translation="Регистрация" data-type="trSpan" data-selected="false">Регистрация</ya-tr-span></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>

</style>