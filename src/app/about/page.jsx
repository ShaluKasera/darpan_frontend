import Container from '@/components/layout/Container';
import Image from 'next/image';
import React from 'react';

const aboutpage = () => {
  return (
    <div className="pt-[120px]">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/images/slater.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 max-w-4xl leading-tight">
            ICCHE: Empowering Underprivileged Children Through Education
          </h1>
          <p className="text-sm sm:text-md md:text-lg max-w-2xl">
            ICCHE a student's outstretch programme, an initiative by center of studies in science,technology and culture started by students of IIEST Shibpur in 2016 as an evening school under the Department ofHumanities and Social Sciences. Since, 2016 it is providing supportive environment for underprivileged children
          </p>
        </div>
      </div>

      {/* About Sections */}
      <Container>
        {/* Section 1 */}
        <div className="flex md:mx-10 mx-4  flex-col md:flex-row items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImg1.jpeg"
              alt="About ICCHE"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 md:text-lg">
              ICCHE supports underprivileged children from 1st to 10th grade with education in subjects like Math, Science, and English, taught by students from all years. Regular attendance is maintained, and students are seated by grade level. We also offer computer classes and conduct monthly tests to ensure continuous evaluation. Our focus is on the overall development of students, helping them achieve academic and personal growth. A proud achievement was when a student, Rahul Kumar, was selected for ITI last year. Each class ends with a joyful cake distribution for refreshment and celebration.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex md:mx-10 mx-4 flex-col md:flex-row-reverse items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage2.jpeg"
              alt="ICCHE Mission"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-semibold mb-4">Sports Day</p>
            <p className="text-gray-700 md:text-lg">
              ICCHE organizes Sports Day to promote both mental and physical development among students. The event includes various competitions where students compete within their age groups, ensuring fair play and excitement. Popular games include running races, spoon races, bucketball, biscuit races, and many more engaging activities. Sports Day encourages discipline, and a spirit of healthy competition among students. Winners are awarded prizes, recognizing their efforts and boosting their confidence. The event fosters joy, enthusiasm, and overall well-being, making it a memorable experience for all participants.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex md:mx-10 mx-4  flex-col md:flex-row items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage3.jpeg"
              alt="About ICCHE"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">

            <p className="text-3xl font-semibold mb-4">Drawing Competition</p>
            <p className="text-gray-700 md:text-lg">
              ICCHE organizes a Drawing Competition to encourage creativity and artistic expression among students. This event provides a platform for children to showcase their imagination through colors and sketches. Students are grouped by age, ensuring a fair and engaging competition. Various themes are given, allowing them to explore different ideas and improve their artistic skills. The best artworks are awarded prizes, motivating students to develop their talent further. This competition not only enhances creativity but also builds confidence and a sense of achievement among participants.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex md:mx-10 mx-4 flex-col md:flex-row-reverse items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage4.jpeg"
              alt="ICCHE Mission"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-semibold mb-4">Origami Competition</p>
            <p className="text-gray-700 md:text-lg">
              ICCHE organizes an Origami Competition to foster creativity, patience, and fine motor skills among students. This event allows children to explore the art of paper folding, transforming simple sheets into beautiful shapes and designs. This event brings joy and a sense of accomplishment to all participants.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex md:mx-10 mx-4  flex-col md:flex-row items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage5.jpeg"
              alt="About ICCHE"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-semibold mb-4">Clothing donation drive</p>
            <p className="text-gray-700 md:text-lg">
              ICCHE organizes clothing donation drives to support students in need by providing them with essential clothing. We collect donated clothes and distribute them to underprivileged children, ensuring they have proper attire for different seasons. This initiative helps improve their comfort, confidence, and overall well-being. Through this effort, we aim to spread kindness and create a sense of community among students. Our goal is to ensure that no child faces difficulties due to a lack of clothing.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex md:mx-10 mx-4 flex-col md:flex-row-reverse items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage6.jpeg"
              alt="ICCHE Mission"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-semibold mb-4">Festive Celebrations & Patriotism
            </p>
            <p className="text-gray-700 md:text-lg">
              CCHE celebrates festivals and national events with students to foster joy, unity, and cultural awareness. We organize special programs for Holi, Raksha Bandhan, Independence Day, and Republic Day, where students actively participate in various activities. During Holi, children enjoy playing with organic colors, symbolizing happiness and togetherness. On Raksha Bandhan, they exchange handmade rakhis, promoting love and bonding. Independence Day and Republic Day are marked with flag hoisting, patriotic songs, and speeches, instilling a sense of national pride. These celebrations create a joyful learning environment and help students appreciate traditions and values.
            </p>
          </div>
        </div>
        {/* Section 7 */}
        <div className="flex md:mx-10 mx-4  flex-col md:flex-row items-center gap-8 my-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/aboutImage7.jpeg"
              alt="About ICCHE"
              width={550}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-semibold mb-4">The Pillars of ICCHE</p>
            <p className="text-gray-700 md:text-lg">
              ICCHE is driven by the dedication of volunteers, who are college students from various academic years. These passionate individuals not only teach subjects like Math, Science, and English but also guide students in developing good manners, discipline, and social values. Volunteers play a crucial role in shaping the future of underprivileged children by providing them with knowledge, mentorship, and emotional support. Their selfless efforts help create a nurturing learning environment where every child feels valued and encouraged to grow. These volunteers are the true pillars of our society, working tirelessly to bring positive change and empower the next generation.
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default aboutpage;
