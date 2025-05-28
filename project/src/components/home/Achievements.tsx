import logoImage from '../images/logo1.jpeg';
import logooImage from '../images/logo2.jpeg';
import logoooImage from '../images/logo3.jpeg';
import logooooImage from '../images/logo4.jpeg';

 const Achievements = () => {
  return (
   <section className="text-center py-12 bg-white">
  <h2 className="text-3xl font-bold mb-8">
    EXCELLENCE, EFFECTIVENESS AND EFFICIENCY
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-primary-500">
    <div>
      <img
        src={logoImage}
        alt="Logo 1"
        className="mx-auto h-12 mb-2 object-contain"
      />
      <div className="text-4xl font-bold mb-2">1000+</div>
      <div className="text-sm font-medium">Employees Globally</div>
    </div>
    <div>
      <img
        src={logooImage}
        alt="Logo 2"
        className="mx-auto h-12 mb-2 object-contain"
      />
      <div className="text-4xl font-bold mb-2">70+</div>
      <div className="text-sm font-medium">Countries Serviced</div>
    </div>
    <div>
      <img
        src={logoooImage}
        alt="Logo 3"
        className="mx-auto h-12 mb-2 object-contain"
      />
      <div className="text-4xl font-bold mb-2">11000+</div>
      <div className="text-sm font-medium">Projects Delivered</div>
    </div>
    <div>
      <img
        src={logooooImage}
        alt="Logo 4"
        className="mx-auto h-12 mb-2 object-contain"
      />
      <div className="text-4xl font-bold mb-2">30+</div>
      <div className="text-sm font-medium">Years of Legacy</div>
    </div>
  </div>
</section>
  );
};
export default Achievements;