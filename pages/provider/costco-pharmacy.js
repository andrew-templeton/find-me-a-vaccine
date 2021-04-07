
import GridPage from '../../components/GridPage'

const content = {
  title: 'Costco Pharmacy',
  description: '',
  items: [
    {
      title: 'Is there a Find Me a Vaccine Slack channel for Costco?',
      copy: 'Yes! Check out #discussion-costco'
    },
    {
      title: 'What times do appointments become available for Costco?',
      copy: 'We have not been tracking Costco for long but believe that appointments are released Friday evenings between 10pm for the following week. '
    },
    {
      title: 'What do I need to book my appointment with Costco?',
      copy: <ul>
        <li>Full Name</li>
        <li>Age</li>
        <li>Eligibility details</li>
        <li>Contact info (email, phone)</li>
        <li>Address</li>
        <li>Insurance or prescription insurance information (may be requested but not required if not insured) </li>
        <li>Social Security Number (may be requested but not required not required as citizenship is not required)</li>
      </ul>
    },
    {
      title: 'What do I need to bring to my appointment at Costco?',
      copy: <ul>
        <li>Appointment information (email, QR code if applicable, text information, etc)</li>
        <li>ID</li>
        <li>Be prepared to potentially show proof of eligibility as each provider has different requirements</li>
        <li>If your appointment is for your second dose, bring your proof of vaccination card</li>
        <li>TIP:  Wearing short sleeves makes getting a shot easier and faster.</li>
      </ul>
    },
    {
      title: 'When is my second shot scheduled with Costco?',
      copy: 'For Moderna and Pfizer, Costco should schedule your second dose when you come in for your first dose appointment.'
    },
    {
      title: 'How early can I arrive at Costco for my appointment?',
      copy: 'Please arrive only 5-10 minutes before your scheduled appointment time.'
    },
    {
      title: 'Are face masks still required when I get vaccinated at Costco?',
      copy: 'Face masks are required for your vaccination appointment at any provider.'
    },
    {
      title: 'Any other tips for Costco appointments?',
      copy: 'Wearing short sleeves makes getting a shot easier and faster. When you enter the Costco location, head to the pharmacy and follow the signs for the COVID-19 vaccine.'
    },
    {
      title: 'How do I cancel my Costco appointment?',
      copy: 'To cancel a Costco appointment, please call the store directly.'
    }
  ]
}


const CostcoPharmacy = () => GridPage(content)

export default CostcoPharmacy
