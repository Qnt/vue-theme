const App = {
  data() {
    return {
      title: 'Note List',
      placeholderString: 'Enter note name',
      inputValue: '',
      notes: [
        { id: 1, text: 'Note #1' },
        { id: 2, text: 'Note #2' },
      ],
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue) {
        this.notes.push({ id: this.notes.length + 1, text: this.inputValue });
        this.inputValue = '';
      }
    },
    deleteNote(id) {
      this.notes = this.notes.filter(n => n.id !== id);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
      console.log('InputValue changed', value);
    },
  },
};

Vue.createApp(App).mount('#app');
