
import GridPage from '../components/GridPage'
import ListOfLinks from '../components/ListOfLinks'

const content = {
  title: 'Resources',
  description: 'Other government and private sector resources to learn more about COVID-19, vaccines, and the vaccination effort',
  items: [
    {
      title: 'Texas Government Resources',
      copy: ListOfLinks([
        ['Coronavirus', 'https://gov.texas.gov/coronavirus'],
        ['Vaccine Information', 'https://www.dshs.texas.gov/coronavirus/immunize/vaccine.aspx']
      ])
    },
    {
      title: 'Texas Health Departments',
      copy: ListOfLinks([
        ['Austin', 'https://www.austintexas.gov/covid19-vaccine'],
        ['Dallas', 'https://www.dallascounty.org/covid-19/covid-19-vaccination.php'],
        ['San Antonio', 'https://covid19.sanantonio.gov/Home'],
        ['Houston', 'https://houstonemergency.org/covid-19-vaccines/'],
        ['Corpus Christi', 'https://www.cctexas.com/vaccineregistration'],
        ['Fort Worth', 'https://www.tarrantcounty.com/en/public-health/disease-control---prevention/COVID-19/COVID-19-Vaccine.html'],
        ['El Paso', 'https://www.elpasocountyhealth.org/covid-19-vaccine'],
        ['Galveston', 'https://www.gchd.org/about-us/news-and-events/coronavirus-disease-2019-covid-19/covid-19-vaccines/-fsiteid-1'],
        ['City of Texas', 'http://www.texas-city-tx.org/page/Covid-home'],
        ['Brownsville', 'https://www.cob.us/2066/Coronavirus-Updates'],
        ['Port Arthur', 'https://www.portarthurtx.gov/532/COVID-19-Information'],
        ['Lubbock', 'https://ci.lubbock.tx.us/departments/health-department/about-us/coronavirus-disease-2019-covid-19']
      ])
    },
    {
      title: 'Center For Disease Control manufacturer information on vaccines',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html',
      newPage: true
    },
    {
      title: 'Pfizer, Inc., and BioNTech',
      copy: ListOfLinks([
        ['CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Pfizer-BioNTech.html'],
        ['FDA', 'https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/pfizer-biontech-covid-19-vaccine'],
        ['Pfizer', 'https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-achieve-first-authorization-world']
      ])
    },
    {
      title: 'ModernaTX, Inc.',
      copy: ListOfLinks([
        ['CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/Moderna.html'],
        ['FDA', 'https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/moderna-covid-19-vaccine'],
        ['Modera', 'https://www.modernatx.com/covid19vaccine-eua/providers/about-vaccine']
      ])
    },
    {
      title: 'Janssen Pharmaceuticals Companies of Johnson & Johnson',
      copy: ListOfLinks([
        ['CDC', 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/janssen.html'],
        ['FDA', 'https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/janssen-covid-19-vaccine'],
        ['J&J',  'https://www.jnj.com/johnson-johnson-covid-19-vaccine-authorized-by-u-s-fda-for-emergency-usefirst-single-shot-vaccine-in-fight-against-global-pandemic']
      ])
    },
    {
      title: 'How well do vaccines work?',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/effectiveness/how-they-work.html',
      newPage: true
    },
    {
      title: 'When should I get my second dose?',
      copy: 'Please work directly with your vaccine provider on the correct timing of your 2nd dose.'
    },
    {
      title: 'Can your team help me with some medical questions I have?',
      copy: 'Our volunteers do not and should not offer medical advice. Please also beware of any advice given by the community, medical and otherwise. Always seek medical advice from trusted and verified sources.'
    },
    {
      title: 'Pharmacy / Provider Links:',
      copy: ListOfLinks([
        ['CVS', 'https://www.cvs.com/immunizations/covid-19-vaccine'],
        ['H-E-B', 'https://vaccine.H-E-B.com/'],
        ['UT Health', 'https://uthealthaustin.org/patient-resources/covid-19-updates/covid-19-vaccination'],
        ['Walmart', 'https://www.walmart.com/cp/flu-shots-immunizations/1228302'],
        ['Walgreens', 'https://www.walgreens.com/topic/promotion/covid-vaccine.jsp'],
        ['Randalls', 'https://www.randalls.com/pharmacy/covid-19.html'],
        ['Rite Aid', 'https://www.riteaid.com/pharmacy/services/vaccine-central']
      ])
    },
    {
      title: 'Information for Long Term Care facilities and caregivers',
      link: 'https://hhs.texas.gov/sites/default/files/documents/services/health/coronavirus-covid-19/ltc-covid-vaccine-options.pdf',
      newPage: true
    }
  ]
}


const Resources = () => GridPage(content)

export default Resources
