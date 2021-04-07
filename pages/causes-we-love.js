
import GridPage from '../components/GridPage'

const content = {
  title: 'Causes We Love',
  description: 'Find Me a Vaccine doesn’t accept payment for the work we do. If you’re feeling grateful for the Find Me a Vaccine community and volunteers, consider making a direct donation to one of the organizations below. These nonprofits were chosen by our organizers and are near and dear to our hearts.',
  items: [
    {
      title: 'AidTheSilent',
      copy: <>
        <p>Aid the Silent is committed to advocating and supporting the deaf and hard-of-hearing community through deaf resources, deaf education, deaf ministry and deaf awareness. Their goal is to be a source of support to help and financially assist economically-disadvantaged deaf or hard-of-hearing children/teens by providing a means to acquire communication through the use of sign language, speech and hearing aids, and/or assistive communication technology, which will allow deaf/HOH children to develop.</p>
        <p><a href="https://www.aidthesilent.com/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Austin Pets Alive!',
      copy: <>
        <p>Austin Pets Alive! is not your average animal shelter. They pioneer comprehensive, innovative programs designed to save the animals most at risk for euthanasia. Their mission is to promote and provide the resources, education, and programs needed to eliminate the killing of companion animals. Their vision is that every shelter animal, in Central Texas and beyond, gets a true chance at the life they deserve.</p>
        <p><a href="https://www.austinpetsalive.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'CASA Travis County',
      copy: <>
        <p>CASA (Court Appointed Special Advocates) of Travis County believes every child who\'s been abused or neglected deserves to have a dedicated advocate speaking up for them. CASA of Travis County exists to promote and protect the best interest of these children by training volunteers to advocate for them in courts, in schools, and in our community to help them find safe, permanent, and loving homes. For every child who needs them, CASA of Travis County envisions a trained volunteer advocate, a safe home, and a promising future.</p>
        <p><a href="https://www.casatravis.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Feeding Texas',
      copy: <>
        <p>Feeding Texas leads a unified effort for a hunger-free Texas.The Feeding Texas network is the largest hunger-relief organization in Texas. Together with 21 member food banks, they reach over 5 million Texans annually with food and resources. They want to ensure adequate nutritious food for all Texans, improve the health and financial stability of the communities we serve, and engage all stakeholders in advocating for hunger solutions. Also see the Marion County Resource Center Food Bank that has been run by a small but mighty group of volunteers since 2012!</p>
        <p><a href="https://www.feedingtexas.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Lilith Fund',
      copy: <>
        <p>The Liltith Fund provides financial assistance and emotional support while building community spaces for people who need abortions in Texas—unapologetically, with compassion and conviction. Through organizing and movement-building, they foster a positive culture around abortion, strengthen people power, and fight for reproductive justice in and with our communities.</p>
        <p><a href="https://www.lilithfund.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Metrocrest Services',
      copy: <>
        <p>Metrocrest Services assists individuals living in Carrollton, Addison, Farmers Branch, Coppell and the city of Dallas in Denton County. Their focus is assisting families, individuals, and senior adults who are coping with crisis situations, need help stabilizing their lives, or who require support to live independently. Basic services include rent and utility bill aid, financial and budgeting assistance and food. They also provide employment counseling along with gas cards or bus vouchers for job-seekers and transportation, minor home repairs, and home-delivered meals benefit seniors. Seasonal distributions including school shoes and supplies for students, Sack Summer Hunger food for youngsters, and November and December holiday programs.</p>
        <p><a href="https://www.metrocrestservices.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'National Multiple Sclerosis Society',
      copy: <>
        <p>The National MS Society funds cutting-edge research, drives change through advocacy, facilitates professional education, collaborates with MS organizations around the world, and provides services designed to help people with MS and their families move their lives forward. The Society has invested more than $1 billion to advance MS research and is recognized as the catalyst for all major advancements in MS, including the first therapies for primary progressive and pediatric MS.</p>
        <p><a href="https://www.nationalmssociety.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'OutYouth',
      copy: <>
        <p>For 31 years, Out Youth has been a safe place for youth of all sexual orientations and gender identities to be themselves. Out Youth provides many programs and services that promote the educational, mental, emotional, physical and social development of LGBTQIA+ youth and their allies. All of our programs, services, and partnerships aim to provide LGBTQIA+ youth and their allies with opportunities to develop positive self-esteem, identify and cultivate peer support networks, and prepare for a successful adulthood</p>
        <p><a href="https://www.outyouth.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'The SAFE Alliance',
      copy: <>
        <p>A merger of Austin Children’s Shelter and SafePlace, The SAFE Alliance is a Central Texas nonprofit working to stop abuse for everyone. SAFE supports children, adults, and families who have experienced abuse by providing safety, stability, and healing. To more effectively put an end to child abuse, sexual assault, domestic violence, and sex trafficking, SAFE provides shelter, counseling, legal assistance, sexual assault forensic exams, a charter school, and more. In addition to direct services, SAFE works to prevent violence before it occurs through parenting assistance and education, programs that promote healthy teen relationships, and working with communities disproportionately affected by abuse. Violence and abuse are a cycle, often transferred across generations. We work to break that cycle.</p>
        <p><a href="https://www.safeaustin.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Take This',
      copy: <>
        <p>Take This is a mental health advocacy organization with a focus on the game industry and community. They provide resources, training, and support individuals and companies that help the gaming community improve its mental well-being and resilience. The organization addresses the underlying conditions that can create and perpetuate mental health challenges: stigma, harmful studio culture, harassment and toxicity, lack of diversity and accessibility, and problematic game and community design.</p>
        <p><a href="https://www.takethis.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Texas Inmate Families Association',
      copy: <>
        <p>Texas Inmate Families Association breaks the cycle of crime by strengthening families through support, education, and advocacy. About 200,000 adult men and women are incarcerated at any one time in county jails and state correctional facilities in Texas. The state has the unenviable distinction of having more individuals behind bars than any other state in the country. Left behind are family members and friends: 55 percent leave behind a spouse, and 85 percent or more leave behind a parent and/or a child. In fact, about 75 percent of male inmates and more than 95 percent of female inmates have a child younger than 18. More than half have a child younger than 10.</p>
        <p><a href="https://tifa.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Texas Rally For Life',
      copy: <>
        <p>Governor Abbot says of the event: "As adoptive parents ourselves, Cecilia and I know firsthand the weight placed on mothers facing these difficult decisions. We were present when Audrey’s birth mother decided to have her baby, went to every doctor’s appointment with her, and were there at the hospital the day Audrey was born. Protecting innocent life remains important to us because we have seen this life-changing decision in action, and we know how this decision turns vulnerability and fear into beauty and love."</p>
        <p><a href="http://www.texasrallyforlife.org/">Visit Their Cause Here</a></p>
      </>
    },
    {
      title: 'Wonders and Worries',
      copy: <>
        <p>Wonders & Worries provides free professional support for children and teenagers during a parent’s serious illness. Their experts provide the foundation that children and teenagers need to reach their full potential even though their parent is ill. Through individual and group therapy sessions, kids and teens learn about illness and build coping and communication skills. Their comprehensive programming is the only one of its kind in the US and includes in-person, virtual, and phone support.</p>
        <p><a href="https://www.wondersandworries.org/">Visit Their Cause Here</a></p>
      </>
    }
  ]
}


const CvsPharmacy = () => GridPage(content)

export default CvsPharmacy
