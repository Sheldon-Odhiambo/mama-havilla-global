export default function Donate() {
  return (
    <section id="donate" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-12">Support Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Bank Donation</h3>
            <p className="text-gray-600">Account: XXX-XXX-XXX</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-bold text-lg mb-4">M-Pesa Donation</h3>
            <p className="text-gray-600">Paybill: XXXXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
