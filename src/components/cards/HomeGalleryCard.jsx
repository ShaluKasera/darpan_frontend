import Image from 'next/image';

const HomeGalleryCard = ({ image, title }) => {
  return (
    <div className=" rounded-lg overflow-hidden pb-5">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[80%] object-cover rounded-t-lg"
      />
      <p className="text-2xl text-center py-3 font-bold text-[#2C2C2C]">{title}</p>
      
    </div>
  );
};

export default HomeGalleryCard;
