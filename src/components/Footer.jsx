
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="w-full flex justify-center items-center bg-gray-100 p-4">
      <p className="text-gray-600 text-center">
      ⓒ  Norman Mwagi {year}
      </p>
    </footer>
  )
}

export default Footer
