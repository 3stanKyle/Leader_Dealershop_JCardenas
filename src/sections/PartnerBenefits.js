import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './PartnerBenefits.css'

const benefits = [
  {
    title: 'Local Stock',
    description: 'Swift Delivery Guaranteed: Local Stock Across 5 States',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/warehouse-96.png',
    cta: 'See Locations',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Fast Dropship',
    description: 'Delivering Speed and Convenience Where and When You Need It',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/fast-delivery-96.png',
    cta: 'Learn More',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Support Helpdesk',
    description: '8×5 Phone, Email, and Remote Assistance, All at No Cost',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/helpdesk-96.png',
    cta: 'Get Support',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Training & Enablement',
    description: 'Empower Yourself with Free Online Training at Leader Academy',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/academy-96.png',
    cta: 'Start Learning',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Marketing Tools',
    description: 'Boost Your Efficiency and Sales with Free Marketing Tools!',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/marketing-96.png',
    cta: 'Marketing Portal',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: '71+ Vendors',
    description: 'Including Microsoft, Lenovo, Intel, Ubiquiti, and Many More!',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/vendor-96.png',
    cta: 'Discover Our Vendors',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Personal Sales',
    description: 'Your Dedicated Local Account Manager with In-depth Knowledge',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/sales-manager-96.png',
    cta: 'Contact Sales',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
  {
    title: 'Leader Expo',
    description: 'Elevate Your Expertise with Our Complimentary National Expo',
    icon: 'https://newsabalita.wordpress.com/wp-content/uploads/2024/09/expo-96.png',
    cta: 'View Schedules',
    bgImage: '/placeholder.svg?height=320&width=240',
  },
]

const BenefitCard = ({ benefit }) => (
  <div className="benefit-card" style={{ backgroundImage: `url(${benefit.bgImage})` }}>
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