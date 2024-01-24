const app = Vue.createApp({
  data() {
    return {
      counter: 4,
      prof: '',
      confirmedProf:''
    };
  },

  computed: {

    fullprof() {
      if (this.prof === '') {
        return '';
      } else {
        return this.prof +' ' + 'Nyagoko';
      }
    }
  },

  methods: {

    fullProf() {
      if (this.prof === '') {
        return '';
      } else {
        return this.prof +' ' + 'Nyagoko';
      }
    },

    resetProf() {
      this.prof = '';
    },

    confirmProf() {
      this.confirmedProf = this.prof;
    },

    subForm() {
      alert('submitted');
    },

    setProf(event) {
      this.prof = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    remove(num) {
      this.counter = this.counter - num;
    } 
  }
});

app.mount('#events');
