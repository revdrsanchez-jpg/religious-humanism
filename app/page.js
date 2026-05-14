import React from 'react';

export default function LandingPage() {
  const tenants = [
    { title: "The Supreme Being", desc: "A formless, genderless creator that is everything and within everything." },
    { title: "Universal Equality", desc: "All life—from humans and animals to soil, stars, and fire—is created equal and deserves respect." },
    { title: "Intellectual Stewardship", desc: "Humanity is ordained with higher intellect to act as the protectors of all other life forms." },
    { title: "Evolution of Essence", desc: "Life is a journey of reincarnation toward eventual absorption back into the Supreme Essence." },
    { title: "Direct Connection", desc: "We are made of the same essence as the Creator; no conduit or intermediary is required to speak to the Divine." },
    { title: "Bodily Power", desc: "The human body and brain contain untapped powers meant to experience the Creator's essence fully." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-teal-100">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
          Religious Humanism
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto italic">
          "The electric pulse within us is the essence breathed at birth."
        </p>
      </header>

      {/* Main Description */}
      <section className="max-w-4xl mx-auto py-16 px-6 leading-relaxed">
        <h2 className="text-3xl font-semibold mb-6 text-teal-800">What is Religious Humanism?</h2>
        <div className="space-y-6 text-lg text-slate-700">
          <p>
            Religious Humanism is the belief in one Supreme Being—a creator without body, male nor female, 
            existing as the very fabric of everything that is. We believe that all life is created equally. 
            This respect extends beyond humanity to the animals, the vegetation, the air, the water, and 
            the very soil beneath us.
          </p>
          <p>
            As a life form granted higher intellect, humanity bears the duty of <strong>Guardian</strong>. 
            We are charged with protecting and respecting the cosmos and every cellular, mineral, and 
            energetic entity within it, from the smallest bug to the heat of the lava.
          </p>
        </div>
      </section>

      {/* Core Tenants Grid */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-teal-900">The Core Tenants</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenants.map((tenant, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-teal-400 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-teal-700">{tenant.title}</h3>
                <p className="text-slate-600">{tenant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Ethical Framework */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-teal-900 text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">The Path of the Guardian</h2>
          <ul className="list-disc pl-6 space-y-4 text-teal-50">
            <li><strong>Non-Judgment:</strong> We do not judge based on sex, race, age, orientation, or belief.</li>
            <li><strong>Survival with Gratitude:</strong> We understand the necessity of consumption but perform it with ultimate respect for the life taken.</li>
            <li><strong>The Law of Man:</strong> We believe in obeying societal laws and the value of community, while respecting the individual's choice for solitude.</li>
            <li><strong>Life & Choice:</strong> We believe the choice to bring life into the world belongs solely to the individual. Human life begins when the anatomy is fully functional and ready to perform its role as a guardian.</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 border-t border-slate-200">
        <p>© {new Date().getFullYear()} Religious Humanism App</p>
      </footer>
    </div>
  );
}
