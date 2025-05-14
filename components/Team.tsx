'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import ImageDefault from '@/public/profile.png';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type TeamMember = {
  name: string;
  nim: string; // Changed role to nim for student ID
  description: string;
  image: StaticImageData;
  social: {
    Instagram: string;
    linkedin: string;
    github: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: 'Harsena Argretya',
    nim: '2110512093', // Added NIM instead of role
    description: 'Mahasiswa Ilmu Komputer Universitas Indonesia',
    image: ImageDefault,
    social: {
      Instagram: 'https://www.instagram.com/argretya',
      linkedin: 'https://www.linkedin.com/in/harsenaargretya/',
      github: 'https://github.com/Anezz12',
    },
  },
  {
    name: 'Muhamad Akbar Algifahri',
    nim: '2110512094', // Added NIM instead of role
    description: 'Mahasiswa Ilmu Komputer Universitas Indonesia',
    image: ImageDefault,
    social: {
      Instagram: 'https://www.instagram.com/akbar.algifahri',
      linkedin: 'https://www.linkedin.com/in/akbaralgifahri',
      github: 'https://github.com/Bareeezanra',
    },
  },
  {
    name: 'Dody Pramansyah Sianipar',
    nim: '2110512095', // Added NIM instead of role
    description: 'Mahasiswa Ilmu Komputer Universitas Indonesia',
    image: ImageDefault,
    social: {
      Instagram: 'https://www.instagram.com/dody.sianipar04',
      linkedin: 'http://www.linkedin.com/in/dody-pramansyah-sianipar',
      github: 'https://github.com/Dodayyy',
    },
  },
  {
    name: 'Abigael Haidar Cyayyidina Avianto',
    nim: '2110512096', // Added NIM instead of role
    description: 'Mahasiswa Ilmu Komputer Universitas Indonesia',
    image: ImageDefault,
    social: {
      Instagram:
        'https://www.instagram.com/abigael_haidar/profilecard/?igsh=eTdzMzl4MG1zbGxp',
      linkedin: 'https://www.linkedin.com/in/abigael-haidar-29639a147/',
      github: 'https://github.com/abigaelhaidar',
    },
  },
];

interface SocialIconProps {
  type: 'Instagram' | 'linkedin' | 'github';
  url: string;
}

const SocialIcon = ({ type, url }: SocialIconProps) => {
  const icons = {
    Instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
  };
  const Icon = icons[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <Icon className="w-4 h-4 text-fern-green-500" />
    </a>
  );
};

export default function OurTeam() {
  return (
    <>
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-4xl font-bold text-center md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fern-green-600 to-fern-green-400">
              Tim Digital Business
            </h2>
            <p className="max-w-xl mx-auto text-center text-gray-600 text-lg">
              Perkenalkan tim kami yang mengerjakan project Digital Business -
              Cheerslabs
            </p>
          </motion.div>
        </div>
      </section>

      <section id="team-boxes" className="-mt-32">
        <div className="relative flex flex-wrap justify-center max-w-7xl mx-auto gap-8 px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              whileInView={'animate'}
              initial="initial"
              className="flex flex-col w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover ring-4 ring-fern-green-100 group-hover:ring-fern-green-200 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <SocialIcon
                      type="Instagram"
                      url={member.social.Instagram}
                    />
                    <SocialIcon type="linkedin" url={member.social.linkedin} />
                    <SocialIcon type="github" url={member.social.github} />
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h5>
                  <p className="text-fern-green-500 font-medium mb-4">
                    NIM: {member.nim}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
