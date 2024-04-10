function Footer() {
  return (
    <>
      <div className="bg-blue-600 flex flex-wrap flex-col sm:flex-row justify-center content-center px-4 sm:px-6 lg:px-8 font-medium">
        <div className="my-1 mx-2 ">
          <h2 className="text-xl font-bold">Company</h2>
          <p>About us</p>
          <p>Return Policy</p>
          <p>Delivery Methods</p>
          <p>FAQ</p>
        </div>
        <div className="my-1 mx-2">
          <h2 className="text-xl font-bold">Contacts</h2>
          <p>📞 12345678</p>
          <p>✉️ test@test.com</p>
        </div>
        <div className="my-1 mx-2">
          <h2 className="text-xl font-bold">Location:</h2>
          <p>
            Unit 03, 7/F, Millennium Trade Centre, <br />
            56 Kwai Cheong Road, Kwai Chung, NT
          </p>
        </div>
        <iframe
          className="mx-4 my-1"
          title="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.869820108395!2d114.13131213825925!3d22.363457675390126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f899dc5c5b03%3A0xee9460f1d7de935e!2z6JG15raM6JG15piM6LevNTbomZ_osr_mmJPkuYvpg70!5e0!3m2!1szh-TW!2shk!4v1712110406039!5m2!1szh-TW!2shk"
          width="200"
          height="200"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Footer;
