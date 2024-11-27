const h = Vue.h;

const app = Vue.createApp({
  data: () => ({
    title: 'Some title',
  }),
  // template: `
  //   <div class="card center">
  //     <h1>{{ title }}</h1>
  //     <button class="btn" @click="title='Title changed'">Change</button>
  //   </div>
  // `,
  methods: {
    changeTitle() {
      this.title = 'Title changed';
    },
  },
  render() {
    return h('div', { class: 'card center' }, [
      Vue.h('h1', {}, this.title),
      Vue.h('button', { class: 'btn', onclick: this.changeTitle }, 'Change'),
    ]);
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
});

app.mount('#app');

// setTimeout(() => app.unmount('#app'), 2000);
