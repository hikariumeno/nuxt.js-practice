import MyLogo from '../components/Logo'

export default {
  title: 'Components/Logo',
}

export const Visible = () => ({
  components: { MyLogo },
  template: '<my-logo />',
})
