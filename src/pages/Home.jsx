import Seo from '../components/Seo/Seo'
import Container from '../components/Container/Container'
import Hero from '../sections/Hero/Hero'
import TrustBar from '../sections/TrustBar/TrustBar'
import MoreThanClassroom from '../sections/MoreThanClassroom/MoreThanClassroom'
import LearningJourney from '../sections/LearningJourney/LearningJourney'
import BeyondClassroom from '../sections/BeyondClassroom/BeyondClassroom'
import ActivitiesPreview from '../sections/Activities/ActivitiesPreview'
import FinancialLiteracy from '../sections/FinancialLiteracy/FinancialLiteracy'
import GalleryPreview from '../sections/GalleryPreview/GalleryPreview'
import AdmissionsCTA from '../sections/AdmissionsCTA/AdmissionsCTA'
import Location from '../sections/Location/Location'

export default function Home() {
  return (
    <>
      <Seo
        title="Liddle Harverd Kindergarten & Prep School | Banana, Kiambu"
        description="Liddle Harverd Kindergarten & Prep School in Banana, Thimbigua, providing early childhood and preparatory education with active learning, sports, swimming, scouting and co-curricular experiences."
        path="/"
      />
      <Hero />
      <TrustBar />

      <div className="bg-white py-10 sm:py-12">
        <Container>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-slate sm:text-lg">
            Located in Banana, Thimbigua, Liddle Harverd provides a learning environment where academics
            are complemented by sports, creative experiences, excursions, scouting, cultural activities
            and practical life lessons.
          </p>
        </Container>
      </div>

      <MoreThanClassroom />
      <LearningJourney />
      <BeyondClassroom />
      <ActivitiesPreview />
      <FinancialLiteracy />
      <GalleryPreview />
      <AdmissionsCTA />
      <Location />
    </>
  )
}
