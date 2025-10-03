import React from 'react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import StudentsGridClient from './StudentsGridClient'; 
import {getLatestStudents} from '@/lib/api/students'


const HomeStudentsSection = async () => {
  const students = await getLatestStudents();
    const latestStudents = students
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  
    .slice(0, 4);

  return (
    <Container>
      <section className="py-10 px-5 me-4 mb-10">
        <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-4">Our Students</h2>

        <div className="flex justify-end mb-2 px-2">
          <Link
            href="/about/students"
            className="text-black text-sm inline-flex items-center gap-1 hover:text-[#FF7043] transition-all duration-300"
          >
            View more <IoArrowForwardCircleOutline className="text-lg" />
          </Link>
        </div>

        <StudentsGridClient students={latestStudents} />
      </section>
    </Container>
  );
};

export default HomeStudentsSection;
