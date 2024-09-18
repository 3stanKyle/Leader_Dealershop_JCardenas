import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './PartnerBenefits.css'

const benefits = [
  {
    title: 'Local Stock',
    description: 'Swift delivery guaranteed: Local stock across 5 states Australia-wide',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/warehouse-96.png',
    cta: 'See Locations',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_localstock-3.jpg',
  },
  {
    title: 'Fast Dropship',
    description: 'Delivering speed and convenience where and when you need it',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/fast-delivery-96.png',
    cta: 'Learn More',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_fastdelivery.jpg',
  },
  {
    title: 'Support Helpdesk',
    description: '8×5 phone, e-mail, and remote assistance, all for free',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/service-96.png',
    cta: 'Contact Us',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_helpdeskk.jpg',
  },
  {
    title: 'Training & Certs.',
    description: 'Empower yourself with free online training at Leader Academy',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/academy-96.png',
    cta: 'Start Learning',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_training.jpg',
  },
  {
    title: 'Marketing Tools',
    description: 'Boost your efficiency and sales with free marketing tools!',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/marketing-96.png',
    cta: 'Marketing Portal',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_marketing.jpg',
  },
  {
    title: '71+ Vendors',
    description: 'Access leading brands including Microsoft, Lenovo, Intel, Ubiquiti and more',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/vendor-96.png',
    cta: 'View Vendors',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_vendor-1.jpg',
  },
  {
    title: 'Personal Sales',
    description: 'Your dedicated local account manager with in-depth knowledge',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/sales-manager-96.png',
    cta: 'Contact Sales',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_personalsales.jpg',
  },
  {
    title: 'Leader Expo',
    description: 'Elevate your expertise with our complimentary national expo & events',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/expo-96.png',
    cta: 'View Schedules',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_expo.jpg',
  },
  {
    title: 'Data Feed',
    description: 'Streamline your business with efficient automation tools & more',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/datafeed-96.png',
    cta: 'View Dashboard',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_datafeed.jpg',
  },
  {
    title: 'PC Configurator',
    description: 'Elevate Your Expertise with Our Complimentary National Expo',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/workstation-96.png',
    cta: 'Customise PC',
    bgImage: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/benefit_pcconfig.jpg',
  },
]

const BenefitCard = ({ benefit }) => (
  <div className="benefit-card" style={{ '--bg-image': `url(${benefit.bgImage})` }}>
    <div className="benefit-card-content">
      <img src={benefit.icon} alt={`${benefit.title} icon`} className="benefit-icon" />
      <h3 className="benefit-card-title">{benefit.title}</h3>
      <p className="benefit-card-description">{benefit.description}</p>
      <button className="benefit-cta">
        {benefit.cta}
        <ArrowRight />
      </button>
    </div>
  </div>
)

export default function PartnerBenefits() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="benefit-section">
      <div className="benefit-container">
        <h2 className="benefit-title">Exclusive Partner Benefits</h2>
        <p className="benefit-subtitle">
        Leader's purpose and commitment is to help you grow your business fast and easy. We provide our partners exclusive access to an array of expanding benefits to help you be profitable.
        </p>
        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="benefit-swiper"
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <BenefitCard benefit={benefit} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        )}
        <div className="benefit-action-buttons">
          <button className="benefit-action-button benefit-action-button-primary">View Our Value</button>
          <button className="benefit-action-button benefit-action-button-secondary">
            Become a Reseller
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}