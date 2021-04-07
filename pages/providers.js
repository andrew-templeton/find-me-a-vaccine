
import GridPage from '../components/GridPage'

const content = {
  title: 'Providers',
  description: 'Information about places you can get your shots.',
  items: [
    {
      title: 'Costco Pharmacy',
      link: '/provider/costco-pharmacy'
    },
    {
      title: 'Austin Public Health',
      link: '/provider/austin-public-health'
    },
    {
      title: 'Walmart Pharmacy',
      link: '/provider/walmart-pharmacy'
    },
    {
      title: 'CVS Pharmacy',
      link: '/provider/cvs-pharmacy'
    },
    {
      title: 'H-E-B Pharmacy',
      link: '/provider/heb-pharmacy'
    }
  ]
}


const Providers = () => GridPage(content)

export default Providers
