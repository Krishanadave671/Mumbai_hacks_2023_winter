export default function PageHeaders({
  h1Text = "Hello",
  h2Text = "Subheader",
}) {
  return (
    <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
      <h1
        className="text-xl sm:text-6xl sm:font-extrabold mb-6 mt-[-0.5em] font-poppins font-bold text-[#111131]"
        style={{ textShadow: "1px 1px 0 rgba(0,0,0,.2)" }}
      >
        {h1Text}
      </h1>
      <h2 className="text-[#5F6167] text-2xl">{h2Text}</h2>
    </section>
  );
}
