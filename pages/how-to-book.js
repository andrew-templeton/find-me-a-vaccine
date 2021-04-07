
import ListOfLinks from '../components/ListOfLinks'
import GridPage from '../components/GridPage'

const content = {
  title: 'How To Book',
  description: 'Information, tips, and tricks about how to get your vaccination appointment.',
  items: [
    {
      title: 'Who is eligible to receive a COVID-19 vaccine?',
      copy: <>
        <p>Though the CDC has given Federal, State, and Local government recommendations, the final eligibility decision is up to each entity. For specific information about your eligibility, please refer to your local health department.</p>
          <ul>
            <li><a target="_blank" href="https://www.cdc.gov/publichealthgateway/healthdirectories/index.html">CDC Health Department Directory</a></li>
            <li><a target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations.html">CDC Recommendations of eligibility</a></li>
        </ul>
      </>
    },
    {
      title: 'What information do I need to book an appointment?',
      copy: <>
        <p>In general, you may be asked for:</p>
        <ul>
          <li>Full name</li>
          <li>Age</li>
          <li>Eligibility details</li>
          <li>Contact info (email, phone)</li>
          <li>Address</li>
          <li>Insurance or prescription insurance information (may be requested but not required if not insured)</li>
          <li>Social Security Number (may be requested but not required not required as citizenship is not required)</li>
        </ul>
      </>
    },
    {
      title: 'What do I need to bring to my appointment?',
      copy: <ul>
        <li>Appointment information (email, QR code if applicable, text information, etc.)</li>
        <li>ID</li>
        <li>Be prepared to potentially show proof of eligibility as each provider has different requirements</li>
        <li>If your appointment is for your second dose, bring your proof of vaccination card</li>
        <li>Depending on where you receive your vaccinations, it may be worth preparing for potentially long wait times with water/snacks, a chair, and clothing to protect against weather</li>
      </ul>
    },
    {
      title: 'I saw a Google sheet on Facebook, Whatsapp, Nextdoor, etc. Can I sign up there?',
      copy: <p>Where and how you sign up for vaccination is your choice. We advise that you are very careful with where you post your personal data, who you share this information with, and how you sign up to receive your vaccine. The Texas Comptroller recently posted a link about COVID-19 related scams. <a target="_blank" href="https://comptroller.texas.gov/fraud-alert/">Read more info here</a></p>
    },
    {
      title: 'Do I need an appointment to get a vaccine?',
      copy: 'Because of high demand and eligibility requirements, most providers require appointments for COVID-19 vaccines. Please reach out the provider for specific appointment requirements.'
    },
    {
      title: 'Can I call my local pharmacy to book an appointment?',
      copy: 'Though the majority of providers have online sites to book, if you do not have access to book online, we do suggest reaching out to your doctor’s office or local pharmacy for information about booking an appointment over the phone. Please be prepared for long wait times.'
    },
    {
      title: 'How do I sign up for leftover vaccines in my area?',
      copy: 'Every provider site is different and may have different protocol for offering “leftover” shots or waste doses at the end of shifts. Please contact the provider individually for this information.'
    },
    {
      title: 'Can I book for someone else?',
      copy: 'In short, yes. Please be aware of any online terms of use when using a provider website to book for someone else.'
    },
    {
      title: 'I just started my search, what do I need to know?',
      copy: 'Don’t give up! COVID-19 vaccines are in high demand. On average it takes 5-10 dedicated attempts when appointments open to obtain a vaccine appointment. If you have a flexible schedule and reliable transportation, consider multiple days of the week and a larger search distance.. Increasing the distance you are willing to travel or being open to multiple days during the week will give you a larger pool of appointments to choose from.'
    },
    {
      title: 'How do I get a ride to an appointment?',
      copy: <>
        <p>There are a number of groups within Texas, including public transit systems, offering rides to COVID-19 vaccination appointments.</p>
        {ListOfLinks([
          ['Denton County', 'https://communityimpact.com/dallas-fort-worth/keller-roanoke-northeast-fort-worth/coro[…]free-rides-to-vaccine-appointments-at-texas-motor-speedway/'],
          ['DFW Trinity Metro', 'https://ridetrinitymetro.org/free-rides-to-covid-19-vaccination-sites/'],
          ['STAR Transit (Dallas suburbs)', 'https://www.dallasnews.com/news/2021/02/09/heres-how-some-north-texas-residents-can-get-a-free-ride-to-their-covid-19-vaccine-appointment/'],
          ['San Antonio (VIA)', 'https://news4sanantonio.com/news/local/via-metropolitan-to-offer-free-bus-rides-to-covid-19-vaccination-sites'],
          ['Lubbock Citibus', 'https://www.kcbd.com/2021/02/09/citibus-giving-rides-vaccine-clinics/'],
          ['Amarillo City Transit', 'https://www.amarillo.gov/departments/community-services/transit/fixed-route-informati[…]on/bus-route-maps-and-schedules/temporally-reduced-schedules'],
          ['Bell County', 'https://www.kwtx.com/2021/02/11/free-bus-rides-available-to-bell-county-vaccination-sites/'],
          ['Harris County (METROLift and rideshares)', 'https://www.khou.com/article/news/health/coronavirus/vaccine/need-help-getting-a-ri[…]options-available-now/285-a4c9b113-7335-40b7-96f6-59d01ae4db79'],
          ['Austin CapMetro', 'https://www.capmetro.org/news/details/2021/01/13/capital-metro-offering-free-rides-to-covid-19-vaccine-appointments'],
          ['HHS', 'https://hhs.texas.gov/services/aging/long-term-care/transportation'],
          ['Lyft', 'https://www.lyft.com/vaccine-access?utm_medium=email&utm_source=rider-email&utm_campaign=rdr-vaccine-access-launch'],
          ['Lyft/Uber', 'https://mashable.com/article/lyft-uber-vaccination-rides/']
        ])}
      </>
    },
    {
      title: 'Do I have to show proof of eligibility in Texas?',
      copy: <p>In Texas, the Department of State Health Services is leaving that up to providers. The State doesn't require any specific documentation. Ultimately, you should contact your provider about proof requirements to be prepared just in case.  For more information, <a target="_blank" href="https://dshs.texas.gov/immunize/covid19/VaccineProviderBestPractices.pdf">refer to TX DSHS's PDF on the subject</a>.</p>
    },
    {
      title: 'Do I have to live in a specific county or state to get vaccinated there?',
      copy: <p>There is no requirement of residency to be vaccinated in Texas. However, some city and county providers may prioritize users who live and work in their location. Check the <a target="_blank" href="https://www.dshs.texas.gov/coronavirus/immunize/vaccine-hubs.aspx">list of vaccine hubs</a>.</p>
    },
    {
      title: 'Do I have to show proof of U.S. citizenship to be vaccinated?',
      copy: <p>Because vaccination is a public safety issue, there are no U.S. citizenship requirements to receive a COVID-19 vaccination. <a target="_blank" href="https://www.dhs.gov/news/2021/02/01/dhs-statement-equal-access-covid-19-vaccines-and-vaccine-distribution-sites">Refer to the USDHS policy on the issue.</a></p>
    },
    {
      title: 'Whenever I go to the provider page, there are no appointments.',
      copy: <>
        <p>Vaccine appointments are in high demand. Appointments are often released at specific times for many providers, so you may need to adjust your schedule and search when the appointments appear.'</p>
        <p>Though this is not verified by the providers, we have observed these new appointment availability patterns. This is not a guarantee of drop times. Times are based on the Central Time Zone.</p>
        <ul>
          <li>CVS: Daily, 12:00am - 3:00am</li>
          <li>Walmart: Daily, 12:00am*</li>
          <li>APH: Monday, Thursday**, 5:00pm; announced on the APH Twitter account</li>
          <li>H-E-B: Daily, with no observed pattern for drop times</li>
          <li>University Health Systems: Monday - Friday, 8:00am - 10:00am, 4:00pm - 6:30pm</li>
          <li>Bell County: Sunday, 10am</li>
          <li>*Walmart appointments can be visible an hour earlier by setting your clock ahead.</li>
          <li>**APH Thursday. This has been a more recent occurrence and may not be the future pattern.</li>
        </ul>
      </>
    }
  ]
}


const HowToBook = () => GridPage(content)

export default HowToBook
