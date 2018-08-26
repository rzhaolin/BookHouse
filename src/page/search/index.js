export default {
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        '123',
        'Peanut',
        'Other'
      ]
    }
  },
  computed: {
    filterResult () {
      debugger
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  },
  methods: {
    submit () {
      debugger
      alert(this.value)
    }
  }
}
