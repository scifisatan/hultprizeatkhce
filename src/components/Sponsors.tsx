
interface Sponsor {
  name: string
  logo: string
  title: string
  url: string
}

export default function SponsorsSection() {
  const featuredSponsor: Sponsor = {
    name: 'Broadway Infosys',
    logo: '/sponsors/broadwayinfosys.png',
    title: 'Training Partner',
    url: 'https://broadwayinfosys.com/'
  }

  const sponsors: Sponsor[] = [
    { name: 'Programiz', logo: '/sponsors/programiz.png', title: 'Knowledge Partner', url: 'https://www.programiz.com/' },
    { name: 'Stable Cluster', logo: '/sponsors/stablecluster.png', title: 'Hosting Partner', url: 'https://stablecluster.com/' },
    { name: 'Eco Saathi Nepal', logo: '/sponsors/ecosathi.jpg', title: 'Sustainability Partner', url: 'https://www.instagram.com/ecosathi_nepal/' },
    { name: 'Handmade By Kar.ma', logo: '/sponsors/karma.png', title: 'Artisan Partner', url: 'https://karmacoffee.com.np/' },
    { name: 'Royal Hemp', logo: '/sponsors/royalhemp.jpg', title: 'Gifting Partner', url: 'https://royalhempnepal.com/' },
    { name: 'Sky Nepal', logo: '/sponsors/skynepal.jpg', title: 'Technology Partner', url: 'https://www.skynepal.com.np/' },
    { name: 'HashOne', logo: '/sponsors/hashone.jpg', title: 'Outdoor Partner', url: 'https://hashoneadventures.com/' },
    { name: 'Engineering Patrika', logo: '/sponsors/engineeringpatrika.png', title: 'Media Partner', url: 'https://engineeringpatrika.com/' },
]

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Partners
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We're proud to be supported by these amazing partners
          </p>
        </div>

        {/* Featured Sponsor */}
        
          <a href={featuredSponsor.url}  className="block mt-12 bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-8">
                  <img
                    src={featuredSponsor.logo}
                    alt={`${featuredSponsor.name} logo`}
                    width={360}
                    height={160}
                    className="max-h-32 object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {featuredSponsor.name}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {featuredSponsor.title}
                  </p>
                </div>
              </div>
            </div>
          </a>
       

        {/* Other Sponsors */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            
              <a href={sponsor.url} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className="p-6">
                  <div className="flex justify-center items-center h-24 mb-4">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={180}
                      height={80}
                      className="max-h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {sponsor.title}
                  </p>
                </div>
              </a>
         
          ))}
        </div>
      </div>
    </section>
  )
}

