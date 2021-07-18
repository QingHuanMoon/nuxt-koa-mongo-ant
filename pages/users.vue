<template>
  <section>
    <ModuleTableComponent
    :columns="columns"
     />
  </section>
</template>

<script>
import schema from '../server/model/userSchema'
export default {
  name: 'UsersPage',
  data: () => ({
  }),
  computed: {
    columns() {
      let columns = []
      let keys = Object.keys(schema.obj)
      keys.forEach(key => {
        columns.push({
          ...schema.obj[key],
          ...{key, type: schema.obj[key]['form']}
        })
      })
      return columns
    }
  },
}
</script>
