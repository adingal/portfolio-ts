type Experience = {
  id: number
  title: string
  position: string
  company: string
  companyLocation: string
  startDate: Date
  endDate: Date | null
}

const experiences: Experience[] = [
  {
    id: 0,
    title: 'Line Technician',
    position: 'Full-time',
    company: 'Amertron Inc.',
    companyLocation: 'Clarkfield, Pampanga',
    startDate: new Date('April 2010'),
    endDate: new Date('September 2013'),
  },
  {
    id: 1,
    title: 'Contactor SME',
    position: 'Full-time',
    company: 'Texas Instruments Inc.',
    companyLocation: 'Clarkfield, Pampanga',
    startDate: new Date('June 2014'),
    endDate: new Date('December 2019'),
  },
  {
    id: 2,
    title: 'Frontend Developer',
    position: 'Full-time',
    company: 'DottyStyle Creative',
    companyLocation: 'Sydney, Australia',
    startDate: new Date('September 2021'),
    endDate: new Date('May 2022'),
  },
  {
    id: 3,
    title: 'Frontend Developer',
    position: 'Freelance',
    company: 'eMarketMed',
    companyLocation: 'Tel Aviv-Yafo, Israel',
    startDate: new Date('October 2020'),
    endDate: null,
  },
]

export default experiences
