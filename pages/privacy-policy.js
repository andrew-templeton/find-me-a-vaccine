
import ListOfLinks from '../components/ListOfLinks'
import GridPage from '../components/GridPage'

const content = {
  title: 'Find Me a Vaccine Privacy Policy',
  description: <p style={{ textAlign: 'left' }}>Find Me a Vaccine recognizes the importance of safeguarding personal data that can be used to personally identify or contact you as an individual person ("Personal Data"). Our organization wants you to feel confident about the privacy of Personal Data you provide to Find Me a Vaccine and our volunteers when requesting help signing up for a COVID-19 vaccine appointment (the "Volunteer Services"). This Privacy Policy applies solely to information collected by Find Me a Vaccine via the "Help Request" form located at: https://findmeavaccine.com/help ("Help Request Form”). You are solely liable for the accuracy of the information you provide to Find Me a Vaccine. This Privacy Policy does not apply to any information, including Personal Data, you share on the Find Me a Vaccine Slack Group. You should not share Personal Data and other sensitive information in the Slack Group.
  </p>,
  items: [
    {
      title: 'Personal Data We Collect',
      copy: 'Find Me a Vaccine collects, processes, and retains the information you provide when filling out the Help Request Form, which may include: first and last name, email address, phone number, home address, and birth date. The Personal Data requested by Find Me a Vaccine is limited to the data types typically required by COVID-19 vaccine providers. Find Me a Vaccine does not need, and should not be provided, any Personal Data outside of the data types listed in the Help Request Form.'
    },
    {
      title: 'How We Use Personal Data',
      copy: 'Find Me a Vaccine’s use of information collected through the Help Request Form is limited to the purpose of providing the Volunteer Services. This Privacy Policy applies to you and anyone whose information you provide to Find Me a Vaccine. Find Me a Vaccine will use Personal Data only in ways required to perform the Volunteer Services. Our volunteers may also use Personal Data to contact you via telephone or email to schedule or confirm an appointment.'
    },
    {
      title: 'Reasons We Share Personal Data',
      copy: 'Find Me a Vaccine discloses Personal Data only to: (i) volunteers within our organization; and (ii) third party service providers we use to store and process your information during the provision of the Volunteer Services;(iii)verified healthcare providers administering COVID-19 vaccines; and (iv)verified entities (both public and private)directly scheduling COVID-19 vaccine appointments. Volunteers are instructed to keep Personal Data confidential at all times. Find Me a Vaccine only uses third party service providers with sufficient privacy and security policies related to Personal Data. Find Me a Vaccine and its third party service providers do not sell Personal Data obtained during the provision of the Volunteer Services to any third parties.'
    },
    {
      title: 'Retention Policy',
      copy: 'Within 30 days of your submission of the Help Request Form, or as required by applicable law, whether we have been able to find you an appointment or not, Find Me a Vaccine will delete Personal Data and remove it from all Find Me a Vaccine’ systems and records. Provided, however, Find Me a Vaccine may retain and use your information as necessary to comply with legal obligations and resolve disputes.'
    },
    {
      title: 'Disclosure Required by Law',
      copy: 'Find Me a Vaccine may cooperate with law enforcement agencies in identifying individuals who use the Volunteer Services for illegal activities. Find Me a Vaccine will, at Find Me a Vaccine\'s discretion, disclose information, including Personal Data, if Find Me a Vaccine reasonably believes that: (i) it is required to do so by law; (ii) that such disclosure is necessary to protect Find Me a Vaccine or its volunteers from legal liability; (iii) or that Find Me a Vaccine should do so to protect the integrity of the Volunteer Services.'
    },
    {
      title: 'Children\'s Privacy',
      copy: 'Find Me a Vaccine recognizes the privacy interests of children and Find Me a Vaccine encourages parents and guardians to take an active role in their children\'s online activities and interests. The Volunteer Services are not intended for children under the age of 18. Find Me a Vaccine does not target children under 18. Find Me a Vaccine does not knowingly collect Personal Data from children under the age of 18.'
    },
    {
      title: 'Disclaimer of Warranties and No Liability',
      copy: 'THE VOLUNTEER SERVICES AND ANY INFORMATION PROVIDED BY OR THROUGH THE Find Me a Vaccine WEBSITE, SLACK GROUP, OR ANY INDIVIDUAL VOLUNTEER (COLLECTIVELY, THE "RESOURCES") DO NOT CONSTITUTE PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT AND MUST NEVER BE TREATED AS SUCH. THE RESOURCES SHOULD NOT BE USED AS A REPLACEMENT OR SUBSTITUTE FOR THE MEDICAL ADVICE OF A PHYSICIAN OR TRAINED HEALTH PROFESSIONAL. THE RESOURCES ARE PROVIDED TO YOU ON AN “AS IS” BASIS. Find Me a Vaccine GIVES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. Find Me a Vaccine MAKES NO WARRANTY REGARDING THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE RESOURCES. Find Me a Vaccine DISCLAIMS ANY AND ALL LIABILITY WITH RESPECT TO ANY ACTIONS OR OMISSIONS BY YOU, INCLUDING BUT NOT LIMITED, FAILURE TO PROVIDE Find Me a Vaccine WITH COMPLETE AND ACCURATE INFORMATION OR RELIANCE ON THE RESOURCES AS MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT, AND ANY RESULTING CONSEQUENCES OF SUCH RELIANCE. Find Me a Vaccine, ITS VOLUNTEERS AND THIRD PARTY SERVICE PROVIDERS, shall not be liable to you whether in tort (including negligence), contract, misrepresentation, restitution or otherwise, for any loss or damage (whether direct, indirect, consequential, etc.) arising from your use of the RESOURCES.'
    },
    {
      title: 'Contact Us',
      copy: <p><a href="mailto:hello@findmeavaccine.com">hello@findmeavaccine.com</a></p>
    }
  ]
}


const PrivacyPolicyEnglish = () => GridPage(content)

export default PrivacyPolicyEnglish
