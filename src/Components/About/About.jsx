const About = () => {
  return (
    <div className="flex justify-around p-10">
      <div >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/developer-4268348-3560991.png?f=webp"
          width="3000"
          alt="dev-imag"
        />
      </div>
      <div className="flex flex-col justify-center p-10">
        <h1 className="text-3xl mb-3 font-semibold ">Introduction to React Development</h1>
        <div>
          <p className="text-xl leading-7 ">
            Hello! My name is Jayraj, and I am a passionate React developer with
            1 years of experience in building dynamic and responsive web
            applications. I specialize in creating seamless user interfaces
            using React.js, leveraging its powerful features to deliver
            high-quality, efficient, and scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
