import type { Metadata } from 'next';
import { Inter, Roboto, Noto_Sans_Gujarati } from 'next/font/google';
import './globals.css';
import AudioPlayer from '@/components/AudioPlayer';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati'],
  variable: '--font-gujarati',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'જય શ્રી વડવાળા ધામ મદ્રીસણા | Vadwala Dham Madrisana Temple',
  description: 'Experience divine blessings at Vadwala Dham Madrisana. Temple darshan timings, history, photo gallery, videos, and donation information. Join our spiritual community.',
  keywords: [
    // General Keywords
    'Madrisana village Gujarat', 'Madrisana 382145', 'Detroj Rampura Taluka', 'Ahmedabad district villages',
    'Madrisana Gram Panchayat', 'Kadi nearest town', 'Madrisana postal code', 'Madrisana location map',
    'Madrisana demographics', 'Madrisana population 2011',
    
    // Religious & Spiritual Keywords
    'Vadwala Dham Madrisana', 'Viram Swami Maharaj temple', 'Rupa Tekri Mandir', 'Panchamrut Mahotsav Madrisana',
    'Rabari Samaj Gurugadi', 'Shri Vadwala Dev Mandir', 'Madrisana temple darshan', 'Madrisana spiritual tourism',
    'Madrisana religious events', 'Madrisana temple history',
    
    // Community & Cultural Keywords
    'Rabari community Madrisana', 'Devang Desai Madrisana', 'Devang Rabari Gujarat', 'Madrisana cultural heritage',
    'Madrisana local festivals', 'Madrisana traditional events', 'Madrisana community gatherings',
    'Madrisana folk traditions', 'Madrisana village lifestyle', 'Madrisana social customs',
    
    // Geographic & Nearby Locations
    'Nearby villages to Madrisana', 'Ghelda village proximity', 'Abasna near Madrisana', 'Dangarva neighboring village',
    'Bhonyni adjacent village', 'Nathpura close to Madrisana', 'Madrisana to Ahmedabad distance',
    'Madrisana to Gandhinagar route', 'Madrisana transportation options', 'Madrisana regional connectivity',
    
    // Infrastructure & Amenities
    'Madrisana village infrastructure', 'Madrisana educational facilities', 'Madrisana healthcare services',
    'Madrisana electricity supply', 'Madrisana water resources', 'Madrisana road connectivity',
    'Madrisana public transport', 'Madrisana communication networks', 'Madrisana development projects',
    'Madrisana local governance',
    
    // Prominent Rabari Religious Sites
    'Vadwala Mandir, Dudhrej, Surendranagar, Gujarat', 'Valinath Mahadev Temple, Tarabh, Mehsana, Gujarat',
    'Pirana Imamshah Baba Satpanth Mandir, Ahmedabad, Gujarat', 'Sikotar Mata Mandir, Kimbuva, Patan, Gujarat',
    'Momai Mata Temples in Loej, Balej, Dari & Sidokar, Gujarat', 'Goga Maharaj Mandir, Kasva & Unava, Gujarat',
    'Chamunda Mata Mandir, Chotila, Gujarat', 'Dwarkadheesh Krishna Mandir, Dwarka, Gujarat',
    'Khodiyar Mata Temple, Bhavnagar, Gujarat', 'Ravechi Mata Temple, Rapar, Kutch, Gujarat',
    'Sundha Mata Temple, Bhinmal, Jalore, Rajasthan', 'Ram Raika Mandir, Pushkar, Ajmer, Rajasthan',
    'Jeteshwar Dham, Sindhari, Barmer, Rajasthan', 'Sarneshwar Mahadev Mandir, Sirohi, Rajasthan',
    'Veer Ratna Raika Temple, Viramdevara, Jaisalmer, Rajasthan', 'Baba Rupnath Ji Maharaj Dham, Banka Dungra, Alwar, Rajasthan',
    'Sire Mandir, Sant Yogi Jalandharnath Akhada, Jalore, Rajasthan', 'Gogamedi Temple, Hanumangarh, Rajasthan',
    'Vadwala Mandir, Tintoda, Ahmedabad, Gujarat', 'Vadwala Mandir, Chaveli, Patan, Gujarat',
    'Valinath Akhada, Near Visnagar, Mehsana, Gujarat', 'Baba Mastnath Asthal Bohar Dham, Rohtak, Haryana',
    'Shree Raikanath Ji Ki Samadhi, Swap, Phalodi, Jodhpur, Rajasthan', 'Baba Ramdev Ji Ramdevra, Pokhran, Jaisalmer, Rajasthan',
    'Veer Goga Ji Gogamedi, Nohar, Hanumangarh, Rajasthan', 'Veer Pabu Ji Mandir, Kolumand, Jodhpur, Rajasthan',
    'Ambaji Mata Temple, Banaskantha, Gujarat', 'Mogal Mata Temple, Kabrau, Kutch, Gujarat',
    'Dhrang Village, Kutch, Gujarat', 'Pathaji Pir Dargah, Mindiyala Village, Kutch, Gujarat',
    'Chitra Vichitra Fair, Near Poshina, Sabarkantha, Gujarat', 'Tarnetar Fair, Surendranagar, Gujarat',
    'Momai Mata Temple, Moragadh, Gujarat', 'Ban Mata Temples, Various Locations in Gujarat',
    
    // Major Temples of Baba Ramdevji
    'Ramdevra Temple, Ramdevra (Runicha), Jaisalmer, Rajasthan', 'Ramapir Temple, Tando Allahyar, Sindh, Pakistan',
    'Ramdevji Temple, Maninagar, Ahmedabad, Gujarat', 'Ramdev Pir Temple, Virpur, Rajkot, Gujarat',
    'Ramdevji Temple, Bhuj, Kutch, Gujarat', 'Ramdev Pir Temple, Mandvi, Kutch, Gujarat',
    'Ramdevji Temple, Jamnagar, Gujarat', 'Ramdev Pir Temple, Porbandar, Gujarat',
    'Ramdevji Temple, Bhavnagar, Gujarat', 'Ramdev Pir Temple, Surendranagar, Gujarat',
    'Ramdevji Temple, Mehsana, Gujarat', 'Ramdev Pir Temple, Palanpur, Gujarat',
    'Ramdevji Temple, Patan, Gujarat', 'Ramdev Pir Temple, Vadodara, Gujarat',
    'Ramdevji Temple, Surat, Gujarat', 'Ramdev Pir Temple, Valsad, Gujarat',
    'Ramdevji Temple, Navsari, Gujarat', 'Ramdev Pir Temple, Bharuch, Gujarat',
    'Ramdevji Temple, Anand, Gujarat', 'Ramdev Pir Temple, Nadiad, Gujarat',
    'Ramdevji Temple, Godhra, Gujarat', 'Ramdev Pir Temple, Dahod, Gujarat',
    'Ramdevji Temple, Rajpipla, Gujarat', 'Ramdev Pir Temple, Junagadh, Gujarat',
    'Ramdevji Temple, Amreli, Gujarat', 'Ramdev Pir Temple, Botad, Gujarat',
    'Ramdevji Temple, Bhilwara, Rajasthan', 'Ramdev Pir Temple, Udaipur, Rajasthan',
    'Ramdevji Temple, Jaipur, Rajasthan', 'Ramdev Pir Temple, Jodhpur, Rajasthan',
    'Ramdevji Temple, Bikaner, Rajasthan', 'Ramdev Pir Temple, Ajmer, Rajasthan',
    'Ramdevji Temple, Kota, Rajasthan', 'Ramdev Pir Temple, Alwar, Rajasthan',
    'Ramdevji Temple, Bharatpur, Rajasthan', 'Ramdev Pir Temple, Sikar, Rajasthan',
    'Ramdevji Temple, Churu, Rajasthan', 'Ramdev Pir Temple, Jhunjhunu, Rajasthan',
    'Ramdevji Temple, Nagaur, Rajasthan', 'Ramdev Pir Temple, Pali, Rajasthan',
    'Ramdevji Temple, Barmer, Rajasthan', 'Ramdev Pir Temple, Jalore, Rajasthan',
    'Ramdevji Temple, Sirohi, Rajasthan', 'Ramdev Pir Temple, Dungarpur, Rajasthan',
    'Ramdevji Temple, Banswara, Rajasthan', 'Ramdev Pir Temple, Pratapgarh, Rajasthan',
    'Ramdevji Temple, Chittorgarh, Rajasthan', 'Ramdev Pir Temple, Bhilwara, Rajasthan',
    'Ramdevji Temple, Tonk, Rajasthan', 'Ramdev Pir Temple, Bundi, Rajasthan',
    
    // Personal & Professional Identity
    'Devang Desai', 'Devang Rabari', 'Devang Madrisana', 'Desai Devang Visabhai',
    'Rabari Devang Visabhai', 'Devang Desai BCA-MCA', 'Devang Desai Ganpat University',
    'Devang Desai Ahmedabad', 'Devang Desai Gujarat', 'Devang Desai India',
    
    // Contact Information
    'Devang Desai +91 6354663206', 'Devang Desai phone number', 'Devang Desai contact',
    'Devang Desai email', '1desaidevang@gmail.com', 'Devang Desai LinkedIn',
    'https://www.linkedin.com/in/devang-desai-890267348/', 'Devang Desai social media',
    'Devang Desai online profile', 'Devang Desai professional network',
    
    // Technical Skills
    'Devang Desai Java Developer', 'Devang Desai Android Developer', 'Devang Desai Spring Boot',
    'Devang Desai React.js', 'Devang Desai Next.js', 'Devang Desai Node.js',
    'Devang Desai TypeScript', 'Devang Desai MongoDB', 'Devang Desai PostgreSQL',
    'Devang Desai AWS', 'Devang Desai Docker', 'Devang Desai Kubernetes',
    'Devang Desai JavaScript', 'Devang Desai Firebase', 'Devang Desai Full Stack Developer',
    'Devang Desai Software Engineer', 'Devang Desai Web Developer', 'Devang Desai Mobile App Developer',
    'Devang Desai Cloud Computing', 'Devang Desai DevOps',
    
    // Association with Vadwala Dham
    'Vadwala Dham Madrisana', 'Vadwala Dham Temple', 'Vadwala Dham Madrisana Temple',
    'Vadwala Dham Gujarat', 'Vadwala Dham Ahmedabad', 'Vadwala Dham 382145',
    'Vadwala Dham official website', 'Vadwala Dham Madrisana history',
    'Vadwala Dham Madrisana photos', 'Vadwala Dham Madrisana videos',
    'Vadwala Dham Madrisana donation', 'Vadwala Dham Madrisana events',
    'Vadwala Dham Madrisana darshan timings', 'Vadwala Dham Madrisana contact',
    'Vadwala Dham Madrisana address', 'Vadwala Dham Madrisana map',
    'Vadwala Dham Madrisana directions', 'Vadwala Dham Madrisana reviews',
    'Vadwala Dham Madrisana testimonials', 'Vadwala Dham Madrisana gallery',
    
    // Community & Cultural Associations
    'Rabari community Gujarat', 'Rabari community Ahmedabad', 'Rabari community India',
    'Rabari culture', 'Rabari traditions', 'Rabari festivals',
    'Rabari temples', 'Rabari history', 'Rabari heritage',
    'Rabari society', 'Rabari customs', 'Rabari rituals',
    'Rabari language', 'Rabari attire', 'Rabari music',
    'Rabari dance', 'Rabari art', 'Rabari crafts',
    'Rabari cuisine', 'Rabari folklore',
    
    // Educational Background
    'Ganpat University alumni', 'Ganpat University BCA', 'Ganpat University MCA',
    'Ganpat University Gujarat', 'Ganpat University Ahmedabad',
    
    // Additional Keywords
    'talimrojgar.gujarat.gov.in', 'facebook.com', 'vadwaladhammadrisana.in',
    'instagram.com', 'cricheroes.com', 'ashokrabari.blogspot.com'
  ].join(', '),
  authors: [{ name: 'Vadwala Dham Madrisana' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://vadwaladhammadrisana.in/',
    title: 'જય શ્રી વડવાળા ધામ મદ્રીસણા | Vadwala Dham Madrisana Temple',
    description: 'શ્રદ્ધાળુઓ માટે ભક્તિભેર સ્થાન – વડવાળા ધામ મદ્રીસણા. દર્શન સમય, મંદિર ઇતિહાસ, ફોટા ગેલેરી, વિડિઓઝ અને દાનની માહિતી મેળવવા માટે અમારું પેજ મુલાકાત લો. || Discover divine peace and history at Vadwala Dham Madrisana – timings, gallery, videos & donation info.',
    images: 'https://vadwaladhammadrisana.in/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://vadwaladhammadrisana.in/',
    title: 'જય શ્રી વડવાળા ધામ મદ્રીસણા | Vadwala Dham Madrisana Temple',
    description: 'શ્રદ્ધાળુઓ માટે ભક્તિભેર સ્થાન – વડવાળા ધામ મદ્રીસણા. દર્શન સમય, મંદિર ઇતિહાસ, ફોટા ગેલેરી, વિડિઓઝ અને દાનની માહિતી મેળવવા માટે અમારું પેજ મુલાકાત લો. || Discover divine peace and history at Vadwala Dham Madrisana – timings, gallery, videos & donation info.',
    images: 'https://vadwaladhammadrisana.in/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://vadwaladhammadrisana.in/" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3BZL4FDKKZ" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3BZL4FDKKZ');
          `}
        </Script>
        
        {/* Google Ads */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6483878634398294" crossOrigin="anonymous" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HinduTemple",
            "name": "જય શ્રી વડવાળા ધામ મદ્રીસણા",
            "description": "Spiritual temple dedicated to Virum Swami Maharaj in Madrisana, Gujarat",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madrisana",
              "addressLocality": "Gujarat",
              "postalCode": "382145",
              "addressCountry": "IN"
            },
            "telephone": "+916354663206",
            "openingHours": "Mo-Su 06:00-12:00,15:00-20:30",
            "image": "https://vadwaladhammadrisana.in/logo.png",
            "url": "https://vadwaladhammadrisana.in/"
          })}
        </script>
      </head>
      <body className={`${notoSansGujarati.variable} ${roboto.variable} ${inter.variable} font-sans antialiased text-gray-800`}>
        <AudioPlayer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}