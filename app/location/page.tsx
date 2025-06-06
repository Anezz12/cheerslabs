import Link from 'next/link';

export default function LocationPage() {
  // Single location details
  const location = {
    name: 'Cheers Labs Coffee',
    address:
      'Jl. Pura No.370, Jomblangan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198',
    phone: '+62 851 6145 7365',
    email: 'contact@wmk08cheerslabs@gmail.com',
    hours: [
      { day: 'Selasa - Jumat', time: '17:00 - 23:00' },
      { day: 'Sabtu - Minggu', time: '17:00 - 23:30' },
    ],
    description:
      'Coffee shop nyaman dengan suasana yang tenang dan cozy, cocok untuk bekerja atau kumpul bersama teman.',
    facilities: [
      'Free Wi-Fi',
      'Free Parking',
      'Outdoor Seating',
      'Power Outlets',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9574854124266!2d110.3987937747393!3d-7.7943262922256675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570032c75215%3A0x88570c75a756dbac!2scheers%20labs!5e0!3m2!1sen!2sid!4v1748831215716!5m2!1sen!2sid',
  };

  return (
    <div className="bg-white ">
      {/* Hero Section */}
      <div className="bg-white relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23654321' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-[#1e3c63]">Coffee Shop</span>
            </h1>

            <div className="w-16 h-1 bg-[#1e3c63] mb-6"></div>

            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
              {`Experience the perfect cup of coffee in our cozy atmosphere. We're
              conveniently located in the heart of Yogyakarta and ready to serve
              you the finest locally-roasted coffee.`}
            </p>
          </div>
        </div>

        {/* Decorative coffee beans at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div
            className="w-full h-full bg-repeat-x opacity-25"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='32' viewBox='0 0 100 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='bean1' cx='50%25' cy='30%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23A0623A'/%3E%3Cstop offset='100%25' stop-color='%235C3520'/%3E%3C/radialGradient%3E%3CradialGradient id='bean2' cx='50%25' cy='30%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23B8704A'/%3E%3Cstop offset='100%25' stop-color='%236B4028'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(10,6)'%3E%3Cellipse cx='10' cy='10' rx='8' ry='10' fill='url(%23bean1)'/%3E%3Cpath d='M10 2C10.55 2 11 2.45 11 3V17C11 17.55 10.55 18 10 18C9.45 18 9 17.55 9 17V3C9 2.45 9.45 2 10 2Z' fill='%233D2314'/%3E%3Cellipse cx='10' cy='10' rx='3' ry='6' fill='%233D2314' opacity='0.3'/%3E%3C/g%3E%3Cg transform='translate(35,8)'%3E%3Cellipse cx='8' cy='8' rx='6' ry='8' fill='url(%23bean2)'/%3E%3Cpath d='M8 1C8.55 1 9 1.45 9 2V14C9 14.55 8.55 15 8 15C7.45 15 7 14.55 7 14V2C7 1.45 7.45 1 8 1Z' fill='%23472D1C'/%3E%3Cellipse cx='8' cy='8' rx='2.5' ry='5' fill='%23472D1C' opacity='0.4'/%3E%3C/g%3E%3Cg transform='translate(60,4)'%3E%3Cellipse cx='12' cy='12' rx='10' ry='12' fill='url(%23bean1)'/%3E%3Cpath d='M12 1C12.55 1 13 1.45 13 2V22C13 22.55 12.55 23 12 23C11.45 23 11 22.55 11 22V2C11 1.45 11.45 1 12 1Z' fill='%232B1A0F'/%3E%3Cellipse cx='12' cy='12' rx='4' ry='8' fill='%232B1A0F' opacity='0.2'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: '100px 32px',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div id="location-info" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {location.name}
              </h2>
              <p className="text-gray-600 mb-6">{location.description}</p>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">{location.address}</p>
                      <Link
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          location.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline text-sm inline-flex items-center mt-1"
                      >
                        Get Directions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Opening Hours
                      </h3>
                      {location.hours.map((schedule, index) => (
                        <div
                          key={index}
                          className="text-gray-600 flex justify-between w-64"
                        >
                          <span>{schedule.day}</span>
                          <span>{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Contact</h3>
                      <p className="text-gray-600">{location.phone}</p>
                      <p className="text-gray-600">{location.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Facilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-800 px-4 py-1 rounded-full text-sm"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div id="location-map" className="h-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[400px]">
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cheers Labs Coffee Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Come Visit Us Today!
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {` We'd love to serve you our specialty coffee and provide a cozy space
            for your work or gatherings. First-time visitors get a 10% discount
            on their first coffee!`}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`tel:${location.phone}`}
              className="bg-[#1e3c63] hover:bg-blue-900 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us
            </Link>
            <Link
              href="/menu"
              className="bg-white border-2 border-[#1e3c63] hover:bg-gray-50 text-[#1e3c63] px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
