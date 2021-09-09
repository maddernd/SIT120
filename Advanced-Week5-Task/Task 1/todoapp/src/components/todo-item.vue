<template>
<div>
<p>test</p>
    <li> {{todo.text}}</li>
</div>
</template>

<script>
export default {
  name: 'todo-item',
  props: [todo],
  data: {
      groceryList: [
          {id: 0, text: 'Vegetables'},
          {id: 1, text: 'Cheese'},
          {id: 2, text: 'What ever humans are supposed to eat'}
      ]
  }
}
</script>